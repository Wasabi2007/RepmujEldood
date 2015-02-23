/**
 * Created by Jerry on 23.02.2015.
 */
///<reference path="build/phaser.d.ts"/>
module Reomujeldood {
    export class Paddle extends Phaser.Sprite {
        constructor(game: Phaser.Game, x: number, y:number, width:number){
            super(game,x,y,'paddle');
            game.add.existing(this);
            this.scale.setTo(width/this.width,1);
            this.anchor.setTo(0.5,0.5);

            game.physics.p2.enable(this);
            this.body.static = true;
        }
    }
}