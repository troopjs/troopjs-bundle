Ext.data.JsonP.core_composition({"tagname":"class","name":"core.composition","autodetected":{},"files":[{"filename":"composition.js","href":"composition3.html#core-composition"}],"implements":["compose.composition"],"mixins":["log.logger"],"members":[{"name":"displayName","tagname":"property","owner":"core.composition","id":"property-displayName","meta":{"protected":true,"readonly":true}},{"name":"instanceCount","tagname":"property","owner":"core.composition","id":"property-instanceCount","meta":{"private":true,"readonly":true}},{"name":"constructor","tagname":"method","owner":"core.composition","id":"method-constructor","meta":{}},{"name":"assert","tagname":"method","owner":"log.logger","id":"method-assert","meta":{}},{"name":"debug","tagname":"method","owner":"log.logger","id":"method-debug","meta":{"deprecated":{"text":"<p>An alias for <a href=\"#!/api/log.logger-method-log\" rel=\"log.logger-method-log\" class=\"docClass\">log</a>. This was added to improve compatibility with existing sites already using <code>debug()</code>. However, you should use <a href=\"#!/api/log.logger-method-log\" rel=\"log.logger-method-log\" class=\"docClass\">log</a> instead.</p>\n"}}},{"name":"dir","tagname":"method","owner":"log.logger","id":"method-dir","meta":{}},{"name":"error","tagname":"method","owner":"log.logger","id":"method-error","meta":{}},{"name":"info","tagname":"method","owner":"log.logger","id":"method-info","meta":{}},{"name":"log","tagname":"method","owner":"log.logger","id":"method-log","meta":{}},{"name":"time","tagname":"method","owner":"log.logger","id":"method-time","meta":{}},{"name":"timeEnd","tagname":"method","owner":"log.logger","id":"method-timeEnd","meta":{}},{"name":"toString","tagname":"method","owner":"core.composition","id":"method-toString","meta":{"protected":true}},{"name":"trace","tagname":"method","owner":"log.logger","id":"method-trace","meta":{}},{"name":"warn","tagname":"method","owner":"log.logger","id":"method-warn","meta":{}},{"name":"create","tagname":"method","owner":"core.composition","id":"static-method-create","meta":{"static":true}},{"name":"extend","tagname":"method","owner":"core.composition","id":"static-method-extend","meta":{"static":true}}],"alternateClassNames":[],"aliases":{},"id":"class-core.composition","classIcon":"icon-class","superclasses":[],"subclasses":["core.emitter.composition"],"mixedInto":[],"implementedBy":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Mixins</h4><div class='dependency'><a href='#!/api/log.logger' rel='log.logger' class='docClass'>log.logger</a></div><h4>Implements</h4><div class='dependency'><a href='#!/api/compose.composition' rel='compose.composition' class='docClass'>compose.composition</a></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/core.emitter.composition' rel='core.emitter.composition' class='docClass'>core.emitter.composition</a></div><h4>Files</h4><div class='dependency'><a href='source/composition3.html#core-composition' target='_blank'>composition.js</a></div></pre><div class='doc-contents'><p>Base composition with instance count.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-displayName' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='core.composition'>core.composition</span><br/><a href='source/composition3.html#core-composition-property-displayName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.composition-property-displayName' class='name expandable'>displayName</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='protected' >protected</span><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>The hierarchical namespace for this component that indicates it's functionality. ...</div><div class='long'><p>The hierarchical namespace for this component that indicates it's functionality.</p>\n<p>Defaults to: <code>&quot;core/composition&quot;</code></p></div></div></div><div id='property-instanceCount' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='core.composition'>core.composition</span><br/><a href='source/composition3.html#core-composition-property-instanceCount' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.composition-property-instanceCount' class='name expandable'>instanceCount</a> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><span class=\"signature\"><span class='private' >private</span><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'><p>Instance counter</p>\n</div><div class='long'><p>Instance counter</p>\n</div></div></div></div></div><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance methods</h3><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='core.composition'>core.composition</span><br/><a href='source/composition3.html#core-composition-method-constructor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.composition-method-constructor' class='name expandable'>core.composition</a>( <span class='pre'></span> ) : <a href=\"#!/api/core.composition\" rel=\"core.composition\" class=\"docClass\">core.composition</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Creates a new component instance ...</div><div class='long'><p>Creates a new component instance</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/core.composition\" rel=\"core.composition\" class=\"docClass\">core.composition</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-assert' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/log.logger' rel='log.logger' class='defined-in docClass'>log.logger</a><br/><a href='source/logger.html#log-logger-method-assert' target='_blank' class='view-source'>view source</a></div><a href='#!/api/log.logger-method-assert' class='name expandable'>assert</a>( <span class='pre'>expression, payload, [obj]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Writes a message and stack trace to the log if first argument is false ...</div><div class='long'><p>Writes a message and stack trace to the log if first argument is false</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>expression</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><div class='sub-desc'><p>Conditional expression</p>\n</div></li><li><span class='pre'>payload</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>|<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Initial payload</p>\n</div></li><li><span class='pre'>obj</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>... (optional)<div class='sub-desc'><p>Supplementary payloads</p>\n\n<ul>\n<li>If <code>payload</code> is of type <code>Object</code> the string representations of each of these objects are appended together in the order listed and output.</li>\n<li>If <code>payload</code> is of type <code>String</code> these are JavaScript objects with which to replace substitution strings within payload.</li>\n</ul>\n\n</div></li></ul></div></div></div><div id='method-debug' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/log.logger' rel='log.logger' class='defined-in docClass'>log.logger</a><br/><a href='source/logger.html#log-logger-method-debug' target='_blank' class='view-source'>view source</a></div><a href='#!/api/log.logger-method-debug' class='name expandable'>debug</a>( <span class='pre'>payload, [obj]</span> )<span class=\"signature\"><span class='deprecated' >deprecated</span></span></div><div class='description'><div class='short'>Writes a message to the log with level debug ...</div><div class='long'><p>Writes a message to the log with level <code>debug</code></p>\n        <div class='rounded-box deprecated-box deprecated-tag-box'>\n        <p>This method has been <strong>deprecated</strong> </p>\n        <p>An alias for <a href=\"#!/api/log.logger-method-log\" rel=\"log.logger-method-log\" class=\"docClass\">log</a>. This was added to improve compatibility with existing sites already using <code>debug()</code>. However, you should use <a href=\"#!/api/log.logger-method-log\" rel=\"log.logger-method-log\" class=\"docClass\">log</a> instead.</p>\n\n        </div>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>payload</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>|<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Initial payload</p>\n\n\n\n</div></li><li><span class='pre'>obj</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>... (optional)<div class='sub-desc'><p>Supplementary payloads</p>\n\n\n\n\n<ul>\n<li>If <code>payload</code> is of type <code>Object</code> the string representations of each of these objects are appended together in the order listed and output.</li>\n<li>If <code>payload</code> is of type <code>String</code> these are JavaScript objects with which to replace substitution strings within payload.</li>\n</ul>\n\n\n\n</div></li></ul></div></div></div><div id='method-dir' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/log.logger' rel='log.logger' class='defined-in docClass'>log.logger</a><br/><a href='source/logger.html#log-logger-method-dir' target='_blank' class='view-source'>view source</a></div><a href='#!/api/log.logger-method-dir' class='name expandable'>dir</a>( <span class='pre'>object</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Displays an interactive list of the properties of the specified JavaScript object. ...</div><div class='long'><p>Displays an interactive list of the properties of the specified JavaScript object. The output is presented as a hierarchical listing that let you see the contents of child objects.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>A JavaScript object whose properties should be output</p>\n</div></li></ul></div></div></div><div id='method-error' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/log.logger' rel='log.logger' class='defined-in docClass'>log.logger</a><br/><a href='source/logger.html#log-logger-method-error' target='_blank' class='view-source'>view source</a></div><a href='#!/api/log.logger-method-error' class='name expandable'>error</a>( <span class='pre'>payload, [obj]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Writes a message to the log with level error ...</div><div class='long'><p>Writes a message to the log with level <code>error</code></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>payload</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>|<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Initial payload</p>\n\n\n\n</div></li><li><span class='pre'>obj</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>... (optional)<div class='sub-desc'><p>Supplementary payloads</p>\n\n\n\n\n<ul>\n<li>If <code>payload</code> is of type <code>Object</code> the string representations of each of these objects are appended together in the order listed and output.</li>\n<li>If <code>payload</code> is of type <code>String</code> these are JavaScript objects with which to replace substitution strings within payload.</li>\n</ul>\n\n\n\n</div></li></ul></div></div></div><div id='method-info' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/log.logger' rel='log.logger' class='defined-in docClass'>log.logger</a><br/><a href='source/logger.html#log-logger-method-info' target='_blank' class='view-source'>view source</a></div><a href='#!/api/log.logger-method-info' class='name expandable'>info</a>( <span class='pre'>payload, [obj]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Writes a message to the log with level info. ...</div><div class='long'><p>Writes a message to the log with level <code>info</code>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>payload</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>|<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Initial payload</p>\n\n\n\n</div></li><li><span class='pre'>obj</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>... (optional)<div class='sub-desc'><p>Supplementary payloads</p>\n\n\n\n\n<ul>\n<li>If <code>payload</code> is of type <code>Object</code> the string representations of each of these objects are appended together in the order listed and output.</li>\n<li>If <code>payload</code> is of type <code>String</code> these are JavaScript objects with which to replace substitution strings within payload.</li>\n</ul>\n\n\n\n</div></li></ul></div></div></div><div id='method-log' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/log.logger' rel='log.logger' class='defined-in docClass'>log.logger</a><br/><a href='source/logger.html#log-logger-method-log' target='_blank' class='view-source'>view source</a></div><a href='#!/api/log.logger-method-log' class='name expandable'>log</a>( <span class='pre'>payload, [obj]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Writes a message to the log with level log ...</div><div class='long'><p>Writes a message to the log with level <code>log</code></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>payload</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>|<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Initial payload</p>\n\n\n\n</div></li><li><span class='pre'>obj</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>... (optional)<div class='sub-desc'><p>Supplementary payloads</p>\n\n\n\n\n<ul>\n<li>If <code>payload</code> is of type <code>Object</code> the string representations of each of these objects are appended together in the order listed and output.</li>\n<li>If <code>payload</code> is of type <code>String</code> these are JavaScript objects with which to replace substitution strings within payload.</li>\n</ul>\n\n\n\n</div></li></ul></div></div></div><div id='method-time' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/log.logger' rel='log.logger' class='defined-in docClass'>log.logger</a><br/><a href='source/logger.html#log-logger-method-time' target='_blank' class='view-source'>view source</a></div><a href='#!/api/log.logger-method-time' class='name expandable'>time</a>( <span class='pre'>timerName</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Starts a timer you can use to track how long an operation takes. ...</div><div class='long'><p>Starts a timer you can use to track how long an operation takes. You give each timer a unique name, and may have up to 10,000 timers running on a given page.\nWhen you call <a href=\"#!/api/log.logger-method-timeEnd\" rel=\"log.logger-method-timeEnd\" class=\"docClass\">timeEnd</a> with the same name, the log will output the time, in milliseconds, that elapsed since the timer was started.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>timerName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The name to give the new timer. This will identify the timer; use the same name when calling <a href=\"#!/api/log.logger-method-timeEnd\" rel=\"log.logger-method-timeEnd\" class=\"docClass\">timeEnd</a> to stop the timer and get the time written to the log</p>\n</div></li></ul></div></div></div><div id='method-timeEnd' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/log.logger' rel='log.logger' class='defined-in docClass'>log.logger</a><br/><a href='source/logger.html#log-logger-method-timeEnd' target='_blank' class='view-source'>view source</a></div><a href='#!/api/log.logger-method-timeEnd' class='name expandable'>timeEnd</a>( <span class='pre'>timerName</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Stops a timer that was previously started by calling time. ...</div><div class='long'><p>Stops a timer that was previously started by calling <a href=\"#!/api/log.logger-method-time\" rel=\"log.logger-method-time\" class=\"docClass\">time</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>timerName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The name of the timer to stop. Once stopped, the elapsed time is automatically written to the log</p>\n</div></li></ul></div></div></div><div id='method-toString' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='core.composition'>core.composition</span><br/><a href='source/composition3.html#core-composition-method-toString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.composition-method-toString' class='name expandable'>toString</a>( <span class='pre'></span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Gives string representation of this component instance. ...</div><div class='long'><p>Gives string representation of this component instance.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p><a href=\"#!/api/core.composition-property-displayName\" rel=\"core.composition-property-displayName\" class=\"docClass\">displayName</a><code>@</code><a href=\"#!/api/core.composition-property-instanceCount\" rel=\"core.composition-property-instanceCount\" class=\"docClass\">instanceCount</a></p>\n</div></li></ul></div></div></div><div id='method-trace' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/log.logger' rel='log.logger' class='defined-in docClass'>log.logger</a><br/><a href='source/logger.html#log-logger-method-trace' target='_blank' class='view-source'>view source</a></div><a href='#!/api/log.logger-method-trace' class='name expandable'>trace</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Outputs a stack trace to the log. ...</div><div class='long'><p>Outputs a stack trace to the log.</p>\n</div></div></div><div id='method-warn' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/log.logger' rel='log.logger' class='defined-in docClass'>log.logger</a><br/><a href='source/logger.html#log-logger-method-warn' target='_blank' class='view-source'>view source</a></div><a href='#!/api/log.logger-method-warn' class='name expandable'>warn</a>( <span class='pre'>payload, [obj]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Writes a message to the log with level warn ...</div><div class='long'><p>Writes a message to the log with level <code>warn</code></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>payload</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>|<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Initial payload</p>\n\n\n\n</div></li><li><span class='pre'>obj</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>... (optional)<div class='sub-desc'><p>Supplementary payloads</p>\n\n\n\n\n<ul>\n<li>If <code>payload</code> is of type <code>Object</code> the string representations of each of these objects are appended together in the order listed and output.</li>\n<li>If <code>payload</code> is of type <code>String</code> these are JavaScript objects with which to replace substitution strings within payload.</li>\n</ul>\n\n\n\n</div></li></ul></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static methods</h3><div id='static-method-create' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='core.composition'>core.composition</span><br/><a href='source/composition3.html#core-composition-static-method-create' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.composition-static-method-create' class='name expandable'>create</a>( <span class='pre'>composition</span> ) : <a href=\"#!/api/core.composition\" rel=\"core.composition\" class=\"docClass\">core.composition</a><span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Instantiate immediately after extending this constructor from multiple others constructors/objects. ...</div><div class='long'><p>Instantiate immediately after extending this constructor from multiple others constructors/objects.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>composition</span> : ...(<a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a>|<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>)<div class='sub-desc'><p>One or more constructors or objects to be mixed in.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/core.composition\" rel=\"core.composition\" class=\"docClass\">core.composition</a></span><div class='sub-desc'><p>Instance of this class</p>\n</div></li></ul><p>Overrides: <a href=\"#!/api/compose.composition-static-method-create\" rel=\"compose.composition-static-method-create\" class=\"docClass\">compose.composition.create</a></p></div></div></div><div id='static-method-extend' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='core.composition'>core.composition</span><br/><a href='source/composition3.html#core-composition-static-method-extend' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.composition-static-method-extend' class='name expandable'>extend</a>( <span class='pre'>composition</span> ) : <a href=\"#!/api/core.composition\" rel=\"core.composition\" class=\"docClass\">core.composition</a><span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Extend this constructor from multiple others constructors/objects. ...</div><div class='long'><p>Extend this constructor from multiple others constructors/objects.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>composition</span> : ...(<a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a>|<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>)<div class='sub-desc'><p>One or more constructors or objects to be mixed in.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/core.composition\" rel=\"core.composition\" class=\"docClass\">core.composition</a></span><div class='sub-desc'><p>The extended subclass</p>\n</div></li></ul><p>Overrides: <a href=\"#!/api/compose.composition-static-method-extend\" rel=\"compose.composition-static-method-extend\" class=\"docClass\">compose.composition.extend</a></p></div></div></div></div></div></div></div>","meta":{}});