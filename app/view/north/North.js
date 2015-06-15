Ext.define('KRF_DEV.view.north.North', {
	
	xtype: 'app-default-north',
	
	extend: 'Ext.panel.Panel',
	
	requires: [
	    'KRF_DEV.view.north.NorthController'
   ],
	
	controller: 'north',
	
	padding: 10,
	
	height: 50,
	
	padding: 0,
	
	layout: {
		type: 'hbox',
		align: 'stretch'
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
		width: 350,
		bind: {
			html: '<h2 align="center">{app_title}</h2>'
		}
	}, {
		xtype: 'container',
		layout: {
			type: 'hbox',
			align: 'middle',
			pack: 'end'
		},
		flex: 1,
		items: [{
			xtype: 'button',
			text: '지리정보',
			handler: 'onButtonClick',
			params: {title: '지리정보', contents: '지리정보 클릭', msgBox: 'alert'}
		}, {
			xtype: 'label',
			width: 10
		}, {
			xtype: 'button',
			text: 'DATA',
			handler: 'onButtonClick',
			params: {title: 'DATA', contents: 'DATA 클릭', msgBox: 'alert'}
		}, {
			xtype: 'label',
			width: 10
		}, {
			xtype: 'button',
			text: 'Logout',
			handler: 'onButtonClick',
			params: {title: 'Logout', contents: 'Logout Confirm?', msgBox: 'confirm'}
		}, {
			xtype: 'label',
			width: 10
		}]
	}]
  
});