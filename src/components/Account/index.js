import React from 'react'

import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { AuthUserContext, withAuthorisation } from '../Session';
import { auth } from 'firebase';

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser =>  (
      <div>
        <h1>Account: {authUser.email}</h1>
        <h2>UID: {authUser.uid}</h2>
        <PasswordForgetForm />
        <PasswordChangeForm />
      </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = authUser => authUser != null;

export default withAuthorisation(condition)(AccountPage);