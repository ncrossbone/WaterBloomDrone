// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.14/esri/copyright.txt for details.
//>>built
define("esri/dijit/metadata/types/arcgis/base/optionsFilterer",["dojo/_base/lang","dojo/_base/array","dojo/has","../../../../../kernel"],function(c,e,f,g){var d={filter:function(d,a,c){return e.filter(c,function(b){return b.NAPOnly&&!a.isAgsNAP||b.NAPFGDCOnly&&!a.isAgsNAP&&!a.isAgsFGDC||b.NAPExcluded&&a.isAgsNAP||b.FGDCExcluded&&a.isAgsFGDC||b.INSPIREExcluded&&a.isAgsINSPIRE?!1:!0})}};f("extend-esri")&&c.setObject("dijit.metadata.types.arcgis.base.optionsFilterer",d,g);return d});