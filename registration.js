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

var dataEntered;
function registration() {
	var data = prompt('Введите имя и фамилию (без использования чисел и более 2-х слов)');
	
	// Проверяем наличие введенной информации
	if (data !== null && data !== '') {
		dataEntered = data.split(' ');

		// Проверяем, корректно ли количество введенных слов
		if ( dataEntered.length !== 2 ) {
			alert('Введите данные в корректной форме');
			registration();
		}

		// Проверяем на наличие чисел
		if ( isNaN(+dataEntered[0]) && isNaN(+dataEntered[1]) ) {

			// Проверяем на наличие чисел в слове 


			var firstName = dataEntered[0];
			var lastName = dataEntered[1];
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

			// Проверяем на наличие копии
			var matches = 0;
			if (userList.users.length > 0) {
				for (var i = 0; i < userList.users.length; i++) {
					if (firstName == userList.users[i].firstName && lastName == userList.users[i].lastName) {
						matches++;
					}
				}
			}

			// Добавляем нового пользователя
			if (matches > 0) {
				alert('Пользователь с такими данными уже зарегистрирован!');
				registration();
			} else {
				userList.add(myUser);
				registration();
			}

		} else {
			alert('Введите данные в корректной форме');
			registration();
		} 
	} else {
		userList.users.forEach(function(item) {
			console.log(item.firstName + ' ' + item.lastName + ', ' + item.regDate);
		});
	}
}	


var userList = new UserList();
registration();