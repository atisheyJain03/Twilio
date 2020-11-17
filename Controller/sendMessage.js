// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);


const sendMessage = async (req,res) => {
    // console.log(req.body.data);
    try {
    const message =   await client.messages
        .create({
           body: req.body.data,
           from: 'whatsapp:+14155238886',
           to: 'whatsapp:+917404066665'
         });
        
         res.status(200).json({
            statue:"success",
            data:message
        }) 
  
    } catch(error) {
        // console.log(error)
        res.status(500).json({
            statue:"fail",
            data:error.message
        }) 
    }
};

module.exports  = sendMessage;      