(function() {
    $(init);

    var $staticUsername;
    var $phone;
    var $email;
    var $updateBtn;
    var $role;
    var $dob;
    var $logoutBtn;
    var userService = new UserServiceClient();
    

    function init() {
    	$staticUsername = $("#staticUsername");
    	$phone = $("#phone");
    	$email = $("#email");
    	$role = $("#role");
    	$dob = $("#dob");
        $updateBtn = $("#updateBtn")
        		     .click(updateUser);
        $logoutBtn = $("#logoutBtn")
        		     .click(logout);
            

        findUserById(402);
    }

    function updateUser() {
        var user = {
            phone: $phone.val(),
            email: $email.val(),
            role: $role.val(),
            dob: $dob.val()
        };

        userService
            .updateUser(402, user)
            .then(success);
    }
    
    function logout(){
    	window.location.replace('http://localhost:8080/jquery/components/login/login.template.client.html');
    }

    function success(response) {
        if(response == null) {
            alert('Oops! Unable to update!')
        } else {
            alert('Successfully Updated!');
        }
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