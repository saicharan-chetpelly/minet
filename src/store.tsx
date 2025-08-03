import {configureStore} from "@reduxjs/toolkit"
import CryptoDataReducer from "./features/cryptoData"
import LowerDataReducer from "./features/sliderLowerPrice"
import UpperDataReducer from "./features/sliderUpperPrice"
import DropDownDataReducer from "./features/dropDownData"
export const store = configureStore({
reducer:{
  cryptoData:CryptoDataReducer,
  lowerPrice:LowerDataReducer,
  upperPrice:UpperDataReducer,
  dropDownData:DropDownDataReducer
}
})