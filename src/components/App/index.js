import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from '../Navigation';
import LandingPage from '../Landing';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';
import PasswordForgetPage from '../PasswordForget';
import HomePage from '../Home';
import AccountPage from '../Account';
import AddRecipePage from '../AddRecipe';
import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';
import ListRecipesPage from '../ListRecipes';
import ViewRecipePage from '../ViewRecipe';

const App = () => (
  <Router>
    <div>
      <Navigation />
      <hr />
      <Switch>
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route path={ROUTES.ADD_RECIPE} component={AddRecipePage} />
        <Route path={ROUTES.VIEW_RECIPE} component={ViewRecipePage} />
        <Route path={ROUTES.LIST_RECIPES} component={ListRecipesPage} />
      </Switch>
    </div>
  </Router>
)

export default withAuthentication(App);

