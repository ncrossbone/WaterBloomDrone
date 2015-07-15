Ext.define('WaterBloomDrone.view.map.CoreMapTab1', {
	extend: 'Ext.Component',
	
	xtype: 'app-map-coreMap-tab1',
	
	id: '_mapDiv_1',
	
	requires: [
		'WaterBloomDrone.view.map.DynamicLayerAdmin1'
	],
	
	map:null,
	dynamicLayerAdmin:null,
	fullExtent:null,
	initialExtent:null,
	preExtent: null,
	maxExtent: null,
	minExtent: null,
	
	initComponent: function() {
		this.on('render', this.mapRendered, this);
		this.callParent();
	},
	
	mapRendered: function(p){
        var me = this;
        
        var timerId = window.setInterval(function(){
        	
        	require(["esri/map"], function(Map){
        		me.map = new Map('_mapDiv_1', {
        	     	isDoubleClickZoom:false,
        	     	isPan:false,
        	 		logo:false,
        	 		slider: true,
        	 		showAttribution: false,
        	 		sliderPosition: "top-right",
        	 		sliderStyle: "large",
        	 		zoom: 5,
        	 		autoResize: true
        		});
        	});
        	//me.map.resize();
        	me.baseMapInit();
        	//me.map.setLevel(me.level);
        	window.clearInterval(timerId);
        	me.dynamicLayerAdmin = Ext.create('WaterBloomDrone.view.map.DynamicLayerAdmin1', me.map);
        	
        	require(["esri/dijit/Scalebar"], function(Scalebar){
        		var scalebar = new Scalebar({
            		map: me.map,
            		// "dual" displays both miles and kilmometers
                    // "english" is the default, which displays miles
                    // use "metric" for kilometers
            		scalebarUnit: "metric"
            	});
        		
        		// khLee Extent Change Event
        		dojo.connect(me.map, "onExtentChange", Ext.setExtent);
        	});
        	
        	// 전역 변수 설정 WaterBloomDrone.getApplication().coreMap
        	WaterBloomDrone.getApplication().coreMap1 = me;
        	
		}, 1);
    },
    
    baseMapInit: function(){
		var me = this;
		dojo.declare('CustomMapsLayer', esri.layers.TiledMapServiceLayer, {
		    constructor: function(opts) {
		      opts = opts || {};
		      this.spatialReference = new esri.SpatialReference({wkid: 102100});
		      this.tileInfo = new esri.layers.TileInfo({
		        rows: 256, cols: 256, dpi: 96,
		        origin: {x: -20037508.342787, y: 20037508.342787},
		        spatialReference: {wkid: 102100},
		        lods: [
						{level:0, resolution:156543.033928,    scale:591657527.591555},
						{level:1, resolution:78271.5169639999, scale:295828763.795777},
						{level:2, resolution:39135.7584820001, scale:147914381.897889},
						{level:3, resolution:19567.8792409999, scale:73957190.948944},
						{level:4, resolution:9783.93962049996, scale:36978595.474472},
						{level:5, resolution:4891.96981024998, scale:18489297.737236},
						{level:6, resolution:2445.98490512499, scale:9244648.868618},
						{level:7, resolution:1222.99245256249, scale:4622324.434309}, //start
						{level:8, resolution:611.49622628138,  scale:2311162.217155},
						{level:9, resolution:305.748113140558, scale:1155581.108577},
						{level:10,resolution:152.874056570411, scale:577790.554289},
						{level:11,resolution:76.4370282850732, scale:288895.277144},
						{level:12,resolution:38.2185141425366, scale:144447.638572},
						{level:13,resolution:19.1092570712683, scale:72223.819286},
						{level:14,resolution:9.55462853563415, scale:36111.909643},
						{level:15,resolution:4.77731426794937, scale:18055.954822},
						{level:16,resolution:2.38865713397468, scale:9027.977411},
						{level:17,resolution:1.19432856685505, scale:4513.988705},
						{level:18,resolution:0.597164283559817,scale:2256.994353}, //end
						{level:19,resolution:0.298582141647617,scale:1128.497176}
		          ]
		      });
		      
		      me.fullExtent = this.fullExtent = new esri.geometry.Extent({
		    	  xmin: 12728905.446270483,
		    	  ymin: 3409091.461517964,
		    	  xmax: 15766818.698435722,
		    	  ymax: 5441704.9176768325,
		          spatialReference: {
		        	  wkid: 102100
		          }
		      });
		      
		      /*
		      me.preExtent = this.preExtent = new esri.geometry.Extent({
		    	  xmin: 14163475.591159808,
		    	  ymin: 4187602.5961043965,
		    	  xmax: 14356096.90243836,
		    	  ymax: 4355764.058331704,
		          spatialReference: {
		        	  wkid: 102100
		          }
		      });
		      */
		      
		      me.maxExtent = this.maxExtent = new esri.geometry.Extent({
		    	  xmin: 13966268.058184147,
		    	  ymin: 4115904.663572936,
		    	  xmax: 14553304.43541402,
		    	  ymax: 4427461.990863165,
		          spatialReference: {
		        	  wkid: 102100
		          }
		      });
		      
		      me.minExtent = this.minExtent = new esri.geometry.Extent({
		    	  xmin: 14163475.591159808,
		    	  ymin: 4187602.5961043965,
		    	  xmax: 14356096.90243836,
		    	  ymax: 4355764.058331704,
		          spatialReference: {
		        	  wkid: 102100
		          }
		      });
		      
		      /*
		      me.initialExtent = this.initialExtent = new esri.geometry.Extent({
		    	  xmin: 12728905.446270483,
		    	  ymin: 3409091.461517964,
		    	  xmax: 15766818.698435722,
		    	  ymax: 5441704.9176768325,
		          spatialReference: {
		        	  wkid: 102100
		          }
		      });
		      */
		      
		      Ext.SetInitialExtent("_mapDiv_1");
		      
		      this.loaded = true;
		      this.onLoad(this);
		    },
		    getTileUrl: function(level, row, col) {
		    	var newrow = row + (Math.pow(2, level) * 47);
      			var newcol = col + (Math.pow(2, level) * 107);
		    	return "http://xdworld.vworld.kr:8080/2d/Base/201301/" + level + "/" + col + "/" + row + ".png";
		    }	
		  });
		var baseMap = new CustomMapsLayer();
		this.map.addLayer(baseMap);
	}
});