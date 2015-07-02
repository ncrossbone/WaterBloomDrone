var btn1Visible = false;
var btn2Visible = false;
var btn3Visible = false;
var btn4Visible = false;

function LayerOnOff(layers, visibled){
	//var me = this; // 핸들러 추가 시 보낸 파라메터값으로 사용가능
	var me = KRF_DEV.getApplication().coreMap; // CoreMap에서 설정한 값으로 사용 가능
	
	//console.info(KRF_DEV.getApplication().coreMap.map);
	var tabID = "DynamicLayer1";
	
	var activeLayer = me.map.getLayer(tabID);
	
	activeLayer.setVisibleLayers([]);
	
	if(visibled == true)
		activeLayer.setVisibleLayers(layers);
}

Ext.define('KRF_DEV.view.center.waterbloom.PopupManual', {
	
	extend: 'Ext.panel.Panel',
	id: 'PopupManualPanel',
	xtype: 'popupmanual-panel',
	
	height: 549,
	width: 285,
	
	title: '설명',
	header: false,
	
	layout: {
		type: 'absolute',
		align: 'right'
	},
	
	bodyStyle: 'background-color: transparent !important',
	
	//x: 500,
	//y: 500,
	
	items: [{
		xtype: 'image',
		id: 'img',
		src: './resources/images/button/Untitled-4.png',
		border: 0,
		height: 549,
		width: 285
	}, {
		xtype: 'image',
		src: './resources/images/button/close.png',
		x: 247,
		width: 25,
		height: 25,
		style: 'cursor:pointer;',
		border: 0,
		listeners: {
	        el: {
	        	click: function(){
	            	var ctl = Ext.getCmp('PopupManualPanel');
	            	ctl.hide();
	            }
	        }
	    }
	}],
	
	initComponent: function(){
		this.x = 0;
		this.y = -150;
		this.callParent();
	}
	
});