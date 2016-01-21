/******* 레이어 정보 가져오기 *******/
// 표시될 레이어 전역 변수
Ext.visibleLayers = [];

// 좌상단 레이어 버튼 관련 전역 변수
Ext.btn1LayerIds = [];
Ext.btn2LayerIds = [];
Ext.btn3LayerIds = [];
Ext.btn4LayerIds = [];
Ext.btn5LayerIds = [];
Ext.btn6LayerIds = [];

// 좌상단 레이어 버튼 기본 이미지 관련 전역 변수
Ext.btn1DefaultImg = "";
Ext.btn2DefaultImg = "";
Ext.btn3DefaultImg = "";
Ext.btn4DefaultImg = "";
Ext.btn5DefaultImg = "";
Ext.btn6DefaultImg = "";

// 좌상단 레이어 버튼 On/Off 여부 관련 전역 변수
//좌상단 레이어 버튼 기본 이미지 관련 전역 변수
Ext.btn1OnOff = "off";
Ext.btn2OnOff = "off";
Ext.btn3OnOff = "off";
Ext.btn4OnOff = "off";
Ext.btn5OnOff = "off";
Ext.btn6OnOff = "off";

// 낙동강 항공영상 관련 전역 변수
//Ext.nakdongDroneDate = ["촬영일자선택"];
//Ext.nakdongDroneLayerId = [""];
Ext.nakdongDroneDate = [""];
Ext.nakdongDroneLayerId = [""];
Ext.nakdongDroneDefaultValue = "";
Ext.nakdongDroneOnOffVar = "Ext.btn5OnOff"; // 낙동강 항공영상 버튼 On/Off 변수 명

// 북한강 항공영상 관련 전역 변수
//Ext.northHanDroneDate = ["촬영일자선택"];
//Ext.northHanDroneLayerId = [""];
Ext.northHanDroneDate = [""];
Ext.northHanDroneLayerId = [""];
Ext.northHanDroneDefaultValue = "";
Ext.northHanDroneOnOffVar = "Ext.btn5OnOff"; // 북한강 항공영상 버튼 On/Off 변수 명

//금강 항공영상 관련 전역 변수
//Ext.geumDroneDate = ["촬영일자선택"];
//Ext.geumDroneLayerId = [""];
Ext.geumDroneDate = [""];
Ext.geumDroneLayerId = [""];
Ext.geumDroneDefaultValue = "";
Ext.geumDroneOnOffVar = "Ext.btn5OnOff"; // 북한강 항공영상 버튼 On/Off 변수 명

//한강 항공영상 관련 전역 변수
//Ext.northHanDroneDate = ["촬영일자선택"];
//Ext.northHanDroneLayerId = [""];
Ext.hangangDroneDate = [""];
Ext.hangangDroneLayerId = [""];
Ext.hangangDroneDefaultValue = "";
Ext.hangangDroneOnOffVar = "Ext.btn5OnOff"; // 한강 항공영상 버튼 On/Off 변수 명

Ext.featureLayerVar = "Ext.btn2OnOff"; // 측정지점 버튼 On/Off 변수 명
Ext.featureLayerId = "3";

//Ext.nakdongWMCYMW = ["측정일자선택"];
//Ext.nakdongWMCYMWDefaultValue = "";
//Ext.northHanWMCYMW = ["측정일자선택"];
//Ext.northHanWMCYMWDefaultValue = "";
Ext.nakdongWMCYMW = [""];
Ext.nakdongWMCYMWDefaultValue = "";
Ext.northHanWMCYMW = [""];
Ext.northHanWMCYMWDefaultValue = "";
Ext.geumWMCYMW = [""];
Ext.geumWMCYMWDefaultValue = "";
Ext.hangangWMCYMW = [""];
Ext.hangangWMCYMWDefaultValue = "";

Ext.nakdongChlDate = ["선택하세요."];
Ext.nakdongChlLayerId = [""];
Ext.nakdongChlDefaultValue = "선택하세요.";
Ext.nakdongChlOnOffVar = "Ext.btn6OnOff"; // 낙동강 초분광(클로로필a) 버튼 On/Off 변수 명
Ext.nakdongChlLegendImg = "";

