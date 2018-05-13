function User(username,password,firstName,lastName,email,phone,role,dateOfBirth){
	this.username=username;
	this.password=password;
	this.firstName=firstName;
	this.lastName=lastName;
	this.email=email;
	this.phone=phone;
	this.role=role;
	this.dateOfBirth=dateOfBirth;
	
	this.setUsername=setUsername;
	this.getUsername=getUsername;
	
	function setUsername(username){
		this.username=username;
	}
	function getUsername(username){
		this.username;
	}
	
	this.setPassword=setPassword;
	this.getPassword=getPassword;
	
	function setPassword(password){
		this.password=password;
	}
	function getPassword(password){
		this.password;
	}
	
	this.setfirstName=setfirstName;
	this.getfirstName=getfirstName;
	
	function setfirstName(firstName){
		this.firstName=firstName;
	}
	function getfirstName(firstName){
		this.firstName;
	}
	
	this.setlastName=setlastName;
	this.getlastName=getlastName;
	
	function setlastName(lastName){
		this.lastName=lastName;
	}
	function getlastName(lastName){
		this.lastName;
	}
	
	this.setemail=setemail;
	this.getemail=getemail;
	
	function setemail(email){
		this.email=email;
	}
	function getemail(email){
		this.email;
	}
	
	this.setphone=setphone;
	this.getphone=getphone;
	
	function setphone(phone){
		this.phone=phone;
	}
	function getphone(phone){
		this.phone;
	}
	
	this.setrole=setrole;
	this.getrole=getrole;
	
	function setrole(role){
		this.role=role;
	}
	function getrole(role){
		this.role;
	}
	
	this.setdateOfBirth=setdateOfBirth;
	this.getdateOfBirth=getdateOfBirth;
	
	function setdateOfBirth(dateOfBirth){
		this.dateOfBirth=dateOfBirth;
	}
	function getdateOfBirth(dateOfBirth){
		this.dateOfBirth;
	}
}