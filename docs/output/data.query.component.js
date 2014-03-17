Ext.data.JsonP.data_query_component({"tagname":"class","name":"data.query.component","autodetected":{},"files":[{"filename":"component.js","href":"component2.html#data-query-component"}],"extends":"core.mixin.base","members":[{"name":"displayName","tagname":"property","owner":"core.mixin.base","id":"property-displayName","meta":{"private":true,"readonly":true}},{"name":"instanceCount","tagname":"property","owner":"core.mixin.base","id":"property-instanceCount","meta":{"private":true,"readonly":true}},{"name":"constructor","tagname":"method","owner":"data.query.component","id":"method-constructor","meta":{}},{"name":"ast","tagname":"method","owner":"data.query.component","id":"method-ast","meta":{}},{"name":"parse","tagname":"method","owner":"data.query.component","id":"method-parse","meta":{"chainable":true}},{"name":"reduce","tagname":"method","owner":"data.query.component","id":"method-reduce","meta":{"chainable":true}},{"name":"rewrite","tagname":"method","owner":"data.query.component","id":"method-rewrite","meta":{}},{"name":"toString","tagname":"method","owner":"core.mixin.base","id":"method-toString","meta":{"protected":true}},{"name":"create","tagname":"method","owner":"composer.mixin","id":"static-method-create","meta":{"static":true}},{"name":"extend","tagname":"method","owner":"composer.mixin","id":"static-method-extend","meta":{"static":true}}],"alternateClassNames":[],"aliases":{},"id":"class-data.query.component","classIcon":"icon-class","superclasses":["composer.mixin","core.mixin.base"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/composer.mixin' rel='composer.mixin' class='docClass'>composer.mixin</a><div class='subclass '><a href='#!/api/core.mixin.base' rel='core.mixin.base' class='docClass'>core.mixin.base</a><div class='subclass '><strong>data.query.component</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/component2.html#data-query-component' target='_blank'>component.js</a></div></pre><div class='doc-contents'><p>Component who understands the ubiquitous data query string format.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-displayName' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.mixin.base' rel='core.mixin.base' class='defined-in docClass'>core.mixin.base</a><br/><a href='source/base2.html#core-mixin-base-property-displayName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.mixin.base-property-displayName' class='name expandable'>displayName</a> : String<span class=\"signature\"><span class='private' >private</span><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>The hierarchical namespace for this component that indicates it's functionality. ...</div><div class='long'><p>The hierarchical namespace for this component that indicates it's functionality.</p>\n<p>Defaults to: <code>&quot;core/mixin/base&quot;</code></p></div></div></div><div id='property-instanceCount' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.mixin.base' rel='core.mixin.base' class='defined-in docClass'>core.mixin.base</a><br/><a href='source/base2.html#core-mixin-base-property-instanceCount' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.mixin.base-property-instanceCount' class='name expandable'>instanceCount</a> : Number<span class=\"signature\"><span class='private' >private</span><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'><p>Instance counter</p>\n</div><div class='long'><p>Instance counter</p>\n</div></div></div></div></div><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance methods</h3><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='data.query.component'>data.query.component</span><br/><a href='source/component2.html#data-query-component-method-constructor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/data.query.component-method-constructor' class='name expandable'>data.query.component</a>( <span class='pre'>[query]</span> ) : <a href=\"#!/api/data.query.component\" rel=\"data.query.component\" class=\"docClass\">data.query.component</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>query</span> : String (optional)<div class='sub-desc'><p>data query</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/data.query.component\" rel=\"data.query.component\" class=\"docClass\">data.query.component</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/core.mixin.base-method-constructor\" rel=\"core.mixin.base-method-constructor\" class=\"docClass\">core.mixin.base.constructor</a></p></div></div></div><div id='method-ast' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='data.query.component'>data.query.component</span><br/><a href='source/component2.html#data-query-component-method-ast' target='_blank' class='view-source'>view source</a></div><a href='#!/api/data.query.component-method-ast' class='name expandable'>ast</a>( <span class='pre'></span> ) : Array<span class=\"signature\"></span></div><div class='description'><div class='short'>Retrieve the AST as the parsed result. ...</div><div class='long'><p>Retrieve the AST as the parsed result.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'><p>the result AST.</p>\n</div></li></ul></div></div></div><div id='method-parse' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='data.query.component'>data.query.component</span><br/><a href='source/component2.html#data-query-component-method-parse' target='_blank' class='view-source'>view source</a></div><a href='#!/api/data.query.component-method-parse' class='name expandable'>parse</a>( <span class='pre'>query</span> ) : <a href=\"#!/api/data.query.component\" rel=\"data.query.component\" class=\"docClass\">data.query.component</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Parse the query string. ...</div><div class='long'><p>Parse the query string.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>query</span> : String<div class='sub-desc'><p>data query</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/data.query.component\" rel=\"data.query.component\" class=\"docClass\">data.query.component</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-reduce' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='data.query.component'>data.query.component</span><br/><a href='source/component2.html#data-query-component-method-reduce' target='_blank' class='view-source'>view source</a></div><a href='#!/api/data.query.component-method-reduce' class='name expandable'>reduce</a>( <span class='pre'>cache</span> ) : <a href=\"#!/api/data.query.component\" rel=\"data.query.component\" class=\"docClass\">data.query.component</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Further reduce the query string elements based on the cache content,\nto eliminate unnecessary queries made. ...</div><div class='long'><p>Further reduce the query string elements based on the cache content,\nto eliminate unnecessary queries made.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cache</span> : Object<div class='sub-desc'><p>The cache dictionary.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/data.query.component\" rel=\"data.query.component\" class=\"docClass\">data.query.component</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-rewrite' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='data.query.component'>data.query.component</span><br/><a href='source/component2.html#data-query-component-method-rewrite' target='_blank' class='view-source'>view source</a></div><a href='#!/api/data.query.component-method-rewrite' class='name expandable'>rewrite</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Rebuild the (reduced) query string. ...</div><div class='long'><p>Rebuild the (reduced) query string.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>new query string</p>\n</div></li></ul></div></div></div><div id='method-toString' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.mixin.base' rel='core.mixin.base' class='defined-in docClass'>core.mixin.base</a><br/><a href='source/base2.html#core-mixin-base-method-toString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.mixin.base-method-toString' class='name expandable'>toString</a>( <span class='pre'></span> ) : String<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Gives string representation of this component instance. ...</div><div class='long'><p>Gives string representation of this component instance.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p><a href=\"#!/api/core.mixin.base-property-displayName\" rel=\"core.mixin.base-property-displayName\" class=\"docClass\">displayName</a><code>@</code><a href=\"#!/api/core.mixin.base-property-instanceCount\" rel=\"core.mixin.base-property-instanceCount\" class=\"docClass\">instanceCount</a></p>\n</div></li></ul></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static methods</h3><div id='static-method-create' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/composer.mixin' rel='composer.mixin' class='defined-in docClass'>composer.mixin</a><br/><a href='source/mixin.html#composer-mixin-static-method-create' target='_blank' class='view-source'>view source</a></div><a href='#!/api/composer.mixin-static-method-create' class='name expandable'>create</a>( <span class='pre'>mixin</span> ) : <a href=\"#!/api/composer.mixin\" rel=\"composer.mixin\" class=\"docClass\">composer.mixin</a><span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Instantiate immediately after extending this constructor from multiple others constructors/objects. ...</div><div class='long'><p>Instantiate immediately after extending this constructor from multiple others constructors/objects.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>mixin</span> : ...(<a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a>|Object)<div class='sub-desc'><p>One or more constructors or objects to be mixed in.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/composer.mixin\" rel=\"composer.mixin\" class=\"docClass\">composer.mixin</a></span><div class='sub-desc'><p>Object instance created out of the mixin of constructors and objects.</p>\n</div></li></ul></div></div></div><div id='static-method-extend' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/composer.mixin' rel='composer.mixin' class='defined-in docClass'>composer.mixin</a><br/><a href='source/mixin.html#composer-mixin-static-method-extend' target='_blank' class='view-source'>view source</a></div><a href='#!/api/composer.mixin-static-method-extend' class='name expandable'>extend</a>( <span class='pre'>mixin</span> ) : <a href=\"#!/api/composer.mixin\" rel=\"composer.mixin\" class=\"docClass\">composer.mixin</a><span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Extend this constructor from multiple others constructors/objects. ...</div><div class='long'><p>Extend this constructor from multiple others constructors/objects.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>mixin</span> : ...(<a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a>|Object)<div class='sub-desc'><p>One or more constructors or objects to be mixed in.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/composer.mixin\" rel=\"composer.mixin\" class=\"docClass\">composer.mixin</a></span><div class='sub-desc'><p>The extended subclass.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});