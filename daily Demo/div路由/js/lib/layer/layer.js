/*! layer-v2.4 弹层组件 License LGPL  http://layer.layui.com/ By 贤心 */
!function(l,k){var d,s,r={getPath:function(){var a=document.scripts,c=a[a.length-1],b=c.src;if(!c.getAttribute("merge")){return b.substring(0,b.lastIndexOf("/")+1)}}(),enter:function(a){13===a.keyCode&&a.preventDefault()},config:{},end:{},btn:["&#x786E;&#x5B9A;","&#x53D6;&#x6D88;"],type:["dialog","page","iframe","loading","tips"]},q={v:"2.4",ie6:!!l.ActiveXObject&&!l.XMLHttpRequest,index:0,path:r.getPath,config:function(e,c){var b=0;return e=e||{},q.cache=r.config=d.extend(r.config,e),q.path=r.config.path||q.path,"string"==typeof e.extend&&(e.extend=[e.extend]),q.use("skin/layer.css",e.extend&&e.extend.length>0?function a(){var f=e.extend;q.use(f[f[b]?b:b-1],b<f.length?function(){return ++b,a}():c)}():c),this},use:function(b,h,a){var i=d("head")[0],b=b.replace(/\s/g,""),f=/\.css$/.test(b),e=document.createElement(f?"link":"script"),g="layui_layer_"+b.replace(/\.|\//g,"");return q.path?(f&&(e.rel="stylesheet"),e[f?"href":"src"]=/^http:\/\//.test(b)?b:q.path+b,e.id=g,d("#"+g)[0]||i.appendChild(e),function c(){(f?1989===parseInt(d("#"+g).css("width")):q[a||g])?function(){h&&h();try{f||i.removeChild(e)}catch(j){}}():setTimeout(c,100)}(),this):void 0},ready:function(a,c){var b="function"==typeof a;return b&&(c=a),q.config(d.extend(r.config,function(){return b?{}:{path:a}}()),c),this},alert:function(e,c,b){var a="function"==typeof c;return a&&(b=c),q.open(d.extend({content:e,yes:b},a?{}:c))},confirm:function(c,b,a,f){var e="function"==typeof b;return e&&(f=a,a=b),q.open(d.extend({content:c,btn:r.btn,yes:a,btn2:f},e?{}:b))},msg:function(h,e,g){var c="function"==typeof e,b=r.config.skin,a=(b?b+" "+b+"-msg":"")||"layui-layer-msg",f=o.anim.length-1;return c&&(g=e),q.open(d.extend({content:h,time:3000,shade:!1,skin:a,title:!1,closeBtn:!1,btn:!1,end:g},c&&!r.config.skin?{skin:a+" layui-layer-hui",shift:f}:function(){return e=e||{},(-1===e.icon||e.icon===k&&!r.config.skin)&&(e.skin=a+" "+(e.skin||"layui-layer-hui")),e}()))},load:function(b,a){return q.open(d.extend({type:3,icon:b||0,shade:0.01},a))},tips:function(a,c,b){return q.open(d.extend({type:4,content:[a,c],closeBtn:!1,time:3000,shade:!1,fix:!1,maxWidth:210},b))}},p=function(b){var a=this;a.index=++q.index,a.config=d.extend({},a.config,r.config,b),a.creat()};p.pt=p.prototype;var o=["layui-layer",".layui-layer-title",".layui-layer-main",".layui-layer-dialog","layui-layer-iframe","layui-layer-content","layui-layer-btn","layui-layer-close"];o.anim=["layer-anim","layer-anim-01","layer-anim-02","layer-anim-03","layer-anim-04","layer-anim-05","layer-anim-06"],p.pt.config={type:0,shade:0.3,fix:!0,move:o[1],title:"&#x4FE1;&#x606F;",offset:"auto",area:"auto",closeBtn:1,time:0,zIndex:19891014,maxWidth:360,shift:0,icon:-1,scrollbar:!0,tips:2},p.pt.vessel=function(h,e){var c=this,b=c.index,a=c.config,j=a.zIndex+b,i="object"==typeof a.title,g=a.maxmin&&(1===a.type||2===a.type),f=a.title?'<div class="layui-layer-title" style="'+(i?a.title[1]:"")+'">'+(i?a.title[0]:a.title)+"</div>":"";return a.zIndex=j,e([a.shade?'<div class="layui-layer-shade" id="layui-layer-shade'+b+'" times="'+b+'" style="'+("z-index:"+(j-1)+"; background-color:"+(a.shade[1]||"#000")+"; opacity:"+(a.shade[0]||a.shade)+"; filter:alpha(opacity="+(100*a.shade[0]||100*a.shade)+");")+'"></div>':"",'<div class="'+o[0]+(" layui-layer-"+r.type[a.type])+(0!=a.type&&2!=a.type||a.shade?"":" layui-layer-border")+" "+(a.skin||"")+'" id="'+o[0]+b+'" type="'+r.type[a.type]+'" times="'+b+'" showtime="'+a.time+'" conType="'+(h?"object":"string")+'" style="z-index: '+j+"; width:"+a.area[0]+";height:"+a.area[1]+(a.fix?"":";position:absolute;")+'">'+(h&&2!=a.type?"":f)+'<div id="'+(a.id||"")+'" class="layui-layer-content'+(0==a.type&&-1!==a.icon?" layui-layer-padding":"")+(3==a.type?" layui-layer-loading"+a.icon:"")+'">'+(0==a.type&&-1!==a.icon?'<i class="layui-layer-ico layui-layer-ico'+a.icon+'"></i>':"")+(1==a.type&&h?"":a.content||"")+'</div><span class="layui-layer-setwin">'+function(){var t=g?'<a class="layui-layer-min" href="javascript:;"><cite></cite></a><a class="layui-layer-ico layui-layer-max" href="javascript:;"></a>':"";return a.closeBtn&&(t+='<a class="layui-layer-ico '+o[7]+" "+o[7]+(a.title?a.closeBtn:4==a.type?"1":"2")+'" href="javascript:;"></a>'),t}()+"</span>"+(a.btn?function(){var w="";"string"==typeof a.btn&&(a.btn=[a.btn]);for(var u=0,t=a.btn.length;t>u;u++){w+='<a class="'+o[6]+u+'">'+a.btn[u]+"</a>"}return'<div class="'+o[6]+'">'+w+"</div>"}():"")+"</div>"],f),c},p.pt.creat=function(){var c=this,b=c.config,a=c.index,f=b.content,e="object"==typeof f;if(!d("#"+b.id)[0]){switch("string"==typeof b.area&&(b.area="auto"===b.area?["",""]:[b.area,""]),b.type){case 0:b.btn="btn" in b?b.btn:r.btn[0],q.closeAll("dialog");break;case 2:var f=b.content=e?b.content:[b.content||"http://layer.layui.com","auto"];b.content='<iframe scrolling="'+(b.content[1]||"auto")+'" allowtransparency="true" id="'+o[4]+a+'" name="'+o[4]+a+'" onload="this.className=\'\';" class="layui-layer-load" frameborder="0" src="'+b.content[0]+'"></iframe>';break;case 3:b.title=!1,b.closeBtn=!1,-1===b.icon&&0===b.icon,q.closeAll("loading");break;case 4:e||(b.content=[b.content,"body"]),b.follow=b.content[1],b.content=b.content[0]+'<i class="layui-layer-TipsG"></i>',b.title=!1,b.tips="object"==typeof b.tips?b.tips:[b.tips,!0],b.tipsMore||q.closeAll("tips")}c.vessel(e,function(h,g){d("body").append(h[0]),e?function(){2==b.type||4==b.type?function(){d("body").append(h[1])}():function(){f.parents("."+o[0])[0]||(f.show().addClass("layui-layer-wrap").wrap(h[1]),d("#"+o[0]+a).find("."+o[5]).before(g))}()}():d("body").append(h[1]),c.layero=d("#"+o[0]+a),b.scrollbar||o.html.css("overflow","hidden").attr("layer-full",a)}).auto(a),2==b.type&&q.ie6&&c.layero.find("iframe").attr("src",f[0]),d(document).off("keydown",r.enter).on("keydown",r.enter),c.layero.on("keydown",function(g){d(document).off("keydown",r.enter)}),4==b.type?c.tips():c.offset(),b.fix&&s.on("resize",function(){c.offset(),(/^\d+%$/.test(b.area[0])||/^\d+%$/.test(b.area[1]))&&c.auto(a),4==b.type&&c.tips()}),b.time<=0||setTimeout(function(){q.close(c.index)},b.time),c.move().callback(),o.anim[b.shift]&&c.layero.addClass(o.anim[b.shift])}},p.pt.auto=function(a){function h(j){j=e.find(j),j.height(g[1]-c-b-2*(0|parseFloat(j.css("padding"))))}var i=this,f=i.config,e=d("#"+o[0]+a);""===f.area[0]&&f.maxWidth>0&&(/MSIE 7/.test(navigator.userAgent)&&f.btn&&e.width(e.innerWidth()),e.outerWidth()>f.maxWidth&&e.width(f.maxWidth));var g=[e.innerWidth(),e.innerHeight()],c=e.find(o[1]).outerHeight()||0,b=e.find("."+o[6]).outerHeight()||0;switch(f.type){case 2:h("iframe");break;default:""===f.area[1]?f.fix&&g[1]>=s.height()&&(g[1]=s.height(),h("."+o[5])):h("."+o[5])}return i},p.pt.offset=function(){var c=this,b=c.config,a=c.layero,f=[a.outerWidth(),a.outerHeight()],e="object"==typeof b.offset;c.offsetTop=(s.height()-f[1])/2,c.offsetLeft=(s.width()-f[0])/2,e?(c.offsetTop=b.offset[0],c.offsetLeft=b.offset[1]||c.offsetLeft):"auto"!==b.offset&&(c.offsetTop=b.offset,"rb"===b.offset&&(c.offsetTop=s.height()-f[1],c.offsetLeft=s.width()-f[0])),b.fix||(c.offsetTop=/%$/.test(c.offsetTop)?s.height()*parseFloat(c.offsetTop)/100:parseFloat(c.offsetTop),c.offsetLeft=/%$/.test(c.offsetLeft)?s.width()*parseFloat(c.offsetLeft)/100:parseFloat(c.offsetLeft),c.offsetTop+=s.scrollTop(),c.offsetLeft+=s.scrollLeft()),a.css({top:c.offsetTop,left:c.offsetLeft})},p.pt.tips=function(){var a=this,h=a.config,i=a.layero,f=[i.outerWidth(),i.outerHeight()],e=d(h.follow);e[0]||(e=d("body"));var g={width:e.outerWidth(),height:e.outerHeight(),top:e.offset().top,left:e.offset().left},c=i.find(".layui-layer-TipsG"),b=h.tips[0];h.tips[1]||c.remove(),g.autoLeft=function(){g.left+f[0]-s.width()>0?(g.tipLeft=g.left+g.width-f[0],c.css({right:12,left:"auto"})):g.tipLeft=g.left},g.where=[function(){g.autoLeft(),g.tipTop=g.top-f[1]-10,c.removeClass("layui-layer-TipsB").addClass("layui-layer-TipsT").css("border-right-color",h.tips[1])},function(){g.tipLeft=g.left+g.width+10,g.tipTop=g.top,c.removeClass("layui-layer-TipsL").addClass("layui-layer-TipsR").css("border-bottom-color",h.tips[1])},function(){g.autoLeft(),g.tipTop=g.top+g.height+10,c.removeClass("layui-layer-TipsT").addClass("layui-layer-TipsB").css("border-right-color",h.tips[1])},function(){g.tipLeft=g.left-f[0]-10,g.tipTop=g.top,c.removeClass("layui-layer-TipsR").addClass("layui-layer-TipsL").css("border-bottom-color",h.tips[1])}],g.where[b-1](),1===b?g.top-(s.scrollTop()+f[1]+16)<0&&g.where[2]():2===b?s.width()-(g.left+g.width+f[0]+16)>0||g.where[3]():3===b?g.top-s.scrollTop()+g.height+f[1]+16-s.height()>0&&g.where[0]():4===b&&f[0]+16-g.left>0&&g.where[1](),i.find("."+o[5]).css({"background-color":h.tips[1],"padding-right":h.closeBtn?"30px":""}),i.css({left:g.tipLeft-(h.fix?s.scrollLeft():0),top:g.tipTop-(h.fix?s.scrollTop():0)})},p.pt.move=function(){var e=this,c=e.config,b={setY:0,moveLayer:function(){var g=b.layero,f=parseInt(g.css("margin-left")),h=parseInt(b.move.css("left"));0===f||(h-=f),"fixed"!==g.css("position")&&(h-=g.parent().offset().left,b.setY=0),g.css({left:h,top:parseInt(b.move.css("top"))-b.setY})}},a=e.layero.find(c.move);return c.move&&a.attr("move","ok"),a.css({cursor:c.move?"move":"auto"}),d(c.move).on("mousedown",function(j){if(j.preventDefault(),"ok"===d(this).attr("move")){b.ismove=!0,b.layero=d(this).parents("."+o[0]);var i=b.layero.offset().left,h=b.layero.offset().top,g=b.layero.outerWidth()-6,f=b.layero.outerHeight()-6;d("#layui-layer-moves")[0]||d("body").append('<div id="layui-layer-moves" class="layui-layer-moves" style="left:'+i+"px; top:"+h+"px; width:"+g+"px; height:"+f+'px; z-index:2147483584"></div>'),b.move=d("#layui-layer-moves"),c.moveType&&b.move.css({visibility:"hidden"}),b.moveX=j.pageX-b.move.position().left,b.moveY=j.pageY-b.move.position().top,"fixed"!==b.layero.css("position")||(b.setY=s.scrollTop())}}),d(document).mousemove(function(j){if(b.ismove){var h=j.pageX-b.moveX,i=j.pageY-b.moveY;if(j.preventDefault(),!c.moveOut){b.setY=s.scrollTop();var g=s.width()-b.move.outerWidth(),f=b.setY;0>h&&(h=0),h>g&&(h=g),f>i&&(i=f),i>s.height()-b.move.outerHeight()+b.setY&&(i=s.height()-b.move.outerHeight()+b.setY)}b.move.css({left:h,top:i}),c.moveType&&b.moveLayer(),h=i=g=f=null}}).mouseup(function(){try{b.ismove&&(b.moveLayer(),b.move.remove(),c.moveEnd&&c.moveEnd()),b.ismove=!1}catch(f){b.ismove=!1}}),e},p.pt.callback=function(){function e(){var f=a.cancel&&a.cancel(c.index,b);f===!1||q.close(c.index)}var c=this,b=c.layero,a=c.config;c.openLayer(),a.success&&(2==a.type?b.find("iframe").on("load",function(){a.success(b,c.index)}):a.success(b,c.index)),q.ie6&&c.IE6(b),b.find("."+o[6]).children("a").on("click",function(){var g=d(this).index();if(0===g){a.yes?a.yes(c.index,b):a.btn1?a.btn1(c.index,b):q.close(c.index)}else{var f=a["btn"+(g+1)]&&a["btn"+(g+1)](c.index,b);f===!1||q.close(c.index)}}),b.find("."+o[7]).on("click",e),a.shadeClose&&d("#layui-layer-shade"+c.index).on("click",function(){q.close(c.index)}),b.find(".layui-layer-min").on("click",function(){var f=a.min&&a.min(b);f===!1||q.min(c.index,a)}),b.find(".layui-layer-max").on("click",function(){d(this).hasClass("layui-layer-maxmin")?(q.restore(c.index),a.restore&&a.restore(b)):(q.full(c.index,a),setTimeout(function(){a.full&&a.full(b)},100))}),a.end&&(r.end[c.index]=a.end)},r.reselect=function(){d.each(d("select"),function(a,c){var b=d(this);b.parents("."+o[0])[0]||1==b.attr("layer")&&d("."+o[0]).length<1&&b.removeAttr("layer").show(),b=null})},p.pt.IE6=function(e){function c(){e.css({top:a+(b.config.fix?s.scrollTop():0)})}var b=this,a=e.offset().top;c(),s.scroll(c),d("select").each(function(g,f){var h=d(this);h.parents("."+o[0])[0]||"none"===h.css("display")||h.attr({layer:"1"}).hide(),h=null})},p.pt.openLayer=function(){var a=this;q.zIndex=a.config.zIndex,q.setTop=function(c){var b=function(){q.zIndex++,c.css("z-index",q.zIndex+1)};return q.zIndex=parseInt(c[0].style.zIndex),c.on("mousedown",b),q.zIndex}},r.record=function(b){var a=[b.width(),b.height(),b.position().top,b.position().left+parseFloat(b.css("margin-left"))];b.find(".layui-layer-max").addClass("layui-layer-maxmin"),b.attr({area:a})},r.rescollbar=function(a){o.html.attr("layer-full")==a&&(o.html[0].style.removeProperty?o.html[0].style.removeProperty("overflow"):o.html[0].style.removeAttribute("overflow"),o.html.removeAttr("layer-full"))},l.layer=q,q.getChildFrame=function(b,a){return a=a||d("."+o[4]).attr("times"),d("#"+o[0]+a).find("iframe").contents().find(b)},q.getFrameIndex=function(a){return d("#"+a).parents("."+o[4]).attr("times")},q.iframeAuto=function(c){if(c){var b=q.getChildFrame("html",c).outerHeight(),a=d("#"+o[0]+c),f=a.find(o[1]).outerHeight()||0,e=a.find("."+o[6]).outerHeight()||0;a.css({height:b+f+e}),a.find("iframe").css({height:b})}},q.iframeSrc=function(b,a){d("#"+o[0]+b).find("iframe").attr("src",a)},q.style=function(b,a){var g=d("#"+o[0]+b),f=g.attr("type"),e=g.find(o[1]).outerHeight()||0,c=g.find("."+o[6]).outerHeight()||0;(f===r.type[1]||f===r.type[2])&&(g.css(a),f===r.type[2]&&g.find("iframe").css({height:parseFloat(a.height)-e-c}))},q.min=function(e,c){var b=d("#"+o[0]+e),a=b.find(o[1]).outerHeight()||0;r.record(b),q.style(e,{width:180,height:a,overflow:"hidden"}),b.find(".layui-layer-min").hide(),"page"===b.attr("type")&&b.find(o[4]).hide(),r.rescollbar(e)},q.restore=function(a){var c=d("#"+o[0]+a),b=c.attr("area").split(",");c.attr("type");q.style(a,{width:parseFloat(b[0]),height:parseFloat(b[1]),top:parseFloat(b[2]),left:parseFloat(b[3]),overflow:"visible"}),c.find(".layui-layer-max").removeClass("layui-layer-maxmin"),c.find(".layui-layer-min").show(),"page"===c.attr("type")&&c.find(o[4]).show(),r.rescollbar(a)},q.full=function(a){var c,b=d("#"+o[0]+a);r.record(b),o.html.attr("layer-full")||o.html.css("overflow","hidden").attr("layer-full",a),clearTimeout(c),c=setTimeout(function(){var e="fixed"===b.css("position");q.style(a,{top:e?0:s.scrollTop(),left:e?0:s.scrollLeft(),width:s.width(),height:s.height()}),b.find(".layui-layer-min").hide()},100)},q.title=function(a,c){var b=d("#"+o[0]+(c||q.index)).find(o[1]);b.html(a)},q.close=function(b){var a=d("#"+o[0]+b),g=a.attr("type");if(a[0]){if(g===r.type[1]&&"object"===a.attr("conType")){a.children(":not(."+o[5]+")").remove();for(var f=0;2>f;f++){a.find(".layui-layer-wrap").unwrap().hide()}}else{if(g===r.type[2]){try{var e=d("#"+o[4]+b)[0];e.contentWindow.document.write(""),e.contentWindow.close(),a.find("."+o[5])[0].removeChild(e)}catch(c){}}a[0].innerHTML="",a.remove()}d("#layui-layer-moves, #layui-layer-shade"+b).remove(),q.ie6&&r.reselect(),r.rescollbar(b),d(document).off("keydown",r.enter),"function"==typeof r.end[b]&&r.end[b](),delete r.end[b]}},q.closeAll=function(a){d.each(d("."+o[0]),function(){var c=d(this),b=a?c.attr("type")===a:1;b&&q.close(c.attr("times")),b=null})};var n=q.cache||{},m=function(a){return n.skin?" "+n.skin+" "+n.skin+"-"+a:""};q.prompt=function(e,c){e=e||{},"function"==typeof e&&(c=e);var b,a=2==e.formType?'<textarea class="layui-layer-input">'+(e.value||"")+"</textarea>":function(){return'<input type="'+(1==e.formType?"password":"text")+'" class="layui-layer-input" value="'+(e.value||"")+'">'}();return q.open(d.extend({btn:["&#x786E;&#x5B9A;","&#x53D6;&#x6D88;"],content:a,skin:"layui-layer-prompt"+m("prompt"),success:function(f){b=f.find(".layui-layer-input"),b.focus()},yes:function(g){var f=b.val();""===f?b.focus():f.length>(e.maxlength||500)?q.tips("&#x6700;&#x591A;&#x8F93;&#x5165;"+(e.maxlength||500)+"&#x4E2A;&#x5B57;&#x6570;",b,{tips:1}):c&&c(f,g,b)}},e))},q.tab=function(b){b=b||{};var a=b.tab||{};return q.open(d.extend({type:1,skin:"layui-layer-tab"+m("tab"),title:function(){var c=a.length,f=1,e="";if(c>0){for(e='<span class="layui-layer-tabnow">'+a[0].title+"</span>";c>f;f++){e+="<span>"+a[f].title+"</span>"}}return e}(),content:'<ul class="layui-layer-tabmain">'+function(){var c=a.length,f=1,e="";if(c>0){for(e='<li class="layui-layer-tabli xubox_tab_layer">'+(a[0].content||"no content")+"</li>";c>f;f++){e+='<li class="layui-layer-tabli">'+(a[f].content||"no  content")+"</li>"}}return e}()+"</ul>",success:function(c){var f=c.find(".layui-layer-title").children(),e=c.find(".layui-layer-tabmain").children();f.on("mousedown",function(g){g.stopPropagation?g.stopPropagation():g.cancelBubble=!0;var i=d(this),h=i.index();i.addClass("layui-layer-tabnow").siblings().removeClass("layui-layer-tabnow"),e.eq(h).show().siblings().hide(),"function"==typeof b.change&&b.change(h)})}},b))},q.photos=function(h,c,b){function t(z,y,v){var B=new Image;return B.src=z,B.complete?y(B):(B.onload=function(){B.onload=null,y(B)},void (B.onerror=function(w){B.onerror=null,v(w)}))}var j={};if(h=h||{},h.photos){var i=h.photos.constructor===Object,a=i?h.photos:{},g=a.data||[],f=a.start||0;if(j.imgIndex=(0|f)+1,h.img=h.img||"img",i){if(0===g.length){return q.msg("&#x6CA1;&#x6709;&#x56FE;&#x7247;")}}else{var e=d(h.photos),u=function(){g=[],e.find(h.img).each(function(x){var v=d(this);v.attr("layer-index",x),g.push({alt:v.attr("alt"),pid:v.attr("layer-pid"),src:v.attr("layer-src")||v.attr("src"),thumb:v.attr("src")})})};if(u(),0===g.length){return}if(c||e.on("click",h.img,function(){var x=d(this),v=x.attr("layer-index");q.photos(d.extend(h,{photos:{start:v,data:g,tab:h.tab},full:h.full}),!0),u()}),!c){return}}j.imgprev=function(v){j.imgIndex--,j.imgIndex<1&&(j.imgIndex=g.length),j.tabimg(v)},j.imgnext=function(x,v){j.imgIndex++,j.imgIndex>g.length&&(j.imgIndex=1,v)||j.tabimg(x)},j.keyup=function(x){if(!j.end){var v=x.keyCode;x.preventDefault(),37===v?j.imgprev(!0):39===v?j.imgnext(!0):27===v&&q.close(j.index)}},j.tabimg=function(v){g.length<=1||(a.start=j.imgIndex-1,q.close(j.index),q.photos(h,!0,v))},j.event=function(){j.bigimg.hover(function(){j.imgsee.show()},function(){j.imgsee.hide()}),j.bigimg.find(".layui-layer-imgprev").on("click",function(v){v.preventDefault(),j.imgprev()}),j.bigimg.find(".layui-layer-imgnext").on("click",function(v){v.preventDefault(),j.imgnext()}),d(document).on("keyup",j.keyup)},j.loadi=q.load(1,{shade:"shade" in h?!1:0.9,scrollbar:!1}),t(g[f].src,function(v){q.close(j.loadi),j.index=q.open(d.extend({type:1,area:function(){var z=[v.width,v.height],x=[d(l).width()-50,d(l).height()-50];return !h.full&&z[0]>x[0]&&(z[0]=x[0],z[1]=z[0]*v.height/v.width),[z[0]+"px",z[1]+"px"]}(),title:!1,shade:0.9,shadeClose:!0,closeBtn:!1,move:".layui-layer-phimg img",moveType:1,scrollbar:!1,moveOut:!0,shift:5*Math.random()|0,skin:"layui-layer-photos"+m("photos"),content:'<div class="layui-layer-phimg"><img src="'+g[f].src+'" alt="'+(g[f].alt||"")+'" layer-pid="'+g[f].pid+'"><div class="layui-layer-imgsee">'+(g.length>1?'<span class="layui-layer-imguide"><a href="javascript:;" class="layui-layer-iconext layui-layer-imgprev"></a><a href="javascript:;" class="layui-layer-iconext layui-layer-imgnext"></a></span>':"")+'<div class="layui-layer-imgbar" style="display:'+(b?"block":"")+'"><span class="layui-layer-imgtit"><a href="javascript:;">'+(g[f].alt||"")+"</a><em>"+j.imgIndex+"/"+g.length+"</em></span></div></div></div>",success:function(x,z){j.bigimg=x.find(".layui-layer-phimg"),j.imgsee=x.find(".layui-layer-imguide,.layui-layer-imgbar"),j.event(x),h.tab&&h.tab(g[f],x)},end:function(){j.end=!0,d(document).off("keyup",j.keyup)}},h))},function(){q.close(j.loadi),q.msg("&#x5F53;&#x524D;&#x56FE;&#x7247;&#x5730;&#x5740;&#x5F02;&#x5E38;<br>&#x662F;&#x5426;&#x7EE7;&#x7EED;&#x67E5;&#x770B;&#x4E0B;&#x4E00;&#x5F20;&#xFF1F;",{time:30000,btn:["&#x4E0B;&#x4E00;&#x5F20;","&#x4E0D;&#x770B;&#x4E86;"],yes:function(){g.length>1&&j.imgnext(!0,!0)}})})}},r.run=function(){d=jQuery,s=d(l),o.html=d("html"),q.open=function(b){var a=new p(b);return a.index}},"function"==typeof define?define(function(){return r.run(),q}):function(){r.run(),q.use("skin/layer.css")}()}(window);function layerPlusOpen(c,k,e,b,a){var f=layer.open({type:2,shift:2,area:["800px",($(window).height()-50)+"px"],maxmin:e||false,shade:0.4,title:c,content:k,success:function(g,d){if(b){b(g,d)}},end:function(){if(a){a()}}});if(!e){layer.full(f)}}function layerPlusClose(){var a=parent.layer.getFrameIndex(window.name);parent.layer.close(a)};