import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'
import '../styles/PlantItem.css'
import PlantItem from './PlantItem'
import Categories from './Categories'
import { useState } from 'react'


function ShoppingList({ cart, updateCart }) {
	const [categorieFiltered, setCategorieFiltered] = useState("")

	function addToCart(name, price) {
		const currentPlantAdded = cart.find((plant) => plant.name === name)
		if (currentPlantAdded) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantAdded.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

	return (
		<div>
			<Categories setCategorieFiltered={setCategorieFiltered}/>
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

