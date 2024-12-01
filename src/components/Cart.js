import { useState, useEffect } from 'react'
import '../styles/Cart.css'

function Cart({ cart, updateCart, addToCart }) {
	const [isOpen, setIsOpen] = useState(true)
	const [isInitialized, setIsInitialized] = useState(false);

	useEffect(() => {
		if (!isInitialized) {
			const panierJson = JSON.parse(localStorage.getItem('cartStock')) || [];
			if (panierJson.length >= 1) {
				panierJson.forEach((item) => addToCart(item.name, item.price));
			}
			setIsInitialized(true);
		}
	}, [addToCart, isInitialized]);

	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price, 0
	)

	useEffect(() => {
		document.title = `LMJ: ${total}€ d'achats`;
	}, [total])


	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			<h2>Panier</h2>
			{cart.map(({ name, price, amount }, index) => (
				<div key={`${name}-${index}`}>
					{name} {price}€ x {amount}
				</div>
			))}

			<h3>Total : {total}€</h3>
			<button onClick={() => updateCart(0)}>Vider le panier</button>
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

export default Cart