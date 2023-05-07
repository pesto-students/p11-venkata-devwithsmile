// Your solution goes here
// Your solution goes here
let game = {
    lives: 3,
    coins: 0,

    newGame() {
        game.lives = 3;
    },

    playerDies() {
        if (game.lives > 0) {
            game.lives = game.lives - 1;
        } else {
            this.newGame();
        }
    }
};

game.points = game.coins * 10;






console.log("lives = " + game.lives);    // should be 3
console.log("coins = " + game.coins);    // should be 0
console.log("points = " + game.points);  // should be 0
game.coins = 2;
game.points = game.coins * 10;
console.log("points = " + game.points);  // should be 20
game.playerDies();
console.log("lives = " + game.lives);    // should be 2
game.playerDies(); //1
game.playerDies(); //0
game.playerDies(); // 3
console.log("lives = " + game.lives);    // should be 0 
game.newGame();
console.log("lives = " + game.lives);    // should be 3
console.log("coins = " + game.coins);    // should be 0