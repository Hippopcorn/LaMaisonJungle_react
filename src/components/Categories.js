import { plantList } from '../datas/plantList'

function Categories({ setCategorieFiltered }) {
    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )

    return (
        <div>
            <label>Choisissez une categorie : </label><br/>
            <select onChange={(e) => setCategorieFiltered(e.target.value)}>
            <option value="">--Choisissez une option--</option>
                {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                ))}
                <option value="reinitialiser">Voir toutes les plantes</option>
            </select>
        </div>
    )
}

export default Categories