Ext.data.JsonP.XPUI({"tagname":"class","name":"XPUI","autodetected":{},"files":[{"filename":"xp.ui.js","href":"xp.ui.html#XPUI"}],"author":[{"tagname":"author","name":"Flavio De Stefano","email":"flavio.destefano@caffeinalab.com"}],"members":[{"name":"createLabel","tagname":"method","owner":"XPUI","id":"method-createLabel","meta":{}},{"name":"createListView","tagname":"method","owner":"XPUI","id":"method-createListView","meta":{}},{"name":"createNavigationWindow","tagname":"method","owner":"XPUI","id":"method-createNavigationWindow","meta":{}},{"name":"createTextArea","tagname":"method","owner":"XPUI","id":"method-createTextArea","meta":{}},{"name":"createTextField","tagname":"method","owner":"XPUI","id":"method-createTextField","meta":{}},{"name":"createWindow","tagname":"method","owner":"XPUI","id":"method-createWindow","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-XPUI","short_doc":"Provide CROSS-PLATFORM UI elements to handle differences between platforms\n\n non-CommonJS module\n\nYou have to use in ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/xp.ui.html#XPUI' target='_blank'>xp.ui.js</a></div></pre><div class='doc-contents'><p>Provide <strong>CROSS-PLATFORM</strong> UI elements to handle differences between platforms</p>\n\n<p><strong> non-CommonJS module</strong></p>\n\n<p>You have to use in Alloy with <code>module=\"xp.ui\"</code></p>\n\n<p>Inspired to @FokkeZB UTIL. Thanks! :)\nhttps://github.com/CaffeinaLab/Trimethyl/edit/master/xp.ui.js</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-createLabel' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='XPUI'>XPUI</span><br/><a href='source/xp.ui.html#XPUI-method-createLabel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/XPUI-method-createLabel' class='name expandable'>createLabel</a>( <span class='pre'>args</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>iOS\n\nAdd xp-support for VERY BASIC HTML. ...</div><div class='long'><h2>iOS</h2>\n\n<p>Add xp-support for <strong>VERY BASIC</strong> HTML.</p>\n\n<p>For now, supports <code>&lt;b&gt;&lt;i&gt;&lt;u&gt;&lt;br&gt;&lt;p&gt;</code> tags.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-createListView' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='XPUI'>XPUI</span><br/><a href='source/xp.ui.html#XPUI-method-createListView' target='_blank' class='view-source'>view source</a></div><a href='#!/api/XPUI-method-createListView' class='name expandable'>createListView</a>( <span class='pre'>args</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Added listeners:\n\n\nitemdblclick: Similar to itemclick, but for double item click ...</div><div class='long'><p>Added listeners:</p>\n\n<ul>\n<li><strong>itemdblclick</strong>: Similar to itemclick, but for double <strong>item</strong> click</li>\n</ul>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-createNavigationWindow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='XPUI'>XPUI</span><br/><a href='source/xp.ui.html#XPUI-method-createNavigationWindow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/XPUI-method-createNavigationWindow' class='name expandable'>createNavigationWindow</a>( <span class='pre'>args</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>iOS\n\nNothing done. ...</div><div class='long'><h2>iOS</h2>\n\n<p>Nothing done.</p>\n\n<h2>Android</h2>\n\n<p>Create a <strong>NavigationWindow-compatible</strong> container that handle all windows in a stack.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : Object<div class='sub-desc'><p>[description]</p>\n</div></li></ul></div></div></div><div id='method-createTextArea' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='XPUI'>XPUI</span><br/><a href='source/xp.ui.html#XPUI-method-createTextArea' target='_blank' class='view-source'>view source</a></div><a href='#!/api/XPUI-method-createTextArea' class='name expandable'>createTextArea</a>( <span class='pre'>args</span> ) : Ti.UI.TextArea<span class=\"signature\"></span></div><div class='description'><div class='short'>Added methods:\n\n\ngetRealValue(): get the effective value when using hintText hack\n\n\n\nAdded properties:\n\n\nrealValue: g...</div><div class='long'><p>Added methods:</p>\n\n<ul>\n<li><strong>getRealValue()</strong>: get the effective value when using hintText hack</li>\n</ul>\n\n\n<p>Added properties:</p>\n\n<ul>\n<li><strong>realValue</strong>: get the effective value when using hintText hack</li>\n</ul>\n\n\n<h2>iOS</h2>\n\n<p>Adds xp-support for hintText, that is missing on iOS.</p>\n\n<h2>Android</h2>\n\n<p>Removed the annoying autofocus.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Ti.UI.TextArea</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-createTextField' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='XPUI'>XPUI</span><br/><a href='source/xp.ui.html#XPUI-method-createTextField' target='_blank' class='view-source'>view source</a></div><a href='#!/api/XPUI-method-createTextField' class='name expandable'>createTextField</a>( <span class='pre'>args</span> ) : Ti.UI.TextField<span class=\"signature\"></span></div><div class='description'><div class='short'>Added methods:\n\n\ngetRealValue(): get the effective value when using hintText hack\n\n\n\nAdded properties:\n\n\ntextType: Ca...</div><div class='long'><p>Added methods:</p>\n\n<ul>\n<li><strong>getRealValue()</strong>: get the effective value when using hintText hack</li>\n</ul>\n\n\n<p>Added properties:</p>\n\n<ul>\n<li><strong>textType</strong>: Can be <em>email</em> or <em>password</em>, and adjust the keyboard or the mask automatically.</li>\n<li><strong>realValue</strong>: get the effective value when using hintText hack</li>\n</ul>\n\n\n<h2>iOS</h2>\n\n<p>Nothing done</p>\n\n<h2>Android</h2>\n\n<p>Removed the annoying autofocus.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Ti.UI.TextField</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-createWindow' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='XPUI'>XPUI</span><br/><a href='source/xp.ui.html#XPUI-method-createWindow' target='_blank' class='view-source'>view source</a></div><a href='#!/api/XPUI-method-createWindow' class='name expandable'>createWindow</a>( <span class='pre'>args</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>iOS\n\nNothing done. ...</div><div class='long'><h2>iOS</h2>\n\n<p>Nothing done.</p>\n\n<h2>Android</h2>\n\n<p>Adds the support for:</p>\n\n<ul>\n<li><strong>rightNavButton</strong></li>\n<li><strong>title and subtitle</strong>: automatically set the title and subtitle in the ActionBar</li>\n</ul>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});