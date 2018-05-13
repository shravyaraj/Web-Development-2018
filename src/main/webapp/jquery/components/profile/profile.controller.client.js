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
        $logoutBtn = $("#logoutBtn")
            .click(updateUser);

        findUserById(12);
    }

    function updateUser() {
        var user = {
            phone: $phone.val(),
            email: $email.val(),
            role: $role.val(),
            dob: $dob.val()
        };

        userService
            .updateUser(12, user)
            .then(success);
    }

    function success(response) {
        if(response === null) {
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