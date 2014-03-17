Ext.data.JsonP.core_event_runner_sequence({"tagname":"class","name":"core.event.runner.sequence","autodetected":{},"files":[{"filename":"sequence.js","href":"sequence3.html#core-event-runner-sequence"}],"extends":"core.event.emitter.runner","protected":true,"static":true,"members":[{"name":"constructor","tagname":"method","owner":"core.event.runner.sequence","id":"static-method-constructor","meta":{"static":true}},{"name":"apply","tagname":"method","owner":"Function","id":"static-method-apply","meta":{"static":true}},{"name":"call","tagname":"method","owner":"Function","id":"static-method-call","meta":{"static":true}}],"alternateClassNames":[],"aliases":{},"id":"static-class-core.event.runner.sequence","classIcon":"icon-class","superclasses":["Function","core.event.emitter.runner"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Function' rel='Function' class='docClass'>Function</a><div class='subclass '><a href='#!/api/core.event.emitter.runner' rel='core.event.emitter.runner' class='docClass'>core.event.emitter.runner</a><div class='subclass '><strong>core.event.runner.sequence</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/sequence3.html#core-event-runner-sequence' target='_blank'>sequence.js</a></div></pre><div class='doc-contents'>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static methods</h3><div id='static-method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='core.event.runner.sequence'>core.event.runner.sequence</span><br/><a href='source/sequence3.html#core-event-runner-sequence-static-method-constructor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.event.runner.sequence-static-method-constructor' class='name expandable'>core.event.runner.sequence</a>( <span class='pre'>event, handlers, args</span> ) : <a href=\"#!/api/Promise\" rel=\"Promise\" class=\"docClass\">Promise</a><span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Run event handlers. ...</div><div class='long'><p>Run event handlers.</p>\n<p>Run event handlers <strong>asynchronously</strong> in \"sequence\", passing to each handler the same arguments from emitting.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : Object<div class='sub-desc'><p>Event object</p>\n\n<ul><li><span class='pre'>context</span> : String<div class='sub-desc'><p>Event context</p>\n\n</div></li><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>Event callback</p>\n\n</div></li></ul></div></li><li><span class='pre'>handlers</span> : Object<div class='sub-desc'><p>List of handlers</p>\n\n</div></li><li><span class='pre'>args</span> : Array<div class='sub-desc'><p>Initial arguments</p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Promise\" rel=\"Promise\" class=\"docClass\">Promise</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='static-method-apply' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Function' rel='Function' class='defined-in docClass'>Function</a><br/><a href='source/Function.html#Function-static-method-apply' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Function-static-method-apply' class='name expandable'>apply</a>( <span class='pre'>thisArg, [argsArray]</span> )<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Applies the method of another object in the context of a different object (the calling object); arguments can be pass...</div><div class='long'><p>Applies the method of another object in the context of a different object (the calling object); arguments can be passed as an Array object.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>thisArg</span> : Object<div class='sub-desc'><p>The value of this provided for the call to fun. Note that this may not be the actual value seen by the method: if the method is a function in non-strict mode code, <code>null</code> and <code>undefined</code> will be replaced with the global object, and primitive values will be boxed.</p>\n</div></li><li><span class='pre'>argsArray</span> : Array (optional)<div class='sub-desc'><p>An array-like object, specifying the arguments with which fun should be called, or <code>null</code> or <code>undefined</code> if no arguments should be provided to the function. Starting with ECMAScript 5 these arguments can be a generic array-like object instead of an array.</p>\n</div></li></ul></div></div></div><div id='static-method-call' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Function' rel='Function' class='defined-in docClass'>Function</a><br/><a href='source/Function.html#Function-static-method-call' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Function-static-method-call' class='name expandable'>call</a>( <span class='pre'>thisArg, [arg]</span> )<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Calls (executes) a method of another object in the context of a different object (the calling object); arguments can ...</div><div class='long'><p>Calls (executes) a method of another object in the context of a different object (the calling object); arguments can be passed as they are.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>thisArg</span> : Object<div class='sub-desc'><p>The value of this provided for the call to fun. Note that this may not be the actual value seen by the method: if the method is a function in non-strict mode code, <code>null</code> and <code>undefined</code> will be replaced with the global object, and primitive values will be boxed.</p>\n</div></li><li><span class='pre'>arg</span> : ...* (optional)<div class='sub-desc'><p>Arguments for the object.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{"protected":true,"static":true}});