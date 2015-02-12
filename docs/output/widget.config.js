Ext.data.JsonP.widget_config({"tagname":"class","name":"widget.config","autodetected":{},"files":[{"filename":"config.js","href":"config5.html#widget-config"}],"extends":"dom.config","private":true,"aliases":{"feature":["config"]},"members":[{"name":"emitter","tagname":"cfg","owner":"core.config","id":"cfg-emitter","meta":{"protected":true}},{"name":"phase","tagname":"cfg","owner":"core.config","id":"cfg-phase","meta":{"protected":true}},{"name":"pragmas","tagname":"cfg","owner":"compose.config","id":"cfg-pragmas","meta":{"protected":true}},{"name":"signal","tagname":"cfg","owner":"dom.config","id":"cfg-signal","meta":{"protected":true}},{"name":"specials","tagname":"cfg","owner":"compose.config","id":"cfg-specials","meta":{"protected":true}},{"name":"widget","tagname":"cfg","owner":"widget.config","id":"cfg-widget","meta":{"protected":true}}],"alternateClassNames":[],"id":"class-widget.config","classIcon":"icon-class","superclasses":["compose.config","core.config","dom.config"],"subclasses":[],"mixedInto":["widget.component","widget.unweave","widget.weave","widget.woven"],"implementedBy":[],"mixins":[],"implements":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/compose.config' rel='compose.config' class='docClass'>compose.config</a><div class='subclass '><a href='#!/api/core.config' rel='core.config' class='docClass'>core.config</a><div class='subclass '><a href='#!/api/dom.config' rel='dom.config' class='docClass'>dom.config</a><div class='subclass '><strong>widget.config</strong></div></div></div></div><h4>Mixed into</h4><div class='dependency'><a href='#!/api/widget.component' rel='widget.component' class='docClass'>widget.component</a></div><div class='dependency'><a href='#!/api/widget.unweave' rel='widget.unweave' class='docClass'>widget.unweave</a></div><div class='dependency'><a href='#!/api/widget.weave' rel='widget.weave' class='docClass'>widget.weave</a></div><div class='dependency'><a href='#!/api/widget.woven' rel='widget.woven' class='docClass'>widget.woven</a></div><h4>Files</h4><div class='dependency'><a href='source/config5.html#widget-config' target='_blank'>config.js</a></div></pre><div class='doc-contents'><div class='rounded-box private-box'><p><strong>NOTE:</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p></div><p>Provides configuration for the widget package</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-emitter' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.config' rel='core.config' class='defined-in docClass'>core.config</a><br/><a href='source/config3.html#core-config-cfg-emitter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.config-cfg-emitter' class='name expandable'>emitter</a> : <a href=\"#!/api/core.config.emitter\" rel=\"core.config.emitter\" class=\"docClass\">core.config.emitter</a><span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'><p>Emitter properties</p>\n</div><div class='long'><p>Emitter properties</p>\n</div></div></div><div id='cfg-phase' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/core.config' rel='core.config' class='defined-in docClass'>core.config</a><br/><a href='source/config3.html#core-config-cfg-phase' target='_blank' class='view-source'>view source</a></div><a href='#!/api/core.config-cfg-phase' class='name expandable'>phase</a> : <a href=\"#!/api/core.config.phase\" rel=\"core.config.phase\" class=\"docClass\">core.config.phase</a><span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'><p>Component phases</p>\n</div><div class='long'><p>Component phases</p>\n</div></div></div><div id='cfg-pragmas' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/compose.config' rel='compose.config' class='defined-in docClass'>compose.config</a><br/><a href='source/config2.html#compose-config-cfg-pragmas' target='_blank' class='view-source'>view source</a></div><a href='#!/api/compose.config-cfg-pragmas' class='name expandable'>pragmas</a> : <a href=\"#!/api/compose.config.pragma\" rel=\"compose.config.pragma\" class=\"docClass\">compose.config.pragma</a>[]<span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Pragmas used to rewrite methods before processing ...</div><div class='long'><p>Pragmas used to rewrite methods before processing</p>\n<p>Defaults to: <code>[]</code></p></div></div></div><div id='cfg-signal' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/dom.config' rel='dom.config' class='defined-in docClass'>dom.config</a><br/><a href='source/config4.html#dom-config-cfg-signal' target='_blank' class='view-source'>view source</a></div><a href='#!/api/dom.config-cfg-signal' class='name expandable'>signal</a> : <a href=\"#!/api/dom.config.signal\" rel=\"dom.config.signal\" class=\"docClass\">dom.config.signal</a><span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'><p>Component signals</p>\n</div><div class='long'><p>Component signals</p>\n<p>Overrides: <a href=\"#!/api/core.config-cfg-signal\" rel=\"core.config-cfg-signal\" class=\"docClass\">core.config.signal</a></p></div></div></div><div id='cfg-specials' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/compose.config' rel='compose.config' class='defined-in docClass'>compose.config</a><br/><a href='source/config2.html#compose-config-cfg-specials' target='_blank' class='view-source'>view source</a></div><a href='#!/api/compose.config-cfg-specials' class='name expandable'>specials</a> : <a href=\"#!/api/RegExp\" rel=\"RegExp\" class=\"docClass\">RegExp</a><span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'>Regular Expression used parse 'specials'. ...</div><div class='long'><p>Regular Expression used parse 'specials'.\n<code>\n&lt;special&gt;/&lt;type&gt;[(&lt;arguments&gt;)]\n</code></p>\n<p>Defaults to: <code>/^([^\\/]+)\\/(.+?)(?:\\((.*)\\))?$/</code></p></div></div></div><div id='cfg-widget' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='widget.config'>widget.config</span><br/><a href='source/config5.html#widget-config-cfg-widget' target='_blank' class='view-source'>view source</a></div><a href='#!/api/widget.config-cfg-widget' class='name expandable'>widget</a> : <a href=\"#!/api/widget.config.widget\" rel=\"widget.config.widget\" class=\"docClass\">widget.config.widget</a><span class=\"signature\"><span class='protected' >protected</span></span></div><div class='description'><div class='short'><p>Widget related configuration</p>\n</div><div class='long'><p>Widget related configuration</p>\n</div></div></div></div></div></div></div>","meta":{"private":true}});