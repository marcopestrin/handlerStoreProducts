import {
    FETCH_PRODUCTS_LIST_SUCCESS,
    ADD_ITEM,
    REMOVE_ITEM
 } from "./actions";

export const reducerProductsList = (prevState: any = {}, action: any) => {
    let clonedState = JSON.parse(JSON.stringify(prevState))

    // salvo il payload
    switch (action.type) {
        case FETCH_PRODUCTS_LIST_SUCCESS:
            clonedState = action.payload;
            break;

        case ADD_ITEM:
            clonedState.push({
                id: "EXAMPLEEE",
                data: action.payload
            })
            break;
        
        case REMOVE_ITEM:
            clonedState.map((product: any, index: number) => {
                if (product.id === action.payload.id) {
                    clonedState.splice(index,1)
                }
            })
            break

        default:
            break;
    }
    return clonedState;
};
