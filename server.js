'use strict';

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');
var appEnv = cfenv.getAppEnv();

// Load Alex App Server
var AlexaAppServer = require( 'alexa-app-server' );

if (appEnv.isLocal) {
	console.log("LOCAL");
	var server = new AlexaAppServer( {
		httpsEnabled: false,
		port: appEnv.port
	} );
} else {
	console.log("REMOTE");
	var server = AlexaAppServer( 
		{
			port : appEnv.port,
			httpsEnabled:true,
			privateKey:'private-key.pem',
			certificate:'cert.cer'
		}
	);
}

// Start the Server
server.start();