/* global zuix */
'use strict';

let currentPage;
let mainPage;
let detailsPage;

zuix.using('script', './service-worker.js');
zuix.using('style', '//zuixjs.github.io/zkit/css/flex-layout-attribute.min.css');
zuix.using('style', './index.css');

window.options = {
    mainPage: {
        lazyLoad: false,
        ready: function() {
            mainPage = this.cover({
                "vote_average":9.1,
                "title":"TeeWorld Web Edition",
                "poster_path":"images\/teeworld_portrait.jpg",
                "backdrop_path":"images\/teeworld_animated.gif",
                "overview":"Teeworlds is a retro multiplayer shooter game.\nThis unofficial version runs in your browser thanks to the Cheerp compiler.\nFor more information and issue tracking, please visit the Github page.\nHow does this work? Find out in our blog post!\nBelow, you can create a new server, or join an existing one.\nIn either case, click on a server link to play.\nCopy it and share it with your friends so they can join the same server easily!\nIf you create your own server, please don't close the tab while you are still playing.\nThe server runs in your browser just as the client, and they communicate directly through WebRTC.",
                "release_date":"2007-05-27",
                "trailer": "https://teeworlds.leaningtech.com/"
            });
            showPage(0);
        }
    },
    detailsPage: {
        lazyLoad: false,
        on: {
            'page:show': function() { bodyScrollEnable(false); },
            'page:hide': function() { bodyScrollEnable(true); }
        },
        ready: function() {
            detailsPage = this;
        }
    },
    footerBar: {
        ready: function(){
            const view = zuix.$(this.view());
            const buttons = view.find('button');
            buttons.each(function(i, el) {
                this.on('click', function() {
                    buttons.removeClass('active');
                    this.addClass('active');
                    window.location.href = '#'+this.attr('ref');
                });
            });
        }
    },
    pageScroll: {
        on: {
            'scroll:change': function(e, data) {
                // synchronize/animate main cover with scroll
                if (currentPage == 0 && mainPage) {
                    mainPage.sync(data);
                }
            }
        }
    },
    content_no_css: {
        css: false
    }
};

// site navigation
window.onhashchange = function() {
    if (window.location.hash.length > 0) {
        switch (window.location.hash) {
            case '#home':
                showPage(0);
                break;
            case '#search':
                showPage(1);
                break;
            case '#notifications':
                showPage(2);
                break;
            case '#about':
                showPage(3);
                break;
        }
    } else showPage(0);
};

function showPage(i) {
    currentPage = i;
    // sync header bar transparency
    if (currentPage == 0) {
        mainPage.sync();
    } else {
        zuix.field('header-bar')
            .css('background-color', 'rgba(33,33,33,1)');
    }
    // hide details page if open
    if (detailsPage && detailsPage.view().style['display'] !== 'none') {
        detailsPage.hide();
    } else {
        // show page
        zuix.field('pages')
            .children().hide()
            .eq(i).show();
    }
}

function bodyScrollEnable(enable) {
    const body = zuix.$(document.body);
    if (enable === false) body.addClass('noscroll');
    else body.removeClass('noscroll');
}

// increase lazy-load hit area up to
// 300px off the viewport boundaries
// (circa 3 movie items ahead)
//zuix.lazyLoad(true, -500);

// Turn off debug output
window.zuixNoConsoleOutput = true;
