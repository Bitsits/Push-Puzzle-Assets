/*
HTTP Host: static.ak.connect.facebook.com
Generated: May 23rd 2010 4:34:51 PM PDT
Machine: 10.27.21.123
Location: JIT Construction: v249630
Locale: en_US
*/

if (!window.FB) {FB = {};} if(!FB.dynData) { FB.dynData = {"site_vars":{"canvas_client_compute_content_size_method":1,"use_postMessage":0,"use_xdProxy":0,"use_ui_server":1,"monitor_usage_regex":"somethingtoputhere.com|huffingtonpost.com|lala.com","monitor_usage_rate":0.05,"enable_custom_href":1},"ui_server_dialogs":{"bookmark.add":1,"friends.add":1},"resources":{"base_url_format":"http:\/\/{0}.connect.facebook.com\/","base_cdn_url":"http:\/\/static.ak.fbcdn.net\/","api_channel":1274157039,"api_server":1274157039,"www_channel":1274156858,"xd_proxy":1274156599,"xd_comm_swf_url":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/z6D2S\/hash\/c729bxo3.swf","share_button":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/zAB5S\/hash\/4273uaqa.gif","login_img_dark_small_short":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/zF1W2\/hash\/a969rwcd.gif","login_img_dark_medium_short":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/zEF9L\/hash\/156b4b3s.gif","login_img_dark_medium_long":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/zBIU2\/hash\/85b5jlja.gif","login_img_dark_large_short":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/z1UX3\/hash\/a22m3ibb.gif","login_img_dark_large_long":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/z7SXD\/hash\/8mzymam2.gif","login_img_light_small_short":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/zDGBW\/hash\/8t35mjql.gif","login_img_light_medium_short":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/z38X1\/hash\/6ad3z8m6.gif","login_img_light_medium_long":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/zB6N8\/hash\/4li2k73z.gif","login_img_light_large_short":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/zA114\/hash\/7e3mp7ee.gif","login_img_light_large_long":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/z4Z4Q\/hash\/8rc0izvz.gif","login_img_white_small_short":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/z900E\/hash\/di0gkqrt.gif","login_img_white_medium_short":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/z10GM\/hash\/cdozw38w.gif","login_img_white_medium_long":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/zBT3E\/hash\/338d3m67.gif","login_img_white_large_short":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/zCOUP\/hash\/8yzn0wu3.gif","login_img_white_large_long":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/zC6AR\/hash\/5pwowlag.gif","logout_img_small":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/z2Y31\/hash\/cxrz4k7j.gif","logout_img_medium":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/zAD8D\/hash\/4lsqsd7l.gif","logout_img_large":"http:\/\/static.ak.fbcdn.net\/rsrc.php\/zB36N\/hash\/4515xk7j.gif"}};} if (!FB.locale) {FB.locale = "en_US";} if (!FB.localeIsRTL) {FB.localeIsRTL = false;}


if(!window.FB)FB={};if(!FB.Monitor)FB.Monitor={wrapObject:function(a,b,f){if(typeof(a)!="object")return a;if(!FB.Monitor.loggingEnabled())return a;if(b=='FB.Debug'||b=='FB.HiddenContainer'||b=='FB.XdComm.Server'||b.indexOf('FBIntern')==0)return a;for(var d in a){var c=a[d];if(!a.hasOwnProperty(d)||typeof(c)!='function'||c.wrapped)continue;var e={containerName:b,functionName:d};a[d]=FB.Monitor._monitorWrapper(c,a,f,e);a[d].wrapped=true;}return a;},disableLogging:function(){FB.Monitor.loggingEnabledCache=false;},loggingEnabled:function(){if(FB.Monitor.loggingEnabledCache===null){var c=FB.dynData&&FB.dynData.site_vars&&FB.dynData.site_vars.monitor_usage_regex;if(!c){FB.Monitor.loggingEnabledCache=false;}else{var a=new RegExp(c);var b=FB.dynData.site_vars.monitor_usage_rate;FB.Monitor.loggingEnabledCache=a.test(document.domain)?(Math.random()/b)<1:false;}}return FB.Monitor.loggingEnabledCache;},externalCallback:function(a){if(typeof(a)!='function')return a;return function(){var d=FB.Monitor.internalCallStackDepth;FB.Monitor.internalCallStackDepth=0;var b=Array.prototype.slice.call(arguments);var c=a.apply(this,b);FB.Monitor.internalCallStackDepth=d;return c;};},_monitorWrapper:function(b,a,d,c){return function(){var e=Array.prototype.slice.call(arguments);context=d?this:(a||window);c=c||{containerName:'unknown',functionName:'unknown'};if(FB.Monitor.internalCallStackDepth==0)if(c.functionName.substr(0,1)!='_')FB.Monitor.logFunction(c,e);++FB.Monitor.internalCallStackDepth;var i=new Date();try{var h=b.apply(context,e);}finally{var g=new Date();--FB.Monitor.internalCallStackDepth;var f=g.getTime()-i.getTime();if(f)FB.Monitor.logFunction(c,[],f);}return h;};},logFunction:function(f,c,d){var b=[];for(var e=0;e<c.length;e++){var a=c[e];b[e]=a?a.toString():a;}FB.Monitor.log("functions",f.containerName+"."+f.functionName,{elapsed:d});},logXFBML:function(c){var b={};for(var d=0;d<c.attributes.length;++d){var a=c.attributes[d];if(a.specified!==false&&a.nodeName&&a.nodeValue&&a.nodeName!="class")b[a.nodeName]=a.nodeValue.toString();}var e=c.nodeName.toLowerCase();FB.Monitor.log("tags",e,{args:b});},log:function(a,d,c){if(!FB.Monitor.loggingEnabled())return;var b={functions:101,tags:102};c.lid=b[a];c.name=d;FB.Monitor.loggingQueue.push(c);FB.Monitor.scheduleSend();},scheduleSend:function(){if(!FB.Monitor.pendingTimer)FB.Monitor.pendingTimer=setTimeout(FB.Monitor.send,FB.Monitor.timerInterval);},send:function(){FB.Monitor.pendingTimer=false;var a=FB.Monitor.loggingEnabled();FB.Monitor.loggingEnabledCache=false;try{if(FB.MonitorSender){while(FB.Monitor.loggingQueue.length>0)if(!FB.MonitorSender.send())break;}else FB.Monitor.timerInterval*=1.2;}finally{if(FB.Monitor.loggingQueue.length!==0)FB.Monitor.scheduleSend();FB.Monitor.loggingEnabledCache=a;}},timerInterval:6*1000,internalCallStackDepth:0,loggingQueue:[],pendingTimer:false,loggingEnabledCache:null};
if(!window.FB)FB={};FB.forEach=function(c,a,f){if(Object.prototype.toString.apply(c)==='[object Array]'){if(c.forEach){c.forEach(a);}else for(var b=0,e=c.length;b<e;b++)a(c[b],b,c);}else for(var d in c)if(f||c.hasOwnProperty(d))a(c[d],d,c);};FB.copy=function(c,b,a){FB.forEach(b,function(e,d){if(a||typeof c[d]==='undefined')c[d]=e;});};FB.copy(FB,{$:function(a){return document.getElementById(a);},TypeLoader:{NOTIFY:{},LOADED_MODULES:{},LOADED_CLASSES:{},resolve:function(f,e,a){for(var b=0,c=e.length;b<c;b++){var d=e[b];if(d==='')continue;if(typeof f[d]==='undefined')if(a){f[d]={};}else return false;f=f[d];}return f;},provide:function(c,b,a){FB.Monitor.wrapObject(b,c,false);var d=this.resolve(window,c.split('.'),true);if(a||!this.LOADED_MODULES[c]){FB.copy(d,b,true);if(b._onLoad)d._onLoad();}this.LOADED_MODULES[c]=true;},subclass:function(e,a,i){if(this.LOADED_CLASSES[e])return;if(a!=='FB.Class'&&!this.LOADED_CLASSES[a]){FB.Log.debug('"'+e+'" needs to wait for "'+a+'"');var j=FB.redo(arguments,this);this.NOTIFY[a]?this.NOTIFY[a].push(j):this.NOTIFY[a]=[j];return;}var b=this.resolve(window,a.split('.')),f=b.extend(i),g=this.NOTIFY[e],h=e.split('.'),d=this.resolve(window,h,true),c=h.pop();FB.Monitor.wrapObject(f.prototype,e,true);FB.Monitor.wrapObject(f,e,false);FB.copy(f,d);this.resolve(window,h)[c]=f;this.LOADED_CLASSES[e]=true;if(g){FB.forEach(g,function(k){k();});delete this.NOTIFY[e];}}},bind:function(){var a=Array.prototype.slice.call(arguments),c=a.shift(),b=a.shift();var d=function(){++FB.Monitor.internalCallStackDepth;var e=c.apply(b,a.concat(Array.prototype.slice.call(arguments)));--FB.Monitor.internalCallStackDepth;return e;};d._targets=[b,c];return d;},redo:function(a,c){var b=Array.prototype.slice.call(a);b.unshift(c);b.unshift(a.callee);return FB.bind.apply(FB,b);}});FB.provide=FB.bind(FB.TypeLoader.provide,FB.TypeLoader);FB.subclass=FB.bind(FB.TypeLoader.subclass,FB.TypeLoader);
(function(){var b=false,a=/xyz/.test(function(){xyz;})?/\b_super\b/:/.*/;FB.Class=function(){};FB.Class.extend=function(e){var d=this.prototype;b=true;var f=new this();b=false;FB.forEach(e,function(h,g){f[g]=typeof h==="function"&&typeof d[g]==="function"&&a.test(h)?(function(j,i){return function(){var l=this._super;this._super=d[j];var k=i.apply(this,arguments);this._super=l;return k;};})(g,h):h;});var c=function(){if(!b){var g;if(this instanceof c){g=this;}else{b=true;g=new c();b=false;}if(g.init)g.init.apply(g,arguments);return g;}};c.prototype=f;c.constructor=c;c.extend=FB.Class.extend;return c;};})();
FB.provide('FB.Log',{level:-1,Level:{DEBUG:3,INFO:2,WARNING:1,ERROR:0},_helper:function(){var a=Array.prototype.slice.call(arguments),c=a.shift(),b=a.shift();if(this.level>=b&&window.console)(console[c]||console.log).apply(console,a);}});FB.provide('FB.Log',{debug:FB.bind(FB.Log._helper,FB.Log,'debug',FB.Log.Level.DEBUG),info:FB.bind(FB.Log._helper,FB.Log,'info',FB.Log.Level.INFO),warn:FB.bind(FB.Log._helper,FB.Log,'warn',FB.Log.Level.WARNING),error:FB.bind(FB.Log._helper,FB.Log,'error',FB.Log.Level.ERROR)},true);
if(!window.FB)FB={};if(!FB.Type){FB.Type={createNamespace:function(b){var d=window;var c=b.split('.');for(var a=0;a<c.length;a++){var f=c[a];var e=d[f];if(!e)d[f]=e={};d=e;}return d;},createEnum:function(e,c,d){if(this.getObj(e))return;var a=function(){};a.prototype=c;for(var b in c)a[b]=c[b];if(d)a.__flags=true;this.setObj(e,a);},createClass2:function(cls,baseType){if(baseType&&typeof(baseType)=="string")baseType=eval(baseType);cls.prototype.constructor=cls;this.extend(cls,FB.Type.Methods);cls.__baseType=baseType||Object;if(baseType)cls.__basePrototypePending=true;},setObj:function(fullName,value){var i=fullName.lastIndexOf('.');var objName;var scope=window;if(i>0){var ns=fullName.substring(0,i);this.createNamespace(ns);objName=fullName.substring(i+1);scope=eval(ns);}else objName=fullName;scope[objName]=value;},getObj:function(b){var d=window;var c=b.split('.');for(var a=0;a<c.length;a++){var e=c[a];d=d[e];if(!d)break;}return d;},createClass:function(a,b){if(this.getObj(a))return;if(arguments.length==1&&typeof(a)!="string"){return this._createClass(a);}else this.setObj(a,this._createClass(b));},_createClass:function(b){var a=b.ctor||function(){};if(b.static_ctor)this.addStaticInit(b.static_ctor);if(b.instance)a.prototype=b.instance;if(b['static'])this.extend(a,b['static']);this.createClass2(a,b.base);return a;},addStaticInit:function(a){if(!FB.Type._pendingInits)FB.Type._pendingInits=[];FB.Type._pendingInits[FB.Type._pendingInits.length]=a;window.setTimeout(FB.Type.runPendingInits,0);},runPendingInits:function(){if(FB.Type._pendingInits){var b=FB.Type._pendingInits;FB.Type._pendingInits=null;var a=b.length;for(var c=0;c<a;c++)b[c]();}},extend:function(a,c){for(var b in c)a[b]=c[b];return a;},getInstanceType:function(a){return a.constructor;}};FB.Type.Methods={setupBase:function(){if(this.__basePrototypePending){var a=this.__baseType;if(a.__basePrototypePending)a.setupBase();for(var b in a.prototype){var c=a.prototype[b];if(!this.prototype[b])this.prototype[b]=c;}delete this.__basePrototypePending;}},constructBase:function(b,a){if(this.__basePrototypePending)this.setupBase();if(!a){this.__baseType.apply(b);}else this.__baseType.apply(b,a);},callBase:function(c,d,a){var b=this.__baseType.prototype[d];if(!a){return b.apply(c);}else return b.apply(c,a);},get_baseType:function(){return this.__baseType||null;}};}
FB.provide('FB.HiddenContainer',{_onLoad:function(){if(document.getElementById('FB_HiddenContainer')==null){var a;try{var b=window.navigator.userAgent.toLowerCase().indexOf('msie')>=0&&window.attachEvent;if((!b||document.readyState=='completed')&&document.body){a=document.createElement('div');a.id="FB_HiddenContainer";a.style.position="absolute";a.style.top="-10000px";a.style.width="0px";a.style.height="0px";document.body.appendChild(a);}}catch(e){a=null;}if(!a)document.write('<div id="FB_HiddenContainer" '+'style="position:absolute; top:-10000px; left:-10000px; width:0px; height:0px;" >'+'</div>');}},get:function(){return FB.$('FB_HiddenContainer');}});
FB.provide('FB.HiddenContainerLoader',{_onLoad:function(){FB.HiddenContainer.get();}});
FB.subclass('FB.Delegate','FB.Class',{});FB.provide('FB.Delegate',{Null:function(){},_create:function(b){var a=function(){if(b.length==2){return b[1].apply(b[0],arguments);}else{var d=b.slice();for(var c=0;c<d.length;c+=2)d[c+1].apply(d[c],arguments);return null;}};a._targets=b;return a;},create:function(b,a){if(!b)return a;return FB.Delegate._create([b,a]);},combine:function(a,b){if(!a){if(!b._targets)return FB.Delegate.create(null,b);return b;}if(!b){if(!a._targets)return FB.Delegate.create(null,a);return a;}var c=a._targets?a._targets:[null,a];var d=b._targets?b._targets:[null,b];return FB.Delegate._create(c.concat(d));},remove:function(a,b){if(!a||(a===b))return null;if(!b)return a;var f=a._targets;var e=null;var d;if(b._targets){e=b._targets[0];d=b._targets[1];}else d=b;for(var c=0;c<f.length;c+=2)if((f[c]===e)&&(f[c+1]===d)){if(f.length==2)return null;f.splice(c,2);return FB.Delegate._create(f);}return a;}});if(!window.Delegate)window.Delegate=FB.Delegate;
if(!window.FB)FB={};if(!FB.Loader)FB.Loader={loaded:{},loading:{},loadedCss:{},loadedCallback:null,onScriptLoaded:function(b){var a=b.length;for(var c=0;c<a;c++){var d=b[c];FB.Loader.loaded[d]=true;}if(FB.Loader.loadedCallback)window.setTimeout(function(){FB.Loader.loadedCallback(b);},0);},loadCssComps:function(a){var b=FB.Loader.getStaticResourceUrl('connect.php/'+FB.locale+'/css/'+a.join('/'));if(!this.loadedCss[b]){var c=document.createElement('link');c.setAttribute('rel','stylesheet');c.setAttribute('type','text/css');c.setAttribute('href',b);document.getElementsByTagName('head')[0].appendChild(c);this.loadedCss[b]=true;}},getStaticResourceUrl:function(b){var a=FB.dynData.resources.base_url_format;var c=(a.indexOf('https')===0)?'ssl':'static.ak';return a.replace('{0}',c)+b;}};
if(!FB.Bootstrap){FB.Bootstrap={requireFeatures:function(e,c){if(FB.Bootstrap.isXdChannel)return;var i={features:e,callback:FB.Monitor.externalCallback(c),completed:false};if(FB.Bootstrap._checkRequest(i))return;FB.Bootstrap._featureReqQueue.push(i);FB.Loader.loadedCallback=FB.Delegate.combine(FB.Loader.loadedCallback,FB.Bootstrap._onCompLoaded);FB.Bootstrap._transformFeatureList(e);var h={};var a=[];var f;var b=e.length;var g=0;for(f=0;f<b;f++){var d=e[f];if(!(FB.Loader.loaded[d]))if(!(FB.Loader.loaded[d]||FB.Loader.loading[d])){h[d]=true;a[a.length]=d;}}a.sort();var j=FB.Loader.getStaticResourceUrl('connect.php/'+FB.locale+'/js/'+a.join('/'));FB.Bootstrap.addScript(j);},_requireFeatures:function(b,a){this.requireFeatures(b,FB.bind(a));},_checkRequest:function(d){if(!d.completed){var b=0;var e=d.features.length;var c=0;for(b=0;b<e;b++){var a=d.features[b];if(FB.Loader.loaded[a])c++;}if(c==e){d.completed=true;if(d.callback)d.callback(true);}}return d.completed;},_transformFeatureList:function(b){var c={Api:true,CanvasUtil:true,Connect:true,XFBML:true};var a=b.length;var g=false;var f={};for(var d=0;d<a;d++){f[b[d]]=true;if(c[b[d]])g=true;}if(g)for(var e in c)if(!f[e])b[b.length]=e;},ensureInit:function(a){if(!a)throw ("FB.ensureInit called without a valid callback");a=FB.Monitor.externalCallback(a);if(FB.Facebook&&FB.Facebook.get_initialized&&FB.Facebook.get_initialized().get_isReady()&&FB.Facebook.get_initialized().result)return a();FB.Bootstrap._requireFeatures(FB.Bootstrap.features,function(){FB.Facebook.get_initialized().waitForValue(true,a);});},init:function(a,c,b){FB.Bootstrap._requireFeatures(FB.Bootstrap.features,function(){if(FB.Facebook)FB.Facebook.init(a,c,b);});},addScript:function(f){var d;var e=document.getElementsByTagName('script');if(e){var a=e.length;for(var b=0;b<a;b++){d=e[b];if(d.src==f)return;}}d=document.createElement("script");d.type="text/javascript";d.src=f;var c=document.getElementsByTagName('HEAD')[0]||document.body;c.appendChild(d);},setLocale:function(b,a){window.FB.locale=b;window.FB.localeIsRTL=a;},_initializeXdChannel:function(){FB.Bootstrap.isXdChannel=window.location.search.indexOf(FB.Bootstrap.fbc_channel_token)>=0;},_detectDocumentNamespaces:function(){if(document.namespaces&&!document.namespaces.item['fb'])document.namespaces.add('fb');},createDefaultXdChannelUrl:function(){var a=location.protocol+'//'+location.hostname+location.pathname+location.search;if(location.search||location.search.length>0){a+='&';}else a+='?';a+='fbc_channel=1';return a;},_onCompLoaded:function(){var b=0;var a=FB.Bootstrap._featureReqQueue.length;for(b=0;b<a;b++)FB.Bootstrap._checkRequest(FB.Bootstrap._featureReqQueue[b]);},_onLoad:function(){this._initializeXdChannel();this._detectDocumentNamespaces();},features:["XFBML","CanvasUtil"],fbc_channel_token:'fbc_channel=1',_featureReqQueue:[]};FB.Monitor.wrapObject(FB.Bootstrap,'FB.Bootstrap');window.FB_RequireFeatures=FB.Bootstrap.requireFeatures;window.FB.init=FB.Bootstrap.init;window.FB.ensureInit=FB.Bootstrap.ensureInit;FB.Bootstrap._onLoad();}
if(!window.FBIntern)FBIntern={};if(!FBIntern.XdReceiver){FBIntern.XdReceiver={delay:100,timerId:-1,dispatchMessage:function(){var i=document.URL;var e=i.indexOf('#');var d;if(e>0){d=i.substring(e+1);}else{e=i.indexOf('fb_login&');if(e>0){d=i.substring(e+9);}else return;}var a='debug=1&';if(d.indexOf(a)==0)d=d.substring(a.length);var h;var c=null;try{var f=window.parent;if(d.indexOf('fname=')==0){var g=d.indexOf('&');var b=d.substr(6,g-6);if(b=="_opener"){f=f.opener;}else if(b=="_oparen"){f=f.opener.parent;}else if(b!="_parent")f=f.frames[b];h=d.substr(g+1);}else{f=f.parent;h=d;}c=f.FB.XdComm.Server.singleton.onReceiverLoaded;}catch(e){if(e.number==-2146828218)return;}if(c){f.FB.XdComm.Server.singleton.onReceiverLoaded(h);if(FBIntern.XdReceiver.timerId!=-1){window.clearInterval(FBIntern.XdReceiver.timerId);FBIntern.XdReceiver.timerId=-1;}}else if(FBIntern.XdReceiver.timerId==-1)try{FBIntern.XdReceiver.timerId=window.setInterval(FBIntern.XdReceiver.dispatchMessage,FBIntern.XdReceiver.delay);}catch(e){}}};if(!(window.FB&&FB.Bootstrap&&!FB.Bootstrap.isXdChannel))try{FBIntern.XdReceiver.dispatchMessage();}catch(e){}}(function(){var c=document.getElementsByTagName('script');var d=c[c.length-1];if(d!=undefined){var a=d.getAttribute('fb-api-key');var b=d.getAttribute('fb-xd-receiver');if(a!=null)window.setTimeout(function(){FB.init(a,b);},0);}})();

if (FB && FB.Loader) { FB.Loader.onScriptLoaded(["FB.monitor-wrapper","FB.Prelude","FB.Class","FB.Log","FB.Type","FB.HiddenContainer","FB.HiddenContainerLoader","FB.Delegate","FB.Loader","FB.Bootstrap","XdCommReceiver"]); }