/**
 * Created by Jerry on 20.02.2015.
 */

///<reference path="build/phaser.d.ts"/>
///<reference path="PlayerFigure.ts"/>
module Reomujeldood {
    export class MainGameState extends Phaser.State {
        player: PlayerFigure;

        startGround: Phaser.Sprite;

        paddle1: Phaser.Sprite;

        create(){
            this.physics.startSystem(Phaser.Physics.P2JS);

            this.add.tileSprite(0, 0, 1920, 1920, 'background');
            this.world.setBounds(0, 0, 1920, 1920);

            this.physics.p2.applyGravity=true;
            this.physics.p2.gravity.y = 20;
            this.physics.p2.setBoundsToWorld(false,false,false,false);
            this.player = new PlayerFigure(this.game,this.world.centerX,this.world.height-100);


            this.startGround = this.game.add.sprite(this.world.centerX,this.world.height+10,'paddle');
            this.startGround.anchor.setTo(0.5,1);
            this.startGround.scale.setTo(this.world.width/this.startGround.width,20/this.startGround.height);
            this.game.physics.p2.enable(this.startGround,true);
            this.startGround.body.static = true;


            this.paddle1 = this.game.add.sprite(this.world.centerX,this.world.centerY,'paddle');
            //this.paddle1.scale.setTo(1,1);
            this.paddle1.anchor.setTo(0.5,0.5);

            this.game.physics.p2.enable(this.paddle1,true);
            this.paddle1.body.static = true;

            this.game.camera.follow(this.player);

        }
    }

}