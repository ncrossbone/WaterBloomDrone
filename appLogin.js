/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
Ext.application({
    name: 'WaterBloomDrone',

    extend: 'WaterBloomDrone.Application',
    
    //autoCreateViewport: 'WaterBloomDrone.view.main.LoginBack',
    
    launch: function(){
    	
    	var layerInfo = Ext.create('WaterBloomDrone.store.LayerMapper');
    	layerInfo.load(function(){
    		this.each(function(record, cnt, totCnt){
        		if(record.get("layerBtnId") == "btnLogin"){
        			// 레이어 아이디 전역변수
    				Ext.loginLayerId = record.get("layerId");
        		}
        	});
    	});
    	
    	var appVariable = Ext.create('WaterBloomDrone.store.AppVariable');
    	appVariable.load(function(){
    		this.each(function(record, cnt, totCnt){
    			//console.info(totCnt);
    			if(cnt == 0){
    				// 맵 서비스 URL 전역변수
    				Ext.MapserviceUrl = record.get('MapserviceUrl1');
    			}
    		});
    	});
    	
    	// 암호화 function
    	Ext.Encrypt = function(encryptText){
    		output = new String;
    		Temp = new Array();
    		Temp2 = new Array();
    		TextSize = encryptText.length;
    		
    		for (i = 0; i < TextSize; i++) {
    			rnd = Math.round(Math.random() * 122) + 68;
    			Temp[i] = encryptText.charCodeAt(i) + rnd;
    			Temp2[i] = rnd;
    		}
    		
    		for (i = 0; i < TextSize; i++) {
    			output += String.fromCharCode(Temp[i], Temp2[i]);
    		}
    		
    		return output;
    	}
    	
    	// 복호화 function
    	Ext.Decrypt = function(decryptText){
    		output = new String;
    		Temp = new Array();
    		Temp2 = new Array();
    		TextSize = decryptText.length;
    		
    		for (i = 0; i < TextSize; i++) {
    			Temp[i] = decryptText.charCodeAt(i);
    			Temp2[i] = decryptText.charCodeAt(i + 1);
    		}
    		
    		for (i = 0; i < TextSize; i = i+2) {
    			output += String.fromCharCode(Temp[i] - Temp2[i]);
    		}
    		
    		return output;
    	};
    	
    	Ext.create('WaterBloomDrone.view.main.LoginBack').show();
    	
    	//Ext.create('WaterBloomDrone.view.main.Login').show();
    }
});
