Ext.define("WaterBloomDrone.view.main.LoginBack", {
	extend: 'Ext.window.Window',
	
	//renderTo: Ext.getBody(),
	
	header: false,
	//border: 0,
	
	bodyStyle: 'background:url("./resources/images/button/LoginBg.jpg") no-repeat;',
	//padding: '20 0 0 0',
	width: 363,
	height: 378,
	bodyPadding: '128 0 0 27',
	
	initComponent: function(){
		this.callParent();
		this.add(Ext.create('WaterBloomDrone.view.main.Login', {
			width: 300
		}));
	}
});