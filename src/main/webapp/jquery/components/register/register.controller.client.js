//IIFE
(function () {

    jQuery(main);

    var tbody;
    var template;
    var password = $('#inputPasswordFld').val();
	var confirmPassword = $('#confirmPasswordFld').val();
    var userService = new UserServiceClient()
    
    function main() {
        tbody = $('tbody');
        $('#registerBtn').click(createUser)
                         .click(profile); 
        $('#loginBtn').click(login);
    }
   
    $('input[type=submit]').on('click', passwordCheck);
    
    function passwordCheck(){
	if (password == confirmPassword){
		confirmPassword.setCustomValidity("Passwords do not match!");
		alert('Passwords do not match!')
	} else {
		confirmPassword.setCustomValidity('Check!');
	 }
    }
	
	function createUser() {
        console.log('createUser');

        var username = $('#usernameFld').val();
        var password = $('#inputPasswordFld').val();

        var user = {
            username: username,
            password: password
        };

        userService
            .createUser(user)
      }
	 
	 function profile(){
		 window.location.replace('http://localhost:8080/jquery/components/profile/profile.template.client.html');
	 }
	 
	 function login(){
		 window.location.replace('http://localhost:8080/jquery/components/login/login.template.client.html');
	 }

})();