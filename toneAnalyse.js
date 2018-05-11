var ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

var tone_analyzer = new ToneAnalyzerV3({
    "url": "https://gateway.watsonplatform.net/tone-analyzer/api",
    "username": "8c8c7592-5ad6-4457-a82b-437712e51c58",
    "password": "RZNYmylCiAeb",
    version_date: '2017-09-21'
});

var params = {
  'tone_input': { 'text': "My parents don't allow me to do anything according to me I am always cornered to think according to my parents They try to force their thinking on me" },
    'content_type': 'application/json'
  };
  
  
  tone_analyzer.tone(params, function(error, response) {
    if (error)
      console.log('error:', error);
    else
      console.log(JSON.stringify(response, null, 2));
    }
  );