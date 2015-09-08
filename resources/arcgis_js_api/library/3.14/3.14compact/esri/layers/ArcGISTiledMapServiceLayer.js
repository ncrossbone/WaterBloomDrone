// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.14/esri/copyright.txt for details.
//>>built
define("esri/layers/ArcGISTiledMapServiceLayer","dojo/_base/kernel dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/json dojo/has dojo/io-query ../kernel ../urlUtils ../SpatialReference ./TiledMapServiceLayer ./ArcGISMapServiceLayer ./TileInfo ./TimeInfo ./TileMap".split(" "),function(m,e,f,n,p,q,h,r,k,s,t,u,v,w,x){e=e([t,u],{declaredClass:"esri.layers.ArcGISTiledMapServiceLayer",_agolAttrs:"Canvas/World_Dark_Gray_Base Canvas/World_Dark_Gray_Reference Canvas/World_Light_Gray_Base Canvas/World_Light_Gray_Reference Elevation/World_Hillshade Ocean/World_Ocean_Base Ocean/World_Ocean_Reference Ocean_Basemap Reference/World_Boundaries_and_Places Reference/World_Boundaries_and_Places_Alternate Reference/World_Transportation World_Imagery World_Street_Map World_Topo_Map".split(" "),
_isReference:!1,_referenceLayers:"Canvas/World_Dark_Gray_Reference Canvas/World_Light_Gray_Reference Ocean/World_Ocean_Reference Reference/World_Boundaries_and_Places Reference/World_Boundaries_and_Places_Alternate Reference/World_Reference_Overlay Reference/World_Transportation".split(" "),constructor:function(a,b){b&&(b.roundrobin&&(m.deprecated(this.declaredClass+" : Constructor option 'roundrobin' deprecated. Use option 'tileServers'."),b.tileServers=b.roundrobin),this._setTileServers(b.tileServers),
this._loadCallback=b.loadCallback);this._params=f.mixin({},this._url.query);if(n.some(["servicesdev.arcgisonline.com/arcgis/rest/services","services.arcgisonline.com/arcgis/rest/services","servicesqa.arcgisonline.com/arcgis/rest/services"],function(b){return-1<a.toLowerCase().indexOf(b.toLowerCase())})){if(this.resampling=!(b&&!1===b.resampling))this.tileMap=new x(this)}else this.resampling=b&&null!=b.resampling?b.resampling:void 0;this._initLayer=f.hitch(this,this._initLayer);var c=b&&b.resourceInfo;
c?this._initLayer(c):(this._load=f.hitch(this,this._load),this._load())},_TILE_FORMATS:{PNG:"png",PNG8:"png",PNG24:"png",PNG32:"png",JPG:"jpg",JPEG:"jpg",GIF:"gif"},_setTileServers:function(a){if(a&&0<a.length){this.tileServers=a;var b,c=a.length;for(b=0;b<c;b++)a[b]=k.urlToObject(a[b]).path}},_initLayer:function(a,b){this.inherited(arguments);this.resourceInfo=p.toJson(a);this.tileInfo=new v(a.tileInfo);this.resampling=null==this.resampling?!!a.resampling:this.resampling;!this.spatialReference&&
this.tileInfo.spatialReference&&(this.spatialReference=new s(this.tileInfo.spatialReference.toJson()));this.isPNG32="PNG24"===this.tileInfo.format||"PNG32"===this.tileInfo.format;a.timeInfo&&(this.timeInfo=new w(a.timeInfo));var c=this._url.path,l=this._loadCallback,e="file:"===window.location.protocol?"http:":window.location.protocol,d=c.match(/^https?\:\/\/(server|services)\.arcgisonline\.com\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i),d=d&&d[2];if(!this.tileServers)if(a.tileServers)this._setTileServers(a.tileServers);
else{var g=-1!==c.search(/^https?\:\/\/server\.arcgisonline\.com/i),f=-1!==c.search(/^https?\:\/\/services\.arcgisonline\.com/i);if(g||f)this._setTileServers([c,c.replace(g?/server\.arcgisonline/i:/services\.arcgisonline/i,g?"services.arcgisonline":"server.arcgisonline")])}if(d){d=d.toLowerCase();for(c=0;c<this._agolAttrs.length;c++)if(g=this._agolAttrs[c],g.toLowerCase()===d){this.hasAttributionData=!0;this.attributionDataUrl=this.attributionDataUrl||e+"//static.arcgis.com/attribution/"+g;break}for(c=
0;c<this._referenceLayers.length;c++)if(g=this._referenceLayers[c],g.toLowerCase()===d){this._isReference=!0;break}}this.loaded=!0;this.onLoad(this);l&&(delete this._loadCallback,l(this))},getTileUrl:function(a,b,c){var e=this.tileServers,f=this._getToken(),d=this._url.query;a=(e?e[b%e.length]:this._url.path)+"/tile/"+a+"/"+b+"/"+c;this.resampling&&!this.tileMap&&(a+="?blankTile\x3dfalse");d&&(a=this.resampling&&!this.tileMap?a+("\x26"+h.objectToQuery(d)):a+("?"+h.objectToQuery(d)));if(f&&(!d||!d.token))a+=
(-1===a.indexOf("?")?"?":"\x26")+"token\x3d"+f;a=this.addTimestampToURL(a);return k.addProxy(a)}});q("extend-esri")&&f.setObject("layers.ArcGISTiledMapServiceLayer",e,r);return e});