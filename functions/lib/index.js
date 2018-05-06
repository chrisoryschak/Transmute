"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
// import * as admin from 'firebase-admin';
// WATSON CALLBACK ENDPOINT
exports.ibmTranscriptionCallback = functions.https.onRequest((request, response) => __awaiter(this, void 0, void 0, function* () {
    // Register a URL with this function by calling:
    // curl -X POST -u {user} "https://stream.watsonplatform.net/speech-to-text/api/v1/register_callback?callback_url={url}"
    if (request.method === 'GET') {
        console.log('registering IBM callback URL with string: ' + request.query.challenge_string);
        response.type('text/plain');
        response.status(200).send(request.query.challenge_string);
    }
    if (request.method === 'POST') {
        console.log(JSON.stringify(request.body, null, 2));
        if (request.body.event === 'recognitions.completed_with_results') {
            console.log('Loading IBM transcription results');
            // let dbUpdate = await admin.database().ref('transcripts/'+ request.body.user_token + '/transcripts').set({
            //     rawTranscription: request.body.results
            // })
        }
        response.status(200).send();
    }
}));
//# sourceMappingURL=index.js.map