function validateFields(){
	var userEmail = $('#emailAdd').val();
	var userPassword = $('#pwd').val();
	var checkUser_alert = $('#userExist-alert');	

	



		Meteor.loginWithPassword(userEmail,userPassword,function(error){
				if(error){
					checkUser_alert.show();
				}else{
					

						checkUser_alert.hide();
						window.location.href= "../fxCalculation/"

				}
		}); 
		
	

	
}


Template.login.events({
	'click #reg-btn': function(event) {
		event.preventDefault();
		$(event.target).blur();
		window.location.href= "../register/";
    },

	'click #log-btn': function(event) {
		event.preventDefault();
		$(event.target).blur();
	    validateFields();
	}

});
