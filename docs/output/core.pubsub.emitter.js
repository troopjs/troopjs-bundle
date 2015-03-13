Ext.data.JsonP.core_pubsub_emitter({"tagname":"class","name":"core.pubsub.emitter","autodetected":{},"files":[{"filename":"emitter.js","href":"emitter3.html#core-pubsub-emitter"}],"extends":"core.emitter.composition","members":[{"name":"displayName","tagname":"property","owner":"core.composition","id":"property-displayName","meta":{"protected":true,"readonly":true}},{"name":"executor","tagname":"property","owner":"core.emitter.composition","id":"property-executor","meta":{"private":true,"readonly":true}},{"name":"handlers","tagname":"property","owner":"core.emitter.composition","id":"property-handlers","meta":{"protected":true,"readonly":true}},{"name":"instanceCount","tagname":"property","owner":"core.composition","id":"property-instanceCount","meta":{"private":true,"readonly":true}},{"name":"constructor","tagname":"method","owner":"core.emitter.composition","id":"method-constructor","meta":{}},{"name":"emit","tagname":"method","owner":"core.pubsub.emitter","id":"method-emit","meta":{"private":true}},{"name":"off","tagname":"method","owner":"core.pubsub.emitter","id":"method-off","meta":{"private":true}},{"name":"on","tagname":"method","owner":"core.pubsub.emitter","id":"method-on","meta":{"private":true}},{"name":"one","tagname":"method","owner":"core.emitter.composition","id":"method-one","meta":{}},{"name":"peek","tagname":"method","owner":"core.pubsub.emitter","id":"method-peek","meta":{}},{"name":"publish","tagname":"method","owner":"core.pubsub.emitter","id":"method-publish","meta":{}},{"name":"subscribe","tagname":"method","owner":"core.pubsub.emitter","id":"method-subscribe","meta":{"chainable":true}},{"name":"toString","tagname":"method","owner":"core.composition","id":"method-toString","meta":{"protected":true}},{"name":"unsubscribe","tagname":"method","owner":"core.pubsub.emitter","id":"method-unsubscribe","meta":{"chainable":true}},{"name":"create","tagname":"method","owner":"core.composition","id":"static-method-create","meta":{"static":true}},{"name":"extend","tagname":"method","owner":"core.composition","id":"static-method-extend","meta":{"static":true}}],"alternateClassNames":[],"aliases":{},"id":"class-core.pubsub.emitter","short_doc":"A specialized version of core.emitter.composition for memorized events and phase protection. ...","classIcon":"icon-class","superclasses":["core.composition","core.emitter.composition"],"subclasses":["core.pubsub.hub"],"mixedInto":[],"implementedBy":[],"mixins":[],"implements":["compose.composition"],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/core.composition' rel='core.composition' class='docClass'>core.composition</a><div class='subclass '><a href='#!/api/core.emitter.composition' rel='core.emitter.composition' class='docClass'>core.emitter.composition</a><div class='subclass '><strong>core.pubsub.emitter</strong></div></div></div><h4>Implements</h4><div class='dependency'><a href='#!/api/compose.composition' rel='compose.composition' class='docClass'>compose.composition</a></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/core.pubsub.hub' rel='core.pubsub.hub' class='docClass'>core.pubsub.hub</a></div><h4>Files</h4><div class='dependency'><a href='source/emitter3.html#core-pubsub-emitter' target='_blank'>emitter.js</a></div></pre><div class='doc-contents'><p>A specialized version of <a href=\"#!/api/core.emitter.composition\" rel=\"core.emitter.composition\" class=\"docClass\">core.emitter.composition</a> for memorized events and <a href=\"#!/api/core.component.gadget-property-phase\" rel=\"core.component.gadget-property-phase\" class=\"docClass\">phase</a> protection.</p>\n\n<h2>Memorized emitting</h2>\n\n<p>A emitter event will memorize the \"current\" value of each event. Each executor may have it's own interpretation\nof what \"current\" means.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-displayName' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.composition' rel='core.composition' class='defined-in docClass'>core.composition</a><br/><a href='source/composition3.html#core-composition-property-displayName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.composition-property-displayName' class='name expandable'>displayName</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='protected' >protected</span><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>The hierarchical namespace for this component that indicates it's functionality. ...</div><div class='long'><p>The hierarchical namespace for this component that indicates it's functionality.</p>\n<p>Defaults to: <code>&quot;core/composition&quot;</code></p></div></div></div><div id='property-executor' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.emitter.composition' rel='core.emitter.composition' class='defined-in docClass'>core.emitter.composition</a><br/><a href='source/composition2.html#core-emitter-composition-property-executor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.emitter.composition-property-executor' class='name expandable'>executor</a> : <a href=\"#!/api/core.emitter.executor\" rel=\"core.emitter.executor\" class=\"docClass\">core.emitter.executor</a><span class=\"signature\"><span class='private' >private</span><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'><p>Event executor</p>\n</div><div class='long'><p>Event executor</p>\n</div></div></div><div id='property-handlers' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.emitter.composition' rel='core.emitter.composition' class='defined-in docClass'>core.emitter.composition</a><br/><a href='source/composition2.html#core-emitter-composition-property-handlers' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.emitter.composition-property-handlers' class='name expandable'>handlers</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"><span class='protected' >protected</span><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'><p>Event handlersObject where the key represents the event type and the value is a list of <a href=\"#!/api/core.emitter.handler\" rel=\"core.emitter.handler\" class=\"docClass\">handlers</a> for that type.</p>\n</div><div class='long'><p>Event handlersObject where the key represents the event type and the value is a list of <a href=\"#!/api/core.emitter.handler\" rel=\"core.emitter.handler\" class=\"docClass\">handlers</a> for that type.</p>\n</div></div></div><div id='property-instanceCount' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.composition' rel='core.composition' class='defined-in docClass'>core.composition</a><br/><a href='source/composition3.html#core-composition-property-instanceCount' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.composition-property-instanceCount' class='name expandable'>instanceCount</a> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><span class=\"signature\"><span class='private' >private</span><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'><p>Instance counter</p>\n</div><div class='long'><p>Instance counter</p>\n</div></div></div></div></div><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance methods</h3><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.emitter.composition' rel='core.emitter.composition' class='defined-in docClass'>core.emitter.composition</a><br/><a href='source/composition2.html#core-emitter-composition-method-constructor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.emitter.composition-method-constructor' class='name expandable'>core.pubsub.emitter</a>( <span class='pre'></span> ) : <a href=\"#!/api/core.emitter.composition\" rel=\"core.emitter.composition\" class=\"docClass\">core.emitter.composition</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Creates a new component instance ...</div><div class='long'><p>Creates a new component instance</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/core.emitter.composition\" rel=\"core.emitter.composition\" class=\"docClass\">core.emitter.composition</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/core.composition-method-constructor\" rel=\"core.composition-method-constructor\" class=\"docClass\">core.composition.constructor</a></p></div></div></div><div id='method-emit' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='core.pubsub.emitter'>core.pubsub.emitter</span><br/><a href='source/emitter3.html#core-pubsub-emitter-method-emit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.pubsub.emitter-method-emit' class='name expandable'>emit</a>( <span class='pre'>event, [args]</span> ) : *<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Trigger an event which notifies each of the listeners of their subscribing,\noptionally pass data values to the listen...</div><div class='long'><p>Trigger an event which notifies each of the listeners of their subscribing,\noptionally pass data values to the listeners.</p>\n\n<p> A sequential runner, is the default runner for this module, in which all handlers are running\n with the same argument data specified by the <a href=\"#!/api/core.pubsub.emitter-method-emit\" rel=\"core.pubsub.emitter-method-emit\" class=\"docClass\">emit</a> function.\n Each handler will wait for the completion for the previous one if it returns a promise.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>|<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The event type to emit, or an event object</p>\n<ul><li><span class='pre'>type</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> (optional)<div class='sub-desc'><p>The event type name.</p>\n</div></li><li><span class='pre'>runner</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> (optional)<div class='sub-desc'><p>The runner function that determinate how the handlers are executed, overrides the\ndefault behaviour of the event emitting.</p>\n</div></li></ul></div></li><li><span class='pre'>args</span> : ...* (optional)<div class='sub-desc'><p>Data params that are passed to the listener function.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>*</span><div class='sub-desc'><p>Result returned from runner.</p>\n</div></li></ul><p>Overrides: <a href=\"#!/api/core.emitter.composition-method-emit\" rel=\"core.emitter.composition-method-emit\" class=\"docClass\">core.emitter.composition.emit</a></p></div></div></div><div id='method-off' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='core.pubsub.emitter'>core.pubsub.emitter</span><br/><a href='source/emitter3.html#core-pubsub-emitter-method-off' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.pubsub.emitter-method-off' class='name expandable'>off</a>( <span class='pre'>type, [callback]</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Remove callback(s) from a subscribed event type, if no callback is specified,\nremove all callbacks of this type. ...</div><div class='long'><p>Remove callback(s) from a subscribed event type, if no callback is specified,\nremove all callbacks of this type.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The event type subscribed to</p>\n\n</div></li><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a>|<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'><p>The event callback to remove. If callback is a function scope will be this, otherwise:</p>\n\n<ul><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> (optional)<div class='sub-desc'><p>Callback method to match.</p>\n\n</div></li><li><span class='pre'>scope</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'><p>Callback scope to match.</p>\n\n<p>Defaults to: <code>this</code></p></div></li></ul></div></li></ul><p>Overrides: <a href=\"#!/api/core.emitter.composition-method-off\" rel=\"core.emitter.composition-method-off\" class=\"docClass\">core.emitter.composition.off</a></p></div></div></div><div id='method-on' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='core.pubsub.emitter'>core.pubsub.emitter</span><br/><a href='source/emitter3.html#core-pubsub-emitter-method-on' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.pubsub.emitter-method-on' class='name expandable'>on</a>( <span class='pre'>type, callback, [data]</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>Adds a listener for the specified event type. ...</div><div class='long'><p>Adds a listener for the specified event type.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The event type to subscribe to.</p>\n\n</div></li><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a>|<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The event callback to add. If callback is a function defaults from below will be used:</p>\n\n<ul><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>Callback method.</p>\n\n</div></li><li><span class='pre'>scope</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'><p>Callback scope.</p>\n\n<p>Defaults to: <code>this</code></p></div></li><li><span class='pre'>limit</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>Callback limit.</p>\n\n<p>Defaults to: <code>0</code></p></div></li><li><span class='pre'>on</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> (optional)<div class='sub-desc'><p>Will be called once this handler is added to the handlers list.</p>\n\n<p>Defaults to: <code>undefined</code></p><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>handler</span> : <a href=\"#!/api/core.emitter.handler\" rel=\"core.emitter.handler\" class=\"docClass\">core.emitter.handler</a> (optional)<div class='sub-desc'><p>The handler that was just added.</p>\n\n</div></li><li><span class='pre'>handlers</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'><p>The list of handlers the handler was added to.</p>\n\n</div></li></ul></div></li><li><span class='pre'>off</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> (optional)<div class='sub-desc'><p>Will be called once this handler is removed from the handlers list.</p>\n\n<p>Defaults to: <code>undefined</code></p><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>handler</span> : <a href=\"#!/api/core.emitter.handler\" rel=\"core.emitter.handler\" class=\"docClass\">core.emitter.handler</a> (optional)<div class='sub-desc'><p>The handler that was just removed.</p>\n\n</div></li><li><span class='pre'>handlers</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'><p>The list of handlers the handler was removed from.</p>\n\n</div></li></ul></div></li></ul></div></li><li><span class='pre'>data</span> : * (optional)<div class='sub-desc'><p>Handler data</p>\n\n</div></li></ul><p>Overrides: <a href=\"#!/api/core.emitter.composition-method-on\" rel=\"core.emitter.composition-method-on\" class=\"docClass\">core.emitter.composition.on</a></p></div></div></div><div id='method-one' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.emitter.composition' rel='core.emitter.composition' class='defined-in docClass'>core.emitter.composition</a><br/><a href='source/composition2.html#core-emitter-composition-method-one' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.emitter.composition-method-one' class='name expandable'>one</a>( <span class='pre'>type, callback, [data]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Adds a listener for the specified event type exactly once. ...</div><div class='long'><p>Adds a listener for the specified event type exactly once.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The event type to subscribe to.</p>\n\n</div></li><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a>|<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The event callback to add. If callback is a function defaults from below will be used:</p>\n\n<ul><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>Callback method.</p>\n\n</div></li><li><span class='pre'>scope</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'><p>Callback scope.</p>\n\n<p>Defaults to: <code>this</code></p></div></li><li><span class='pre'>limit</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>Callback limit.</p>\n\n<p>Defaults to: <code>0</code></p></div></li><li><span class='pre'>on</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> (optional)<div class='sub-desc'><p>Will be called once this handler is added to the handlers list.</p>\n\n<p>Defaults to: <code>undefined</code></p><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>handler</span> : <a href=\"#!/api/core.emitter.handler\" rel=\"core.emitter.handler\" class=\"docClass\">core.emitter.handler</a> (optional)<div class='sub-desc'><p>The handler that was just added.</p>\n\n</div></li><li><span class='pre'>handlers</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'><p>The list of handlers the handler was added to.</p>\n\n</div></li></ul></div></li><li><span class='pre'>off</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> (optional)<div class='sub-desc'><p>Will be called once this handler is removed from the handlers list.</p>\n\n<p>Defaults to: <code>undefined</code></p><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>handler</span> : <a href=\"#!/api/core.emitter.handler\" rel=\"core.emitter.handler\" class=\"docClass\">core.emitter.handler</a> (optional)<div class='sub-desc'><p>The handler that was just removed.</p>\n\n</div></li><li><span class='pre'>handlers</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'><p>The list of handlers the handler was removed from.</p>\n\n</div></li></ul></div></li></ul></div></li><li><span class='pre'>data</span> : * (optional)<div class='sub-desc'><p>Handler data</p>\n\n</div></li></ul></div></div></div><div id='method-peek' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='core.pubsub.emitter'>core.pubsub.emitter</span><br/><a href='source/emitter3.html#core-pubsub-emitter-method-peek' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.pubsub.emitter-method-peek' class='name expandable'>peek</a>( <span class='pre'>type, [value]</span> ) : *<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns value in handlers MEMORY ...</div><div class='long'><p>Returns value in handlers MEMORY</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>event type to peek at</p>\n</div></li><li><span class='pre'>value</span> : * (optional)<div class='sub-desc'><p>Value to use <em>only</em> if no memory has been recorder</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>*</span><div class='sub-desc'><p>Value in MEMORY</p>\n</div></li></ul></div></div></div><div id='method-publish' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='core.pubsub.emitter'>core.pubsub.emitter</span><br/><a href='source/emitter3.html#core-pubsub-emitter-method-publish' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.pubsub.emitter-method-publish' class='name expandable'>publish</a>( <span class='pre'>type, [args]</span> ) : <a href=\"#!/api/Promise\" rel=\"Promise\" class=\"docClass\">Promise</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Emit a public event that can be subscribed by other components. ...</div><div class='long'><p>Emit a public event that can be subscribed by other components.</p>\n\n<p>Handlers are run in a pipeline, in which each handler will receive muted\ndata params depending on the return value of the previous handler:</p>\n\n<ul>\n<li>The original data params from <a href=\"#!/api/core.pubsub.emitter-method-publish\" rel=\"core.pubsub.emitter-method-publish\" class=\"docClass\">publish</a> if this is the first handler, or the previous handler returns <code>undefined</code>.</li>\n<li>One value as the single argument if the previous handler return a non-array.</li>\n<li>Each argument value deconstructed from the returning array of the previous handler.</li>\n</ul>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The topic to publish.</p>\n</div></li><li><span class='pre'>args</span> : ...* (optional)<div class='sub-desc'><p>Additional params that are passed to the handler function.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Promise\" rel=\"Promise\" class=\"docClass\">Promise</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-subscribe' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='core.pubsub.emitter'>core.pubsub.emitter</span><br/><a href='source/emitter3.html#core-pubsub-emitter-method-subscribe' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.pubsub.emitter-method-subscribe' class='name expandable'>subscribe</a>( <span class='pre'>type, callback, [data]</span> ) : <a href=\"#!/api/core.pubsub.emitter\" rel=\"core.pubsub.emitter\" class=\"docClass\">core.pubsub.emitter</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Listen to an event that are emitted publicly. ...</div><div class='long'><p>Listen to an event that are emitted publicly.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The event type to subscribe to.</p>\n\n</div></li><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a>|<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The event callback to add. If callback is a function defaults from below will be used:</p>\n\n<ul><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>Callback method.</p>\n\n</div></li><li><span class='pre'>scope</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'><p>Callback scope.</p>\n\n<p>Defaults to: <code>this</code></p></div></li><li><span class='pre'>limit</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>Callback limit.</p>\n\n<p>Defaults to: <code>0</code></p></div></li><li><span class='pre'>on</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> (optional)<div class='sub-desc'><p>Will be called once this handler is added to the handlers list.</p>\n\n<p>Defaults to: <code>undefined</code></p><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>handler</span> : <a href=\"#!/api/core.emitter.handler\" rel=\"core.emitter.handler\" class=\"docClass\">core.emitter.handler</a> (optional)<div class='sub-desc'><p>The handler that was just added.</p>\n\n</div></li><li><span class='pre'>handlers</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'><p>The list of handlers the handler was added to.</p>\n\n</div></li></ul></div></li><li><span class='pre'>off</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> (optional)<div class='sub-desc'><p>Will be called once this handler is removed from the handlers list.</p>\n\n<p>Defaults to: <code>undefined</code></p><h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>handler</span> : <a href=\"#!/api/core.emitter.handler\" rel=\"core.emitter.handler\" class=\"docClass\">core.emitter.handler</a> (optional)<div class='sub-desc'><p>The handler that was just removed.</p>\n\n</div></li><li><span class='pre'>handlers</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'><p>The list of handlers the handler was removed from.</p>\n\n</div></li></ul></div></li></ul></div></li><li><span class='pre'>data</span> : * (optional)<div class='sub-desc'><p>Handler data</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/core.pubsub.emitter\" rel=\"core.pubsub.emitter\" class=\"docClass\">core.pubsub.emitter</a></span><div class='sub-desc'><p>Instance of this class.</p>\n</div></li></ul></div></div></div><div id='method-toString' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.composition' rel='core.composition' class='defined-in docClass'>core.composition</a><br/><a href='source/composition3.html#core-composition-method-toString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.composition-method-toString' class='name expandable'>toString</a>( <span class='pre'></span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Gives string representation of this component instance. ...</div><div class='long'><p>Gives string representation of this component instance.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p><a href=\"#!/api/core.composition-property-displayName\" rel=\"core.composition-property-displayName\" class=\"docClass\">displayName</a><code>@</code><a href=\"#!/api/core.composition-property-instanceCount\" rel=\"core.composition-property-instanceCount\" class=\"docClass\">instanceCount</a></p>\n</div></li></ul></div></div></div><div id='method-unsubscribe' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='core.pubsub.emitter'>core.pubsub.emitter</span><br/><a href='source/emitter3.html#core-pubsub-emitter-method-unsubscribe' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.pubsub.emitter-method-unsubscribe' class='name expandable'>unsubscribe</a>( <span class='pre'>type, [callback]</span> ) : <a href=\"#!/api/core.pubsub.emitter\" rel=\"core.pubsub.emitter\" class=\"docClass\">core.pubsub.emitter</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Remove a public event listener. ...</div><div class='long'><p>Remove a public event listener.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The event type subscribed to</p>\n\n</div></li><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a>|<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'><p>The event callback to remove. If callback is a function scope will be this, otherwise:</p>\n\n<ul><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> (optional)<div class='sub-desc'><p>Callback method to match.</p>\n\n</div></li><li><span class='pre'>scope</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'><p>Callback scope to match.</p>\n\n<p>Defaults to: <code>this</code></p></div></li></ul></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/core.pubsub.emitter\" rel=\"core.pubsub.emitter\" class=\"docClass\">core.pubsub.emitter</a></span><div class='sub-desc'><p>Instance of this class.</p>\n</div></li></ul></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static methods</h3><div id='static-method-create' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.composition' rel='core.composition' class='defined-in docClass'>core.composition</a><br/><a href='source/composition3.html#core-composition-static-method-create' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.composition-static-method-create' class='name expandable'>create</a>( <span class='pre'>composition</span> ) : <a href=\"#!/api/core.composition\" rel=\"core.composition\" class=\"docClass\">core.composition</a><span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Instantiate immediately after extending this constructor from multiple others constructors/objects. ...</div><div class='long'><p>Instantiate immediately after extending this constructor from multiple others constructors/objects.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>composition</span> : ...(<a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a>|<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>)<div class='sub-desc'><p>One or more constructors or objects to be mixed in.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/core.composition\" rel=\"core.composition\" class=\"docClass\">core.composition</a></span><div class='sub-desc'><p>Instance of this class</p>\n</div></li></ul><p>Overrides: <a href=\"#!/api/compose.composition-static-method-create\" rel=\"compose.composition-static-method-create\" class=\"docClass\">compose.composition.create</a></p></div></div></div><div id='static-method-extend' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.composition' rel='core.composition' class='defined-in docClass'>core.composition</a><br/><a href='source/composition3.html#core-composition-static-method-extend' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.composition-static-method-extend' class='name expandable'>extend</a>( <span class='pre'>composition</span> ) : <a href=\"#!/api/core.composition\" rel=\"core.composition\" class=\"docClass\">core.composition</a><span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Extend this constructor from multiple others constructors/objects. ...</div><div class='long'><p>Extend this constructor from multiple others constructors/objects.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>composition</span> : ...(<a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a>|<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>)<div class='sub-desc'><p>One or more constructors or objects to be mixed in.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/core.composition\" rel=\"core.composition\" class=\"docClass\">core.composition</a></span><div class='sub-desc'><p>The extended subclass</p>\n</div></li></ul><p>Overrides: <a href=\"#!/api/compose.composition-static-method-extend\" rel=\"compose.composition-static-method-extend\" class=\"docClass\">compose.composition.extend</a></p></div></div></div></div></div></div></div>","meta":{}});