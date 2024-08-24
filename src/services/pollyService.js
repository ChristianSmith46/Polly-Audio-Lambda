const { PollyClient, StartSpeechSynthesisTaskCommand } = require("@aws-sdk/client-polly");

const pollyClient = new PollyClient({ region: process.env.AWS_REGION });

module.exports.generatePollyAudio = async (uuid, ssml, voice) => {
    const params = {
        Engine: "neural",
        LanguageCode: "en-US",
        OutputFormat: "mp3",
        OutputS3BucketName: process.env.TIKTOK_BUCKET_NAME,
        TextType: "ssml",
        Text: ssml,
        VoiceId: voice,
    };
    console.log('Calling polly service', uuid);
    const command = new StartSpeechSynthesisTaskCommand(params);
    const response = await pollyClient.send(command);
    return response.SynthesisTask;
};