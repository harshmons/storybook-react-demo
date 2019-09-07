import {configure,addParameters} from "@storybook/react"

function loadStories(){
    const req = require.context("../src/stories",true,/\.stories\.js$/);
    req.keys().forEach(filename=>req(filename));
}
addParameters({ options: { showAddonPanel: false } });
configure(loadStories,module);