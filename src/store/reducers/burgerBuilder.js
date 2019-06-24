import * as actionType from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false
}

const INGREDIENTS_PRICE = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3
}

const addIngredient = (state, action) => {
    const updatedAddIngredients = updateObject(state.ingredients, { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 });
    const updatedAddState = {
        ...state,
        ingredients: updatedAddIngredients,
        totalPrice: state.totalPrice + INGREDIENTS_PRICE[action.ingredientName]
    }
    return updateObject(state, updatedAddState);
};

const removeIngredient = (state, action) => {
    const updatedRemoveIngredients = updateObject(state.ingredients, { [action.ingredientName]: state.ingredients[action.ingredientName] - 1 });
    const updatedRemoveState = {
        ...state,
        ingredients: updatedRemoveIngredients,
        totalPrice: state.totalPrice - INGREDIENTS_PRICE[action.ingredientName]
    }
    return updateObject(state, updatedRemoveState);
};

const setIngredients = (state, action) => {
    return updateObject(state, {
        ingredients: {
            salad: action.ingredients.salad,
            bacon: action.ingredients.bacon,
            cheese: action.ingredients.cheese,
            meat: action.ingredients.meat
        },
        totalPrice: 4,
        error: false
    });
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionType.ADD_INGREDIENT: return addIngredient(state, action);
        case actionType.REMOVE_INGREDIENT: return removeIngredient(state, action);
        case actionType.SET_INGREDIENTS: return setIngredients(state, action);
        case actionType.FETCH_INGREDIENTS_FAILED: return updateObject(state, { error: true });
        default: return state;
    }
} 

export default reducer;