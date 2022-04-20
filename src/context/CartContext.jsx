import { createContext, useState} from 'react';

const CartContext = createContext();

const CartProvider = ({children}) => {
	const [cartProducts, setCartProducts] = useState([]);

	const addProductToCart = (product, quantity) => {
		if(quantity > 0){
			let exist = cartProducts.find(cartProduct => cartProduct.id === product.id)
		    if(!exist){
				product.quantity = quantity;
				setCartProducts(cartProducts => [...cartProducts, product]);
			}
		}
	}

	const removeProductToCart = (id) => {
		console.log("remover producto id: ", id);
		setCartProducts(cartProducts.filter((cartProduct) => cartProduct.id !== id));
	}

	const calculatePriceTotal = () => {
		let total = 0;
		cartProducts.map(cartProduct => {
			total += cartProduct.price * cartProduct.quantity;
		})
		return total;
	}

	const calculateTotalItems = () => {
		let totalItems = 0;
		cartProducts.map(cartProduct => {
			totalItems += cartProduct.quantity;
		})
		return totalItems;
	}

	const data = {
		cartProducts,
		addProductToCart,
		removeProductToCart,
		calculatePriceTotal,
		calculateTotalItems
	}
	
	return (
		<CartContext.Provider value={data} >
			{children}
		</CartContext.Provider>
	);
}	

export { CartProvider }
export default CartContext