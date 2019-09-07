# Basic Buttons

``` javascript
import React from 'react';
import { Button } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Button color="primary">primary</Button>{' '}
        <Button color="secondary">secondary</Button>{' '}
        <Button color="success">success</Button>{' '}
        <Button color="info">info</Button>{' '}
        <Button color="warning">warning</Button>{' '}
        <Button color="danger">danger</Button>{' '}
        <Button color="link">link</Button>
      </div>
    );
  }
}

```

# Button Sizes
``` javascript
import React from 'react';
import { Button } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <Button color="primary" size="sm">Left</Button> // Small button
        <Button>Middle</Button> // Default button
        <Button color="danger" size="lg">Right</Button> // Large button
      </div>
    );
  }
}

```

# Button Groups
``` javascript
import React from 'react';
import { Button } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <div>
        <ButtonGroup> // Horizontal Group
          <Button color="primary">Left</Button>
          <Button>Middle</Button>
          <Button color="danger">Right</Button>
        </ButtonGroup>
        <ButtonGroup vertical> // Vertical Group
          <Button color="primary">Left</Button>
          <Button>Middle</Button>
          <Button color="danger">Right</Button>
        </ButtonGroup>
      </div>
    );
  }
}

```

# Outline Buttons
``` javascript
import React from 'react';
import { Button } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
      <Button outline color="primary">primary</Button>
      <Button outline color="secondary">secondary</Button>
      <Button outline color="success">success</Button>
      <Button outline color="info">info</Button>
      <Button outline color="warning">warning</Button>
      <Button outline color="danger">danger</Button>
    );
  }
}

```
