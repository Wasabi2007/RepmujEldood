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
///<reference path="lib/collections.d.ts"/>
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
            this.physics.p2.gravity.y = 200;
            this.physics.p2.setBoundsToWorld(false, false, false, false);
            this.player = new Reomujeldood.PlayerFigure(this.game, this.world.centerX, this.world.height - 100);
            var startGround = this.game.add.sprite(this.world.centerX, this.world.height + 10, 'paddle');
            startGround.anchor.setTo(0.5, 1);
            startGround.scale.setTo(this.world.width / startGround.width, 20 / startGround.height);
            this.game.physics.p2.enable(startGround);
            startGround.body.static = true;
            this.game.camera.follow(this.player);
            this.paddle = new collections.Queue();
            this.paddleold = this.generatePaddle(this.player.body.x, this.player.body.y, 0, this.player.jumpStrength * 1.5, this.player.strifeSpeed, this.player.jumpStrength * 1.5, this.world.bounds);
            this.paddle.enqueue(this.paddleold);
        };
        MainGameState.prototype.update = function () {
            if (this.paddle.size() < 3) {
                this.paddleold = this.generatePaddle(this.paddleold.x + this.player.width * 0.5, this.paddleold.y - this.player.height * 0.5, 0, this.player.jumpStrength * 0.8 * 2, this.player.strifeSpeed, this.player.jumpStrength * 2, this.world.bounds);
                this.paddle.enqueue(this.paddleold);
            }
            else if (this.paddle.peek().y > this.player.y && (this.paddle.peek().x - this.player.x) * (this.paddle.peek().x - this.player.x) + (this.paddle.peek().y - this.player.y) * (this.paddle.peek().y - this.player.y) > 200 * 200) {
                this.paddle.dequeue().destroy();
            }
            //console.log((this.paddle.peek().x-this.paddle.peek().y)*(this.paddle.peek().x-this.paddle.peek().y)+(this.player.x-this.player.y)*(this.player.x-this.player.y));
            //console.log(400*400);
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