# Single column Layout

``` javascript

import React from 'react';
import { Row, Col } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
        <Row>
          <Col>Column</Col>
        </Row>
    );
  }
}

```

# Multiple column Layout

``` javascript

import React from 'react';
import { Row, Col } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
        <Row>
          <Col>Column</Col>
          <Col>Column</Col>
          <Col>Column</Col>
        </Row>
    );
  }
}

```

# Variable column width Layout

``` javascript

import React from 'react';
import { Row, Col } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
        <Row>
          <Col>Column</Col>
          <Col xs="auto">Variable column width </Col>
          <Col>Column</Col>
        </Row>
    );
  }
}

```

# Responsive column layout - Column width changes based on the screen sizes  

``` javascript

import React from 'react';
import { Row, Col } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
        <Row>
          <Col xs="4" sm="6" md="3" lg="3">
              Column 1
          </Col>
          <Col xs="4" sm="3" md="6" lg="3">
              Column 2
          </Col>
          <Col xs="4" sm="3" md="3" lg="6">
              Column 3
          </Col>
        </Row>
    );
  }
}
```

# Non fluid Container Layout

``` javascript

import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
        <Container>
          <Row>
            <Col>Column</Col>
          </Row>
        </Container>
    );
  }
}

```
# Fluid Container Layout

``` javascript

import React from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class Example extends React.Component {
  render() {
    return (
        <Container fluid>
          <Row>
            <Col>Column</Col>
          </Row>
        </Container>
    );
  }
}

```