/**
 * Created by Tevin on 2016/5/11.
 */

$(function () {

    //页面加载
    var $loading = $('#loading');
    var $loadingText = $loading.find('span');
    $.imgLoadCatch({
        deep: 'all',
        step: function (percent, total, count) {
            $loadingText.text(percent);
        },
        finish: function () {
            $loading.hide();
            initSwiper();
        }
    });

    //每页页面动画播放列队
    var queues = [];
    var $slides = $('#container').children('ul').children('.swiper-slide');
    for (var i = 0; i < $slides.length; i++) {
        queues[i] = new TimeQueue();
    }

    //滑屏
    var lastScene = 0;
    var pageSwiper = null;
    var initSwiper = function () {
        pageSwiper = new Swiper('.container', {
            //初始页码
            initialSlide: 0,
            direction: 'vertical',
            onInit: function (swiper) {
                if (swiper.activeIndex == 0) {
                    playScene(swiper.activeIndex);
                }
                lastScene = swiper.activeIndex;
            },
            onSlideChangeStart: function (swiper) {
                resetScene(lastScene);
                resetScene(swiper.activeIndex);
                lastScene = swiper.activeIndex;
            },
            onSlideChangeEnd: function (swiper) {
                playScene(swiper.activeIndex);
                if (swiper.activeIndex != 0) {
                    page1Canvas.pause();
                }
            }
        });
    };

    //播放页面
    var playScene = function (index) {
        var $s = $slides.eq(index);
        var sceneActionList = [];
        //第一页
        if (index == 0) {
            sceneActionList = [
                [200, function () {
                    $s.find('#emittingLight').addClass('show1');
                }],
                [600, function () {
                    page1Canvas.continue();
                }],
                [600, function () {
                    $s.find('.scene1-phone').addClass('show1')
                }],
                [1300, function () {
                    $s.find('.scene1-arrows').addClass('show1')
                }],
                [150, function () {
                    $s.find('.scene1-arrows').addClass('hide1')
                }],
                [500, function () {
                    $s.find('.scene1-name').addClass('show1')
                }],
                [500, function () {
                    $s.find('.scene1-name').addClass('show2')
                }]
            ];
        }
        //第二页
        else if (index == 1) {
            var showLine = 150;
            var showDesc = 150;
            sceneActionList = [
                [0, function () {
                    $s.find('.scene2-dish').addClass('show1');
                }],
                [showLine, function () {
                    $s.find('.scene2-line.l1').addClass('show1');
                }],
                [showDesc, function () {
                    $s.find('.scene2-desc.d1').addClass('show1');
                }],
                [showLine, function () {
                    $s.find('.scene2-line.l2').addClass('show1');
                }],
                [showDesc, function () {
                    $s.find('.scene2-desc.d2').addClass('show1');
                }],
                [showLine, function () {
                    $s.find('.scene2-line.l3').addClass('show1');
                }],
                [showDesc, function () {
                    $s.find('.scene2-desc.d3').addClass('show1');
                }],
                [showLine, function () {
                    $s.find('.scene2-line.l4').addClass('show1');
                }],
                [showDesc, function () {
                    $s.find('.scene2-desc.d4').addClass('show1');
                }],
                [showLine, function () {
                    $s.find('.scene2-line.l5').addClass('show1');
                }],
                [showDesc, function () {
                    $s.find('.scene2-desc.d5').addClass('show1');
                }],
                [showLine, function () {
                    $s.find('.scene2-line.l6').addClass('show1');
                }],
                [(showDesc + 500), function () {
                    $s.find('.scene2-desc.d6').addClass('show1');
                }],
                [500, function () {
                    $s.find('.scene-title').addClass('show1');
                }],
                [1000, function () {
                    $s.find('.scene2-name').addClass('show1');
                }]
            ];
        }
        //第三页
        else if (index == 2) {
            sceneActionList = [
                [0, function () {
                    $s.find('.scene3-dish').addClass('show1');
                }],
                [500, function () {
                    $s.find('.scene3-light').addClass('show1');
                    $s.find('.scene-title.title-center').addClass('show1');
                }],
                [500, function () {
                    $s.find('.scene3-light').addClass('show2');
                }],
                [1300, function () {
                    $s.find('.scene-title.title-top').addClass('show1');
                }]
            ];
        }
        //第四页
        else if (index == 3) {
            sceneActionList = [
                [1200, function () {
                    $s.find('.scene4-tree-box').addClass('show1');
                }],
                [500, function () {
                    $s.find('.scene4-tree-flash').addClass('show1');
                }],
                [500, function () {
                    $s.find('.scene4-desc1').addClass('show1');
                }],
                [500, function () {
                    $s.find('.scene4-desc2').addClass('show1');
                }],
                [500, function () {
                    $s.find('.scene4-desc3').addClass('show1');
                }],
                [300, function () {
                    $s.find('.scene4-line').addClass('show1');
                }],
                [500, function () {
                    $s.find('.scene-title').addClass('show1');
                }]
            ];
        }
        //第五页
        else if (index == 4) {
            sceneActionList = [
                [200, function () {
                }],
                [3300, function () {
                    var $cros = $s.find('.scene5-crosshair');
                    if ($cros.hasClass('mode1')) {
                        $cros.removeClass('mode1').addClass('mode2');
                    } else if ($cros.hasClass('mode2')) {
                        $cros.removeClass('mode2').addClass('mode1');
                    } else {
                        $cros.addClass('mode' + parseInt(Math.random() * 2 + 1));
                    }
                    $cros.addClass('show1');
                }],
                [200, function () {
                    $s.find('.scene5-people').addClass('show1');
                }],
                [600, function () {
                    $s.find('.scene5-line').addClass('show1');
                }],
                [300, function () {
                    $s.find('.scene-title').addClass('show1');
                }],
                [500, function () {
                    $s.find('.scene5-desc').addClass('show1');
                }]
            ];
        }
        //第六页
        else if (index == 5) {
            sceneActionList = [
                [200, function () {
                    $s.find('.scene6-chart').find('li:eq(0)').find('div').addClass('show1');
                }],
                [200, function () {
                    $s.find('.scene6-chart').find('li:eq(1)').find('div').addClass('show1');
                }],
                [200, function () {
                    $s.find('.scene6-chart').find('li:eq(2)').find('div').addClass('show1');
                }],
                [200, function () {
                    $s.find('.scene6-chart').find('li:eq(3)').find('div').addClass('show1');
                }],
                [200, function () {
                    $s.find('.scene6-chart').find('li:eq(4)').find('div').addClass('show1');
                }],
                [200, function () {
                    $s.find('.scene6-chart').find('li:eq(5)').find('div').addClass('show1');
                }],
                [200, function () {
                    $s.find('.scene6-chart').find('li:eq(6)').find('div').addClass('show1');
                }],
                [800, function () {
                    $s.find('.scene6-arrow').addClass('show1');
                }],
                [800, function () {
                    $s.find('.scene6-line').addClass('show1');
                }],
                [300, function () {
                    $s.find('.scene-title').addClass('show1');
                }],
                [500, function () {
                    $s.find('.scene6-desc').addClass('show1');
                }]
            ]
        }
        //第七页
        else if (index == 6) {
            sceneActionList = [
                [300, function () {
                }],
                //人1
                [400, function () {
                    $s.find('.scene7-light').addClass('show1');
                }],
                [1000, function () {
                    $s.find('.scene7-saying1').addClass('show1');
                }],
                //人2
                [400, function () {
                    $s.find('.scene7-light').addClass('show2');
                    $s.find('.scene7-saying1').addClass('show2').removeClass('show1');
                }],
                [1000, function () {
                    $s.find('.scene7-saying2').addClass('show1');
                }],
                //人3
                [400, function () {
                    $s.find('.scene7-light').addClass('show3');
                    $s.find('.scene7-saying2').addClass('show2').removeClass('show1');
                }],
                [1000, function () {
                    $s.find('.scene7-saying3').addClass('show1');
                }],
                //人4
                [400, function () {
                    $s.find('.scene7-light').addClass('show4');
                    $s.find('.scene7-saying3').addClass('show2').removeClass('show1');
                }],
                [1000, function () {
                    $s.find('.scene7-saying4').addClass('show1');
                }],
                //消失
                [700, function () {
                    $s.find('.scene7-light').addClass('hide1');
                    $s.find('.scene7-saying4').addClass('show2').removeClass('show1');
                }],
                //标题
                [500, function () {
                    $s.find('.scene7-line').addClass('show1');
                }],
                [300, function () {
                    $s.find('.scene-title').addClass('show1');
                }],
                [500, function () {
                    $s.find('.scene7-desc').addClass('show1');
                }]
            ];
        }
        //第八页
        else if (index == 7) {
            sceneActionList = [
                [3000, function () {
                    $s.find('.scene8-head').addClass('hide1');
                }],
                [100, function () {
                    $s.find('.scene8-head').removeClass('hide1').addClass('show1');
                }],
                [1100, function () {
                    $s.find('.scene8-head').removeClass('hide1').addClass('show2');
                }],
                [700, function () {
                    $s.find('.scene8-line').addClass('show1');
                }],
                [300, function () {
                    $s.find('.scene-title').addClass('show1');
                }],
                [500, function () {
                    $s.find('.scene8-desc').addClass('show1');
                }]
            ]
        }
        //第九页
        else if (index == 8) {
            sceneActionList = [
                [500, function () {
                }],
                [400, function () {
                    $s.find('.scene9-people-after').addClass('show1');
                }],
                [500, function () {
                    $s.find('.scene9-people-before').addClass('hide1');
                }],
                [500, function () {
                    $s.find('.scene9-roads').addClass('show1');
                }],
                [200, function () {
                    $s.find('.scene9-group1').addClass('show1');
                }],
                [900, function () {
                    $s.find('.scene9-group2').addClass('show1');
                }],
                [600, function () {
                    $s.find('.scene9-line').addClass('show1');
                }],
                [300, function () {
                    $s.find('.scene-title').addClass('show1');
                }],
                [500, function () {
                    $s.find('.scene9-desc').addClass('show1');
                }]
            ]
        }
        //第十页
        else if (index == 9) {
            sceneActionList = [
                [700, function () {
                    $s.find('.scene10-hand').addClass('show1');
                }],
                [100, function () {
                    $s.find('.scene10-earth').addClass('show1');
                }],
                [170, function () {
                    $s.find('.scene10-light2').addClass('show1');
                }],
                [600, function () {
                    $s.find('.scene10-light1').addClass('show1');
                }],
                [200, function () {
                    $s.find('.scene10-point2').find('.scene10-team').addClass('show1');
                }],
                [200, function () {
                    $s.find('.scene10-point1').find('.scene10-team').addClass('show1');
                }],
                [200, function () {
                    $s.find('.scene10-point4').find('.scene10-team').addClass('show1');
                }],
                [800, function () {
                    $s.find('.scene10-point5').find('.scene10-team').addClass('show1');
                }],
                [700, function () {
                    $s.find('.scene10-line').addClass('show1');
                }],
                [300, function () {
                    $s.find('.scene-title').addClass('show1');
                }],
                [500, function () {
                    $s.find('.scene10-desc').addClass('show1');
                }]
            ]
        }
        //第十一页
        else if (index == 10) {
            sceneActionList = [
                [10, function () {
                    $s.find('.scene11-dich').addClass('show1');
                }]
            ];
        }

        queues[index].actionList('duration', sceneActionList);
    };

    //清理播放
    var resetScene = function (index) {
        $slides.eq(index)
            .find('.show1').removeClass('show1').end()
            .find('.show2').removeClass('show2').end()
            .find('.hide1').removeClass('hide1');
        if (index == 6) {
            $slides.eq(index)
                .find('.show3').removeClass('show3').end()
                .find('.show4').removeClass('show4');
        }
        queues[index].clean();
    };

    //页面初始修改
    var $win = $(window);
    var setPagesInit = function () {
        if ($win.height() > 500) {
            $slides.eq(6).addClass('as-long').removeClass('as-short');
        } else {
            $slides.eq(6).addClass('as-short').removeClass('as-long');
        }
    };
    setPagesInit();
    window.addEventListener('resize', function () {
        setPagesInit();
    });

    //音频
    var v = new Audio();
    v.src = 'media/sound.mp3';
    v.loop = true;
    v.play();
    $('#music').on('click', function() {
        if (!$(this).hasClass('on')) {
            $(this).addClass('on');
            $(".music i:eq(1)").show();
            $(".music i:eq(0) img").addClass("musicdonghua");
            v.play();
        } else {
            $(this).removeClass('on');
            $(".music i:eq(0) img").removeClass("musicdonghua");
            $(".music i:eq(1)").hide();
            v.pause();
        }
    });

});