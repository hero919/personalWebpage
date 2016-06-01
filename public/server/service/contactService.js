/**
 * Created by zeqingzhang on 5/25/16.
 */
module.exports = function(app){
    app.post('/personalWebpage/contact', addContact);


    function addContact(req,res){
        console.log("This is a test.");
        var contact = req.body;
        console.log(contact);
        var sendgrid  = require('sendgrid')('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');
        var message   = {
            to      : 'zhang.ze@husky.neu.edu',
            from    : 'phoenix75919@gmail.com',
            subject : 'Contact Person Information',
            text    : "<h1>"+ "Name: " + contact.name + "<h2>" + "Email Address: " + contact.email + "<h2>" +
            "Phone Number: " + contact.phone +  "<h2>" + "Message: " + contact.message
        };

        sendgrid.send(message, function(err, json) {
            if (err) { console.error(err); }
            console.log(json);
            res.status(200).send();
        });

        res.status(200).send();
        console.log("Done");
    }


};