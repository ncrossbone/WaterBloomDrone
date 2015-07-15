var btn1Visible = true;
var btn2Visible = false;
var btn3Visible = false;
var btn4Visible = true;
var btn5Visible = false;
var btn6Visible = false;

function LayerOnOffBtn(me, tabId){
	if(me.map == null)
		return;
	
	console.info(me.map);
	console.info(tabId);
	var activeLayer = me.map.getLayer(tabId);
	var layers = [];
	
	// 보 대표지점
	if(btn1Visible == true){
		Ext.getCmp('btn1').setSrc("./resources/images/button/images02on.gif");
		layers.push(4);
	}
	else{
		Ext.getCmp('btn1').setSrc("./resources/images/button/images02off.gif");
	}
	
	// 낙동강 대교
	if(btn2Visible == true){
		Ext.getCmp('btn2').setSrc("./resources/images/button/images03on.gif");
		layers.push(2);
	}
	else{
		Ext.getCmp('btn2').setSrc("./resources/images/button/images03off.gif");
	}
	
	// 행정구역
	if(btn3Visible == true){
		Ext.getCmp('btn3').setSrc("./resources/images/button/images04on.gif");
		//layers.push(4);
		layers.push(6);
		layers.push(7);
		layers.push(8);
		layers.push(9);
	}
	else{
		Ext.getCmp('btn3').setSrc("./resources/images/button/images04off.gif");
	}
	
	// 취수장
	if(btn5Visible == true){
		Ext.getCmp('btn5').setSrc("./resources/images/button/images06on.gif");
		layers.push(1);
	}
	else{
		Ext.getCmp('btn5').setSrc("./resources/images/button/images06off.gif");
	}
	
	// 정수장
	if(btn6Visible == true){
		Ext.getCmp('btn6').setSrc("./resources/images/button/images07on.gif");
		layers.push(0);
	}
	else{
		Ext.getCmp('btn6').setSrc("./resources/images/button/images07off.gif");
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
    				
    				var ctlDate = Ext.getCmp('cboDate1').value;
    				
    				if(layerDate == ctlDate){
    					layers.push(layerId);
    				}
    				
    				ctlDate = Ext.getCmp('cboDate2').value;
    				
    				if(layerDate == ctlDate){
    					layers.push(layerId);
    				}
    			}
    			
    			if(totCnt == cnt + 1){
    				if(layers.length > 0)
    					activeLayer.setVisibility(true);
    				else
    					activeLayer.setVisibility(false);
    				
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
		
		activeLayer.setVisibleLayers(layers);
	}
}

Ext.define('WaterBloomDrone.view.center.LayerButton', {
	
	extend: 'Ext.panel.Panel',
	id: 'LayerButtonPanel',
	xtype: 'layerbutton-panel',
	
	height: 148,
	width: 100,
	
	title: '촬영일자 선택',
	header: false,
	//floating: true,
	
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
		            	
		            	if(btn1Visible == false)
		            		btn1Visible = true;
		            	else
		            		btn1Visible = false;
		            	
		            	LayerOnOffBtn(Ext.getCmp('_mapDiv_1'), "DynamicLayer1");
		            	LayerOnOffBtn(Ext.getCmp('_mapDiv_2'), "DynamicLayer2");
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
		            	
		            	LayerOnOffBtn(Ext.getCmp('_mapDiv_1'), "DynamicLayer1");
		            	LayerOnOffBtn(Ext.getCmp('_mapDiv_2'), "DynamicLayer2");
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
		            	
		            	LayerOnOffBtn(Ext.getCmp('_mapDiv_1'), "DynamicLayer1");
		            	LayerOnOffBtn(Ext.getCmp('_mapDiv_2'), "DynamicLayer2");
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
		            	
		            	LayerOnOffBtn(Ext.getCmp('_mapDiv_1'), "DynamicLayer1");
		            	LayerOnOffBtn(Ext.getCmp('_mapDiv_2'), "DynamicLayer2");
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
			//text: '취수장',
			id: 'btn5',
			src: './resources/images/button/images06off.gif',
			style: 'cursor:pointer;border:0px;',
			listeners: {
		        el: {
		            click: function(){
		            	if(btn5Visible == false)
		            		btn5Visible = true;
		            	else
		            		btn5Visible = false;
		            	
		            	LayerOnOffBtn(Ext.getCmp('_mapDiv_1'), "DynamicLayer1");
		            	LayerOnOffBtn(Ext.getCmp('_mapDiv_2'), "DynamicLayer2");
		            }
		        }
		    },
			width: 50,
			height: 48
		}, {
			xtype: 'image',
			//text: '정수장',
			id: 'btn6',
			src: './resources/images/button/images07off.gif',
			style: 'cursor:pointer;border:0px;',
			listeners: {
		        el: {
		        	click: function(){
		            	if(btn6Visible == false)
		            		btn6Visible = true;
		            	else
		            		btn6Visible = false;
		            	
		            	LayerOnOffBtn(Ext.getCmp('_mapDiv_1'), "DynamicLayer1");
		            	LayerOnOffBtn(Ext.getCmp('_mapDiv_2'), "DynamicLayer2");
		            }
		        }
		    },
			width: 50,
			height: 48
		}]
	}]
	
});