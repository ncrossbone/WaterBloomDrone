Ext.define('KRF_DEV.store.west.WestTabLayerStore1', {
	
	extend: 'Ext.data.TreeStore',

	autoLoad: true,

	proxy: {
		type: 'ajax',
		url: 'resources/data/west/WestTabLayerData1.json',
		reader: {
			type: 'json'
		}
	}
});