Ext.northHanChlDate = ["선택하세요"];
Ext.northHanChlLayerId = [""];
Ext.northHanChlDefaultValue = "선택하세요";
Ext.northHanChlOnOffVar = "Ext.btn6OnOff"; // 북한강 초분광(클로로필a) 버튼 On/Off 변수 명
Ext.northHanChlLegendImg = "";

Ext.geumChlDate = ["선택하세요"];
Ext.geumChlLayerId = [""];
Ext.geumChlDefaultValue = "선택하세요";
Ext.geumChlOnOffVar = "Ext.btn6OnOff"; // 금강 초분광(클로로필a) 버튼 On/Off 변수 명
Ext.geumChlLegendImg = "";

Ext.hangangChlDate = ["선택하세요"];
Ext.hangangChlLayerId = [""];
Ext.hangangChlDefaultValue = "선택하세요";
Ext.hangangChlOnOffVar = "Ext.btn6OnOff"; // 금강 초분광(클로로필a) 버튼 On/Off 변수 명
Ext.hangangChlLegendImg = "";

var responseLayer = Ext.Ajax.request({
	async: false, // 동기화
    url: './resources/data/LayerMapper.json'
});

var itemsLayer = Ext.decode(responseLayer.responseText);

for(var i = 0; i < itemsLayer.length; i++){
	if(itemsLayer[i].layerBtnId == "btn1"){
		// 레이어 아이디 전역변수
		Ext.btn1LayerIds.push(itemsLayer[i].layerId);
		
		// 레이어 On/Off 여부
		if(itemsLayer[i].defaultOn == true || itemsLayer[i].defaultOn == "true"){
			Ext.btn1OnOff = "on";
			Ext.visibleLayers.push(itemsLayer[i].layerId);
		}
		else
			Ext.btn1OnOff = "off";
		
		if(itemsLayer[i].defaultImg != undefined){
			// 버튼 이미지 셋팅
			Ext.btn1DefaultImg = itemsLayer[i].defaultImg;
		}
	}
	
	if(itemsLayer[i].layerBtnId == "btn2"){
		// 레이어 아이디 전역변수
		Ext.btn2LayerIds.push(itemsLayer[i].layerId);
		
		// 레이어 On/Off 여부
		if(itemsLayer[i].defaultOn == true || itemsLayer[i].defaultOn == "true"){
			Ext.btn2OnOff = "on";
			Ext.visibleLayers.push(itemsLayer[i].layerId);
		}
		else{
			Ext.btn2OnOff = "off";
		}
		
		if(itemsLayer[i].defaultImg != undefined){
			// 버튼 이미지 셋팅
			Ext.btn2DefaultImg = itemsLayer[i].defaultImg;
		}
	}
	
	if(itemsLayer[i].layerBtnId == "btn3"){
		// 레이어 아이디 전역변수
		Ext.btn3LayerIds.push(itemsLayer[i].layerId);
		
		// 레이어 On/Off 여부
		if(itemsLayer[i].defaultOn == true || itemsLayer[i].defaultOn == "true"){
			Ext.btn3OnOff = "on";
			Ext.visibleLayers.push(itemsLayer[i].layerId);
		}
		else
			Ext.btn3OnOff = "off";
		
		if(itemsLayer[i].defaultImg != undefined){
			// 버튼 이미지 셋팅
			Ext.btn3DefaultImg = itemsLayer[i].defaultImg;
		}
	}
	
	if(itemsLayer[i].layerBtnId == "btn4"){
		// 레이어 아이디 전역변수
		Ext.btn4LayerIds.push(itemsLayer[i].layerId);
		
		// 레이어 On/Off 여부
		if(itemsLayer[i].defaultOn == true || itemsLayer[i].defaultOn == "true"){
			Ext.btn4OnOff = "on";
			Ext.visibleLayers.push(itemsLayer[i].layerId);
		}
		else
			Ext.btn4OnOff = "off";
		
		if(itemsLayer[i].defaultImg != undefined){
			// 버튼 이미지 셋팅
			Ext.btn4DefaultImg = itemsLayer[i].defaultImg;
		}
	}
	
	if(itemsLayer[i].layerBtnId == "btn5"){
		// 레이어 아이디 전역변수
		Ext.btn5LayerIds.push(itemsLayer[i].layerId);
		
		// 레이어 On/Off 여부
		if(itemsLayer[i].defaultOn == true || itemsLayer[i].defaultOn == "true"){
			Ext.btn5OnOff = "on";
			//Ext.visibleLayers.push(itemsLayer[i].layerId);
		}
		else
			Ext.btn5OnOff = "off";
		
		if(itemsLayer[i].defaultImg != undefined){
			// 버튼 이미지 셋팅
			Ext.btn5DefaultImg = itemsLayer[i].defaultImg;
		}
	}
	
	if(itemsLayer[i].layerBtnId == "btn6"){
		// 레이어 아이디 전역변수
		Ext.btn6LayerIds.push(itemsLayer[i].layerId);
		
		// 레이어 On/Off 여부
		if(itemsLayer[i].defaultOn == true || itemsLayer[i].defaultOn == "true"){
			Ext.btn6OnOff = "on";
			//Ext.visibleLayers.push(itemsLayer[i].layerId);
		}
		else
			Ext.btn6OnOff = "off";
		
		if(itemsLayer[i].defaultImg != undefined){
			// 버튼 이미지 셋팅
			Ext.btn6DefaultImg = itemsLayer[i].defaultImg;
		}
	}
	
	// 매핑되는 버튼이 없을경우
	if(itemsLayer[i].layerBtnId == ""){
		// 레이어 On/Off 여부
		if(itemsLayer[i].defaultOn == true || itemsLayer[i].defaultOn == "true"){
			Ext.visibleLayers.push(itemsLayer[i].layerId);
		}
	}
	
	// 항공 영상 전역 변수 셋팅
	if(itemsLayer[i].layerType == "항공"){
		
		if(itemsLayer[i].layerArea == "낙동강"){
			
			Ext.nakdongDroneLayerId.push(itemsLayer[i].layerId); // 항공영상 레이어 아이디
			
			// 항공영상 날짜
			if(itemsLayer[i].layerDate != undefined && itemsLayer[i].layerDate != "")
				Ext.nakdongDroneDate.push(itemsLayer[i].layerDate);
			else
				Ext.nakdongDroneDate.push("");
			
			// 조류측정자료 날짜
			if(itemsLayer[i].mesureDate != undefined && itemsLayer[i].mesureDate != "")
				Ext.nakdongWMCYMW.push(itemsLayer[i].mesureDate);
			else
				Ext.nakdongWMCYMW.push("");
			
			// 클로로필a 레이어 아이디
			if(itemsLayer[i].chlLayerId != undefined && itemsLayer[i].chlLayerId != "")
				Ext.nakdongChlLayerId.push(itemsLayer[i].chlLayerId);
			else
				Ext.nakdongChlLayerId.push("");
			
			// 클로로필a 날짜
			if(itemsLayer[i].chlDate != undefined && itemsLayer[i].chlDate != "")
				Ext.nakdongChlDate.push(itemsLayer[i].chlDate);
			else
				Ext.nakdongChlDate.push("");
    		
    		if(itemsLayer[i].defaultOn == true){
    			// 항공영상 날짜 기본값
    			if(itemsLayer[i].layerDate != undefined && itemsLayer[i].layerDate != "")
    				Ext.nakdongDroneDefaultValue = itemsLayer[i].layerDate;
    			// 조류측정자료 날짜 기본값
    			if(itemsLayer[i].mesureDate != undefined && itemsLayer[i].mesureDate != "")
    				Ext.nakdongWMCYMWDefaultValue = itemsLayer[i].mesureDate;
    			// 클로로필a 날짜 기본값
    			if(itemsLayer[i].chlDate != undefined && itemsLayer[i].chlDate != "")
    				Ext.nakdongChlDefaultValue = itemsLayer[i].chlDate;
    		}
    		//Ext.nakdongDroneBtnId = itemsLayer[i].layerBtnId;
		}
		
		if(itemsLayer[i].layerArea == "북한강"){
			
			Ext.northHanDroneLayerId.push(itemsLayer[i].layerId); // 항공영상 레이어 아이디
			
			// 항공영상 날짜
			if(itemsLayer[i].layerDate != undefined && itemsLayer[i].layerDate != "")
				Ext.northHanDroneDate.push(itemsLayer[i].layerDate);
			else
				Ext.northHanDroneDate.push("");
			
			// 조류측정자료 날짜
			if(itemsLayer[i].mesureDate != undefined && itemsLayer[i].mesureDate != "")
				Ext.northHanWMCYMW.push(itemsLayer[i].mesureDate);
			else
				Ext.northHanWMCYMW.push("");
			
			// 클로로필a 레이어 아이디
			if(itemsLayer[i].chlLayerId != undefined && itemsLayer[i].chlLayerId != "")
				Ext.northHanChlLayerId.push(itemsLayer[i].chlLayerId);
			else
				Ext.northHanChlLayerId.push("");
			
			// 클로로필a 날짜
			if(itemsLayer[i].chlDate != undefined && itemsLayer[i].chlDate != "")
				Ext.northHanChlDate.push(itemsLayer[i].chlDate);
			else
				Ext.northHanChlDate.push("");
    		
    		if(itemsLayer[i].defaultOn == true){
    			// 항공영상 날짜 기본값
    			if(itemsLayer[i].layerDate != undefined && itemsLayer[i].layerDate != "")
    				Ext.northHanDroneDefaultValue = itemsLayer[i].layerDate;
    			// 조류측정자료 날짜 기본값
    			if(itemsLayer[i].mesureDate != undefined && itemsLayer[i].mesureDate != "")
    				Ext.northHanWMCYMWDefaultValue = itemsLayer[i].mesureDate;
    			// 클로로필a 날짜 기본값
    			if(itemsLayer[i].chlDate != undefined && itemsLayer[i].chlDate != "")
    				Ext.northHanChlDefaultValue = itemsLayer[i].chlDate;
    		}
    		//Ext.northHanDroneBtnId = itemsLayer[i].layerBtnId;
		}
		
		if(itemsLayer[i].layerArea == "금강"){
			
			Ext.geumDroneLayerId.push(itemsLayer[i].layerId); // 항공영상 레이어 아이디
			
			// 항공영상 날짜
			if(itemsLayer[i].layerDate != undefined && itemsLayer[i].layerDate != "")
				Ext.geumDroneDate.push(itemsLayer[i].layerDate);
			else
				Ext.geumDroneDate.push("");
			
			// 조류측정자료 날짜
			if(itemsLayer[i].mesureDate != undefined && itemsLayer[i].mesureDate != "")
				Ext.geumWMCYMW.push(itemsLayer[i].mesureDate);
			else
				Ext.geumWMCYMW.push("");
			
			// 클로로필a 레이어 아이디
			if(itemsLayer[i].chlLayerId != undefined && itemsLayer[i].chlLayerId != "")
				Ext.geumChlLayerId.push(itemsLayer[i].chlLayerId);
			else
				Ext.geumChlLayerId.push("");
			
			// 클로로필a 날짜
			if(itemsLayer[i].chlDate != undefined && itemsLayer[i].chlDate != "")
				Ext.geumChlDate.push(itemsLayer[i].chlDate);
			else
				Ext.geumChlDate.push("");
    		
    		if(itemsLayer[i].defaultOn == true){
    			// 항공영상 날짜 기본값
    			if(itemsLayer[i].layerDate != undefined && itemsLayer[i].layerDate != "")
    				Ext.geumDroneDefaultValue = itemsLayer[i].layerDate;
    			// 조류측정자료 날짜 기본값
    			if(itemsLayer[i].mesureDate != undefined && itemsLayer[i].mesureDate != "")
    				Ext.geumWMCYMWDefaultValue = itemsLayer[i].mesureDate;
    			// 클로로필a 날짜 기본값
    			if(itemsLayer[i].chlDate != undefined && itemsLayer[i].chlDate != "")
    				Ext.geumChlDefaultValue = itemsLayer[i].chlDate;
    		}
    		//Ext.geumDroneBtnId = itemsLayer[i].layerBtnId;
		}
		
		if(itemsLayer[i].layerArea == "한강"){
			
			Ext.hangangDroneLayerId.push(itemsLayer[i].layerId); // 항공영상 레이어 아이디
			
			// 항공영상 날짜
			if(itemsLayer[i].layerDate != undefined && itemsLayer[i].layerDate != "")
				Ext.hangangDroneDate.push(itemsLayer[i].layerDate);
			else
				Ext.hangangDroneDate.push("");
			
			// 조류측정자료 날짜
			if(itemsLayer[i].mesureDate != undefined && itemsLayer[i].mesureDate != "")
				Ext.hangangWMCYMW.push(itemsLayer[i].mesureDate);
			else
				Ext.hangangWMCYMW.push("");
			
			// 클로로필a 레이어 아이디
			if(itemsLayer[i].chlLayerId != undefined && itemsLayer[i].chlLayerId != "")
				Ext.hangangChlLayerId.push(itemsLayer[i].chlLayerId);
			else
				Ext.hangangChlLayerId.push("");
			
			// 클로로필a 날짜
			if(itemsLayer[i].chlDate != undefined && itemsLayer[i].chlDate != "")
				Ext.hangangChlDate.push(itemsLayer[i].chlDate);
			else
				Ext.hangangChlDate.push("");
    		
    		if(itemsLayer[i].defaultOn == true){
    			// 항공영상 날짜 기본값
    			if(itemsLayer[i].layerDate != undefined && itemsLayer[i].layerDate != "")
    				Ext.hangangDroneDefaultValue = itemsLayer[i].layerDate;
    			// 조류측정자료 날짜 기본값
    			if(itemsLayer[i].mesureDate != undefined && itemsLayer[i].mesureDate != "")
    				Ext.hangangWMCYMWDefaultValue = itemsLayer[i].mesureDate;
    			// 클로로필a 날짜 기본값
    			if(itemsLayer[i].chlDate != undefined && itemsLayer[i].chlDate != "")
    				Ext.hangangChlDefaultValue = itemsLayer[i].chlDate;
    		}
    		//Ext.geumDroneBtnId = itemsLayer[i].layerBtnId;
		}
	}
	
	// 초분광 영상 전역 변수 셋팅
	if(itemsLayer[i].layerType == "초분광"){
		
		if(itemsLayer[i].layerArea == "낙동강"){
			//Ext.nakdongChlDate.push(itemsLayer[i].layerDate);
    		//Ext.nakdongChlLayerId.push(itemsLayer[i].layerId);
    		//if(Ext.nakdongChlDefaultValue == undefined || Ext.nakdongChlDefaultValue == ""){
    			//Ext.nakdongChlDefaultValue = itemsLayer[i].layerDate;
    		//}
			if(itemsLayer[i].legendImg != undefined && itemsLayer[i].legendImg != ""){
				Ext.nakdongChlLegendImg = itemsLayer[i].legendImg;
			}
		}
		
		if(itemsLayer[i].layerArea == "북한강"){
			//Ext.northHanChlDate.push(itemsLayer[i].layerDate);
    		//Ext.northHanChlLayerId.push(itemsLayer[i].layerId);
    		//if(Ext.northHanChlDefaultValue == undefined || Ext.northHanChlDefaultValue == ""){
    			//Ext.northHanChlDefaultValue = itemsLayer[i].layerDate;
    		//}
    		if(itemsLayer[i].legendImg != undefined && itemsLayer[i].legendImg != ""){
    			Ext.northHanChlLegendImg = itemsLayer[i].legendImg;
    		}
		}
		
		if(itemsLayer[i].layerArea == "금강"){
			//Ext.geumChlDate.push(itemsLayer[i].layerDate);
    		//Ext.geumChlLayerId.push(itemsLayer[i].layerId);
    		//if(Ext.geumChlDefaultValue == undefined || Ext.geumChlDefaultValue == ""){
    			//Ext.geumChlDefaultValue = itemsLayer[i].layerDate;
    		//}
    		if(itemsLayer[i].legendImg != undefined && itemsLayer[i].legendImg != ""){
    			Ext.geumChlLegendImg = itemsLayer[i].legendImg;
    		}
		}
		
		if(itemsLayer[i].layerArea == "한강"){
    		if(itemsLayer[i].legendImg != undefined && itemsLayer[i].legendImg != ""){
    			Ext.hangangChlLegendImg = itemsLayer[i].legendImg;
    		}
		}
	}
}

