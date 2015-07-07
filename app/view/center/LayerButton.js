var btn1Visible = true;
var btn2Visible = false;
var btn3Visible = false;
var btn4Visible = true;

function LayerOnOffBtn(me){
	//console.info(me);
	var tabID = 'DynamicLayer1';
	var activeLayer = me.map.getLayer(tabID);
	
	var layers = [];
	
	// 보 대표지점
	if(btn1Visible == true){
		Ext.getCmp('btn1').setSrc("./resources/images/button/images02on.gif");
		layers.push(2);
	}
	else{
		Ext.getCmp('btn1').setSrc("./resources/images/button/images02off.gif");
	}
	
	// 낙동강 대교
	if(btn2Visible == true){
		Ext.getCmp('btn2').setSrc("./resources/images/button/images03on.gif");
		layers.push(0);
	}
	else{
		Ext.getCmp('btn2').setSrc("./resources/images/button/images03off.gif");
	}
	
	// 행정구역
	if(btn3Visible == true){
		Ext.getCmp('btn3').setSrc("./resources/images/button/images04on.gif");
		//layers.push(4);
		layers.push(5);
		layers.push(6);
		layers.push(7);
	}
	else{
		Ext.getCmp('btn3').setSrc("./resources/images/button/images04off.gif");
	}
	
	// 녹조영상
	if(btn4Visible == true){
		Ext.getCmp('btn4').setSrc("./resources/images/button/images05on.gif");
		
		// store에서 변수 가져오기
        var store = Ext.create('WaterBloomDrone.store.AppVariable');
    	store.load(function(){
    		
    		this.each(function(record, cnt, totCnt){
    			//console.info(totCnt);
    			if(cnt > 0){
    				var layerDate = record.get('layerDate');
    				var layerId = record.get('layerId');
    				var ctlDate = Ext.getCmp('cboDate').value;
    				
    				if(layerDate == ctlDate){
    					layers.push(layerId);
    					//console.info(layers);
    				}
    			}
    			
    			if(totCnt == cnt + 1){
    				if(layers.length > 0)
    					activeLayer.setVisibility(true);
    				else
    					activeLayer.setVisibility(false);
    				
    				//console.info(layers);
    				activeLayer.setVisibleLayers(layers);
    			}
    		});
    	});
	}
	else{
		Ext.getCmp('btn4').setSrc("./resources/images/button/images05off.gif");
		
		if(layers.length > 0)
			activeLayer.setVisibility(true);
		else
			activeLayer.setVisibility(false);
		
		//console.info(layers);
		activeLayer.setVisibleLayers(layers);
	}
}

Ext.define('WaterBloomDrone.view.center.LayerButton', {
	
	extend: 'Ext.panel.Panel',
	id: 'LayerButtonPanel',
	xtype: 'layerbutton-panel',
	
	height: 100,
	width: 105,
	
	title: '촬영일자 선택',
	header: false,
	
	layout: {
		type: 'vbox'
	},
	
	style: 'border:0px',
	
	items: [{
		xtype: 'panel',
		header: false,
		layout: {
			type: 'hbox'
		},
		items: [{
			xtype: 'image',
			//text: '보',
			id: 'btn1',
			src: './resources/images/button/images02on.gif',
			style: 'cursor:pointer;border:0px;',
			listeners: {
		        el: {
		            click: function(){
		            	//console.info(WaterBloomDrone.getApplication().coreMap);
		            	if(btn1Visible == false)
		            		btn1Visible = true;
		            	else
		            		btn1Visible = false;
		            	
		            	LayerOnOffBtn(WaterBloomDrone.getApplication().coreMap);
		            }
		        }
		    },
			width: 50,
			height: 48
		}, {
			xtype: 'image',
			//text: '다리',
			id: 'btn2',
			src: './resources/images/button/images03off.gif',
			style: 'cursor:pointer; border:0px;',
			listeners: {
		        el: {
		        	click: function(){
		            	if(btn2Visible == false)
		            		btn2Visible = true;
		            	else
		            		btn2Visible = false;
		            	
		            	LayerOnOffBtn(WaterBloomDrone.getApplication().coreMap);
		            }
		        }
		    },
			width: 50,
			height: 48
		}]
	}, {
		xtype: 'panel',
		header: false,
		layout: {
			type: 'hbox'
		},
		items: [{
			xtype: 'image',
			//text: '행정경계',
			id: 'btn3',
			src: './resources/images/button/images04off.gif',
			style: 'cursor:pointer;border:0px;',
			listeners: {
		        el: {
		            click: function(){
		            	if(btn3Visible == false)
		            		btn3Visible = true;
		            	else
		            		btn3Visible = false;
		            	
		            	LayerOnOffBtn(WaterBloomDrone.getApplication().coreMap);
		            }
		        }
		    },
			width: 50,
			height: 48
		}, {
			xtype: 'image',
			//text: '항공사진',
			id: 'btn4',
			src: './resources/images/button/images05on.gif',
			style: 'cursor:pointer;border:0px;',
			listeners: {
		        el: {
		        	click: function(){
		            	if(btn4Visible == false)
		            		btn4Visible = true;
		            	else
		            		btn4Visible = false;
		            	
		            	LayerOnOffBtn(WaterBloomDrone.getApplication().coreMap);
		            }
		        }
		    },
			width: 50,
			height: 48
		}]
	}],
	
	initComponent: function(){
		this.x = 0;
		this.y = -27;
		this.callParent();
	}
	
});