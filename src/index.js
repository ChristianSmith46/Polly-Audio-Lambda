const { v4:uuidv4 } = require('uuid');
const { generateAudioFile } = require('./mainprocess');

module.exports.handler = async (event) => {
    const uuid = event?.uuid || uuidv4();
    try {
        console.log('Received event:', JSON.stringify(event));
        const ssml = event.ssml;

        console.log('Generating audio file with UUID:', uuid);
        const response = await generateAudioFile(uuid, ssml);
        return response;
    } catch (error) {
        console.error('Error:', error);
        return {
            error: true,
            message: 'Error generating audio file',
            uuid: uuid,
        };
    }
};