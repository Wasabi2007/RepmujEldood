/**
 * Created by Jerry on 22.02.2015.
 */

///<reference path="build/phaser.d.ts"/>

module Reomujeldood {
    export class PreloadGameState extends Phaser.State {

        preload(){
            this.load.image('background','assets/debug-grid-1920x1920.png');
            this.load.image('player','assets/Jumper.png');
            this.load.image('paddle','assets/paddle.png');
            this.load.onLoadComplete.add(this.gotoMain,this);
        }

        gotoMain(){
            this.game.state.start('game',true,false);
        }

    }

}