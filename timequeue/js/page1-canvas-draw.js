/**
 * Created by Tevin on 2016/5/10.
 */

;
(function (win) {

    'use strict';

    //环旋转
    var ring = {
        tempCanvas: document.createElement('canvas'),
        canvas: document.getElementById('rotatingRing'),
        img: document.getElementById('p1Ring')
    };
    ring.canvas.width = 640;
    ring.canvas.height = 192;
    ring.context = ring.canvas.getContext('2d');
    ring.tempCanvas.width = 640;
    ring.tempCanvas.height = 960;
    ring.tempContext = ring.tempCanvas.getContext('2d');
    //document.getElementById('main').appendChild(ring.tempCanvas); ring.tempCanvas.style.opacity = .2;
    ring.angle = 0;
    ring.render = function () {
        //旋转原图
        this.tempContext.clearRect(0, 0, 640, 960);
        this.tempContext.save();
        this.tempContext.translate(320, 480);
        this.tempContext.rotate(this.angle);
        this.tempContext.drawImage(ring.img, 0, 0, 890, 890, -445, -445, 890, 890);
        this.tempContext.restore();
        //输出
        this.context.clearRect(0, 0, 640, 192);
        this.context.drawImage(this.tempCanvas, 0, 0, 640, 960, 0, 0, 640, 192);
    };
    ring.update = function () {
        this.angle += .03;
    };

    //投射光
    var light = {
        canvas: document.getElementById('emittingLight'),
        img: document.getElementById('p1Text')
    };
    light.canvas.width = 608;
    light.canvas.height = 460;
    light.context = light.canvas.getContext('2d');
    light.step = 0;
    light.context.globalAlpha = .5;
    light.render = function () {
        this.context.clearRect(0, 0, 608, 460);
        this.context.drawImage(light.img, 0, parseInt(this.step) * 460, 608, 460, 0, 0, 608, 460);
    };
    light.update = function () {
        this.step += .5;
        if (this.step > 11) {
            this.step = 0;
        }
    };

    //默认暂停
    var canvasPause = true;

    //初始显示
    var imgLoad = function(img, callback) {
        if (img.complete) {
            callback();
        } else {
            img.onload = function() {
                callback();
                img.onload = null;
            };
        }
    };
    imgLoad(ring.img, function(){
        ring.render();
    });
    imgLoad(light.img, function(){
        light.render();
    });

    //定时刷新场景
    var animate = function () {
        if (!canvasPause) {
            ring.render();
            ring.update();
            light.render();
            light.update();
        }
        requestAnimationFrame(animate);
    };
    animate();

    return window.page1Canvas = {
        pause: function () {
            canvasPause = true;
        },
        continue: function () {
            canvasPause = false;
        },
        getState: function(){
            return canvasPause;
        }
    }

})(window);