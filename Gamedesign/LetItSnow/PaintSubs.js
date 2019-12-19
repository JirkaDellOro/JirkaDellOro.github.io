var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/*
    Let it snow
    (C) Jirka Dell'Oro-Friedl 2015
    Made with TypeScript
    Music from myFreeMp3Club
*/
var LetItSnow;
(function (LetItSnow) {
    var Tree = (function (_super) {
        __extends(Tree, _super);
        function Tree(_pos) {
            _super.call(this, _pos);
            this.size = 2;
        }
        Tree.prototype.drawHitPath = function () {
            crc2.moveTo(-20, -20);
            crc2.lineTo(0, -80);
            crc2.lineTo(20, -20);
            crc2.closePath();
            crc2.moveTo(-20, -50);
            crc2.lineTo(0, -100);
            crc2.lineTo(20, -50);
            crc2.closePath();
        };
        Tree.prototype.drawShape = function () {
            crc2.fillStyle = LetItSnow.COLOR.TREESTEM;
            crc2.fillRect(-5, 0, 10, -20);
            crc2.fillStyle = LetItSnow.COLOR.TREETOP;
            this.drawHitPath();
            crc2.fill();
        };
        return Tree;
    })(LetItSnow.PathObject);
    LetItSnow.Tree = Tree;
    var Hut = (function (_super) {
        __extends(Hut, _super);
        function Hut() {
            _super.apply(this, arguments);
        }
        Hut.prototype.drawHitPath = function () {
            crc2.moveTo(0, 0);
            crc2.lineTo(-50, -10);
            crc2.lineTo(-60, -100);
            crc2.lineTo(-25, -150);
            crc2.lineTo(110, -140);
            crc2.lineTo(160, -90);
            crc2.lineTo(150, 0);
            crc2.closePath();
        };
        Hut.prototype.drawShape = function () {
            crc2.fillStyle = LetItSnow.COLOR.HUTSIDE;
            crc2.moveTo(0, 0);
            crc2.lineTo(-50, -10);
            crc2.lineTo(-60, -100);
            crc2.lineTo(-25, -150);
            crc2.lineTo(-0, -100);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = LetItSnow.COLOR.HUTFRONT;
            crc2.moveTo(0, 0);
            crc2.lineTo(0, -100);
            crc2.lineTo(160, -90);
            crc2.lineTo(150, 0);
            crc2.closePath();
            //this.drawHitPath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = LetItSnow.COLOR.HUTROOF;
            crc2.moveTo(0, -100);
            crc2.lineTo(-25, -150);
            crc2.lineTo(110, -140);
            crc2.lineTo(160, -90);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = LetItSnow.COLOR.HUTWINDOW;
            crc2.moveTo(50, -40);
            crc2.lineTo(50, -78);
            crc2.lineTo(100, -75);
            crc2.lineTo(95, -40);
            crc2.closePath();
            crc2.fill();
        };
        return Hut;
    })(LetItSnow.PathObject);
    LetItSnow.Hut = Hut;
    var Circle = (function (_super) {
        __extends(Circle, _super);
        function Circle() {
            _super.apply(this, arguments);
        }
        Circle.prototype.drawHitPath = function () {
            crc2.arc(0, 0, this.size, 0, Math.PI * 2);
        };
        Circle.prototype.drawShape = function () {
            crc2.fillStyle = "#ff0000";
            this.drawHitPath();
            crc2.fill();
        };
        return Circle;
    })(LetItSnow.PathObject);
    LetItSnow.Circle = Circle;
    var Ground = (function (_super) {
        __extends(Ground, _super);
        function Ground() {
            _super.apply(this, arguments);
        }
        Ground.prototype.drawHitPath = function () {
            var golden = 0.382;
            var height = crc2.canvas.height - this.pos.y;
            var width = crc2.canvas.width;
            crc2.moveTo(0, 0);
            crc2.bezierCurveTo(width / 3, height, width * golden, -150, width, -50);
            crc2.lineTo(width, height);
            crc2.lineTo(0, height);
            crc2.closePath();
        };
        Ground.prototype.drawShape = function () {
            crc2.fillStyle = LetItSnow.COLOR.GRASS;
            this.drawHitPath();
            crc2.fill();
        };
        return Ground;
    })(LetItSnow.PathObject);
    LetItSnow.Ground = Ground;
})(LetItSnow || (LetItSnow = {}));
//# sourceMappingURL=PaintSubs.js.map