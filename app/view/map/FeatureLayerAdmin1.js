Ext.define('WaterBloomDrone.view.map.FeatureLayerAdmin1', {
	map:null, 
	layer:null,
	dynamicLayer1:null,
	dynamicLayer2:null,
	
	constructor: function(map) {
        var me = this;
        me.map = map;
        
        var queryTask = new esri.tasks.QueryTask(Ext.mapServiceUrl + "/" + Ext.featureLayerId); // 레이어 URL
		var query = new esri.tasks.Query();
		query.returnGeometry = true;
		query.where = "1=1";
		query.outFields = ["*"];
		
		queryTask.execute(query,  function(results){
			//console.info(results);
		});
		
		queryTask.on("complete", function(featureSet) {
			//console.info(Ext.mapServiceUrl + "/" + Ext.featureLayerId);
			//console.info(featureSet);
			
			var layerDefinition = {  
			          "displayFieldName": "호소명",  
			          "geometryType": "esriGeometryPoint",  
			          "spatialReference": {  
			            "wkid": 4326  
			          },  
			          "fields": [{  
			            "name": "OBJECTID",  
			            "alias": "OBJECTID",  
			            "type": "esriFieldTypeOID"  
			          }, {  
			            "name": "측정소명",  
			            "type": "esriFieldTypeString",  
			            "alias": "측정소명",
			            "length": 254
			          }, {  
			            "name": "측정소코드",  
			            "type": "esriFieldTypeString",  
			            "alias": "측정소코드",
			            "length": 7
			          }, {  
			            "name": "TM_X",  
			            "type": "esriFieldTypeString",  
			            "alias": "TM_X"
			          }, {  
			            "name": "TM_Y",  
			            "type": "esriFieldTypeString",  
			            "alias": "TM_Y"
			          }, {  
			            "name": "호소명",  
			            "type": "esriFieldTypeString",  
			            "alias": "호소명",
			            "length": 254
			          }]  
			        }  
			//console.info(featureSet.featureSet.features.length);
			
			var siteCodes = "";
			var measureDate = "";
			var layerDate = "";
			  
			for(var i = 0; i < featureSet.featureSet.features.length; i++){
				if(featureSet.featureSet.features[i].attributes != undefined){
					siteCodes += "'" + featureSet.featureSet.features[i].attributes.측정소코드 + "', ";
				}
			}
			
			if(siteCodes.length > 0){
				siteCodes = siteCodes.substring(0, siteCodes.length - 2);
			}
			
			//console.info(siteCodes);
			
			measureDate = Ext.getCmp("cboDate1_Measure").value;
			layerDate = Ext.getCmp("cboDate1").value;
			//console.info(measureDate);
			//console.info(layerDate);
			
			var jsonData;
			
			Ext.Ajax.request({
        		url: './resources/jsp/GetRWMDT.jsp',    // To Which url you wanna POST.
        		params: { siteCodes: siteCodes, measureDate: measureDate, layerDate: layerDate },
        		async: false, // 비동기 = async: true, 동기 = async: false
        		success : function(response, opts) {
        			//console.info(response.responseText);
        			if(response.responseText.trim() == 'error'){
        				alert("오류가 발생하였습니다. 관리자에게 문의하세요.");
        				return;
        			}
        			//alert(response.responseText);
        			// JSON Object로 변경
        			jsonData = Ext.util.JSON.decode( response.responseText );
        			//alert(jsonData.data[0].ITEM_SURFACE_CLOA);
        		},
        		failure: function(form, action) {
        			alert(form.responseText);
        			alert("오류가 발생하였습니다.");
        		}
        	});
			//console.info(jsonData.data.length);
			if(jsonData != undefined && jsonData != null){
				for(var jsonCnt = 0; jsonCnt < jsonData.data.length; jsonCnt++){
					//console.info(jsonData.data[jsonCnt].ITEM_SURFACE_CLOA);
					for(var featureCnt = 0; featureCnt < featureSet.featureSet.features.length; featureCnt++){
						if(featureSet.featureSet.features[featureCnt].attributes != undefined){
							if(jsonData.data[jsonCnt].PT_NO == featureSet.featureSet.features[featureCnt].attributes.측정소코드){
								// 측정일자
								featureSet.featureSet.features[featureCnt].attributes.WMCYMD = jsonData.data[jsonCnt].WMCYMD;
								//console.info(jsonData.data[jsonCnt].ITEM_SURFACE_CLOA);
								if(jsonData.data[jsonCnt].ITEM_SURFACE_CLOA == undefined || jsonData.data[jsonCnt].ITEM_SURFACE_CLOA == "undefined"){
    								// 클로로필 a
    								featureSet.featureSet.features[featureCnt].attributes.ITEM_SURFACE_CLOA = "";
								}
								else{
									featureSet.featureSet.features[featureCnt].attributes.ITEM_SURFACE_CLOA = jsonData.data[jsonCnt].ITEM_SURFACE_CLOA;
								}
								// 수온
								featureSet.featureSet.features[featureCnt].attributes.ITEM_TEMP_SURF = jsonData.data[jsonCnt].ITEM_TEMP_SURF;
								// 남조류세포수
								featureSet.featureSet.features[featureCnt].attributes.ITEM_BLUE_GREEN_ALGAE = jsonData.data[jsonCnt].ITEM_BLUE_GREEN_ALGAE;
							}
						}
					}
				}
			}
			
			//console.info(featureSet.featureSet.features.length);
	        var featureCollection = {  
        		layerDefinition: layerDefinition,  
        		featureSet: featureSet.featureSet
	        };
			
			me.layer = new esri.layers.FeatureLayer(featureCollection);
			//me.layer.setDefinitionExpression("1=1");

			me.layer.id = "FeatureLayer1";
			//me.layer.visible = true;
			me.map.addLayer(me.layer);
			
			// Feature Layer에 필드를 추가해야 라벨에서 사용 가능...
			me.layer.fields.push({name: "WMCYMD", alias: "WMCYMD", type: "esriFieldTypeString"});
			me.layer.fields.push({name: "ITEM_SURFACE_CLOA", alias: "ITEM_SURFACE_CLOA", type: "esriFieldTypeString"});
			me.layer.fields.push({name: "ITEM_TEMP_SURF", alias: "ITEM_TEMP_SURF", type: "esriFieldTypeString"});
			me.layer.fields.push({name: "ITEM_BLUE_GREEN_ALGAE", alias: "ITEM_BLUE_GREEN_ALGAE", type: "esriFieldTypeString"});
			
			/* 라벨설정 */
			require(["esri/Color", "esri/symbols/TextSymbol", "esri/renderers/SimpleRenderer",  "esri/layers/LabelLayer", "esri/symbols/Font"], function(Color, TextSymbol, SimpleRenderer, LabelLayer, Font){
    			//var statesColor = new Color("#666");
				var statesColor = new Color("black");
    			// create a text symbol to define the style of labels
    	        var statesLabel = new TextSymbol().setColor(statesColor);
    	        statesLabel.font.setSize("10pt").setWeight(Font.WEIGHT_BOLD); // WEIGHT_BOLD, WEIGHT_BOLDER, WEIGHT_LIGHTER, WEIGHT_NORMAL
    	        statesLabel.font.setFamily("굴림").setDecoration("none"); // "underline" | "line-through" | "none"
    	        //statesLabel.font.setVariant(Font.VARIANT_SMALLCAPS);
    	        statesLabel.xoffset = 5;
    	        statesLabel.yoffset = -20;
    	        var statesLabelRenderer = new SimpleRenderer(statesLabel);
    	        var labels = new LabelLayer({ 
    	        	id: "labels"
    	        });
    	        //labels.setOffset(100, 100);
    	        // tell the label layer to label the states feature layer 
    	        // using the field named "STATE_NAME"
    	        //console.info(labels.addFeatureLayer(me.layer, statesLabelRenderer, "{측정소명} chl-a:{ITEM_SURFACE_CLOA}"));
    	        //labels.addFeatureLayer(me.layer, statesLabelRenderer, "{측정소명} chl-a:{ITEM_SURFACE_CLOA}");
    	        labels.addFeatureLayer(me.layer, statesLabelRenderer, "chl-a : {ITEM_SURFACE_CLOA}");
    	        //console.info(labels.graphics);
    	        // add the label layer to the map
    	        me.map.addLayer(labels);
    	        console.info(labels);
    	        
    	        for(var lblCnt = 0; lblCnt < labels.graphics.length; lblCnt++){
    	        	if(labels.graphics[lblCnt].symbol.text.indexOf("undefined") > -1){
    	        		labels.remove(labels.graphics[lblCnt]);
	    	        	lblCnt--;
    	        	}
    	        }
			});
			/* 라벨설정 끝 */
			
			var dialog, highlightSymbol;
			
			require(["dijit/TooltipDialog"], function(TooltipDialog){
    			dialog = new TooltipDialog({
		          //id: "tooltipDialog",
		          style: "position: absolute; width: 377px; font: normal normal normal 10pt Helvetica;z-index:100"
		        });
		        dialog.startup();
			});
			
			require(["esri/symbols/SimpleFillSymbol",
			         "esri/symbols/SimpleLineSymbol",
			         "esri/Color"
			],
			function (SimpleFillSymbol,
			          SimpleLineSymbol,
			          Color){
				highlightSymbol = new SimpleFillSymbol(
						SimpleFillSymbol.STYLE_NULL,
						new SimpleLineSymbol(SimpleLineSymbol.STYLE_SOLID,
								new Color([255,0,0]), 3),
						new Color([125,125,125,0.35]));
			});
			/*
			me.map.on("load", function(){
				me.map.graphics.enableMouseEvents();
				me.map.graphics.on("mouse-out", closeDialog);
	        });
	        */

			me.layer.on("mouse-over", function(evt){
				//evt.layer.enableMouseEvents();
		          var t = "<table class=\"view_form\">" +
    	    		          "<tr>" +
		          			   "<th>측정일자</th>" +
		          			   "<th>chl-a<br>(㎡)</th>" +
		          			   "<th>수온<br>(℃)</th>" +
		          			   "<th>남조류세포수<br>(cells/㎖)</th>" +
		          			 "</tr>" +
		          			 "<tr>" +
		          			   "<td><b>${WMCYMD}</b></td>" +
		          			   "<td><b>${ITEM_SURFACE_CLOA}</b></td>" +
		          			   "<td><b>${ITEM_TEMP_SURF}</b></td>" +
		          			   "<td style=\"border-right: 0px;\"><b>${ITEM_BLUE_GREEN_ALGAE}</b></td>" +
		          			 "</tr>" +
		          		   "</table>";
		          //console.info(evt.graphic.attributes);
		          var content, highlightGraphic;
		          
		          require(["esri/lang"], function(esriLang){
		        	  content = esriLang.substitute(evt.graphic.attributes,t);
		        	  //content = t;
		        	  //console.info(esriLang.substitute);
		          });
		          
		          require(["esri/graphic"], function(Graphic){
		        	  highlightGraphic = new Graphic(evt.graphic.geometry,highlightSymbol);
		          });
		          
		          me.map.graphics.add(highlightGraphic);
		          
		          dialog.setContent(content);

		          require(["dojo/dom-style", "dijit/popup"], function(domStyle, dijitPopup){
		        	  domStyle.set(dialog.domNode, "opacity", 0.85);
    		          dijitPopup.open({
    		            popup: dialog, 
    		            x: evt.pageX,
    		            y: evt.pageY
    		          });
		          });
		     });
			
			me.layer.on("mouse-out", function(){
				//alert("dd");
				require(["dijit/popup"], function(dijitPopup){
					me.map.graphics.clear();
    		        dijitPopup.close(dialog);
				});
	        });
		});
    }
});