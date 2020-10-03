import { Actions } from "./actions";

export const reducerProductsList = (prevState: any = {}, action: any) => {
  let clonedState = JSON.parse(JSON.stringify(prevState));

  switch (action.type) {
    case "@@INIT":
      clonedState.loading = true;
      break;

    case Actions.FETCH_PRODUCTS_LIST_SUCCESS:
      clonedState.products = action.payload;
      clonedState.loading = false;
      break;

    case Actions.ADD_ITEM:
      clonedState.products.push(action.payload);
      break;

    case Actions.REMOVE_ITEM:
      clonedState.products.map((product: any, index: number) => {
        if (product.id === action.payload.id) {
          clonedState.products.splice(index, 1);
        }
      });
      break;

    default:
      break;
  }

  return clonedState;
};
