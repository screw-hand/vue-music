webpackJsonp([2],{KPUb:function(t,e){},TgeA:function(t,e){},"W1+L":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("Dd8w"),n=i.n(s),r=i("43Vb"),a=i.n(r),o=i("3Q4o"),c={props:{loop:{type:Boolean,default:!0},autoPlay:{type:Boolean,default:!0},interval:{type:Number,default:4e3}},data:function(){return{dots:[],currentPageIndex:0}},methods:{_setSliderWidth:function(t){this.children=this.$refs["slider-group"].children;for(var e=0,i=this.$refs.slider.clientWidth,s=0;s<this.children.length;s++){var n=this.children[s];Object(o.a)(n,"slider-item"),n.style.width=i+"px",e+=i}this.loop&&!t&&(e+=2*i),this.$refs["slider-group"].style.width=e+"px"},_initSlider:function(){var t=this;this.slider=new a.a(this.$refs.slider,{scrollX:!0,scrollY:!0,momentum:!1,snap:!0,snapLoop:this.loop,snapThreshold:.3,snapSpeed:400}),this.slider.on("scrollEnd",function(){var e=t.slider.getCurrentPage().pageX;t.loop&&(e-=1),t.currentPageIndex=e,t.autoPlay&&(clearTimeout(t.timer),t._play())})},_initDots:function(){this.dots=new Array(this.children.length)},_play:function(){var t=this;if(this.autoPlay){var e=this.currentPageIndex+1;this.loop&&(e+=1),this.timer=setTimeout(function(){t.slider.goToPage(e,0,400)},this.interval)}},_resizeWindow:function(){var t=this;window.addEventListener("resize",function(){t.slider&&(t._setSliderWidth(!0),t.slider.refresh())})}},mounted:function(){var t=this;setTimeout(function(){t._setSliderWidth(),t._initDots(),t._initSlider(),t._play(),t._resizeWindow()},20)},destroyed:function(){clearTimeout(this.timer)}},d={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"slider",staticClass:"slider"},[i("div",{ref:"slider-group",staticClass:"slider-group"},[t._t("default")],2),t._v(" "),i("div",{staticClass:"dots"},t._l(t.dots,function(e,s){return i("span",{key:s,staticClass:"dot",class:{active:t.currentPageIndex===s}},[t._v(t._s(e))])}),0)])},staticRenderFns:[]};var l=i("VU/8")(c,d,!1,function(t){i("TgeA")},"data-v-5148b8c2",null).exports,u=i("qwAB"),h=i("y/jF"),m=i("m40h"),f=i("T452"),v=i("F4+m"),p=i("NYxO"),g={mixins:[v.a],created:function(){this._getRecommend(),this._getDiscLikst()},data:function(){return{recommends:[],discLikst:[],checkLoaded:!1}},methods:n()({_getRecommend:function(){var t=this;Object(m.b)().then(function(e){e.code===f.a&&(t.recommends=e.data.slider)})},_getDiscLikst:function(){var t=this;Object(m.a)().then(function(e){e.code===f.a&&(t.discLikst=e.data.list)})},loadImage:function(){this.checkLoaded||(this.$refs.scroll.refresh(),this.checkLoaded=!0)},handlePlayList:function(t){var e=t.length>0?"60px":"";this.$refs.recommend.style.bottom=e,this.$refs.scroll.refresh()},selectItem:function(t){this.$router.push({path:"/recommend/"+t.dissid}),this.setDisc(t)}},Object(p.d)({setDisc:"SET_DISC"})),components:{Slider:l,Scroll:u.a,Loading:h.a}},_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"recommend",staticClass:"recommend"},[i("scroll",{ref:"scroll",staticClass:"recommend-content",attrs:{data:t.discLikst}},[i("div",[t.recommends.length?i("div",{staticClass:"slider-wrapper"},[i("slider",t._l(t.recommends,function(e){return i("div",{key:e.index},[i("a",{attrs:{href:e.linkUrl}},[i("img",{staticClass:"needsClick",attrs:{src:e.picUrl},on:{load:t.loadImage}})])])}),0)],1):t._e(),t._v(" "),i("div",{staticClass:"recommend-list"},[i("h1",{staticClass:"list-title"},[t._v("热门歌单推荐")]),t._v(" "),i("ul",t._l(t.discLikst,function(e,s){return i("li",{key:s,staticClass:"item",on:{click:function(i){return t.selectItem(e)}}},[i("div",{staticClass:"icon"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.imgurl,expression:"item.imgurl"}],attrs:{width:"60",height:"60"}})]),t._v(" "),i("div",{staticClass:"text"},[i("h2",{staticClass:"name",domProps:{innerHTML:t._s(e.creator.name)}}),t._v(" "),i("p",{staticClass:"desc",domProps:{innerHTML:t._s(e.dissname)}})])])}),0)])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.discLikst.length,expression:"!discLikst.length"}],staticClass:"loading-container"},[i("loading")],1)]),t._v(" "),i("router-view")],1)},staticRenderFns:[]};var y=i("VU/8")(g,_,!1,function(t){i("KPUb")},"data-v-00d77bf0",null);e.default=y.exports},m40h:function(t,e,i){"use strict";i.d(e,"b",function(){return u}),i.d(e,"a",function(){return h}),e.c=function(t){var e=a()({},c.b,{disstid:t,type:1,json:1,utf8:1,onlysong:0,platform:"yqq",hostUin:0,needNewCode:0,format:"json"});return l.a.get("/api/getSongList",{params:e}).then(function(t){return n.a.resolve(t.data)})};var s=i("//Fk"),n=i.n(s),r=i("woOf"),a=i.n(r),o=i("Gak4"),c=i("T452"),d=i("mtWM"),l=i.n(d),u=function(){var t=a()({},c.b,{platform:"h5",uin:0,needNewCode:1,format:"json"});return Object(o.a)("https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",t,c.c)},h=function(){var t=a()({},c.b,{platform:"yqq",hostUin:0,sin:0,ein:29,sortId:5,needNewCode:0,categoryId:1e7,rnd:Math.random(),format:"json"});return l.a.get("/api/getDiscList",{params:t}).then(function(t){return n.a.resolve(t.data)})}}});
//# sourceMappingURL=2.ab3e700d1cb9aff219ee.js.map