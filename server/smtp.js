
Meteor.startup(function(){
smtp = {
    username: 'araulajamie@gmail.com',   // eg: server@gentlenode.com
    password: 'asfaketch30',   // eg: 3eeP1gtizk5eziohfervU
    server:   'smtp.gmail.com',  // eg: mail.gandi.net
    port: 25
  }

 
 process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;


});

Meteor.methods({
  sendVEmail: function (uId) {
    check([uId], [String]);


    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();

    //actual email sending method
    Accounts.sendVerificationEmail(uId);

   
 }
});