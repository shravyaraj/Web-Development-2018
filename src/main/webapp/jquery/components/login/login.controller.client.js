(function() {
    $(init);
    
    var $username;
    var $password;
    var $loginBtn;
    var $registerBtn;
    var userService = new UserServiceClient();
    var uname;
    
    function init(){
    	$username = $("#usernameFld");
    	$password = $("#inputPasswordFld");
    	uname = $("#usernameFld").val();
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
    	window.location.href="http://localhost:8080/jquery/components/profile/profile.template.client.html?username=" + uname;
    }
    
  })();