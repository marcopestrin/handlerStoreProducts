import {
    FETCH_PRODUCTS_LIST_SUCCESS,
    ADD_ITEM_REQUEST,
    ADD_ITEM_SUCCESS
 } from "./actions";

// import { useDispatch } from "react-redux"
// const dispatch = useDispatch();

export const reducerProductsList = (prevState: any = {}, action: any) => {
    let clonedState = prevState

    // salvo il payload
    switch (action.type) {
        case FETCH_PRODUCTS_LIST_SUCCESS:
            clonedState = action.payload;
            break;

        case ADD_ITEM_SUCCESS:
            break

        case ADD_ITEM_REQUEST:
            clonedState.push({
                id: "EXAMPLEEE",
                data: action.payload
            })/*
            dispatch({ 
                type: ADD_ITEM_SUCCESS
            });
            */
            break;

        default:
            break;
    }
    return clonedState;
};
