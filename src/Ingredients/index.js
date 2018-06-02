import React from 'react';
import axios from '../axios';
import NoIngredients from './NoIngredients';

class Ingredients extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      loadError: null,
      ingredients: [],
    };
  }

  componentDidMount() {
    axios
      .get('ingredients')
      .then(
        resp => {
          this.setState({
            ingredients: [...this.state.ingredients, ...resp.data.ingredients],
            loading: false,
            loadError: null,
          });
        },
        err => {
          this.setState({ loadError: err.message, loading: false });
        }
      )
      .catch(err =>
        this.setState({
          loadError: err,
          loading: false,
        })
      );
  }

  render() {
    const { loadError, loading, ingredients } = this.state;

    if (loading) {
      return <div>Loading...</div>;
    }

    if (loadError) {
      return <div>{this.state.loadError.toString()}</div>;
    }

    if (ingredients.length === 0) {
      return <NoIngredients />;
    }

    return (
      <div>
        Ingredients:
        <ul>{ingredients.map(ingredient => <div>{ingredient.name}</div>)}</ul>
      </div>
    );
  }
}

export default Ingredients;
