import {
    FETCH_PRODUCTS_LIST_SUCCESS,
    ADD_ITEM,
    REMOVE_ITEM
 } from "./actions";

export const reducerProductsList = (prevState: any = {}, action: any) => {
    let clonedState = JSON.parse(JSON.stringify(prevState))

    switch (action.type) {
        case '@@INIT':
            clonedState.loading = true;
            break

        case FETCH_PRODUCTS_LIST_SUCCESS:
            clonedState.products = action.payload;
            clonedState.loading = false;
            break;

        case ADD_ITEM:
            clonedState.products.push(action.payload)
            break;
        
        case REMOVE_ITEM:
            clonedState.products.map((product: any, index: number) => {
                if (product.id === action.payload.id) {
                    clonedState.products.splice(index,1)
                }
            })
            break

        default:
            break;
    }

    return clonedState;
};
