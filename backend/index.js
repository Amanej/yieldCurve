const keys = require('../keys.json');

const rate = require('./routes/api/rate.js');
console.log('Rate ',rate);

const staticData = require('../data/parsedData.json');
console.log("staticData ",staticData.onemonth);

// Express server
// Connect to mongoDB
const mongoose = require('mongoose');
mongoose.connect(keys.dbUrl+"/"+keys.db).then(d => {
    console.log(" Database "); 
    //console.log(d);
    /*
    rate.createRate({
        instrument: 'tmubmusd01m',
        title: '1 Month - US Treasury',
        data: staticData.onemonth,
        lastUpdated: new Date()
    },function(e,r) {
        if(!e) {
            console.error("Error ",e);
        } else {
            console.log("Result ",r);
        }
    });*/
}).catch(e => {
    console.error("Error ",e);
});

//const rate = require('./routes/api/rate.js');
//console.log('Rate ',rate);
// Fetch all rates