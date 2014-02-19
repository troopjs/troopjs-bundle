Ext.data.JsonP.core_component_base({"uses":[],"mixedInto":[],"extends":"core.event.emitter","alternateClassNames":[],"parentMixins":[],"aliases":{},"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/core.mixin.base' rel='core.mixin.base' class='docClass'>core.mixin.base</a><div class='subclass '><a href='#!/api/core.event.emitter' rel='core.event.emitter' class='docClass'>core.event.emitter</a><div class='subclass '><strong>core.component.base</strong></div></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/core.component.gadget' rel='core.component.gadget' class='docClass'>core.component.gadget</a></div><div class='dependency'><a href='#!/api/core.logger.console' rel='core.logger.console' class='docClass'>core.logger.console</a></div><div class='dependency'><a href='#!/api/data.cache.component' rel='data.cache.component' class='docClass'>data.cache.component</a></div><div class='dependency'><a href='#!/api/data.query.component' rel='data.query.component' class='docClass'>data.query.component</a></div><h4>Files</h4><div class='dependency'><a href='source/base2.html#core-component-base' target='_blank'>base.js</a></div></pre><div class='doc-contents'><p>Imagine component as an object that has predefined life-cycle, with the following phases:</p>\n\n<ol>\n<li> initialize (signal)</li>\n<li> start (signal)</li>\n<li> started</li>\n<li> stop (signal)</li>\n<li> finalize (signal)</li>\n<li> finalized</li>\n</ol>\n\n\n<p>Calls on <a href=\"#!/api/core.component.base-method-start\" rel=\"core.component.base-method-start\" class=\"docClass\">start</a> or <a href=\"#!/api/core.component.base-method-stop\" rel=\"core.component.base-method-stop\" class=\"docClass\">stop</a> method of the component will trigger any defined signal\nhandlers declared.</p>\n\n<pre><code>var app = Component.extend({\n    \"displayName\": \"my/component/app\",\n\n    // Signal handler for \"start\" phase\n    \"sig/start\": function start() {\n        // bind resize handler.\n        $(window).on('resize.app', $.proxy(this.onResize, this));\n    },\n\n    // Signal handler for \"finalize\" phase\n    \"sig/finalize\": function finalize() {\n        // cleanup the handler.\n        $(window).off('resize.app');\n    },\n\n    \"onResize\": function onResize(argument) {\n        // window resized.\n    }\n});\n\n$.ready(function on_load() {\n    app.start();\n});\n\n$(window).unload(function on_unload (argument) {\\\n  app.end();\n});\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-configure' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='core.component.base'>core.component.base</span><br/><a href='source/base2.html#core-component-base-method-configure' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.component.base-method-configure' class='name expandable'>configure</a>( <span class='pre'>[config]</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Add to the component configurations, possibly merge with the existing ones. ...</div><div class='long'><p>Add to the component configurations, possibly <a href=\"#!/api/utils.merge\" rel=\"utils.merge\" class=\"docClass\">merge</a> with the existing ones.</p>\n\n<pre><code>    var List = Component.extend({\n        \"sig/start\": function start() {\n            // configure the List.\n            this.configure({\n                \"type\": \"list\",\n                \"cls\": [\"list\"]\n            });\n        }\n    });\n    var Dropdown = List.extend({\n        \"sig/start\": function start() {\n            // configure the Dropdown.\n            this.configure({\n                \"type\": \"dropdown\",\n                \"cls\": [\"dropdown\"],\n                \"shadow\": true\n            });\n        }\n    });\n\n    var dropdown = new Dropdown();\n\n    // Overwritten: \"dropdown\"\n    print(dropdown.configuration.id);\n    // Augmented: [\"list\",\"dropdown\"]\n    print(dropdown.configuration.cls);\n    // Added: true\n    print(dropdown.configuration.shadow);\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : ...Object (optional)<div class='sub-desc'><p>Config(s) to add.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>The new configuration.</p>\n</div></li></ul></div></div></div><div id='method-emit' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.event.emitter' rel='core.event.emitter' class='defined-in docClass'>core.event.emitter</a><br/><a href='source/emitter.html#core-event-emitter-method-emit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.event.emitter-method-emit' class='name expandable'>emit</a>( <span class='pre'>event, [args]</span> ) : *<span class=\"signature\"></span></div><div class='description'><div class='short'>Trigger an event which notifies each of the listeners of their subscribing,\noptionally pass data values to the listen...</div><div class='long'><p>Trigger an event which notifies each of the listeners of their subscribing,\noptionally pass data values to the listeners.</p>\n\n<p> A sequential runner, is the default runner for this module, in which all handlers are running\n with the same argument data specified by the <a href=\"#!/api/core.event.emitter-method-emit\" rel=\"core.event.emitter-method-emit\" class=\"docClass\">emit</a> function.\n Each handler will wait for the completion for the previous one if it returns a promise.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : String|Object<div class='sub-desc'><p>The event type to emit, or an event object</p>\n<ul><li><span class='pre'>type</span> : String (optional)<div class='sub-desc'><p>The event type name.</p>\n</div></li><li><span class='pre'>runner</span> : Function (optional)<div class='sub-desc'><p>The runner function that determinate how the handlers are executed, overrides the\ndefault behaviour of the event emitting.</p>\n</div></li></ul></div></li><li><span class='pre'>args</span> : ...* (optional)<div class='sub-desc'><p>Data params that are passed to the listener function.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>*</span><div class='sub-desc'><p>Result returned from runner.</p>\n</div></li></ul></div></div></div><div id='method-off' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='core.component.base'>core.component.base</span><br/><a href='source/base2.html#core-component-base-method-off' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.component.base-method-off' class='name expandable'>off</a>( <span class='pre'>type, [context], [callback]</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Remove callback(s) from a subscribed event type, if no callback is specified,\nremove all callbacks of this type. ...</div><div class='long'><p>Remove callback(s) from a subscribed event type, if no callback is specified,\nremove all callbacks of this type.</p>\n<p>Context of the callback will always be <strong>this</strong> object.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : String<div class='sub-desc'><p>The event type subscribed to</p>\n</div></li><li><span class='pre'>context</span> : Object (optional)<div class='sub-desc'><p>The context to scope the callback to remove</p>\n</div></li><li><span class='pre'>callback</span> : Function (optional)<div class='sub-desc'><p>The event listener function to remove</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>this</p>\n</div></li></ul><p>Overrides: <a href=\"#!/api/core.event.emitter-method-off\" rel=\"core.event.emitter-method-off\" class=\"docClass\">core.event.emitter.off</a></p></div></div></div><div id='method-on' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='core.component.base'>core.component.base</span><br/><a href='source/base2.html#core-component-base-method-on' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.component.base-method-on' class='name expandable'>on</a>( <span class='pre'>type, context, callback, [data]</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Adds a listener for the specified event type. ...</div><div class='long'><p>Adds a listener for the specified event type.</p>\n<p>Context of the callback will always be <strong>this</strong> object.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : String<div class='sub-desc'><p>The event type to subscribe to.</p>\n</div></li><li><span class='pre'>context</span> : Object<div class='sub-desc'><p>The context to scope the callback to.</p>\n</div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>The event listener function.</p>\n</div></li><li><span class='pre'>data</span> : * (optional)<div class='sub-desc'><p>Handler data</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>this</p>\n</div></li></ul><p>Overrides: <a href=\"#!/api/core.event.emitter-method-on\" rel=\"core.event.emitter-method-on\" class=\"docClass\">core.event.emitter.on</a></p></div></div></div><div id='method-signal' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='core.component.base'>core.component.base</span><br/><a href='source/base2.html#core-component-base-method-signal' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.component.base-method-signal' class='name expandable'>signal</a>( <span class='pre'>_signal, [args]</span> ) : Promise<span class=\"signature\"></span></div><div class='description'><div class='short'>Signals the component ...</div><div class='long'><p>Signals the component</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>_signal</span> : String<div class='sub-desc'><p>Signal</p>\n</div></li><li><span class='pre'>args</span> : ...* (optional)<div class='sub-desc'><p>signal arguments</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Promise</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-start' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='core.component.base'>core.component.base</span><br/><a href='source/base2.html#core-component-base-method-start' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.component.base-method-start' class='name expandable'>start</a>( <span class='pre'>[args]</span> ) : Promise<span class=\"signature\"></span></div><div class='description'><div class='short'>Start the component life-cycle. ...</div><div class='long'><p>Start the component life-cycle.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : ...* (optional)<div class='sub-desc'><p>arguments</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Promise</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-stop' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='core.component.base'>core.component.base</span><br/><a href='source/base2.html#core-component-base-method-stop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.component.base-method-stop' class='name expandable'>stop</a>( <span class='pre'>[args]</span> ) : Promise<span class=\"signature\"></span></div><div class='description'><div class='short'>Stops the component life-cycle. ...</div><div class='long'><p>Stops the component life-cycle.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : ...* (optional)<div class='sub-desc'><p>arguments</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Promise</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-task' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='core.component.base'>core.component.base</span><br/><a href='source/base2.html#core-component-base-method-task' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.component.base-method-task' class='name expandable'>task</a>( <span class='pre'>resolver, [name]</span> ) : Promise<span class=\"signature\"></span></div><div class='description'><div class='short'>Schedule a new promise that runs on this component, sends a \"task\" signal once finished. ...</div><div class='long'><p>Schedule a new promise that runs on this component, sends a \"task\" signal once finished.</p>\n\n<p><strong>Note:</strong> It's recommended to use <strong>this method instead of an ad-hoc promise</strong> to do async lift on this component,\nsince in additional to an ordinary promise, it also helps to track the context of any running promise,\nincluding it's name, completion time and a given ID.</p>\n\n<pre><code>var widget = Widget.create({\n    \"sig/task\" : function(promise) {\n        print('task %s started at: %s, finished at: %s', promise.name, promise.started);\n    }\n});\n\nwidget.task(function(resolve) {\n    $(this.$element).fadeOut(resolve);\n}, 'animate');\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>resolver</span> : Function<div class='sub-desc'><p>The task resolver function.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>resolve</span> : Function<div class='sub-desc'><p>Resolve the task.</p>\n</div></li><li><span class='pre'>reject</span> : Function<div class='sub-desc'><p>Reject the task.</p>\n</div></li><li><span class='pre'>notify</span> : Function<div class='sub-desc'><p>Notify the progress of this task.</p>\n</div></li></ul></div></li><li><span class='pre'>name</span> : String (optional)<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Promise</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-toString' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.mixin.base' rel='core.mixin.base' class='defined-in docClass'>core.mixin.base</a><br/><a href='source/base3.html#core-mixin-base-method-toString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.mixin.base-method-toString' class='name expandable'>toString</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Gives string representation of this component instance. ...</div><div class='long'><p>Gives string representation of this component instance.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>displayName and instanceCount</p>\n</div></li></ul></div></div></div></div></div></div></div>","autodetected":{},"members":[{"owner":"core.component.base","tagname":"method","meta":{},"name":"configure","id":"method-configure"},{"owner":"core.event.emitter","tagname":"method","meta":{},"name":"emit","id":"method-emit"},{"owner":"core.component.base","tagname":"method","meta":{},"name":"off","id":"method-off"},{"owner":"core.component.base","tagname":"method","meta":{},"name":"on","id":"method-on"},{"owner":"core.component.base","tagname":"method","meta":{},"name":"signal","id":"method-signal"},{"owner":"core.component.base","tagname":"method","meta":{},"name":"start","id":"method-start"},{"owner":"core.component.base","tagname":"method","meta":{},"name":"stop","id":"method-stop"},{"owner":"core.component.base","tagname":"method","meta":{},"name":"task","id":"method-task"},{"owner":"core.mixin.base","tagname":"method","meta":{},"name":"toString","id":"method-toString"}],"tagname":"class","short_doc":"Imagine component as an object that has predefined life-cycle, with the following phases:\n\n\n initialize (signal)\n sta...","superclasses":["core.mixin.base","core.event.emitter"],"meta":{},"subclasses":["core.component.gadget","core.logger.console","data.cache.component","data.query.component"],"files":[{"href":"base2.html#core-component-base","filename":"base.js"}],"name":"core.component.base","requires":[],"mixins":[],"component":false,"id":"class-core.component.base"});