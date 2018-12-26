const keys = require('../keys.json');
const staticData = require('../data/parsedData.json');
// Express server
// Connect to mongoDB
const mongoose = require('mongoose');

const rate = require('./routes/api/rate.js');
//console.log('Rate ',rate);

//console.log("staticData ",staticData.onemonth);
var mongoDB = keys.dbUrl+"/"+keys.db;
mongoose.connect(mongoDB,{ useNewUrlParser: true });
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
    // we're connected!
    console.log('MongoDB connected');
});

const rateModel = require('./data/model/rate.js');
function createTestDocument() {
    let exampleModel = {
        instrument: 'tmubmusd01m',
        title: '1 Month - US Treasury',
        data: staticData.onemonth,
        lastUpdated: new Date()
    };
    //console.log(rateModel);
    let newRate = new rateModel();
    console.log(newRate._id)
    newRate.instrument = exampleModel.instrument;
    newRate.title = exampleModel.title;
    newRate.data = exampleModel.data;
    newRate.lastUpdated = exampleModel.lastUpdated;

    newRate.save().then(rate => {
        console.log("Rate saved ",rate);
        //cb(null,rate);
    }).catch(e => {
        console.error("Couldnt save rate ",e);
        //cb(e,null);
    })
}
//createTestDocument();

// Fetch all rates

function fetchRateByTitle() {
    let query = {title: '1 Month - US Treasury'};
    rate.findRate(query, function(err,result) {
        if(err) {
            console.error(err);
        } else {
            console.log(result);
        }
    })
}

//fetchRateByTitle();