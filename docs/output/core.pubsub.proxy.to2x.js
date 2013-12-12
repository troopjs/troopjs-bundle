Ext.data.JsonP.core_pubsub_proxy_to2x({"uses":[],"mixedInto":[],"extends":"core.component.service","alternateClassNames":[],"parentMixins":[],"aliases":{},"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/core.component.base' rel='core.component.base' class='docClass'>core.component.base</a><div class='subclass '><a href='#!/api/core.event.emitter' rel='core.event.emitter' class='docClass'>core.event.emitter</a><div class='subclass '><a href='#!/api/core.component.gadget' rel='core.component.gadget' class='docClass'>core.component.gadget</a><div class='subclass '><a href='#!/api/core.component.service' rel='core.component.service' class='docClass'>core.component.service</a><div class='subclass '><strong>core.pubsub.proxy.to2x</strong></div></div></div></div></div><h4>Files</h4><div class='dependency'><a href='source/to2x.html#core-pubsub-proxy-to2x' target='_blank'>to2x.js</a></div></pre><div class='doc-contents'><p>Proxies to 2.x hub</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='core.pubsub.proxy.to2x'>core.pubsub.proxy.to2x</span><br/><a href='source/to2x.html#core-pubsub-proxy-to2x-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/core.pubsub.proxy.to2x-method-constructor' class='name expandable'>core.pubsub.proxy.to2x</a>( <span class='pre'>setting</span> ) : <a href=\"#!/api/core.pubsub.proxy.to2x\" rel=\"core.pubsub.proxy.to2x\" class=\"docClass\">core.pubsub.proxy.to2x</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>setting</span> : Object...<div class='sub-desc'><p>Setting</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/core.pubsub.proxy.to2x\" rel=\"core.pubsub.proxy.to2x\" class=\"docClass\">core.pubsub.proxy.to2x</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-configure' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.component.base' rel='core.component.base' class='defined-in docClass'>core.component.base</a><br/><a href='source/base2.html#core-component-base-method-configure' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.component.base-method-configure' class='name expandable'>configure</a>( <span class='pre'>[configs]</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Add to the component configurations, possibly merge with the existing ones. ...</div><div class='long'><p>Add to the component configurations, possibly merge with the existing ones.</p>\n\n<pre><code>    var List = Component.extend({\n        \"sig/start\": function start() {\n            // configure the List.\n            this.configure({\n                \"type\": \"list\",\n                \"cls\": [\"list\"]\n            });\n        }\n    });\n    var Dropdown = List.extend({\n        \"sig/start\": function start() {\n            // configure the Dropdown.\n            this.configure({\n                \"type\": \"dropdown\",\n                \"cls\": [\"dropdown\"],\n                \"shadow\": true\n            });\n        }\n    });\n\n    var dropdown = new Dropdown();\n\n    // Overwritten: \"dropdown\"\n    print(dropdown.configuration.id);\n    // Augmented: [\"list\",\"dropdown\"]\n    print(dropdown.configuration.cls);\n    // Added: true\n    print(dropdown.configuration.shadow);\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>configs</span> : Object... (optional)<div class='sub-desc'><p>Config(s) to add.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>The new configuration.</p>\n</div></li></ul></div></div></div><div id='method-emit' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.event.emitter' rel='core.event.emitter' class='defined-in docClass'>core.event.emitter</a><br/><a href='source/emitter.html#core-event-emitter-method-emit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.event.emitter-method-emit' class='name expandable'>emit</a>( <span class='pre'>event, [args]</span> ) : Promise<span class=\"signature\"></span></div><div class='description'><div class='short'>Trigger an event which notifies each of the listeners in sequence of their subscribing,\noptionally pass data values t...</div><div class='long'><p>Trigger an event which notifies each of the listeners in sequence of their subscribing,\noptionally pass data values to the listeners.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : String<div class='sub-desc'><p>The event name to emit</p>\n</div></li><li><span class='pre'>args</span> : Mixed... (optional)<div class='sub-desc'><p>Data params that are passed to the listener function.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Promise</span><div class='sub-desc'><p>promise Promise of the return values yield from the listeners at all.</p>\n</div></li></ul></div></div></div><div id='method-off' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.component.gadget' rel='core.component.gadget' class='defined-in docClass'>core.component.gadget</a><br/><a href='source/gadget.html#core-component-gadget-method-off' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.component.gadget-method-off' class='name expandable'>off</a>( <span class='pre'>event, [context], [listener]</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Remove listener(s) from a subscribed event, if no listener is specified,\nremove all listeners of this event. ...</div><div class='long'><p>Remove listener(s) from a subscribed event, if no listener is specified,\nremove all listeners of this event.</p>\n<p>Context of the callback will always be <strong>this</strong> object.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : String<div class='sub-desc'><p>The event that the listener subscribes to.</p>\n\n</div></li><li><span class='pre'>context</span> : Object (optional)<div class='sub-desc'><p>The context that bind to the listener.</p>\n\n</div></li><li><span class='pre'>listener</span> : Function... (optional)<div class='sub-desc'><p>One more more callback listeners to remove.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>this</p>\n\n\n\n</div></li></ul><p>Overrides: <a href=\"#!/api/core.event.emitter-method-off\" rel=\"core.event.emitter-method-off\" class=\"docClass\">core.event.emitter.off</a></p></div></div></div><div id='method-on' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.component.gadget' rel='core.component.gadget' class='defined-in docClass'>core.component.gadget</a><br/><a href='source/gadget.html#core-component-gadget-method-on' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.component.gadget-method-on' class='name expandable'>on</a>( <span class='pre'>event, [context], [callback]</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Adds a listener for the specified event. ...</div><div class='long'><p>Adds a listener for the specified event.</p>\n<p>Context of the callback will always be <strong>this</strong> object.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : String<div class='sub-desc'><p>The event name to subscribe to.</p>\n\n</div></li><li><span class='pre'>context</span> : Object (optional)<div class='sub-desc'><p>The context to scope callbacks to.</p>\n\n</div></li><li><span class='pre'>callback</span> : Function (optional)<div class='sub-desc'><p>The event listener function.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>this</p>\n\n\n\n</div></li></ul><p>Overrides: <a href=\"#!/api/core.event.emitter-method-on\" rel=\"core.event.emitter-method-on\" class=\"docClass\">core.event.emitter.on</a></p></div></div></div><div id='method-peek' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.event.emitter' rel='core.event.emitter' class='defined-in docClass'>core.event.emitter</a><br/><a href='source/emitter.html#core-event-emitter-method-peek' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.event.emitter-method-peek' class='name expandable'>peek</a>( <span class='pre'>event</span> ) : *<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns value in handlers MEMORY ...</div><div class='long'><p>Returns value in handlers MEMORY</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : String<div class='sub-desc'><p>to peek at</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>*</span><div class='sub-desc'><p>Value in MEMORY</p>\n</div></li></ul></div></div></div><div id='method-publish' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.component.gadget' rel='core.component.gadget' class='defined-in docClass'>core.component.gadget</a><br/><a href='source/gadget.html#core-component-gadget-method-publish' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.component.gadget-method-publish' class='name expandable'>publish</a>( <span class='pre'></span> ) : Promise<span class=\"signature\"></span></div><div class='description'><div class='short'>Emit a public event that can be subscribed by other components. ...</div><div class='long'><p>Emit a public event that can be subscribed by other components.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Promise</span><div class='sub-desc'><p>promise Promise of the return values yield from the listeners at all.</p>\n\n</div></li></ul></div></div></div><div id='method-reemit' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.component.gadget' rel='core.component.gadget' class='defined-in docClass'>core.component.gadget</a><br/><a href='source/gadget.html#core-component-gadget-method-reemit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.component.gadget-method-reemit' class='name expandable'>reemit</a>( <span class='pre'>event, senile, [context], [callback]</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Re-emit any event that are previously triggered, any (new) listeners will be called with the memorized data\nfrom the ...</div><div class='long'><p>Re-emit any event that are <strong>previously triggered</strong>, any (new) listeners will be called with the memorized data\nfrom the previous event emitting procedure.</p>\n\n<pre><code>// start widget1 upon the app loaded.\napp.on('load', function(url) {\n    widget1.start(url);\n});\n\n// Emits the load event on app.\napp.emit('load', window.location.hash);\n\n// start of widget2 comes too late for the app start.\napp.on('load', function(url) {\n    // Widget should have with the same URL as with widget1.\n    widget2.start(url);\n});\n\n$.ready(function() {\n    // Compensate the \"load\" event listeners that are missed.\n    app.reemit();\n});\n</code></pre>\n<p>Context of the callback will always be <strong>this</strong> object.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : String<div class='sub-desc'><p>The event name to re-emit, dismiss if it's the first time to emit this event.</p>\n\n</div></li><li><span class='pre'>senile</span> : Boolean<div class='sub-desc'><p>Whether to trigger listeners that are already handled in previous emitting.</p>\n\n<p>Defaults to: <code>false</code></p></div></li><li><span class='pre'>context</span> : Object (optional)<div class='sub-desc'><p>The context object to scope this re-emitting.</p>\n\n</div></li><li><span class='pre'>callback</span> : Function... (optional)<div class='sub-desc'><p>One or more specific listeners that should be affected in the re-emitting.</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>this</p>\n\n\n\n</div></li></ul><p>Overrides: <a href=\"#!/api/core.event.emitter-method-reemit\" rel=\"core.event.emitter-method-reemit\" class=\"docClass\">core.event.emitter.reemit</a></p></div></div></div><div id='method-republish' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.component.gadget' rel='core.component.gadget' class='defined-in docClass'>core.component.gadget</a><br/><a href='source/gadget.html#core-component-gadget-method-republish' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.component.gadget-method-republish' class='name expandable'>republish</a>( <span class='pre'>event, senile, callback</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Re-emit a public event. ...</div><div class='long'><p>Re-emit a public event.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>senile</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>callback</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>this</p>\n\n\n\n</div></li></ul></div></div></div><div id='method-sig/finalize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='core.pubsub.proxy.to2x'>core.pubsub.proxy.to2x</span><br/><a href='source/to2x.html#core-pubsub-proxy-to2x-method-sig/finalize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.pubsub.proxy.to2x-method-sig/finalize' class='name expandable'>sig/finalize</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-sig/initialize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='core.pubsub.proxy.to2x'>core.pubsub.proxy.to2x</span><br/><a href='source/to2x.html#core-pubsub-proxy-to2x-method-sig/initialize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.pubsub.proxy.to2x-method-sig/initialize' class='name expandable'>sig/initialize</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-sig/start' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='core.pubsub.proxy.to2x'>core.pubsub.proxy.to2x</span><br/><a href='source/to2x.html#core-pubsub-proxy-to2x-method-sig/start' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.pubsub.proxy.to2x-method-sig/start' class='name expandable'>sig/start</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-signal' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.component.base' rel='core.component.base' class='defined-in docClass'>core.component.base</a><br/><a href='source/base2.html#core-component-base-method-signal' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.component.base-method-signal' class='name expandable'>signal</a>( <span class='pre'>_signal</span> ) : Promise<span class=\"signature\"></span></div><div class='description'><div class='short'>Signals the component ...</div><div class='long'><p>Signals the component</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>_signal</span> : Object<div class='sub-desc'><p>{String} Signal</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Promise</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-spy' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.component.gadget' rel='core.component.gadget' class='defined-in docClass'>core.component.gadget</a><br/><a href='source/gadget.html#core-component-gadget-method-spy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.component.gadget-method-spy' class='name expandable'>spy</a>( <span class='pre'>event</span> ) : *<span class=\"signature\"></span></div><div class='description'><div class='short'>Spies on the current value in MEMORY on the hub ...</div><div class='long'><p>Spies on the current value in MEMORY on the hub</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : String<div class='sub-desc'><p>event to spy on</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>*</span><div class='sub-desc'><p>Value in MEMORY</p>\n</div></li></ul></div></div></div><div id='method-start' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.component.base' rel='core.component.base' class='defined-in docClass'>core.component.base</a><br/><a href='source/base2.html#core-component-base-method-start' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.component.base-method-start' class='name expandable'>start</a>( <span class='pre'></span> ) : *<span class=\"signature\"></span></div><div class='description'><div class='short'>Start the component life-cycle. ...</div><div class='long'><p>Start the component life-cycle.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>*</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-stop' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.component.base' rel='core.component.base' class='defined-in docClass'>core.component.base</a><br/><a href='source/base2.html#core-component-base-method-stop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.component.base-method-stop' class='name expandable'>stop</a>( <span class='pre'></span> ) : *<span class=\"signature\"></span></div><div class='description'><div class='short'>Stops the component life-cycle. ...</div><div class='long'><p>Stops the component life-cycle.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>*</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-subscribe' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.component.gadget' rel='core.component.gadget' class='defined-in docClass'>core.component.gadget</a><br/><a href='source/gadget.html#core-component-gadget-method-subscribe' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.component.gadget-method-subscribe' class='name expandable'>subscribe</a>( <span class='pre'>event, callback</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Listen to an event that are emitted publicly. ...</div><div class='long'><p>Listen to an event that are emitted publicly.</p>\n<p>Subscribe to public events from this component, forcing the context of which to be this component.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>callback</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>this</p>\n\n\n\n</div></li></ul></div></div></div><div id='method-task' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.component.base' rel='core.component.base' class='defined-in docClass'>core.component.base</a><br/><a href='source/base2.html#core-component-base-method-task' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.component.base-method-task' class='name expandable'>task</a>( <span class='pre'>resolver, [name]</span> ) : Promise<span class=\"signature\"></span></div><div class='description'><div class='short'>Schedule a new promise that runs on this component, sends a \"task\" signal once finished. ...</div><div class='long'><p>Schedule a new promise that runs on this component, sends a \"task\" signal once finished.</p>\n\n<p><strong>Note:</strong> It's recommended to use <strong>this method instead of an ad-hoc promise</strong> to do async lift on this component,\nsince in additional to an ordinary promise, it also helps to track the context of any running promise,\nincluding it's name, completion time and a given ID.</p>\n\n<pre><code>var widget = Widget.create({\n    \"sig/task\" : function(promise) {\n        print('task %s started at: %s, finished at: %s', promise.name, promise.started);\n    }\n});\n\nwidget.task(function(resolve) {\n    $(this.$element).fadeOut(resolve);\n}, 'animate');\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>resolver</span> : Function<div class='sub-desc'><p>The task resolver function.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>resolve</span> : Function<div class='sub-desc'><p>Resolve the task.</p>\n</div></li><li><span class='pre'>reject</span> : Function<div class='sub-desc'><p>Reject the task.</p>\n</div></li><li><span class='pre'>notify</span> : Function<div class='sub-desc'><p>Notify the progress of this task.</p>\n</div></li></ul></div></li><li><span class='pre'>name</span> : String (optional)<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Promise</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-toString' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.component.base' rel='core.component.base' class='defined-in docClass'>core.component.base</a><br/><a href='source/base2.html#core-component-base-method-toString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.component.base-method-toString' class='name expandable'>toString</a>( <span class='pre'></span> ) : string<span class=\"signature\"></span></div><div class='description'><div class='short'>Gives string representation of this component instance. ...</div><div class='long'><p>Gives string representation of this component instance.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>string</span><div class='sub-desc'><p>displayName and instanceCount</p>\n</div></li></ul></div></div></div><div id='method-unsubscribe' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.component.gadget' rel='core.component.gadget' class='defined-in docClass'>core.component.gadget</a><br/><a href='source/gadget.html#core-component-gadget-method-unsubscribe' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.component.gadget-method-unsubscribe' class='name expandable'>unsubscribe</a>( <span class='pre'>event, callback</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Remove a public event listener. ...</div><div class='long'><p>Remove a public event listener.</p>\n<p>Unsubscribe from public events in context of this component.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>callback</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>this</p>\n\n\n\n</div></li></ul></div></div></div></div></div></div></div>","autodetected":{},"members":[{"owner":"core.pubsub.proxy.to2x","tagname":"method","meta":{},"name":"constructor","id":"method-constructor"},{"owner":"core.component.base","tagname":"method","meta":{},"name":"configure","id":"method-configure"},{"owner":"core.event.emitter","tagname":"method","meta":{},"name":"emit","id":"method-emit"},{"owner":"core.component.gadget","tagname":"method","meta":{},"name":"off","id":"method-off"},{"owner":"core.component.gadget","tagname":"method","meta":{},"name":"on","id":"method-on"},{"owner":"core.event.emitter","tagname":"method","meta":{},"name":"peek","id":"method-peek"},{"owner":"core.component.gadget","tagname":"method","meta":{},"name":"publish","id":"method-publish"},{"owner":"core.component.gadget","tagname":"method","meta":{},"name":"reemit","id":"method-reemit"},{"owner":"core.component.gadget","tagname":"method","meta":{},"name":"republish","id":"method-republish"},{"owner":"core.pubsub.proxy.to2x","tagname":"method","meta":{},"name":"sig/finalize","id":"method-sig/finalize"},{"owner":"core.pubsub.proxy.to2x","tagname":"method","meta":{},"name":"sig/initialize","id":"method-sig/initialize"},{"owner":"core.pubsub.proxy.to2x","tagname":"method","meta":{},"name":"sig/start","id":"method-sig/start"},{"owner":"core.component.base","tagname":"method","meta":{},"name":"signal","id":"method-signal"},{"owner":"core.component.gadget","tagname":"method","meta":{},"name":"spy","id":"method-spy"},{"owner":"core.component.base","tagname":"method","meta":{},"name":"start","id":"method-start"},{"owner":"core.component.base","tagname":"method","meta":{},"name":"stop","id":"method-stop"},{"owner":"core.component.gadget","tagname":"method","meta":{},"name":"subscribe","id":"method-subscribe"},{"owner":"core.component.base","tagname":"method","meta":{},"name":"task","id":"method-task"},{"owner":"core.component.base","tagname":"method","meta":{},"name":"toString","id":"method-toString"},{"owner":"core.component.gadget","tagname":"method","meta":{},"name":"unsubscribe","id":"method-unsubscribe"}],"tagname":"class","superclasses":["core.component.base","core.event.emitter","core.component.gadget","core.component.service"],"meta":{},"subclasses":[],"files":[{"href":"to2x.html#core-pubsub-proxy-to2x","filename":"to2x.js"}],"name":"core.pubsub.proxy.to2x","requires":[],"mixins":[],"component":false,"id":"class-core.pubsub.proxy.to2x"});