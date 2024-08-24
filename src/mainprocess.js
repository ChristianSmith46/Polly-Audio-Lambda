const { updateItem } = require("./services/dynamoService");
const { generatePollyAudio } = require("./services/pollyService");

module.exports.generateAudioFile = async(correlationId, ssml, voice) => {
    console.log("Start Polly Task");
    const pollyResponse = await generatePollyAudio(correlationId, ssml, voice);

    if (pollyResponse.TaskStatus !== 'failed') {
        console.log("Updating dynamo with taskId");
        const taskId = pollyResponse.TaskId;
    await updateItem(process.env.DYNAMODB_TABLE_NAME, correlationId, taskId);
        return {
            error: false,
            message: 'Audio file generated successfully',
            audioFile: pollyResponse.OutputUri,
            correlationId: correlationId,
        };
    }
    return {
        error: true,
        message: 'Error generating audio file',
        correlationId: correlationId,
    }

};