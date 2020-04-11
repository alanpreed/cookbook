import React from 'react'

import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { withAuthorisation } from '../Session';

const AccountPage = () => (
    <div>
      <h1>Account Page</h1>
      <PasswordForgetForm />
      <PasswordChangeForm />
    </div>
);

const condition = authUser => authUser != null;

export default withAuthorisation(condition)(AccountPage);