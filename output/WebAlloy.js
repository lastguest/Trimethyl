Ext.data.JsonP.WebAlloy({"tagname":"class","name":"WebAlloy","autodetected":{},"files":[{"filename":"weballoy.js","href":"weballoy.html#WebAlloy"}],"author":[{"tagname":"author","name":"Flavio De Stefano","email":"flavio.destefano@caffeinalab.com"}],"members":[{"name":"config","tagname":"property","owner":"WebAlloy","id":"property-config","meta":{}},{"name":"createView","tagname":"method","owner":"WebAlloy","id":"method-createView","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-WebAlloy","short_doc":"This is an entire µ-web-framework to write Titanium-Alloy apps in HTML/CSS/JS, without native objects. ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/weballoy.html#WebAlloy' target='_blank'>weballoy.js</a></div></pre><div class='doc-contents'><p>This is an entire µ-web-framework to write Titanium-Alloy apps in HTML/CSS/JS, without native objects.</p>\n\n<p>The unique method <code><a href=\"#!/api/WebAlloy-method-createView\" rel=\"WebAlloy-method-createView\" class=\"docClass\">WebAlloy.createView</a></code> create a WebView with static html inside.</p>\n\n<p>To work with WebAlloy, you have to replicate the exact structure in the app directory (Alloy).</p>\n\n<h3>Globals</h3>\n\n<h4>app.css</h4>\n\n<p>Global CSS included in each view.</p>\n\n<h4>app.jslocal</h4>\n\n<p>Global JS included in each view.</p>\n\n<h4>controllers/foo.jslocal</h4>\n\n<p>Javascript file included in the specific controller, after app.jslocal and jquery.jslocal</p>\n\n<h4>views/foo.tpl</h4>\n\n<p>HTML/TPL (underscore templating system) file that is parsed and written in the static HTML.</p>\n\n<h4>styles/foo.css</h4>\n\n<p>CSS file included in the specific controller.</p>\n\n<h3>lib/**.jslocal</h3>\n\n<p>Put your jslocal files here, they are automatically appended at the end of the HTML.</p>\n\n<p>When you have replicated this structure, you can just call:</p>\n\n<pre><code><a href=\"#!/api/WebAlloy-method-createView\" rel=\"WebAlloy-method-createView\" class=\"docClass\">WebAlloy.createView</a>({\n    name: 'foo',\n    webdata: { ... },\n    ...\n});\n</code></pre>\n\n<p>The <strong>name</strong> arg is to specific the files to load.</p>\n\n<p>The <strong>webdata</strong> object is passed to the HTML file and rendered with the Undescore template system.</p>\n\n<p>All the other arguments are Ti-UI specific for the classic WebView.</p>\n\n<h3>HTML output</h3>\n\n<p>So, the final result is an HTML string passed to the WebView, like this:</p>\n\n<pre><code>&lt;!DOCTYPE html&gt;\n&lt;html&gt;\n    &lt;head&gt;\n        ... metas ...\n        &lt;style&gt;{{ app.css }}&lt;/style&gt;\n        &lt;style&gt;{{ your_controller.css }}&lt;/style&gt;\n    &lt;/head&gt;\n    &lt;body&gt;\n        &lt;div id=\"main\"&gt;\n            {{ controller.tpl (rendered in undescore with webdata argument) }}\n        &lt;/div&gt;\n        &lt;script&gt;{{ lib/**.jslocal }}&lt;/script&gt;\n        &lt;script&gt;{{ app.jslocal }}&lt;/script&gt;\n        &lt;script&gt;{{ controller.jslocal }}&lt;/script&gt;\n    &lt;/body&gt;\n&lt;/html&gt;\n</code></pre>\n\n<h3>WebView additional method</h3>\n\n<p>Basically, you can interact with DOM elements with <code>evalJS</code>.</p>\n\n<p>There are some proxy methods designed to interact directly:</p>\n\n<h4>render({ data })</h4>\n\n<p>Re-render the template with new data passed.</p>\n\n<h4>call(...)</h4>\n\n<p>Call a function in the WebView.</p>\n\n<p>For example, <code>$.wv.call('foo', 1, 2, {x:1})</code> will be converted to js in <code>foo(1, 2, {x:1})</code>.</p>\n\n<h4>$(selector).call(...)</h4>\n\n<p>Call a function in a DOM-RAW object.</p>\n\n<h4>$(selector).get(...)</h4>\n\n<p>Get a property of a DOM-RAW object.</p>\n\n<h4>$(selector).set(...)</h4>\n\n<p>Set a property of a DOM-RAW object.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-config' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='WebAlloy'>WebAlloy</span><br/><a href='source/weballoy.html#WebAlloy-property-config' target='_blank' class='view-source'>view source</a></div><a href='#!/api/WebAlloy-property-config' class='name expandable'>config</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>minify: Minify all CSS/JS. ...</div><div class='long'><ul>\n<li><strong>minify</strong>: Minify all CSS/JS. Default: ENV_PRODUCTION</li>\n</ul>\n\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-createView' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='WebAlloy'>WebAlloy</span><br/><a href='source/weballoy.html#WebAlloy-method-createView' target='_blank' class='view-source'>view source</a></div><a href='#!/api/WebAlloy-method-createView' class='name expandable'>createView</a>( <span class='pre'>args</span> ) : Ti.UI.WebView<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : Object<div class='sub-desc'><p>Arguments for the view.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Ti.UI.WebView</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});