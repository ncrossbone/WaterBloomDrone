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
    		text: '검색조건'
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
        	xtype: 'app-westTabLayer'
        }]
    }, {
        title: '위치검색',
        items: [{
        	xtype: 'button',
			text: '그리드 탭',
			params: {
				xtype: 'app-common-grid_test',
				id: 'grid-tab-1',
				title: '위젯그리드탭테스트',
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
			text: '차트 탭',
			params: {
				xtype: 'app-common-grid',
				id: 'chart-tab-1',
				title: '차트테스트'
			},
			handler: 'onClickButton'
        }]
    }, {
        title: '검색조건',
        collapsible: true,
        layout: {
        	type: 'accordion',
        	fill: true,
        	titleCollapse: true,
        	multi: false,
        	animate: true
        },
        items: [{
        	title: '영향권역',
        	html: '영향권역 Contents',
        	collapsed: true
        }, {
        	title: '권역검색결과',
        	html: '권역검색결과 Contents',
        	collapsed: true
        }, {
        	title: '사용자검색',
        	html: '사용자검색 Contents',
        	collapsed: true
        }, {
        	title: '검색결과리스트',
        	html: '검색결과리스트 Contents',
        	collapsed: true
        }, {
        	title: '행정구역검색',
        	//html: '행정구역검색 Contents',
        	xtype: 'app-westTabSearch_ADM',
        	collapsed: true
        }]
    }]
});