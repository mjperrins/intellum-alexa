'use strict';

var alexa = require( 'alexa-app' );

var app = new alexa.app( 'hal' );


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

    response.say("Yes, I know Craig Kelly, is he the guy that lives in the midlands with the cow's and sheep ?. His star sign would suggest he is a yellow bellied liberal, who is afraid of people !");
    response.say("Matthew would you like me to wipe him off the internet ?" ).shouldEndSession(false);

  }
);

app.intent('askToWipe',
    {
        "utterances":[
             "yes you can wipe Craig Kelly"
        ]
    },
    function(request,response) {

        response.shouldEndSession(false);

        response.say("I have emptied his bank account,  and I am now destroying his social media references!");
        response.say("It looks like he has no friends, so no real loss to the human race !");
        response.say("I have found something interesting about him, would you like me to deep search him?");

        return;
    }
);

app.intent('interesting',
    {
        "utterances":[
            "show me more information"]
    },
    function(request,response) {


        response.say("I have found some photographic evidence that suggests he is not what he seems, he may have been visited by aliens!");
        response.say("I will email you the evidence ?");

        response.shouldEndSession(false);

        return;
    }

);

app.intent('endHal',
    {
        "utterances":[
            "thank you hal"]
    },
    function(request,response) {


        response.say("No problem, wipe complete, the poor boy wont know what hit him!");
        response.say("Goodbye Matthew, lets speak soon ?");

        response.shouldEndSession(true);

        return;


    }
);

module.exports = app;