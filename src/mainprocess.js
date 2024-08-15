const { generatePollyAudio } = require("./services/pollyService");

module.exports.generateAudioFile = async(uuid, ssml) => {
    const pollyResponse = await generatePollyAudio(uuid, ssml);

    if (pollyResponse.TaskStatus !== 'failed') {
        return {
            error: false,
            message: 'Audio file generated successfully',
            audioFile: pollyResponse.OutputUri,
            uuid: uuid,
        };
    }
    return {
        error: true,
        message: 'Error generating audio file',
        uuid: uuid,
    }

};