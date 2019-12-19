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
    var V2 = Vector.Vector2D;
    var Snowflake = (function (_super) {
        __extends(Snowflake, _super);
        function Snowflake(_position) {
            _super.call(this, _position.x, _position.y);
            this.move = new V2(Math.random() * 16 - 8, Math.random() * 8 - 7);
            this.radius = Math.random() * 2 + 2;
            this.normalFall = new V2(0, this.radius * 0.5);
        }
        Snowflake.prototype.fall = function () {
            var diff = this.normalFall.getDiff(this.move);
            diff.scale(0.1);
            this.move.add(diff);
            this.move.x += Math.random() * 0.4 - 0.2;
            this.add(this.move);
        };
        Snowflake.prototype.display = function () {
            crc2.fillStyle = "#ffffff";
            crc2.beginPath();
            crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            crc2.fill();
        };
        return Snowflake;
    })(V2);
    LetItSnow.Snowflake = Snowflake;
})(LetItSnow || (LetItSnow = {}));
//# sourceMappingURL=Snowflake.js.map