//console.info(Ext.nakdongChlDate);
//console.info(Ext.nakdongDroneDate);
/******* 레이어 정보 가져오기 끝 *******/

/******* 맵서비스 URL 가져오기 *******/
Ext.mapServiceUrl = "";

var responseApp = Ext.Ajax.request({
    async: false, // 동기화
    url: './resources/data/AppVariable.json'
});

var itemsApp = Ext.decode(responseApp.responseText);
//console.info(itemsApp);

for(var i = 0; i < itemsApp.length; i++){
	//console.info(itemsApp[i].MapserviceUrl5);
	if(itemsApp[i].MapserviceUrl1 != undefined)
		Ext.mapServiceUrl = itemsApp[i].MapserviceUrl1;
}
/******* 맵서비스 URL 가져오기 끝 *******/

/******* 측정일자 가져오기 *******/
/*
Ext.WMCYMW = ["측정일자선택"];
Ext.WMCYMWDefaultValue = "";
var jsonData;
Ext.Ajax.request({
	url: './resources/jsp/GetRWMDT_MeasureDate.jsp',
	async: false, // 비동기 = async: true, 동기 = async: false
	success : function(response, opts) {
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
		//alert(form.responseText);
		alert("오류가 발생하였습니다.");
	}
});

if(jsonData != undefined && jsonData != null){
	for(var jsonCnt = 0; jsonCnt < jsonData.data.length; jsonCnt++){
		Ext.WMCYMW.push(jsonData.data[jsonCnt].WMCYMW);
		Ext.WMCYMWDefaultValue = jsonData.data[jsonCnt].WMCYMW;
	}
}

//console.info(Ext.WMCYMW);
//console.info(Ext.WMCYMWDefaultValue);
*/
/******* 측정일자 가져오기 끝 *******/

