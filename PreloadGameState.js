/**
 * Created by Jerry on 22.02.2015.
 */
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
///<reference path="build/phaser.d.ts"/>
var Reomujeldood;
(function (Reomujeldood) {
    var PreloadGameState = (function (_super) {
        __extends(PreloadGameState, _super);
        function PreloadGameState() {
            _super.apply(this, arguments);
        }
        PreloadGameState.prototype.preload = function () {
            this.load.image('background', 'assets/debug-grid-1920x1920.png');
            this.load.image('player', 'assets/Jumper.png');
            this.load.image('paddle', 'assets/paddle.png');
            this.load.onLoadComplete.add(this.gotoMain, this);
        };
        PreloadGameState.prototype.gotoMain = function () {
            this.game.state.start('game', true, false);
        };
        return PreloadGameState;
    })(Phaser.State);
    Reomujeldood.PreloadGameState = PreloadGameState;
})(Reomujeldood || (Reomujeldood = {}));
//# sourceMappingURL=PreloadGameState.js.map