import { useState } from "react";

const initialState = {
    cart: [],
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = (payload) => {
        setState({
            // Lo que tengas en el estado actualmente mantenlo
            ...state,
            cart: [...state.cart, payload]
        });
    };

    const removeFromCart = (payload, indexValue) => {
        setState({
            ...state, // Lo que tengas en el estado actualmente mantenlo
            cart: state.cart.filter(
                (item, index) => item.id != payload && index != indexValue
            ), // Kiero hacer un filtro para encontrar items y elimiarlo
        });
    }

    return {
        state,
        addToCart,
        removeFromCart
    }
}

export default useInitialState;