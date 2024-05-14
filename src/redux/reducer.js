import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./actions-types";


const initialState = {
    myFavorites: [],
    allCharacters: []
}

 
const rootReducer = (state = initialState, action) =>{
        switch (action.type) {
            case ADD_FAV:
                // return {...state, myFavorites:[...state.allCharacters, action.payload], allCharacters:[...state.allCharacters, action.payload]}
                return { ...state, myFavorites: action.payload, allCharacters: action.payload };

            case REMOVE_FAV:
                // return {...state, 
                //     myFavorites: [...state.allCharacters.filter((fav) => fav.id !== Number(action.payload))],
                //     allCharacters: [...state.allCharacters.filter((fav) => fav.id !== Number(action.payload))]}
                return { ...state, myFavorites: action.payload };

            case FILTER:
                if(action.payload === "All") return {
                    ...state,
                    myFavorites: [...state.allCharacters]
                }
                return {
                    ...state, myFavorites: [ ...state.allCharacters.filter((character) => character.gender === action.payload)]
                }

            case ORDER:
                const orderCopy = [...state.myFavorites]
                if(action.payload === "A")
                    orderCopy.sort((a, b) => a.id - b.id)
                if (action.payload === "D") 
                    orderCopy.sort((a, b) => b.id - a.id)
                return {
                    ...state, myFavorites: orderCopy
                }
        
            default:
                return {...state}
        }
}


export default rootReducer;