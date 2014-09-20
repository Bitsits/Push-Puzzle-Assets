tinyMCE.importPluginLanguagePack('shortcuts');

var TinyMCEShortcutPlugin = {

	getInfo : function() {
		return {
			longname : 'Extended shortcuts',
			author : 'Ballhype',
			authorurl : 'http://ballhype.com',
			infourl : 'http://ballhype.com',
			version : "1.0"
		};
	},

	initInstance : function(inst) {
		inst.addShortcut('alt', 'A', 'lang_link_desc', 'mceLink');
		inst.addShortcut('alt', 'B', 'lang_bold_desc', 'Bold');
		inst.addShortcut('alt', 'I', 'lang_italic_desc', 'Italic');
		inst.addShortcut('alt', 'U', 'lang_underline_desc', 'Underline');
		inst.addShortcut('alt', 'Q', '', 'FormatBlock', false, '<blockquote>');
		inst.addShortcut('alt', 'P', 'lang_image_desc', 'mceImage');
		inst.addShortcut('alt', 'L', 'lang_unlink_desc', 'unlink');
	}

};

tinyMCE.addPlugin("shortcuts", TinyMCEShortcutPlugin);
