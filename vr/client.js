import RCTLine from "../native-views/RCTLine";

import { VRInstance } from 'react-vr-web';

function init(bundle, parent, options) {
  const vr = new VRInstance(bundle, 'world_explorer', parent, {
    customViews: [{ name: "VRLine", view: RCTLine}],
    ...options,
  });
  vr.render = function() { };
  vr.start();
  return vr;  
}

window.ReactVR = {init};
