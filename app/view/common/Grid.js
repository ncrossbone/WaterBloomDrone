Ext.define('KRF_DEV.view.common.Grid', {
	extend : 'Ext.grid.Panel',
	
	xtype: 'app-common-grid',
	
	//plugins: 'gridfilters',
	
	id: 'grid-tab-2',
	
	title: '위젯그리드탭테스트',
	//store: Ext.create('KRF_DEV.store.west.WestTabSearch_ADM_GRID'),
	
	columns: [{ text      : 'id',  dataIndex : 'id' },
	          { text      : 'name', dataIndex : 'name' }],
	
	height: 200,
	
	scroll: false,
	viewConfig: {
		style: { overflow: 'auto', overflowX: 'hidden' }
	},
	
	initComponent: function(){
		this.store = Ext.create('KRF_DEV.store.west.WestTabSearch_ADM_GRID');
		//this.height = 300;
		//console.info(this.findParentByType('panel').width);
		this.callParent();
	},
	
	afterrender: function(){
		//console.info(this.findParentByType('window').height);
		//console.info(this.height);
	}
});