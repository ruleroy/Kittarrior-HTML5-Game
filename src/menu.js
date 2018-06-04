
var Menu = {

    preload : function() {
        // Loading images is required so that later on we can create sprites based on the them.
        // The first argument is how our image will be refered to, 
        // the second one is the path to our file.
    	game.stage.disableVisibilityChange = true;
    	game.stage.smoothed = false;
        game.load.image('menu', 'assets/images/background.png');
		game.load.spritesheet('button', 'assets/buttons/button_sprite_sheet_pixel.png', 193, 71);
		game.load.spritesheet('blackKitty', 'assets/images/kitty_black.png', 72, 72);
		game.load.spritesheet('blackKittyATK', 'assets/images/kitty_black_atk.png', 72, 72);
		game.load.spritesheet('whiteKitty', 'assets/images/kitty_white.png', 72, 72);
		game.load.spritesheet('brownKitty', 'assets/images/kitty_brown.png', 72, 72);
    },

    create: function () {
        // Add a sprite to your game, here the sprite will be the game's logo
        // Parameters are : X , Y , image name (see above) 
    	//this.timer = this.game.time.events.loop(1, mouseRefresh, this);
        back = this.add.sprite(0, 0, 'menu');
        back.scale.setTo(4,4);
    	game.stage.backgroundColor = "#d3d3d3";
		button = game.add.button(game.world.centerX - 95, 530, 'button', actionOnClick, this, 2, 1, 0);
		blackKitty = game.add.sprite(game.world.centerX, 100, 'blackKitty');
		blackKitty.scale.setTo(4,4);
		blackKitty.animations.add('idle');
		blackKitty.animations.play('idle', 4, true);
		blackKitty.x = game.world.centerX - blackKitty.width/2;
		kitty();
		
		
    },

	update: function () {
	/*
    if(this.game.input.activePointer.justPressed()) {
      this.game.state.start('Game');
    }
	*/
        // Change the state to the actual game.
        //this.state.start('Game');

    }
	
};

function actionOnClick(){
	this.game.state.start('Game');
}


function kitty () {
	whiteKitty = game.add.sprite(game.world.centerX, 100, 'whiteKitty');
	whiteKitty.scale.setTo(4,4);
	whiteKitty.animations.add('idle');
	whiteKitty.animations.play('idle', 4, true);
	whiteKitty.x = game.world.centerX - whiteKitty.width;
	brownKitty = game.add.sprite(game.world.centerX, 100, 'brownKitty');
	brownKitty.scale.setTo(4,4);
	brownKitty.animations.add('idle');
	brownKitty.animations.play('idle', 4, true);
	brownKitty.x = game.world.centerX;
}

function mouseRefresh(){
	game.canvas.style.cursor = 'url(assets/images/mouse.png),auto';
}