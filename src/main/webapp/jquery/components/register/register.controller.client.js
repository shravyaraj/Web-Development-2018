//IIFE
(function () {

    jQuery(main);

    var tbody;
    var template;
    var userService = new UserServiceClient()
    
    function main() {
    	$('#inputPasswordFld, #confirmPasswordFld').on('keyup', function () {
            if ($('#inputPasswordFld').val() == $('#confirmPasswordFld').val()) {
            	$('#message').html('It is a match!');
            	$('#registerBtn').removeAttr("disabled");
            	
                } else {
                	$('#message').html('Password does not match!');
                    $('#registerBtn').attr("disabled","disabled");
                }
        });
            
        tbody = $('tbody');
        $('#registerBtn').click(createUser)
                         .click(profile); 
        $('#loginBtn').click(login);
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
            .createUser(user);
            //.then(findUserById(userId));
        alert('Registered successfully');
      }
	 
	 function profile(){
		 window.location.replace('http://localhost:8080/jquery/components/profile/profile.template.client.html');
	 }
	 
	 function login(){
		 window.location.replace('http://localhost:8080/jquery/components/login/login.template.client.html');
	 }
	 
	 function findUserById(userId) {
	        userService
	            .findUserById(userId)
	            .then(renderUser);
	    }
	    
	    function renderUser(user) {
	        console.log(user);
	        $staticUsername.val(user.username);
	        $email.val(user.email);
	        $role.val(user.role);
	        $phone.val(user.phone);
	        $dob.val(user.dob);
	    }

})();