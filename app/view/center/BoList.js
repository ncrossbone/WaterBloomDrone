Ext.define('WaterBloomDrone.view.center.BoList', {
	extend : 'Ext.window.Window',
	//extend : 'Ext.panel.Panel',
	
	xtype : 'center-BoList',
	
	id: 'BoList',
	
	//params: this.record,
	
	//title: '지점 목록',
	
	title: '지점 목록',
	
	//cls: 'khLee-window-panel-header khLee-x-window-default khLee-x-grid-locked ',
	//bodyStyle: 'border: 0px;',
	
	layout: {
		type: 'fit'
	},
	
	width: 450,
	height: 305,

	items: [{
		xtype: 'grid',
		id: 'BoListTest',
		plugins: 'gridfilters',
		cls: 'khLee-x-column-header-text',
		height: 215,
		header: {
		height: 5
		},
		filter: {
	            value:1,    // 0 is false, 1 is true
	            active:true // turn on the filter
	        },
		title: '검색결과',
		header: false,
		//store: Ext.create('WaterBloomDrone.store.FeatureStoreLayerAdmin2'),
		
		columns: [{
			text      : '지점명',
			dataIndex : 'layerNm',
			//menuDisabled: true,
			//width: 150
			width: "100%",
			listeners: {
				'click': function(tblView, el, rowCnt, colCnt, row){
					var x = row.record.data.tmX;
					var y = row.record.data.tmY;
					
					var waterName = row.record.data.level;
					
					Ext.setCenter(x,y,waterName);
				}
			}
		}]
	}],
    
    initComponent: function(){
    	console.info("!!");
    	this.callParent();}
});