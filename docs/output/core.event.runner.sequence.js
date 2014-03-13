Ext.data.JsonP.core_event_runner_sequence({"tagname":"class","name":"core.event.runner.sequence","autodetected":{},"files":[{"filename":"sequence.js","href":"sequence3.html#core-event-runner-sequence"}],"extends":"core.event.emitter.runner","protected":true,"singleton":true,"members":[{"name":"constructor","tagname":"method","owner":"core.event.runner.sequence","id":"method-constructor","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-core.event.runner.sequence","classIcon":"icon-singleton","superclasses":["core.event.emitter.runner"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/core.event.emitter.runner' rel='core.event.emitter.runner' class='docClass'>core.event.emitter.runner</a><div class='subclass '><strong>core.event.runner.sequence</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/sequence3.html#core-event-runner-sequence' target='_blank'>sequence.js</a></div></pre><div class='doc-contents'>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='core.event.runner.sequence'>core.event.runner.sequence</span><br/><a href='source/sequence3.html#core-event-runner-sequence-method-constructor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.event.runner.sequence-method-constructor' class='name expandable'>core.event.runner.sequence</a>( <span class='pre'>event, handlers, args</span> ) : <a href=\"#!/api/Promise\" rel=\"Promise\" class=\"docClass\">Promise</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Run event handlers. ...</div><div class='long'><p>Run event handlers.</p>\n<p>Run event handlers <strong>asynchronously</strong> in \"sequence\", passing to each handler the same arguments from emitting.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : Object<div class='sub-desc'><p>Event object</p>\n\n<ul><li><span class='pre'>context</span> : String<div class='sub-desc'><p>Event context</p>\n\n</div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>Event callback</p>\n\n</div></li></ul></div></li><li><span class='pre'>handlers</span> : Object<div class='sub-desc'><p>List of handlers</p>\n\n</div></li><li><span class='pre'>args</span> : Array<div class='sub-desc'><p>Initial arguments</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Promise\" rel=\"Promise\" class=\"docClass\">Promise</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/core.event.emitter.runner-method-constructor\" rel=\"core.event.emitter.runner-method-constructor\" class=\"docClass\">core.event.emitter.runner.constructor</a></p></div></div></div></div></div></div></div>","meta":{"protected":true,"singleton":true}});