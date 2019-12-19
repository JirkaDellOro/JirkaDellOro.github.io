/*
    Let it snow
    (C) Jirka Dell'Oro-Friedl 2015
    Made with TypeScript
    Music from myFreeMp3Club
*/
module LetItSnow {
    import V2 = Vector.Vector2D;

    export class Tree extends PathObject {
        constructor(_pos: V2) {
            super(_pos);
            this.size = 2;
        }
        protected drawHitPath(): void {
            crc2.moveTo(-20, -20);
            crc2.lineTo(0, -80);
            crc2.lineTo(20, -20);
            crc2.closePath();
            crc2.moveTo(-20, -50);
            crc2.lineTo(0, -100);
            crc2.lineTo(20, -50);
            crc2.closePath();
        }
        protected drawShape(): void {
            crc2.fillStyle = COLOR.TREESTEM;
            crc2.fillRect(-5, 0, 10, -20);
            crc2.fillStyle = COLOR.TREETOP;
            this.drawHitPath();
            crc2.fill();
        }
    }

    export class Hut extends PathObject {
        protected drawHitPath(): void {
            crc2.moveTo(0, 0);
            crc2.lineTo(-50, -10);
            crc2.lineTo(-60, -100);
            crc2.lineTo(-25, -150);
            crc2.lineTo(110, -140);
            crc2.lineTo(160, -90);
            crc2.lineTo(150, 0);
            crc2.closePath();
        }
        protected drawShape(): void {
            crc2.fillStyle = COLOR.HUTSIDE;
            crc2.moveTo(0, 0);
            crc2.lineTo(-50, -10);
            crc2.lineTo(-60, -100);
            crc2.lineTo(-25, -150);
            crc2.lineTo(-0, -100);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = COLOR.HUTFRONT;
            crc2.moveTo(0, 0);
            crc2.lineTo(0, -100);
            crc2.lineTo(160, -90);
            crc2.lineTo(150, 0);
            crc2.closePath();
            //this.drawHitPath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = COLOR.HUTROOF;
            crc2.moveTo(0, -100);
            crc2.lineTo(-25, -150);
            crc2.lineTo(110, -140);
            crc2.lineTo(160, -90);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.fillStyle = COLOR.HUTWINDOW;
            crc2.moveTo(50, -40);
            crc2.lineTo(50, -78);
            crc2.lineTo(100, -75);
            crc2.lineTo(95, -40);
            crc2.closePath();
            crc2.fill();
        }
    }

    export class Circle extends PathObject {
        protected drawHitPath(): void {
            crc2.arc(0, 0, this.size, 0, Math.PI * 2);
        }
        protected drawShape(): void {
            crc2.fillStyle = "#ff0000";
            this.drawHitPath();
            crc2.fill();
        }
    }

    export class Ground extends PathObject {
        protected drawHitPath(): void {
            var golden: number = 0.382;
            var height: number = crc2.canvas.height - this.pos.y;
            var width: number = crc2.canvas.width;
            crc2.moveTo(0, 0);
            crc2.bezierCurveTo(width / 3, height, width * golden, -150, width, -50);
            crc2.lineTo(width, height);
            crc2.lineTo(0, height);
            crc2.closePath();
        }
        protected drawShape(): void {
            crc2.fillStyle = COLOR.GRASS;
            this.drawHitPath();
            crc2.fill();
        }
    }
}