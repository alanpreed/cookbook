import React from 'react'
import { withAuthorisation } from '../Session';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <h1>HomePage</h1>
        <p> This page is accessible by every signed in user.</p>
      </div>
    );
  }
}

const condition = authUser => authUser != null;

export default withAuthorisation(condition)(HomePage);