Ext.define('WaterBloomDrone.view.center.SelectDate', {
	
	extend: 'Ext.panel.Panel',
	id: 'SelectDatePanel',
	xtype: 'selectdate-panel',
	
	height: 24,
	width: 150,
	
	title: '촬영일자 선택',
	header: false,
	
	controller: 'selectdatecontroller',
	
	layout: {
		type: 'hbox'
	},
	
	//x: 500,
	//y: 500,
	
	items: [{
		xtype: 'image',
		//text: '테스트',
		src: './resources/images/button/reset.png',
		style: 'cursor:pointer;border:0px;',
		listeners: {
	        el: {
	            click: 'onClickFullExtent'
	        }
	    },
		width: 20,
		height: 20
	}, {
		xtype: 'combo',
		id: 'cboDate',
		value: '2015-06-23',
		editable: false,
		store: ['촬영일자선택', '2015-06-23'],
		format: 'Y-m-d',
		width: 128,
		listeners: {
	        change: function (field, newValue, oldValue) {
	        	LayerOnOffBtn(WaterBloomDrone.getApplication().coreMap);
	        },
	        scope: this
	    }
	}],
	
	initComponent: function(){
		this.x = Ext.getBody().getViewSize().width - 130 - 20;
		this.y = 0;
		this.callParent();
	}
	
});

Ext.on('resize', function(){
var ctl = Ext.getCmp('SelectDatePanel');
    
    if(ctl == undefined)
    	return;

    ctl.setX(Ext.getBody().getViewSize().width - 130 - 20, false);
    ctl.setY(0, false);
});