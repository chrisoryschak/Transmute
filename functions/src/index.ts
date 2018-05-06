import * as functions from 'firebase-functions';

// WATSON CALLBACK ENDPOINT

export let ibmTranscriptionCallback = functions.https.onRequest(async (request, response) => {
    // Register a URL with this function by calling:
    // curl -X POST -u {user} "https://stream.watsonplatform.net/speech-to-text/api/v1/register_callback?callback_url={url}"

    if (request.method === 'GET') {
        response.type('text/plain')
        response.status(200).send(request.query.challenge_string)
        console.log('registered IBM callbackURL with string: ' + request.query.challenge_string)
        // return
    }

    if (request.method === 'POST') {
        console.log(JSON.stringify(request.body, null, 2))

        if (request.body.event === 'recognitions.completed_with_results') {
            console.log('Results returned!')
            
            let dbUpdate = await admin.database().ref('transcripts/'+ req.body.user_token + '/transcripts').set({
                rawTranscription: req.body.results
            })
        }
        res.status(200).send()
    }
})