//IIFE
(function () {

    jQuery(main);

    var tbody;
    var template;
    var userService = new UserServiceClient()
    var username;
    var password;
    
    function main() {
         tbody = $('tbody');
         matchPassword();
         $('#registerBtn').click(findUserByUsername); 
         $('#loginBtn').click(login);
    }
    
    function matchPassword(){
    	$('#inputPasswordFld, #confirmPasswordFld').on('keyup', function () {
            if ($('#inputPasswordFld').val() == $('#confirmPasswordFld').val()) {
            	$('#match').html('It is a match!');
            	$('#registerBtn').removeAttr("disabled");
            	} else {
                	$('#match').html('Password does not match!');
                    $('#registerBtn').attr("disabled","disabled");
                }
        });
    }
    
    function findUserByUsername() {
    	console.log('Checking username availibility...')
		 userService
		 			.findUserByUsername($('#usernameFld').val())
		 createUser();
	}
    
	function createUser() {
        console.log('Registering user...');
        var user = {
            username: $('#usernameFld').val(),
            password: $('#inputPasswordFld').val()
        };

        userService
            .createUser(user);
        alert('Registered successfully');
        profile();
      }
	 
	 function profile(){
    	window.location.href="/jquery/components/profile/profile.template.client.html?username=" + $('#usernameFld').val();
     }
	 
	 function login(){
		 window.location.replace('/jquery/components/login/login.template.client.html');
	 }
})();