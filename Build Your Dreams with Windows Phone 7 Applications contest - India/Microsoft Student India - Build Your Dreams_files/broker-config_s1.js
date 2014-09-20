/*
Copyright (c) 2012, comScore Inc. All rights reserved.
version: 4.6.3
*/

COMSCORE.SiteRecruit.Broker.config = {
	version: "4.6.3",
	//TODO:Karl extend cookie enhancements to ie userdata
		testMode: false,
	// cookie settings
	cookie:{
		name: 'msresearch',
		path: '/',
		domain:  '.microsoft.com' ,
		duration: 90,
		rapidDuration: 0,
		expireDate: ''
	},
	
	// optional prefix for pagemapping's pageconfig file
	prefixUrl: "",

		mapping:[
	// m=regex match, c=page config file (prefixed with configUrl), f=frequency
	{m: '//[\\w\\.-]+/about((/)|(/((default)|(index))\\.((html?)|(aspx?)|(mspx))))?$', c: 'inv_c_3331mt2.js', f: 0.37, p: 0 	}
	,{m: '//[\\w\\.-]+/athome/(default\\.aspx)?$', c: 'inv_c_3331mt3-Static.js', f: 0.047, p: 1 	}
	,{m: '//[\\w\\.-]+/athome/', c: 'inv_c_3331mt3.js', f: 0.047, p: 0 	}
	,{m: '//[\\w\\.-]+/atwork', c: 'inv_c_3331mt5.js', f: 0.076, p: 0 	}
	,{m: '//[\\w\\.-]+/australia/education/', c: 'inv_c_p15466742-AU-1302.js', f: 0.5, p: 1 	}
	,{m: '//[\\w\\.-]+/australia/windows/buy/', c: 'inv_c_p117732561-EN-AU-1413.js', f: 0.4, p: 2 	}
	,{m: '//[\\w\\.-]+/canada/windows/buy/', c: 'inv_c_p117732561-EN-CA-1405.js', f: 0.5, p: 2 	}
	,{m: '//[\\w\\.-]+/de/de/dynamicit/', c: 'inv_c_p15466742-Germany-AP-1137.js', f: 0.5, p: 1 	}
	,{m: '//[\\w\\.-]+/de-de/cloud/', c: 'inv_c_p73639549-Germany.js', f: 0.5, p: 0 	}
	,{m: '//(?!privacy)[\\w\\.-]*/de-de/(default\\.aspx|$)', c: 'inv_c_p15466742-Germany-HP.js', f: 0.175, p: 1 	}
	,{m: '//[\\w\\.-]+/de-de/windows/pc-corner/', c: 'inv_c_p117732561-DE-DE-1423.js', f: 0.3, p: 0 	}
	,{m: '//[\\w\\.-]+/de-de/windows/windowsintune/', c: 'inv_c_p143857371-DE-DE.js', f: 0.5, p: 0 	}
	,{m: '//[\\w\\.-]+/download/(en/|.*?displaylang=en)', c: 'inv_c_3331mt_p105571867-1345.js', f: 0.0028, p: 1 	}
	,{m: '//[\\w\\.-]+/dynamics/asmartmove/default\\.mspx', c: 'inv_c_3331mt14-SL-fix_NEW-750.js', f: 0.5, p: 3 	}
	,{m: '//[\\w\\.-]+/dynamics/customer/en-us/', c: 'inv_c_p68785097-1461.js', f: 0.5, p: 1 	}
	,{m: '//(?!privacy)[\\w\\.-]+/en-gb/(default\\.aspx|$)', c: 'inv_c_p55836780-EN-GB_HP.js', f: 0.5, p: 0 	}
	,{m: '//(?!privacy)[\\w\\.-]+/en-in/($|default\\.aspx$)', c: 'inv_c_p117596623-EN-IN.js', f: 0.5, p: 1 	}
	,{m: '//(www|wwwstaging)[\\w\\.-]*/en-us/(default\\.aspx)?$', c: 'inv_c_p38796305-EN-US-PREVIEW.js', f: 0.024, p: 1 	}
	,{m: '//[\\w\\.-]+/en-us/dynamics/(?!(customersource\\.aspx|partner-login\\.aspx|solution-finder\\.aspx|default\\.aspx|how-to-buy\\.aspx|default\\.aspx|contact-us-thanks\\.aspx|contact-us-cancel\\.aspx|search-results\\.aspx|go-to|overlays))', c: 'inv_c_3331mt14_NEW-750.js', f: 0.5, p: 0 	}
	,{m: '//[\\w\\.-]+/en-us/showcase/', c: 'inv_c_p23275586.js', f: 0.3, p: 0 	}
	,{m: '//[\\w\\.-]+/(en-us/)?windows/enterprise/(?!(default\\.(aspx|html|mspx))|$)', c: 'inv_c_p38361073-DDS.js', f: 0.5, p: 0 	}
	,{m: '//[\\w\\.-]+/en-us/windows/windowsintune/', c: 'inv_c_p143857371-EN-US.js', f: 0.5, p: 0 	}
	,{m: '//(?!privacy)[\\w\\.-]+/es-es/(default\\.aspx)?$', c: 'inv_c_p117596623-ES-ES.js', f: 0.22, p: 1 	}
	,{m: '//[\\w\\.-]+/france/windows/acheter/', c: 'inv_c_p117732561-FR-FR-1428.js', f: 0.117, p: 2 	}
	,{m: '//(www|wwwstaging)[\\w\\.-]*/fr-fr/(default\\.aspx|$)', c: 'inv_c_p117596623-FR-FR.js', f: 0.21, p: 1 	}
	,{m: '//[\\w\\.-]+/germany/branchen/', c: 'inv_c_DE-p15466742-Branchen.js', f: 0.5, p: 1 	}
	,{m: '//[\\w\\.-]+/germany/business/cloudservices/', c: 'inv_c_p15466742-Germany-AP-1135.js', f: 0.5, p: 1 	}
	,{m: '//[\\w\\.-]+/germany/dynamics/', c: 'inv_c_p15466742-Germany-AP-280.js', f: 0.5, p: 1 	}
	,{m: '//[\\w\\.-]+/germany/server(/|$)', c: 'inv_c_DE-wss-p12038685.js', f: 0.5, p: 1 	}
	,{m: '//[\\w\\.-]+/germany/windows/', c: 'inv_c_DE-p12038685-p37131508-Windows.js', f: 0.21, p: 1 	}
	,{m: '//[\\w\\.-]+/ja-jp/atwork', c: 'inv_c_JA-p15466742-atwork.js', f: 0.0675, p: 2 	}
	,{m: '//(wwwstaging|www\\.microsoft\\.com)/ja-jp/(default\\.aspx)?$', c: 'inv_c_p15466742-Japan-HP.js', f: 0.059, p: 1 	}
	,{m: '//[\\w\\.-]+/ja-jp/windows/buy/', c: 'inv_c_p117732561-JA-JP-1418.js', f: 0.05, p: 1 	}
	,{m: '//[\\w\\.-]+/japan/athome/', c: 'inv_c_JA-p15466742-athome.js', f: 0.0014, p: 1 	}
	,{m: '//[\\w\\.-]+/japan/business/', c: 'inv_c_JA-p15466742-business.js', f: 0.5, p: 1 	}
	,{m: '//[\\w\\.-]+/japan/servers/', c: 'inv_c_JA-p15466742-servers.js', f: 0.5, p: 1 	}
	,{m: '//[\\w\\.-]+/japan/windows(/(?!(downloads/ie/au\\.mspx)|(downloads/ie/iedelete\\.mspx))|$)', c: 'inv_c_JA-p15466742-p37131508-windows.js', f: 0.028, p: 1 	}
	,{m: '//(?!privacy)[\\w\\.-]+/ko-kr/(default\\.aspx)?$', c: 'inv_c_p117596623-KO-KR.js', f: 0.41, p: 1 	}
]
};
COMSCORE.SiteRecruit.Broker.run();