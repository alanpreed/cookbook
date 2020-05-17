import React from 'react'
import { Link } from 'react-router-dom';

import { withAuthorisation } from '../Session';
import * as ROUTES from '../../constants/routes';

class ViewRecipePage extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <div>
        <h2> recipe</h2>
      </div>
    )
  }
}

const ViewRecipeLink = ({id, text}) => {
  return  (
  <p>
    <Link to={`${ROUTES.LIST_RECIPES}/${id}`} > {text} </Link>
  </p>
)};

const condition = authUser => authUser != null;

export default withAuthorisation(condition)(ViewRecipePage);
export { ViewRecipeLink };