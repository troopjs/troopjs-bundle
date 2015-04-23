Ext.data.JsonP.core_task_registry({"tagname":"class","name":"core.task.registry","autodetected":{},"files":[{"filename":"registry.js","href":"registry2.html#core-task-registry"}],"extends":"core.registry.emitter","singleton":true,"members":[{"name":"displayName","tagname":"property","owner":"core.composition","id":"property-displayName","meta":{"protected":true,"readonly":true}},{"name":"executor","tagname":"property","owner":"core.emitter.composition","id":"property-executor","meta":{"private":true,"readonly":true}},{"name":"handlers","tagname":"property","owner":"core.emitter.composition","id":"property-handlers","meta":{"protected":true,"readonly":true}},{"name":"instanceCount","tagname":"property","owner":"core.composition","id":"property-instanceCount","meta":{"private":true,"readonly":true}},{"name":"this[INDEX]","tagname":"property","owner":"core.registry.emitter","id":"property-this[INDEX]","meta":{"private":true,"readonly":true}},{"name":"emit","tagname":"method","owner":"core.emitter.composition","id":"method-emit","meta":{}},{"name":"get","tagname":"method","owner":"core.registry.emitter","id":"method-get","meta":{}},{"name":"off","tagname":"method","owner":"core.emitter.composition","id":"method-off","meta":{}},{"name":"on","tagname":"method","owner":"core.emitter.composition","id":"method-on","meta":{}},{"name":"one","tagname":"method","owner":"core.emitter.composition","id":"method-one","meta":{}},{"name":"register","tagname":"method","owner":"core.registry.emitter","id":"method-register","meta":{}},{"name":"toString","tagname":"method","owner":"core.composition","id":"method-toString","meta":{"protected":true}},{"name":"unregister","tagname":"method","owner":"core.registry.emitter","id":"method-unregister","meta":{}},{"name":"sig/register","tagname":"event","owner":"core.registry.emitter","id":"event-sig-register","meta":{}},{"name":"sig/unregister","tagname":"event","owner":"core.registry.emitter","id":"event-sig-unregister","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-core.task.registry","classIcon":"icon-singleton","superclasses":["core.composition","core.emitter.composition","core.registry.emitter"],"subclasses":[],"mixedInto":[],"implementedBy":[],"mixins":[],"implements":["compose.composition"],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/core.composition' rel='core.composition' class='docClass'>core.composition</a><div class='subclass '><a href='#!/api/core.emitter.composition' rel='core.emitter.composition' class='docClass'>core.emitter.composition</a><div class='subclass '><a href='#!/api/core.registry.emitter' rel='core.registry.emitter' class='docClass'>core.registry.emitter</a><div class='subclass '><strong>core.task.registry</strong></div></div></div></div><h4>Implements</h4><div class='dependency'><a href='#!/api/compose.composition' rel='compose.composition' class='docClass'>compose.composition</a></div><h4>Files</h4><div class='dependency'><a href='source/registry2.html#core-task-registry' target='_blank'>registry.js</a></div></pre><div class='doc-contents'>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-displayName' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.composition' rel='core.composition' class='defined-in docClass'>core.composition</a><br/><a href='source/composition3.html#core-composition-property-displayName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.composition-property-displayName' class='name expandable'>displayName</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='protected' >protected</span><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>The hierarchical namespace for this component that indicates it's functionality. ...</div><div class='long'><p>The hierarchical namespace for this component that indicates it's functionality.</p>\n<p>Defaults to: <code>&quot;core/composition&quot;</code></p></div></div></div><div id='property-executor' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.emitter.composition' rel='core.emitter.composition' class='defined-in docClass'>core.emitter.composition</a><br/><a href='source/composition2.html#core-emitter-composition-property-executor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.emitter.composition-property-executor' class='name expandable'>executor</a> : <a href=\"#!/api/core.emitter.executor\" rel=\"core.emitter.executor\" class=\"docClass\">core.emitter.executor</a><span class=\"signature\"><span class='private' >private</span><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'><p>Event executor</p>\n</div><div class='long'><p>Event executor</p>\n</div></div></div><div id='property-handlers' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.emitter.composition' rel='core.emitter.composition' class='defined-in docClass'>core.emitter.composition</a><br/><a href='source/composition2.html#core-emitter-composition-property-handlers' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.emitter.composition-property-handlers' class='name expandable'>handlers</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"><span class='protected' >protected</span><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'><p>Event handlersObject where the key represents the event type and the value is a list of <a href=\"#!/api/core.emitter.handler\" rel=\"core.emitter.handler\" class=\"docClass\">handlers</a> for that type.</p>\n</div><div class='long'><p>Event handlersObject where the key represents the event type and the value is a list of <a href=\"#!/api/core.emitter.handler\" rel=\"core.emitter.handler\" class=\"docClass\">handlers</a> for that type.</p>\n</div></div></div><div id='property-instanceCount' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.composition' rel='core.composition' class='defined-in docClass'>core.composition</a><br/><a href='source/composition3.html#core-composition-property-instanceCount' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.composition-property-instanceCount' class='name expandable'>instanceCount</a> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><span class=\"signature\"><span class='private' >private</span><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'><p>Instance counter</p>\n</div><div class='long'><p>Instance counter</p>\n</div></div></div><div id='property-this[INDEX]' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.registry.emitter' rel='core.registry.emitter' class='defined-in docClass'>core.registry.emitter</a><br/><a href='source/emitter.html#core-registry-emitter-property-this[INDEX]' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.registry.emitter-property-this[INDEX]' class='name expandable'>this[INDEX]</a> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><span class=\"signature\"><span class='private' >private</span><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>Registry index ...</div><div class='long'><p>Registry index</p>\n<p>Defaults to: <code>{}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-emit' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.emitter.composition' rel='core.emitter.composition' class='defined-in docClass'>core.emitter.composition</a><br/><a href='source/composition2.html#core-emitter-composition-method-emit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.emitter.composition-method-emit' class='name expandable'>emit</a>( <span class='pre'>event, [args]</span> ) : *<span class=\"signature\"></span></div><div class='description'><div class='short'>Trigger an event which notifies each of the listeners of their subscribing,\noptionally pass data values to the listen...</div><div class='long'><p>Trigger an event which notifies each of the listeners of their subscribing,\noptionally pass data values to the listeners.</p>\n\n<p> A sequential runner, is the default runner for this module, in which all handlers are running\n with the same argument data specified by the <a href=\"#!/api/core.emitter.composition-method-emit\" rel=\"core.emitter.composition-method-emit\" class=\"docClass\">emit</a> function.\n Each handler will wait for the completion for the previous one if it returns a promise.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>|<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The event type to emit, or an event object</p>\n<ul><li><span class='pre'>type</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> (optional)<div class='sub-desc'><p>The event type name.</p>\n</div></li><li><span class='pre'>runner</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> (optional)<div class='sub-desc'><p>The runner function that determinate how the handlers are executed, overrides the\ndefault behaviour of the event emitting.</p>\n</div></li></ul></div></li><li><span class='pre'>args</span> : ...* (optional)<div class='sub-desc'><p>Arguments passed to the handler.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>*</span><div class='sub-desc'><p>Result returned from runner.</p>\n</div></li></ul></div></div></div><div id='method-get' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.registry.emitter' rel='core.registry.emitter' class='defined-in docClass'>core.registry.emitter</a><br/><a href='source/emitter.html#core-registry-emitter-method-get' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.registry.emitter-method-get' class='name expandable'>get</a>( <span class='pre'>[key]</span> ) : *|*[]<span class=\"signature\"></span></div><div class='description'><div class='short'>Gets value by key ...</div><div class='long'><p>Gets value by key</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>|<a href=\"#!/api/RegExp\" rel=\"RegExp\" class=\"docClass\">RegExp</a> (optional)<div class='sub-desc'><p>key to filter by\n - If <code>String</code> get value exactly registered for key.\n - If <code>RegExp</code> get value where key matches.\n - If not provided all values registered are returned</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>*|*[]</span><div class='sub-desc'><p>result(s)</p>\n</div></li></ul></div></div></div><div id='method-off' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.emitter.composition' rel='core.emitter.composition' class='defined-in docClass'>core.emitter.composition</a><br/><a href='source/composition2.html#core-emitter-composition-method-off' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.emitter.composition-method-off' class='name expandable'>off</a>( <span class='pre'>type, [callback]</span> ) : <a href=\"#!/api/core.emitter.handler\" rel=\"core.emitter.handler\" class=\"docClass\">core.emitter.handler</a>[]<span class=\"signature\"></span></div><div class='description'><div class='short'>Remove callback(s) from a subscribed event type, if no callback is specified,\nremove all callbacks of this type. ...</div><div class='long'><p>Remove callback(s) from a subscribed event type, if no callback is specified,\nremove all callbacks of this type.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The event type subscribed to</p>\n</div></li><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a>|<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'><p>The event callback to remove. If callback is a function scope will be this, otherwise:</p>\n<ul><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> (optional)<div class='sub-desc'><p>Callback method to match.</p>\n</div></li><li><span class='pre'>scope</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'><p>Callback scope to match.</p>\n<p>Defaults to: <code>this</code></p></div></li></ul></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/core.emitter.handler\" rel=\"core.emitter.handler\" class=\"docClass\">core.emitter.handler</a>[]</span><div class='sub-desc'><p>Handlers that were removed.</p>\n</div></li></ul></div></div></div><div id='method-on' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.emitter.composition' rel='core.emitter.composition' class='defined-in docClass'>core.emitter.composition</a><br/><a href='source/composition2.html#core-emitter-composition-method-on' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.emitter.composition-method-on' class='name expandable'>on</a>( <span class='pre'>type, callback, [data]</span> ) : <a href=\"#!/api/core.emitter.handler\" rel=\"core.emitter.handler\" class=\"docClass\">core.emitter.handler</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Adds a listener for the specified event type. ...</div><div class='long'><p>Adds a listener for the specified event type.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The event type to subscribe to.</p>\n\n</div></li><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a>|<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The event callback to add. If callback is a function defaults from below will be used:</p>\n\n<ul><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>Callback method.</p>\n\n</div></li><li><span class='pre'>scope</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'><p>Callback scope.</p>\n\n<p>Defaults to: <code>this</code></p></div></li><li><span class='pre'>limit</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>Callback limit.</p>\n\n<p>Defaults to: <code>0</code></p></div></li></ul></div></li><li><span class='pre'>data</span> : ...* (optional)<div class='sub-desc'><p>Handler data</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/core.emitter.handler\" rel=\"core.emitter.handler\" class=\"docClass\">core.emitter.handler</a></span><div class='sub-desc'><p>Handler that was added.</p>\n\n</div></li></ul></div></div></div><div id='method-one' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.emitter.composition' rel='core.emitter.composition' class='defined-in docClass'>core.emitter.composition</a><br/><a href='source/composition2.html#core-emitter-composition-method-one' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.emitter.composition-method-one' class='name expandable'>one</a>( <span class='pre'>type, callback, [data]</span> ) : <a href=\"#!/api/core.emitter.handler\" rel=\"core.emitter.handler\" class=\"docClass\">core.emitter.handler</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Adds a listener for the specified event type exactly once. ...</div><div class='long'><p>Adds a listener for the specified event type exactly once.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The event type to subscribe to.</p>\n\n</div></li><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a>|<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The event callback to add. If callback is a function defaults from below will be used:</p>\n\n<ul><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>Callback method.</p>\n\n</div></li><li><span class='pre'>scope</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a> (optional)<div class='sub-desc'><p>Callback scope.</p>\n\n<p>Defaults to: <code>this</code></p></div></li><li><span class='pre'>limit</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a> (optional)<div class='sub-desc'><p>Callback limit.</p>\n\n<p>Defaults to: <code>0</code></p></div></li></ul></div></li><li><span class='pre'>data</span> : ...* (optional)<div class='sub-desc'><p>Handler data</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/core.emitter.handler\" rel=\"core.emitter.handler\" class=\"docClass\">core.emitter.handler</a></span><div class='sub-desc'><p>Handler that was added.</p>\n\n</div></li></ul></div></div></div><div id='method-register' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.registry.emitter' rel='core.registry.emitter' class='defined-in docClass'>core.registry.emitter</a><br/><a href='source/emitter.html#core-registry-emitter-method-register' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.registry.emitter-method-register' class='name expandable'>register</a>( <span class='pre'>key, value</span> ) : *<span class=\"signature\"></span></div><div class='description'><div class='short'>Registers value with key ...</div><div class='long'><p>Registers value with key</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Key</p>\n</div></li><li><span class='pre'>value</span> : *<div class='sub-desc'><p>Value</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>*</span><div class='sub-desc'><p>value registered</p>\n</div></li></ul><h3 class='pa'>Fires</h3><ul><li><a href=\"#!/api/core.registry.emitter-event-sig-register\" rel=\"core.registry.emitter-event-sig-register\" class=\"docClass\">sig/register</a></li></ul></div></div></div><div id='method-toString' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.composition' rel='core.composition' class='defined-in docClass'>core.composition</a><br/><a href='source/composition3.html#core-composition-method-toString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.composition-method-toString' class='name expandable'>toString</a>( <span class='pre'></span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Gives string representation of this component instance. ...</div><div class='long'><p>Gives string representation of this component instance.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p><a href=\"#!/api/core.composition-property-displayName\" rel=\"core.composition-property-displayName\" class=\"docClass\">displayName</a><code>@</code><a href=\"#!/api/core.composition-property-instanceCount\" rel=\"core.composition-property-instanceCount\" class=\"docClass\">instanceCount</a></p>\n</div></li></ul></div></div></div><div id='method-unregister' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.registry.emitter' rel='core.registry.emitter' class='defined-in docClass'>core.registry.emitter</a><br/><a href='source/emitter.html#core-registry-emitter-method-unregister' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.registry.emitter-method-unregister' class='name expandable'>unregister</a>( <span class='pre'>key</span> ) : *<span class=\"signature\"></span></div><div class='description'><div class='short'>Un-registers key ...</div><div class='long'><p>Un-registers key</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Key</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>*</span><div class='sub-desc'><p>value unregistered</p>\n</div></li></ul><h3 class='pa'>Fires</h3><ul><li><a href=\"#!/api/core.registry.emitter-event-sig-unregister\" rel=\"core.registry.emitter-event-sig-unregister\" class=\"docClass\">sig/unregister</a></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-sig-register' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.registry.emitter' rel='core.registry.emitter' class='defined-in docClass'>core.registry.emitter</a><br/><a href='source/emitter.html#core-registry-emitter-event-sig-register' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.registry.emitter-event-sig-register' class='name expandable'>sig/register</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Register signal ...</div><div class='long'><p>Register signal</p>\n<p>Triggered when something is registered via <a href=\"#!/api/core.registry.emitter-method-register\" rel=\"core.registry.emitter-method-register\" class=\"docClass\">register</a>.</p>\n        <p>Available since: <b>3.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>value</span> : *<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='event-sig-unregister' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.registry.emitter' rel='core.registry.emitter' class='defined-in docClass'>core.registry.emitter</a><br/><a href='source/emitter.html#core-registry-emitter-event-sig-unregister' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.registry.emitter-event-sig-unregister' class='name expandable'>sig/unregister</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Un-register signal ...</div><div class='long'><p>Un-register signal</p>\n<p>Triggered when something is un-registered via <a href=\"#!/api/core.registry.emitter-method-unregister\" rel=\"core.registry.emitter-method-unregister\" class=\"docClass\">unregister</a>.</p>\n        <p>Available since: <b>3.0</b></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>value</span> : *<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{"singleton":true}});