//IIFE
(function () {

    jQuery(main);
    
    var $username;
    var $password;
    var $firstName;
    var $lastName;
    var $role;
    var tbody;
    var template;
    var userId;
    var userService = new UserServiceClient()

    function main() {
    	$username = $("#usernameFld");
    	$password = $("#passwordFld");
    	$firstName = $("#firstNameFld");
    	$lastName = $("#lastNameFld");
    	$role = $("#roleFld");
    	tbody = $('tbody');
        template = $('.template');
        $('#createUser').click(createUser);
        $('#saveEdit').click(updateUser);

        findAllUsers();
    }

    function findAllUsers() {
        userService
            .findAllUsers()
            .then(renderUsers);
    }

    function createUser() {
        console.log('Creating user');
        var username = $('#usernameFld').val();
        var password = $('#passwordFld').val();
        var firstName = $('#firstNameFld').val();
        var lastName = $('#lastNameFld').val();
        var role = $('#roleFld').val();
       
        var user = {
            username: username,
            password: password,
            firstName: firstName,
            lastName: lastName,
            role: role
        };

        userService
            .createUser(user)
            .then(findAllUsers)
            .then(afterRender);
    }

    function renderUsers(users) {
        tbody.empty();
        for(var i=0; i<users.length; i++) {
            var user = users[i];
            var clone = template.clone();

            clone.attr('id', user.id);

            clone.find('.delete').click(deleteUser);
            clone.find('.edit').click(findUserById);

            clone.find('.username')
            		.html(user.username);
            clone.find('.password')
    				.html(user.password).css("color","white");
            clone.find('.firstName')
            		.html(user.firstName);
            clone.find('.lastName')
            		.html(user.lastName);
            clone.find('.role')
            		.html(user.role);
            tbody.append(clone);
        }
    }

    function deleteUser(event) {
    	console.log('Deleting user')
        var deleteBtn = $(event.currentTarget);
        var userId = deleteBtn
            .parent()
            .parent()
            .attr('id');

        userService
            .deleteUser(userId)
            .then(findAllUsers);
    }

    function findUserById(event) {
        console.log('Selecting user');
        var editBtn = $(event.currentTarget);
        var userId = editBtn
            .parent()
            .parent()
            .attr('id');

        userService
        	.findUserById(userId)
        	.then(renderUser);
    }
    
    function renderUser(user) {
    	userId=user.id;
        $username.val(user.username);
        $password.val(user.password);
        $firstName.val(user.firstName);
        $lastName.val(user.lastName);
        $role.val(user.role);
    }
        
    function updateUser(){
       var firstName = $('#firstNameFld').val();
       var lastName = $('#lastNameFld').val();
       var role = $('#roleFld').val()
       var user = {
                 firstName: firstName,
                 lastName: lastName,
                 role: role
                 };
       userService
               .updateUser(userId,user)
               .then(findAllUsers)
               .then(afterRender);
         }
        
     function afterRender() {
        $username.val("");
        $password.val("");
        $firstName.val("");
        $lastName.val("");
        $role.val("");
        }
})();