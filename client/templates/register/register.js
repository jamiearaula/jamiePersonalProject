function validateFields(){
	var userEmail = $('#emailAdd').val();
	var userPassword = $('#pwd').val();
	var userPassword = $('#rtpwd').val();
	var checkUser_alert = $('#userExist-alert');	
	var registerUser_alert = $('#userRegistered-alert');	


	if(Meteor.users.find({ 'emails.address' : userEmail}).count() > 0){

		checkUser_alert.show();

	}

	else{
		checkUser_alert.hide();
		registerUser_alert.show();
		  Accounts.createUser({
	        		email: userEmail,
	        		password: userPassword
	    	},verifyThisEmail);

	


	}
}


function verifyThisEmail(){

	Meteor.call('sendVEmail', Meteor.userId());
}


Template.register.events({
	
	'click #register-btn': function(event) {
		event.preventDefault();
		$(event.target).blur();
	    validateFields();
	}

});