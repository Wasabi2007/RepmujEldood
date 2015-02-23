/**
 * Created by Jerry on 20.02.2015.
 */

///<reference path="build/phaser.d.ts"/>
///<reference path="PlayerFigure.ts"/>
///<reference path="Paddle.ts"/>
module Reomujeldood {
    export class MainGameState extends Phaser.State {
        player: PlayerFigure;

        paddle:Phaser.Sprite[];
        create(){
            this.physics.startSystem(Phaser.Physics.P2JS);

            this.add.tileSprite(0, 0, 1920, 1920, 'background');
            this.world.setBounds(0, 0, 1920, 1920);

            this.physics.p2.applyGravity=true;
            this.physics.p2.gravity.y = 20;
            this.physics.p2.setBoundsToWorld(false,false,false,false);
            this.player = new PlayerFigure(this.game,this.world.centerX,this.world.height-100);


            var startGround = this.game.add.sprite(this.world.centerX,this.world.height+10,'paddle');
            startGround.anchor.setTo(0.5,1);
            startGround.scale.setTo(this.world.width/startGround.width,20/startGround.height);
            this.game.physics.p2.enable(startGround);
            startGround.body.static = true;

            this.game.camera.follow(this.player);
            this.paddle = new Array();
            this.paddle.push(this.generatePaddle(this.player.x,this.player.y,0,this.player.jumpStrength,this.player.strifeSpeed,this.player.jumpStrength,this.world.bounds));
        }

        update(){
            if(this.paddle.length < 3){
                this.paddle.push(this.generatePaddle(this.paddle[this.paddle.length-1].x+this.player.width*0.5,this.paddle[this.paddle.length-1].y+this.player.height*0.5
                    ,0,this.player.jumpStrength*0.9
                    ,this.player.strifeSpeed,this.player.jumpStrength,this.world.bounds));
            }else if(this.paddle[0].x*this.player.x+this.paddle[0].y*this.player.y>1000*1000 ){
                this.paddle.pop().destroy();
            }
        }

        generatePaddle(x:number, y:number,minXDist:number,minYDist:number,maxXDist:number,maxYDist:number,bounds:Phaser.Rectangle):Paddle{
            var randX = (Math.random()*(maxXDist-minXDist)-(maxXDist-minXDist))*2;

            if(randX <0){
                randX-=minXDist;
            }else{
                randX+=minXDist;
            }

            if(x+randX < 0){
                x = -randX;
            }else {
                x = (x+randX)%bounds.right;
            }

            var randY = Math.random()*(maxYDist-minYDist)+minYDist;

            if(y-randY < 0){
                y = this.world.height-randY;
            }else {
                y -= randY;
            }
            return new Paddle(this.game,x,y,200);
        }
    }

}