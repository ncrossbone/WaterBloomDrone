Ext.define('KRF_DEV.store.west.WestTabLayerStore1', {
	
	extend: 'Ext.data.TreeStore',

	autoLoad: true,

	proxy: {
		type: 'ajax',
		//url: 'resources/data/west/WestTabLayerData1.json',
		url: 'resources/data/west/WestTabLayerData2.json',
		reader: {
			type: 'json'
		}
	}
	
	/*
	constructor: function(){
		console.log("dd");
		this.callParent();
	},
	
	listeners: {
		// beforeload, load, afterload
		beforeload: function(store) {
			var queryTask = new esri.tasks.QueryTask('http://fireftp.iptime.org:6080/arcgis/rest/services/reach/MapServer/'); // 레이어 URL
			var query = new esri.tasks.Query();
			query.returnGeometry = false;
			query.where = "1=1";
			query.outFields = ["*"];
			
			var resultLayer = [];
			
			queryTask.execute(query,  function(results){
				
				console.info(results.layers);
				
				Ext.each(results.layers, function(objLayer, idx, objLayers){
					
					var children = [];
					
					if(objLayer.subLayerIds != null){
						
						if(objLayer.subLayerIds.length > 0){
							for(i = 0; i < objLayer.subLayerIds.length; i++){
								children.push({
									id: objLayers[objLayer.subLayerIds[i]].id,
									text: objLayers[objLayer.subLayerIds[i]].name,
									leaf: true,
									checked: false
								});
							}
						}
						
						resultLayer.push({
							id: objLayer.id,
							text: objLayer.name,
							expanded: true,
							checked: false,
							children: children
						});
						
					}
					
					console.info(idx);
					
				});
				
				console.info(resultLayer);

				//resultLayer = results.layers;
				
				store.setData(resultLayer);
				
			});
			
			dojo.connect(queryTask, "onError", function(err) {
				alert(err);
			});
        }
    }
    */
});
