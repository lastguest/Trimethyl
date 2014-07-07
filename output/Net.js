Ext.data.JsonP.Net({"tagname":"class","name":"Net","autodetected":{},"files":[{"filename":"net.js","href":"net.html#Net"}],"author":[{"tagname":"author","name":"Flavio De Stefano","email":"flavio.destefano@caffeinalab.com"}],"members":[{"name":"config","tagname":"property","owner":"Net","id":"property-config","meta":{}},{"name":"abortRequest","tagname":"method","owner":"Net","id":"method-abortRequest","meta":{}},{"name":"addHeader","tagname":"method","owner":"Net","id":"method-addHeader","meta":{}},{"name":"connectToServer","tagname":"method","owner":"Net","id":"method-connectToServer","meta":{}},{"name":"deleteCache","tagname":"method","owner":"Net","id":"method-deleteCache","meta":{}},{"name":"get","tagname":"method","owner":"Net","id":"method-get","meta":{}},{"name":"getJSON","tagname":"method","owner":"Net","id":"method-getJSON","meta":{}},{"name":"getQueue","tagname":"method","owner":"Net","id":"method-getQueue","meta":{}},{"name":"getQueuedRequest","tagname":"method","owner":"Net","id":"method-getQueuedRequest","meta":{}},{"name":"isOnline","tagname":"method","owner":"Net","id":"method-isOnline","meta":{}},{"name":"isQueueEmpty","tagname":"method","owner":"Net","id":"method-isQueueEmpty","meta":{}},{"name":"isServerConnected","tagname":"method","owner":"Net","id":"method-isServerConnected","meta":{}},{"name":"post","tagname":"method","owner":"Net","id":"method-post","meta":{}},{"name":"postJSON","tagname":"method","owner":"Net","id":"method-postJSON","meta":{}},{"name":"removeHeader","tagname":"method","owner":"Net","id":"method-removeHeader","meta":{}},{"name":"resetCache","tagname":"method","owner":"Net","id":"method-resetCache","meta":{}},{"name":"resetCookies","tagname":"method","owner":"Net","id":"method-resetCookies","meta":{}},{"name":"resetErrorHandler","tagname":"method","owner":"Net","id":"method-resetErrorHandler","meta":{}},{"name":"resetHeaders","tagname":"method","owner":"Net","id":"method-resetHeaders","meta":{}},{"name":"send","tagname":"method","owner":"Net","id":"method-send","meta":{}},{"name":"setErrorHandler","tagname":"method","owner":"Net","id":"method-setErrorHandler","meta":{}},{"name":"usePingServer","tagname":"method","owner":"Net","id":"method-usePingServer","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Net","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/net.html#Net' target='_blank'>net.js</a></div></pre><div class='doc-contents'><p>Network module</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-config' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Net'>Net</span><br/><a href='source/net.html#Net-property-config' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Net-property-config' class='name expandable'>config</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>base: The base URL of the API\ntimeout: Global timeout for the requests. ...</div><div class='long'><ul>\n<li><strong>base</strong>: The base URL of the API</li>\n<li><strong>timeout</strong>: Global timeout for the requests. After this value (express in milliseconds) the requests throw an error. Default: <code>http://localhost</code></li>\n<li><strong>useCache</strong>: Check if the requests are automatically cached. Default: <code>true</code></li>\n<li><strong>headers</strong>: Global headers for all requests. Default: <code>{}</code></li>\n<li><strong>usePingServer</strong>: Enable the PING-Server support. Default: <code>true</code></li>\n<li><strong>autoOfflineMessage</strong>: Enable the automatic alert if the connection is offline</li>\n</ul>\n\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-abortRequest' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Net'>Net</span><br/><a href='source/net.html#Net-method-abortRequest' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Net-method-abortRequest' class='name expandable'>abortRequest</a>( <span class='pre'>hash</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Abort the request identified by the hash in the queued requests\n\n If a complete request object is passed, the hash is...</div><div class='long'><p>Abort the request identified by the hash in the queued requests</p>\n\n<p> If a complete request object is passed, the hash is calculated</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>hash</span> : String|Object<div class='sub-desc'><p>The hash or the request</p>\n</div></li></ul></div></div></div><div id='method-addHeader' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Net'>Net</span><br/><a href='source/net.html#Net-method-addHeader' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Net-method-addHeader' class='name expandable'>addHeader</a>( <span class='pre'>key, value</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Add a global header for all requests ...</div><div class='long'><p>Add a global header for all requests</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : String<div class='sub-desc'><p>The header key</p>\n</div></li><li><span class='pre'>value</span> : String<div class='sub-desc'><p>The header value</p>\n</div></li></ul></div></div></div><div id='method-connectToServer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Net'>Net</span><br/><a href='source/net.html#Net-method-connectToServer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Net-method-connectToServer' class='name expandable'>connectToServer</a>( <span class='pre'>cb</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Connect to the PING-Server\n\nThis method also set the properties for settings.{X}\n\nFire a net.ping.success on success\n...</div><div class='long'><p>Connect to the PING-Server</p>\n\n<p>This method also set the properties for <strong>settings.{X}</strong></p>\n\n<p>Fire a <em>net.ping.success</em> on success</p>\n\n<p>Fire a <em>net.ping.error</em> on error</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cb</span> : Function<div class='sub-desc'><p>The success callback</p>\n</div></li></ul></div></div></div><div id='method-deleteCache' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Net'>Net</span><br/><a href='source/net.html#Net-method-deleteCache' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Net-method-deleteCache' class='name expandable'>deleteCache</a>( <span class='pre'>request</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Delete the cache entry for the passed request\n\nIf a complete request object is passed, the hash is calculated ...</div><div class='long'><p>Delete the cache entry for the passed request</p>\n\n<p>If a complete request object is passed, the hash is calculated</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>request</span> : String|Object<div class='sub-desc'><p>[description]</p>\n</div></li></ul></div></div></div><div id='method-get' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Net'>Net</span><br/><a href='source/net.html#Net-method-get' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Net-method-get' class='name expandable'>get</a>( <span class='pre'>url, success, error</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Make a GET request to that URL ...</div><div class='long'><p>Make a GET request to that URL</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : String<div class='sub-desc'><p>The endpoint url</p>\n</div></li><li><span class='pre'>success</span> : Function<div class='sub-desc'><p>Success callback</p>\n</div></li><li><span class='pre'>error</span> : Function<div class='sub-desc'><p>Error callback</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The hash</p>\n</div></li></ul></div></div></div><div id='method-getJSON' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Net'>Net</span><br/><a href='source/net.html#Net-method-getJSON' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Net-method-getJSON' class='name expandable'>getJSON</a>( <span class='pre'>url, data, success, error</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Make a GET request to that url with that data and setting the mime forced to JSON ...</div><div class='long'><p>Make a GET request to that url with that data and setting the mime forced to JSON</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : String<div class='sub-desc'><p>The endpoint url</p>\n</div></li><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>The data</p>\n</div></li><li><span class='pre'>success</span> : Function<div class='sub-desc'><p>Success callback</p>\n</div></li><li><span class='pre'>error</span> : Function<div class='sub-desc'><p>Error callback</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The hash</p>\n</div></li></ul></div></div></div><div id='method-getQueue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Net'>Net</span><br/><a href='source/net.html#Net-method-getQueue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Net-method-getQueue' class='name expandable'>getQueue</a>( <span class='pre'></span> ) : Array<span class=\"signature\"></span></div><div class='description'><div class='short'>Get the current requests queue ...</div><div class='long'><p>Get the current requests queue</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getQueuedRequest' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Net'>Net</span><br/><a href='source/net.html#Net-method-getQueuedRequest' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Net-method-getQueuedRequest' class='name expandable'>getQueuedRequest</a>( <span class='pre'>hash</span> ) : Ti.Network.HTTPClient<span class=\"signature\"></span></div><div class='description'><div class='short'>Get the request identified by the hash in the queued requests\n\nIf a complete request object is passed, the hash is ca...</div><div class='long'><p>Get the request identified by the hash in the queued requests</p>\n\n<p>If a complete request object is passed, the hash is calculated</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>hash</span> : String|Object<div class='sub-desc'><p>The hash or the request</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Ti.Network.HTTPClient</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isOnline' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Net'>Net</span><br/><a href='source/net.html#Net-method-isOnline' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Net-method-isOnline' class='name expandable'>isOnline</a>( <span class='pre'></span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Check the internet connectivity ...</div><div class='long'><p>Check the internet connectivity</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>The status</p>\n</div></li></ul></div></div></div><div id='method-isQueueEmpty' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Net'>Net</span><br/><a href='source/net.html#Net-method-isQueueEmpty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Net-method-isQueueEmpty' class='name expandable'>isQueueEmpty</a>( <span class='pre'></span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Check if the requests queue is empty ...</div><div class='long'><p>Check if the requests queue is empty</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isServerConnected' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Net'>Net</span><br/><a href='source/net.html#Net-method-isServerConnected' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Net-method-isServerConnected' class='name expandable'>isServerConnected</a>( <span class='pre'></span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>When using a PING-Server, check if the connection has been estabilished ...</div><div class='long'><p>When using a PING-Server, check if the connection has been estabilished</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-post' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Net'>Net</span><br/><a href='source/net.html#Net-method-post' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Net-method-post' class='name expandable'>post</a>( <span class='pre'>url, data, success, error</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Make a POST request to that URL ...</div><div class='long'><p>Make a POST request to that URL</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : String<div class='sub-desc'><p>The endpoint url</p>\n</div></li><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>The data</p>\n</div></li><li><span class='pre'>success</span> : Function<div class='sub-desc'><p>Success callback</p>\n</div></li><li><span class='pre'>error</span> : Function<div class='sub-desc'><p>Error callback</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The hash</p>\n</div></li></ul></div></div></div><div id='method-postJSON' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Net'>Net</span><br/><a href='source/net.html#Net-method-postJSON' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Net-method-postJSON' class='name expandable'>postJSON</a>( <span class='pre'>url, data, success, error</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Make a POST request to that url with that data and setting the mime forced to JSON ...</div><div class='long'><p>Make a POST request to that url with that data and setting the mime forced to JSON</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : String<div class='sub-desc'><p>The endpoint url</p>\n</div></li><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>The data</p>\n</div></li><li><span class='pre'>success</span> : Function<div class='sub-desc'><p>Success callback</p>\n</div></li><li><span class='pre'>error</span> : Function<div class='sub-desc'><p>Error callback</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The hash</p>\n</div></li></ul></div></div></div><div id='method-removeHeader' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Net'>Net</span><br/><a href='source/net.html#Net-method-removeHeader' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Net-method-removeHeader' class='name expandable'>removeHeader</a>( <span class='pre'>key</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Remove a global header ...</div><div class='long'><p>Remove a global header</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : String<div class='sub-desc'><p>The header key</p>\n</div></li></ul></div></div></div><div id='method-resetCache' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Net'>Net</span><br/><a href='source/net.html#Net-method-resetCache' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Net-method-resetCache' class='name expandable'>resetCache</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Reset all cache ...</div><div class='long'><p>Reset all cache</p>\n</div></div></div><div id='method-resetCookies' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Net'>Net</span><br/><a href='source/net.html#Net-method-resetCookies' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Net-method-resetCookies' class='name expandable'>resetCookies</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Reset the cookies for all requests ...</div><div class='long'><p>Reset the cookies for all requests</p>\n</div></div></div><div id='method-resetErrorHandler' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Net'>Net</span><br/><a href='source/net.html#Net-method-resetErrorHandler' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Net-method-resetErrorHandler' class='name expandable'>resetErrorHandler</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Reset the original error handler ...</div><div class='long'><p>Reset the original error handler</p>\n</div></div></div><div id='method-resetHeaders' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Net'>Net</span><br/><a href='source/net.html#Net-method-resetHeaders' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Net-method-resetHeaders' class='name expandable'>resetHeaders</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Reset all globals headers ...</div><div class='long'><p>Reset all globals headers</p>\n</div></div></div><div id='method-send' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Net'>Net</span><br/><a href='source/net.html#Net-method-send' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Net-method-send' class='name expandable'>send</a>( <span class='pre'>request</span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The main function of the module, create the HTTPClient and make the request\n\nThere are various options to pass:\n\n\nurl...</div><div class='long'><p>The main function of the module, create the HTTPClient and make the request</p>\n\n<p>There are various options to pass:</p>\n\n<ul>\n<li><strong>url</strong>: The endpoint URL</li>\n<li><strong>method</strong>: The HTTP method to use (GET|POST|PUT|PATCH|..)</li>\n<li><strong>headers</strong>: An Object key-value of additional headers</li>\n<li><strong>timeout</strong>: Timeout after stopping the request and triggering an error</li>\n<li><strong>cache</strong>: Set to false to disable the cache</li>\n<li><strong>success</strong>: The success callback</li>\n<li><strong>error</strong>: The error callback</li>\n<li><strong>mime</strong>: Override the mime for that request (like <code>json</code>)</li>\n<li><strong>expire</strong>: Override the TTL seconds for the cache</li>\n</ul>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>request</span> : Object<div class='sub-desc'><p>The request dictionary</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The hash to identify this request</p>\n</div></li></ul></div></div></div><div id='method-setErrorHandler' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Net'>Net</span><br/><a href='source/net.html#Net-method-setErrorHandler' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Net-method-setErrorHandler' class='name expandable'>setErrorHandler</a>( <span class='pre'>fun</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Set a new global handler for the errors ...</div><div class='long'><p>Set a new global handler for the errors</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fun</span> : Function<div class='sub-desc'><p>The new function</p>\n</div></li></ul></div></div></div><div id='method-usePingServer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Net'>Net</span><br/><a href='source/net.html#Net-method-usePingServer' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Net-method-usePingServer' class='name expandable'>usePingServer</a>( <span class='pre'></span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Return the value of config.usePingServer ...</div><div class='long'><p>Return the value of config.usePingServer</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});