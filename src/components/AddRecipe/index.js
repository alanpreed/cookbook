import React from 'react'
import { Link } from 'react-router-dom';

import { withAuthorisation } from '../Session';
import * as ROUTES from '../../constants/routes';

const INITIAL_STATE = {
  recipeTitle: '',
  error: null,
};

class AddRecipeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { recipeTitle } = this.state;
    console.log(this.props.firebase.auth.currentUser.uid)
    this.props.firebase.recipes(this.props.firebase.auth.currentUser.uid)
                        .doc(recipeTitle)
                        .set({recipeTitle,},{merge: true,},)
                        .then(() => {
                          this.setState({ ...INITIAL_STATE });
                        })
                        .catch(error => {this.setState({ error });
                        });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { 
      recipeTitle, 
      error,
    } = this.state;
    const isInvalid = recipeTitle === '';

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            name="recipeTitle"
            value={recipeTitle}
            onChange={this.onChange}
            type="text"
            placeholder="Title"
          />
          <button disabled={isInvalid} type="submit">
            Submit
          </button>

          {error && <p>{error.message}</p>}
        </form>
      </div>
    );
  }
}

const AddRecipePage = (props) => (
  <div>
    <h1>Add a new recipe</h1>
    <AddRecipeForm {...props}/>
  </div>
)

const AddRecipeLink = () => (
  <p>
    <Link to={ROUTES.ADD_RECIPE}>Add new recipe</Link>
  </p>
);

const condition = authUser => authUser != null;

export default withAuthorisation(condition)(AddRecipePage);

export { AddRecipeLink, AddRecipeForm }