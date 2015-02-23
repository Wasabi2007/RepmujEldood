/**
 * Created by Jerry on 22.02.2015.
 */

///<reference path="build/phaser.d.ts"/>

module Reomujeldood {
    export class PlayerFigure extends Phaser.Sprite {

        keyboard: Phaser.Keyboard;
        jumpStrength: number;
        strifeSpeed:number;

        jumpCoolDown: boolean;
        waitForCollisonEnd: boolean;

        constructor(game: Phaser.Game, x: number, y:number){
            super(game,x,y,'player');
            this.anchor.setTo(0.5,0);
            this.scale.setTo(0.2,0.2);
            game.add.existing(this);
            game.physics.p2.enable(this);

            this.body.fixedRotation = true;
            //this.body.
            this.body.onBeginContact.add(this.blockHitBegin,this);
            this.body.onEndContact.add(this.blockHitEnd,this);
            //this.body.setCollisionCallback();

            this.jumpStrength = 150;
            this.jumpCoolDown = true;
            this.strifeSpeed = 100;
            this.waitForCollisonEnd = false;
        }

        update(){

            this.keyboard = this.game.input.keyboard;
            this.body.velocity.x = 0;
            if((this.keyboard.isDown(Phaser.Keyboard.UP)|| this.keyboard.isDown(Phaser.Keyboard.W))&& this.jumpCoolDown){
                this.body.moveUp(this.jumpStrength);
                this.jumpCoolDown = false;
                this.body.data.shapes[0].sensor = true;
            }
            if((this.keyboard.isDown(Phaser.Keyboard.RIGHT)|| this.keyboard.isDown(Phaser.Keyboard.D))) {
                this.body.moveRight(this.strifeSpeed);
            }
            if((this.keyboard.isDown(Phaser.Keyboard.LEFT)|| this.keyboard.isDown(Phaser.Keyboard.A))) {
                this.body.moveLeft(this.strifeSpeed);
            }

            if(this.body.velocity.y > 0 && !this.waitForCollisonEnd){
                this.body.data.shapes[0].sensor = false;
            }

            this.game.world.wrap(this.body);
            this.game.world.bringToTop(this);
        }

        blockHitBegin(body, shapeA, shapeB, equation){
            this.waitForCollisonEnd = true;
            if(this.body.velocity.y > 0) {
                this.jumpCoolDown = true;
            }

        }

        blockHitEnd (body, shapeA, shapeB, equation) {
            if(this.body.velocity.y > 0 && !this.jumpCoolDown){
                this.body.data.shapes[0].sensor = false;
            }
            this.waitForCollisonEnd = false;
        }
    }

}