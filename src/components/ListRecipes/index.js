import React from 'react'
import { Link } from 'react-router-dom';

import { withAuthorisation } from '../Session';
import * as ROUTES from '../../constants/routes';

const INITIAL_STATE = {
  recipes: [],
};

class ListRecipesPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {...INITIAL_STATE};
  }

  componentDidMount() {
    this.props.firebase.recipes(this.props.firebase.auth.currentUser.uid).get().then((querySnapshot) => {
      const recipeList = querySnapshot.docs.map(x => ({id: x.id, ...x.data()}))
      this.setState({recipes: recipeList});
    });
  }

  render() {
    return (
      <div>
        <h2>list of recipes</h2>
        {this.state.recipes && this.state.recipes.map(recipe => (
          <li key={recipe.id}>
            {recipe.recipeTitle}
          </li>
        ))}
      </div>
    )
  }
}

const ListRecipesLink = () => (
  <p>
  <Link to={ROUTES.LIST_RECIPES}>View your recipes</Link>
  </p>
);

const condition = authUser => authUser != null;

export default withAuthorisation(condition)(ListRecipesPage);

export {ListRecipesLink};