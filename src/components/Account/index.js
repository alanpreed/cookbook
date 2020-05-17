import React from 'react'

import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import { AuthUserContext, withAuthorisation } from '../Session';
import { AddRecipeLink } from '../AddRecipe';
import { ListRecipesLink } from '../ListRecipes';

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser =>  (
      <div>
        <h1>Account: {authUser.email}</h1>
        <h2>UID: {authUser.uid}</h2>
        <PasswordForgetForm />
        <PasswordChangeForm />
        <AddRecipeLink />
        <ListRecipesLink />
      </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = authUser => authUser != null;

export default withAuthorisation(condition)(AccountPage);