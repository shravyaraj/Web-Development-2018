(function() {
    $(init);
    
    var $username;
    var $password;
    var $loginBtn;
    var $registerBtn;
    var userService = new UserServiceClient();
    
    function init(){
    	$username = $("#usernameFld");
    	$password = $("#inputPasswordFld");
    	$loginBtn = $("#loginBtn")
    				.click(login);
    	$registerBtn = $("#registerBtn")
    				.click(register);
    	
    }
    
    function login(){
    	userService
    			.login($username.val(),$password.val());
    	profile();
    }
    
    function register(){
    	window.location.replace( 'http://localhost:8080/jquery/components/register/register.template.client.html')
    }
    
    function profile(){
    	window.location.href( '/api/profile');
    }
    
  })();