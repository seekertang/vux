webpackJsonp([49,67],{43:function(t,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={props:{type:{default:"default"},disabled:Boolean,mini:Boolean,plain:Boolean,text:String},computed:{classes:function(){return[{weui_btn_disabled:this.disabled,weui_btn_mini:this.mini},"weui_btn_"+this.type,this.plain?"weui_btn_plain_"+this.type:""]}}}},44:function(t,n,e){n=t.exports=e(2)(),n.push([t.id,'.weui_btn.weui_btn_mini{line-height:1.9;font-size:14px;padding:0 .75em;display:inline-block}button.weui_btn,input.weui_btn{width:100%;border-width:0;outline:0;-webkit-appearance:none}button.weui_btn:focus,input.weui_btn:focus{outline:0}button.weui_btn_inline,button.weui_btn_mini,input.weui_btn_inline,input.weui_btn_mini{width:auto}.weui_btn+.weui_btn{margin-top:15px}.weui_btn.weui_btn_inline+.weui_btn.weui_btn_inline{margin-top:auto;margin-left:15px}.weui_btn_area{margin:1.17647059em 15px .3em}.weui_btn_area.weui_btn_area_inline{display:-webkit-box;display:-ms-flexbox;display:flex}.weui_btn_area.weui_btn_area_inline .weui_btn{margin-top:auto;margin-right:15px;width:100%;-webkit-box-flex:1;-ms-flex:1;flex:1}.weui_btn_area.weui_btn_area_inline .weui_btn:last-child{margin-right:0}.weui_btn{position:relative;display:block;margin-left:auto;margin-right:auto;padding-left:14px;padding-right:14px;box-sizing:border-box;font-size:18px;text-align:center;text-decoration:none;color:#fff;line-height:2.33333333;border-radius:5px;-webkit-tap-highlight-color:rgba(0,0,0,0);overflow:hidden}.weui_btn:after{content:" ";width:200%;height:200%;position:absolute;top:0;left:0;border:1px solid rgba(0,0,0,.2);-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;transform-origin:0 0;box-sizing:border-box;border-radius:10px}.weui_btn.weui_btn_inline{display:inline-block}.weui_btn_default{background-color:#f7f7f7;color:#454545}.weui_btn_default:not(.weui_btn_disabled):visited{color:#454545}.weui_btn_default:not(.weui_btn_disabled):active{color:#a1a1a1;background-color:#dedede}.weui_btn_primary{background-color:#04be02}.weui_btn_primary:not(.weui_btn_disabled):visited{color:#fff}.weui_btn_primary:not(.weui_btn_disabled):active{color:hsla(0,0%,100%,.4);background-color:#039702}.weui_btn_warn{background-color:#ef4f4f}.weui_btn_warn:not(.weui_btn_disabled):visited{color:#fff}.weui_btn_warn:not(.weui_btn_disabled):active{color:hsla(0,0%,100%,.4);background-color:#c13e3e}.weui_btn_disabled{color:hsla(0,0%,100%,.6)}.weui_btn_disabled.weui_btn_default{color:#c9c9c9}.weui_btn_plain_primary{color:#04be02;border:1px solid #04be02}button.weui_btn_plain_primary,input.weui_btn_plain_primary{border-width:1px;background-color:transparent}.weui_btn_plain_primary:active{border-color:#039702}.weui_btn_plain_primary:after{border-width:0}.weui_btn_plain_default{color:#5a5a5a;border:1px solid #5a5a5a}button.weui_btn_plain_default,input.weui_btn_plain_default{border-width:1px;background-color:transparent}.weui_btn_plain_default:after{border-width:0}',"",{version:3,sources:["/./node_modules/vux/src/components/x-button/index.vue"],names:[],mappings:"AACA,wBAAwB,gBAAgB,eAAe,gBAAgB,oBAAoB,CAC1F,AACD,+BAA+B,WAAW,eAAe,UAAU,uBAAuB,CACzF,AACD,2CAA2C,SAAS,CACnD,AACD,sFAAsF,UAAU,CAC/F,AACD,oBAAoB,eAAe,CAClC,AACD,oDAAoD,gBAAgB,gBAAgB,CACnF,AACD,eAAe,6BAA6B,CAC3C,AACD,oCAAoC,oBAAoB,AAAqB,oBAAoB,YAAY,CAC5G,AACD,8CAA8C,gBAAgB,kBAAkB,WAAW,mBAAmB,AAAe,WAAW,MAAM,CAC7I,AACD,yDAAyD,cAAc,CACtE,AACD,UAAU,kBAAkB,cAAc,iBAAiB,kBAAkB,kBAAkB,mBAAmB,sBAAsB,eAAe,kBAAkB,qBAAqB,WAAc,uBAAuB,kBAAkB,0CAA0C,eAAe,CAC7S,AACD,gBAAgB,YAAY,WAAW,YAAY,kBAAkB,MAAM,OAAO,gCAAiC,4BAA4B,AAAwB,oBAAoB,6BAA6B,AAAyB,qBAAqB,sBAAsB,kBAAkB,CAC7S,AACD,0BAA0B,oBAAoB,CAC7C,AACD,kBAAkB,yBAAyB,aAAa,CACvD,AACD,kDAAkD,aAAa,CAC9D,AACD,iDAAiD,cAAc,wBAAwB,CACtF,AACD,kBAAkB,wBAAwB,CACzC,AACD,kDAAkD,UAAa,CAC9D,AACD,iDAAiD,yBAA4B,wBAAwB,CACpG,AACD,eAAe,wBAAwB,CACtC,AACD,+CAA+C,UAAa,CAC3D,AACD,8CAA8C,yBAA4B,wBAAwB,CACjG,AACD,mBAAmB,wBAA2B,CAC7C,AACD,oCAAoC,aAAa,CAChD,AACD,wBAAwB,cAAc,wBAAwB,CAC7D,AACD,2DAA2D,iBAAiB,4BAA4B,CACvG,AACD,+BAA+B,oBAAoB,CAClD,AACD,8BAA8B,cAAc,CAC3C,AACD,wBAAwB,cAAc,wBAAwB,CAC7D,AACD,2DAA2D,iBAAiB,4BAA4B,CACvG,AACD,8BAA8B,cAAc,CAC3C",file:"index.vue",sourcesContent:['\n.weui_btn.weui_btn_mini{line-height:1.9;font-size:14px;padding:0 .75em;display:inline-block\n}\nbutton.weui_btn,input.weui_btn{width:100%;border-width:0;outline:0;-webkit-appearance:none\n}\nbutton.weui_btn:focus,input.weui_btn:focus{outline:0\n}\nbutton.weui_btn_inline,input.weui_btn_inline,button.weui_btn_mini,input.weui_btn_mini{width:auto\n}\n.weui_btn+.weui_btn{margin-top:15px\n}\n.weui_btn.weui_btn_inline+.weui_btn.weui_btn_inline{margin-top:auto;margin-left:15px\n}\n.weui_btn_area{margin:1.17647059em 15px .3em\n}\n.weui_btn_area.weui_btn_area_inline{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex\n}\n.weui_btn_area.weui_btn_area_inline .weui_btn{margin-top:auto;margin-right:15px;width:100%;-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1\n}\n.weui_btn_area.weui_btn_area_inline .weui_btn:last-child{margin-right:0\n}\n.weui_btn{position:relative;display:block;margin-left:auto;margin-right:auto;padding-left:14px;padding-right:14px;box-sizing:border-box;font-size:18px;text-align:center;text-decoration:none;color:#FFFFFF;line-height:2.33333333;border-radius:5px;-webkit-tap-highlight-color:rgba(0,0,0,0);overflow:hidden\n}\n.weui_btn:after{content:" ";width:200%;height:200%;position:absolute;top:0;left:0;border:1px solid rgba(0,0,0,0.2);-webkit-transform:scale(.5);-ms-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;box-sizing:border-box;border-radius:10px\n}\n.weui_btn.weui_btn_inline{display:inline-block\n}\n.weui_btn_default{background-color:#F7F7F7;color:#454545\n}\n.weui_btn_default:not(.weui_btn_disabled):visited{color:#454545\n}\n.weui_btn_default:not(.weui_btn_disabled):active{color:#A1A1A1;background-color:#DEDEDE\n}\n.weui_btn_primary{background-color:#04BE02\n}\n.weui_btn_primary:not(.weui_btn_disabled):visited{color:#FFFFFF\n}\n.weui_btn_primary:not(.weui_btn_disabled):active{color:rgba(255,255,255,0.4);background-color:#039702\n}\n.weui_btn_warn{background-color:#EF4F4F\n}\n.weui_btn_warn:not(.weui_btn_disabled):visited{color:#FFFFFF\n}\n.weui_btn_warn:not(.weui_btn_disabled):active{color:rgba(255,255,255,0.4);background-color:#C13E3E\n}\n.weui_btn_disabled{color:rgba(255,255,255,0.6)\n}\n.weui_btn_disabled.weui_btn_default{color:#C9C9C9\n}\n.weui_btn_plain_primary{color:#04BE02;border:1px solid #04BE02\n}\nbutton.weui_btn_plain_primary,input.weui_btn_plain_primary{border-width:1px;background-color:transparent\n}\n.weui_btn_plain_primary:active{border-color:#039702\n}\n.weui_btn_plain_primary:after{border-width:0\n}\n.weui_btn_plain_default{color:#5A5A5A;border:1px solid #5A5A5A\n}\nbutton.weui_btn_plain_default,input.weui_btn_plain_default{border-width:1px;background-color:transparent\n}\n.weui_btn_plain_default:after{border-width:0\n}'],sourceRoot:"webpack://"}])},45:function(t,n,e){var i=e(44);"string"==typeof i&&(i=[[t.id,i,""]]);e(3)(i,{});i.locals&&(t.exports=i.locals)},46:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("button",{staticClass:"weui_btn",class:t.classes,attrs:{disabled:t.disabled}},[t._v("\n  "+t._s(t.text)),t._t("default")],2)},staticRenderFns:[]}},47:function(t,n,e){var i,a;e(45),i=e(43);var o=e(46);a=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(a=i=i.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,t.exports=i},324:function(t,n,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var a=e(830),o=i(a);n.default={mounted:function(){var t=this;this.$nextTick(function(){t._countup=new o.default(t.$el,t.startVal,t.endVal,t.decimals,t.duration,t.options),t.start&&t._countup.start()})},props:{start:{type:Boolean,default:!0},startVal:{type:Number,default:0},endVal:{type:Number,required:!0},decimals:{type:Number,default:0},duration:{type:Number,default:2},options:{type:Object,default:function(){return{}}}},watch:{start:function(t){t&&this._countup.start()},endVal:function(t){this._countup.update(t)}}}},367:function(t,n,e){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var a=e(735),o=i(a),r=e(47),u=i(r);n.default={components:{Countup:o.default,XButton:u.default},data:function(){return{doStart:!1}}}},489:function(t,n,e){n=t.exports=e(2)(),n.push([t.id,".demo1[data-v-5620e287]{font-family:Source Sans Pro,Helvetica,Arial,sans-serif;font-size:6em;color:#04be02}","",{version:3,sources:["/./src/demos/Countup.vue"],names:[],mappings:"AACA,wBACE,uDAA6D,AAC7D,cAAe,AACf,aAAe,CAChB",file:"Countup.vue",sourcesContent:["\n.demo1[data-v-5620e287] {\r\n  font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;\r\n  font-size: 6em;\r\n  color: #04BE02;\n}\r\n"],sourceRoot:"webpack://"}])},552:function(t,n,e){var i=e(489);"string"==typeof i&&(i=[[t.id,i,""]]);e(3)(i,{});i.locals&&(t.exports=i.locals)},620:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("span",[t._v(t._s(t.startVal))])},staticRenderFns:[]}},663:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticStyle:{"text-align":"center"}},[e("countup",{staticClass:"demo1",attrs:{"start-val":1,"end-val":1388,duration:2}}),t._v(" "),e("br"),t._v(" "),e("countup",{staticClass:"demo1",attrs:{"end-val":88.88,duration:3,decimals:2}}),t._v(" "),e("br"),t._v(" "),e("countup",{staticClass:"demo1",attrs:{"end-val":1024,duration:4,start:t.doStart}}),t._v(" "),e("div",{staticStyle:{padding:"0 15px"}},[e("x-button",{attrs:{type:"primary"},nativeOn:{click:function(n){t.doStart=!0}}},[t._v("Start")])],1)],1)},staticRenderFns:[]}},735:function(t,n,e){var i,a;i=e(324);var o=e(620);a=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(a=i=i.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,t.exports=i},779:function(t,n,e){var i,a;e(552),i=e(367);var o=e(663);a=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(a=i=i.default),"function"==typeof a&&(a=a.options),a.render=o.render,a.staticRenderFns=o.staticRenderFns,a._scopeId="data-v-5620e287",t.exports=i},830:function(t,n,e){var i,a;!function(o,r){i=r,a="function"==typeof i?i.call(n,e,n,t):i,!(void 0!==a&&(t.exports=a))}(this,function(t,n,e){var i=function(t,n,e,i,a,o){for(var r=0,u=["webkit","moz","ms","o"],A=0;A<u.length&&!window.requestAnimationFrame;++A)window.requestAnimationFrame=window[u[A]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[u[A]+"CancelAnimationFrame"]||window[u[A]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,n){var e=(new Date).getTime(),i=Math.max(0,16-(e-r)),a=window.setTimeout(function(){t(e+i)},i);return r=e+i,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)});var l=this;l.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:null,formattingFn:null};for(var s in o)o.hasOwnProperty(s)&&(l.options[s]=o[s]);""===l.options.separator&&(l.options.useGrouping=!1),l.options.prefix||(l.options.prefix=""),l.options.suffix||(l.options.suffix=""),l.d="string"==typeof t?document.getElementById(t):t,l.startVal=Number(n),l.endVal=Number(e),l.countDown=l.startVal>l.endVal,l.frameVal=l.startVal,l.decimals=Math.max(0,i||0),l.dec=Math.pow(10,l.decimals),l.duration=1e3*Number(a)||2e3,l.formatNumber=function(t){t=t.toFixed(l.decimals),t+="";var n,e,i,a;if(n=t.split("."),e=n[0],i=n.length>1?l.options.decimal+n[1]:"",a=/(\d+)(\d{3})/,l.options.useGrouping)for(;a.test(e);)e=e.replace(a,"$1"+l.options.separator+"$2");return l.options.prefix+e+i+l.options.suffix},l.easeOutExpo=function(t,n,e,i){return e*(-Math.pow(2,-10*t/i)+1)*1024/1023+n},l.easingFn=l.options.easingFn?l.options.easingFn:l.easeOutExpo,l.formattingFn=l.options.formattingFn?l.options.formattingFn:l.formatNumber,l.version=function(){return"1.7.1"},l.printValue=function(t){var n=l.formattingFn(t);"INPUT"===l.d.tagName?this.d.value=n:"text"===l.d.tagName||"tspan"===l.d.tagName?this.d.textContent=n:this.d.innerHTML=n},l.count=function(t){l.startTime||(l.startTime=t),l.timestamp=t;var n=t-l.startTime;l.remaining=l.duration-n,l.options.useEasing?l.countDown?l.frameVal=l.startVal-l.easingFn(n,0,l.startVal-l.endVal,l.duration):l.frameVal=l.easingFn(n,l.startVal,l.endVal-l.startVal,l.duration):l.countDown?l.frameVal=l.startVal-(l.startVal-l.endVal)*(n/l.duration):l.frameVal=l.startVal+(l.endVal-l.startVal)*(n/l.duration),l.countDown?l.frameVal=l.frameVal<l.endVal?l.endVal:l.frameVal:l.frameVal=l.frameVal>l.endVal?l.endVal:l.frameVal,l.frameVal=Math.round(l.frameVal*l.dec)/l.dec,l.printValue(l.frameVal),n<l.duration?l.rAF=requestAnimationFrame(l.count):l.callback&&l.callback()},l.start=function(t){return l.callback=t,l.rAF=requestAnimationFrame(l.count),!1},l.pauseResume=function(){l.paused?(l.paused=!1,delete l.startTime,l.duration=l.remaining,l.startVal=l.frameVal,requestAnimationFrame(l.count)):(l.paused=!0,cancelAnimationFrame(l.rAF))},l.reset=function(){l.paused=!1,delete l.startTime,l.startVal=n,cancelAnimationFrame(l.rAF),l.printValue(l.startVal)},l.update=function(t){cancelAnimationFrame(l.rAF),l.paused=!1,delete l.startTime,l.startVal=l.frameVal,l.endVal=Number(t),l.countDown=l.startVal>l.endVal,l.rAF=requestAnimationFrame(l.count)},l.printValue(l.startVal)};return i})}});
//# sourceMappingURL=49.389bf80d9a2e2dd930ed.js.map