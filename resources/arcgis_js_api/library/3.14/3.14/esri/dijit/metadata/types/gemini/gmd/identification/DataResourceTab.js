// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.14/esri/copyright.txt for details.
//>>built
require({cache:{"url:esri/dijit/metadata/types/gemini/gmd/identification/templates/DataResourceTab.html":'\x3cdiv data-dojo-attach-point\x3d"containerNode"\x3e\r\n  \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Tabs"\x3e\r\n    \x3c!-- specific for Gemini --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/gemini/gmd/identification/DataRepresentation"\r\n      data-dojo-props\x3d"label:\'${i18nIso.identificationSection.resourceTab.representation}\'"\x3e\x3c/div\x3e\r\n    \x3c!-- specific for Gemini --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/gemini/gmd/identification/ResourceLanguage"\r\n      data-dojo-props\x3d"label:\'${i18nIso.identificationSection.resourceTab.language}\'"\x3e\x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/iso/gmd/identification/ResourceClassification"\r\n      data-dojo-props\x3d"label:\'${i18nIso.identificationSection.resourceTab.classification}\'"\x3e\x3c/div\x3e\r\n    \x3c!-- specific for Gemini --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/types/gemini/gmd/identification/ResourceExtent"\r\n      data-dojo-props\x3d"label:\'${i18nIso.identificationSection.resourceTab.extent}\'"\x3e\x3c/div\x3e\r\n    \x3c!-- extra for Gemini --\x3e\r\n    \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/Element"\r\n      data-dojo-props\x3d"target:\'gmd:supplementalInformation\',minOccurs:0,\r\n        label:\'${i18nIso.MD_DataIdentification.supplementalInformation}\'"\x3e\r\n      \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/iso/GcoElement"\r\n        data-dojo-props\x3d"target:\'gco:CharacterString\'"\x3e\r\n        \x3cdiv data-dojo-type\x3d"esri/dijit/metadata/form/InputTextArea" data-dojo-props\x3d"large:true"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("esri/dijit/metadata/types/gemini/gmd/identification/DataResourceTab","dojo/_base/declare dojo/_base/lang dojo/has ../../../../base/Descriptor ../../../../form/Element ../../../../form/InputTextArea ../../../../form/Tabs ../../../../form/iso/GcoElement ./DataRepresentation ./ResourceExtent ./ResourceLanguage ../../../iso/gmd/identification/ResourceClassification dojo/text!./templates/DataResourceTab.html ../../../../../../kernel".split(" "),function(a,b,c,d,g,h,k,l,m,n,p,q,e,f){a=a(d,{templateString:e});
c("extend-esri")&&b.setObject("dijit.metadata.types.gemini.gmd.identification.DataResourceTab",a,f);return a});