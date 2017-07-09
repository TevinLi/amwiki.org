/**
 * jQuery.imgLoadCatch.js v0.2.1
 * https://github.com/TevinLi/imgloadcatch
 *
 * Copyright 2015, Tevin Li
 * Released under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 */

;
(function ($, window, document) {

    'use strict';

    var Catch, init = false;

    Catch = (function () {
        return function (opt) {
            this.config = {
                //��ͼƬ��
                total: 0,
                //�Ѵ������
                count: 0,
                //�Ѵ���img����
                countIMG: 0,
                //�Ѵ���bg����
                countBg: 0,
                //img�������
                imgError: 0,
                //img�������
                bgError: 0,
                //�Ƿ����״̬
                state: [true, true],
                //img��ǩ�ж�
                queImg: [],
                //�����ж�
                queBg: [],
                //�����ǩ
                disTag: ['br', 'hr', 'script', 'code', 'del', 'embed', 'frame', 'frameset', 'iframe', 'link',
                    'style', 'object', 'pre', 'video', 'wbr', 'xmp']
            };
            this.options = $.extend({
                deep: 'img',
                export: true,
                start: function () {
                },
                step: function () {
                },
                imgTag: function () {
                },
                finish: function () {
                }
            }, opt || {});
            this.init();
        };
    })();

    //��ȡ����ͼƬ�������ж�
    Catch.prototype.init = function () {
        var that = this;
        this.options.start();
        var nodes = document.body.getElementsByTagName('*');
        if (this.options.deep == 'img') {
            for (var i = 0, len1 = nodes.length; i < len1; i++) {
                if (nodes[i].tagName.toLowerCase() == 'img' && nodes[i].getAttribute('no-catch') === null) {
                    this.config.state[0] = false;
                    this.config.queImg.push(nodes[i].src);
                    this.config.total++;
                }
            }
            this.listenIMG();
        } else if (this.options.deep == 'all') {
            for (var j = 0, len2 = nodes.length; j < len2; j++) {
                if (this.isDisTag(nodes[j].tagName)) {
                    continue;
                } else if (nodes[j].tagName.toLowerCase() == 'input' && (nodes[j].type == 'radio' || nodes[j].type == 'checkbox')) {
                    continue;
                } else if (nodes[j].getAttribute('no-catch') !== null) {
                    continue;
                }
                if (nodes[j].tagName.toLowerCase() == 'img' && nodes[j].getAttribute('no-catch') === null) {
                    this.config.state[0] = false;
                    this.config.queImg.push(nodes[j].src);
                    this.config.total++;
                } else {
                    var bgImg = this.getBackgroundImage(nodes[j]);
                    if (bgImg != 'none') {
                        var bgRepeated = false;
                        var bgSrc = bgImg.match(/\([^\)]+\)/g)[0].replace(/\(|\)/g, '').replace(/^\s+|\s+$/g,"");
                        for (var k = 0; k < this.config.queBg.length; k++) {
                            if (bgSrc == this.config.queBg[k]) {
                                bgRepeated = true;
                                break;
                            }
                        }
                        if (!bgRepeated) {
                            this.config.state[1] = false;
                            this.config.queBg.push(bgSrc);
                            this.config.total++;
                        }
                    }
                }
            }
            this.listenIMG();
            this.listenBg();
        }
    };

    //����img��ǩ�ж�
    Catch.prototype.listenIMG = function () {
        var that = this;
        for (var i = 0; i < this.config.queImg.length; i++) {
            this.imgLoad(this.config.queImg[i], function (state) {
                that.config.count++;
                that.config.countIMG++;
                that.config.imgError += state ? 0 : 1;
                var percent = parseInt(that.config.count / that.config.total * 100);
                that.options.step(percent, that.config.total, that.config.count);
                if (that.config.countIMG == that.config.queImg.length) {
                    that.options.imgTag();
                    that.config.state[0] = true;
                    that.end();
                }
            }, 'img');
        }
    };

    //����css�����ж�
    Catch.prototype.listenBg = function () {
        var that = this;
        for (var i = 0; i < this.config.queBg.length; i++) {
            this.imgLoad(this.config.queBg[i], function (state) {
                that.config.count++;
                that.config.countBg++;
                that.config.bgError += state ? 0 : 1;
                var percent = parseInt(that.config.count / that.config.total * 100);
                that.options.step(percent, that.config.total, that.config.count);
                if (that.config.countBg == that.config.queBg.length) {
                    that.config.state[1] = true;
                    that.end();
                }
            }, 'bg');
        }
    };

    //�������
    Catch.prototype.end = function () {
        var that = this;
        var end = function () {
            setTimeout(function () {
                that.options.finish({
                    total: that.config.total,
                    count: that.config.count,
                    countError: that.config.imgError + that.config.bgError,
                    countSuccess: that.config.count - (that.config.imgError + that.config.bgError),
                    imgTag: that.config.countIMG,
                    imgTagError: that.config.imgError,
                    imgTagSuccess: that.config.countIMG - that.config.imgError,
                    cssBg: that.config.countBg,
                    cssBgError: that.config.bgError,
                    cssBgSuccess: that.config.countBg - that.config.bgError
                });
            }, 100);
        };
        if (this.options.deep == 'img') {
            if (this.config.state[0]) {
                end();
            }
        } else if (this.options.deep == 'all') {
            if (this.config.state[0] && this.config.state[1]) {
                this.config.queBg = [];
                end();
            }
        }
    };

    //����
    Catch.prototype.imgLoad = function (src, callback, type) {
        var img = new Image(),
            words;
        if (type == 'img') {
            words = '<img> src-url'
        } else {
            words = 'css background-image';
            if (src.indexOf('"') >= 0) {
                src = src.replace(/\"/g, '');
            }
        }
        img.onload = function () {
            callback(true);
            img.onload = null;
            img.onerror = null;
        };
        img.onerror = function () {
            callback(false);
            img.onload = null;
            img.onerror = null;
            var err = 'Can\'t load ' + words + ': "' + src + '"';
            throw new Error(err);
        };
        img.src = src;
    };

    //�����ж�
    Catch.prototype.isDisTag = function (tagName) {
        var tag = tagName.toLowerCase();
        var re = false;
        for (var i = 0; i < this.config.disTag.length; i++) {
            if (tag == this.config.disTag[i]) {
                re = true;
                break;
            }
        }
        return re;
    };

    //��ȡcss����
    Catch.prototype.getBackgroundImage = function (node) {
        if (document.defaultView && document.defaultView.getComputedStyle) {
            return document.defaultView.getComputedStyle(node, null).backgroundImage;
        } else {
            return node.currentStyle.backgroundImage;
        }
    };

    $.extend($, {
        imgLoadCatch: function (opt) {
            if (!init) {
                init = true;
                new Catch(opt);
            }
        }
    });

})($, window, document);