/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */
Ext.application({
    name: 'WaterBloomDrone',

    extend: 'WaterBloomDrone.Application',
    
    autoCreateViewport: 'WaterBloomDrone.view.main.Main',
    
    launch: function(){
    	
    	//Ext.SetLayerInfo();
    	
    	Ext.SetInitialExtent = function (mapDivId){
    		var me = Ext.getCmp(mapDivId);
    	    me.bodyHeight = Ext.getBody().getViewSize().height;
    	    me.bodyWidth = Ext.getBody().getViewSize().height;
    	    
    	    var varXmin, varXmax, varYmin, varYmax;
    	    
    	    /*
    	    if(me.bodyHeight > 860){
    	    	varXmin = 14233033.286899231;
    	    	varYmin = 4211145.200816164;
    	    	varXmax = 14329343.94253859;
    	    	varYmax = 4342616.889466718;
    	    	
    	  		me.level = 10;
    	    }
    	    else{
    	    	varXmin = 14163475.591159808;
    	    	varYmin = 4187602.5961043965;
    	    	varXmax = 14356096.90243836;
    	    	varYmax = 4355764.058331704;
    	    	
    	  		me.level = 9;
    	    }
    	    */
    	    
    	    if(mapDivId == "_mapDiv_1"){
    	    	varXmin = 14183349.218513945;
    	    	varYmin = 4199373.898460308;
    	    	varXmax = 14375359.033566216;
    	    	varYmax = 4354999.688048853;
    	    	me.level = 10;
    	    }
    	    
    	    if(mapDivId == "_mapDiv_2"){
    	    	varXmin = 14064413.20250227;
    	    	varYmin = 4463616.70524203;
    	    	varXmax = 14256423.01755454;
    	    	varYmax = 4619242.494830575;
    	    	me.level = 10;
    	    }
    	    
    	    if(mapDivId == "_mapDiv_3"){
    	    	varXmin = 13877601.105373379;
    	    	varYmin = 4247223.4781668065;
    	    	varXmax = 14464637.482603252;
    	    	varYmax = 4454520.698876104;
    	    	me.level = 10;
    	    }
    	    
    	    if(mapDivId == "_mapDiv_4"){
    	    	varXmin = 14064413.20250227;
    	    	varYmin = 4463616.70524203;
    	    	varXmax = 14256423.01755454;
    	    	varYmax = 4619242.494830575;
    	    	me.level = 10;
    	    }
    	    
    	    var s = "";
    		s = "XMin: "+ varXmin + " "
    		   +"YMin: " + varYmin + " "
    		   +"XMax: " + varXmax + " "
    		   +"YMax: " + varYmax;
    		
    		//console.info("win resize : " + s);
    	    
    		if(me.initialExtent == null){
    		    me.initialExtent = this.initialExtent = new esri.geometry.Extent({
    		  	  xmin: varXmin,
    		  	  ymin: varYmin,
    		  	  xmax: varXmax,
    		  	  ymax: varYmax,
    		        spatialReference: {
    		      	  wkid: 102100
    		        }
    		    });
    		    
    		    me.preExtent = this.preExtent = new esri.geometry.Extent({
  		    	  xmin: varXmin,
  		    	  ymin: varYmin,
  		    	  xmax: varXmax,
  		    	  ymax: varYmax,
  		          spatialReference: {
  		        	  wkid: 102100
  		          }
  		      });
    		    
    		    // 아래 방식으로 하면 object 자체가 같아져 버리므로 예상대로 동작하지 않음
    		    //me.preExtent = me.maxExtent = me.initialExtent;
    		    //me.preExtent = me.initialExtent;
    		}
    	    
    		//console.info(me.initialExtent.getCenter());
    		//console.log("init center x : " + me.initialExtent.getCenter().x + "init center y : " + me.initialExtent.getCenter().y);
    		
    		var deferred = me.map.setExtent(me.initialExtent, true);
			deferred.then(function(value){
				me.map.centerAt(me.initialExtent.getCenter());
				me.map.setLevel(me.level);
			});
    	}
    	
    	Ext.setCenter = function(tmX,tmY,waterName){
    		if(waterName == 20){				//낙동강수계
    			var mapCtl = Ext.getCmp('_mapDiv_1');
    		}else if(waterName == 30){			//금강수계
    			var mapCtl = Ext.getCmp('_mapDiv_3');
    		}else if(waterName == 10){			//북한강 수계
    			var mapCtl = Ext.getCmp('_mapDiv_2');
    		}else if(waterName == 40){			//한강하류
    			var mapCtl = Ext.getCmp('_mapDiv_4');
    		}
    		 
    		
    		var point = new esri.geometry.Point({ "x": tmX, "y": tmY, " spatialReference": { " wkid": 102100} });
    		mapCtl.map.centerAndZoom(point, 15);
    		
    	}
    	
    	Ext.setFeatureLayer = function(){
    		var mapCtl = Ext.getCmp('_mapDiv_1');
    		if(mapCtl != undefined && mapCtl.map != undefined && mapCtl.map != null){
	        	var layer = mapCtl.map.getLayer("FeatureLayer1");
	        	if(layer != undefined){
	        		mapCtl.map.removeLayer(layer);
	        	}
	        	var layer = mapCtl.map.getLayer("labels");
	        	if(layer != undefined){
	        		mapCtl.map.removeLayer(layer);
	        	}
	        	mapCtl.featureLayerAdmin = Ext.create('WaterBloomDrone.view.map.FeatureLayerAdmin1', mapCtl.map);
    		}
        	
        	var mapCtl = Ext.getCmp('_mapDiv_2')
        	if(mapCtl != undefined && mapCtl.map != undefined && mapCtl.map != null){
	        	var layer = mapCtl.map.getLayer("FeatureLayer2");
	        	if(layer != undefined){
	        		mapCtl.map.removeLayer(layer);
	        	}
	        	var layer = mapCtl.map.getLayer("labels");
	        	if(layer != undefined){
	        		mapCtl.map.removeLayer(layer);
	        	}
	        	mapCtl.featureLayerAdmin = Ext.create('WaterBloomDrone.view.map.FeatureLayerAdmin2', mapCtl.map);
        	}
        	
        	var mapCtl = Ext.getCmp('_mapDiv_3')
        	if(mapCtl != undefined && mapCtl.map != undefined && mapCtl.map != null){
	        	var layer = mapCtl.map.getLayer("FeatureLayer3");
	        	if(layer != undefined){
	        		mapCtl.map.removeLayer(layer);
	        	}
	        	var layer = mapCtl.map.getLayer("labels");
	        	if(layer != undefined){
	        		mapCtl.map.removeLayer(layer);
	        	}
	        	mapCtl.featureLayerAdmin = Ext.create('WaterBloomDrone.view.map.FeatureLayerAdmin3', mapCtl.map);
        	}
        	
        	var mapCtl = Ext.getCmp('_mapDiv_4')
        	if(mapCtl != undefined && mapCtl.map != undefined && mapCtl.map != null){
	        	var layer = mapCtl.map.getLayer("FeatureLayer4");
	        	if(layer != undefined){
	        		mapCtl.map.removeLayer(layer);
	        	}
	        	var layer = mapCtl.map.getLayer("labels");
	        	if(layer != undefined){
	        		mapCtl.map.removeLayer(layer);
	        	}
	        	mapCtl.featureLayerAdmin = Ext.create('WaterBloomDrone.view.map.FeatureLayerAdmin4', mapCtl.map);
        	}
    	}

    	// khLee Extent 조회
    	Ext.setExtent = function (extent) {
    		//Ext.setFeatureLayer();
    		//extent.xmin.toFixed(2)
    		var s = "";
    		s = "XMin: "+ extent.xmin + " "
    		   +"YMin: " + extent.ymin + " "
    		   +"XMax: " + extent.xmax + " "
    		   +"YMax: " + extent.ymax;
    		
    		//console.info(s);
    		//console.info(extent.getCenter());
    		//console.info(Ext.getCmp('app_center_container').activeTab.id)
    		//alert(s);
    		//return;
    		//var me = Ext.getCmp(mapDivId);
    		var tabId = Ext.getCmp('app_center_container').activeTab.id;
    		var me = null;
    		var layerId = "";
    		if(tabId == "nakdong_map"){
    			me = Ext.getCmp('_mapDiv_1');
    			layerId = "DynamicLayer1";
    			// level 9 일때 Center 범위
        		var stdCenterXmin = 14013047.519494653;
        		var stdCenterXmax = 14599472.400498245;
        		var stdCenterYmin = 4139294.3942281883;
        		var stdCenterYmax = 4411410.214923285;
    		}
    		if(tabId == "northhan_map"){
    			me = Ext.getCmp('_mapDiv_2');
    			layerId = "DynamicLayer2";
    			// level 9 일때 Center 범위
        		var stdCenterXmin = 14051266.033637095;
        		var stdCenterXmax = 14344478.474139143;
        		var stdCenterYmin = 4470725.348872494;
        		var stdCenterYmax = 4606783.259220161;
    		}
    		if(tabId == "geum_map"){
    			me = Ext.getCmp('_mapDiv_3');
    			layerId = "DynamicLayer3";
    			// level 9 일때 Center 범위
        		var stdCenterXmin = 14035672.879867056;
        		var stdCenterXmax = 14439566.137325734;
        		var stdCenterYmin = 4295837.428156155;
        		var stdCenterYmax = 4422111.398883205;
    		}
    		if(tabId == "hangang_map"){
    			me = Ext.getCmp('_mapDiv_4');
    			layerId = "DynamicLayer4";
    			// level 9 일때 Center 범위
        		var stdCenterXmin = 14051266.033637095;
        		var stdCenterXmax = 14344478.474139143;
        		var stdCenterYmin = 4470725.348872494;
        		var stdCenterYmax = 4606783.259220161;
    		}
    		
    		if(me.map.getLevel() < 10){
    			
    			me.map.setLevel(10);
    			me.map.centerAt(me.initialExtent.getCenter());
    			
    			//alert("더 이상 축소 할 수 없습니다.");
    			
    			//var activeLayer = me.map.getLayer(layerId);
    			//activeLayer.setVisibility(false);
    			
    			/*
    			var deferred = me.map.setExtent(me.initialExtent, true);
    			deferred.then(function(value){
    				me.map.centerAt(me.initialExtent.getCenter());
    				me.map.setLevel(me.level);
    			});
    			*/
    			
    			//activeLayer.setVisibility(true);
    			//alert(me.level);
    			return;
    		}
    		
    		if(extent.getCenter().x < stdCenterXmin ||
    		   extent.getCenter().x > stdCenterXmax ||
    		   extent.getCenter().y < stdCenterYmin ||
    		   extent.getCenter().y > stdCenterYmax){
    		/*
    		if(extent.getCenter().x < me.initialExtent.xmin ||
    		   extent.getCenter().x > me.initialExtent.xmax ||
    		   extent.getCenter().y < me.initialExtent.ymin ||
    		   extent.getCenter().y > me.initialExtent.ymax){
    		*/
    			//alert("영역을 벗어났습니다.");
    			//me.map.centerAt(me.preExtent.getCenter());
    		}
    		else{
    			me.preExtent.xmin = extent.xmin;
    			me.preExtent.ymin = extent.ymin;
    			me.preExtent.xmax = extent.xmax;
    			me.preExtent.ymax = extent.ymax;
    		}
    	}
    }
});
