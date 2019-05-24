function User(firstName, lastName, regDate) {
	this.type = 'пользователь';
	this.firstName = firstName;
	this.lastName = lastName;
	this.regDate = regDate;
}
function UserList() {
	this.type = 'список пользователей';
	this.users = [];
	this.add = function(user) {
		this.users.push(this.user)
	};
	this.getAllUsers = function() {
		return this.users;
	}
}
function registration() {
	var userList = new UserList;
	var name = prompt('Введите имя и фамилию', '');
	if (name !== null) {
		var arr = name.split(' ');
		var firstName = arr[0];
		var lastName = arr[1];
		var date = new Date();
		var day = date.getDate();
		var month = date.getMonth() + 1;
		var year = date.getFullYear();
		var user = new User();
	}
}
