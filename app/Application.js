/**
 * The main application class. An instance of this class is created by app.js when it calls
 * Ext.application(). This is the ideal place to handle application launch and initialization
 * details.
 */
Ext.define('KRF_DEV.Application', {
    extend: 'Ext.app.Application',
    
    name: 'KRF_DEV',
    
    stores: [
 		'KRF_DEV.store.dev_test.GridStoreTest',
 		'KRF_DEV.store.dev_test.WestTabLayerStore'
 	]
});
