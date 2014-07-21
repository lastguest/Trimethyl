Ext.data.JsonP.Util({"tagname":"class","name":"Util","autodetected":{},"files":[{"filename":"util.js","href":"util.html#Util"}],"author":[{"tagname":"author","name":"Flavio De Stefano","email":"flavio.destefano@caffeinalab.com"}],"members":[{"name":"alert","tagname":"method","owner":"Util","id":"method-alert","meta":{}},{"name":"alertError","tagname":"method","owner":"Util","id":"method-alertError","meta":{}},{"name":"buildQuery","tagname":"method","owner":"Util","id":"method-buildQuery","meta":{}},{"name":"confirm","tagname":"method","owner":"Util","id":"method-confirm","meta":{}},{"name":"confirmCustom","tagname":"method","owner":"Util","id":"method-confirmCustom","meta":{}},{"name":"dialog","tagname":"method","owner":"Util","id":"method-dialog","meta":{}},{"name":"facebookGraphWithAppToken","tagname":"method","owner":"Util","id":"method-facebookGraphWithAppToken","meta":{}},{"name":"fromnow","tagname":"method","owner":"Util","id":"method-fromnow","meta":{}},{"name":"getAppDataDirectory","tagname":"method","owner":"Util","id":"method-getAppDataDirectory","meta":{}},{"name":"getDomainFromURL","tagname":"method","owner":"Util","id":"method-getDomainFromURL","meta":{}},{"name":"getFacebookAvatar","tagname":"method","owner":"Util","id":"method-getFacebookAvatar","meta":{}},{"name":"getIOSVersion","tagname":"method","owner":"Util","id":"method-getIOSVersion","meta":{}},{"name":"isAppFirstUsage","tagname":"method","owner":"Util","id":"method-isAppFirstUsage","meta":{}},{"name":"isIOS7","tagname":"method","owner":"Util","id":"method-isIOS7","meta":{}},{"name":"isIOS8","tagname":"method","owner":"Util","id":"method-isIOS8","meta":{}},{"name":"now","tagname":"method","owner":"Util","id":"method-now","meta":{}},{"name":"openFacebookProfile","tagname":"method","owner":"Util","id":"method-openFacebookProfile","meta":{}},{"name":"openInStore","tagname":"method","owner":"Util","id":"method-openInStore","meta":{}},{"name":"openTwitterProfile","tagname":"method","owner":"Util","id":"method-openTwitterProfile","meta":{}},{"name":"openTwitterStatus","tagname":"method","owner":"Util","id":"method-openTwitterStatus","meta":{}},{"name":"openURL","tagname":"method","owner":"Util","id":"method-openURL","meta":{}},{"name":"option","tagname":"method","owner":"Util","id":"method-option","meta":{}},{"name":"optionWithDict","tagname":"method","owner":"Util","id":"method-optionWithDict","meta":{}},{"name":"parseJSON","tagname":"method","owner":"Util","id":"method-parseJSON","meta":{}},{"name":"parseSchema","tagname":"method","owner":"Util","id":"method-parseSchema","meta":{}},{"name":"populateListViewFromCollection","tagname":"method","owner":"Util","id":"method-populateListViewFromCollection","meta":{}},{"name":"prompt","tagname":"method","owner":"Util","id":"method-prompt","meta":{}},{"name":"reviewInStore","tagname":"method","owner":"Util","id":"method-reviewInStore","meta":{}},{"name":"setAppFirstUsage","tagname":"method","owner":"Util","id":"method-setAppFirstUsage","meta":{}},{"name":"simpleAlert","tagname":"method","owner":"Util","id":"method-simpleAlert","meta":{}},{"name":"startActivity","tagname":"method","owner":"Util","id":"method-startActivity","meta":{}},{"name":"timestamp","tagname":"method","owner":"Util","id":"method-timestamp","meta":{}},{"name":"tryOpenURL","tagname":"method","owner":"Util","id":"method-tryOpenURL","meta":{}},{"name":"uniqid","tagname":"method","owner":"Util","id":"method-uniqid","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Util","short_doc":"Util module. ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/util.html#Util' target='_blank'>util.js</a></div></pre><div class='doc-contents'><p>Util module.</p>\n\n<p>All things that I don't know where to put, are here.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-alert' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-alert' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-alert' class='name expandable'>alert</a>( <span class='pre'>title, msg, [callback]</span> ) : Ti.UI.AlertDialog<span class=\"signature\"></span></div><div class='description'><div class='short'>Create and show an Alert Dialog ...</div><div class='long'><p>Create and show an Alert Dialog</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>title</span> : String<div class='sub-desc'><p>The title</p>\n</div></li><li><span class='pre'>msg</span> : String<div class='sub-desc'><p>The message</p>\n</div></li><li><span class='pre'>callback</span> : Function (optional)<div class='sub-desc'><p>The callback to invokie when clicking <strong>OK</strong></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Ti.UI.AlertDialog</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-alertError' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-alertError' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-alertError' class='name expandable'>alertError</a>( <span class='pre'>msg, [callback]</span> ) : Ti.UI.AlertDialog<span class=\"signature\"></span></div><div class='description'><div class='short'>Show an Error Dialog. ...</div><div class='long'><p>Show an Error Dialog.</p>\n\n<p>The title is automatically <em>Error</em>, i18n compatible.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>msg</span> : String<div class='sub-desc'><p>The message</p>\n</div></li><li><span class='pre'>callback</span> : Function (optional)<div class='sub-desc'><p>The callback to invoke.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Ti.UI.AlertDialog</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-buildQuery' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-buildQuery' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-buildQuery' class='name expandable'>buildQuery</a>( <span class='pre'>obj</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Generate URL-encoded query string. ...</div><div class='long'><p>Generate URL-encoded query string.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj</span> : Object<div class='sub-desc'><p>Object key-value to parse.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-confirm' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-confirm' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-confirm' class='name expandable'>confirm</a>( <span class='pre'>title, msg, [cb]</span> ) : Ti.UI.AlertDialog<span class=\"signature\"></span></div><div class='description'><div class='short'>Create and show a confirm dialog with Cancel and Yes button. ...</div><div class='long'><p>Create and show a confirm dialog with <em>Cancel</em> and <em>Yes</em> button.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>title</span> : String<div class='sub-desc'><p>The title</p>\n</div></li><li><span class='pre'>msg</span> : String<div class='sub-desc'><p>The message</p>\n</div></li><li><span class='pre'>cb</span> : Function (optional)<div class='sub-desc'><p>The callback to invoke when clicking <em>Yes</em>.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Ti.UI.AlertDialog</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-confirmCustom' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-confirmCustom' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-confirmCustom' class='name expandable'>confirmCustom</a>( <span class='pre'>title, msg, btnTitle, [cb]</span> ) : Ti.UI.AlertDialog<span class=\"signature\"></span></div><div class='description'><div class='short'>Create and show a confirm dialog with Cancel and a custom button. ...</div><div class='long'><p>Create and show a confirm dialog with <em>Cancel</em> and a custom button.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>title</span> : String<div class='sub-desc'><p>The title</p>\n</div></li><li><span class='pre'>msg</span> : String<div class='sub-desc'><p>The message</p>\n</div></li><li><span class='pre'>btnTitle</span> : String<div class='sub-desc'><p>The custom button title</p>\n</div></li><li><span class='pre'>cb</span> : Function (optional)<div class='sub-desc'><p>The callback to invoke when clicking your custom button title.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Ti.UI.AlertDialog</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-dialog' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-dialog' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-dialog' class='name expandable'>dialog</a>( <span class='pre'>tel</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Dial a number. ...</div><div class='long'><p>Dial a number.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>tel</span> : String<div class='sub-desc'><p>The number to call.</p>\n</div></li></ul></div></div></div><div id='method-facebookGraphWithAppToken' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-facebookGraphWithAppToken' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-facebookGraphWithAppToken' class='name expandable'>facebookGraphWithAppToken</a>( <span class='pre'>path, object, opt, callback</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Call the graph using app token. ...</div><div class='long'><p>Call the graph using app token.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>path</span> : String<div class='sub-desc'><p>The path for the open graph request.</p>\n</div></li><li><span class='pre'>object</span> : Object<div class='sub-desc'><p>The data for the open graph request.</p>\n</div></li><li><span class='pre'>opt</span> : Object<div class='sub-desc'><p>The options.\nRequired options are:\n* <strong>appid</strong>: Application ID\n* <strong>appsecret</strong>: Application secret\n* <strong>[expire]</strong>: Cache the request for specified seconds.\n* <strong>[error]</strong>: Error callback</p>\n</div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>Success callback</p>\n</div></li></ul></div></div></div><div id='method-fromnow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-fromnow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-fromnow' class='name expandable'>fromnow</a>( <span class='pre'>[t]</span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Get the UNIX timestamp from now with delay expressed in seconds. ...</div><div class='long'><p>Get the UNIX timestamp from now with delay expressed in seconds.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>t</span> : Number (optional)<div class='sub-desc'><p>Seconds from now.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getAppDataDirectory' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-getAppDataDirectory' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-getAppDataDirectory' class='name expandable'>getAppDataDirectory</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Return the app-data directory. ...</div><div class='long'><p>Return the app-data directory.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getDomainFromURL' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-getDomainFromURL' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-getDomainFromURL' class='name expandable'>getDomainFromURL</a>( <span class='pre'>url</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Return the clean domain of an URL ...</div><div class='long'><p>Return the clean domain of an URL</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : String<div class='sub-desc'><p>The URL to parse</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>Clean domain</p>\n</div></li></ul></div></div></div><div id='method-getFacebookAvatar' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-getFacebookAvatar' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-getFacebookAvatar' class='name expandable'>getFacebookAvatar</a>( <span class='pre'>fbid, [w], [h]</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Get the Facebook avatar from the graph ...</div><div class='long'><p>Get the Facebook avatar from the graph</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fbid</span> : String<div class='sub-desc'><p>Facebook ID</p>\n</div></li><li><span class='pre'>w</span> : Number (optional)<div class='sub-desc'><p>Width</p>\n</div></li><li><span class='pre'>h</span> : Number (optional)<div class='sub-desc'><p>Height</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The open graph url pointing to the image</p>\n</div></li></ul></div></div></div><div id='method-getIOSVersion' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-getIOSVersion' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-getIOSVersion' class='name expandable'>getIOSVersion</a>( <span class='pre'></span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Return the iOS major version ...</div><div class='long'><p>Return the iOS major version</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isAppFirstUsage' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-isAppFirstUsage' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-isAppFirstUsage' class='name expandable'>isAppFirstUsage</a>( <span class='pre'></span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Check if the first open of the app. ...</div><div class='long'><p>Check if the first open of the app.</p>\n\n<p>Call <a href=\"#!/api/Util-method-setAppFirstUsage\" rel=\"Util-method-setAppFirstUsage\" class=\"docClass\">setAppFirstUsage</a> to set the first usage of the app.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isIOS7' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-isIOS7' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-isIOS7' class='name expandable'>isIOS7</a>( <span class='pre'></span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Check if is iOS 7 ...</div><div class='long'><p>Check if is iOS 7</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isIOS8' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-isIOS8' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-isIOS8' class='name expandable'>isIOS8</a>( <span class='pre'></span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Check if is iOS 8 ...</div><div class='long'><p>Check if is iOS 8</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-now' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-now' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-now' class='name expandable'>now</a>( <span class='pre'>t</span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Get the current UNIX timestamp. ...</div><div class='long'><p>Get the current UNIX timestamp.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>t</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-openFacebookProfile' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-openFacebookProfile' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-openFacebookProfile' class='name expandable'>openFacebookProfile</a>( <span class='pre'>fbid</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Open a Facebook profile in the Facebook application ...</div><div class='long'><p>Open a Facebook profile in the Facebook application</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fbid</span> : String<div class='sub-desc'><p>Facebook ID</p>\n</div></li></ul></div></div></div><div id='method-openInStore' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-openInStore' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-openInStore' class='name expandable'>openInStore</a>( <span class='pre'>appid</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Open the iTunes Store or Google Play Store of specified appid ...</div><div class='long'><p>Open the iTunes Store or Google Play Store of specified appid</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>appid</span> : String<div class='sub-desc'><p>Application ID</p>\n</div></li></ul></div></div></div><div id='method-openTwitterProfile' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-openTwitterProfile' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-openTwitterProfile' class='name expandable'>openTwitterProfile</a>( <span class='pre'>twid</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Open a Twitter profile in the Twitter application ...</div><div class='long'><p>Open a Twitter profile in the Twitter application</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>twid</span> : String<div class='sub-desc'><p>Twitter screen name</p>\n</div></li></ul></div></div></div><div id='method-openTwitterStatus' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-openTwitterStatus' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-openTwitterStatus' class='name expandable'>openTwitterStatus</a>( <span class='pre'>userid, statusid</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Open a Twitter status in the Twitter application ...</div><div class='long'><p>Open a Twitter status in the Twitter application</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>userid</span> : String<div class='sub-desc'><p>The user id</p>\n</div></li><li><span class='pre'>statusid</span> : String<div class='sub-desc'><p>The status id</p>\n</div></li></ul></div></div></div><div id='method-openURL' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-openURL' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-openURL' class='name expandable'>openURL</a>( <span class='pre'>url, [fallback], [error]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Try to open the URL with Ti.Platform.openURL, catching errors. ...</div><div class='long'><p>Try to open the URL with <code>Ti.Platform.openURL</code>, catching errors.</p>\n\n<p>If can't open the primary argument (url), open the fallback.</p>\n\n<p>If can't open the fallback, and <code>error</code> is set, show the error dialog.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : String<div class='sub-desc'><p>The URL to open</p>\n</div></li><li><span class='pre'>fallback</span> : String|Function (optional)<div class='sub-desc'><p>If is a string, try to open the URL. If is a functions, call it.</p>\n</div></li><li><span class='pre'>error</span> : String (optional)<div class='sub-desc'><p>The error to show</p>\n</div></li></ul></div></div></div><div id='method-option' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-option' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-option' class='name expandable'>option</a>( <span class='pre'>options, cancelIndex, callback, opt</span> ) : Ti.UI.OptionDialog<span class=\"signature\"></span></div><div class='description'><div class='short'>Create and show an Option Dialog. ...</div><div class='long'><p>Create and show an Option Dialog.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Array<div class='sub-desc'><p>The options to show, as Array of Strings.</p>\n</div></li><li><span class='pre'>cancelIndex</span> : Number<div class='sub-desc'><p>The cancelIndex.</p>\n</div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>Callback to invoke. The index of the selected index is passed.</p>\n</div></li><li><span class='pre'>opt</span> : Object<div class='sub-desc'><p>Additionals options for <code>Ti.UI.createOptionDialog</code></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Ti.UI.OptionDialog</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-optionWithDict' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-optionWithDict' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-optionWithDict' class='name expandable'>optionWithDict</a>( <span class='pre'>dict</span> ) : Ti.UI.OptionDialog<span class=\"signature\"></span></div><div class='description'><div class='short'>Create and show an Option Dialog. ...</div><div class='long'><p>Create and show an Option Dialog.</p>\n\n<p>It's an helper function for <a href=\"#!/api/Util-method-option\" rel=\"Util-method-option\" class=\"docClass\">option</a> method.</p>\n\n<p>Automatically add a <em>Cancel</em> cancelIndexed button.</p>\n\n<p>The <code>dict</code> argument must be in the form:</p>\n\n<pre><code class=\"javascript\">[\n    { title: \"Option one\", callback: function(){ ... } },\n    { title: \"Option two\", callback: function(){ ... } },\n    ...\n]\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dict</span> : Array<div class='sub-desc'><p>The dictionary</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Ti.UI.OptionDialog</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-parseJSON' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-parseJSON' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-parseJSON' class='name expandable'>parseJSON</a>( <span class='pre'>json</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Try to parse a JSON, and silently fail on error, returning a null in this case. ...</div><div class='long'><p>Try to parse a JSON, and silently fail on error, returning a <code>null</code> in this case.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>json</span> : String<div class='sub-desc'><p>The JSON to parse.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-parseSchema' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-parseSchema' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-parseSchema' class='name expandable'>parseSchema</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Parse the URL schema on app startup/resume. ...</div><div class='long'><p>Parse the URL schema on app startup/resume.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-populateListViewFromCollection' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-populateListViewFromCollection' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-populateListViewFromCollection' class='name expandable'>populateListViewFromCollection</a>( <span class='pre'>C, opt, [$ui]</span> ) : Array<span class=\"signature\"></span></div><div class='description'><div class='short'>Parse an array or a Backbone.Collection and populate a ListView with this values. ...</div><div class='long'><p>Parse an array or a Backbone.Collection and populate a ListView with this values.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>C</span> : Array<div class='sub-desc'><p>Array or Backbone.Collection to parse</p>\n</div></li><li><span class='pre'>opt</span> : Object<div class='sub-desc'><p>If <code>groupBy</code> is specified, and is a function, you must provide a valid callback to group elements.</p>\n\n<p>If <code>groupBy</code> is a string, try to group with <code>_.groupBy</code>.</p>\n</div></li><li><span class='pre'>$ui</span> : Ti.UI.ListView (optional)<div class='sub-desc'><p>The ListView to populate. If is not specified, return the elements instead populating directly.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-prompt' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-prompt' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-prompt' class='name expandable'>prompt</a>( <span class='pre'>title, msg, [buttons], [cancelIndex], [callback], [opt]</span> ) : Ti.UI.AlertDialog<span class=\"signature\"></span></div><div class='description'><div class='short'>Create and show a prompt dialog ...</div><div class='long'><p>Create and show a prompt dialog</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>title</span> : String<div class='sub-desc'><p>The title</p>\n</div></li><li><span class='pre'>msg</span> : String<div class='sub-desc'><p>The message</p>\n</div></li><li><span class='pre'>buttons</span> : Array (optional)<div class='sub-desc'><p>The buttons to show</p>\n</div></li><li><span class='pre'>cancelIndex</span> : Number (optional)<div class='sub-desc'><p>Cancel index for buttons</p>\n</div></li><li><span class='pre'>callback</span> : Function (optional)<div class='sub-desc'><p>The callback to invoke when clicking on a button. The index of the button is passed.</p>\n</div></li><li><span class='pre'>opt</span> : Object (optional)<div class='sub-desc'><p>Additional options for <code>Ti.UI.createAlertDialog</code></p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Ti.UI.AlertDialog</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-reviewInStore' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-reviewInStore' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-reviewInStore' class='name expandable'>reviewInStore</a>( <span class='pre'>appid</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Open the iTunes Store or Google Play Store to review this app\n\nSet the app.itunes and app.id in the config.json ...</div><div class='long'><p>Open the iTunes Store or Google Play Store to review this app</p>\n\n<p>Set the <code>app.itunes</code> and <code>app.id</code> in the <strong>config.json</strong></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>appid</span> : String<div class='sub-desc'><p>Application ID (default read config.json)</p>\n</div></li></ul></div></div></div><div id='method-setAppFirstUsage' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-setAppFirstUsage' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-setAppFirstUsage' class='name expandable'>setAppFirstUsage</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set the app first usage date. ...</div><div class='long'><p>Set the app first usage date.</p>\n\n<p>Use in conjunction with <a href=\"#!/api/Util-method-isAppFirstUsage\" rel=\"Util-method-isAppFirstUsage\" class=\"docClass\">isAppFirstUsage</a></p>\n</div></div></div><div id='method-simpleAlert' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-simpleAlert' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-simpleAlert' class='name expandable'>simpleAlert</a>( <span class='pre'>msg, cb</span> ) : Ti.UI.AlertDialog<span class=\"signature\"></span></div><div class='description'><div class='short'>Create and show an Alert Dialog that show only a message ...</div><div class='long'><p>Create and show an Alert Dialog that show only a message</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>msg</span> : String<div class='sub-desc'><p>The message</p>\n</div></li><li><span class='pre'>cb</span> : Function<div class='sub-desc'><p>The callback</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Ti.UI.AlertDialog</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-startActivity' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-startActivity' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-startActivity' class='name expandable'>startActivity</a>( <span class='pre'>opt, [error]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Valid only on Android, start the activity catching any possible errors. ...</div><div class='long'><p>Valid only on Android, start the activity catching any possible errors.</p>\n\n<p>If <code>error</code> is provided, show the error dialog with this message.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>opt</span> : Object<div class='sub-desc'><p>Options for <code>createIntent(...)</code></p>\n</div></li><li><span class='pre'>error</span> : String (optional)<div class='sub-desc'><p>Error message</p>\n</div></li></ul></div></div></div><div id='method-timestamp' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-timestamp' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-timestamp' class='name expandable'>timestamp</a>( <span class='pre'>[t]</span> ) : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Get the UNIX timestamp. ...</div><div class='long'><p>Get the UNIX timestamp.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>t</span> : String (optional)<div class='sub-desc'><p>The date to parse. If is not provided, get current timestamp.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-tryOpenURL' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-tryOpenURL' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-tryOpenURL' class='name expandable'>tryOpenURL</a>( <span class='pre'>array</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Try to open a series of URLs, cycling over all while a valid URL is found. ...</div><div class='long'><p>Try to open a series of URLs, cycling over all while a valid URL is found.</p>\n\n<p>On Android, open the last element of the array.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>array</span> : Array<div class='sub-desc'><p>The array of URLs</p>\n</div></li></ul></div></div></div><div id='method-uniqid' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Util'>Util</span><br/><a href='source/util.html#Util-method-uniqid' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Util-method-uniqid' class='name expandable'>uniqid</a>( <span class='pre'>prefix, more_entropy</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>View link ...</div><div class='long'><p>View <a href=\"http://www.php.net/manual/en/function.uniqid.php\">link</a></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>prefix</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>more_entropy</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});