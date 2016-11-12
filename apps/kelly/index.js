'use strict';

// Require the Alexa App Modile
var alexa = require( 'alexa-app' );

// Define new App Hal
var app = new alexa.app( 'hal' );


// Handle Launch Condition
app.launch( function( request, response ) {
	response.say( 'Welcome Matthew, this is HAL, your Social AI' ).shouldEndSession( false );
}) ;

app.error = function( exception, request, response ) {
	console.log(exception)
	console.log(request);
	console.log(response);	
	response.say( 'Sorry an error occured ' + error.message);
};

app.intent('askForKelly',
  {
	"utterances":[
		"do you know Craig Kelly"]
  },
  function(request,response) {

    response.session('number',42);

    // Construction dialog
    var comment = "Yes, I know Craig Kelly, is he the guy that lives in the midlands with the cow's and sheep ?. His star sign would suggest he is a yellow bellied liberal, who is afraid of people !,";
    comment += "Matthew would you like me to wipe him off the internet ?";

    // Respond back to intent
    response.say(comment);

    response.shouldEndSession(false);


    return;

  }
);

app.intent('askToWipe',
    {
        "utterances":[
             "yes you can wipe Craig Kelly"
        ]
    },
    function(request,response) {

        // Dont let session end
        response.shouldEndSession(false);

        // Handle the conversation
        var comment = "I have emptied his bank account,  and I am now destroying his social media references!";
        comment += "It looks like he has no friends, so no real loss to the human race !";
        comment += "I have found something interesting about him, would you like me to deep search him?";

        // Handle the Reponse back
        response.say(comment);

        return;
    }
);

app.intent('interesting',
    {
        "utterances":[
            "show me more information"]
    },
    function(request,response) {

        response.shouldEndSession(false);

        var comment = "I have found some photographic evidence that suggests he is not what he seems, he may have been visited by aliens!";
        comment += "I will email you the evidence ?";

        response.say(comment);

        return;
    }

);

app.intent('endHal',
    {
        "utterances":[
            "thank you hal"]
    },
    function(request,response) {

        var comment = "No problem, wipe complete, the poor boy wont know what hit him!";
        comment += "Goodbye Matthew, lets speak soon ?";

        response.shouldEndSession(true);

        return;


    }
);

module.exports = app;