﻿//<div class=\"movie\">\n<span title=\"Capcom\" data-ui-lazyload=\"true\" style=\"background-image:url(images/capcom.jpg)\" onclick=\"location.href='https://www.playemulator.com/cps2-online/';\" class=\"item\"><!-- no-view --></span>\n</div>\n

zuix.bundle([ {
    componentId:"_res/style/style-1784725062", view:null, css:"/* CSS files add styling rules to your content */\n\nbody {\n    font-family: \"Trebuchet MS\", Helvetica, sans-serif;\n    font-size: 16px;\n    margin: 0; padding: 0;\n    background: #1a1a1a;\n    -webkit-user-select:none;\n    -moz-user-select:none;\n    -ms-user-select:none;\n    user-select:none;\n    --overscroll-behavior-y: contain;\n}\n\nbutton:hover, a:hover {\n    cursor: pointer;\n    opacity: 0.8;\n}\n\na {\n    -webkit-user-select: none;\n    -khtml-user-select: none;\n    -moz-user-select: none;\n    -o-user-select: none;\n    user-select: none;\n}\n\na, a:visited, a:hover {\n    color: darkorange;\n    text-decoration: none;\n}\n\n.noscroll {\n    overflow: hidden;\n}\n", controller: null, using: "./index.css"
}

, {
    componentId:"_res/script/script-605580544", view:null, css:null, controller:"if ('serviceWorker' in navigator) {\n    const p = navigator.serviceWorker\n        .register('./sw.js')\n        .then(reg => console.log('PWA service-worker ready.', reg))\n        .catch(err => console.error('Could not load service-worker.', err));\n}\n", using: "./service-worker.js"
}

, {
    componentId:"https://zuixjs.github.io/zkit/lib/controllers/scroll_helper", controller:function(t) {
        function o() {
            null!=v&&clearTimeout(v);
            const z=new Date().getTime();
            if(100<z-m.timestamp?r():v=setTimeout(function() {
                r()
            }
            , 99), !(z<g&&66>z-w)) {
                w=z;
                const _=t.view().get(), k="scroll-helper-visible";
                null!=h&&null!=f&&h.each(function(T, I) {
                    const S=this.position();
                    let D=!1, j=0;
                    if(null===I.offsetParent)return!1;
                    null==j&&(j=0);
                    const W= {
                        left: 0, top: 0, right: m.viewport.width, bottom: m.viewport.height, width: m.viewport.width, height: m.viewport.height
                    }
                    ;
                    let C=I.getBoundingClientRect(), M=I.offsetParent;
                    for(;
                    null!==M&&M!==_;
                    ) {
                        const L=M.getBoundingClientRect();
                        C= {
                            left: C.left+L.left, top: C.top+L.top, right: C.right+L.left, bottom: C.bottom+L.top, width: C.width, height: C.height
                        }
                        , M=M.offsetParent
                    }
                    if(D=!(C.left>W.right-j||C.right<W.left+j||C.top>W.bottom-j||C.bottom<W.top+j), S.frame= {
                        dx: (C.left+C.width/2-W.left)/W.width, dy: (C.top+C.height/2-W.top)/W.height
                    }
                    , S.visible=D, !D&&this.hasClass(k))this.removeClass(k), S.event="exit";
                    else if(!D)S.event="off-scroll";
                    else if(D)this.hasClass(k)?S.event="scroll":(S.event="enter", this.addClass(k));
                    else return;
                    f(this, S)
                }
                )
            }
        }
        function s(z, _) {
            null==z?(h=null, f=null): (h=t.view(z), f=_)
        }
        function r() {
            const z=t.view().get(), _=z.getBoundingClientRect(), k= {
                top: _.top, right: _.right, bottom: _.bottom, left: _.left, width: _.width, height: _.height, x: _.x, y: _.y
            }
            ;
            k.y=-t.view().get().scrollTop||(k.y?k.y:0), k.height=t.view().get().scrollHeight||(k.height?k.height:0), m.size.width=k.width, m.size.height=k.height, z===document.body?(m.size.width=document.body.offsetWidth, m.size.height=document.body.offsetHeight, m.viewport.width=document.documentElement.clientWidth||m.size.width, m.viewport.height=document.documentElement.clientHeight||m.size.height):(m.viewport.width=z.offsetWidth, m.viewport.height=z.offsetHeight), m.timestamp=new Date().getTime(), m.shift= {
                x: k.x-m.viewport.x, y: k.y-m.viewport.y
            }
            , m.viewport.x=k.x, m.viewport.y=k.y;
            const T=m.size.height+k.y-m.viewport.height;
            0==T||0===k.y?t.trigger("scroll:change", {
                event: 0===k.y?"hit-top": "hit-bottom", info: m
            }
            ):t.trigger("scroll:change", {
                event: "scroll", info: m
            }
            )
        }
        function c(z, _) {
            if((z instanceof Element||z instanceof zuix.$.ZxQuery)&&(z=zuix.$(z).position().y-m.viewport.y), -1===_)return u(z);
            const k=Date.now();
            null!=_&&(g=k+_), _=g-k;
            const T=t.view().get();
            let I=0;
            I=T===document.body?void 0===window.pageYOffset?(document.documentElement||document.body.parentNode||document.body).scrollTop: window.pageYOffset: T.scrollTop;
            const S=z-I;
            if(0>=_||0==S)return u(z), void o();
            const D=I+33*(S/_);
            requestAnimationFrame(function() {
                u(D), c(z)
            }
            )
        }
        function u(z) {
            const _=t.view().get();
            _===document.body?(document.documentElement.scrollTop=z, document.body.scrollTop=z): _.scrollTop=z
        }
        function p(z, _) {
            let k, T;
            return function() {
                const I=this, S=arguments;
                T?(clearTimeout(k), k=setTimeout(function() {
                    Date.now()-T>=_&&(z.apply(I, S), T=Date.now())
                }
                , _-(Date.now()-T))):(z.apply(I, S), T=Date.now())
            }
        }
        const m= {
            timestamp:0, size: {
                width: 0, height: 0
            }
            , viewport: {
                x: 0, y: 0, width: 0, height: 0
            }
        }
        ;
        let v, h, f, g=0;
        t.init=function() {
            t.options().html=!1, t.options().css=!1
        }
        , t.create=function() {
            t.view().get()===document.body?0<t.options().throttle?window.onscroll=p(o, t.options().throttle):window.onscroll=o:0<t.options().throttle?t.view().on("scroll", p(o, t.options().throttle)):t.view().on("scroll", o), t.expose("watch", function(z, _) {
                return s(z, _), t.context
            }
            ), t.expose("scrollStart", function(z) {
                return null==z&&(z=-1), c(0, z), t.context
            }
            ).expose("scrollEnd", function(z) {
                return null==z&&(z=-1), c(m.size.height, z), t.context
            }
            ).expose("scrollTo", function(z, _) {
                return null==_&&(_=-1), c(z, _), t.context
            }
            ).expose("info", function() {
                return m
            }
            ), c(5, -1), c(0, 200)
        }
        ;
        let w
    }
}

, {
    componentId:"_res/style/style--1101994688", view:null, css:"/**\n * Flex layout attribute\n * HTML layout helper based on CSS flexbox specification.\n * \n * VERSION: v1.0.3\n * DATE:    2016-06-21\n * URL:     http://progressivered.com/fla/\n * AUTHOR:  Stefan Kovac | stef@progressivered.com | http://progressivered.com/\n * LICENSE: MIT \n */\n \nhtml{box-sizing:border-box}*,:after,:before{box-sizing:inherit}[layout]{display:-ms-flexbox;display:flex}[layout*=column],[layout*=row]{width:100%;max-width:100%}[layout^=row]{-ms-flex-direction:row;flex-direction:row}[layout^=column]{-ms-flex-direction:column;flex-direction:column}[layout*=row][layout*=reverse]{-ms-flex-direction:row-reverse;flex-direction:row-reverse}[layout*=column][layout*=reverse]{-ms-flex-direction:column-reverse;flex-direction:column-reverse}[layout*=columns],[layout*=rows]{-ms-flex-wrap:wrap;flex-wrap:wrap}[layout=none]{-ms-flex:none;flex:none}[layout*=column][layout*=top-],[layout*=row][layout*=-left]{-ms-flex-pack:start;justify-content:flex-start}[layout*=column][layout*=center-],[layout*=row][layout*=-center],[layout~=centered]{-ms-flex-pack:center;justify-content:center}[layout*=column][layout*=bottom-],[layout*=row][layout*=-right]{-ms-flex-pack:end;justify-content:flex-end}[layout*=column][layout*=spread-],[layout*=row][layout*=-spread]{-ms-flex-pack:distribute;justify-content:space-around}[layout*=column][layout*=justify-],[layout*=row][layout*=-justify]{-ms-flex-pack:justify;justify-content:space-between}[layout*=column][layout*=-left],[layout*=row][layout*=top-]{-ms-flex-align:start;-ms-grid-row-align:flex-start;align-items:flex-start}[layout*=column][layout*=-center],[layout*=row][layout*=center-],[layout~=centered]{-ms-flex-align:center;-ms-grid-row-align:center;align-items:center}[layout*=column][layout*=-right],[layout*=row][layout*=bottom-]{-ms-flex-align:end;-ms-grid-row-align:flex-end;align-items:flex-end}[layout*=column][layout*=-stretch],[layout*=row][layout*=stretch-]{-ms-flex-align:stretch;-ms-grid-row-align:stretch;align-items:stretch}[layout*=columns][layout*=-left],[layout*=rows][layout*=top-]{-ms-flex-line-pack:start;align-content:flex-start}[layout*=columns][layout*=-right],[layout*=rows][layout*=bottom-]{-ms-flex-line-pack:end;align-content:flex-end}[layout*=columns][layout*=-center],[layout*=rows][layout*=center-]{-ms-flex-line-pack:center;align-content:center}[layout*=columns][layout*=-justify],[layout*=rows][layout*=justify-]{-ms-flex-line-pack:justify;align-content:space-between}[layout*=columns][layout*=-spread],[layout*=rows][layout*=spread-]{-ms-flex-line-pack:distribute;align-content:space-around}[layout*=columns][layout*=-stretch],[layout*=rows][layout*=stretch-]{-ms-flex-line-pack:stretch;align-content:stretch}@media (-ms-high-contrast:none),screen and (-ms-high-contrast:active){[layout*=column]:not([layout*=row])>*{max-width:auto}[layout*=column][self*=top]{height:auto!important}[self~=size-]>*{height:auto}}[layout*=column]:not([layout*=row]) [self*=left],[layout*=row]:not([layout*=column]) [self*=top]{-ms-flex-item-align:start;align-self:flex-start}[self~=center]{-ms-flex-item-align:center;align-self:center}[layout*=column]:not([layout*=row]) [self*=right],[layout*=row]:not([layout*=column]) [self*=bottom]{-ms-flex-item-align:end;align-self:flex-end}[self*=stretch]{-ms-flex-item-align:stretch;align-self:stretch}[layout][self*=center]{margin-left:auto;margin-right:auto}[layout][self*=right]{margin-right:0}[layout][self*=left]{margin-left:0}[layout*=column] [self*=bottom]{margin-top:auto}[layout*=column] [self*=top]{margin-bottom:auto}[layout*=row] [self*=left]{margin-right:auto}[layout*=row] [self*=right]{margin-left:auto}[self~=size-1of5]{width:20%}[self~=size-1of4]{width:25%}[self~=size-1of3]{width:33.33333%}[self~=size-2of5]{width:40%}[self~=size-1of2]{width:50%}[self~=size-3of5]{width:60%}[self~=size-2of3]{width:66.6666%}[self~=size-3of4]{width:75%}[self~=size-4of5]{width:80%}[self~=size-1of1]{width:100%}[layout*=column][layout*=stretch-]>:not([self*=size-]),[layout*=row][layout*=-stretch]>:not([self*=size-]),[self~=size-x1]{-ms-flex:1 0 0%!important;flex:1 0 0%!important}[self~=size-x2]{-ms-flex:2 0 0%!important;flex:2 0 0%!important}[self~=size-x3]{-ms-flex:3 0 0%!important;flex:3 0 0%!important}[self~=size-x4]{-ms-flex:4 0 0%!important;flex:4 0 0%!important}[self~=size-x5]{-ms-flex:5 0 0%!important;flex:5 0 0%!important}[self~=size-x6]{-ms-flex:6 0 0%!important;flex:6 0 0%!important}[self~=size-x7]{-ms-flex:7 0 0%!important;flex:7 0 0%!important}[self~=size-x8]{-ms-flex:8 0 0%!important;flex:8 0 0%!important}[self~=size-x9]{-ms-flex:9 0 0%!important;flex:9 0 0%!important}[self*=size-auto]{-ms-flex:1 1 auto;flex:1 1 auto}[self*=size-x0]{-ms-flex:0 0 auto;flex:0 0 auto}[self~=size-xxlarge]{max-width:1440px;width:100%}[self~=size-xlarge]{max-width:1200px;width:100%}[self~=size-large]{max-width:960px;width:100%}[self~=size-larger]{max-width:840px;width:100%}[self~=size-medium]{max-width:720px;width:100%}[self~=size-smaller]{max-width:600px;width:100%}[self~=size-small]{max-width:480px;width:100%}[self~=size-xsmall]{max-width:360px;width:100%}[self~=size-xxsmall]{max-width:240px;width:100%}[self*=size-x]:not([self*=small]):not([self*=large]){-ms-flex-negative:1;flex-shrink:1}[self~=first]{-ms-flex-order:-1;order:-1}[self~=order-1]{-ms-flex-order:1;order:1}[self~=order-2]{-ms-flex-order:2;order:2}[self~=order-3]{-ms-flex-order:3;order:3}[self~=last]{-ms-flex-order:999;order:999}[layout*=column]:not([layout*=row])>*{-ms-flex-negative:0;flex-shrink:0;-ms-flex-preferred-size:auto;flex-basis:auto}@media screen and (max-width:64em){[layout*=lg-row]{-ms-flex-direction:row;flex-direction:row}[layout*=lg-column]{-ms-flex-direction:column;flex-direction:column}[layout*=lg-columns],[layout*=lg-rows]{-ms-flex-wrap:wrap;flex-wrap:wrap}}@media screen and (max-width:52em){[layout*=md-row]{-ms-flex-direction:row;flex-direction:row}[layout*=md-column]{-ms-flex-direction:column;flex-direction:column}[layout*=md-columns],[layout*=md-rows]{-ms-flex-wrap:wrap;flex-wrap:wrap}}@media screen and (max-width:40em){[layout*=sm-row]{-ms-flex-direction:row;flex-direction:row}[layout*=sm-column]{-ms-flex-direction:column;flex-direction:column}[layout*=sm-columns],[layout*=sm-rows]{-ms-flex-wrap:wrap;flex-wrap:wrap}}@media screen and (max-width:64em){[self*=lg-full]{-ms-flex:1 1 100%!important;flex:1 1 100%!important;width:100%;max-width:100%}[self*=lg-half]{-ms-flex:1 1 50%!important;flex:1 1 50%!important;width:50%;max-width:50%}[self~=lg-first]{-ms-flex-order:-1;order:-1}[self~=lg-last]{-ms-flex-order:999;order:999}[self~=lg-hide]{display:none}[self~=lg-show]{display:inherit}}@media screen and (max-width:52em){[self*=md-full]{-ms-flex:1 1 100%!important;flex:1 1 100%!important;width:100%;max-width:100%}[self*=md-half]{-ms-flex:1 1 50%!important;flex:1 1 50%!important;width:50%;max-width:50%}[self~=md-first]{-ms-flex-order:-1;order:-1}[self~=md-last]{-ms-flex-order:999;order:999}[self~=md-hide]{display:none}[self~=md-show]{display:inherit}}@media screen and (max-width:40em){[self*=sm-full]{-ms-flex:1 1 100%!important;flex:1 1 100%!important;width:100%;max-width:100%}[self*=sm-half]{-ms-flex:1 1 50%!important;flex:1 1 50%!important;width:50%;max-width:50%}[self~=sm-first]{-ms-flex-order:-1;order:-1}[self~=sm-last]{-ms-flex-order:999;order:999}[self~=sm-hide]{display:none}[self~=sm-show]{display:inherit}}", controller: null, using: "//zuixjs.github.io/zkit/css/flex-layout-attribute.min.css"
}

, {
    componentId:"layout/header", view:"<div class=\"header\" layout=\"row center-center\">\n  <div class=\"logo\">JuegoAmigo.github.io</div>\n</div>\n", css:". {\n  position: fixed;\n  top:0;\n  left:0;\n  right:0;\n  height:auto;\n  z-index: 100;\n}\n\n.header {\n  height: 56px;\n  max-height: 56px;\n}\n\n.logo {\n  padding-left: 12px;\n  padding-right: 12px;\n  font-size: 220%;\n  font-weight: 500;\n  color: #dd3532;\n  text-shadow:\n          1px 1px 0 #600,\n          -1px -1px 0 #600,\n          1px -1px 0 #600,\n          -1px 1px 0 #600,\n          1px 1px 0 #600;\n}\n", controller:function() {}
}

, {
    componentId:"layout/footer", view:"<button ref=\"home\" class=\"active\">\n  <i class=\"material-icons md-48\">home</i>\n</button>\n<button ref=\"search\">\n  <i class=\"material-icons md-48\">search</i>\n</button>\n<button ref=\"notifications\">\n  <i class=\"material-icons md-48\">notifications</i>\n</button>\n<button ref=\"about\">\n  <i class=\"material-icons md-48\">info</i>\n</button>\n", css:". {\n    position: fixed;\n    left:0; bottom:0; right: 0;\n    height: 56px;\n    background: #121212;\n    color: white;\n    border-top: solid 1px #711615;\n    text-align: center;\n    z-index: 100;\n    overflow: hidden;\n}\n\nbutton {\n    padding: 12px;\n    max-height: 56px;\n    margin-left: 8px;\n    margin-right: 8px;\n    background: transparent;\n    border: none;\n    border-radius: 8px;\n    color: rgba(0,0,0,0.5);\n    -webkit-transition: all .3s; /* Safari */\n    transition: all .3s;\n}\nbutton:hover {\n    background: rgba(255,255,255,0.25);\n}\nbutton:focus {outline:0;}\nbutton i {\n    color: #7c7c7c;\n    font-size: 32px !important;\n}\nbutton:hover i, .active i {\n    color: white;\n}\n.active {\n    transform: scale(1.2);\n    text-shadow:\n            1px 1px 0 #000,\n            -1px -1px 0 #000,\n            1px -1px 0 #000,\n            -1px 1px 0 #000,\n            1px 1px 0 #000;\n}\n", controller:function() {}
}

, {
    componentId:"pages/home", view:"<div data-ui-load=\"pages/home/main_cover\"\n     data-ui-field=\"main-cover\"\n     style=\"height: 90vh\"></div>\n\n<div class=\"content\" layout=\"column bottom-center\">\n    <div class=\"categories\" layout=\"row center-spread\">\n        OpenSource WASM TeeWorld Game\n</div>\n    <div class=\"options\" layout=\"row center-spread\">\n        <button data-ui-field=\"add-btn\" class=\"flat-btn\">\n            <i class=\"material-icons\">add</i>\n        </button>\n        <button data-ui-field=\"watch-btn\">\n            <div layout=\"row center-left\">\n                <i class=\"material-icons\">play_arrow</i>\n                Play\n            </div>\n        </button>\n        <button data-ui-field=\"details-btn\" class=\"flat-btn\">\n            <i class=\"material-icons\">info_outline</i>\n        </button>\n    </div>\n</div>\n\n<!-- Top Rated -->\n<div data-ui-include=\"pages/home/list_top_rated\"\n     data-ui-options=\"options.content_no_css\"></div>\n\n<!-- TV Series -->\n<div data-ui-include=\"pages/home/list_tv_series\"\n     data-ui-options=\"options.content_no_css\"></div>\n\n<!-- Comedy -->\n<div data-ui-include=\"pages/home/list_comedy\"\n     data-ui-options=\"options.content_no_css\"></div>\n\n<div class=\"about-box\" self=\"size-medium center\" layout=\"column center-center\">\n\n    Thanks for playing at JuegoAmigo.github.io \n<br> The best free WASM OpenSource games!\n<br><a href='https://mraddon.blog'>MrAddon</a><br>        </div>\n\n\n<!-- Details Page -->\n<div data-ui-load=\"pages/home/title_details\"\n     data-ui-options=\"options.detailsPage\"></div>\n", css:". {\n    /* temporary hack to test page scroll */\n    /* height: 500vh; */\n    color: white;\n    padding-bottom: 96px;\n    overflow-x: hidden;\n}\n\nh1 {\n    font-size: 120%;\n    text-align: left;\n    margin-top: 28px;\n    margin-left: 8px;\n    margin-bottom: 8px;\n}\n\n.content {\n    position: absolute;\n    top: 0; left: 0;\n    padding-bottom: 56px;\n    width: 100vw;\n    height: 90vh;\n    background-image: linear-gradient(to bottom, rgba(0,0,0, 0.15), transparent 20%, transparent 70%, rgba(0,0,0, 0.5) 80%);\n}\n\n.categories, .options {\n    padding: 8px;\n}\n\nbutton {\n    padding-left: 6px;\n    padding-right: 16px;\n    font-size: 120%;\n    font-weight: 500;\n    min-height: 38px;\n}\nbutton div i {\n    margin-right: 6px;\n}\n\nbutton.flat-btn {\n    border: 0;\n    background: transparent;\n    height: 56px;\n    width: 56px;\n    padding: 0;\n    text-align: center;\n    vertical-align: middle;\n}\nbutton.flat-btn i {\n    color: white;\n    font-size: 36px;\n    line-height: 56px;\n}\n\n.gallery {\n    width: 100%;\n    height: 180px;\n}\n\n.movie {\n    padding: 4px;\n}\n.movie span.item {\n    display: inline-block;\n    width: 120px;\n    height: 180px;\n    border: solid 1px rgba(255,255,255,.1);\n    background-image: linear-gradient(rgba(0,0,0,0.15) 0, transparent 48px, transparent 40%, black 99%);\n}\n.movie span.item:hover {\n    cursor: pointer;\n    opacity: 0.8;\n}\n\n.about-box {\n    margin-top: 56px;\n    margin-bottom: 48px;\n    font-size: 140%;\n    font-family: \"Benton Sans\", \"Helvetica Neue\", helvetica, arial, sans-serif;\n    line-height: 160%;\n}\n.about-box p {\n    padding: 12px;\n}\n\n@media only screen and (min-device-width : 720px) {\n    .gallery {\n        height: 231px;\n    }\n    .movie span.item {\n        width: 154px;\n        height: 231px;\n    }\n}\n", controller:function(t) {
        function o(m) {
            return c=m, u&&u.pictures(c.poster_path, c.backdrop_path), t.context
        }
        function s() {
            c.trailer&&(window.location.href=c.trailer)
        }
        function r(m) {
            if(null==m)return void zuix.field("header-bar").css("background-color", "rgba(18,18,18,"+p+")");
            let v=1;
            return"hit-top"===m.event?v=0: -m.info.viewport.y<m.info.viewport.height&&(v=-m.info.viewport.y/m.info.viewport.height), v!==p&&(zuix.field("header-bar").css("background-color", "rgba(18,18,18,"+v+")"), u&&u.translate(m.info), p=v), t.context
        }
        let c, u, p=0;
        t.create=function() {
            t.field("watch-btn").on("click", s), t.field("details-btn").on("click", function() {
                detailsPage.show(c)
            }
            ), t.view().hide(), zuix.context(t.field("main-cover"), function() {
                u=this, c&&o(c)
            }
            ), t.expose("cover", o), t.expose("sync", r)
        }
    }
}

, {
    componentId:"pages/search", view:"<div class=\"message\" self=\"stretch-stretch\" layout=\"row center-center\">\n    <div>Search</div> <i class=\"material-icons\">search</i>\n</div>\n", css:". {\n    color: white;\n    padding: 24px;\n}\n\n.message {\n    color: darkgrey;\n    min-height: 100vh;\n    width: 100vw;\n    font-size: 200%;\n}\n\n.message i {\n    margin-left: 16px;\n    color: darkgrey;\n    font-size: 150%;\n}\n", controller:function() {}
}

, {
    componentId:"pages/notifications", view:"<div class=\"message\" self=\"stretch-stretch\" layout=\"row center-center\">\n    <div>Notifications</div> <i class=\"material-icons\">notifications</i>\n</div>\n", css:". {\n    color: white;\n}\n\n.message {\n    color: darkgrey;\n    min-height: 100vh;\n    width: 100vw;\n    font-size: 200%;\n}\n.message i {\n    margin-left: 16px;\n    color: darkgrey;\n    font-size: 150%;\n}\n", controller:function() {}
}

, {
    componentId:"pages/about", view:"<div self=\"size-small center-center\">\n\n    <h1>About</h1>\n\n    <p>\n        This web application template is built with <a href=\"https://zuixjs.github.io/zuixjs.org\">zUIx.js</a>.\n        <br>\n        Source code and documentation available from <a href=\"https://github.io/zuixjs/zuix-web-flix\">JuegoAmigo.github.io</a> repository.\n    </p>\n\n    <h2>Other resources</h2>\n    <ul>\n        <li>\n            <a href=\"https://zuixjs.github.io/zkit\">zKit</a><br>\n            a collection of components for modern web.\n        </li>\n        <li>\n            <a href=\"https://github.io/zuixjs/zuix-web-flix\">HTML-PWA</a><br>\n            a progressive web app template optimized for mobile devices.\n        </li>\n        <li>\n            <a href=\"https://github.io/zuixjs/zuix-web-book\">Web Book</a><br>\n            a progressive web app template of a web book.\n        </li>\n    </ul>\n\n    <h3>Disclaimer</h3>\n    <p>This product uses the TMDb API but is not endorsed or certified by TMDb.</p>\n\n</div>\n", css:". {\n    color: white;\n    padding: 24px;\n    margin-top: 64px;\n    margin-bottom: 64px;\n}\n\nh1 {\n    color: darkgrey;\n}\n", controller:function() {}
}

, {
    componentId:"pages/home/main_cover", view:"<div class=\"cover-wrapper\">\n    <div class=\"cover\"></div>\n</div>\n", css:".cover-wrapper {\n    overflow: hidden;\n    margin-left: auto;\n    margin-right: auto;\n    height: 90vh;\n    background-image: linear-gradient(to bottom, rgba(0,0,0, 0.3), transparent 20%, transparent 80%, rgba(0,0,0, 0.3) 90%);\n}\n.cover {\n    height: 90vh;\n    background-size: cover;\n    background-repeat: no-repeat;\n    background-position-x: center;\n    /*transition: transform 150ms ease;*/\n}\n", controller:function(t) {
        function o(h, f) {
            return m=h, v=f, c(), t.context
        }
        function s(h) {
            const f=-h.viewport.y/6;
            return u.css("transform", "translateY("+f+"px)"), t.context
        }
        function r(h) {
            p=h.matches, c()
        }
        function c() {
            p?m&&u.css("background-image", "url(\""+m+"\")"): v&&u.css("background-image", "url(\""+v+"\")")
        }
        let u, p=!1, m, v;
        t.create=function() {
            u=t.view(".cover");
            const h=window.matchMedia("(orientation: portrait)");
            h.matches&&(p=!0), h.addListener(r), t.expose("pictures", o), t.expose("translate", s)
        }
        , t.destroy=function() {
            window.matchMedia("(orientation: portrait)").removeListener(r)
        }
    }
}

, {
    componentId:"pages/home/list_top_rated", view:"<h1 self=\"left\">Top Web Edition Games on JuegoAmigo.github.io</h1>\n<div data-ui-load=\"@lib/controllers/view_pager\"\n     data-ui-lazyload=\"auto\"\n     data-o-passive=\"false\"\n     layout=\"row top-left\"\n     class=\"gallery\">\n    <div class=\"movie\">\n<span title=\"TeeWorld Web Edition\" data-ui-lazyload=\"true\" style=\"background-image:url(images/teeworld.png)\" onclick=\"location.href='https://teeworlds.leaningtech.com/';\" class=\"item\"><!-- no-view --></span>\n</div>\n<div class=\"movie\">\n<span title=\"Quake Web Edition\" data-ui-lazyload=\"true\" style=\"background-image:url(images/quake3.jpg)\" onclick=\"location.href='http://www.quakejs.com/';\" class=\"item\"><!-- no-view --></span>\n</div>\n<div class=\"movie\">\n<span title=\"Quake Web Edition\" data-ui-lazyload=\"true\" style=\"background-image:url(images/openarena.jpg)\" onclick=\"location.href='https://openarena.live/';\" class=\"item\"><!-- no-view --></span>\n</div>\n<div class=\"movie\">\n<span title=\"Doom Web Edition\" data-ui-lazyload=\"true\" style=\"background-image:url(images/doom.jpg)\" onclick=\"location.href='http://kripken.github.io/boon/boon.html';\" class=\"item\"><!-- no-view --></span>\n</div>\n<div class=\"movie\">\n<span title=\"Doom 3 Web Edition\" data-ui-lazyload=\"true\" style=\"background-image:url(images/doom3.jpg)\" onclick=\"location.href='http://wasm.continuation-labs.com/d3demo/';\" class=\"item\"><!-- no-view --></span>\n</div>\n<div class=\"movie\">\n<span title=\"BananaBread Web Edition\" data-ui-lazyload=\"true\" style=\"background-image:url(images/banana.jpg)\" onclick=\"location.href='https://kripken.github.io/BananaBread/cube2/bb.html';\" class=\"item\"><!-- no-view --></span>\n</div>\n    \n    </div>\n</div>\n", css:null, controller:function() {}
}

, {
    componentId:"pages/home/list_tv_series", view:"<h1 self=\"left\">Top Web Edition Emulation on JuegoAmigo.github.io</h1>\n<div data-ui-load=\"@lib/controllers/view_pager\"\n     data-ui-lazyload=\"auto\"\n     data-o-passive=\"false\"\n     layout=\"row top-left\"\n     class=\"gallery\">\n   <div class=\"movie\">\n<span title=\"Emulatrix Web Edition\" data-ui-lazyload=\"true\" style=\"background-image:url(images/emulatrix.png)\" onclick=\"location.href='https://lrusso.github.io/Emulatrix/Emulatrix.htm';\" class=\"item\"><!-- no-view --></span>\n</div>\n<div class=\"movie\">\n<span title=\"Emulatrix Web Edition\" data-ui-lazyload=\"true\" style=\"background-image:url(images/snes.png)\" onclick=\"location.href='https://www.playemulator.com/snes-online/';\" class=\"item\"><!-- no-view --></span>\n</div>\n<div class=\"movie\">\n<span title=\"Emulatrix Web Edition\" data-ui-lazyload=\"true\" style=\"background-image:url(images/nes.png)\" onclick=\"location.href='https://www.playemulator.com/nes-online/';\" class=\"item\"><!-- no-view --></span>\n</div>\n<div class=\"movie\">\n<span title=\"Emulatrix Web Edition\" data-ui-lazyload=\"true\" style=\"background-image:url(images/gameboy.png)\" onclick=\"location.href='https://www.playemulator.com/gbc-online/';\" class=\"item\"><!-- no-view --></span>\n</div>\n<div class=\"movie\">\n<span title=\"Emulatrix Web Edition\" data-ui-lazyload=\"true\" style=\"background-image:url(images/megadrive.jpg)\" onclick=\"location.href='https://www.playemulator.com/sega-online/';\" class=\"item\"><!-- no-view --></span>\n</div>\n<div class=\"movie\">\n<span title=\"Atari 2600\" data-ui-lazyload=\"true\" style=\"background-image:url(images/atari.jpg)\" onclick=\"location.href='http://www.free80sarcade.com/all2600games.php';\" class=\"item\"><!-- no-view --></span>\n</div>\n    </div>\n</div>\n", css:null, controller:function() {}
}

, {
    componentId:"pages/home/list_comedy", view:"<h1 self=\"left\">Top Web Edition O.S. on JuegoAmigo.github.io</h1>\n<div data-ui-load=\"@lib/controllers/view_pager\"\n     data-ui-lazyload=\"auto\"\n     data-o-passive=\"false\"\n     layout=\"row top-left\"\n     class=\"gallery\">\n<div class=\"movie\">\n<span title=\"Windows 95\" data-ui-lazyload=\"true\" style=\"background-image:url(images/win95.jpg)\" onclick=\"location.href='https://win95.ajf.me/win95.html';\" class=\"item\"><!-- no-view --></span>\n</div>\n<div class=\"movie\">\n<span title=\"MacOS 7\" data-ui-lazyload=\"true\" style=\"background-image:url(images/macos.png)\" onclick=\"location.href='http://jamesfriend.com.au/pce-js/';\" class=\"item\"><!-- no-view --></span>\n</div>\n<div class=\"movie\">\n<span title=\"ZX Spectrum\" data-ui-lazyload=\"true\" style=\"background-image:url(images/spectrum.jpg)\" onclick=\"location.href='http://www.top80sgames.com/site/systems/zx-spectrum-128k';\" class=\"item\"><!-- no-view --></span>\n</div>\n<div class=\"movie\">\n<span title=\"MSX\" data-ui-lazyload=\"true\" style=\"background-image:url(images/msx.jpg)\" onclick=\"location.href='http://www.top80sgames.com/site/systems/msx';\" class=\"item\"><!-- no-view --></span>\n</div>\n<div class=\"movie\">\n<span title=\"Commodore 64\" data-ui-lazyload=\"true\" style=\"background-image:url(images/commodore.jpg)\" onclick=\"location.href='http://www.top80sgames.com/site/systems/commodore-64';\" class=\"item\"><!-- no-view --></span>\n</div>\n<div class=\"movie\">\n<span title=\"Capcom\" data-ui-lazyload=\"true\" style=\"background-image:url(images/capcom.jpg)\" onclick=\"location.href='https://www.playemulator.com/cps2-online/';\" class=\"item\"><!-- no-view --></span>\n</div>\n      </div>\n</div>\n", css:null, controller:function() {}
}

, {
    componentId:"pages/home/title_details", view:"<header>\n    <button>\n        <i class=\"material-icons\">arrow_back</i>\n    </button>\n    <h1 data-ui-field=\"title\"></h1>\n</header>\n\n<main>\n    <div class=\"cover\" data-ui-field=\"cover\" layout=\"column bottom-center\">\n        <div class=\"background\"></div>\n        <h1 class=\"watchable\" self=\"size-large\" data-ui-field=\"title\">Movie title</h1>\n    </div>\n    <div layout=\"column center-center\">\n        <p self=\"size-large\" data-ui-field=\"overview\"></p>\n        <h2>Vote <span data-ui-field=\"vote\">7.5</span></h2>\n    </div>\n</main>\n\n<footer layout=\"row center-spread\">\n    <div>\n        <i class=\"material-icons\">add</i>\n    </div>\n    <div>\n        <i class=\"material-icons\">thumb_up</i>\n    </div>\n    <div>\n        <i class=\"material-icons\">share</i>\n    </div>\n</footer>\n", css:". {\n    position: fixed;\n    z-index: 200;\n    top: 0; left: 100vh;\n    transition: left .2s ease-in-out;\n    touch-action: none;\n    width: 100vw;\n    min-height: 100vh;\n    background: #101010;\n    color: white;\n}\n\nheader {\n    position: fixed;\n    top: 0; left: 0; right: 0; height: 56px;\n    z-index: 200;\n}\nheader button {\n    position: absolute;\n    top: 0; left: 0;\n    z-index: 10;\n    border: 0;\n    background: transparent;\n    width: 56px;\n    height: 56px;\n    padding: 0;\n    text-align: center;\n    vertical-align: middle;\n}\nheader button i {\n    color: white;\n    font-weight: 700;\n    font-size: 160%;\n    line-height: 48px;\n}\nheader h1 {\n    position: absolute;\n    top: 14px;\n    left: 56px;\n    margin: 0;\n    font-size: 160%;\n}\n\nmain {\n    position: absolute;\n    top:0;left:0; bottom: 0;\n    width: 100%;\n    padding-bottom: 72px;\n    overflow-y: auto;\n}\n\nfooter {\n    position: fixed;\n    bottom: 0; left: 0; right: 0; height: 56px;\n    background: #0a0a0a;\n    border-top: solid 1px rgba(255,0,0,0.5);\n}\n\n.cover {\n    background: black no-repeat;\n    background-size: cover;\n    background-position-x: center;\n    position: relative;\n    width: 100vw;\n    height: 50vh;\n}\n\n.cover .background {\n    position: absolute;\n    left: 0; right: 0; top: 0; bottom: 0;\n    background-image: linear-gradient(to bottom, rgba(0,0,0, 0.35) 1%, transparent 20%, transparent 80%, rgba(0,0,0, 0.35) 90%);\n}\n.cover h1 {\n    z-index: 10;\n    margin: 0;\n    padding: 16px;\n    font-size: 180%;\n    text-shadow:\n            1px 1px 0 #000,\n            -1px -1px 0 #000,\n            1px -1px 0 #000,\n            -1px 1px 0 #000,\n            1px 1px 0 #000;\n}\n\n[data-ui-field=\"overview\"] {\n    font-size: 120%;\n    line-height: 160%;\n    padding: 16px;\n    margin-top: 8px;\n    margin-bottom: 0;\n    color: whitesmoke;\n}\n\nh2 {\n    color: darkgrey;\n}\n[data-ui-field=\"vote\"] {\n    color: white;\n}\n\n@media only screen and (min-device-width : 720px) {\n    [data-ui-field=\"overview\"] {\n        font-size: 140%;\n        line-height: 180%;\n    }\n    .cover h1 {\n        font-size: 220%;\n    }\n}\n", controller:function(t) {
        function o(m) {
            window.location.href="#details", t.view().show(), p.scrollStart(), setTimeout(function() {
                t.view().css("left", 0)
            }
            , 10);
            const v="url(\""+m.backdrop_path+"\")";
            t.field("cover").css("background-image", v), t.field("title").html(m.title||m.original_name), t.field("overview").html(m.overview), t.field("vote").html(m.vote_average), t.trigger("page:show")
        }
        function s() {
            t.view().css("left", "100vw").one("transitionend", function() {
                t.view().hide()
            }
            ), t.trigger("page:hide")
        }
        let r, c, u, p;
        t.create=function() {
            r=t.view("header"), c=t.view("main").find("h1"), u=r.find("h1"), r.find("button").on("click", s), zuix.load("@lib/controllers/scroll_helper", {
                view:t.view("main"), on: {
                    "scroll:change":function(m, v) {
                        switch(v.event) {
                            case"hit-top": r.css("background-color", "rgba(33,33,33,0)"), u.css("opacity", 0), c.css("opacity", 1), t.field("cover").css("background-position-y", 0);
                            break;
                            case"scroll": const h=v.info.viewport;
                            h.y>-h.height/2.5&&t.field("cover").css("background-position-y", -(h.y/5)+"px");
                        }
                    }
                }
                , ready:function() {
                    p=this, this.watch(".watchable", function(m, v) {
                        const h=v.frame.dy/0.3;
                        0.3>v.frame.dy&&(-0.3<v.frame.dy&&c.css("opacity", h+0.5), 0.1<-h&&r.css("background-color", "rgba(33,33,33,"+-h+")")), 0.125>v.frame.dy&&u.css("opacity", -h)
                    }
                    )
                }
            }
            ), t.view().hide(), t.expose("show", o), t.expose("hide", s)
        }
    }
}

, {
    componentId:"https://zuixjs.github.io/zkit/lib/controllers/view_pager", controller:function(t) {
        function o() {
            null!=V&&clearTimeout(V), V=setTimeout(s, 250)
        }
        function s(ve) {
            if(!ve&&(se||null!=ce))return void o();
            pe.each(function() {
                this.css( {
                    position: "absolute", left: 0, top: 0
                }
                )
            }
            );
            const he=_(t.view().get());
            if(0===he.width||0===he.height) {
                if(0===he.height&&t.view().position().visible) {
                    let xe=0;
                    pe.each(function(we, ye) {
                        let be=_(ye);
                        be.height>xe&&(xe=be.height)
                    }
                    ), he.height<xe&&t.view().css("height", xe+"px")
                }
                return void o()
            }
            re=he;
            let fe=0, ge=!1;
            pe.each(function(xe, we) {
                let ye=_(we);
                if(Z===R) {
                    let be=(he.height-ye.height)/2;
                    0>be&&(be=0), H(this, X), P(this, fe, be), fe+=ye.width
                }
                else {
                    let be=(he.width-ye.width)/2;
                    0>be&&(be=0), H(this, X), P(this, be, fe), fe+=ye.height
                }
                ("true"===this.attr("data-ui-lazyload")||0<this.find("[data-ui-lazyload=\"true\"]").length())&&(ge=!0)
            }
            ), ne=ge, w(J), 1<pe.length()&&v()
        }
        function r() {
            let ve=!1, he=parseInt(J)+1;
            return he>=pe.length()&&(he=pe.length()-1, ve=!0), w(he, X), !ve
        }
        function c() {
            let ve=!1, he=parseInt(J)-1;
            return 0>he&&(he=0, ve=!0), w(he, X), !ve
        }
        function u() {
            w(0, X)
        }
        function p() {
            w(pe.length()-1, X)
        }
        function m() {
            w(parseInt(J)+U, X), v()
        }
        function v() {
            if(h(), !0===Q) {
                const he=t.view().position().visible;
                he?(!le&&zuix.componentize(t.view()), N=setTimeout(m, $)): N=setTimeout(v, 500), le=he
            }
        }
        function h() {
            null!=N&&clearTimeout(N)
        }
        function f(ve, he) {
            let fe=0;
            return pe.each(function(ge, xe) {
                let we=k(this);
                fe=ge;
                const ye=_(xe), be= {
                    x: we.position.x, y: we.position.y, w: ye.width, h: ye.height
                }
                ;
                if(Z===R&&(be.x>ve||be.x+be.w>ve)||Z===q&&(be.y>he||be.y+be.h>he))return!1
            }
            ), fe
        }
        function g(ve, he) {
            let fe=t.view().position(), ge=f(ve.x-fe.x, ve.y-fe.y);
            w(ge, null==he?X: he)
        }
        function w(ve, he) {
            G=J, 0>ve?(U=F, ve=0):ve>=pe.length()?(U=O, ve=pe.length()-1):ve!==J&&(U=J<ve?F: O), J=ve, J!=G&&(pe.eq(J).css("z-index", 1), -1!==G&&pe.eq(G).css("z-index", 0), t.trigger("page:change", {
                in: J, out: G
            }
            ));
            const fe=pe.eq(ve), ge=k(fe), xe=_(fe.get()), we= {
                x: (re.width-xe.width)/2-ge.position.x, y: (re.height-xe.height)/2-ge.position.y
            }
            ;
            z(we, he), v()
        }
        function z(ve, he) {
            const fe=D(), ge=k(pe.eq(0)), xe=pe.eq(pe.length()-1), we=k(xe);
            if(pe.each(function() {
                const ze=k(this), _e=D();
                ze.dragStart= {
                    x: _e.marginLeft+ze.position.x, y: _e.marginTop+ze.position.y
                }
            }
            ), Z===R) {
                let ye=ve.x;
                0<ge.position.x+ve.x?ye=-ge.position.x:we.position.x+xe.get().offsetWidth+ve.x<re.width&&(ye=2*-fe.marginLeft+re.width-(we.position.x+xe.get().offsetWidth)), 0!=ve.x-ye&&null!=he&&(he= {
                    duration: he.duration*(ye/ve.x), easing: A
                }
                , (!isFinite(he.duration)||0>he.duration)&&(he.duration=0.2)), j(ye, 0, he)
            }
            else {
                let ye=ve.y;
                0<ge.position.y+ve.y?ye=-ge.position.y:we.position.y+xe.get().offsetHeight+ve.y<re.height&&(ye=2*-fe.marginTop+re.height-(we.position.y+xe.get().offsetHeight)), 0!=ve.y-ye&&null!=he&&(he= {
                    duration: he.duration*(ye/ve.y), easing: A
                }
                , (!isFinite(he.duration)||0>he.duration)&&(he.duration=0.2)), j(0, ye, he)
            }
            de=!0
        }
        function _(ve) {
            const he=ve.getBoundingClientRect(), fe=he.width||ve.offsetWidth, ge=ve.offsetHeight||he.height;
            return {
                width: fe, height: ge
            }
        }
        function k(ve) {
            const he=ve.get().data=ve.get().data|| {}
            ;
            return he.position=he.position|| {
                x: 0, y: 0
            }
            , he
        }
        function T() {
            ne&&(I(), null!=ue&&clearTimeout(ue), null!=ce&&clearInterval(ce), ce=setInterval(function() {
                oe&&pe.each(function(ve, he) {
                    const fe=window.getComputedStyle(he, null), ge= {
                        width: parseFloat(fe.width.replace("px", "")), height: parseFloat(fe.height.replace("px", ""))
                    }
                    , xe=parseFloat(fe.left.replace("px", "")), we=parseFloat(fe.top.replace("px", ""));
                    0<ge.width&&0<ge.height&&(he=zuix.$(he), 0>xe+ge.width||0>we+ge.height||xe>re.width||we>re.height?"hidden"!==he.visibility()&&he.visibility("hidden"):"visible"!==he.visibility()&&he.visibility("visible"))
                }
                ), zuix.componentize(t.view())
            }
            , 10))
        }
        function I() {
            ne&&null==ue&&clearInterval(ce)
        }
        function S() {
            se=!0, de=!1, pe.each(function(ve, he) {
                const fe=k(this), ge=D(), xe=window.getComputedStyle(he, null);
                fe.position.x=parseFloat(xe.left.replace("px", "")), fe.position.y=parseFloat(xe.top.replace("px", "")), this.css("left", fe.position.x+"px"), this.css("top", fe.position.y+"px"), fe.dragStart= {
                    x: ge.marginLeft+fe.position.x, y: ge.marginTop+fe.position.y
                }
            }
            )
        }
        function D() {
            const ve= {
                w: 0, h: 0, marginLeft: 0, marginTop: 0
            }
            ;
            return pe.each(function(he, fe) {
                const ge=_(fe);
                ve.w+=ge.width, ve.h+=ge.height
            }
            ), Z===R&&ve.w<re.width?ve.marginLeft=(re.width-ve.w)/2:Z===q&&ve.h<re.height&&(ve.marginTop=(re.height-ve.h)/2), ve
        }
        function j(ve, he, fe) {
            null==fe?ne&&zuix.componentize(t.view()):(T(), ue=setTimeout(function() {
                ue=null, I()
            }
            , 1e3*fe.duration), fe=fe.duration+"s "+fe.easing), pe.each(function() {
                const we=k(this);
                H(this, fe), P(this, we.dragStart.x+ve, we.dragStart.y+he)
            }
            )
        }
        function W(ve) {
            null!=ve&&(ve.done=!0, !de&&(Z===R&&"horizontal"===ve.scrollIntent()||Z===q&&"vertical"===ve.scrollIntent())&&L(null, ve)), I(), se=!1
        }
        function C(ve, he) {
            if(he.scrollIntent()&&!he.done) {
                (K||("left"===he.direction||"right"===he.direction)&&Z===R||("up"===he.direction||"down"===he.direction)&&Z===q)&&(!K&&null==he.event.touches&&t.view().get().addEventListener("click", function(ge) {
                    K&&(K=!1, ge.cancelBubble=!0, ge.preventDefault()), t.view().get().removeEventListener("click", this, !0)
                }
                , !0), K=!0, he.cancel());
                const fe=D();
                Z===R&&"horizontal"===he.scrollIntent()?j(he.shiftX-fe.marginLeft, 0):Z===q&&"vertical"===he.scrollIntent()&&j(0, he.shiftY-fe.marginTop)
            }
        }
        function M(ve, he) {
            let fe=t.view().position(), ge=f(he.x-fe.x, he.y-fe.y);
            t.trigger("page:tap", ge, he), ee&&g(he)
        }
        function L(ve, he) {
            const ge=1.25, xe=Math.exp(Math.abs(he.velocity/(Math.abs(he.velocity)<=ge?5: 2))+1);
            let we=0.99+xe/1e3;
            0.999<we&&(we=0.999);
            const ye=Math.log(0.01/Math.abs(he.velocity))/Math.log(we), be= {
                duration: ye/1e3, easing: "cubic-bezier(0.0,0.1,0.35,1.0)"
            }
            , _e=he.stepSpeed<ge?0:xe*he.velocity*(1-Math.pow(we, ye+1))/(1-we);
            (B(he)||null==ve)&&function(Te, Ie) {
                ee?(be.duration*=0.5, Z===R?g( {
                    x: Te.x-Ie.x, y: Te.y
                }
                , be):g( {
                    x: Te.x, y: Te.y-Ie.y
                }
                , be)):z(Ie, be)
            }
            (he, {
                x: _e, y: _e
            }
            )
        }
        function B(ve) {
            return!ee||1.25<Math.abs(ve.velocity)
        }
        function Y(ve, he) {
            if(!B(he))switch(he.direction) {
                case"right": Z===R&&c();
                break;
                case"left": Z===R&&r();
                break;
                case"down": Z===q&&c();
                break;
                case"up": Z===q&&r();
            }
        }
        function P(ve, he, fe) {
            const ge=k(ve);
            return isNaN(he)||isNaN(fe)||(ge.position= {
                x: he, y: fe
            }
            , ve.css( {
                left: ge.position.x+"px", top: ge.position.y+"px"
            }
            )), ge
        }
        function H(ve, he) {
            null==he&&(he="none"), ve.css( {
                "-webkit-transition": he, "-moz-transition": he, "-ms-transition": he, "-o-transition": he, transition: he
            }
            )
        }
        const X= {
            duration: 0.3, easing: "ease"
        }
        , A="cubic-bezier(0.0,0.1,0.35,1.1)", R="horizontal", q="vertical", F=1, O=-1;
        let J=-1, G=0, N=null, $=3e3, U=F, V=null, K=!1, Z=R, Q=!1, ee=!1, te=!1, ie=!0, ae=0, oe=!1, se=!1, le=!1, ne=!1, de=!1, re= {
            width: 0, height: 0
        }
        , ce=null, ue=null, pe=null;
        const me=new MutationObserver(function() {
            pe=t.view().children(), o()
        }
        );
        t.init=function() {
            let ve=t.options(), he=t.view();
            ve.html=!1, ve.css=!1, ee=!0===ve.enablePaging||"true"===he.attr("data-o-paging"), Q=!0===ve.autoSlide||"true"===he.attr("data-o-slide"), ie=!1!==ve.passive&&"false"!==he.attr("data-o-passive"), te=!0===ve.holdTouch||"true"===he.attr("data-o-hold"), ae=ve.startGap||he.attr("data-o-startgap"), (!0===ve.verticalLayout||he.attr("data-o-layout")===q)&&(Z=q), null==ve.slideInterval?null!=he.attr("data-o-slide-interval")&&($=parseInt(he.attr("data-o-slide-interval"))): $=ve.slideInterval, oe=!0===ve.autohide||"true"===he.attr("data-o-autohide")
        }
        , t.create=function() {
            const ve=t.view().css( {
                position: "relative", overflow: "hidden"
            }
            );
            pe=ve.children(), ve.find("img").each(function() {
                this.one("load", o)
            }
            ), zuix.$(window).on("resize", function() {
                s(!0)
            }
            ).on("orientationchange", function() {
                s(!0)
            }
            ), me.observe(ve.get(), {
                attributes: !1, childList: !0, subtree: !0, characterData: !1
            }
            ), o(), w(0);
            let he=null;
            zuix.load("@lib/controllers/gesture_helper", {
                view:ve, passive:ie, startGap:ae, on: {
                    "gesture:touch":function(fe, ge) {
                        K=!1, h(), S(), te&&ge.cancel()
                    }
                    , "gesture:release":function(fe, ge) {
                        W(ge), v()
                    }
                    , "gesture:tap":function(fe, ge) {
                        null!=he&&clearTimeout(he), he=setTimeout(function() {
                            M(fe, ge)
                        }
                        , 50)
                    }
                    , "gesture:pan":C, "gesture:swipe":Y
                }
                , ready:function() {
                    s(!0)
                }
            }
            ), t.expose("page", function(fe) {
                return null==fe?parseInt(J): void w(fe, X)
            }
            ).expose("get", function(fe) {
                return pe.eq(fe)
            }
            ).expose("slide", function(fe) {
                !0===fe?v(): h()
            }
            ).expose("layout", function(fe) {
                if(null==fe)return Z;
                Z=fe===q?q: R;
                o()
            }
            ).expose("refresh", function() {
                s(!0)
            }
            ).expose("next", r).expose("prev", c).expose("last", p).expose("first", u)
        }
        , t.destroy=function() {
            null!=me&&me.disconnect()
        }
    }
}

, {
    componentId: "https://zuixjs.github.io/zkit/lib/controllers/gesture_helper", view: "\n    <div class=\"movie\" style=\"z-index: 1; transition: none 0s ease 0s; left: -81px; top: 0px;\">\n        <span title=\"Total recall\" data-ui-lazyload=\"true\" data-ui-load=\"controllers/movie_db\" class=\"item --ui--visible\" data-ui-loaded=\"false\"><!-- no-view --></span>\n    </div>\n    <div class=\"movie\" style=\"transition: none 0s ease 0s; left: -81px; top: 0px;\">\n        <span title=\"In time\" data-ui-lazyload=\"true\" data-ui-load=\"controllers/movie_db\" class=\"item --ui--visible\" data-ui-loaded=\"false\"><!-- no-view --></span>\n    </div>\n    <div class=\"movie\" style=\"transition: none 0s ease 0s; left: -81px; top: 0px;\">\n        <span title=\"Push\" data-ui-lazyload=\"true\" data-ui-load=\"controllers/movie_db\" class=\"item --ui--visible\" data-ui-loaded=\"false\"><!-- no-view --></span>\n    </div>\n    <div class=\"movie\" style=\"transition: none 0s ease 0s; left: -81px; top: 0px;\">\n        <span title=\"Jupiter Ascending\" data-ui-lazyload=\"true\" data-ui-load=\"controllers/movie_db\" class=\"item --ui--visible\" data-ui-loaded=\"false\"><!-- no-view --></span>\n    </div>\n    <div class=\"movie\" style=\"transition: none 0s ease 0s; left: -81px; top: 0px;\">\n        <span title=\"PayCheck\" data-ui-lazyload=\"true\" data-ui-load=\"controllers/movie_db\" class=\"item --ui--visible\" data-ui-loaded=\"false\"><!-- no-view --></span>\n    </div>\n    <div class=\"movie\" style=\"transition: none 0s ease 0s; left: -81px; top: 0px;\">\n        <span title=\"Labyrinth\" data-ui-lazyload=\"true\" data-ui-load=\"controllers/movie_db\" class=\"item --ui--visible\" data-ui-loaded=\"false\"><!-- no-view --></span>\n    </div>\n    <div class=\"movie\" style=\"transition: none 0s ease 0s; left: -81px; top: 0px;\">\n        <span title=\"The Island\" data-ui-lazyload=\"true\" data-ui-load=\"controllers/movie_db\" class=\"item --ui--visible\" data-ui-loaded=\"false\"><!-- no-view --></span>\n    </div>\n    <div class=\"movie\" style=\"transition: none 0s ease 0s; left: -81px; top: 0px;\">\n        <span title=\"Source Code\" data-ui-lazyload=\"true\" data-ui-load=\"controllers/movie_db\" class=\"item\" data-ui-loaded=\"false\"><!-- no-view --></span>\n    </div>\n    <div class=\"movie\" style=\"transition: none 0s ease 0s; left: -81px; top: 0px;\">\n        <span title=\"Divergent\" data-ui-lazyload=\"true\" data-ui-load=\"controllers/movie_db\" class=\"item\" data-ui-loaded=\"false\"><!-- no-view --></span>\n    </div>\n    <div class=\"movie\" style=\"transition: none 0s ease 0s; left: -81px; top: 0px;\">\n        <span title=\"Transformers\" data-ui-lazyload=\"true\" data-ui-load=\"controllers/movie_db\" class=\"item\" data-ui-loaded=\"false\"><!-- no-view --></span>\n    </div>\n    <div class=\"movie\" style=\"transition: none 0s ease 0s; left: -81px; top: 0px;\">\n        <span title=\"Matrix\" data-ui-lazyload=\"true\" data-ui-load=\"controllers/movie_db\" class=\"item\" data-ui-loaded=\"false\"><!-- no-view --></span>\n    </div>\n    <div class=\"movie\" style=\"transition: none 0s ease 0s; left: -81px; top: 0px;\">\n        <span title=\"Edge of Tomorrow\" data-ui-lazyload=\"true\" data-ui-load=\"controllers/movie_db\" class=\"item\" data-ui-loaded=\"false\"><!-- no-view --></span>\n    </div>\n    <div class=\"movie\" style=\"transition: none 0s ease 0s; left: -81px; top: 0px;\">\n        <span title=\"The Amazing SpiderMan\" data-ui-lazyload=\"true\" data-ui-load=\"controllers/movie_db\" class=\"item\" data-ui-loaded=\"false\"><!-- no-view --></span>\n    </div>\n    <div class=\"movie\" style=\"transition: none 0s ease 0s; left: -81px; top: 0px;\">\n        <span title=\"Meet Joe Black\" data-ui-lazyload=\"true\" data-ui-load=\"controllers/movie_db\" class=\"item\" data-ui-loaded=\"false\"><!-- no-view --></span>\n    </div>\n    <div class=\"movie\" style=\"transition: none 0s ease 0s; left: -81px; top: 0px;\">\n        <span title=\"I Robot\" data-ui-lazyload=\"true\" data-ui-load=\"controllers/movie_db\" class=\"item\" data-ui-loaded=\"false\"><!-- no-view --></span>\n    </div>\n    <div class=\"movie\" style=\"transition: none 0s ease 0s; left: -81px; top: 0px;\">\n        <span title=\"War Games\" data-ui-lazyload=\"true\" data-ui-load=\"controllers/movie_db\" class=\"item\" data-ui-loaded=\"false\"><!-- no-view --></span>\n    </div>\n    <div class=\"movie\" style=\"transition: none 0s ease 0s; left: -81px; top: 0px;\">\n        <span title=\"Tron\" data-ui-lazyload=\"true\" data-ui-load=\"controllers/movie_db\" class=\"item\" data-ui-loaded=\"false\"><!-- no-view --></span>\n    </div>\n    <div class=\"movie\" style=\"transition: none 0s ease 0s; left: -81px; top: 0px;\">\n        <span title=\"Constantine\" data-ui-lazyload=\"true\" data-ui-load=\"controllers/movie_db\" class=\"item\" data-ui-loaded=\"false\"><!-- no-view --></span>\n    </div>\n    <div class=\"movie\" style=\"transition: none 0s ease 0s; left: -81px; top: 0px;\">\n        <span title=\"Mission Impossible\" data-ui-lazyload=\"true\" data-ui-load=\"controllers/movie_db\" class=\"item\" data-ui-loaded=\"false\"><!-- no-view --></span>\n    </div>\n    <div class=\"movie\" style=\"transition: none 0s ease 0s; left: -81px; top: 0px;\">\n        <span title=\"Playing it cool\" data-ui-lazyload=\"true\" data-ui-load=\"controllers/movie_db\" class=\"item\" data-ui-loaded=\"false\"><!-- no-view --></span>\n    </div>\n    <div class=\"movie\" style=\"transition: none 0s ease 0s; left: -81px; top: 0px;\">\n        <span title=\"Back to the Future\" data-ui-lazyload=\"true\" data-ui-load=\"controllers/movie_db\" class=\"item\" data-ui-loaded=\"false\"><!-- no-view --></span>\n    </div>\n    <div class=\"movie\" style=\"transition: none 0s ease 0s; left: -81px; top: 0px;\">\n        <span title=\"Into the Night\" data-ui-lazyload=\"true\" data-ui-load=\"controllers/movie_db\" class=\"item\" data-ui-loaded=\"false\"><!-- no-view --></span>\n    </div>\n    <div class=\"movie\" style=\"transition: none 0s ease 0s; left: -81px; top: 0px;\">\n        <span title=\"Ladyhawke\" data-ui-lazyload=\"true\" data-ui-load=\"controllers/movie_db\" class=\"item\" data-ui-loaded=\"false\"><!-- no-view --></span>\n    </div>\n", css:null, controller:function(t) {
        function o(j, W, C) {
            let M=new Date().getTime();
            g= {
                event:j, cancel:function() {
                    g.event.cancelBubble=!0, z||g.event.preventDefault()
                }
                , startX:W, startY:C, startTime:M, shiftX:0, shiftY:0, endTime:0, stepX:0, stepY:0, stepTime:M, velocity:0, x:W, y:C, scrollIntent:function() {
                    return f===m?"horizontal": !(f!==v)&&"vertical"
                }
            }
            , I=u(g), t.trigger("gesture:touch", g)
        }
        function s(j, W, C) {
            if(null!=g) {
                g.event=j, g.x=W, g.y=C, g.shiftX=W-g.startX, g.shiftY=C-g.startY, g.endTime=new Date().getTime();
                let M=c();
                null!=M&&!1!==k&&(null!=T&&T!==g.direction?(k=!1, T="cancel"): (k=M, T=g.direction)), t.trigger("gesture:pan", g)
            }
        }
        function r(j) {
            null!=g&&(I.update(), g.event=j, null==k&&(k=c()), null!=k&&!1!==k&&t.trigger(k, g)), t.trigger("gesture:release", g), f=p, T=null, k=null, g=null
        }
        function c() {
            let j=null;
            I.update();
            const W=2, C=180*Math.atan2(g.shiftY-g.stepY, g.shiftX-g.stepX)/Math.PI;
            return 0===g.shiftX&&0===g.shiftY&&g.startTime>D+100&&g.stepTime<750?(D=new Date().getTime(), j="gesture:tap"): (f===p||f===m)&&g.stepDistance>W&&(135<=C&&180>=C||-180<=C&&-135>=C)?(g.direction="left", j="gesture:swipe", f=m): (f===p||f===m)&&g.stepDistance>W&&(0<=C&&45>=C||-45<=C&&0>C)?(g.direction="right", j="gesture:swipe", f=m): (f===p||f===v)&&g.stepDistance>W&&45<C&&135>C?(g.direction="down", j="gesture:swipe", f=v): (f===p||f===v)&&g.stepDistance>W&&-135<C&&-45>C&&(g.direction="up", j="gesture:swipe", f=v), g.stepDistance>W&&I.step(), j
        }
        function u(j) {
            let W, C= {
                time: 0, x: 0, y: 0
            }
            , M= {
                time: 0, x: 0, y: 0
            }
            , L=function() {
                j.stepTime=j.endTime, j.stepX=j.shiftX, j.stepY=j.shiftY, j.stepSpeed=0, j.stepDistance=0
            }
            , B=function() {
                W=j.direction, C.time=new Date().getTime(), C.x=j.x, C.y=j.y, j.velocity=0, j.distance=0, L()
            }
            ;
            return B(), {
                update:function() {
                    if(M.time=new Date().getTime(), M.x=j.x, M.y=j.y, null!=W&&W!==j.direction)return void B();
                    null==W&&j.direction!==W&&(W=j.direction);
                    const Y=M.time-C.time;
                    let P= {
                        x: M.x-C.x, y: M.y-C.y
                    }
                    ;
                    const H=Math.sqrt(P.x*P.x+P.y*P.y);
                    j.distance=H;
                    let X=H/Y;
                    j.velocity="left"===j.direction||"up"===j.direction?-X:X, j.stepTime=j.endTime-j.stepTime, P= {
                        x: j.shiftX-j.stepX, y: j.shiftY-j.stepY
                    }
                    , j.stepDistance=Math.sqrt(P.x*P.x+P.y*P.y), j.stepSpeed=j.stepDistance/j.stepTime
                }
                , step:L
            }
        }
        const p=0, m=1, v=2;
        let f=p, g, w=!1, z=!0, _=-1, k, T, I, S=!1, D=new Date().getTime();
        Math.sign=Math.sign||function(j) {
            return(0<j)-(0>j)||+j
        }
        , t.init=function() {
            let j=t.view();
            const W=t.options();
            W.html=!1, W.css=!1, z=!1!==W.passive&&"false"!==j.attr("data-o-passive"), _=W.startGap||j.attr("data-o-startgap")
        }
        , t.create=function() {
            t.view().on("dragstart", {
                handler:function(j) {
                    w||z||j.preventDefault()
                }
                , passive:z
            }
            ).on("mousedown", {
                handler:function(j) {
                    const W=zuix.$(j.target);
                    1===j.which&&0===W.parent("[class*=\"no-gesture\"]").length()&&j.x>_?(S=!0, w=!1, W.get().draggable=!1, o(j, j.x, j.y)): w=!0
                }
                , passive:z
            }
            ).on("mousemove", {
                handler:function(j) {
                    !w&&S&&s(j, j.x, j.y)
                }
                , passive:z
            }
            ).on("mouseup", function(j) {
                1!==j.which||w||(S=!1, r(j))
            }
            ).on("touchstart", {
                handler:function(j) {
                    const W=zuix.$(j.target);
                    0===W.parent("[class*=\"no-gesture\"]").length()&&j.touches[0].clientX>_?(w=!1, W.get().draggable=!1, o(j, j.touches[0].clientX, j.touches[0].clientY)): w=!0
                }
                , passive:z
            }
            ).on("touchmove", {
                handler:function(j) {
                    w||s(j, j.touches[0].clientX, j.touches[0].clientY)
                }
                , passive:z
            }
            ).on("touchend", function(j) {
                w||r(j)
            }
            )
        }
    }
}

, {
    componentId:"controllers/movie_db", controller:function(t) {
        t.init=function() {
            t.options().html=!1, t.options().css=!1
        }
        , t.create=function() {
            const s=t.view().attr("title");
            t.view().css( {
                "background-size": "cover", "background-position-x": "center"
            }
            ), 0<s.length&&zuix.$.ajax( {
                url:"https://api.themoviedb.org/3/search/multi?api_key="+"95d7de04d8f066ca1335996416fe126e"+"&query="+s, success:function(r) {
                    const c=JSON.parse(r);
                    if(0<c.total_results) {
                        const u=c.results[0], p="https://image.tmdb.org/t/p/w154"+u.poster_path;
                        t.view().css("background-image", "url(\""+p+"\")"), u.poster_path="https://image.tmdb.org/t/p/w780"+u.poster_path, u.backdrop_path="https://image.tmdb.org/t/p/w1280"+u.backdrop_path, t.view().on("click", function() {
                            detailsPage&&detailsPage.show(u)
                        }
                        )
                    }
                }
            }
            )
        }
    }
}

]);