/**
 * This example shows navigation tabs docked to the side.
 */
Ext.define('KRF_DEV.view.west.West', {
    extend: 'Ext.tab.Panel',
    
    xtype: 'app-default-waterbloom-west',
    
    requires: [
		'KRF_DEV.view.west.waterbloom.WestController'
	],
    
    controller: 'west-waterbloom',

    width: 300,

    tabPosition: 'left',
    tabRotation: 0,
    
    tabBar: {
        border: false
    },
    
    collapsible: true,
    collapsed: true,
    split: true,
    header: false,
    
    placeholder: {
    	lbar: [{
    		text: '주제도'
    	}]
    },

    defaults: {
        textAlign: 'center',
        bodyPadding: 5
    },

    items: [{
        title: '주제도',
        collapsible: true,
        items: [{
        	xtype: 'app-waterbloom-westTabLayer'
        }]
    }]
});