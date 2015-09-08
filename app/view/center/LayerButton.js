function SetBtnOnOff(btnId, varBtnOnOff){
	
	var btnCtl = Ext.getCmp(btnId);
	var onIdx = btnCtl.src.indexOf("on.");
	var imgSrc = "";
	
	if(onIdx == -1){
		imgSrc = btnCtl.src.replace("off.", "on.");
		eval(varBtnOnOff + " = 'on'");
	}
	else{
		imgSrc = btnCtl.src.replace("on.", "off.");
		eval(varBtnOnOff + " = 'off'");
	}
	
	btnCtl.setSrc(imgSrc);
}

function SetLayerOnOff(varBtnOnOff, layerIds){
	
	for(var i = 0; i < layerIds.length; i++){
		var arrIdx = Ext.visibleLayers.indexOf(layerIds[i]);
		// 레이어 배열에 값이 있으면 레이어 삭제
		if(arrIdx != -1){
			Ext.visibleLayers.splice(arrIdx, 1); // index번째부터 1자리 삭제
		}
	}
	
	if(eval(varBtnOnOff) == "on"){
		for(var i = 0; i < layerIds.length; i++){
			Ext.visibleLayers.push(layerIds[i]);
		}
	}
}

function LegendShow(legendId, imgSrc, width, height, x, y){
	var chlLegend = Ext.getCmp(legendId); // 범례 이미지 컨트롤
	var x = Ext.getBody().getViewSize().width - 232;
	var y = Ext.getBody().getViewSize().height - 390;
	console.info(chlLegend);
	if(chlLegend == undefined){
		Ext.create("Ext.container.Container", {
			renderTo: Ext.getBody(),
			id: legendId,
			items: [{
				xtype: "image",
				src: imgSrc,
				width: width,
				height: height
			}],
			x: x,
			y: y
		});
	}
	else{
		chlLegend.show();
	}
}

function LegendHide(legendId){
	var chlLegend = Ext.getCmp(legendId); // 범례 이미지 컨트롤
	
	if(chlLegend != undefined)
		chlLegend.hide();
}

