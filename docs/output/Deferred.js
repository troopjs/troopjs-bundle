Ext.data.JsonP.Deferred({"tagname":"class","name":"Deferred","autodetected":{},"files":[{"filename":"When.js","href":"When.html#Deferred"}],"members":[{"name":"promise","tagname":"property","owner":"Deferred","id":"property-promise","meta":{}},{"name":"resolver","tagname":"property","owner":"Deferred","id":"property-resolver","meta":{}},{"name":"notify","tagname":"method","owner":"Deferred","id":"method-notify","meta":{}},{"name":"reject","tagname":"method","owner":"Deferred","id":"method-reject","meta":{}},{"name":"resolve","tagname":"method","owner":"Deferred","id":"method-resolve","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Deferred","short_doc":"A deferred is a convenience {promise, resolver} pair. ...","classIcon":"icon-class","superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/When.html#Deferred' target='_blank'>When.js</a></div></pre><div class='doc-contents'><p>A deferred is a convenience {promise, resolver} pair. Its promise and resolver parts can be given\nout to separate groups of consumers and producers, respectively, to allow safe, one-way communication.</p>\n\n<blockquote><p><strong>Note</strong> : This documentation was copied from the <a href=\"https://github.com/cujojs/when/blob/master/docs/api.md#deferred\">when.js API documentation</a>.</p></blockquote>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-promise' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Deferred'>Deferred</span><br/><a href='source/When.html#Deferred-property-promise' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Deferred-property-promise' class='name expandable'>promise</a> : <a href=\"#!/api/Promise\" rel=\"Promise\" class=\"docClass\">Promise</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>The promise under this Deferred.</p>\n</div><div class='long'><p>The promise under this Deferred.</p>\n</div></div></div><div id='property-resolver' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Deferred'>Deferred</span><br/><a href='source/When.html#Deferred-property-resolver' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Deferred-property-resolver' class='name expandable'>resolver</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>The resolver represents responsibility--the responsibility of fulfilling or rejecting the associated promise. ...</div><div class='long'><p>The resolver represents responsibility--the responsibility of fulfilling or rejecting the associated promise.\nThis responsibility may be given out separately from the promise itself.</p>\n<ul><li><span class='pre'>resolve</span> : Function<div class='sub-desc'>\n</div></li><li><span class='pre'>reject</span> : Function<div class='sub-desc'>\n</div></li><li><span class='pre'>notify</span> : Function<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-notify' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Deferred'>Deferred</span><br/><a href='source/When.html#Deferred-method-notify' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Deferred-method-notify' class='name expandable'>notify</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Notify about the promise progress. ...</div><div class='long'><p>Notify about the promise progress.</p>\n</div></div></div><div id='method-reject' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Deferred'>Deferred</span><br/><a href='source/When.html#Deferred-method-reject' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Deferred-method-reject' class='name expandable'>reject</a>( <span class='pre'>promiseOrValue</span> ) : <a href=\"#!/api/Promise\" rel=\"Promise\" class=\"docClass\">Promise</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Create a rejected promise with the supplied error as the rejection reason. ...</div><div class='long'><p>Create a rejected promise with the supplied error as the rejection reason.</p>\n\n<pre><code>var rejected = when.reject(error);\n</code></pre>\n\n<p><strong>DEPRECATION WARNING</strong>: In when.js 2.x, error is allowed to be a promise for an error.\nIn when.js 3.0, error will always be used verbatim as the rejection reason, even if it is a promise.</p>\n\n<p>If error is a value, it will be the rejection reason of the returned promise.\nIf error is a promise, its rejection reason will be the rejection reason of the returned promise.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>promiseOrValue</span> : *<div class='sub-desc'><p>the rejected value of the returned promise.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Promise\" rel=\"Promise\" class=\"docClass\">Promise</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-resolve' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Deferred'>Deferred</span><br/><a href='source/When.html#Deferred-method-resolve' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Deferred-method-resolve' class='name expandable'>resolve</a>( <span class='pre'>value</span> ) : <a href=\"#!/api/Promise\" rel=\"Promise\" class=\"docClass\">Promise</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Create a resolved promise for the supplied promiseOrValue. ...</div><div class='long'><p>Create a resolved promise for the supplied promiseOrValue. If promiseOrValue is a value, it will\nbe the resolution value of the returned promise. Returns promiseOrValue if it's a trusted promise.\nIf promiseOrValue is a foreign promise, returns a promise in the same state (resolved or rejected)\nand with the same value as promiseOrValue.</p>\n\n<pre><code>var resolved = when.resolve(promiseOrValue);\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : *<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Promise\" rel=\"Promise\" class=\"docClass\">Promise</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});