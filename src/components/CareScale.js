

function CareScale({scaleValue, careType}) {

    const range = [1, 2, 3]

    const scaleType = careType === 'light' ? '☀️' : '💧'

    return (
        <div onClick={() => handleClick(scaleType, scaleValue)}>
            {range.map((rangeElem) => scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null
            )}
        </div>
    )
}


function handleClick(type, nbrItem) {
    const donnée = type === '☀️' ? 'de lumière' : `d'arrosage`
    const quantité = nbrItem === 1 ? 'peu' : nbrItem === 2 ? 'modérement' : 'beaucoup'
    console.log(`Cette plante requiert ${quantité} ${donnée}`)
}

export default CareScale
