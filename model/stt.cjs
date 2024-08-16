const axios = require('axios');

const API_KEY = 'c34dae9f3fc6426dbd3ebe6526202158';


module.exports =  transcribeAudio = async (url) => {
  try {
    // Request transcription
    const response = await axios.post(
      'https://api.assemblyai.com/v2/transcript',
      {
        audio_url: url,
        auto_highlights: true,
      },
      {
        headers: {
          authorization: API_KEY,
          'content-type': 'application/json',
        },
      }
    );

    const transcriptId = response.data.id;

    // Poll for transcription result
    let transcript = null;
    while (!transcript || transcript.status !== 'completed') {
      const transcriptResponse = await axios.get(
        `https://api.assemblyai.com/v2/transcript/${transcriptId}`,
        {
          headers: { authorization: API_KEY },
        }
      );
      transcript = transcriptResponse.data;
      if (transcript.status === 'completed') break;
      console.log('Waiting for transcription to complete...');
      await new Promise((resolve) => setTimeout(resolve, 5000)); // Wait for 5 seconds before polling again
    }

    return transcript.text;

  } catch (error) {
    console.error('Error transcribing audio:', error);
  }
};




