// --- ЭЛЕМЕНТЫ DOM ---
const mainMenu = document.getElementById('mainMenu');
const gameContainer = document.getElementById('gameContainer');

// --- НАСТРОЙКИ CANVAS ---
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// --- НАСТРОЙКИ ИГРЫ ---
const TILE_SIZE = 40; // Размер одной клетки (в пикселях)
let maze = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 1, 0, 0, 0, 1],
    [1, 1, 1, 0, 1, 1, 0, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 2], // 2 - это выход
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
// 0 - путь, 1 - стена, 2 - выход

// --- ИГРОК ---
let player = {
    x: 1, // начальная позиция по X (в клетках)
    y: 1, // начальная позиция по Y (в клетках)
};
// Находим новые кнопки по их ID
// Функция для запуска игры
function startGame() {
    mainMenu.style.display = 'none';    // Скрываем меню
    gameContainer.style.display = 'block'; // Показываем игру
    drawGame(); // Рисуем первое состояние игры
}

// Находим кнопку "Играть" (если она еще не найдена)
const playButton = document.getElementById('playButton');

// Привязываем запуск игры к кнопке
playButton.addEventListener('click', startGame);
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
// --- ИГРОВЫЕ ФУНКЦИИ ---

// Функция для отрисовки всего игрового поля
function drawGame() {
    // Устанавливаем размер холста в зависимости от размера лабиринта
    canvas.width = maze[0].length * TILE_SIZE;
    canvas.height = maze.length * TILE_SIZE;

    // Очищаем холст
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Рисуем лабиринт
    for (let y = 0; y < maze.length; y++) {
        for (let x = 0; x < maze[y].length; x++) {
            if (maze[y][x] === 1) { ctx.fillStyle = '#333'; } 
            else if (maze[y][x] === 0) { ctx.fillStyle = '#777'; }
            else if (maze[y][x] === 2) { ctx.fillStyle = '#4CAF50'; }
            ctx.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
        }
    }

    // Рисуем игрока
    ctx.fillStyle = '#ff4136';
    ctx.fillRect(player.x * TILE_SIZE, player.y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
}


// --- УПРАВЛЕНИЕ ---

window.addEventListener('keydown', (e) => {
    // Если игровой экран не виден, ничего не делаем
    if (gameContainer.style.display === 'none') return;
    
    let nextX = player.x;
    let nextY = player.y;

    switch (e.key) {
        case 'ArrowUp': nextY--; break;
        case 'ArrowDown': nextY++; break;
        case 'ArrowLeft': nextX--; break;
        case 'ArrowRight': nextX++; break;
    }
    
    // Проверка на столкновение со стеной
    if (maze[nextY][nextX] !== 1) {
        player.x = nextX;
        player.y = nextY;
        drawGame(); // Перерисовываем игру после каждого хода
    }

    // Проверка на победу
    if (maze[player.y][player.x] === 2) {
        setTimeout(() => {
            alert('Поздравляю, ты нашел выход!');
            gameContainer.style.display = 'none';
            mainMenu.style.display = 'flex';
            player.x = 1; // Сброс позиции игрока
            player.y = 1;
        }, 100);
    }
});

