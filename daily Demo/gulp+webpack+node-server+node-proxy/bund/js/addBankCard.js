"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e){function n(o){if(t[o])return t[o].exports;var i=t[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}var t={};n.m=e,n.c=t,n.p="",n(0)}([function(e,n,t){function o(e){return""!=e&&null!=e}var i=t(1),s=t(2);window.addEventListener("DOMContentLoaded",function(){i.share(),$("#subbtn").bind("click",function(){$(".sure-btn").hasClass("bg-theme")&&function(){var e,n=$("#bank").val(),t=$("#bankcard").val(),a=$("#subbranch").val();e={openId:i.getOpenId(),receviceBank:n,brachBank:a,bankNo:t,deviceType:"wx",signature:"1",edition:"1.1"};var n=$("#bank").val(),t=$("#bankcard").val();o(n)?o(t)?t.length>19?i.tost("请输入正确的银行卡号",1e3):i.request(s.getResUrl()+"/zs/usr/addBank/v2_0",e,function(e){1==e.respCode?(i.tost("绑定成功",1e3),setTimeout(function(){location.href="withdrawal.html"},1e3)):(i.createDefault(document.getElementById("body"),"../img/2.0/3.png","您已成功添加过收款信息，请勿重复操作。","goToBtn","去提现","&#xe679;"),$(".default-box").on("click","#goToBtn",function(){window.location.href="withdrawal.html"}))}):i.tost("请输入银行卡号",1e3):i.tost("请输入收款银行",1e3)}()});var e=localStorage.getItem("name");$(".data-name").html(e||"")}),$("#bank,#bankcard").keyup(function(){""!=$("#bank").val()&&""!=$("#bankcard").val()?($(".sure-btn").addClass("bg-theme"),$(".sure-btn").removeClass("bg-grey")):($(".sure-btn").removeClass("bg-theme"),$(".sure-btn").addClass("bg-grey"))})},function(e,n){e.exports={slt:function(e){return/^#(\w)+$/.test(e)?document.querySelector(e):document.querySelectorAll(e)},getOpenId:function(){return localStorage.getItem("openId")||!1},publicData:function(){return{signature:"1",openId:this.getOpenId()}},forLoadHref:function(e){var n="";if("string"==typeof e)return n;for(var t in e)n+=e[t]instanceof Array?t+"=["+e[t].join(",")+"]":t+"="+e[t]+"&";return n},getPathPt:function(){var e=-1!=location.href.indexOf("openId")?"":"&openId="+this.getOpenId(),n="",t="";if(-1!=(n=-1!=location.href.indexOf("?")?location.href+"&signature=1"+e:location.href+"?signature=1"+e).indexOf("?")){var o="";n.split("?")[1].split("&").forEach(function(e,n){var t=e.split("=")[0],i=e.split("=")[1];o+='"'+t+'":"'+i+'",'}),o=o.slice(0,o.length-1),o="{"+o+"}",t=JSON.parse(o)}return t.openId&&localStorage.getItem("openId")!=t.openId&&localStorage.setItem("openId",t.openId),console.log("地址栏参数:"),console.log(t),t},createDefault:function(e,n,t,o,i,s){var a;a=s?'<div class="default-msg"><i class="half"></i><div class="default-box"><i class="iconfont f-theme">'+(s||" ")+'</i><p class="f-666">'+t+'</p><p class="f-blue" id="'+(o||" ")+'">'+(i||" ")+'<i class="icon iconfont f-15">&#xe676;</i></p></div></div>':o?'<div class="default-msg"><i class="half"></i><div class="default-box"><img src="'+n+'" /><p class="f-666">'+t+'</p><p class="f-blue" id="'+(o||" ")+'">'+(i||" ")+'<i class="icon iconfont f-15">&#xe676;</i></p></div></div>':'<div class="default-msg"><i class="half"></i><div class="default-box"><img src="'+n+'" /><p class="fcA3">'+t+"</p></div></div>",e.innerHTML=a},createDefaultBtn:function(e,n,t,o,i,s,a){var r;r=a?'<div class="default-msg"><i class="half"></i><div class="default-box"><i class="iconfont f-theme">'+(a||" ")+'</i><p class="f-theme">'+t+'</p><p class="f-666 mt10">'+o+'</p><p class="f-blue-btn" id="'+(i||" ")+'">'+(s||" ")+"</p></div></div>":i?'<div class="default-msg blue-btn"><i class="half"></i><div class="default-box"><img src="'+n+'" /><p class="f-theme">'+t+'</p><p class="f-666 mt10">'+o+'</p><p class="f-blue-btn" id="'+(i||" ")+'">'+(s||" ")+"</p></div></div>":'<div class="default-msg"><i class="half"></i><div class="default-box"><img src="'+n+'" /><p class="f-666">'+t+"</p></div></div>",e.innerHTML=r},request:function(e,n,t,o,i,s){var a={type:"POST",url:e||"",async:"true",data:n||null},r=new XMLHttpRequest;i&&(r.responseType=a.dataType),r.open(a.type,a.url,a.async),r.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),r.send(function(e){if("object"===(void 0===e?"undefined":_typeof(e))){var n="";for(var t in e)n+=t+"="+e[t]+"&";return n=n.substring(0,n.length-1)}return e}(a.data)),console.log("接口需求参数:"),console.log(a.data),r.onreadystatechange=function(){4==r.readyState&&(200==r.status?(t("string"==typeof r.response?JSON.parse(r.response):r.response),console.log("接口返回参数:"),console.log(r.response)):o())}},requestFile:function(e,n,t,o,i,s){var a=new XMLHttpRequest;i&&(a.responseType=dataType),a.open("POST",e,"true"),s&&a.setRequestHeader("Content-Type",s),a.send(n),console.log("接口需求参数:"),console.log(n),a.onreadystatechange=function(){4==a.readyState&&(200==a.status?(t("string"==typeof a.response?JSON.parse(a.response):a.response),console.log("接口返回参数:"),console.log(a.response)):o())}},loadingDone:function(){document.getElementById("loader_box")&&(document.getElementById("loader_box").outerHTML=" ")},hideShow:function(e){(e=e||document.body).classList.remove("transition-hide"),e.classList.add("transition-show")},winload:function(){!function(){function e(){WeixinJSBridge.invoke("setFontSizeCallback",{fontSize:0}),WeixinJSBridge.on("menu:setfont",function(){WeixinJSBridge.invoke("setFontSizeCallback",{fontSize:0})})}"object"==("undefined"==typeof WeixinJSBridge?"undefined":_typeof(WeixinJSBridge))&&"function"==typeof WeixinJSBridge.invoke?e():document.addEventListener?document.addEventListener("WeixinJSBridgeReady",e,!1):document.attachEvent&&(document.attachEvent("WeixinJSBridgeReady",e),document.attachEvent("onWeixinJSBridgeReady",e))}(),function(){for(var e=document.getElementsByClassName("layer"),n=0,t=e.length;n<t;n++)e[n].addEventListener("touchmove",function(e){e.stopPropagation()})}()}(),is_weixin:function(){var e=navigator.userAgent.toLowerCase();return console.log(e),"micromessenger"==e.match(/MicroMessenger/i)},tost:function(e,n){var t=document.getElementById("tost_"),o=document.getElementById("tost_").firstElementChild,i=document.createElement("span");i.innerHTML=e,t.appendChild(i),o?(t.removeChild(o),t.appendChild(i),t.classList.remove("mui-hidden"),t.classList.add("mui-block"),setTimeout(function(){t.classList.add("mui-hidden"),t.classList.remove("mui-block")},n)):(t.classList.remove("mui-hidden"),t.classList.add("mui-block"),setTimeout(function(){t.classList.add("mui-hidden"),t.classList.remove("mui-block")},n))},share:function(){var e=location.href.split("#")[0],n={url:encodeURIComponent(e)};this.request("https://loan.moneytocar.com/yuedianqian-wap/getJsSdkconfig",n,function(e){wx.config({debug:!1,appId:e.respMap.appId,timestamp:e.respMap.timestamp,nonceStr:e.respMap.noncestr,signature:e.respMap.signature,jsApiList:["checkJsApi","onMenuShareTimeline","onMenuShareAppMessage","hideMenuItems"]})},function(){}),wx.ready(function(){wx.hideMenuItems({menuList:["menuItem:share:qq","menuItem:share:weiboApp","menuItem:favorite","menuItem:share:facebook","menuItem:share:QZone"],success:function(e){}}),wx.onMenuShareTimeline({title:"曰点钱——更值得信赖的车辆抵押贷款",link:location.origin+"/yuedianqian/html/borrowingDemand.html",imgUrl:location.origin+"/yuedianqian/img/logo.png",success:function(){},cancel:function(){}}),wx.onMenuShareAppMessage({title:"曰点钱——更值得信赖的车辆抵押贷款",desc:"你的车比你想象的更值钱",link:location.origin+"/yuedianqian/html/borrowingDemand.html",imgUrl:location.origin+"/yuedianqian/img/logo.png",type:"link"}),wx.error(function(e){})})}}},function(e,n){e.exports={path:"http://192.168.1.96:3000"}}]);