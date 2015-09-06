Ext.define('WaterBloomDrone.view.north.North', {
	
	extend: 'Ext.panel.Panel',
	
	xtype: 'app-default-north',
	
	layout: {
		type: 'hbox'
	},
	
	height: 38,
	border: 0,
	
	bodyStyle:{"background-color":"#ececec", "border-color":"#929292"},
	
	items: [{
		xtype: 'image',
		//text: '낙동강수계',
		id: 'btnTab1',
		src: './resources/images/button/tap_01_ov.png',
		style: 'cursor:pointer;border:0px;',
		listeners: {
	        el: {
	            click: function(){
	            	var btnTab1 = Ext.getCmp('btnTab1');
	            	btnTab1.setSrc("./resources/images/button/tap_01_ov.png");
	            	var btnTab2 = Ext.getCmp('btnTab2');
	            	btnTab2.setSrc("./resources/images/button/tap_02_off.png");
	            	var btnTab3 = Ext.getCmp('btnTab3');
	            	btnTab3.setSrc("./resources/images/button/tap_03_off.png");
	            	
	            	var tabCtl = Ext.getCmp('app_center_container');
	            	//console.info(tabCtl);
	            	tabCtl.setActiveTab(0);
	            }
	        }
	    },
	    height: 38,
	    width: 147
	}, {
		xtype: 'image',
		//text: '북한강수계',
		id: 'btnTab2',
		src: './resources/images/button/tap_02_off.png',
		style: 'cursor:pointer;border:0px;',
		listeners: {
	        el: {
	            click: function(){
	            	var btnTab1 = Ext.getCmp('btnTab1');
	            	btnTab1.setSrc("./resources/images/button/tap_01_off.png");
	            	var btnTab2 = Ext.getCmp('btnTab2');
	            	btnTab2.setSrc("./resources/images/button/tap_02_ov.png");
	            	var btnTab3 = Ext.getCmp('btnTab3');
	            	btnTab3.setSrc("./resources/images/button/tap_03_off.png");
	            	
	            	var tabCtl = Ext.getCmp('app_center_container');
	            	tabCtl.setActiveTab(1);
	            }
	        }
	    },
	    height: 38,
	    width: 147
	}, {
		xtype: 'image',
		//text: '금강수계',
		id: 'btnTab3',
		src: './resources/images/button/tap_03_off.png',
		style: 'cursor:pointer;border:0px;',
		listeners: {
	        el: {
	            click: function(){
	            	var btnTab1 = Ext.getCmp('btnTab1');
	            	btnTab1.setSrc("./resources/images/button/tap_01_off.png");
	            	var btnTab2 = Ext.getCmp('btnTab2');
	            	btnTab2.setSrc("./resources/images/button/tap_02_off.png");
	            	var btnTab3 = Ext.getCmp('btnTab3');
	            	btnTab3.setSrc("./resources/images/button/tap_03_ov.png");
	            	
	            	var tabCtl = Ext.getCmp('app_center_container');
	            	tabCtl.setActiveTab(2);
	            }
	        }
	    },
	    height: 38,
	    width: 147
	}]
});