import { FETCH_PRODUCTS_LIST_SUCCESS } from "./actions";

export const reducerProductsList = (prevState: any = {}, action: any) => {
    let clonedState = prevState;

    // salvo il payload
    switch (action.type) {
        case FETCH_PRODUCTS_LIST_SUCCESS:
            clonedState = action.payload;
            break;

        default:
            break;
    }
    return clonedState;
};
