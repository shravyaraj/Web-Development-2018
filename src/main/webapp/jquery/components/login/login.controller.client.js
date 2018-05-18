(function() {
    $(init);
    
    var username;
    var password;
    var loginBtn;
    var registerBtn;
    var userService = new UserServiceClient();
    
    function init(){
    	username = $("#usernameFld");
    	password = $("#inputPasswordFld");
    	loginBtn = $("#loginBtn")
        		.click(findUserByUsername(username));
    	registerBtn = $("#registerBtn")
        		 .click(register);
    	
    }
    
    function findUserByUsername(username){
		 userService
		 			.findUserByUsername(username)
		 			.then(success);
	}
    
    function success(){
    	if(response == null){
			 userService
			.login($username,$password);
		 }
    }
    
    function register(){
    	window.location.replace( 'http://localhost:8080/jquery/components/register/register.template.client.html')
    }
    
    function loginUser(){
    	
    	userService
    			.login($username,$password);
    				
    }
    
    })();