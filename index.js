// Пример GET-запроса
fetch('https://jsonplaceholder.typicode.com/todos')
.then(response => {
// Преобразование ответа в формат JSON
return response.json();
})
.then(data => {
// Обработка данных
console.log(data);
})
.catch(error => {
// Обработка ошибок
console.error('There has been a problem with your fetch operation:', error);
	});