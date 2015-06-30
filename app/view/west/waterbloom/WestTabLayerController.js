Ext.define('KRF_DEV.view.west.waterbloom.WestTabLayerController', {
	
	extend: 'Ext.app.ViewController',

	alias: 'controller.westTabLayerController-waterbloom',

	control: {
		'treepanel': {
			checkchange: 'onCheckChanged'
		}
	},
	
	onCheckChanged: function(node, checked) {
		// view.west.WestTabLayer id로 활성화된 탭 id가져옴
		// var tabID = Ext.getCmp('westTabLayer-waterbloom').getActiveTab().id;
		var tabID = "DynamicLayer1";
//console.info(this.getView().getChecked());
		if(!node.get('leaf')) {
			this.checkAllChildren(node, checked, tabID);
		}else{
			KRF_DEV.getApplication().fireEvent('dynamicLayerOnOff', this.getView().getChecked(), tabID);
		}
	},
	
	checkAllChildren: function(node, checked, tabID) {
		var me = this;
		var children = node.childNodes;
		Ext.each(children, function(child, index, eObjs) {
			child.set('checked', checked);
			if(index==children.length-1){
				KRF_DEV.getApplication().fireEvent('dynamicLayerOnOff', me.getView().getChecked(), tabID);
			}
		});
	}
});
