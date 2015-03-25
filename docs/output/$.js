Ext.data.JsonP.$({"tagname":"class","name":"$","autodetected":{},"files":[{"filename":"jQuery.js","href":"jQuery.html#$"},{"filename":"plugin.js","href":"plugin.html#$"}],"alternateClassNames":["jQuery"],"singleton":true,"private":true,"members":[{"name":"woven","tagname":"property","owner":"$","id":"property-woven","meta":{}},{"name":"unweave","tagname":"method","owner":"$","id":"method-unweave","meta":{}},{"name":"weave","tagname":"method","owner":"$","id":"method-weave","meta":{}},{"name":"woven","tagname":"method","owner":"$","id":"method-woven","meta":{}}],"aliases":{},"id":"class-S-","extends":null,"mixins":[],"requires":[],"uses":[],"short_doc":"Represents the jQuery object and all TroopJS extensions:\n\n\ncustom selector expressions (via properties)\nplugins metho...","classIcon":"icon-singleton","superclasses":[],"subclasses":[],"mixedInto":[],"implementedBy":[],"implements":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>jQuery</div><h4>Files</h4><div class='dependency'><a href='source/jQuery.html#$' target='_blank'>jQuery.js</a></div><div class='dependency'><a href='source/plugin.html#$' target='_blank'>plugin.js</a></div></pre><div class='doc-contents'><div class='rounded-box private-box'><p><strong>NOTE:</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p></div><p>Represents the <a href=\"http://jquery.com\">jQuery</a> object and all TroopJS extensions:</p>\n\n<ul>\n<li>custom selector expressions (via properties)</li>\n<li>plugins methods</li>\n<li>custom events</li>\n</ul>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-woven' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='$'>$</span><br/><a href='source/plugin.html#$-property-woven' target='_blank' class='view-source'>view source</a></div><a href='#!/api/$-property-woven' class='name expandable'>woven</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"></span></div><div class='description'><div class='short'><p>jQuery <code>:woven</code> expression</p>\n</div><div class='long'><p>jQuery <code>:woven</code> expression</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-unweave' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='$'>$</span><br/><a href='source/plugin.html#$-method-unweave' target='_blank' class='view-source'>view source</a></div><a href='#!/api/$-method-unweave' class='name expandable'>unweave</a>( <span class='pre'>[args]</span> ) : <a href=\"#!/api/Promise\" rel=\"Promise\" class=\"docClass\">Promise</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Destroy all widget instances living on this element, that are created\nby widget.weave, it is also to clean up the att...</div><div class='long'><p>Destroy all <a href=\"#!/api/widget.component\" rel=\"widget.component\" class=\"docClass\">widget</a> instances living on this element, that are created\nby <a href=\"#!/api/widget.weave\" rel=\"widget.weave\" class=\"docClass\">widget.weave</a>, it is also to clean up the attributes\nand data references to the previously instantiated widgets.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : ...* (optional)<div class='sub-desc'><p>Arguments that will be passed to the <a href=\"#!/api/core.component.signal.finalize\" rel=\"core.component.signal.finalize\" class=\"docClass\">finalize</a> signal</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Promise\" rel=\"Promise\" class=\"docClass\">Promise</a></span><div class='sub-desc'><p>Promise to the completion of unweaving all woven widgets.</p>\n</div></li></ul></div></div></div><div id='method-weave' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='$'>$</span><br/><a href='source/plugin.html#$-method-weave' target='_blank' class='view-source'>view source</a></div><a href='#!/api/$-method-weave' class='name expandable'>weave</a>( <span class='pre'>[args]</span> ) : <a href=\"#!/api/Promise\" rel=\"Promise\" class=\"docClass\">Promise</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Instantiate all widgets  specified in the data-weave attribute\nof this element, and to signal the widget for start wi...</div><div class='long'><p>Instantiate all <a href=\"#!/api/widget.component\" rel=\"widget.component\" class=\"docClass\">widgets</a>  specified in the <code>data-weave</code> attribute\nof this element, and to signal the widget for start with the arguments.</p>\n\n<p>The weaving will result in:</p>\n\n<ul>\n<li>Updates the <code>data-woven</code> attribute with the created widget instances names.</li>\n<li>The <code>$weft</code> data property will reference the widget instances.</li>\n</ul>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : ...* (optional)<div class='sub-desc'><p>Arguments that will be passed to the <a href=\"#!/api/core.component.signal.start\" rel=\"core.component.signal.start\" class=\"docClass\">start</a> signal</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Promise\" rel=\"Promise\" class=\"docClass\">Promise</a></span><div class='sub-desc'><p>Promise for the completion of weaving all widgets.</p>\n</div></li></ul></div></div></div><div id='method-woven' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='$'>$</span><br/><a href='source/plugin.html#$-method-woven' target='_blank' class='view-source'>view source</a></div><a href='#!/api/$-method-woven' class='name expandable'>woven</a>( <span class='pre'>[selector]</span> ) : <a href=\"#!/api/Promise\" rel=\"Promise\" class=\"docClass\">Promise</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Retrieve all or specific widget instances living on this element, that are\ncreated by widget.weave. ...</div><div class='long'><p>Retrieve all or specific <a href=\"#!/api/widget.component\" rel=\"widget.component\" class=\"docClass\">widget</a> instances living on this element, that are\ncreated by <a href=\"#!/api/widget.weave\" rel=\"widget.weave\" class=\"docClass\">widget.weave</a>.</p>\n\n<p>It also lives as a jquery plugin as <a href=\"#!/api/$-method-woven\" rel=\"$-method-woven\" class=\"docClass\">woven</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>selector</span> : ...<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> (optional)<div class='sub-desc'><p>One or more widget selectors to narrow down the returned ones.</p>\n\n<ul>\n<li>(empty string) retrieves all woven widgets</li>\n<li><code>module/name</code> retrieves widgets matching module name</li>\n<li><code>module/name@instance</code> retrieves widgets matching both module name and instance id</li>\n</ul>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Promise\" rel=\"Promise\" class=\"docClass\">Promise</a></span><div class='sub-desc'><p>Promise to the completion of retrieving the woven widgets array.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{"private":true,"singleton":true}});