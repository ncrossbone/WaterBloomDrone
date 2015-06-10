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

    //height: '100%',
    width: 300,

    //ui: 'navigation',
    tabPosition: 'left',
    tabRotation: 0, // tab title rotation 0: 0, 1: 90, 2: 270
    
    tabBar: {
        // turn off borders for classic theme.  neptune and crisp don't need this
        // because they are borderless by default
        border: false
    },
    
    // collapsible, split, header 아래와 같이 설정 시 splitter를 통해서 collapse, expand
    collapsible: true, // collapse, expand 아이콘 표시
    split: true, // splitter 표시
    header: false, // 헤더(title부분) 표시 안함
    
    // placeholder : collapsed 시 헤더 타이틀 나오는 부분
    placeholder: {
    	lbar: [{
    		text: '주제도'
    	}, {
    		text: '위치검색'
    	}, {
    		text: '영향권역'
    	}]
    	//hidden: true // 숨김
    },
    
    clickedPanel: null,

    defaults: {
        textAlign: 'center',
        bodyPadding: 5
        //closable: true,
    },

    items: [{
        title: '주제도',
        collapsible: true,
        layout: {
        	type: 'accordion',
        	fill: true,
        	titleCollapse: true,
        	//expandedItem: -1,
        	multi: false,
        	animate: true
        	//activeOnTop: true
        },
        //glyph: 72,
        //html: "KitchenSink.DummyText.longText"
        items: [{
        	title: '하천망분석도',
        	//collapsible: true,
        	html: '하천망 분석도 Contents',
        	collapsed: true,
        	/*
        	listeners: {
        		render: function(panel, eOpts){
        			panel.header.on('click', function(ctl){
        				console.info(panel.expandDirection);
        				//clickedPanel = panel;
        				//ctl.findParentByType('panel').collapse();
        				//ctl.findParentByType('panel').findParentByType('panel').expand();
        				//return false;
        			});
        		},
        		//click: function(){alert("test");},
        		expand: function(panel, eOpts){
        			//return false;
            		//alert("측정지점 expand");
            		var parentCtl = panel.findParentByType('panel');
    				console.info(panel);
    				//console.info(clickedPanel);
    				//if(clickedPanel == null || clickedPanel != panel)
    				//	panel.collapse();
            	}
            }
            */
        }, {
        	title: '측정지점',
        	//collapsible: true,
        	html: '측정지점 Contents',
        	collapsed: true,
        	/*
        	listeners: {
        		afterrender: function(panel, eOpts){
        			panel.header.on('click', function(ctl){
        				console.info(panel);
        				//clickedPanel = panel;
        			});
        		},
        		expand: function(panel, eOpts){
            		//alert("측정지점 expand");
            		var parentCtl = panel.findParentByType('panel');
    				console.info(panel);
    				//console.info(clickedPanel);
    				//if(clickedPanel == null || clickedPanel != panel)
    					panel.collapse();
    				
    				//return false;
            	}
            }
            */
        }, {
        	title: '환경기초시설',
        	//collapsible: true,
        	html: '환경기초시설 Contents',
        	collapsed: true/*,
        	listeners: {
        		expand: function(comp, eOpts){
            		alert("환경기초시설 expand");
            		comp.collapse();
            	}
            }*/
        }, {
        	title: '주제도',
        	//collapsible: true,
        	html: '주제도 Contents',
        	collapsed: true/*,
        	listeners: {
        		expand: function(comp, eOpts){
            		alert("주제도 expand");
            		comp.collapse();
            	}
            }*/
        }, {
        	title: '유역도',
        	//collapsible: true,
        	html: '유역도 Contents',
        	collapsed: true/*,
        	listeners: {
        		expand: function(comp, eOpts){
            		alert("유역도 expand");
            		comp.collapse();
            	}
            }*/
        }, {
        	title: '행정구역도',
        	//collapsible: true,
        	html: '행정구역도 Contents',
        	collapsed: true/*,
        	listeners: {
        		expand: function(comp, eOpts){
            		alert("행정구역도 expand");
            		comp.collapse();
            	}
            }*/
        }, {
        	title: '하천도',
        	//collapsible: true,
        	html: '하천도 Contents',
        	collapsed: true/*,
        	listeners: {
        		expand: function(comp, eOpts){
            		alert("하천도 expand");
            		comp.collapse();
            	}
            }*/
        }]
    }, {
        title: '위치검색',
        //glyph: 117,
        //html: "KitchenSink.DummyText.extraLongText",
        items: [{
        	xtype: 'button',
			text: '그리드 탭',
			//flex: 1,
			params: {
				xtype: 'cmm-datagrid',
				id: 'grid-tab-1',
				title: '위젯그리드탭테스트',
				store: 'GridStoreTest',
				columns: [{ text      : 'Name2',  dataIndex : 'name', filter: {type: 'string', itemDefaults: {emptyText: 'Search for...'}} },
				          { text      : 'Email', dataIndex : 'email', flex : 1 },
				          { text      : 'Phone', dataIndex : 'phone' },
				          {text     : 'Progress',
				            xtype    : 'widgetcolumn',
				            width    : 120,
				            dataIndex: 'progress',
				            widget: {
				                xtype: 'progressbarwidget',
				                textTpl: [
				                    '{percent:number("0")}% done'
				                ]}
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
				//height: 100
			},
			handler: 'onClickWestLayer'
        }, {
        	xtype: 'button',
			text: '패널 탭',
			//flex: 1,
			params: {xtype: 'panel', id: 'panel-tab-1', title: '패널탭테스트'},
			handler: 'onClickWestLayer'
        }, , {
        	xtype: 'button',
			text: '그리드 탭',
			//flex: 1,
			params: {xtype: 'cmm-datagrid', id: 'grid-tab-2', title: '그리드2테스트'},
			handler: 'onClickWestLayer'
        }]
    }, {
        title: '영향권역',
        //glyph: 85,
        html: "KitchenSink.DummyText.longText"
    }]
});