/**
 * This example shows navigation tabs docked to the side.
 */
Ext.define('KRF_DEV.view.west.West', {
    extend: 'Ext.tab.Panel',
    
    xtype: 'app-default-west',
    
    requires: [
		'KRF_DEV.view.west.WestController'
	],
    
    controller: 'west',

    width: 300,

    tabPosition: 'left',
    tabRotation: 0,
    
    tabBar: {
        border: false
    },
    
    collapsible: true,
    split: true,
    header: false,
    
    placeholder: {
    	lbar: [{
    		text: '주제도'
    	}, {
    		text: '위치검색'
    	}, {
    		text: '레이어'
    	}]
    },

    defaults: {
        textAlign: 'center',
        bodyPadding: 5
    },

    items: [{
        title: '주제도',
        collapsible: true,
        layout: {
        	type: 'accordion',
        	fill: true,
        	titleCollapse: true,
        	multi: false,
        	animate: true
        },
        items: [{
        	title: '하천망분석도',
        	html: '하천망 분석도 Contents',
        	collapsed: true
        }, {
        	title: '측정지점',
        	html: '측정지점 Contents',
        	collapsed: true
        }, {
        	title: '환경기초시설',
        	html: '환경기초시설 Contents',
        	collapsed: true
        }, {
        	title: '주제도',
        	html: '주제도 Contents',
        	collapsed: true
        }, {
        	title: '유역도',
        	html: '유역도 Contents',
        	collapsed: true
        }, {
        	title: '행정구역도',
        	html: '행정구역도 Contents',
        	collapsed: true
        }, {
        	title: '하천도',
        	html: '하천도 Contents',
        	collapsed: true
        }]
    }, {
        title: '위치검색',
        items: [{
        	xtype: 'button',
			text: '그리드 탭',
			params: {
				xtype: 'app-common-grid',
				id: 'grid-tab-1',
				title: '위젯그리드탭테스트',
				store: 'KRF_DEV.store.dev_test.GridStoreTest',
				columns: [{ text      : 'Name2',  dataIndex : 'name', filter: {type: 'string', itemDefaults: {emptyText: 'Search for...'}} },
				          { text      : 'Email', dataIndex : 'email', flex : 1 },
				          { text      : 'Phone', dataIndex : 'phone' },
				          {
				        	  text     : 'Progress',
					          xtype    : 'widgetcolumn',
					          width    : 120,
					          dataIndex: 'progress',
					          widget: {
					              xtype: 'progressbarwidget',
					              textTpl: [
					                  '{percent:number("0")}% done'
					              ]
					          }
				          },
				          {
				              text: 'Line',
				              width: 100,
				              dataIndex: 'chartvalues',
				              xtype: 'widgetcolumn',
				              widget: {
				                  xtype: 'sparklineline',
				                  tipTpl: 'Value: {y:number("0.00")}'
				              }
				          }],
				height: '100%'
			},
			handler: 'onClickButton'
        }, {
        	xtype: 'button',
			text: '패널 탭',
			params: {xtype: 'panel', id: 'panel-tab-1', title: '패널탭테스트'},
			handler: 'onClickButton'
        }, {
        	xtype: 'button',
			text: '그리드 탭',
			params: {xtype: 'app-common-grid', id: 'grid-tab-2', title: '그리드2테스트'},
			handler: 'onClickButton'
        }]
    }, {
        title: '레이어',
        items: [{
        	xtype: 'app-westTabLayer'
        }]
    }]
});