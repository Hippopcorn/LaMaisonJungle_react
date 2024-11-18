import CareScale from "./CareScale"
import '../styles/PlantItem.css'

function PlantItem({ id, name, cover, water, light }) {

    return (
        <li key={id} className='lmj-plant-item' onClick={() => handleClick(name)}>

            <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
            {name}
            <div>
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
            </div>
        </li>
    )
}

function handleClick(plantName) {
    // console.log(`Vous avez cliqué sur l'item ${plantName}`)
}

export default PlantItem