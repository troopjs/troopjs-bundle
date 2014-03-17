Ext.data.JsonP.core_pubsub_runner_pipeline({"tagname":"class","name":"core.pubsub.runner.pipeline","autodetected":{},"files":[{"filename":"pipeline.js","href":"pipeline2.html#core-pubsub-runner-pipeline"}],"extends":"core.event.emitter.runner","mixins":["core.pubsub.runner.config"],"protected":true,"static":true,"members":[{"name":"pattern","tagname":"cfg","owner":"core.pubsub.runner.config","id":"cfg-pattern","meta":{}},{"name":"constructor","tagname":"method","owner":"core.pubsub.runner.pipeline","id":"static-method-constructor","meta":{"static":true}},{"name":"apply","tagname":"method","owner":"Function","id":"static-method-apply","meta":{"static":true}},{"name":"call","tagname":"method","owner":"Function","id":"static-method-call","meta":{"static":true}}],"alternateClassNames":[],"aliases":{},"id":"static-class-core.pubsub.runner.pipeline","classIcon":"icon-class","superclasses":["Function","core.event.emitter.runner"],"subclasses":[],"mixedInto":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Function' rel='Function' class='docClass'>Function</a><div class='subclass '><a href='#!/api/core.event.emitter.runner' rel='core.event.emitter.runner' class='docClass'>core.event.emitter.runner</a><div class='subclass '><strong>core.pubsub.runner.pipeline</strong></div></div></div><h4>Mixins</h4><div class='dependency'><a href='#!/api/core.pubsub.runner.config' rel='core.pubsub.runner.config' class='docClass'>core.pubsub.runner.config</a></div><h4>Files</h4><div class='dependency'><a href='source/pipeline2.html#core-pubsub-runner-pipeline' target='_blank'>pipeline.js</a></div></pre><div class='doc-contents'>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-pattern' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.pubsub.runner.config' rel='core.pubsub.runner.config' class='defined-in docClass'>core.pubsub.runner.config</a><br/><a href='source/config4.html#core-pubsub-runner-config-cfg-pattern' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.pubsub.runner.config-cfg-pattern' class='name expandable'>pattern</a> : RegExp<span class=\"signature\"></span></div><div class='description'><div class='short'>RegExp used to determine if a phase should be protected ...</div><div class='long'><p>RegExp used to determine if a <a href=\"#!/api/core.component.base-property-phase\" rel=\"core.component.base-property-phase\" class=\"docClass\">phase</a> should be protected</p>\n<p>Defaults to: <code>/^(?:initi|fin)alized?$/</code></p></div></div></div></div></div><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static methods</h3><div id='static-method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='core.pubsub.runner.pipeline'>core.pubsub.runner.pipeline</span><br/><a href='source/pipeline2.html#core-pubsub-runner-pipeline-static-method-constructor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.pubsub.runner.pipeline-static-method-constructor' class='name expandable'>core.pubsub.runner.pipeline</a>( <span class='pre'>event, handlers, args</span> ) : <a href=\"#!/api/Promise\" rel=\"Promise\" class=\"docClass\">Promise</a><span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Run event handlers. ...</div><div class='long'><p>Run event handlers.</p>\n<p>Runner that filters and executes candidates in pipeline without overlap</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : Object<div class='sub-desc'><p>Event object</p>\n\n\n\n<ul><li><span class='pre'>context</span> : String<div class='sub-desc'><p>Event context</p>\n\n\n\n</div></li><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>Event callback</p>\n\n\n\n</div></li></ul></div></li><li><span class='pre'>handlers</span> : Object<div class='sub-desc'><p>List of handlers</p>\n\n\n\n</div></li><li><span class='pre'>args</span> : Array<div class='sub-desc'><p>Initial arguments</p>\n\n\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Promise\" rel=\"Promise\" class=\"docClass\">Promise</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='static-method-apply' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Function' rel='Function' class='defined-in docClass'>Function</a><br/><a href='source/Function.html#Function-static-method-apply' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Function-static-method-apply' class='name expandable'>apply</a>( <span class='pre'>thisArg, [argsArray]</span> )<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Applies the method of another object in the context of a different object (the calling object); arguments can be pass...</div><div class='long'><p>Applies the method of another object in the context of a different object (the calling object); arguments can be passed as an Array object.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>thisArg</span> : Object<div class='sub-desc'><p>The value of this provided for the call to fun. Note that this may not be the actual value seen by the method: if the method is a function in non-strict mode code, <code>null</code> and <code>undefined</code> will be replaced with the global object, and primitive values will be boxed.</p>\n</div></li><li><span class='pre'>argsArray</span> : Array (optional)<div class='sub-desc'><p>An array-like object, specifying the arguments with which fun should be called, or <code>null</code> or <code>undefined</code> if no arguments should be provided to the function. Starting with ECMAScript 5 these arguments can be a generic array-like object instead of an array.</p>\n</div></li></ul></div></div></div><div id='static-method-call' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Function' rel='Function' class='defined-in docClass'>Function</a><br/><a href='source/Function.html#Function-static-method-call' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Function-static-method-call' class='name expandable'>call</a>( <span class='pre'>thisArg, [arg]</span> )<span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Calls (executes) a method of another object in the context of a different object (the calling object); arguments can ...</div><div class='long'><p>Calls (executes) a method of another object in the context of a different object (the calling object); arguments can be passed as they are.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>thisArg</span> : Object<div class='sub-desc'><p>The value of this provided for the call to fun. Note that this may not be the actual value seen by the method: if the method is a function in non-strict mode code, <code>null</code> and <code>undefined</code> will be replaced with the global object, and primitive values will be boxed.</p>\n</div></li><li><span class='pre'>arg</span> : ...* (optional)<div class='sub-desc'><p>Arguments for the object.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{"protected":true,"static":true}});