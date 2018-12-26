const Rate = require('../../data/model/rate.js');

exports.createRate = (rateInfo,cb) => {
    const newRate = new Rate(rateInfo);
    newRate.save().then(rate => {
        console.log("Rate saved ",rate);
        cb(null,rate);
    }).catch(e => {
        cb(e,null);
    })
}
exports.updateRate = (rateObj,cb) => {
    Rate.findById(rateObj._id,((err,rate) => {
        if(err) {
            console.error(err);
        } else {
            // Save 
                // Push values
                rate.data.push(rateObj.data);
                rate.save().then(r => {
                    console.log("Rate updated ",r);
                }).catch(e => {
                    console.error('Error updated ',e);
                });
        }
    }))
}