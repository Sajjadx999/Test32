const newman = require('newman'); 
newman.run({ 
 collection: require("./Pr_duserapi.postman_collection.json"), //  pointing to local JSON file. 
 //collection: 'https://api.postman.com/collections/27910312-0589a293-96a0-4aad-9905-cfdbc22e98da?access_key=PMAT-01H31DATKYA347BTJK5XS1DFHJ'
   // pointing  to local env file 
 iterationCount: 1, 
 reporters: 'htmlextra', 
 reporter: { 
 htmlextra: { 
 export: './Reports/report.html', // If not specified, the file  will be written to `newman/` in the current working directory.  } 
 } 
  }
}, function (err) { 
 if (err) { throw err; } 
 console.log('collection run complete!'); 
}); 
