/*
    Let it snow
    (C) Jirka Dell'Oro-Friedl 2015
    Made with TypeScript
    Music from myFreeMp3Club
*/
var LetItSnow;
(function (LetItSnow) {
    var V2 = Vector.Vector2D;
    var flakes = [];
    var objects = [];
    var saveBackground;
    var width = 800;
    var height = 600;
    var colorSkyRGB = [];
    colorSkyRGB[0] = parseInt("0x" + LetItSnow.COLOR.SKY.substring(1, 2));
    colorSkyRGB[1] = parseInt("0x" + LetItSnow.COLOR.SKY.substring(3, 4));
    colorSkyRGB[2] = parseInt("0x" + LetItSnow.COLOR.SKY.substring(5, 6));
    Setup.size(width, height);
    Setup.title("LetItSnow");
    crc2.fillStyle = LetItSnow.COLOR.SKY;
    crc2.fillRect(0, 0, width, height);
    crc2.fillStyle = LetItSnow.COLOR.MOON;
    crc2.arc(150, 100, 50, -Math.PI / 4, 3 * Math.PI / 4);
    crc2.fill();
    crc2.font = "italic 58px Times";
    crc2.fillText("Let it snow!", 480, 110);
    Setup.addEventListener(EVENTTYPE.MOUSEDOWN, burst);
    Setup.addEventListener(EVENTTYPE.TOUCHSTART, burst);
    var ground = new LetItSnow.Ground(new V2(0, height * 0.7));
    objects.push(ground);
    //objects.push(new Circle(new V2(100, 300)));
    for (var x = 10; x < width / 2; x += 40 + Math.random() * 50)
        for (var y = 10; y < height; y += 5 + Math.random() * 10) {
            var pos = new V2(x, y);
            if (ground.isHit(pos)) {
                objects.push(new LetItSnow.Tree(pos));
                break;
            }
        }
    objects.push(new LetItSnow.Hut(new V2(570, 370)));
    for (var o = 0; o < objects.length; o++)
        objects[o].draw();
    saveBackground = crc2.getImageData(0, 0, width, height);
    animate();
    function animate() {
        Setup.setTimeout(animate, 20);
        crc2.putImageData(saveBackground, 0, 0);
        //console.log(flakes.length);
        for (var i = flakes.length - 1; i >= 0; i--) {
            var flake = flakes[i];
            flake.fall();
            var backColor = getPixelColor(flakes[i]);
            if (isColorSame(backColor, colorSkyRGB))
                continue;
            // snowflake hits: draw it and delete it from array
            var stick = false;
            var stay = flake.radius < 3 && Math.random() < (1 / Math.pow(flake.radius, 2));
            if (stay) {
                stick = isColorSame(backColor, [0xff, 0xff, 0xff]);
                for (var o = objects.length - 1; o > 0 && !stick; o--)
                    stick = objects[o].isHit(flake);
            }
            stick = stick || (ground.isHit(flake) && Math.random() < 0.03);
            if (stick || flake.y > height) {
                flake.fall(); //sink in!
                flake.display();
                flakes.splice(i, 1);
            }
        }
        // save background with stopped flakes
        saveBackground = crc2.getImageData(0, 0, width, height);
        // draw remaining flakes above
        for (var i = flakes.length - 1; i >= 0; i--)
            flakes[i].display();
    }
    function getPixelColor(_pos) {
        var index = 4 * (Math.floor(_pos.x) + Math.floor(_pos.y) * width);
        var pixelBuffer = saveBackground.data;
        var color = [pixelBuffer[index], pixelBuffer[index + 1], pixelBuffer[index + 2]];
        return color;
    }
    function isColorSame(_color1, _color2) {
        for (var i = 0; i < _color1.length; i++)
            if (_color1[i] != _color2[i])
                return false;
        return true;
    }
    function burst() {
        var amount = Math.floor(Math.random() * 20 + 20);
        var pos = new V2(Setup.pointerX, Setup.pointerY);
        for (var i = 0; i < amount; i++) {
            var f = new LetItSnow.Snowflake(pos);
            flakes.push(f);
        }
    }
})(LetItSnow || (LetItSnow = {}));
//# sourceMappingURL=Main.js.map