Ext.define('KRF_DEV.store.dev_test.WestTabLayerStore', {
	
	extend: 'Ext.data.TreeStore',

	autoLoad: true,

	proxy: {
		type: 'ajax',
		url: 'resources/data/WestTabLayerData.json',
		reader: {
			type: 'json'
		}
	}
});
