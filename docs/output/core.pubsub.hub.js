Ext.data.JsonP.core_pubsub_hub({"tagname":"class","name":"core.pubsub.hub","autodetected":{},"files":[{"filename":"hub.js","href":"hub.html#core-pubsub-hub"}],"extends":"core.event.emitter","singleton":true,"members":[{"name":"displayName","tagname":"property","owner":"core.mixin.base","id":"property-displayName","meta":{"readonly":true}},{"name":"handlers","tagname":"property","owner":"core.event.emitter","id":"property-handlers","meta":{"protected":true,"readonly":true}},{"name":"instanceCount","tagname":"property","owner":"core.mixin.base","id":"property-instanceCount","meta":{"private":true,"readonly":true}},{"name":"emit","tagname":"method","owner":"core.event.emitter","id":"method-emit","meta":{}},{"name":"peek","tagname":"method","owner":"core.pubsub.hub","id":"method-peek","meta":{}},{"name":"publish","tagname":"method","owner":"core.pubsub.hub","id":"method-publish","meta":{}},{"name":"subscribe","tagname":"method","owner":"core.pubsub.hub","id":"method-subscribe","meta":{"chainable":true}},{"name":"toString","tagname":"method","owner":"core.mixin.base","id":"method-toString","meta":{}},{"name":"unsubscribe","tagname":"method","owner":"core.pubsub.hub","id":"method-unsubscribe","meta":{"chainable":true}}],"alternateClassNames":[],"aliases":{},"id":"class-core.pubsub.hub","short_doc":"The centric \"bus\" that handlers publishing and subscription. ...","classIcon":"icon-singleton","superclasses":["core.mixin.base","core.event.emitter"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/core.mixin.base' rel='core.mixin.base' class='docClass'>core.mixin.base</a><div class='subclass '><a href='#!/api/core.event.emitter' rel='core.event.emitter' class='docClass'>core.event.emitter</a><div class='subclass '><strong>core.pubsub.hub</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/hub.html#core-pubsub-hub' target='_blank'>hub.js</a></div></pre><div class='doc-contents'><p>The centric \"bus\" that handlers publishing and subscription.</p>\n\n<h2>Memorized emitting</h2>\n\n<p>A fired event will memorize the \"current\" value of each event. Each executor may have it's own interpretation\nof what \"current\" means.</p>\n\n<p><strong>Note:</strong> It's NOT necessarily to pub/sub on this module, prefer to\nuse methods like <a href=\"#!/api/core.component.gadget-method-publish\" rel=\"core.component.gadget-method-publish\" class=\"docClass\">publish</a> and <a href=\"#!/api/core.component.gadget-method-subscribe\" rel=\"core.component.gadget-method-subscribe\" class=\"docClass\">subscribe</a>\nthat are provided as shortcuts.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-displayName' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.mixin.base' rel='core.mixin.base' class='defined-in docClass'>core.mixin.base</a><br/><a href='source/base2.html#core-mixin-base-property-displayName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.mixin.base-property-displayName' class='name expandable'>displayName</a> : String<span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>The hierarchical namespace for this component that indicates it's functionality. ...</div><div class='long'><p>The hierarchical namespace for this component that indicates it's functionality.</p>\n<p>Defaults to: <code>&quot;core/mixin/base&quot;</code></p></div></div></div><div id='property-handlers' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.event.emitter' rel='core.event.emitter' class='defined-in docClass'>core.event.emitter</a><br/><a href='source/emitter.html#core-event-emitter-property-handlers' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.event.emitter-property-handlers' class='name expandable'>handlers</a> : Array<span class=\"signature\"><span class='protected' >protected</span><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'><p>Handlers attached to this component, addressable either by key or index</p>\n</div><div class='long'><p>Handlers attached to this component, addressable either by key or index</p>\n</div></div></div><div id='property-instanceCount' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.mixin.base' rel='core.mixin.base' class='defined-in docClass'>core.mixin.base</a><br/><a href='source/base2.html#core-mixin-base-property-instanceCount' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.mixin.base-property-instanceCount' class='name expandable'>instanceCount</a> : Number<span class=\"signature\"><span class='private' >private</span><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'><p>Instance counter</p>\n</div><div class='long'><p>Instance counter</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-emit' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.event.emitter' rel='core.event.emitter' class='defined-in docClass'>core.event.emitter</a><br/><a href='source/emitter.html#core-event-emitter-method-emit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.event.emitter-method-emit' class='name expandable'>emit</a>( <span class='pre'>event, [args]</span> ) : *<span class=\"signature\"></span></div><div class='description'><div class='short'>Trigger an event which notifies each of the listeners of their subscribing,\noptionally pass data values to the listen...</div><div class='long'><p>Trigger an event which notifies each of the listeners of their subscribing,\noptionally pass data values to the listeners.</p>\n\n<p> A sequential runner, is the default runner for this module, in which all handlers are running\n with the same argument data specified by the <a href=\"#!/api/core.event.emitter-method-emit\" rel=\"core.event.emitter-method-emit\" class=\"docClass\">emit</a> function.\n Each handler will wait for the completion for the previous one if it returns a promise.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : String|Object<div class='sub-desc'><p>The event type to emit, or an event object</p>\n<ul><li><span class='pre'>type</span> : String (optional)<div class='sub-desc'><p>The event type name.</p>\n</div></li><li><span class='pre'>runner</span> : Function (optional)<div class='sub-desc'><p>The runner function that determinate how the handlers are executed, overrides the\ndefault behaviour of the event emitting.</p>\n</div></li></ul></div></li><li><span class='pre'>args</span> : ...* (optional)<div class='sub-desc'><p>Data params that are passed to the listener function.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>*</span><div class='sub-desc'><p>Result returned from runner.</p>\n</div></li></ul></div></div></div><div id='method-peek' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='core.pubsub.hub'>core.pubsub.hub</span><br/><a href='source/hub.html#core-pubsub-hub-method-peek' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.pubsub.hub-method-peek' class='name expandable'>peek</a>( <span class='pre'>type, [value]</span> ) : *<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns value in handlers MEMORY ...</div><div class='long'><p>Returns value in handlers MEMORY</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : String<div class='sub-desc'><p>event type to peek at</p>\n</div></li><li><span class='pre'>value</span> : * (optional)<div class='sub-desc'><p>Value to use <em>only</em> if no memory has been recorder</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>*</span><div class='sub-desc'><p>Value in MEMORY</p>\n</div></li></ul></div></div></div><div id='method-publish' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='core.pubsub.hub'>core.pubsub.hub</span><br/><a href='source/hub.html#core-pubsub-hub-method-publish' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.pubsub.hub-method-publish' class='name expandable'>publish</a>( <span class='pre'>type, [args]</span> ) : <a href=\"#!/api/Promise\" rel=\"Promise\" class=\"docClass\">Promise</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Emit a public event that can be subscribed by other components. ...</div><div class='long'><p>Emit a public event that can be subscribed by other components.</p>\n\n<p>Handlers are run in a pipeline, in which each handler will receive muted\ndata params depending on the return value of the previous handler:</p>\n\n<ul>\n<li>The original data params from <a href=\"#!/api/core.pubsub.hub-method-publish\" rel=\"core.pubsub.hub-method-publish\" class=\"docClass\">publish</a> if this's the first handler, or the previous handler returns <code>undefined</code>.</li>\n<li>One value as the single argument if the previous handler return a non-array.</li>\n<li>Each argument value deconstructed from the returning array of the previous handler.</li>\n</ul>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : String<div class='sub-desc'><p>The topic to publish.</p>\n</div></li><li><span class='pre'>args</span> : ...* (optional)<div class='sub-desc'><p>Additional params that are passed to the handler function.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Promise\" rel=\"Promise\" class=\"docClass\">Promise</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-subscribe' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='core.pubsub.hub'>core.pubsub.hub</span><br/><a href='source/hub.html#core-pubsub-hub-method-subscribe' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.pubsub.hub-method-subscribe' class='name expandable'>subscribe</a>( <span class='pre'>type, context, callback, [data]</span> ) : <a href=\"#!/api/core.pubsub.hub\" rel=\"core.pubsub.hub\" class=\"docClass\">core.pubsub.hub</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Listen to an event that are emitted publicly. ...</div><div class='long'><p>Listen to an event that are emitted publicly.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : String<div class='sub-desc'><p>The event type to subscribe to.</p>\n</div></li><li><span class='pre'>context</span> : Object<div class='sub-desc'><p>The context to scope the callback to.</p>\n</div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>The event listener function.</p>\n</div></li><li><span class='pre'>data</span> : * (optional)<div class='sub-desc'><p>Handler data</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/core.pubsub.hub\" rel=\"core.pubsub.hub\" class=\"docClass\">core.pubsub.hub</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-toString' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.mixin.base' rel='core.mixin.base' class='defined-in docClass'>core.mixin.base</a><br/><a href='source/base2.html#core-mixin-base-method-toString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.mixin.base-method-toString' class='name expandable'>toString</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Gives string representation of this component instance. ...</div><div class='long'><p>Gives string representation of this component instance.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p><a href=\"#!/api/core.mixin.base-property-displayName\" rel=\"core.mixin.base-property-displayName\" class=\"docClass\">displayName</a> and <a href=\"#!/api/core.mixin.base-property-instanceCount\" rel=\"core.mixin.base-property-instanceCount\" class=\"docClass\">instanceCount</a></p>\n</div></li></ul></div></div></div><div id='method-unsubscribe' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='core.pubsub.hub'>core.pubsub.hub</span><br/><a href='source/hub.html#core-pubsub-hub-method-unsubscribe' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.pubsub.hub-method-unsubscribe' class='name expandable'>unsubscribe</a>( <span class='pre'>type, [context], [callback]</span> ) : <a href=\"#!/api/core.pubsub.hub\" rel=\"core.pubsub.hub\" class=\"docClass\">core.pubsub.hub</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>Remove a public event listener. ...</div><div class='long'><p>Remove a public event listener.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : String<div class='sub-desc'><p>The event type subscribed to</p>\n</div></li><li><span class='pre'>context</span> : Object (optional)<div class='sub-desc'><p>The context to scope the callback to remove</p>\n</div></li><li><span class='pre'>callback</span> : Function (optional)<div class='sub-desc'><p>The event listener function to remove</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/core.pubsub.hub\" rel=\"core.pubsub.hub\" class=\"docClass\">core.pubsub.hub</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{"singleton":true}});