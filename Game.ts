/**
 * Created by Jerry on 20.02.2015.
 */

///<reference path="build/phaser.d.ts"/>
///<reference path="MainGameState.ts"/>
///<reference path="PreloadGameState.ts"/>
module Reomujeldood {
    export class Game extends Phaser.Game {
        constructor() {
            super(800, 600, Phaser.AUTO,'content', null);
            this.state.add('preload', PreloadGameState, true);
            this.state.add('game', MainGameState, false);
        }
    }
}