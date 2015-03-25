Ext.data.JsonP.compose_composition({"tagname":"class","name":"compose.composition","autodetected":{},"files":[{"filename":"composition.js","href":"composition.html#compose-composition"}],"interface":true,"private":true,"members":[{"name":"create","tagname":"method","owner":"compose.composition","id":"static-method-create","meta":{"static":true}},{"name":"extend","tagname":"method","owner":"compose.composition","id":"static-method-extend","meta":{"static":true}}],"alternateClassNames":[],"aliases":{},"id":"class-compose.composition","short_doc":"Composition interface. ...","classIcon":"icon-interface","superclasses":[],"subclasses":[],"mixedInto":[],"implementedBy":["ajax.service","core.component.emitter","core.component.registry","core.composition","core.emitter.composition","core.registry.emitter","core.task.registry","dom.component","hub.component","hub.emitter","hub.proxy.deferred","hub.proxy.promise","l10n.service","route.hash.component","widget.application","widget.component"],"mixins":[],"implements":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Implemented By</h4><div class='dependency'><a href='#!/api/ajax.service' rel='ajax.service' class='docClass'>ajax.service</a></div><div class='dependency'><a href='#!/api/core.component.emitter' rel='core.component.emitter' class='docClass'>core.component.emitter</a></div><div class='dependency'><a href='#!/api/core.component.registry' rel='core.component.registry' class='docClass'>core.component.registry</a></div><div class='dependency'><a href='#!/api/core.composition' rel='core.composition' class='docClass'>core.composition</a></div><div class='dependency'><a href='#!/api/core.emitter.composition' rel='core.emitter.composition' class='docClass'>core.emitter.composition</a></div><div class='dependency'><a href='#!/api/core.registry.emitter' rel='core.registry.emitter' class='docClass'>core.registry.emitter</a></div><div class='dependency'><a href='#!/api/core.task.registry' rel='core.task.registry' class='docClass'>core.task.registry</a></div><div class='dependency'><a href='#!/api/dom.component' rel='dom.component' class='docClass'>dom.component</a></div><div class='dependency'><a href='#!/api/hub.component' rel='hub.component' class='docClass'>hub.component</a></div><div class='dependency'><a href='#!/api/hub.emitter' rel='hub.emitter' class='docClass'>hub.emitter</a></div><div class='dependency'><a href='#!/api/hub.proxy.deferred' rel='hub.proxy.deferred' class='docClass'>hub.proxy.deferred</a></div><div class='dependency'><a href='#!/api/hub.proxy.promise' rel='hub.proxy.promise' class='docClass'>hub.proxy.promise</a></div><div class='dependency'><a href='#!/api/l10n.service' rel='l10n.service' class='docClass'>l10n.service</a></div><div class='dependency'><a href='#!/api/route.hash.component' rel='route.hash.component' class='docClass'>route.hash.component</a></div><div class='dependency'><a href='#!/api/widget.application' rel='widget.application' class='docClass'>widget.application</a></div><div class='dependency'><a href='#!/api/widget.component' rel='widget.component' class='docClass'>widget.component</a></div><h4>Files</h4><div class='dependency'><a href='source/composition.html#compose-composition' target='_blank'>composition.js</a></div></pre><div class='doc-contents'><div class='rounded-box private-box'><p><strong>NOTE:</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p></div><p>Composition interface.</p>\n\n<p>Represents any constructor or instance returned by any <a href=\"#!/api/compose.factory\" rel=\"compose.factory\" class=\"docClass\">compose.factory</a> method.</p>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static methods</h3><div id='static-method-create' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='compose.composition'>compose.composition</span><br/><a href='source/composition.html#compose-composition-static-method-create' target='_blank' class='view-source'>view source</a></div><a href='#!/api/compose.composition-static-method-create' class='name expandable'>create</a>( <span class='pre'>composition</span> ) : <a href=\"#!/api/compose.composition\" rel=\"compose.composition\" class=\"docClass\">compose.composition</a><span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Instantiate immediately after extending this constructor from multiple others constructors/objects. ...</div><div class='long'><p>Instantiate immediately after extending this constructor from multiple others constructors/objects.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>composition</span> : ...(<a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a>|<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>)<div class='sub-desc'><p>One or more constructors or objects to be mixed in.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/compose.composition\" rel=\"compose.composition\" class=\"docClass\">compose.composition</a></span><div class='sub-desc'><p>Object instance created out of the composition of constructors and objects.</p>\n</div></li></ul></div></div></div><div id='static-method-extend' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='compose.composition'>compose.composition</span><br/><a href='source/composition.html#compose-composition-static-method-extend' target='_blank' class='view-source'>view source</a></div><a href='#!/api/compose.composition-static-method-extend' class='name expandable'>extend</a>( <span class='pre'>composition</span> ) : <a href=\"#!/api/compose.composition\" rel=\"compose.composition\" class=\"docClass\">compose.composition</a><span class=\"signature\"><span class='static' >static</span></span></div><div class='description'><div class='short'>Extend this constructor from multiple others constructors/objects. ...</div><div class='long'><p>Extend this constructor from multiple others constructors/objects.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>composition</span> : ...(<a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a>|<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>)<div class='sub-desc'><p>One or more constructors or objects to be mixed in.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/compose.composition\" rel=\"compose.composition\" class=\"docClass\">compose.composition</a></span><div class='sub-desc'><p>The extended subclass</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{"interface":true,"private":true}});