/*
    Let it snow
    (C) Jirka Dell'Oro-Friedl 2015
    Made with TypeScript
    Music from myFreeMp3Club
*/
module LetItSnow {
    import V2 = Vector.Vector2D;
    export class PathObject {
        public pos: V2;
        public size: number = 1;

        constructor(_pos: V2) {
            this.pos = new V2(_pos.x, _pos.y);
        }

        public draw(): void {
            crc2.save();
            crc2.translate(this.pos.x, this.pos.y);
            crc2.scale(this.size, this.size);
            crc2.beginPath();
            this.drawShape();
            crc2.restore();
        }

        public isHit(_pos: V2): boolean {
            crc2.save();
            crc2.translate(this.pos.x, this.pos.y);
            crc2.scale(this.size, this.size);
            crc2.beginPath();
            this.drawHitPath();
            crc2.restore();
            return crc2.isPointInPath(_pos.x, _pos.y);
        }

        protected drawHitPath(): void {
            // implemented in subclasses
        }
        protected drawShape(): void {
            // implemented in subclasses
        }
    }
}