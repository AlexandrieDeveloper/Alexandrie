"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[787],{2682:(z,g,t)=>{t.d(g,{z:()=>v});var a=t(8645),c=t(9212);let v=(()=>{var e;class r{constructor(){this.bookSelectedSubject=new a.x,this.bookSelected$=this.bookSelectedSubject.asObservable()}selectBook(h){this.bookSelectedSubject.next(h)}}return(e=r).\u0275fac=function(h){return new(h||e)},e.\u0275prov=c.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),r})()},2787:(z,g,t)=>{t.r(g),t.d(g,{routes:()=>b});var v,a=t(9212),c=t(853),w=function(o,i){var n=function(){if(typeof window>"u")return new Map;if(!v){var o=window;o.Ionicons=o.Ionicons||{},v=o.Ionicons.map=o.Ionicons.map||new Map}return v}(),s=n.get(o);void 0===s?n.set(o,i):s!==i&&console.warn('[Ionicons Warning]: Multiple icons were mapped to name "'.concat(o,'". Ensure that multiple icons are not mapped to the same icon name.'))},M=t(6814),j=t(2682);function O(o,i){if(1&o){const n=a.EpF();a.TgZ(0,"div",8)(1,"div",9)(2,"ion-item",10),a._UZ(3,"img",11),a.TgZ(4,"div",12)(5,"ion-label",13),a._uU(6),a.qZA(),a.TgZ(7,"ion-label",14),a._uU(8),a.qZA()(),a.TgZ(9,"ion-button",15),a.NdJ("click",function(){a.CHM(n);const l=a.oxw();return a.KtG(l.rewind30Seconds())}),a._UZ(10,"ion-icon",16),a.qZA(),a.TgZ(11,"ion-button",15),a.NdJ("click",function(){a.CHM(n);const l=a.oxw();return a.KtG(l.isBookPlaying?l.pauseAudio():l.playAudio())}),a._UZ(12,"ion-icon",17),a.qZA()()()()}if(2&o){const n=a.oxw();a.xp6(3),a.Q6J("src",n.selectedBook.img,a.LSH),a.xp6(3),a.hij(" ",null==n.selectedBook?null:n.selectedBook.title," "),a.xp6(2),a.hij(" Temps restant : ",n.remainingTime," "),a.xp6(4),a.Q6J("name",n.isBookPlaying?"pause-circle":"play-circle")}}const b=[{path:"tabs",component:(()=>{var o;class i{constructor(s){this.bookReaderService=s,this.environmentInjector=(0,a.f3M)(a.lqb),this.selectedBook=null,this.audio=null,this.remainingTime=null,this.isBookPlaying=!1,function(o){Object.keys(o).forEach(function(i){w(i,o[i]);var n=i.replace(/([a-z0-9]|(?=[A-Z]))([A-Z])/g,"$1-$2").toLowerCase();i!==n&&w(n,o[i])})}({triangle:"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 464H48a16 16 0 01-14.07-23.62l208-384a16 16 0 0128.14 0l208 384A16 16 0 01464 464z'/></svg>",ellipse:"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 464c-114.69 0-208-93.31-208-208S141.31 48 256 48s208 93.31 208 208-93.31 208-208 208z'/></svg>",square:"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M416 464H96a48.05 48.05 0 01-48-48V96a48.05 48.05 0 0148-48h320a48.05 48.05 0 0148 48v320a48.05 48.05 0 01-48 48z'/></svg>",playSkipBack:"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M112 64a16 16 0 0116 16v136.43L360.77 77.11a35.13 35.13 0 0135.77-.44c12 6.8 19.46 20 19.46 34.33v290c0 14.37-7.46 27.53-19.46 34.33a35.14 35.14 0 01-35.77-.45L128 295.57V432a16 16 0 01-32 0V80a16 16 0 0116-16z'/></svg>",playSkipForward:"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 64a16 16 0 00-16 16v136.43L151.23 77.11a35.13 35.13 0 00-35.77-.44C103.46 83.47 96 96.63 96 111v290c0 14.37 7.46 27.53 19.46 34.33a35.14 35.14 0 0035.77-.45L384 295.57V432a16 16 0 0032 0V80a16 16 0 00-16-16z'/></svg>",playCircle:"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm74.77 217.3l-114.45 69.14a10.78 10.78 0 01-16.32-9.31V186.87a10.78 10.78 0 0116.32-9.31l114.45 69.14a10.89 10.89 0 010 18.6z'/></svg>",pauseCircle:"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm-32 272a16 16 0 01-32 0V192a16 16 0 0132 0zm96 0a16 16 0 01-32 0V192a16 16 0 0132 0z'/></svg>",reload:"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 148l-21.12-24.57A191.43 191.43 0 00240 64C134 64 48 150 48 256s86 192 192 192a192.09 192.09 0 00181.07-128' stroke-linecap='round' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path d='M464 97.42V208a16 16 0 01-16 16H337.42c-14.26 0-21.4-17.23-11.32-27.31L436.69 86.1C446.77 76 464 83.16 464 97.42z'/></svg>"}),s.bookSelected$.subscribe(l=>this.selectBook(l))}selectBook(s){this.audio&&(this.pauseAudio(),this.audio=null),this.selectedBook=s,this.audio=new Audio(s.audioUrl),this.playAudio(),this.audio.addEventListener("timeupdate",()=>{this.remainingTime=this.formatTime(this.audio?this.audio.duration-this.audio.currentTime:0)}),this.audio.addEventListener("pause",()=>{this.isBookPlaying=!1}),this.audio.addEventListener("play",()=>{this.isBookPlaying=!0})}playAudio(){var s;null===(s=this.audio)||void 0===s||s.play()}pauseAudio(){var s;null===(s=this.audio)||void 0===s||s.pause()}rewind30Seconds(){this.audio&&(this.audio.currentTime=Math.max(0,this.audio.currentTime-30))}forward30Seconds(){this.audio&&(this.audio.currentTime=Math.min(this.audio.duration,this.audio.currentTime+30))}formatTime(s){const l=Math.floor(s/60),m=Math.floor(s%60);return`${l}:${m<10?"0":""}${m}`}}return(o=i).\u0275fac=function(s){return new(s||o)(a.Y36(j.z))},o.\u0275cmp=a.Xpm({type:o,selectors:[["app-tabs"]],standalone:!0,features:[a.jDz],decls:15,vars:1,consts:[["style","z-index: 100; background-color: white;",4,"ngIf"],["slot","bottom"],["tab","library","href","/tabs/library"],["aria-hidden","true","name","triangle"],["tab","tab2","href","/tabs/tab2"],["aria-hidden","true","name","ellipse"],["tab","tab3","href","/tabs/tab3"],["aria-hidden","true","name","square"],[2,"z-index","100","background-color","white"],[1,"audio-player","margin-vt-s"],["lines","none"],["height","80px",1,"border-radius-s",3,"src"],[1,"margin-left-l"],[1,"bold"],[1,"margin-top-s"],["fill","clear","slot","end",1,"font-size-icon",3,"click"],["name","reload",2,"transform","rotate(180deg)"],[3,"name"]],template:function(s,l){1&s&&(a.TgZ(0,"ion-tabs"),a.YNc(1,O,13,4,"div",0),a.TgZ(2,"ion-tab-bar",1)(3,"ion-tab-button",2),a._UZ(4,"ion-icon",3),a.TgZ(5,"ion-label"),a._uU(6,"Bibiloth\xe8que"),a.qZA()(),a.TgZ(7,"ion-tab-button",4),a._UZ(8,"ion-icon",5),a.TgZ(9,"ion-label"),a._uU(10,"Store"),a.qZA()(),a.TgZ(11,"ion-tab-button",6),a._UZ(12,"ion-icon",7),a.TgZ(13,"ion-label"),a._uU(14,"Tab 3"),a.qZA()()()()),2&s&&(a.xp6(),a.Q6J("ngIf",l.selectedBook))},dependencies:[M.ez,M.O5,c.UN,c.yq,c.ZU,c.gu,c.Q$,c.YG,c.Ie]}),i})(),children:[{path:"library",loadComponent:()=>t.e(58).then(t.bind(t,4058)).then(o=>o.libraryPage)},{path:"tab2",loadComponent:()=>t.e(669).then(t.bind(t,4669)).then(o=>o.Tab2Page)},{path:"tab3",loadComponent:()=>t.e(920).then(t.bind(t,6920)).then(o=>o.Tab3Page)},{path:"",redirectTo:"/tabs/library",pathMatch:"full"}]},{path:"",redirectTo:"/tabs/library",pathMatch:"full"}]}}]);