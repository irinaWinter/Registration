function User(firstName, lastName, regDate) {
	this.type = 'пользователь';
	this.firstName = firstName;
	this.lastName = lastName;
	this.regDate = regDate;
}
function UserList() {
	this.type = 'список пользователей';
	this.users = [];
	this.add = function(User) {
		// return this.users.push(User.firstName + ' ' + User.lastName + ', ' + User.regDate)
		return this.users.push(User)
	};
	this.getAllUsers = function() {
		return this.users;
	}
}



function registration() {
	var name = prompt('Введите имя и фамилию', '');
	var arr = userList.getAllUsers();
	if (name !== null && name!== '') {

		var arr = name.split(' ');
		var firstName = arr[0];
		var lastName = arr[1];
		var date = new Date();
		var day = function() {
			if (date.getDate() < 10) {
				return '0' + date.getDate();
			} else {
				return date.getDate();
			}
		};	
		var month = function() {
			if (date.getMonth() + 1 < 10) {
				return '0' + Number((date.getMonth() + 1), 10);
			} else {
				return date.getMonth() + 1;
			}	
		};
		var year = date.getFullYear();
		var hours = function() {
			if (date.getHours() < 10){
				return '0' + date.getHours();
			} else {
				return date.getHours();
			}	
		};
		var minutes = function() {
			if (date.getMinutes() < 10){
				return '0' + date.getMinutes();
			} else {
				return date.getMinutes();
			}	
		};
		var regDate = day() + '.' + month() + '.' + year + ' ' + hours() + ':' + minutes();
		var myUser = new User(firstName, lastName, regDate);

		// Проверка на наличие регистрации
		// var matches = 0;
		// if (arr.length > 0) {
		// 	for (var i = 0; i < arr.length; i++) {
		// 		if (firstName == arr[i].firstName && lastName == arr[i].users.lastName) {
		// 			matches++;
		// 			console.log(arr[i].firstName);
		// 		}
		// 	}
		// }	
		// if (matches > 0) {
		// 	alert('Пользователь с такими данными уже зарегистрирован! Введите другие данные.');
		// } else {
		// 	userList.add(myUser);
		// }
		// // userList.add(myUser);
		// // console.log(userList);
		// // console.log(myUser);
		// registration();
		// console.log(userList);
		
		

	} else {
		
		arr.forEach(function(item) {
			console.log(item.firstName + ' ' + item.lastName + ', ' + item.regDate);
		});
	}
}

var userList = new UserList();
registration();
