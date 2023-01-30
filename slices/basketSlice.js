import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      //items where initialized as an array hence we expect them to be stored as an array
      //store everything sent to the basket(...state.items)
      //action.payload is the information sent to the basket through dispatch
      state.items=[...state.items,action.payload]
    },
    removeFromBasket: (state, action) => { 
      //knowing where to remove the item in the list from
      const index = state.items.findIndex((basketItem)=>(basketItem.id === action.payload.id))
      
    //create a copy of the basket and work in it by spreading all the info in an array
    let newBasket =[...state.items]
    //what to do with the presence or absence of the index
    //found index >=0 . 
    //no index <=0
    if(index >=0){
      //index found, then splice it at the index position by removing 
      //only one item from the newBasket
      newBasket.splice(index,1)

    }
    else{
      //no index, warn the user
      console.warn("Can not remove unavailable items")
    }

    //merge the edited basket(newBasket) with the original (state.items)
      state.items = newBasket
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
//selects all info of an item 
export const selectItems = (state) => state.basket.items;
//adds info of items clicked
//the reduce method is used to find the total
export const selectTotal=(state)=>state.basket.items.reduce((total,item)=>total + item.price,0)

export default basketSlice.reducer;