function LayerOnOffBtn(me, tabId){
	
	if(me.map == null)
		return;
	
	var activeLayer = me.map.getLayer(tabId);
	var layers = [];
	
	//if(btnId != ""){
		// 버튼 이미지 변경
		//SetBtnOnOff(btnId);
	//}
	
	// 레이어 On/Off
	SetLayerOnOff("Ext.btn1OnOff", Ext.btn1LayerIds);
	SetLayerOnOff("Ext.btn2OnOff", Ext.btn2LayerIds);
	SetLayerOnOff("Ext.btn3OnOff", Ext.btn3LayerIds);
	SetLayerOnOff("Ext.btn4OnOff", Ext.btn4LayerIds);
	//SetLayerOnOff("Ext.btn5OnOff", Ext.btn5LayerIds);
	//SetLayerOnOff("Ext.btn6OnOff", Ext.btn6LayerIds);
	
	var tabCtl = Ext.getCmp('app_center_container');
	
	//console.info(tabCtl.getActiveTab().id);
	
	// 낙동강 항공영상 레이어 아이디 셋팅
	for(var i = 0; i < Ext.nakdongDroneLayerId.length; i++){
		var arrIdx = Ext.visibleLayers.indexOf(Ext.nakdongDroneLayerId[i]);
		
		// 레이어 배열에 값이 있으면 레이어 삭제
		if(arrIdx != -1){
			Ext.visibleLayers.splice(arrIdx, 1); // index번째부터 1자리 삭제
		}
		
		var ctlDate = Ext.getCmp('cboDate1').value;
		
		//console.info(eval(Ext.nakdongDroneOnOffVar));
		if(eval(Ext.nakdongDroneOnOffVar) == "on"){
			if(ctlDate == Ext.nakdongDroneDate[i]){
				if(tabCtl.getActiveTab().id == "nakdong_map"){
					Ext.visibleLayers.push(Ext.nakdongDroneLayerId[i]);
				}
			}
		}
	}
	
	// 북한강 항공영상 레이어 아이디 셋팅
	for(var i = 0; i < Ext.northHanDroneLayerId.length; i++){
		var arrIdx = Ext.visibleLayers.indexOf(Ext.northHanDroneLayerId[i]);
		
		// 레이어 배열에 값이 있으면 레이어 삭제
		if(arrIdx != -1){
			Ext.visibleLayers.splice(arrIdx, 1); // index번째부터 1자리 삭제
		}
		
		var ctlDate = Ext.getCmp('cboDate2').value;
		
		//console.info(eval(Ext.nakdongDroneOnOffVar));
		if(eval(Ext.northHanDroneOnOffVar) == "on"){
			if(ctlDate == Ext.northHanDroneDate[i]){
				if(tabCtl.getActiveTab().id == "northhan_map"){
					Ext.visibleLayers.push(Ext.northHanDroneLayerId[i]);
				}
			}
		}
	}
	
	// 금강 항공영상 레이어 아이디 셋팅
	for(var i = 0; i < Ext.geumDroneLayerId.length; i++){
		var arrIdx = Ext.visibleLayers.indexOf(Ext.geumDroneLayerId[i]);
		
		// 레이어 배열에 값이 있으면 레이어 삭제
		if(arrIdx != -1){
			Ext.visibleLayers.splice(arrIdx, 1); // index번째부터 1자리 삭제
		}
		
		var ctlDate = Ext.getCmp('cboDate3').value;
		
		if(eval(Ext.geumDroneOnOffVar) == "on"){
			if(ctlDate == Ext.geumDroneDate[i]){
				if(tabCtl.getActiveTab().id == "geum_map"){
					Ext.visibleLayers.push(Ext.geumDroneLayerId[i]);
				}
			}
		}
	}
	
	// 낙동강 초분광(클로로필a)영상 레이어 아이디 셋팅
	for(var i = 0; i < Ext.nakdongChlLayerId.length; i++){
		var arrIdx = Ext.visibleLayers.indexOf(Ext.nakdongChlLayerId[i]);
		
		// 레이어 배열에 값이 있으면 레이어 삭제
		if(arrIdx != -1){
			Ext.visibleLayers.splice(arrIdx, 1); // index번째부터 1자리 삭제
		}
		
		var ctlDate = Ext.getCmp('cboDate1_chl').value;
		
		//console.info(eval(Ext.nakdongDroneOnOffVar));
		if(eval(Ext.nakdongChlOnOffVar) == "on"){
			if(ctlDate != "" && ctlDate == Ext.nakdongChlDate[i]){
				if(tabCtl.getActiveTab().id == "nakdong_map"){
					Ext.visibleLayers.push(Ext.nakdongChlLayerId[i]);
					LegendShow("chlLegend", Ext.nakdongChlLegendImg, 232, 54);
				}
			}
			else{
				if(Ext.nakdongChlLegendImg != undefined && Ext.nakdongChlLegendImg != "")
					LegendHide("chlLegend");
			}
		}
		else{
			if(Ext.nakdongChlLegendImg != undefined && Ext.nakdongChlLegendImg != "")
				LegendHide("chlLegend");
		}
	}
	
	// 북한강 초분광(클로로필a)영상 레이어 아이디 셋팅
	for(var i = 0; i < Ext.northHanChlLayerId.length; i++){
		var arrIdx = Ext.visibleLayers.indexOf(Ext.northHanChlLayerId[i]);
		
		// 레이어 배열에 값이 있으면 레이어 삭제
		if(arrIdx != -1){
			Ext.visibleLayers.splice(arrIdx, 1); // index번째부터 1자리 삭제
		}
		
		var ctlDate = Ext.getCmp('cboDate2_chl').value;
		
		//console.info(eval(Ext.nakdongDroneOnOffVar));
		if(eval(Ext.northHanChlOnOffVar) == "on"){
			if(ctlDate != "" && ctlDate == Ext.northHanChlDate[i]){
				if(tabCtl.getActiveTab().id == "northhan_map"){
					Ext.visibleLayers.push(Ext.northHanChlLayerId[i]);
					LegendShow("chlLegend", Ext.northHanChlLegendImg, 232, 54);
				}
			}
			else{
				if(Ext.northHanChlLegendImg != undefined && Ext.northHanChlLegendImg != "")
					LegendHide("chlLegend");
			}
		}
		else{
			if(Ext.northHanChlLegendImg != undefined && Ext.northHanChlLegendImg != "")
				LegendHide("chlLegend");
		}
	}
	
	// 금강 초분광(클로로필a)영상 레이어 아이디 셋팅
	for(var i = 0; i < Ext.geumChlLayerId.length; i++){
		var arrIdx = Ext.visibleLayers.indexOf(Ext.geumChlLayerId[i]);
		
		// 레이어 배열에 값이 있으면 레이어 삭제
		if(arrIdx != -1){
			Ext.visibleLayers.splice(arrIdx, 1); // index번째부터 1자리 삭제
		}
		
		var ctlDate = Ext.getCmp('cboDate3_chl').value;
		
		if(eval(Ext.geumChlOnOffVar) == "on"){
			if(ctlDate != "" && ctlDate == Ext.geumChlDate[i]){
				if(tabCtl.getActiveTab().id == "geum_map"){
					Ext.visibleLayers.push(Ext.geumChlLayerId[i]);
					LegendShow("chlLegend", Ext.geumChlLegendImg, 232, 54);
				}
			}
			else{
				if(Ext.geumChlLegendImg != undefined && Ext.geumChlLegendImg != "")
					LegendHide("chlLegend");
			}
		}
		else{
			if(Ext.geumChlLegendImg != undefined && Ext.geumChlLegendImg != "")
				LegendHide("chlLegend");
		}
	}
	
	if(Ext.visibleLayers.length > 0)
		activeLayer.setVisibility(true);
	else
		activeLayer.setVisibility(false);
	
	activeLayer.setVisibleLayers(Ext.visibleLayers);
	
	if(tabId == "DynamicLayer1"){
		// Feature Layer visible
		activeLayer = me.map.getLayer("FeatureLayer1");
		//console.info(activeLayer);
		if(activeLayer != undefined){
			if(eval(Ext.featureLayerVar) == "on")
				activeLayer.setVisibility(true);
			else
				activeLayer.setVisibility(false);
		}
	}
	
	if(tabId == "DynamicLayer2"){
		// Feature Layer visible
		activeLayer = me.map.getLayer("FeatureLayer2");
		if(activeLayer != undefined){
			if(eval(Ext.featureLayerVar) == "on")
				activeLayer.setVisibility(true);
			else
				activeLayer.setVisibility(false);
		}
	}
	
	if(tabId == "DynamicLayer3"){
		activeLayer = me.map.getLayer("FeatureLayer3");
		if(activeLayer != undefined){
			if(eval(Ext.featureLayerVar) == "on")
				activeLayer.setVisibility(true);
			else
				activeLayer.setVisibility(false);
		}
	}
	
	//console.info("dd");
}

