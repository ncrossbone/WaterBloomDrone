Ext.define('WaterBloomDrone.view.center.PopupManual', {
	
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
	
	cls: 'khLee-x-popupmanual',
	
	items: [{
		xtype: 'image',
		id: 'img',
		src: './resources/images/button/Untitled-4.png',
		style: 'border:0px;',
		height: 479,
		width: 285,
		listeners: {
	        el: {
	        	click: function(){
	            	var ctl = Ext.getCmp('PopupManualPanel');
	            	ctl.hide();
	            }
	        }
	    }
	}, {
		xtype: 'image',
		src: './resources/images/button/close.png',
		x: 240,
		y: 8,
		width: 25,
		height: 25,
		style: 'cursor:pointer;border:0px;',
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