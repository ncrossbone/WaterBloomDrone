Ext.define('WaterBloomDrone.view.main.Main', {
    extend: 'Ext.container.Container',
    
    requires: [
        'WaterBloomDrone.view.north.North',
        'WaterBloomDrone.view.center.Center'
    ],
    
    //renderTo: Ext.getCmp('formcom').getEl(),

    xtype: 'app-main',
    
    id: 'ctlMain',

    layout: {
        type: 'border'
    },
    width: '100%',
    height: '100%',
    
    items: [{
    	xtype: 'app-default-north',
    	region: 'north',
    	id: 'app_north_container',
    	cls: 'khLee-x-panel-body-default',
    }, {
    	xtype: 'app-default-center',
    	region: 'center',
    	id: 'app_center_container',
    	cls: 'khLee-x-panel-body-default'
    }],

    initComponent: function(){
    	
    	/* 로그인 로직 제거 요청에 의해 주석 */
    	/*
    	var me = this;
    	//var chkSession = false;
    	var bodyId = Ext.getBody().id;
    	
		// 세션 체크
		Ext.Ajax.request({
    		url: './resources/jsp/sessionMng.jsp',    // To Which url you wanna POST.
    		success : function(response, opts) {
    			//alert(response.responseText.trim());
    			if(response.responseText.trim() == "false")
    				window.location = './index.html';
    		},
    		failure: function(form, action) {
    			chkSession = false;
    			alert("오류가 발생하였습니다.");
    			return;
    		}
    	});
    	*/
    	this.callParent();
    }
});
