import { addToCart } from "./ActionCreator";
import { ACTION_TYPE } from "./ActionType";

  
const initialState = {
    product:[],
    cardData:[],
    };

   export function Usereducer(state=initialState, action) {
        switch (action.type) {
          case ACTION_TYPE.ADD_TO_CART: return {...state,cardData:[...state.cardData,action.payload]};
       
          default: return state;
        }
    }

    
