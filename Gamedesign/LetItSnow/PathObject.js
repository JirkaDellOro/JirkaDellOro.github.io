/*
    Let it snow
    (C) Jirka Dell'Oro-Friedl 2015
    Made with TypeScript
    Music from myFreeMp3Club
*/
var LetItSnow;
(function (LetItSnow) {
    var V2 = Vector.Vector2D;
    var PathObject = (function () {
        function PathObject(_pos) {
            this.size = 1;
            this.pos = new V2(_pos.x, _pos.y);
        }
        PathObject.prototype.draw = function () {
            crc2.save();
            crc2.translate(this.pos.x, this.pos.y);
            crc2.scale(this.size, this.size);
            crc2.beginPath();
            this.drawShape();
            crc2.restore();
        };
        PathObject.prototype.isHit = function (_pos) {
            crc2.save();
            crc2.translate(this.pos.x, this.pos.y);
            crc2.scale(this.size, this.size);
            crc2.beginPath();
            this.drawHitPath();
            crc2.restore();
            return crc2.isPointInPath(_pos.x, _pos.y);
        };
        PathObject.prototype.drawHitPath = function () {
            // implemented in subclasses
        };
        PathObject.prototype.drawShape = function () {
            // implemented in subclasses
        };
        return PathObject;
    })();
    LetItSnow.PathObject = PathObject;
})(LetItSnow || (LetItSnow = {}));
//# sourceMappingURL=PathObject.js.map