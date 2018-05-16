webpackJsonp([2],{582:function(t,e,i){function n(t){i(620)}var s=i(9)(i(601),i(632),n,"data-v-594bde53",null);t.exports=s.exports},588:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(57),s=i.n(n),a=i(66),o=i.n(a),A=i(201),l=i.n(A),r=i(202),c=i.n(r),d=i(130),p=i(49),g=i(87),u=i.i(d.a)("transform");e.default={mixins:[g.c],props:{bgImage:{type:String,default:""},songs:{type:Array,default:[]},title:{type:String,default:""},rank:{type:Boolean,default:!1}},data:function(){return{scrollY:0}},computed:{bgStyle:function(){return"background-image:url("+this.bgImage+")"}},created:function(){this.probeType=3,this.listenScroll=!0},mounted:function(){this.imageHeight=this.$refs.bgImage.clientHeight,this.minTransalteY=40-this.imageHeight,this.$refs.list.$el.style.top=this.imageHeight+"px"},methods:s()({handlePlayList:function(t){var e=t.length>0?"60px":"";this.$refs.list.$el.style.bottom=e,this.$refs.list.refresh()},scroll:function(t){this.scrollY=t.y},back:function(){this.$router.back()},selectItem:function(t,e){this.selectPlay({list:this.songs,index:e})},random:function(){this.randomPlay({list:this.songs})}},i.i(p.c)(["selectPlay","randomPlay"])),watch:{scrollY:function(t){var e=Math.max(this.minTransalteY,t),i=1,n=0,s=Math.abs(t/this.imageHeight);t>0&&(i=1+s,n=10),this.$refs.layer.style[u]="translate3d(0,"+e+"px,0)",t<this.minTransalteY?(n=10,this.$refs.bgImage.style.paddingTop=0,this.$refs.bgImage.style.height="40px",this.$refs.playBtn.style.display="none"):(this.$refs.bgImage.style.paddingTop="70%",this.$refs.bgImage.style.height=0,this.$refs.playBtn.style.display=""),this.$refs.bgImage.style[u]="scale("+i+")",this.$refs.bgImage.style.zIndex=n}},components:{Scroll:o.a,Loading:l.a,SongList:c.a}}},589:function(t,e,i){e=t.exports=i(577)(!0),e.push([t.i,".music-list[data-v-4a6057ee]{position:fixed;z-index:100;top:0;left:0;bottom:0;right:0;background:#222}.music-list .back[data-v-4a6057ee]{position:absolute;top:0;left:6px;z-index:50}.music-list .back .icon-back[data-v-4a6057ee]{display:block;padding:10px;font-size:22px;color:#ffcd32}.music-list .title[data-v-4a6057ee]{position:absolute;top:0;left:10%;z-index:40;width:80%;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;text-align:center;line-height:40px;font-size:18px;color:#fff}.music-list .bg-image[data-v-4a6057ee]{position:relative;width:100%;height:0;padding-top:70%;transform-origin:top;background-size:cover}.music-list .bg-image .play-wrapper[data-v-4a6057ee]{position:absolute;bottom:20px;z-index:50;width:100%}.music-list .bg-image .play-wrapper .play[data-v-4a6057ee]{box-sizing:border-box;width:135px;padding:7px 0;margin:0 auto;text-align:center;border:1px solid #ffcd32;color:#ffcd32;border-radius:100px;font-size:0}.music-list .bg-image .play-wrapper .play .icon-play[data-v-4a6057ee]{display:inline-block;vertical-align:middle;margin-right:6px;font-size:16px}.music-list .bg-image .play-wrapper .play .text[data-v-4a6057ee]{display:inline-block;vertical-align:middle;font-size:12px}.music-list .bg-image .filter[data-v-4a6057ee]{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(7,17,27,.4)}.music-list .bg-layer[data-v-4a6057ee]{position:relative;height:100%;background:#222}.music-list .list[data-v-4a6057ee]{position:fixed;top:0;bottom:0;width:100%;background:#222}.music-list .list .song-list-wrapper[data-v-4a6057ee]{padding:20px 30px}.music-list .list .loading-container[data-v-4a6057ee]{position:absolute;width:100%;top:50%;transform:translateY(-50%)}","",{version:3,sources:["C:/Users/Administrator/Desktop/vue-music-master/src/components/musicList/musicList.vue"],names:[],mappings:"AACA,6BACE,eAAgB,AAChB,YAAa,AACb,MAAO,AACP,OAAQ,AACR,SAAU,AACV,QAAS,AACT,eAAiB,CAClB,AACD,mCACE,kBAAmB,AACnB,MAAO,AACP,SAAU,AACV,UAAY,CACb,AACD,8CACE,cAAe,AACf,aAAc,AACd,eAAgB,AAChB,aAAe,CAChB,AACD,oCACE,kBAAmB,AACnB,MAAO,AACP,SAAU,AACV,WAAY,AACZ,UAAW,AACX,uBAAwB,AACxB,gBAAiB,AACjB,mBAAoB,AACpB,kBAAmB,AACnB,iBAAkB,AAClB,eAAgB,AAChB,UAAY,CACb,AACD,uCACE,kBAAmB,AACnB,WAAY,AACZ,SAAU,AACV,gBAAiB,AACjB,qBAAsB,AACtB,qBAAuB,CACxB,AACD,qDACE,kBAAmB,AACnB,YAAa,AACb,WAAY,AACZ,UAAY,CACb,AACD,2DACE,sBAAuB,AACvB,YAAa,AACb,cAAe,AACf,cAAe,AACf,kBAAmB,AACnB,yBAA0B,AAC1B,cAAe,AACf,oBAAqB,AACrB,WAAa,CACd,AACD,sEACE,qBAAsB,AACtB,sBAAuB,AACvB,iBAAkB,AAClB,cAAgB,CACjB,AACD,iEACE,qBAAsB,AACtB,sBAAuB,AACvB,cAAgB,CACjB,AACD,+CACE,kBAAmB,AACnB,MAAO,AACP,OAAQ,AACR,WAAY,AACZ,YAAa,AACb,2BAA8B,CAC/B,AACD,uCACE,kBAAmB,AACnB,YAAa,AACb,eAAiB,CAClB,AACD,mCACE,eAAgB,AAChB,MAAO,AACP,SAAU,AACV,WAAY,AACZ,eAAiB,CAClB,AACD,sDACE,iBAAmB,CACpB,AACD,sDACE,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,0BAA4B,CAC7B",file:"musicList.vue",sourcesContent:["\n.music-list[data-v-4a6057ee] {\n  position: fixed;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: #222;\n}\n.music-list .back[data-v-4a6057ee] {\n  position: absolute;\n  top: 0;\n  left: 6px;\n  z-index: 50;\n}\n.music-list .back .icon-back[data-v-4a6057ee] {\n  display: block;\n  padding: 10px;\n  font-size: 22px;\n  color: #ffcd32;\n}\n.music-list .title[data-v-4a6057ee] {\n  position: absolute;\n  top: 0;\n  left: 10%;\n  z-index: 40;\n  width: 80%;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  text-align: center;\n  line-height: 40px;\n  font-size: 18px;\n  color: #fff;\n}\n.music-list .bg-image[data-v-4a6057ee] {\n  position: relative;\n  width: 100%;\n  height: 0;\n  padding-top: 70%;\n  transform-origin: top;\n  background-size: cover;\n}\n.music-list .bg-image .play-wrapper[data-v-4a6057ee] {\n  position: absolute;\n  bottom: 20px;\n  z-index: 50;\n  width: 100%;\n}\n.music-list .bg-image .play-wrapper .play[data-v-4a6057ee] {\n  box-sizing: border-box;\n  width: 135px;\n  padding: 7px 0;\n  margin: 0 auto;\n  text-align: center;\n  border: 1px solid #ffcd32;\n  color: #ffcd32;\n  border-radius: 100px;\n  font-size: 0;\n}\n.music-list .bg-image .play-wrapper .play .icon-play[data-v-4a6057ee] {\n  display: inline-block;\n  vertical-align: middle;\n  margin-right: 6px;\n  font-size: 16px;\n}\n.music-list .bg-image .play-wrapper .play .text[data-v-4a6057ee] {\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 12px;\n}\n.music-list .bg-image .filter[data-v-4a6057ee] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(7,17,27,0.4);\n}\n.music-list .bg-layer[data-v-4a6057ee] {\n  position: relative;\n  height: 100%;\n  background: #222;\n}\n.music-list .list[data-v-4a6057ee] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  background: #222;\n}\n.music-list .list .song-list-wrapper[data-v-4a6057ee] {\n  padding: 20px 30px;\n}\n.music-list .list .loading-container[data-v-4a6057ee] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n}"],sourceRoot:""}])},590:function(t,e,i){var n=i(589);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(578)("88fae4b8",n,!0,{})},591:function(t,e,i){function n(t){i(590)}var s=i(9)(i(588),i(592),n,"data-v-4a6057ee",null);t.exports=s.exports},592:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"music-list"},[i("div",{staticClass:"back",on:{click:t.back}},[i("i",{staticClass:"icon-back"})]),t._v(" "),i("h1",{staticClass:"title",domProps:{innerHTML:t._s(t.title)}}),t._v(" "),i("div",{ref:"bgImage",staticClass:"bg-image",style:t.bgStyle},[i("div",{staticClass:"play-wrapper"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.songs.length>0,expression:"songs.length>0"}],ref:"playBtn",staticClass:"play",on:{click:t.random}},[i("i",{staticClass:"icon-play"}),t._v(" "),i("span",{staticClass:"text"},[t._v("随机播放全部")])])])]),t._v(" "),i("div",{ref:"layer",staticClass:"bg-layer"}),t._v(" "),i("scroll",{ref:"list",staticClass:"list",attrs:{data:t.songs,"listen-scroll":t.listenScroll,"probe-type":t.probeType},on:{scroll:t.scroll}},[i("div",{staticClass:"song-list-wrapper"},[i("song-list",{attrs:{songs:t.songs,rank:t.rank},on:{select:t.selectItem}})],1),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.songs.length,expression:"!songs.length"}],staticClass:"loading-container"},[i("loading")],1)])],1)},staticRenderFns:[]}},594:function(t,e,i){"use strict";function n(){var t=r()({},d.b,{platform:"h5",uin:0,needNewCode:1});return i.i(c.a)("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",t,d.c)}function s(){var t=r()({},{g_tk:5381,notice:0,inCharset:"utf8",outCharset:"utf-8",platform:"yqq",hostUin:0,sin:0,ein:29,sortId:5,categoryId:1e7,needNewCode:0,rnd:Math.random(),format:"json"});return g.a.get("/api/getDiscList",{params:t}).then(function(t){return A.a.resolve(t.data)})}function a(t){var e=r()({},d.b,{disstid:t,type:1,json:1,utf8:1,onlysong:0,platform:"yqq",hostUin:0,needNewCode:0});return g.a.get("/api/getSongList",{params:e}).then(function(t){return A.a.resolve(t.data)})}e.b=n,e.c=s,e.a=a;var o=i(89),A=i.n(o),l=i(88),r=i.n(l),c=i(200),d=i(65),p=i(203),g=i.n(p)},601:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(57),s=i.n(n),a=i(591),o=i.n(a),A=i(594),l=i(65),r=i(49),c=i(131);e.default={computed:s()({title:function(){return this.disc.dissname},bgImage:function(){return this.disc.imgurl}},i.i(r.a)(["disc"])),data:function(){return{songs:[]}},created:function(){this._getSongList()},methods:{_getSongList:function(){var t=this;if(!this.disc.dissid)return void this.$router.push("/recommend");i.i(A.a)(this.disc.dissid).then(function(e){console.log(e),e.code===l.a&&(t.songs=t._normalizeSongs(e.cdlist[0].songlist))})},_normalizeSongs:function(t){var e=[];return t.forEach(function(t){t.songid&&t.albummid&&e.push(i.i(c.b)(t))}),e}},components:{MusicList:o.a}}},610:function(t,e,i){e=t.exports=i(577)(!0),e.push([t.i,".slide-enter-active[data-v-594bde53],.slide-leave-active[data-v-594bde53]{transition:all .3s}.slide-enter[data-v-594bde53],.slide-leave-to[data-v-594bde53]{transform:translate3d(100%,0,0)}","",{version:3,sources:["C:/Users/Administrator/Desktop/vue-music-master/src/views/recommend/details.vue"],names:[],mappings:"AACA,0EAEE,kBAAqB,CACtB,AACD,+DAEE,+BAAmC,CACpC",file:"details.vue",sourcesContent:["\n.slide-enter-active[data-v-594bde53],\n.slide-leave-active[data-v-594bde53] {\n  transition: all 0.3s;\n}\n.slide-enter[data-v-594bde53],\n.slide-leave-to[data-v-594bde53] {\n  transform: translate3d(100%, 0, 0);\n}"],sourceRoot:""}])},620:function(t,e,i){var n=i(610);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(578)("6839f46a",n,!0,{})},632:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"slide"}},[i("music-list",{attrs:{title:t.title,"bg-image":t.bgImage,songs:t.songs}})],1)},staticRenderFns:[]}}});
//# sourceMappingURL=2.852b95b7dfea189b1463.js.map