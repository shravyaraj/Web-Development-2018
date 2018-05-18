//IIFE
(function () {

    jQuery(main);

    var tbody;
    var template;
    var userService = new UserServiceClient()
    
    function main() {
    	 var username = $('#usernameFld').val();
         var password = $('#inputPasswordFld').val();
         tbody = $('tbody');
         matchPassword();
         $('#registerBtn').click(findUserByUsername(username)); 
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
    
    function findUserByUsername(username){
    	console.log('Checking username availibility...')
		 userService
		 			.findUserByUsername(username)
		 			.then(success);
	}
    
    function success(){
    	if(response == null) {
			 createUser();
		 }
    	else
    		alert('Sorry! Username already taken!')
    }
    
	function createUser() {
        console.log('Registering user...');
        var user = {
            username: username,
            password: password
        };

        userService
            .createUser(user);
            //.then(findUserById(userId));
         
        alert('Registered successfully');
        profile();
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