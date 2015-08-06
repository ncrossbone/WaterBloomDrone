Ext.define('WaterBloomDrone.store.LayerMapper', {
	
	extend: 'Ext.data.Store',

	autoLoad: true,
	
	fields: [{
		name: 'layerId'
	}, {
		name: 'layerName'
	}, {
		name: 'layerType'
	}, {
		name: 'layerDate'
	}, {
		name: 'layerBtnId'
	}, {
		name: 'defaultImg'
	}, {
		name: 'layerArea'
	}, {
		name: 'defaultOn'
	}],

	proxy: {
		type: 'ajax',
		url: './resources/data/LayerMapper.json',
		reader: {
			type: 'json'
		}
	}
});
