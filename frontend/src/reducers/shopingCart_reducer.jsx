import TYPES from "./actionTypes";

export const productsInitialState = {
    products: [
        {
            "id":1,
            "name": QUESOCHAMPIGNON,
            "price": $300
        },
    {
        id:2,
        "name":QUESOCHAMPIGNON,
        "price": $300
    },
    {

    }
    ],
    cart: [],
    totalPriceShopingCart: 0
}

export const reducerCart = (state, action)  => {
    switch(action.type){
        case TYPES.ADD_TO_CART:{

        }

        case TYPES.DElETE.PRODUCTS_FROM_CART:{

        }

        case TYPES.CALCULATE_TOTAL_PRICE_OF_THE_CART:{

        }
        default:
            return state
    }
}