Ext.define('WaterBloomDrone.view.center.LayerButton', {
	
	extend: 'Ext.panel.Panel',
	id: 'LayerButtonPanel',
	xtype: 'layerbutton-panel',
	
	height: 144,
	width: 100,
	
	title: '촬영일자 선택',
	header: false,
	//floating: true,
	
	layout: {
		type: 'vbox'
	},
	
	cls: 'khLee-x-panel-body-default',
	
	items: [{
		xtype: 'panel',
		header: false,
		layout: {
			type: 'hbox'
		},
		cls: 'khLee-x-panel-body-default',
		items: [{
			xtype: 'image',
			//text: '행정경계',
			id: 'btn1', // LayerMapper의 layerBtnId와 매핑
			src: Ext.btn1DefaultImg,
			style: 'cursor:pointer;border:0px !important;',
			listeners: {
		        el: {
		            click: function(){
		            	SetBtnOnOff("btn1", "Ext.btn1OnOff");
		            	LayerOnOffBtn(Ext.getCmp('_mapDiv_1'), "DynamicLayer1");
		            	LayerOnOffBtn(Ext.getCmp('_mapDiv_2'), "DynamicLayer2");
		            	LayerOnOffBtn(Ext.getCmp('_mapDiv_3'), "DynamicLayer3");
		            }
		        }
		    },
			width: 50,
			height: 48
		}, {
			xtype: 'image',
			//text: '측정지점',
			id: 'btn2', // LayerMapper의 layerBtnId와 매핑
			src: Ext.btn2DefaultImg,
			style: 'cursor:pointer; border:0px !important;',
			listeners: {
		        el: {
		        	click: function(){
		        		SetBtnOnOff("btn2", "Ext.btn2OnOff");
		            	LayerOnOffBtn(Ext.getCmp('_mapDiv_1'), "DynamicLayer1");
		            	LayerOnOffBtn(Ext.getCmp('_mapDiv_2'), "DynamicLayer2");
		            	LayerOnOffBtn(Ext.getCmp('_mapDiv_3'), "DynamicLayer3");
		            }
		        }
		    },
			width: 50,
			height: 48
		}]
	}, {
		xtype: 'panel',
		header: false,
		layout: {
			type: 'hbox'
		},
		cls: 'khLee-x-panel-body-default',
		items: [{
			xtype: 'image',
			//text: '취수장',
			id: 'btn3', // LayerMapper의 layerBtnId와 매핑
			src: Ext.btn3DefaultImg,
			style: 'cursor:pointer;border:0px !important;',
			listeners: {
		        el: {
		            click: function(){
		            	SetBtnOnOff("btn3", "Ext.btn3OnOff");
		            	LayerOnOffBtn(Ext.getCmp('_mapDiv_1'), "DynamicLayer1");
		            	LayerOnOffBtn(Ext.getCmp('_mapDiv_2'), "DynamicLayer2");
		            	LayerOnOffBtn(Ext.getCmp('_mapDiv_3'), "DynamicLayer3");
		            }
		        }
		    },
			width: 50,
			height: 48
		}, {
			xtype: 'image',
			//text: '정수장',
			id: 'btn4', // LayerMapper의 layerBtnId와 매핑
			src: Ext.btn4DefaultImg,
			style: 'cursor:pointer;border:0px !important;',
			listeners: {
		        el: {
		        	click: function(){
		        		SetBtnOnOff("btn4", "Ext.btn4OnOff");
		            	LayerOnOffBtn(Ext.getCmp('_mapDiv_1'), "DynamicLayer1");
		            	LayerOnOffBtn(Ext.getCmp('_mapDiv_2'), "DynamicLayer2");
		            	LayerOnOffBtn(Ext.getCmp('_mapDiv_3'), "DynamicLayer3");
		            }
		        }
		    },
			width: 50,
			height: 48
		}]
	}, {
		xtype: 'panel',
		header: false,
		layout: {
			type: 'hbox'
		},
		cls: 'khLee-x-panel-body-default',
		items: [{
			xtype: 'image',
			//text: '항공사진',
			id: 'btn5', // LayerMapper의 layerBtnId와 매핑
			src: Ext.btn5DefaultImg,
			style: 'cursor:pointer;border:0px !important;',
			listeners: {
		        el: {
		            click: function(){
		            	SetBtnOnOff("btn5", "Ext.btn5OnOff");
		            	LayerOnOffBtn(Ext.getCmp('_mapDiv_1'), "DynamicLayer1");
		            	LayerOnOffBtn(Ext.getCmp('_mapDiv_2'), "DynamicLayer2");
		            	LayerOnOffBtn(Ext.getCmp('_mapDiv_3'), "DynamicLayer3");
		            }
		        }
		    },
			width: 50,
			height: 48
		}, {
			xtype: 'image',
			//text: '초분광영상',
			id: 'btn6', // LayerMapper의 layerBtnId와 매핑
			src: Ext.btn6DefaultImg,
			style: 'cursor:pointer;border:0px !important;',
			listeners: {
		        el: {
		        	click: function(){
		        		SetBtnOnOff("btn6", "Ext.btn6OnOff");
		            	LayerOnOffBtn(Ext.getCmp('_mapDiv_1'), "DynamicLayer1");
		            	LayerOnOffBtn(Ext.getCmp('_mapDiv_2'), "DynamicLayer2");
		            	LayerOnOffBtn(Ext.getCmp('_mapDiv_3'), "DynamicLayer3");
		            }
		        }
		    },
			width: 50,
			height: 48
		}]
	}]
	
});