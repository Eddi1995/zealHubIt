
import { ACTION_TYPE } from "./ActionType";

export let addToCart=(product)=>{
     return {type:ACTION_TYPE.ADD_TO_CART,payload:product}
}
 
  