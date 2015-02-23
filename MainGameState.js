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
///<reference path="Paddle.ts"/>
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
            var startGround = this.game.add.sprite(this.world.centerX, this.world.height + 10, 'paddle');
            startGround.anchor.setTo(0.5, 1);
            startGround.scale.setTo(this.world.width / startGround.width, 20 / startGround.height);
            this.game.physics.p2.enable(startGround);
            startGround.body.static = true;
            this.game.camera.follow(this.player);
            this.paddle = new Array();
            this.paddle.push(this.generatePaddle(this.player.x, this.player.y, 0, this.player.jumpStrength, this.player.strifeSpeed, this.player.jumpStrength, this.world.bounds));
        };
        MainGameState.prototype.update = function () {
            if (this.paddle.length < 3) {
                this.paddle.push(this.generatePaddle(this.paddle[this.paddle.length - 1].x + this.player.width * 0.5, this.paddle[this.paddle.length - 1].y + this.player.height * 0.5, 0, this.player.jumpStrength * 0.9, this.player.strifeSpeed, this.player.jumpStrength, this.world.bounds));
            }
            else if (this.paddle[0].x * this.player.x + this.paddle[0].y * this.player.y > 1000 * 1000) {
                this.paddle.pop().destroy();
            }
        };
        MainGameState.prototype.generatePaddle = function (x, y, minXDist, minYDist, maxXDist, maxYDist, bounds) {
            var randX = (Math.random() * (maxXDist - minXDist) - (maxXDist - minXDist)) * 2;
            if (randX < 0) {
                randX -= minXDist;
            }
            else {
                randX += minXDist;
            }
            if (x + randX < 0) {
                x = -randX;
            }
            else {
                x = (x + randX) % bounds.right;
            }
            var randY = Math.random() * (maxYDist - minYDist) + minYDist;
            if (y - randY < 0) {
                y = this.world.height - randY;
            }
            else {
                y -= randY;
            }
            return new Reomujeldood.Paddle(this.game, x, y, 200);
        };
        return MainGameState;
    })(Phaser.State);
    Reomujeldood.MainGameState = MainGameState;
})(Reomujeldood || (Reomujeldood = {}));
//# sourceMappingURL=MainGameState.js.map