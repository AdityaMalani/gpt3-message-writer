import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const basePromptPrefix = "Write an email to you userInputTo. Convey the following points in the email - userInputContent. Include necessary greetings, appreciations and other emotions. Finally give a subject for the email.";
const generateAction = async (req, res) => {
  // Run first prompt
  let newPrompt = basePromptPrefix.replace('userInputTo', req.body.userInputTo)
  newPrompt = newPrompt.replace('userInputContent', req.body.userInputContent)

  const baseCompletion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${newPrompt}`,
    temperature: 0.5,
    max_tokens: 200,
  });
  
  const basePromptOutput = baseCompletion.data.choices.pop();

  res.status(200).json({ output: basePromptOutput });
};

export default generateAction;