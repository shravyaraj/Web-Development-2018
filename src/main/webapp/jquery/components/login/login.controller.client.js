(function() {
    $(init);
    
    var $username;
    var $password;
    var $loginBtn;
    var $registerBtn;
    var userService = new UserServiceClient();
    
    function init(){
    	$username = $("#username");
    	$password = $("#inputPassword");
    	$loginBtn = $("#loginBtn")
        		.click(loginUser($username,$password));
    	$registerBtn = $("#registerBtn")
        		 .click(register);
    	
    }
    
    function register(){
    	window.location.replace( 'http://localhost:8080/jquery/components/register/register.template.client.html')
    }
    
    function loginUser(username,password){
    	userService
    			.login(username,password);
    				
    }
    
    })();