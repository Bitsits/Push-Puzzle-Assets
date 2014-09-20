/**
 * @author Jan Lehnardt
 * @copyright Copyright © 2007, Jan Lehnardt, All rights reserved.
 * @license Revised BSD, do whatever you like but retain all copyright notices.
 */

/* Import plugin specific language pack */
tinyMCE.importPluginLanguagePack('tabjump');

var TinyMCE_TabJumpPlugin = {
	getInfo : function() {
		return {
			longname : 'Tab Jump',
			author : 'Jan Lehnardt <jan@php.net>',
			authorurl : 'http://jan.prima.de/',
			infourl : 'http://jan.prima.de/tabjump/',
			version : tinyMCE.majorVersion + "." + tinyMCE.minorVersion
		};
	},

	handleEvent : function(e)
	{
		var inst, h;
		if (!tinyMCE.isOpera && e.type == 'keydown' && e.keyCode == 9)
		{
			inst = tinyMCE.selectedInstance;
			//inst.getWin().blur();

			var to = tinyMCE.getParam("tabjump_to", null);
			var _to = tinyMCE.instances[tinyMCE.getEditorId(to)];
			if(_to)
			{
				_to.getWin().focus();
			} 
			else if(document.getElementById(to))
			{
					document.getElementById(to).focus();
			}
			tinyMCE.cancelEvent(e);
			return false;
		}

		return true;
	}
};

tinyMCE.addPlugin("tabjump", TinyMCE_TabJumpPlugin);
/* EOF */