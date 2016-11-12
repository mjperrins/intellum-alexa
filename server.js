'use strict';

var LOCAL=false;

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
var cfenv = require('cfenv');
var appEnv = cfenv.getAppEnv()

// Load Alex App Server
var AlexaAppServer = require( 'alexa-app-server' );

if (appEnv.isLocal) {
	var server = new AlexaAppServer( {
		httpsEnabled: false,
		port: appEnv.port
	} );
} else {

	var server = AlexaAppServer( 
		{
			port: appEnv.port,
			httpsEnabled:true,
			privateKey:'private-key.pem',
			certificate:'cert.cer'
		}
	);
}

// Start the Server
server.start();