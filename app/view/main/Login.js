Ext.define("WaterBloomDrone.view.main.Login", {
	extend: 'Ext.panel.Panel',
	alias: 'widget.login',
	requires: ['Ext.form.Panel'],
	xtype: 'app-login',
	
	title: 'Login',
	closable: false,
	modal: true,
	
	/*
	header: false,
	border: 0,
	
	bodyStyle: 'background:url("./resources/images/button/LoginBg.jpg") no-repeat;',
	width: 650,
	height: 328,
	*/

    initComponent: function() {
        var me = this;

        me.items = [{
            xtype: 'form',

            bodyPadding: 10,
            items: [{
                xtype: 'textfield',
                id: 'username',
                name: 'username',
                fieldLabel: 'Username'
                //allowBlank: false,
                //'inputAttrTpl': ['autocomplete="on"']
            }, {
                xtype: 'textfield',
                inputType: 'password',
                id: 'password',
                name: 'password',
                fieldLabel: 'Password'
                //allowBlank: false,
                //'inputAttrTpl': ['autocomplete="on"']
            }],


            buttons: [{
                itemId: 'loginButton',
                id: 'btnLogin',
                type: 'submit',
                text: 'Login',
                formBind: true,
                handler: function() {
                	
    				//console.info(Ext.MapserviceUrl);
    				//return;
    				var queryTask = new esri.tasks.QueryTask(Ext.MapserviceUrl + "/" + Ext.loginLayerId);
                	//var queryTask = new esri.tasks.QueryTask(Ext.MapserviceUrl + "/15");
            		var query = new esri.tasks.Query();
            		query.returnGeometry = true;
            		query.outSpatialReference = {"wkid":102100};
            		var id = Ext.getCmp('username').getValue();
            		var pw = Ext.getCmp('password').getValue();
            		//console.info(id + ", " + pw);
            		query.where = "ID = '" + id + "'";
            		query.outFields = ["*"];
            		queryTask.execute(query,  function(results){
            			//console.info(results.features.length);
            			
            			if(results.features.length == 0){
            				alert("id가 존재하지 않습니다.");
            				return;
            			}
            			
            			Ext.each(results.features, function(obj, index) {
            				//console.info(obj.attributes.ID);
            				//console.info(obj.attributes.PW);
            				decPw = Ext.Decrypt(obj.attributes.PW); // 패스워드 복호화
            				//alert(decPw);
            				if(pw != decPw){
            				//if(pw != obj.attributes.PW){
            					alert("password가 일치하지 않습니다.");
            					return;
            				}
            				
            				Ext.Ajax.request({
                        		url: './resources/jsp/main.jsp',    // To Which url you wanna POST.
                        		success : function(response, opts) {
                        			//alert(response.responseText);
                        			if(response.responseText.trim() == 'success')
                        				window.location = './main.html';
                        		},
                        		failure: function(form, action) {
                        			alert(form.responseText);
                        			alert("오류가 발생하였습니다.");
                        		},
                        		params: { id: id, pw: pw }  // Put your json data here or just enter the JSON object you wannat post
                        	});
            			});
            		});
            		
            		dojo.connect(queryTask, "onError", function(err) {
            			console.info(err);
            		});
                	
                }
            }, {
                itemId: 'resetButton',
                text: 'Reset',
                handler: function(btn) {
                    btn.up('form').getForm().reset();
                }
            }]
        }]

        me.callParent(arguments);
    }
});