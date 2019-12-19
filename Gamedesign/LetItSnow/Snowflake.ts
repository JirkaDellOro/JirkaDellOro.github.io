/*
    Let it snow
    (C) Jirka Dell'Oro-Friedl 2015
    Made with TypeScript
    Music from myFreeMp3Club
*/
module LetItSnow {
    import V2 = Vector.Vector2D;

    export class Snowflake extends V2 {
        private normalFall: V2;
        public radius: number;
        private move: V2;

        constructor(_position: V2) {
            super(_position.x, _position.y);
            this.move = new V2(Math.random() * 16 - 8, Math.random() * 8 - 7);
            this.radius = Math.random() * 2 + 2;
            this.normalFall = new V2(0, this.radius * 0.5);
        }

        public fall(): void {
            var diff: V2 = this.normalFall.getDiff(this.move);
            diff.scale(0.1);
            this.move.add(diff);
            this.move.x += Math.random() * 0.4 - 0.2;
            this.add(this.move);
        }

        public display(): void {
            crc2.fillStyle = "#ffffff";
            crc2.beginPath();
            crc2.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            crc2.fill();
        }
    }
}