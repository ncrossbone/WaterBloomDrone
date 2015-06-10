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
			src: '{nier_logo}' // 좌측 상단 logo bind, MainModel data에 정의된놈 갔다쓰기 bind{...}
		}
	}, {
		xtype: 'container',
		width: 350,
		bind: {
			html: '<h2 align="center">{app_title}</h2>'
		}
	}, {
		xtype: 'container',
		//layout: 'fit',
		//layout: 'card',
		layout: {
			type: 'hbox',
			align: 'middle', // hbox일때 vertical "begin", "middle", "end", "stretch", "stretchmax"
			pack: 'end' // hbox일때 horizontal "start", "center", "end"
		},
		flex: 1,
		defaults: {
			//border: 0,
			//style: 'background-color:white;background-image:none;'
		},		
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