import icons from 'url:../img/icons.svg';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import recipeView from './views/recipeView';
import * as model from './model';

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();

    // 1. Loading recipe
    await model.loadRecipe(id);

    // 2. Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    // alert(`Controller: ${err.message}, ${err}`);
    console.log(err);
  }
};

const init = function () {
  recipeView.addHandlerrender(controlRecipes);
};

init();
