Ext.define('KRF_DEV.view.north.North', {
	
	xtype: 'app-default-waterbloom-north',
	
	extend: 'Ext.panel.Panel',
	
	requires: [
	    'KRF_DEV.view.north.waterbloom.NorthController'
   ],
	
	controller: 'north-waterbloom',
	
	padding: 10,
	
	height: 50,
	
	padding: 0,
	
	layout: {
		type: 'hbox',
		align: 'stretch',
		pack: 'stretch'
	},
	
	items: [{
		xtype: 'image',
		width: 180,
		padding: '5 10 5 10',
		bind: {
			src: '{nier_logo}'
		}
	}, {
		xtype: 'container',
		layout: {
			type: 'fit',
			align: 'center',
			pack: 'center'
		},
		width: 350,
		bind: {
			html: '<h1 align="center">녹조항공사진</h1>'
		}
	}]
  
});