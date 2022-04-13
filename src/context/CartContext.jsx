import { createContext, useState} from 'react';

const CartContext = createContext();

const CartProvider = ({children}) => {
	const [cartProducts, setCartProducts] = useState([]);

	const addProductToCart = (product, quantity) => {
		product.quantity = quantity;
		if(quantity > 0)
			for (let i = 0; i < quantity; i++){
		      setCartProducts(cartProducts => [...cartProducts, product]);
		    }
	}

	const data = {
		cartProducts,
		addProductToCart
	}
	console.log(data);
	return (
		<CartContext.Provider value={data} >
			{children}
		</CartContext.Provider>
	);
}	

export { CartProvider }
export default CartContext