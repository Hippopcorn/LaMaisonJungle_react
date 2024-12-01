import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'
import '../styles/PlantItem.css'
import PlantItem from './PlantItem'
import Categories from './Categories'
import Cart from './Cart';
import { useState, useCallback } from 'react'


function ShoppingList({ cart, updateCart }) {
	const [categorieFiltered, setCategorieFiltered] = useState("")

	const addToCart = useCallback(
		(plantName, price) => {
			const currentPlantAdded = cart.find((plant) => plant.name === plantName);
			if (currentPlantAdded) {
				const cartFilteredCurrentPlant = cart.filter(
					(plant) => plant.name !== plantName
				);
				updateCart([
					...cartFilteredCurrentPlant,
					{ name: plantName, price, amount: currentPlantAdded.amount + 1 },
				]);
			} else {
				updateCart([...cart, { name: plantName, price, amount: 1 }]);
			}
		},
		[cart, updateCart]
	);


	if (categorieFiltered === 'reinitialiser') {
		setCategorieFiltered("")
	}

	return (
		<div>
			<Cart cart={cart} updateCart={updateCart} addToCart={addToCart} />
			<Categories setCategorieFiltered={setCategorieFiltered} />

			<ul className='lmj-plant-list'>
				{plantList
					.filter((plant) => categorieFiltered === "" || plant.category === categorieFiltered)
					.map(({ id, cover, name, water, light, price }) => (
						<div key={id}>
							<PlantItem
								cover={cover}
								name={name}
								water={water}
								light={light}
							/>
							<button onClick={() => addToCart(name, price)}>Ajouter au panier</button>
						</div>
					))
				}
			</ul>
		</div>
	)
}

export default ShoppingList

