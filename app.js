function Encrypt(theText) {
	output = new String;
	Temp = new Array();
	Temp2 = new Array();
	TextSize = theText.length;
	
	for (i = 0; i < TextSize; i++) {
		rnd = Math.round(Math.random() * 122) + 68;
		Temp[i] = theText.charCodeAt(i) + rnd;
		Temp2[i] = rnd;
	}
	
	for (i = 0; i < TextSize; i++) {
		output += String.fromCharCode(Temp[i], Temp2[i]);
	}
	
	return output;
}

function Decrypt(theText) {
	output = new String;
	Temp = new Array();
	Temp2 = new Array();
	TextSize = theText.length;
	
	for (i = 0; i < TextSize; i++) {
		Temp[i] = theText.charCodeAt(i);
		Temp2[i] = theText.charCodeAt(i + 1);
	}
	
	for (i = 0; i < TextSize; i = i+2) {
		output += String.fromCharCode(Temp[i] - Temp2[i]);
	}
	
	return output;
}

/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
Ext.application({
    name: 'WaterBloomDrone',

    extend: 'WaterBloomDrone.Application',
    
    autoCreateViewport: 'WaterBloomDrone.view.main.Main',
	
    //-------------------------------------------------------------------------
    // Most customizations should be made to WaterBloomDrone.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------
    launch: function(){
    	//console.info("dd");
    }
});
