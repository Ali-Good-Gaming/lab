// Находим новые кнопки по их ID
const playButton = document.getElementById('playButton');
const levelsButton = document.getElementById('levelsButton');
const settingsButton = document.getElementById('settingsButton');
const authorButton = document.getElementById('authorButton');

// Добавляем обработчики кликов для каждой кнопки

playButton.addEventListener('click', () => {
    console.log('Кнопка "Играть" нажата!');
    // Здесь будет переход на первый уровень или на экран выбора уровня
    alert('Начинаем игру!'); 
});

levelsButton.addEventListener('click', () => {
    console.log('Кнопка "Уровни" нажата!');
    // В будущем здесь будет открываться экран выбора уровней
    alert('Выбор уровня пока в разработке.');
});

settingsButton.addEventListener('click', () => {
    console.log('Кнопка "Настройки" нажата!');
    // Здесь будет открываться меню настроек (звук, сложность и т.д.)
    alert('Меню настроек пока в разработке.');
});

authorButton.addEventListener('click', () => {
    console.log('Кнопка "Автор" нажата!');
    // Здесь можно показать информацию об авторе
    alert('Игра "Лабиринт" сделана тобой!');
});
