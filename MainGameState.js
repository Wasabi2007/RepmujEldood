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
///<reference path="PlayerFigure.ts"/>
var Reomujeldood;
(function (Reomujeldood) {
    var MainGameState = (function (_super) {
        __extends(MainGameState, _super);
        function MainGameState() {
            _super.apply(this, arguments);
        }
        MainGameState.prototype.create = function () {
            this.physics.startSystem(Phaser.Physics.P2JS);
            this.add.tileSprite(0, 0, 1920, 1920, 'background');
            this.world.setBounds(0, 0, 1920, 1920);
            this.physics.p2.applyGravity = true;
            this.physics.p2.gravity.y = 20;
            this.physics.p2.setBoundsToWorld(false, false, false, false);
            this.player = new Reomujeldood.PlayerFigure(this.game, this.world.centerX, this.world.height - 100);
            this.startGround = this.game.add.sprite(this.world.centerX, this.world.height + 10, 'paddle');
            this.startGround.anchor.setTo(0.5, 1);
            this.startGround.scale.setTo(this.world.width / this.startGround.width, 20 / this.startGround.height);
            this.game.physics.p2.enable(this.startGround, true);
            this.startGround.body.static = true;
            this.paddle1 = this.game.add.sprite(this.world.centerX, this.world.centerY, 'paddle');
            //this.paddle1.scale.setTo(1,1);
            this.paddle1.anchor.setTo(0.5, 0.5);
            this.game.physics.p2.enable(this.paddle1, true);
            this.paddle1.body.static = true;
            this.game.camera.follow(this.player);
        };
        return MainGameState;
    })(Phaser.State);
    Reomujeldood.MainGameState = MainGameState;
})(Reomujeldood || (Reomujeldood = {}));
//# sourceMappingURL=MainGameState.js.map