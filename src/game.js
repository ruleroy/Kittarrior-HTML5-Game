var speedMult = 0.7;
// this is the friction which will slow down the map. Must be less than 1
var friction = 0.99;

WebFontConfig = {
	google : {
		families : [ 'VT323' ]
	}

};

var Game = {
	preload : function() {
		this.game.load.image("map", "map.png");
		this.game.load.script('webfont',
				'//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');

		this.game.load.image('fightbg', 'assets/images/fightbg.png');
		/*
		 * this.game.load .image('forest-back',
		 * 'assets/parallax_forest_pack/layers/parallax-forest-back-trees.png');
		 * this.game.load .image('forest-lights',
		 * 'assets/parallax_forest_pack/layers/parallax-forest-lights.png');
		 * this.game.load .image('forest-middle',
		 * 'assets/parallax_forest_pack/layers/parallax-forest-middle-trees.png');
		 * this.game.load .image('forest-front',
		 * 'assets/parallax_forest_pack/layers/parallax-forest-front-trees.png');
		 */
		this.game.load.spritesheet('upgradeButton',
				'assets/images/buttonupgrade.png', 226, 60);
		this.game.load.spritesheet('fullscreen', 'assets/buttons/fullscreen.png', 35, 35);
		
		this.game.load.image('aerocephal',
				'assets/allacrost_enemy_sprites/aerocephal.png');
		this.game.load.image('arcana_drake',
				'assets/allacrost_enemy_sprites/arcana_drake.png');
		this.game.load.image('aurum-drakueli',
				'assets/allacrost_enemy_sprites/aurum-drakueli.png');
		this.game.load.image('bat', 'assets/allacrost_enemy_sprites/bat.png');
		this.game.load.image('daemarbora',
				'assets/allacrost_enemy_sprites/daemarbora.png');
		this.game.load.image('deceleon',
				'assets/allacrost_enemy_sprites/deceleon.png');
		this.game.load.image('demonic_essence',
				'assets/allacrost_enemy_sprites/demonic_essence.png');
		this.game.load.image('dune_crawler',
				'assets/allacrost_enemy_sprites/dune_crawler.png');
		this.game.load.image('green_slime',
				'assets/allacrost_enemy_sprites/green_slime.png');
		this.game.load.image('nagaruda',
				'assets/allacrost_enemy_sprites/nagaruda.png');
		this.game.load.image('rat', 'assets/allacrost_enemy_sprites/rat.png');
		this.game.load.image('scorpion',
				'assets/allacrost_enemy_sprites/scorpion.png');
		this.game.load.image('skeleton',
				'assets/allacrost_enemy_sprites/skeleton.png');
		this.game.load.image('snake',
				'assets/allacrost_enemy_sprites/snake.png');
		this.game.load.image('spider',
				'assets/allacrost_enemy_sprites/spider.png');
		this.game.load.image('stygian_lizard',
				'assets/allacrost_enemy_sprites/stygian_lizard.png');

		this.game.load.spritesheet('smallmouse',
				'assets/images/smallmouse_idle.png', 50, 50);
		this.game.load.spritesheet('smallmouse_owie',
				'assets/images/smallmouse_owie.png', 50, 50);
		this.game.load.spritesheet('smallmouse_dead',
				'assets/images/smallmouse_dead.png', 50, 50);
		this.game.load.spritesheet('smallmouse2',
				'assets/images/smallmouse2.png', 50, 50);
		this.game.load.spritesheet('smallmouse2_owie',
				'assets/images/smallmouse2_owie.png', 50, 50);
		this.game.load.spritesheet('smallmouse2_dead',
				'assets/images/smallmouse2_dead.png', 50, 50);

		this.game.load.image('gold_coin', 'assets/images/G.png');
		this.game.load.image('claws', 'assets/images/claw2.png');
		this.game.load
				.spritesheet('clawing', 'assets/images/claws.png', 50, 50);
		this.game.load.image('healthbar', 'assets/images/healthbar.png');

		this.game.load.image('browncatIcon', 'assets/images/browncaticon.png');
		this.game.load.image('dagger', 'assets/496_RPG_icons/W_Dagger002.png');
		this.game.load
				.image('swordIcon1', 'assets/496_RPG_icons/S_Sword15.png');

		// build panel for upgrades
		/*
		 * var bmd = this.game.add.bitmapData(250, 500); bmd.ctx.fillStyle =
		 * '#9a783d'; bmd.ctx.strokeStyle = '#35371c'; bmd.ctx.lineWidth = 12;
		 * bmd.ctx.fillRect(0, 0, 250, 500); bmd.ctx.strokeRect(0, 0, 250, 500);
		 * this.game.cache.addBitmapData('upgradePanel', bmd);
		 */

		var bmd = this.game.add.bitmapData(250, 500);
		var grd2 = bmd.context.createLinearGradient(0, 0, 0, 500);
		grd2.addColorStop(1, '#472B22');
		grd2.addColorStop(.9, '#633B2D');
		grd2.addColorStop(0, '#5E382C');
		bmd.ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
		bmd.ctx.strokeStyle = '#35371c';
		bmd.ctx.lineWidth = 12;
		bmd.ctx.fillRect(0, 0, 250, 500);
		bmd.ctx.strokeRect(0, 0, 250, 500);
		// bmd.ctx.globalAlpha = 0.5;
		this.game.cache.addBitmapData('upgradePanel', bmd);

		var bmd2 = this.game.add.bitmapData(31, 500);
		var grd3 = bmd2.context.createLinearGradient(0, 0, 0, 500);
		grd3.addColorStop(1, '#472B22');
		grd3.addColorStop(.9, '#633B2D');
		grd3.addColorStop(0, '#5E382C');
		bmd2.ctx.fillStyle = "rgba(255, 255, 255, 0.5)";
		bmd2.ctx.strokeStyle = '#35371c';
		bmd2.ctx.lineWidth = 7;
		bmd2.ctx.fillRect(0, 0, 31, 500);
		bmd2.ctx.strokeRect(0, 0, 31, 500);
		// bmd.ctx.globalAlpha = 0.5;
		this.game.cache.addBitmapData('scrollOverall', bmd2);
		/*
		 * var myBitmap = game.add.bitmapData(100, 100);
		 * myBitmap.beginLinearGradientFill([ "#000", "#FFF" ], [ 0, 1 ], 0, 20,
		 * 0, 120); myBitmap.rect(20, 20, 120, 120); myBitmap.fill();
		 * game.add.sprite(50, 50, myBitmap);
		 */

		var buttonImage = this.game.add.bitmapData(226, 60);
		// buttonImage.ctx.fillStyle = '#e6dec7';
		buttonImage.ctx.fillStyle = "rgba(61, 61, 61, 1)"
		buttonImage.ctx.strokeStyle = '#35371c';
		buttonImage.ctx.lineWidth = 4;
		buttonImage.ctx.fillRect(0, 0, 226, 60);
		buttonImage.ctx.strokeRect(0, 0, 226, 60);
		this.game.cache.addBitmapData('button', buttonImage);

		// the main player
		this.player = {
			clickDmg : 1,
			gold : 50,
			dps : 0
		};

		// world progression
		this.level = 1;
		// how many monsters have we killed during this level
		this.levelKills = 0;
		// how many monsters are required to advance a level
		this.levelKillsRequired = 10;
	},
	create : function() {
		var state = this;
		this.game.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
		
		goldRounded = this.numFormatter(this.player.gold, 2);
		cps = 0;
		highestCPS = 0;
		mouseY = this.game.world.centerY;
		mouseX = this.game.world.centerX;
		monsterMinCoinAmount = 2;
		monsterMaxCoinAmount = 5;
		maxCoinsOnFloor = 50;
		collectCoinsAt = 30;
		coinsOnFloor = 0;
		coinWait = 15;
		// coin = 0;
		coinIndex = 0;
		playCoin = false;
		maxCPS = 35;
		currentMImage = 0;
		containerSize = 80;
		test = this.numFormatter(1012000000000000,2);
		
		/*
		 * this.background = this.game.add.group(); // setup each of our
		 * background layers to take the full screen ['fightbg']
		 * .forEach(function(image) { var bg = state.game.add.tileSprite(0, 0,
		 * state.game.world.width, state.game.world.height, image, '',
		 * state.background); bg.tileScale.setTo(4,4); });
		 */

		back = this.add.sprite(0, 0, 'fightbg');
		back.scale.setTo(4, 4);

		this.upgradePanel = this.game.add.image(10, 70, this.game.cache
				.getBitmapData('upgradePanel'));

		/*
		 * this.scrollMask2 = this.game.add.graphics(0, 0);
		 * this.scrollMask2.beginFill(0xffffff); this.scrollMask2.alpha = 1;
		 * this.scrollMask2.drawRect(16, 76, 238, 488);
		 * this.scrollMask2.endFill(); this.scrollMask2.inputEnabled = true;
		 */

		containerSprite = this.game.add.sprite(0, 0);
		scrollMask = this.game.add.graphics(0, 0);
		scrollMask.beginFill(0xffffff);
		scrollMask.alpha = 1;
		scrollMask.drawRect(16, 76, 238, 488);
		scrollMask.endFill();
		containerSprite.mask = scrollMask;// Add your sprites and text
		containerSprite.position.setTo(18, 0);
		// to the
		// containerSprite using addChild//
		// You can move the mask, move the
		// container sprite, and move the
		// sprites within the container.
		// this.containerSprite.inputEnabled = true;
		// this.containerSprite.input.enableDrag();
		// this.containerSprite.input.allowHorizontalDrag = false;

		buttonDown = false;
		buttonDown2 = false;
		// scrollDown = game.add.button(260, 100, 'button', this.changeBoolean,
		// this, 2, 1, 0);
		// scrollUp = game.add.button(260, 50, 'button', this.changeBoolean2,
		// this, 2, 1, 0);
		// button2.onDown.add(this.moveUI,this);
		bounds = new Phaser.Rectangle(0, -170, 238, 202);
		// this.containerSprite.input.boundsRect = bounds;

		this.scrollBarBG = this.game.add.image(257, 70, this.game.cache
				.getBitmapData('scrollOverall'));

		bounds2 = new Phaser.Rectangle(263, 76, 19, 488);
		/*
		 * var graphics = game.add.graphics(bounds2.x, bounds2.y);
		 * graphics.beginFill(0x000077); graphics.drawRect(0, 0, bounds2.width,
		 * bounds2.height);
		 */
		var bmd = this.game.add.bitmapData(19, 100);
		var grd = bmd.context.createLinearGradient(0, 0, 0, 100);
		grd.addColorStop(1, '#3a3a3a');
		grd.addColorStop(0, '#3a3a3a');
		bmd.ctx.beginPath();
		bmd.ctx.rect(0, 0, 19, 100);
		bmd.ctx.fillStyle = grd;
		bmd.ctx.fill();

		this.scrollBar = this.game.add.sprite(263, 76, bmd);
		this.scrollBar.inputEnabled = true;
		this.scrollBar.input.enableDrag();
		this.scrollBar.input.allowHorizontalDrag = false;
		this.scrollBar.input.boundsRect = bounds2;
		this.scrollBar.events.onInputOver.add(function() {
			this.scrollBar.tint = 0x000000;
		}, this);
		this.scrollBar.events.onInputOut.add(function() {
			this.scrollBar.tint = 0xffffff;
		}, this);

	
		
		game.input.mouse.mouseWheelCallback = mouseWheel;
		function mouseWheel(event) {   
			console.log(game.input.mouse.wheelDelta);
			this.scrollBar.y+=-(game.input.mouse.wheelDelta);
		}
		
		
		this.scrollBarBG.inputEnabled = true;
		this.scrollBarBG.events.onInputDown.add(this.moveBarToMouse, this);

		// this.scrollBar.beginFill(0x000000);
		// this.scrollBar.alpha = 1;
		// this.scrollBar.drawRect(261, 76, 17, 100);
		// this.scrollBar.endFill();
		// this.scrollBar2 = this.game.add.sprite(0, 0);
		// this.scrollBar2 = this.scrollBar;
		// this.scrollBar2.inputEnabled = true;
		// this.scrollBar2.input.enableDrag();
		// this.scrollBar2.input.allowHorizontalDrag = false;
		// this.scrollBar.anchor.set(0.5);

		// graphics.anchor.set(0.5);
		// this.scrollBar2.input.boundsRect = bounds2;

		// this.scrollMask.inputEnabled = true;
		// this.scrollMask.input.enableDrag();
		// this.scrollMask.input.allowHorizontalDrag = false;
		// this.upgradePanel = this.scrollMask.addChild(this.game.add.group());
		// this.containerSprite.events.onInputDown.add(this.moveUI, this);

		upgradeButtons = containerSprite.addChild(this.game.add.group());
		// upgradeButtons.position.setTo(18, 80);
		var upgradeButtonsData = [ {
			icon : 'dagger',
			name : 'Attack',
			damage: 1,
			nextdamage : 2,
			level : 0,
			cost : 5,
			purchaseHandler : function(button, player) {
				player.clickDmg += 1;
				button.details.damage+=1;
				button.details.nextdamage+=1;
			}
		}, {
			icon : 'browncatIcon',
			name : 'Brown Cat',
			damage : 0,
			nextdamage : 5,
			level : 0,
			cost : 25,
			purchaseHandler : function(button, player) {
				brownKitty.position.set(800,300);
				brownKitty.animations.play('idle', 4, true);
				player.dps += 5;
				button.details.damage+=5;
				button.details.nextdamage+=5;
			}
		}, {
			icon : 'browncatIcon',
			name : 'Brown Cat',
			damage : 0,
			nextdamage : 5,
			level : 0,
			cost : 25,
			purchaseHandler : function(button, player) {
				brownKitty.position.set(800,300);
				brownKitty.animations.play('idle', 4, true);
				player.dps += 5;
				button.details.damage+=5;
				button.details.nextdamage+=5;
			}
		}, {
			icon : 'browncatIcon',
			name : 'Brown Cat',
			damage : 0,
			nextdamage : 5,
			level : 0,
			cost : 25,
			purchaseHandler : function(button, player) {
				brownKitty.position.set(800,300);
				brownKitty.animations.play('idle', 4, true);
				player.dps += 5;
				button.details.damage+=5;
				button.details.nextdamage+=5;
			}
		}, {
			icon : 'browncatIcon',
			name : 'Brown Cat',
			damage : 0,
			nextdamage : 5,
			level : 0,
			cost : 25,
			purchaseHandler : function(button, player) {
				brownKitty.position.set(800,300);
				brownKitty.animations.play('idle', 4, true);
				player.dps += 5;
				button.details.damage+=5;
				button.details.nextdamage+=5;
			}
		}, {
			icon : 'browncatIcon',
			name : 'Brown Cat',
			damage : 0,
			nextdamage : 5,
			level : 0,
			cost : 25,
			purchaseHandler : function(button, player) {
				brownKitty.position.set(800,300);
				brownKitty.animations.play('idle', 4, true);
				player.dps += 5;
				button.details.damage+=5;
				button.details.nextdamage+=5;
			}
		}, {
			icon : 'browncatIcon',
			name : 'Brown Cat',
			damage : 0,
			nextdamage : 5,
			level : 0,
			cost : 25,
			purchaseHandler : function(button, player) {
				brownKitty.position.set(800,300);
				brownKitty.animations.play('idle', 4, true);
				player.dps += 5;
				button.details.damage+=5;
				button.details.nextdamage+=5;
			}
		}, {
			icon : 'browncatIcon',
			name : 'Brown Cat',
			damage : 0,
			nextdamage : 5,
			level : 0,
			cost : 25,
			purchaseHandler : function(button, player) {
				brownKitty.position.set(800,300);
				brownKitty.animations.play('idle', 4, true);
				player.dps += 5;
				button.details.damage+=5;
				button.details.nextdamage+=5;
			}
		}, {
			icon : 'browncatIcon',
			name : 'Brown Cat',
			damage : 0,
			nextdamage : 5,
			level : 0,
			cost : 25,
			purchaseHandler : function(button, player) {
				brownKitty.position.set(800,300);
				brownKitty.animations.play('idle', 4, true);
				player.dps += 5;
				button.details.damage+=5;
				button.details.nextdamage+=5;
			}
		}, {
			icon : 'browncatIcon',
			name : 'Brown Cat',
			damage : 0,
			nextdamage : 5,
			level : 0,
			cost : 25,
			purchaseHandler : function(button, player) {
				brownKitty.position.set(800,300);
				brownKitty.animations.play('idle', 4, true);
				player.dps += 5;
				button.details.damage+=5;
				button.details.nextdamage+=5;
			}
		}, {
			icon : 'browncatIcon',
			name : 'Brown Cat',
			damage : 0,
			nextdamage : 5,
			level : 0,
			cost : 25,
			purchaseHandler : function(button, player) {
				brownKitty.position.set(800,300);
				brownKitty.animations.play('idle', 4, true);
				player.dps += 5;
				button.details.damage+=5;
				button.details.nextdamage+=5;
			}
		}, {
			icon : 'browncatIcon',
			name : 'Brown Cat',
			damage : 0,
			nextdamage : 5,
			level : 0,
			cost : 25,
			purchaseHandler : function(button, player) {
				brownKitty.position.set(800,300);
				brownKitty.animations.play('idle', 4, true);
				player.dps += 5;
				button.details.damage+=5;
				button.details.nextdamage+=5;
			}
		}, {
			icon : 'browncatIcon',
			name : 'Brown Cat',
			damage : 0,
			nextdamage : 5,
			level : 0,
			cost : 25,
			purchaseHandler : function(button, player) {
				brownKitty.position.set(800,300);
				brownKitty.animations.play('idle', 4, true);
				player.dps += 5;
				button.details.damage+=5;
				button.details.nextdamage+=5;
			}
		}, {
			icon : 'browncatIcon',
			name : 'Brown Cat',
			damage : 0,
			nextdamage : 5,
			level : 0,
			cost : 25,
			purchaseHandler : function(button, player) {
				brownKitty.position.set(800,300);
				brownKitty.animations.play('idle', 4, true);
				player.dps += 5;
				button.details.damage+=5;
				button.details.nextdamage+=5;
			}
		}];

		var button;
		upgradeButtonsData.forEach(function(buttonData, index) {
			button = state.game.add.button(4, (62 * index) + 80,
					'upgradeButton', null, this, 2, 1, 0);
			button.icon = button.addChild(state.game.add.image(6, 10,
					buttonData.icon));
			button.text = button.addChild(state.game.add.text(52, 3,
					buttonData.name + ' Lvl: ' + buttonData.level, {
						font : '16px visitor',
						fill : '#fff'
					}));
			button.details = buttonData;
			if(button.details.name == 'Attack'){
				button.damageText = button.addChild(state.game.add.text(52, 16,
						'Click DMG: ' + buttonData.damage, {
							font : '16px visitor',
							fill : '#fff'
						}));
			} else {
			button.damageText = button.addChild(state.game.add.text(52, 16,
					'DPS: ' + buttonData.damage, {
						font : '16px visitor',
						fill : '#fff'
					}));
		}
			button.nextdamageText = button.addChild(state.game.add.text(52, 29,
					'', {
						font : '16px visitor',
						fill : '#fff'
					}));
					
			button.costText = button.addChild(state.game.add.text(52, 42,
					'Upgrade Cost: ' + buttonData.cost, {
						font : '16px visitor',
						fill : '#fff'
					}));


			button.input.useHandCursor = false;
			if(button.details.name == 'Attack'){
				button.events.onInputOver.add(function(button){
					/*
					var upgradedATK = ' +' + (button.details.nextdamage - buttonData.damage);
					upgradedATK.fill = '#00ff04';
					button.nextdamageText.fill = '#00ff04';
					button.damageText.text = 'Click DMG: ' + buttonData.damage;
					button.damageText.addColor('#00ff04', button.damageText.text.length);
					button.damageText.text+= upgradedATK;
					*/
					button.nextdamageText.text = 'Next Lvl DMG: ' + buttonData.nextdamage;
					button.nextdamageText.fill = '#00ff04';
				}, this);
				button.events.onInputOut.add(function(button){
					button.nextdamageText.fill = '#fff';
					button.damageText.text = 'Click DMG: ' + buttonData.damage;
					button.nextdamageText.text = '';
				}, this);
			} else {
			button.events.onInputOver.add(function(button){
				//button.tint = 0x000000;
				//button.damageText.text = 'DPS: ' + buttonData.damage + ' +' + (button.details.nextdamage - buttonData.damage);
				button.nextdamageText.text = 'Next Lvl DPS: ' + buttonData.nextdamage;
				button.nextdamageText.fill = '#00ff04';
			}, this);
			button.events.onInputOut.add(function(button){
				//button.tint = 0x000000;
				button.damageText.text = 'DPS: ' + buttonData.damage;
				button.nextdamageText.text = '';
			}, this);
			}
			button.events.onInputDown.add(state.onUpgradeButtonClick, state);
			// button.input.priorityID = 99;
			containerSize += 62;
			containerSprite.addChild(button);
			// upgradeButtons.addChild(button);
		});

		var monsterData = [ {
			name : 'Mouse Mouse',
			image : 'smallmouse',
			maxHealth : 10,
			minCoinDrop : 2,
			maxCoinDrop : 5
		}, {
			name : 'El Pinkru Mouse',
			image : 'smallmouse2',
			maxHealth : 15,
			minCoinDrop : 5,
			maxCoinDrop : 10
		} /*
			 * { name : 'Aerocephal', image : 'aerocephal', maxHealth : 10 }, {
			 * name : 'Arcana Drake', image : 'arcana_drake', maxHealth : 20 }, {
			 * name : 'Aurum Drakueli', image : 'aurum-drakueli', maxHealth : 30 }, {
			 * name : 'Bat', image : 'bat', maxHealth : 5 }, { name :
			 * 'Daemarbora', image : 'daemarbora', maxHealth : 10 }, { name :
			 * 'Deceleon', image : 'deceleon', maxHealth : 10 }, { name :
			 * 'Demonic Essence', image : 'demonic_essence', maxHealth : 15 }, {
			 * name : 'Dune Crawler', image : 'dune_crawler', maxHealth : 8 }, {
			 * name : 'Green Slime', image : 'green_slime', maxHealth : 3 }, {
			 * name : 'Nagaruda', image : 'nagaruda', maxHealth : 13 },
			 */
		/*
		 * , { name : 'Scorpion', image : 'scorpion', maxHealth : 2 }, { name :
		 * 'Skeleton', image : 'skeleton', maxHealth : 6 }, { name : 'Snake',
		 * image : 'snake', maxHealth : 4 }, { name : 'Spider', image :
		 * 'spider', maxHealth : 4 }, { name : 'Stygian Lizard', image :
		 * 'stygian_lizard', maxHealth : 20 }
		 */];
		this.monsters = this.game.add.group();

		var monster;
		monsterData.forEach(function(data) {
			// create a sprite for them off screen
			monster = state.monsters.create(1500, state.game.world.centerY,
					data.image);

			// use the built in health component
			monster.health = monster.maxHealth = data.maxHealth;
			// center anchor
			monster.anchor.setTo(0.5, 1);
			// reference to the database
			monster.scale.setTo(4);
			monster.animations.add('owie');
			monster.animations.add('dead');
			monster.animations.add('idle');
			// monster.loadTexture(monster.details.image, 0, false);
			monster.animations.play('idle', 4, true);
			monster.details = data;

			// enable input so we can click it!
			monster.inputEnabled = true;
			// monster.events.onInputDown.add(state.onClickMonster, state);

			// hook into health and lifecycle events
			monster.events.onKilled.add(state.onKilledMonster, state);
			monster.events.onRevived.add(state.onRevivedMonster, state);
		});

		// region click
		topLeftQuarter = new Phaser.Rectangle(
				this.game.world.centerX - 530 / 2,
				this.game.world.centerY - 370 / 2, 530, 370);
		handlePointerDown = function(pointer) {
			var inside = topLeftQuarter.contains(pointer.x, pointer.y);
			if (inside) {
				state.onClickMonster(this, pointer);
			}

			// console.log('pointer is inside region top left quarter', inside);
		}
		this.game.input.onDown.add(handlePointerDown);

		// display the monster front and center
		currentMonster = this.monsters.getRandom();
		// this.currentMonster.animations.add('owie');
		// this.currentMonster.animations.add('idle');
		// this.currentMonster.animations.add('dead');
		currentMonster.position.set(this.game.world.centerX,
				this.game.world.centerY + 80);

		this.dmgTextPool = this.add.group();
		var dmgText;

		for (var d = 0; d < maxCPS; d++) {
			dmgText = this.add.text(0, 0, '1', {
				font : '64px visitor',
				// fill : '#d83838',
				stroke : '#000',
				strokeThickness : 4
			});
			var grd = dmgText.context.createLinearGradient(0, 0, 0,
					dmgText.height);
			// Add in 2 color stops
			grd.addColorStop(0, '#d88838');
			grd.addColorStop(1, '#db4437');
			dmgText.fill = grd;

			// start out not existing, so we don't draw it yet
			dmgText.exists = false;
			dmgText.tween = game.add.tween(dmgText).to(
					{
						alpha : 0.1,
						y : 100,
						x : this.game.rnd.integerInRange(
								this.game.world.centerX - 50,
								this.game.world.centerX + 50)
					}, 1500, Phaser.Easing.Circular.InOut);

			dmgText.tween.onComplete.add(function(text, tween) {
				text.kill();
			});
			this.dmgTextPool.add(dmgText);
		}

		this.clawPool = this.add.group();
		var claw;
		for (var d = 0; d < maxCPS; d++) {
			claw = this.add.sprite(this.game.input.mousePointer.x + 20,
					this.game.input.mousePointer.y + 20, 'clawing');
			claw.scale.setTo(2, 2);
			claw.animations.add('slash');
			claw.anchor.setTo(.5, .5);
			// claw.scale.x *= -1;
			claw.scale.y *= -1;
			// start out not existing, so we don't draw it yet
			claw.exists = false;
			claw.tween = game.add.tween(claw).to({
				angle : 0,
				alpha : 1,
				x : mouseX,
				y : mouseY

			}, 500, Phaser.Easing.Circular.InOut);

			claw.tween.onComplete.add(function(claw, tween) {
				// console.log(mouseY);
				blackKitty.loadTexture('blackKitty', 0, false);
				blackKitty.animations.play('idle', 4, true);
				claw.animations.stop(null, true);
				claw.kill();
			});
			this.clawPool.add(claw);
		}

		// KITTIES
		blackKitty = game.add
				.sprite(game.world.centerX + 30, 190, 'blackKitty');
		blackKitty.scale.setTo(3, 3);
		blackKitty.animations.add('idle');
		blackKitty.animations.add('battack');
		blackKitty.animations.play('idle', 4, true);
		
		brownKitty = game.add.sprite(2000, 300, 'brownKitty');
		brownKitty.scale.setTo(2);
		brownKitty.animations.add('idle');
		
		
		//

		// create gold text pickup
		this.goldTextPool = this.add.group();
		var goldText;
		for (var d = 0; d < maxCoinsOnFloor; d++) {
			goldText = this.add.text(0, 0, '1', {
				font : '32px visitor',
				fill : '#fff',
				strokeThickness : 4
			});
			// start out not existing, so we don't draw it yet
			goldText.exists = false;
			goldText.tween = game.add.tween(goldText).to({
				alpha : 0.5,
				y : this.game.world.centerY + 50,
			// x: this.game.world.centerX
			}, 1000, Phaser.Easing.Cubic.Out);

			goldText.tween.onComplete.add(function(text, tween) {
				text.kill();
				// goldText.reset(coin.x, 455);
			});
			this.goldTextPool.add(goldText);
		}

		// create a pool of gold coins
		this.coins = this.add.group();
		this.coins.createMultiple(maxCoinsOnFloor, 'gold_coin', '', false);
		this.coins.setAll('inputEnabled', true);
		this.coins.setAll('goldValue', 1);
		this.coins.callAll('events.onInputUp.add', 'events.onInputOver',
				this.onClickCoin, this);
		// current player gold text
		this.playerGoldText = this.add.text(30, 30, 'Gold: ' + goldRounded, {
			font : 'VT323',
			fontStyle : 'bold',
			fontSize : 24,
			fill : '#fff',
			strokeThickness : 4
		});

		// 100ms 10x a second
		// HP BAR
		var bmd = this.game.add.bitmapData(300, 30);
		bmd.ctx.beginPath();
		bmd.ctx.rect(0, 0, 300, 80);
		bmd.ctx.fillStyle = '#400000';
		bmd.ctx.fill();

		var bglife = this.game.add.sprite(this.game.world.centerX,
				this.game.world.centerY + 290, bmd);
		bglife.anchor.set(0.5);

		bmd = this.game.add.bitmapData(280, 20);
		bmd.ctx.beginPath();
		bmd.ctx.rect(0, 0, 300, 80);
		bmd.ctx.fillStyle = '#880000';
		bmd.ctx.fill();

		this.widthLife = new Phaser.Rectangle(0, 0, bmd.width, bmd.height);
		this.totalLife = bmd.width;

		this.life = this.game.add.sprite(this.game.world.centerX - bglife.width
				/ 2 + 10, this.game.world.centerY + 290, bmd);
		this.life.anchor.y = 0.5;
		this.life.cropEnabled = true;
		this.life.crop(this.widthLife);
		// end of HP BAR

		// monsterUI
		/*
		 * this.monsterInfoUI = this.game.add.group();
		 * this.monsterInfoUI.position.setTo(this.game.world.centerX,
		 * this.currentMonster.y + 120); this.monsterNameText =
		 * this.monsterInfoUI.addChild(this.game.add.text( 0, 0,
		 * this.currentMonster.details.name, { font : '48px visitor', fill :
		 * '#fff', strokeThickness : 4 })); this.monsterHealthText =
		 * this.monsterInfoUI.addChild(this.game.add .text(0, 40,
		 * this.currentMonster.health + ' HP', { font : '32px visitor', fill :
		 * '#ff0000', strokeThickness : 4 }));
		 */

		this.monsterNameText = this.game.add.text(this.game.world.centerX,
				this.game.world.centerY + 253, currentMonster.details.name, {
					font : '48px visitor',
					fill : '#fff',
					strokeThickness : 4
				});
		this.monsterNameText.anchor.set(0.5);

		this.monsterHealthText = this.game.add.text(this.game.world.centerX,
				this.game.world.centerY + 293, currentMonster.health + ' HP', {
					font : '32px visitor',
					fill : '#ff0000',
					strokeThickness : 4
				});
		this.monsterHealthText.anchor.set(0.5);
		// end of monsterUI

		// timers
		this.dpsTimer = this.game.time.events.loop(100, this.onDPS, this);
		this.cpsTimer = this.game.time.events.loop(Phaser.Timer.SECOND,
				this.resetCPS, this);
		this.collectTimer = game.time.create(false);
		this.collectTimer.loop(50, this.collectCoins, this);
		// this.mouseTimer = this.game.time.events.loop(1, this.mouseRefresh,
		// this);
		// end of timers

		// setup the world progression display
		this.levelUI = this.game.add.group();
		this.levelUI.position.setTo(this.game.world.centerX - 200, 30);
		this.levelText = this.levelUI.addChild(this.game.add.text(0, 0,
				'Level: ' + this.level, {
					font : '24px visitor',
					fill : '#fff',
					strokeThickness : 4
				}));
		this.levelKillsText = this.levelUI.addChild(this.game.add.text(0, 20,
				'Kills: ' + this.levelKills + '/' + this.levelKillsRequired, {
					font : '24px visitor',
					fill : '#fff',
					strokeThickness : 4
				}));
		this.levelDPS = this.levelUI.addChild(this.game.add.text(0, 40,
				'Team DPS: ' + this.player.dps, {
					font : '24px visitor',
					fill : '#fff',
					strokeThickness : 4
				}));
		/*
		 * this.currentMonsterImage =
		 * this.levelUI.addChild(this.game.add.text(0, 60, 'Current Monster
		 * Image: ' + currentMImage, { font : '24px visitor', fill : '#fff',
		 * strokeThickness : 4 }));
		 */
		/*
		 * this.spriteY = this.levelUI.addChild(this.game.add.text(0, 60,
		 * 'Sprite Y: ' + this.scrollBar.y, { font : '24px visitor', fill :
		 * '#fff', strokeThickness : 4 })); this.containerY =
		 * this.levelUI.addChild(this.game.add.text(0, 80, 'Container Y: ' +
		 * containerSprite.y, { font : '24px visitor', fill : '#fff',
		 * strokeThickness : 4 })); this.buttonH =
		 * this.levelUI.addChild(this.game.add.text(0, 100, 'Buttons Height: ' +
		 * button.height, { font : '24px visitor', fill : '#fff',
		 * strokeThickness : 4 }));
		 */
		/*
		 * this.levelClicks = this.levelUI.addChild(this.game.add.text(0, 40,
		 * 'Clicks per sec: ' + cps, { font : '24px visitor', fill : '#fff',
		 * strokeThickness : 4 })); this.levelCPS =
		 * this.levelUI.addChild(this.game.add.text(0, 60, 'Highest Clicks per
		 * sec: ' + highestCPS, { font : '24px visitor', fill : '#fff',
		 * strokeThickness : 4 })); this.levelCoinsOnFloor =
		 * this.levelUI.addChild(this.game.add.text(0, 80, 'Coins on Floor: ' +
		 * coinsOnFloor, { font : '24px visitor', fill : '#fff', strokeThickness :
		 * 4 })); this.levelCoinsIndex =
		 * this.levelUI.addChild(this.game.add.text(0, 100, 'Coin Index: ' +
		 * coinIndex, { font : '24px visitor', fill : '#fff', strokeThickness :
		 * 4 }));
		 */
		game.add.plugin(Phaser.Plugin.Debug);
        this.game.input.mouse.mouseWheelCallback = this.mouseWheel.bind(this);
        fullscreen = game.add.button(1095, 5, 'fullscreen', function(){
            if (this.game.scale.isFullScreen)
            {
            	this.game.scale.stopFullScreen();
            }
            else
            {
            	this.game.scale.startFullScreen(false);
            }
        }, this, 2, 1, 0);
		
	},
	update : function() {
		
		if (containerSize >= 576) {
			this.scrollBar.visible = true;
			this.scrollBarBG.visible = true;
			this.scrollBar.enabled = true;
			// this.scrollBar.input.enableDrag();
			containerSprite.y = -(((this.scrollBar.y - 76) * (containerSize - 560)) / 388)
		} else {
			this.scrollBar.visible = false;
			this.scrollBarBG.visible = false;
			this.scrollBar.enabled = false;
			// this.scrollBar.input.enableDrag();
		}

		if (this.scrollBar.y < 76) {
			this.scrollBar.y = 76;
		} else if (this.scrollBar.y > 464) {
			this.scrollBar.y = 464;
		}

		goldRounded = this.numFormatter(this.player.gold, 2);
		// this.levelCoinsOnFloor.text = 'Coins on Floor: ' + coinsOnFloor;
		// this.levelCoinsIndex.text = 'Coin Index: ' + coinIndex;
		// this.currentMonsterImage.text = 'Current Monster Image: ' +
		// currentMImage;
		// this.spriteY.text = 'ScrollBar Y: ' + this.scrollBar.y;
		// this.containerY.text = 'Container Y: ' + containerSprite.y;
		// this.buttonH.text = 'Buttons Height: ' + containerSize;

		this.levelDPS.text = 'Team DPS: ' + this.player.dps;
		this.playerGoldText.text = 'Gold: ' + goldRounded;

		if (playCoin) {
			this.collectTimer.start();
			this.collectTimer.resume();
			// console.log(playCoin);
		}

		// update hp bar
		if (currentMonster.health != currentMonster.maxHealth) {
			this.game.add
					.tween(this.widthLife)
					.to(
							{
								width : (((currentMonster.health)
										* this.totalLife - 1) / currentMonster.maxHealth)
							}, 50, Phaser.Easing.Linear.None, true);
			// end update hp bar
		} else {
			this.widthLife.width = (((currentMonster.health) * this.totalLife - 1) / currentMonster.maxHealth);
		}
		this.life.updateCrop();

		if (currentMonster.health == 0) {
			currentMonster.loadTexture(currentMonster.details.image + '_dead',
					0, false);
			currentMonster.animations.play('dead', 3, false, true);
		}

	},
	moveBarToMouse : function() {
		this.scrollBar.y = this.game.input.mousePointer.y
				- this.scrollBar.height / 2;
	},
	listener : function(sprite, pointer) {
		mouseX = pointer.x;
		mouseY = pointer.y;
	},
	onDPS : function() {
		if (this.player.dps > 0) {
			if (currentMonster && currentMonster.alive) {
				var dmg = Math.round(this.player.dps / 10);
				if ((currentMonster.health - dmg) <= 0) {
					currentMonster.health = 0;
					this.monsterHealthText.text = 'DEAD';
				} else {
					currentMonster.damage(dmg);
					// update the health text
					this.monsterHealthText.text = currentMonster.alive ? Math
							.round(currentMonster.health)
							+ ' HP' : 'DEAD';
				}
			}

		}
	},
	resetCPS : function() {
		if (cps > highestCPS) {
			highestCPS = cps;
			// this.levelCPS.text = 'Highest Clicks per sec: ' + highestCPS;
			if (highestCPS > maxCPS) {
				// this.levelCPS.text = 'Highest Clicks per sec: LEL AUTOCLICK';
			}
		}
		cps = 0;
		// this.levelClicks.text = 'Clicks per sec: ' + cps;
	},
	mouseRefresh : function() {
		game.canvas.style.cursor = 'url(assets/images/mouse.png),auto';
	},
	collectCoins : function() {
		if (coinIndex >= this.coins.length) {
			coinIndex = 0;
			playCoin = false;
			this.collectTimer.pause();
			// this.game.time.events.remove(this.collectTimer);
		} else if (coinIndex < this.coins.length) {
			this.onClickCoin(this.coins.getAt(coinIndex));
			coinIndex++;
		}
	},
    mouseWheel: function(event){
		if (this.scrollBar.y == 76 && game.input.mouse.wheelDelta==1) {
			return;
		} else if (this.scrollBar.y == 464 && game.input.mouse.wheelDelta==-1){
			return;
		} else {
			this.scrollBar.y += -(game.input.mouse.wheelDelta)*97;
		}
        //console.log(game.input.mouse.wheelDelta);  
        
      },
	playCoin : function() {
		playCoin = true;
	},
	onUpgradeButtonClick : function(button, pointer) {
		// make this a function so that it updates after we buy
		if (this.game.input.mousePointer.y < 564
				&& this.game.input.mousePointer.y > 74) {
			function getAdjustedCost() {
				return Math.ceil(button.details.cost
						+ (button.details.level * 1.46));
			}

			if (this.player.gold - getAdjustedCost() >= 0) {
				this.player.gold -= getAdjustedCost();
				this.playerGoldText.text = 'Gold: ' + goldRounded;
				button.details.level++;
				button.text.text = button.details.name + ' Lvl: '
						+ button.details.level;
				button.costText.text = 'Upgrade Cost: ' + getAdjustedCost();
				button.tint = 0xffffff;
				button.details.purchaseHandler.call(this, button, this.player);
				button.damageText.text = 'DPS: ' + button.details.damage;
				//button.nextdamageText.text = 'Next Lvl DPS: ' + button.details.nextdamage;
			}
		}
	},
	onClickCoin : function(coin) {
		if (!coin.alive) {
			return;
		}
		// give the player gold
		coin.alive = false;
		coinsOnFloor--;
		this.game.time.events.remove(coin.Events);
		this.player.gold += coin.goldValue;
		// update UI
		this.playerGoldText.text = 'Gold: ' + goldRounded;
		// remove the coin
		coin.tween = game.add.tween(coin).to({
			alpha : 0.9,
			y : 26,
			x : this.playerGoldText.width + 40
		}, 1000, Phaser.Easing.Cubic.Out);

		coin.tween.onComplete.add(function(coin, tween) {
			coin.kill();
		});

		var goldText = this.goldTextPool.getFirstExists(false);
		if (goldText) {
			goldText.text = "+" + coin.goldValue + " Gold";
			goldText.reset(coin.x, 455);
			goldText.alpha = 1;
			goldText.tween.start();
		}
		coin.tween.start();
	},
	onKilledMonster : function(monster) {
		// move the monster off screen again
		// monster.position.set(1500, this.game.world.centerY);
		try {
			if (coinsOnFloor >= collectCoinsAt) {
				playCoin = true;
			}
			// amount of coins dropped
			if (coinsOnFloor < maxCoinsOnFloor) {
				var temp = maxCoinsOnFloor - coinsOnFloor;
				if (temp <= currentMonster.details.maxCoinDrop) {
					var tempMaxCoin = temp;
					var tempMinCoin = 1;
				} else {
					tempMaxCoin = currentMonster.details.maxCoinDrop;
					tempMinCoin = currentMonster.details.minCoinDrop;
				}
				for (var i = 0; i < this.game.rnd.integerInRange(tempMinCoin,
						tempMaxCoin); i++) {
					var coin;
					// spawn coin/coins on the ground
					coin = this.coins.getFirstExists(false);
					coin.alpha = 0;
					// range coin drops
					coin.reset(this.game.rnd.integerInRange(
							this.game.world.centerX - 100,
							this.game.world.centerX + 100),
							this.game.world.centerY);
					game.add.tween(coin).to(
							{
								alpha : 1,
								y : this.game.world.centerY + 160,
								x : this.game.world.centerX
										+ this.game.rnd.integerInRange(-250,
												210)
							}, 1000, Phaser.Easing.Bounce.Out, true);

					coin.alpha = 1;
					coin.goldValue = Math.round(this.level * 1.33);
					coin.Events = game.time.events.add(Phaser.Timer.SECOND
							* coinWait, this.playCoin, this);
					coinsOnFloor++;
				}
			}

			this.levelKills++;

			if (this.levelKills >= this.levelKillsRequired) {
				this.level++;
				this.levelKills = 0;
			}

			this.levelText.text = 'Level: ' + this.level;
			this.levelKillsText.text = 'Kills: ' + this.levelKills + '/'
					+ this.levelKillsRequired;

			// pick a new monster
			currentMonster = this.monsters.getRandom();
			// upgrade the monster based on level
			currentMonster.maxHealth = Math
					.ceil(currentMonster.details.maxHealth
							+ ((this.level - 1) * 10.6));
			// make sure they are fully healed
			currentMonster.revive(currentMonster.maxHealth);
			currentMonster.loadTexture(currentMonster.details.image, 0, false);
			currentMonster.animations.play('idle', 4, true);
		} catch (e) {
			if (e instanceof TypeError) {
				currentMonster = this.monsters.getRandom();
				currentMonster.maxHealth = Math
						.ceil(currentMonster.details.maxHealth
								+ ((this.level - 1) * 10.6));
				currentMonster.revive(currentMonster.maxHealth);
				currentMonster.loadTexture(currentMonster.details.image, 0,
						false);
				currentMonster.animations.play('idle', 4, true);
			}
		}

	},
	onRevivedMonster : function(monster) {
		monster.position.set(this.game.world.centerX,
				this.game.world.centerY + 80);
		// update the text display
		this.monsterNameText.text = monster.details.name;
		this.monsterHealthText.text = monster.health + 'HP';
		this.widthLife.width = this.totalLife;
	},
	onClickMonster : function(monster, pointer) {
		cps += 1;
		currentMImage = currentMonster.details.image;
		// this.levelClicks.text = 'Clicks per sec: ' + cps;
		// apply click damage to monster
		if (cps <= maxCPS && this.monsterHealthText != 'DEAD') {
			if ((currentMonster.health - this.player.clickDmg) <= 0
					&& this.monsterHealthText != 'DEAD') {
				this.monsterHealthText.text = 'DEAD';
				currentMonster.health = 0;
			} else {
				currentMonster.damage(this.player.clickDmg);
				var owieMonster = currentMonster.details.image + '_owie';
				currentMonster.loadTexture(owieMonster, 0, false);
				currentMonster.animations.play('owie', 10, false);

				// grab a damage text from the pool to display what happened
				var dmgText = this.dmgTextPool.getFirstExists(false);
				if (dmgText) {
					dmgText.text = this.player.clickDmg;
					dmgText.anchor.set(0.5);
					dmgText.reset(this.game.world.centerX,
							this.game.world.centerY - 50);
					dmgText.alpha = 1;
					dmgText.tween.start();
				}

				this.monsterHealthText.text = currentMonster.alive ? currentMonster.health
						+ ' HP'
						: 'DEAD';

			}
		}
		var claw = this.clawPool.getFirstExists(false);
		if (claw) {
			blackKitty.loadTexture('blackKittyATK', 0, false);
			blackKitty.animations.play('battack', 3, true);
			claw.tween = game.add.tween(claw).to({
				angle : 0,
				alpha : 1,
				x : this.game.input.mousePointer.x,
				y : this.game.input.mousePointer.y

			}, 500, Phaser.Easing.Circular.InOut);
			claw.tween.onComplete.add(function(claw, tween) {
				// console.log(mouseY);
				blackKitty.loadTexture('blackKitty', 0, false);
				blackKitty.animations.play('idle', 4, true);
				if (currentMonster.health > 0) {
					currentMonster.loadTexture(currentMonster.details.image, 0,
							false);
					currentMonster.animations.play('idle', 4, true);
				}
				claw.animations.stop(null, true);
				claw.kill();
			});
			claw.reset(this.game.input.mousePointer.x - 20,
					this.game.input.mousePointer.y - 20);
			claw.animations.play('slash', 10, false);
			claw.alpha = 1;
			claw.angle = 0;
			// claw.animations.stop('slash', 4);
		}
		try {
			claw.tween.start();
		} catch (e) {
			if (e instanceof TypeError) {
				return;
			}
		}

	},
	numFormatter : function(num, digits) {
		var si = [ {
			value : 1E24,
			symbol : "dd"
		}, {
			value : 1E21,
			symbol : "cc"
		}, {
			value : 1E18,
			symbol : "bb"
		}, {
			value : 1E15,
			symbol : "aa"
		}, {
			value : 1E12,
			symbol : "T"
		}, {
			value : 1E9,
			symbol : "B"
		}, {
			value : 1E6,
			symbol : "M"
		}, {
			value : 1E3,
			symbol : "K"
		} ], i;
		for (i = 0; i < si.length; i++) {
			if (num >= si[i].value) {
				return (num / si[i].value).toFixed(digits).replace(
						/\.0+$|(\.[0-9]*[1-9])0+$/, "$1")
						+ si[i].symbol;
			}
		}
		return num.toString();
	}
};
