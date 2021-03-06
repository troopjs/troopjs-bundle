/**
 * @license MIT http://troopjs.mit-license.org/
 */
define([
  "./version",
  "troopjs-compose/decorator/after",
  "troopjs-compose/decorator/around",
  "troopjs-compose/decorator/before",
  "troopjs-compose/decorator/extend",
  "troopjs-compose/decorator/from",
  "troopjs-core/component/signal/start",
  "troopjs-core/component/signal/finalize",
  "troopjs-hub/component",
  "troopjs-dom/component"
], function (version) {
  "use strict";
  return version;
});
