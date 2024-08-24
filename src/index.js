const { v4:uuidv4 } = require('uuid');
const { generateAudioFile } = require('./mainprocess');

module.exports.handler = async (event) => {
    const correlationId = event?.correlationId || uuidv4();
    try {
        console.log('Received event:', JSON.stringify(event));
        const voice = event.voice;
        let title = event.title;
        const script = event.script
        title = title.replace("AITA", "Am I the Asshole");
        title = title.replace("TIFU", "Today I Fucked Up");
        const ssml = `<speak>${title} ${script}</speak>`;

        console.log('Generating audio file with correlationId:', correlationId);
        const response = await generateAudioFile(correlationId, ssml, voice);
        return response;
    } catch (error) {
        console.error('Error:', error);
        return {
            error: true,
            message: 'Error generating audio file',
            correlationId: correlationId,
        };
    }
};