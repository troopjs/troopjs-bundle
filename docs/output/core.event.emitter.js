Ext.data.JsonP.core_event_emitter({"uses":[],"mixedInto":[],"extends":"core.mixin.base","alternateClassNames":[],"parentMixins":[],"aliases":{},"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/core.mixin.base' rel='core.mixin.base' class='docClass'>core.mixin.base</a><div class='subclass '><strong>core.event.emitter</strong></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/core.component.base' rel='core.component.base' class='docClass'>core.component.base</a></div><div class='dependency'><a href='#!/api/core.pubsub.hub' rel='core.pubsub.hub' class='docClass'>core.pubsub.hub</a></div><h4>Files</h4><div class='dependency'><a href='source/emitter.html#core-event-emitter' target='_blank'>emitter.js</a></div></pre><div class='doc-contents'><p>The event module of TroopJS that provides common event handling capability, and some highlights:</p>\n\n<h2>Asynchronous handlers</h2>\n\n<p>Any event handler can be asynchronous depending on the <strong>return value</strong>:</p>\n\n<ul>\n<li>a Promise value makes this handler be considered asynchronous, where the next handler will be called\nupon the completion of this promise.</li>\n<li>any non-Promise values make it a ordinary handler, where the next handler will be invoked immediately.</li>\n</ul>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-emit' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='core.event.emitter'>core.event.emitter</span><br/><a href='source/emitter.html#core-event-emitter-method-emit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.event.emitter-method-emit' class='name expandable'>emit</a>( <span class='pre'>event, [args]</span> ) : *<span class=\"signature\"></span></div><div class='description'><div class='short'>Trigger an event which notifies each of the listeners of their subscribing,\noptionally pass data values to the listen...</div><div class='long'><p>Trigger an event which notifies each of the listeners of their subscribing,\noptionally pass data values to the listeners.</p>\n\n<p> A sequential runner, is the default runner for this module, in which all handlers are running\n with the same argument data specified by the <a href=\"#!/api/core.event.emitter-method-emit\" rel=\"core.event.emitter-method-emit\" class=\"docClass\">emit</a> function.\n Each handler will wait for the completion for the previous one if it returns a promise.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : String|Object<div class='sub-desc'><p>The event type to emit, or an event object</p>\n<ul><li><span class='pre'>type</span> : String (optional)<div class='sub-desc'><p>The event type name.</p>\n</div></li><li><span class='pre'>runner</span> : Function (optional)<div class='sub-desc'><p>The runner function that determinate how the handlers are executed, overrides the\ndefault behaviour of the event emitting.</p>\n</div></li></ul></div></li><li><span class='pre'>args</span> : ...* (optional)<div class='sub-desc'><p>Data params that are passed to the listener function.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>*</span><div class='sub-desc'><p>Result returned from runner.</p>\n</div></li></ul></div></div></div><div id='method-off' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='core.event.emitter'>core.event.emitter</span><br/><a href='source/emitter.html#core-event-emitter-method-off' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.event.emitter-method-off' class='name expandable'>off</a>( <span class='pre'>type, [context], [callback]</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Remove callback(s) from a subscribed event type, if no callback is specified,\nremove all callbacks of this type. ...</div><div class='long'><p>Remove callback(s) from a subscribed event type, if no callback is specified,\nremove all callbacks of this type.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : String<div class='sub-desc'><p>The event type subscribed to</p>\n</div></li><li><span class='pre'>context</span> : Object (optional)<div class='sub-desc'><p>The context to scope the callback to remove</p>\n</div></li><li><span class='pre'>callback</span> : Function (optional)<div class='sub-desc'><p>The event listener function to remove</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>this</p>\n\n</div></li></ul></div></div></div><div id='method-on' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='core.event.emitter'>core.event.emitter</span><br/><a href='source/emitter.html#core-event-emitter-method-on' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.event.emitter-method-on' class='name expandable'>on</a>( <span class='pre'>type, context, callback, [data]</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Adds a listener for the specified event type. ...</div><div class='long'><p>Adds a listener for the specified event type.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : String<div class='sub-desc'><p>The event type to subscribe to.</p>\n</div></li><li><span class='pre'>context</span> : Object<div class='sub-desc'><p>The context to scope the callback to.</p>\n</div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>The event listener function.</p>\n</div></li><li><span class='pre'>data</span> : * (optional)<div class='sub-desc'><p>Handler data</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>this</p>\n\n</div></li></ul></div></div></div><div id='method-toString' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.mixin.base' rel='core.mixin.base' class='defined-in docClass'>core.mixin.base</a><br/><a href='source/base3.html#core-mixin-base-method-toString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.mixin.base-method-toString' class='name expandable'>toString</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Gives string representation of this component instance. ...</div><div class='long'><p>Gives string representation of this component instance.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>displayName and instanceCount</p>\n</div></li></ul></div></div></div></div></div></div></div>","autodetected":{},"members":[{"owner":"core.event.emitter","tagname":"method","meta":{},"name":"emit","id":"method-emit"},{"owner":"core.event.emitter","tagname":"method","meta":{},"name":"off","id":"method-off"},{"owner":"core.event.emitter","tagname":"method","meta":{},"name":"on","id":"method-on"},{"owner":"core.mixin.base","tagname":"method","meta":{},"name":"toString","id":"method-toString"}],"tagname":"class","short_doc":"The event module of TroopJS that provides common event handling capability, and some highlights:\n\nAsynchronous handle...","superclasses":["core.mixin.base"],"meta":{},"subclasses":["core.component.base","core.pubsub.hub"],"files":[{"href":"emitter.html#core-event-emitter","filename":"emitter.js"}],"name":"core.event.emitter","requires":[],"mixins":[],"component":false,"id":"class-core.event.emitter"});