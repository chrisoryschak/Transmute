import * as functions from 'firebase-functions';
// import * as admin from 'firebase-admin';

// WATSON CALLBACK ENDPOINT

export let ibmTranscriptionCallback = functions.https.onRequest(async (request, response) => {
    // Register a URL with this function by calling:
    // curl -X POST -u {user} "https://stream.watsonplatform.net/speech-to-text/api/v1/register_callback?callback_url={url}"

    if (request.method === 'GET') {
        console.log('registering IBM callback URL with string: ' + request.query.challenge_string)
        response.type('text/plain')
        response.status(200).send(request.query.challenge_string)
    }

    if (request.method === 'POST') {
        console.log(JSON.stringify(request.body, null, 2))
        if (request.body.event === 'recognitions.completed_with_results') {
            console.log('Loading IBM transcription results')
            
            // let dbUpdate = await admin.database().ref('transcripts/'+ request.body.user_token + '/transcripts').set({
            //     rawTranscription: request.body.results
            // })
        }
        response.status(200).send()
    }
})