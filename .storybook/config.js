import {configure,addParameters} from "@storybook/react"

const req = require.context('../src/stories', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addParameters({ options: { showAddonPanel: false } });

configure(loadStories,module);