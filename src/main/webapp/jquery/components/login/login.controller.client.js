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
    	$loginBtn = $("#loginBtn")
    				.click(login);
    	$registerBtn = $("#registerBtn")
    				.click(register);
    	}
    
    function login(){
    	userService
    			.login($username.val(),$password.val())
    	        .then(success);
    	} 
    
    function success(response){
    	console.log(response);
    	if(response!=null){
    		window.location.href="/jquery/components/profile/profile.template.client.html?username=" + $("#usernameFld").val();
    	} else
    		alert('Wrong username or password!');
    }
    
    function register(){
    	window.location.replace( '/jquery/components/register/register.template.client.html')
    }    
  })();