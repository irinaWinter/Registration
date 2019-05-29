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

// Раскомментировать !!!!!

// function registration() {
// 	var name = prompt('Введите имя и фамилию', '');



// 	var allUsers = userList.getAllUsers();
// 	if (name !== null && name!== '') {
// 		var dataEntered = name.split(' ');
// 		var firstName = dataEntered[0];
// 		var lastName = dataEntered[1];
// 		var date = new Date();
// 		var day = function() {
// 			if (date.getDate() < 10) {
// 				return '0' + date.getDate();
// 			} else {
// 				return date.getDate();
// 			}
// 		};	
// 		var month = function() {
// 			if (date.getMonth() + 1 < 10) {
// 				return '0' + Number((date.getMonth() + 1), 10);
// 			} else {
// 				return date.getMonth() + 1;
// 			}	
// 		};
// 		var year = date.getFullYear();
// 		var hours = function() {
// 			if (date.getHours() < 10){
// 				return '0' + date.getHours();
// 			} else {
// 				return date.getHours();
// 			}	
// 		};
// 		var minutes = function() {
// 			if (date.getMinutes() < 10){
// 				return '0' + date.getMinutes();
// 			} else {
// 				return date.getMinutes();
// 			}	
// 		};
// 		var regDate = day() + '.' + month() + '.' + year + ' ' + hours() + ':' + minutes();
// 		var myUser = new User(firstName, lastName, regDate);

// 		// Проверка на наличие регистрации
// 		var matches = 0;
// 		if (allUsers.length > 0) {
// 			for (var i = 0; i < allUsers.length; i++) {
// 				if (firstName == allUsers[i].firstName && lastName == allUsers[i].lastName) {
// 					matches++;
// 				}
// 			}
// 		}

// 		if (matches > 0) {
// 			alert('Пользователь с такими данными уже зарегистрирован! Введите другие данные.');
// 		} else {
// 			userList.add(myUser);
// 		}
// 		registration();

// 	} else {
// 		allUsers.forEach(function(item) {
// 			console.log(item.firstName + ' ' + item.lastName + ', ' + item.regDate);
// 		});
// 	}
// }

// var userList = new UserList();
// registration();


function getFullName() {
	var n = prompt('Введите имя и фамилию', '');
	var dataEntered = n.split(' ');
	var firstName = dataEntered[0];
	var lastName = dataEntered[1];	
	if (+firstName == false && +lastName == false) {
		alert('Все верно');
	} else {
		alert('Введите данные в корректной форме');
		getFullName();
	}
}

getFullName();