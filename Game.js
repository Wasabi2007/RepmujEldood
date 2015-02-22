/**
 * Created by Jerry on 20.02.2015.
 */
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
///<reference path="build/phaser.d.ts"/>
///<reference path="MainGameState.ts"/>
///<reference path="PreloadGameState.ts"/>
var Reomujeldood;
(function (Reomujeldood) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            _super.call(this, 800, 600, Phaser.AUTO, 'content', null);
            this.state.add('preload', Reomujeldood.PreloadGameState, true);
            this.state.add('game', Reomujeldood.MainGameState, false);
        }
        return Game;
    })(Phaser.Game);
    Reomujeldood.Game = Game;
})(Reomujeldood || (Reomujeldood = {}));
//# sourceMappingURL=Game.js.map