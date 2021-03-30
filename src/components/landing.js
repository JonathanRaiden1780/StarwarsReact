import React from 'react';
import { Container, Button } from 'semantic-ui-react';

class Logout extends React.Component {
  handleLogout = () => {
    return this.props.screenProps.changeLoginState(false);
  };

  render() {
    return (
      <Container>
          <Button full onPress={this.handleLogout}>
            <h1>Log Out</h1>
          </Button>
      </Container>
    );
  }
}

export default Logout;