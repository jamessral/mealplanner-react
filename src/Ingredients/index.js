import React from 'react';
import axios from '../axios';

class Ingredients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      ingredients: [],
    };
  }

  componentDidMount() {
    axios
      .get('ingredients')
      .then(resp =>
        this.setState({
          ingredients: [
            ...this.state.ingredients,
            ...resp.data,
          ],
          loading: false,
        }))
      .catch(err =>
        this.setState({
          loadError: err,
          loading: false,
        }));
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }

    if (this.state.loadError) {
      return <div>{this.state.loadError.toString()}</div>;
    }

    return (
      <div>
        Ingredients:

        {this.state.ingredients.length > 0 &&
        <ul>
          {this.state.ingredients.map(ingredient => <div>{ingredient.name}</div>) }
        </ul>
        }
      </div>
    );
  }
}

export default Ingredients;

