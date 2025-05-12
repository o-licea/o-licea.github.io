// Code for Snake game
// Created with the help of Kenny Yip Coding, check him out!
// https://www.youtube.com/@KennyYipCoding

var blockSize = 25;
var rows = 20;
var cols = 20;
var board;
var context;

var snakeX = blockSize * 5;
var snakeY = blockSize * 5;

var snakeBody = [];

var velocityX = 0;
var velocityY = 0;

var foodX;
var foodY;

var gameOver = false;
var isActive = false;

// Highlights code that is run when the window is loaded onto canvas
window.onload = function() {
	board = document.getElementById("board");
	board.height = rows * blockSize;
	board.width = cols * blockSize;
	context = board.getContext("2d");
	
	placeFood();
	
	document.addEventListener("click", activateWindow);
	setInterval(update, 1000/10);
}


// Restricts user movement until user presses the window
function activateWindow() {
	if (!isActive) {
		isActive = true;
		document.addEventListener("keyup", changeDirection);
		document.removeEventListener("click", activateWindow)
	}
}
	

// Updates the game frame every couple of milliseconds
function update() {
	// When the gameOver is true, send notification to signal
	if (gameOver) {
		return;
	}
	
	// Fill the canvas with black squares
	context.fillStyle="black";
	context.fillRect(0, 0, board.width, board.height);
	
	// Add food on the canvas
	context.fillStyle="red";
	context.fillRect(foodX, foodY, blockSize, blockSize);
	
	// If user eats the food, add to the body and place a new tile of food
	if (snakeX == foodX && snakeY == foodY) {
		snakeBody.push([foodX, foodY])
		placeFood();
	}
	
	// Allows the snake to move every frame by updating the body
	for (let i = snakeBody.length - 1; i > 0; i--) {
		snakeBody[i] = snakeBody[i -1];
	}
	
	// Generate the position of the head every frame
	if (snakeBody.length) {
		snakeBody[0] = [snakeX, snakeY]
	}
	
	// Add the snake head onto the canvas
	context.fillStyle="lime";
	snakeX += velocityX * blockSize;
	snakeY += velocityY * blockSize;
	context.fillRect(snakeX, snakeY, blockSize, blockSize);
	
	// Add each 
	for (let i = 0; i < snakeBody.length; i++) {
		context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
	}
	
	for (let i = 0; i < snakeBody.length; i++) {
		context.fillRect(snakeBody[i][0], snakeBody[i][1], blockSize, blockSize);
	}
	
	// Generate game over notification
	if (snakeX < 0 || snakeX > (cols - 1)*blockSize || snakeY < 0 || snakeY > (cols - 1)*blockSize) {
		gameOver = true;
		alert("Game Over!\nYour Score: " + snakeBody.length);
	}
	
	// Disp*+-.0
	for (let i = 0; i < snakeBody.length; i++) {
		if (snakeBody[i][0] == snakeX && snakeBody[i][1] == snakeY) {
			gameOver = true;
			alert("Game Over!\nYour Score: " + snakeBody.length);
		}
	}
}

// Used to change the velocity of the snake based on user input
function changeDirection(e) {
	if (e.code == "ArrowUp" && velocityY != 1) {
		velocityX = 0;
		velocityY = -1;
	}
	else if (e.code == "ArrowDown" && velocityY != -1) {
		velocityX = 0;
		velocityY = 1;
	}
	else if (e.code == "ArrowLeft" && velocityX != 1) {
		velocityX = -1;
		velocityY = 0;
	}
	else if (e.code == "ArrowRight" && velocityX != -1) {
		velocityX = 1;
		velocityY = 0;
	}
}

// Randomly places the food on the grid
function placeFood() {
	foodX = Math.floor(Math.random() * cols) * blockSize;
	foodY = Math.floor(Math.random() * cols) * blockSize;
}