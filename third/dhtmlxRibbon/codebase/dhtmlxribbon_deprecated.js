/*
Product Name: dhtmlxRibbon 
Version: 5.0 
Edition: Standard 
License: content of this file is covered by GPL. Usage outside GPL terms is prohibited. To obtain Commercial or Enterprise license contact sales@dhtmlx.com
Copyright UAB Dinamenta http://www.dhtmlx.com
*/

window.dhtmlxAjax={get:function(a,c,b){if(b){return dhx4.ajax.getSync(a)}else{dhx4.ajax.get(a,c)}},post:function(a,b,d,c){if(c){return dhx4.ajax.postSync(a,b)}else{dhx4.ajax.post(a,b,d)}},getSync:function(a){return dhx4.ajax.getSync(a)},postSync:function(a,b){return dhx4.ajax.postSync(a,b)}};dhtmlXTabBar.prototype.destructor=function(){this.unload()};dhtmlXTabBar.prototype.normalize=function(){};dhtmlXTabBar.prototype.setStyle=function(){};dhtmlXTabBar.prototype.setContent=function(b,a){this.cells(b).attachObject(a)};dhtmlXTabBar.prototype.setContentHTML=function(b,a){this.cells(b).attachHTMLString(a)};dhtmlXTabBar.prototype.setHrefMode=function(a){if(a=="iframes-on-demand"||a=="ajax-html"){this.conf.url_demand=true}this.conf.href_mode=a};dhtmlXTabBar.prototype.setContentHref=function(b,a){if(this.conf.href_mode==null){this.conf.href_mode="iframe"}switch(this.conf.href_mode){case"iframes":case"iframe":this.cells(b).attachURL(a);break;case"iframes-on-demand":this.conf.urls[b]={href:a,ajax:false};this._loadURLOnDemand(this.conf.lastActive);break;case"ajax":case"ajax-html":this.cells(b).attachURL(a,true);break}};dhtmlXTabBar.prototype.setMargin=function(){};dhtmlXTabBar.prototype.setOffset=function(){};dhtmlXTabBar.prototype.setImagePath=function(b,a){};dhtmlXTabBar.prototype.setSkinColors=function(b,a){};dhtmlXTabBar.prototype.tabWindow=function(a){return this.cells(a).getFrame()};dhtmlXTabBar.prototype.setCustomStyle=function(){};dhtmlXTabBar.prototype.enableScroll=function(){};dhtmlXTabBar.prototype.enableForceHiding=function(){};dhtmlXTabBar.prototype.setSize=function(a,b){this.base.style.width=a+"px";this.base.style.height=b+"px";this.setSizes()};dhtmlXTabBar.prototype.enableAutoSize=function(){};dhtmlXTabBar.prototype.adjustOuterSize=function(){this.setSizes()};dhtmlXTabBar.prototype.showInnerScroll=function(c){for(var b in this.t){if(c==null||c==b){this.t[b].cell.showInnerScroll()}}};dhtmlXTabBar.prototype.loadXML=function(a,b){this.loadStruct.apply(this,[a,b])};dhtmlXTabBar.prototype.loadXMLString=function(b,a){this.loadStruct.apply(this,[b,a])};dhtmlXTabBar.prototype.hideTab=function(b,a){this.tabs(b).hide(a)};dhtmlXTabBar.prototype.showTab=function(b,a){this.tabs(b).show(a)};dhtmlXTabBar.prototype.enableTab=function(a){this.tabs(a).enable()};dhtmlXTabBar.prototype.disableTab=function(a){this.tabs(a).disable()};dhtmlXTabBar.prototype.getIndex=function(a){return this.tabs(a).getIndex()};dhtmlXTabBar.prototype.getLabel=function(a){return this.tabs(a).getText()};dhtmlXTabBar.prototype.setLabel=function(b,a){this.tabs(b).setText(a)};dhtmlXTabBar.prototype.setTabActive=function(a){if(a!=null&&this.t[a]!=null){this.tabs(a).setActive()}};dhtmlXTabBar.prototype.removeTab=function(a){this.tabs(a).close()};dhtmlXTabBar.prototype.forceLoad=function(a){this.tabs(a).reloadURL()};