(function(e){function t(t){for(var r,o,l=t[0],s=t[1],c=t[2],d=0,p=[];d<l.length;d++)o=l[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&p.push(n[o][0]),n[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],r=!0,l=1;l<a.length;l++){var s=a[l];0!==n[s]&&(r=!1)}r&&(i.splice(t--,1),e=o(o.s=a[0]))}return e}var r={},n={app:0},i=[];function o(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=r,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(a,r,function(t){return e[t]}.bind(null,r));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=s;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"38c8":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("div",{ref:"bg",staticClass:"black-bg"}),e._m(0),a("div",{staticClass:"paper container container-sm margin-top-large"},[e.error?a("div",{staticClass:"alert alert-danger dismissible"},[e._v(" "+e._s(e.error)+" "),a("label",{staticClass:"btn-close",attrs:{for:"alert-5"},on:{click:function(t){e.error=null}}},[e._v("X")])]):e._e(),a("div",{staticClass:"row flex-center margin-bottom-large"},[a("input",{attrs:{accept:"audio/*",type:"file"},on:{change:e.start}})]),e.fileloading?a("div",{staticClass:"progress margin-bottom"},[a("div",{class:"bar striped success w-"+e.fileloading})]):e._e(),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"percentage"}},[e._v("Playback Rate")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.playback,expression:"playback"}],staticClass:"input-block",attrs:{type:"range",step:"0.01",min:"0.5",max:"1",oninput:"output.value = (this.value*100) + '%';"},domProps:{value:e.playback},on:{mouseup:e.datachanged,__r:function(t){e.playback=t.target.value}}}),a("output",{attrs:{id:"output",for:"percentage"}},[e._v(e._s(Math.round(100*e.playback))+"%")])]),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"percentage"}},[e._v("Reverb")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.wet,expression:"wet"}],staticClass:"input-block",attrs:{type:"range",step:"0.01",min:"0",max:"1",oninput:"output.value = (this.value*100) + '%';"},domProps:{value:e.wet},on:{mouseup:e.datachanged,__r:function(t){e.wet=t.target.value}}}),a("output",{attrs:{id:"output",for:"percentage"}},[e._v(e._s(Math.round(100*e.wet))+"%")])]),a("button",{staticClass:"btn-block",on:{click:e.play}},[e._v(" "+e._s(e.isPlaying?"PAUSE":"PLAY")+" ")]),a("button",{staticClass:"btn-block margin-top",on:{click:e.replay}},[e._v("REPLAY")]),a("button",{staticClass:"btn-block btn-secondary-outline margin-top",on:{click:e.render}},[e._v(" DOWNLOAD ")]),a("a",{ref:"rendered",staticStyle:{display:"none"}}),e._m(1)])])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"text-center"},[a("h2",{staticClass:"title"},[e._v("slowed + reverb")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row flex-center margin-top"},[a("span",[e._v(" made with 🖤 by "),a("a",{staticClass:"title",attrs:{href:"https://www.instagram.com/ad0uz/",target:"_blank"}},[e._v("adouz")])])])}],o=(a("b0c0"),a("f664"),a("d3b7"),a("ac1f"),a("3ca3"),a("1276"),a("ddb0"),a("2b3d"),a("96cf"),a("1da1")),l=a("5e54"),s=a("fea2"),c=(a("f590"),a("38c8"),{name:"App",metaInfo:{title:"𝓢𝓵𝓸𝔀𝓮𝓭 + 𝓡𝓮𝓿𝓮𝓻𝓫 Generator - slow and reverb any audio online",base:{target:"_blank",href:"/"},meta:[{charset:"utf-8"},{name:"description",content:"Slowed + Reverb Generator Online. you can slow any song/audio and apply reverb effect to it, and also hear the audio in real-time and download it."},{name:"keywords",content:"slowed + reverb, slowed + reverb generator, slowed and reverb generator, slowed reverb app, slowed and reverb songs download, slow song"},{name:"viewport",content:"width=device-width, initial-scale=1.0"}]},components:{},data:function(){return{buffer:null,fileurl:null,player:null,offset:0,startedAt:0,playback:.8,wet:.6,decay:2,preDelay:0,chunks:[],renderTime:60,renderFileName:"none.wav",fileloading:!1,error:null,isPlaying:!1}},mounted:function(){},methods:{datachanged:function(){if(this.$refs.bg.style.opacity=Math.fround(1.2-this.playback),!this.fileurl)return this.error="upload audio first";this.pause(),this.play()},replay:function(){if(!this.fileurl)return this.error="upload audio first";this.isPlaying&&this.pause(),this.offset=0,this.startedAt=0,this.play()},start:function(e){var t=this;if(console.log(e),e.target.files.length){this.fileloading="20";var a=e.target.files[0];this.fileurl=URL.createObjectURL(a),this.renderFileName=a.name.split(".")[0]+" 𝓼𝓵𝓸𝔀𝓮𝓭 + 𝓻𝓮𝓿𝓮𝓻𝓫"}this.player&&"started"===this.player.state&&this.stop(),this.offset=0,this.startedAt=0;var r=new Audio;r.src=this.fileurl,this.fileloading="50",r.onloadedmetadata=function(){return t.renderTime=r.duration*(2.01-t.playback)},this.play()},pause:function(){if(!this.fileurl)return this.error="upload audio first";this.offset=l["e"]()-this.startedAt,this.player.stop(),this.isPlaying=!1},render:function(){var e=this;if(!this.fileurl)return this.error="upload audio first";this.fileloading="10";var t=document.createElement("a");l["a"](Object(o["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.fileloading="40",a=new l["c"]({decay:e.decay,wet:e.wet,preDelay:e.preDelay}).toDestination(),r=new l["b"](e.fileurl).connect(a),r.playbackRate=e.playback,t.next=6,l["d"]().then((function(){r.start(),e.fileloading="70"}));case 6:case"end":return t.stop()}}),t)}))),this.renderTime).then((function(a){e.fileloading="90";var r=s(a),n=new Blob([r],{type:"audio/wav"}),i=URL.createObjectURL(n);t.href=i,t.download=e.renderFileName,t.style.display="none",t.click(),e.fileloading=!1}))},play:function(){var e=this;if(!this.fileurl)return this.error="upload audio first";if(this.isPlaying)return this.pause();var t=new l["c"]({decay:this.decay,wet:this.wet,preDelay:this.preDelay}).toDestination();this.player=new l["b"](this.fileurl).connect(t),this.player.playbackRate=this.playback,this.player.loop=!0,this.fileloading="90",l["d"]().then((function(){console.log(e.player.buffer.duration),e.fileloading="100",e.startedAt=l["e"]()-e.offset,e.player.start(0,e.offset),e.isPlaying=!0,e.fileloading=!1}))}}}),u=c,d=a("2877"),p=Object(d["a"])(u,n,i,!1,null,null,null),f=p.exports,h=a("58ca");r["a"].config.productionTip=!1,r["a"].use(h["a"]),new r["a"]({render:function(e){return e(f)}}).$mount("#app")}});
//# sourceMappingURL=app.3efb68a4.js.map