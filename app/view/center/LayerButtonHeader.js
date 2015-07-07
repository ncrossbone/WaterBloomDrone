var isHidden = false;

Ext.define('WaterBloomDrone.view.center.LayerButtonHeader', {
	
	extend: 'Ext.panel.Panel',
	id: 'LayerButtonHeader',
	xtype: 'layerbutton-header',
	
	height: 25,
	width: 105,
	
	title: '촬영일자 선택',
	header: false,
	
	layout: {
		type: 'fit',
		align: 'strech'
	},
	
	style: 'border:0px',
	
	items: [{
		xtype: 'image',
		id: 'imgHeader',
		style: 'border:0px',
		src: './resources/images/button/images01.gif',
		style: 'cursor:pointer;border:0px',
		listeners: {
	        el: {
	            click: function(){
	            	var ctlHeader = Ext.getCmp('imgHeader');
	            	var ctl = Ext.getCmp('LayerButtonPanel');
	            	if(isHidden == false){
	            		ctl.hide();
	            		isHidden = true;
	            		ctlHeader.setSrc('./resources/images/button/images01open.gif');
	            	}
	            	else{
	            		ctl.show();
	            		isHidden = false;
	            		ctlHeader.setSrc('./resources/images/button/images01.gif');
	            	}
	            }
	        }
	    }
	}],
	
	initComponent: function(){
		this.x = 0;
		this.y = -25;
		this.callParent();
	}
	
});