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

var registration = {
	getName: function() {
		var data = prompt('Введите имя и фамилию', '');
		var allUsers = userList.getAllUsers();
		if (data !== null && data !== '') {
			return data;
		}
	},
	checkData: function(getName) {

	}
	// if ( isNaN(+firstName) && isNaN(+lastName)) {
	// 	return name;
	// } else {
	// 	alert("Введите корректные данные");
	// 	getName();
	// }
}


function getName() {
	var data = prompt('Введите имя и фамилию', '');
	var allUsers = userList.getAllUsers();
	if (data !== null && data !== '') {
		return data;

		// var dataEntered = name.split(' ');
		// var firstName = dataEntered[0];
		// var lastName = dataEntered[1];
	} else {
		allUsers.forEach(function(item) {
			// console.log(item.firstName + ' ' + item.lastName + ', ' + item.regDate);
		});
	}
	// if ( isNaN(+firstName) && isNaN(+lastName)) {
	// 	return name;
	// } else {
	// 	alert("Введите корректные данные");
	// 	getName();
	// }
}

function checkData(data) {
	var dataEntered = data.split(' ');
	var firstName = dataEntered[0];
	var lastName = dataEntered[1];

	if ( isNaN(+firstName) && isNaN(+lastName) ) {
		return dataEntered;
	} else {
		alert("Введите корректные данные");
		getName();
	}
}




var userList = new UserList();
getName();


// function registration() {

	






	
// 	// if (name !== null && name !== '') { перенесено в функцию
// 		var dataEntered = getName().split(' ');
// 		var firstName = dataEntered[0];
// 		var lastName = dataEntered[1];

// 		// Проверка типа данных
// 		// if ( isNaN(+firstName) && isNaN(+lastName)) {

// 		// } else {
// 		// 	alert('Введите данные в корректной форме');

// 		// }
	

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

// 	// } else { 

// 	// }

// }

// var userList = new UserList();
// registration();


