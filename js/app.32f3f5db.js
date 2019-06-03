(function(e){function t(t){for(var r,i,c=t[0],s=t[1],u=t[2],p=0,d=[];p<c.length;p++)i=c[p],o[i]&&d.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var s=n[c];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2e40":function(e,t,n){"use strict";var r=n("7fdd"),o=n.n(r);o.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=n("bb71");n("da64");r["a"].use(o["a"],{theme:{primary:"#283593",secondary:"#9BC4BC",background:"#353535",accent:"#13C4A3",error:"#F8333C",success:"#13C4A3",warning:"#FDCA40"},iconfont:"fa"});var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("mapbox-map")],1)},i=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"fullscreen"},[n("div",{staticClass:"fullscreen",attrs:{id:"map"}}),n("v-btn",{staticClass:"configBtn",attrs:{dark:"",color:"primary"},on:{click:function(t){e.config.show=!e.config.show}}},[e._v("Config")]),e.config.show?n("div",{staticClass:"toolbox"},[n("v-text-field",{attrs:{"hide-details":"",placeholder:"Number of vehicles",min:e.config.minVehicles,max:e.config.maxVehicles},model:{value:e.config.vehicles,callback:function(t){e.$set(e.config,"vehicles",t)},expression:"config.vehicles"}}),n("v-checkbox",{attrs:{"hide-details":"",label:"Show Routes"},model:{value:e.config.showRoutes,callback:function(t){e.$set(e.config,"showRoutes",t)},expression:"config.showRoutes"}}),n("v-checkbox",{attrs:{"hide-details":"",label:"Extreme speed"},model:{value:e.config.extremeSpeed,callback:function(t){e.$set(e.config,"extremeSpeed",t)},expression:"config.extremeSpeed"}}),n("v-btn",{attrs:{color:"primary",dark:""},on:{click:function(t){return e.start()}}},[e._v("Start")])],1):e._e()],1)},s=[],u=(n("5df3"),n("ac6a"),n("96cf"),n("3b8d")),l=n("bc3a"),p=n.n(l),d=n("e192"),f=n.n(d),m=(n("ac6d"),{data:function(){return{config:{show:!1,vehicles:1,minVehicles:0,maxVehicles:10,showRoutes:!0,extremeSpeed:!0},axiosDirections:null,axiosGeocoding:null,axiosMovementRegistration:null,axiosBillAdministration:null,accessToken:"pk.eyJ1Ijoic3ZoMTk5NyIsImEiOiJjamZ4bmF0azQweWF1MnprZG02ZTB6dWFsIn0.-058LEniBsf5Tcoy12SVhQ",map:null,mapConfig:{container:"map",style:"mapbox://styles/mapbox/streets-v11",center:[10,51],zoom:5},points:[[13.3888599,52.5170365],[11.5753822,48.1371079],[8.8071646,53.0758196],[7.0158171,51.4582235],[7.4652789,51.5142273],[6.7763137,51.2254018],[9.1800132,48.7784485],[8.6820917,50.1106444],[6.959974,50.938361],[10.000654,53.550341],[14.227151,53.446844],[13.74763,51.042918],[13.375084,48.616017],[7.849644,48.007183],[9.940572,49.809384],[7.483525,53.468601],[8.052617,52.275448],[6.663588,49.749765],[11.121661,49.501876],[9.439866,54.787655],[10.451526,51.165691]],geocoder:null}},methods:{getRandomPoint:function(e){var t=Math.floor(Math.random()*this.points.length);while(this.points[t]===e)t=Math.floor(Math.random()*this.points.length);return this.points[t]},getRoute:function(e,t){var n=this;return new Promise(function(r,o){var a=n,i="/mapbox/driving/".concat(e.join(),";").concat(t.join(),"?geometries=geojson&steps=true&access_token=").concat(a.accessToken);a.axiosDirections.get(i).then(function(e){r(e.data.routes[0])}).catch(function(e){console.log("getRoute() error: "+e),o()})})},convertRoute:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t,n,r,o){var a=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e,i){var c=a,s={carTrackerId:n,destination:r,index:o,distance:t.distance,duration:t.duration,movements:[],coordinates:[]},u=[];t.geometry.coordinates.forEach(function(e){u.push(c.getPlaceFromCoordinate(e))}),Promise.all(u).then(function(r){for(var o=0;o<t.geometry.coordinates.length;o++){var a=c.calculateDistance(t.geometry.coordinates[o-1],t.geometry.coordinates[o]),i={address:r[o],coordinate:{x:t.geometry.coordinates[o][0],y:t.geometry.coordinates[o][1]},carTrackerId:n,date:new Date,serialNumber:o,authCode:"SIMULATION",distance:a};s.movements.push(i),s.coordinates.push(t.geometry.coordinates[o])}e(s)})}));case 1:case"end":return e.stop()}},e)}));function t(t,n,r,o){return e.apply(this,arguments)}return t}(),getPlaceFromCoordinate:function(e){var t=this;return new Promise(function(n,r){var o=t;o.axiosGeocoding.get("/mapbox.places/".concat(e.join(),".json?access_token=").concat(o.accessToken)).then(function(e){var t=e.data,r=t.features[0];r.place_name?n(r.place_name):n("")}).catch(function(e){console.log("convertCalculatedRoute() error: "+e),n("")})})},start:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){var t,n=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.initMap();case 2:return e.next=4,this.getCarTrackersIds(this.config.vehicles);case 4:if(t=e.sent,t){e.next=8;break}return console.log("no cartrackers found"),e.abrupt("return");case 8:t.forEach(function(e){n.startDriving(e.id,0)});case 9:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),startDriving:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t,n,r){var o,a,i,c,s;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return o=r||this.getRandomPoint(),a=this.getRandomPoint(o),e.next=4,this.getRoute(o,a);case 4:if(i=e.sent,i){e.next=7;break}return e.abrupt("return");case 7:return e.next=9,this.convertRoute(i,t,a,n);case 9:c=e.sent,s=this.calculateRoute(c),this.animate(s);case 12:case"end":return e.stop()}},e,this)}));function t(t,n,r){return e.apply(this,arguments)}return t}(),calculateRoute:function(e){var t=this;e.point={type:"FeatureCollection",features:[{type:"Feature",properties:{},geometry:{type:"Point",coordinates:e.coordinates[0]}}]},e.route={type:"FeatureCollection",features:[{type:"Feature",geometry:{type:"LineString",coordinates:e.coordinates}}]};var n=turf.lineDistance(e.route.features[0],"kilometers"),r=[];e.steps=e.duration,this.config.extremeSpeed&&(e.steps=200);for(var o=0;o<n;o+=n/e.steps){var a=turf.along(e.route.features[0],o,"kilometers");r.push(a.geometry.coordinates)}e.route.features[0].geometry.coordinates=r,e.counter=0;var i=e.index+"point"+e.carTrackerId,c=e.index+"route"+e.carTrackerId,s=e.index-1+"point"+e.carTrackerId,u=e.index-1+"route"+e.carTrackerId;return t.map.getSource(s)&&t.map.getLayer(s)&&(t.map.removeLayer(s),t.map.removeSource(s)),t.map.getSource(u)&&t.map.getLayer(u)&&(t.map.removeLayer(u),t.map.removeSource(u)),t.map.addSource(c,{type:"geojson",data:e.route}),t.map.addSource(i,{type:"geojson",data:e.point}),t.map.addLayer({id:i,source:i,type:"symbol",layout:{"icon-image":"car-15","icon-rotate":["get","bearing"],"icon-rotation-alignment":"map","icon-allow-overlap":!0,"icon-ignore-placement":!0}}),t.config.showRoutes&&t.map.addLayer({id:c,source:c,type:"line",paint:{"line-width":2,"line-color":"#007cbf"}}),e},sendMovements:function(e){var t=this;return new Promise(function(n,r){e&&Array.isArray(e)?t.axiosMovementRegistration.post("movement",e).then(function(){return n()}).catch(function(e){console.log("sendMovements() error: ",e),r()}):r(null)})},calculateDistance:function(e,t){if(!e||!t)return 0;var n={type:"Feature",properties:{},geometry:{type:"Point",coordinates:e}},r={type:"Feature",properties:{},geometry:{type:"Point",coordinates:t}};return turf.distance(n,r,"kilometers")},getCarTrackersIds:function(e){var t=this;return new Promise(function(e){t.axiosBillAdministration.get("cartracker/notdeleted").then(function(t){e(t.data)}).catch(function(t){console.log("getCarTrackers() error: ",t),e(null)})})},initMap:function(){var e=this;return new Promise(function(t,n){var r=e;f.a.accessToken=r.accessToken,r.map=new f.a.Map(r.mapConfig),r.map.on("load",function(){t()})})},animate:function(e){var t=this;e.point.features[0].geometry.coordinates=e.route.features[0].geometry.coordinates[e.counter];var n=e.route.features[0].geometry.coordinates[e.counter>=e.steps?e.counter-1:e.counter],r=e.route.features[0].geometry.coordinates[e.counter>=e.steps?e.counter:e.counter+1];e.point.features[0].properties.bearing=turf.bearing(turf.point(n),turf.point(r));var o=e.index+"point"+e.carTrackerId;t.map.getSource(o).setData(e.point),e.counter<e.steps-2?e.animation=requestAnimationFrame(function(){t.animate(e)}):(t.sendMovements(e.movements).catch(function(){}),e.index++,t.startDriving(e.carTrackerId,e.index,e.destination)),e.counter=e.counter+1},checkBsn:function(e){var t=this;p.a.get("/ownercredentials/"+e).then(function(){var n={email:null,password:null,bsn:e};t.register(n)}).catch(function(e){console.log("user not found"+e)})},register:function(e){e.email="adasd@Dasd.bl",e.password="123"},initAxios:function(){this.axiosDirections=p.a.create({baseURL:"https://api.mapbox.com/directions/v5/",timeout:1e4}),this.axiosGeocoding=p.a.create({baseURL:"https://api.mapbox.com/geocoding/v5/",timeout:1e4}),this.axiosMovementRegistration=p.a.create({baseURL:"http://192.168.25.102:8080/MovementRegistration/",timeout:1e4}),this.axiosBillAdministration=p.a.create({baseURL:"http://192.168.25.101:8080/BillAdministration/",headers:{"x-api":"SIMULATION"},timeout:1e4})}},mounted:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.initMap();case 2:this.initAxios();case 3:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}),h=m,g=(n("2e40"),n("2877")),v=n("6544"),y=n.n(v),b=n("8336"),x=n("ac7c"),w=n("2677"),k=Object(g["a"])(h,c,s,!1,null,null,null),R=k.exports;y()(k,{VBtn:b["a"],VCheckbox:x["a"],VTextField:w["a"]});var M={components:{MapboxMap:R}},T=M,S=(n("5c0b"),Object(g["a"])(T,a,i,!1,null,null,null)),j=S.exports,C=n("2f62");r["a"].use(C["a"]);var P=new C["a"].Store({state:{},mutations:{},actions:{}});r["a"].config.productionTip=!1,new r["a"]({store:P,render:function(e){return e(j)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("6879"),o=n.n(r);o.a},6879:function(e,t,n){},"7fdd":function(e,t,n){}});
//# sourceMappingURL=app.32f3f5db.js.map