import '../styles/Cart.css'

function Cart() {
    const priceMonstera = 8
    const priceLierre = 10
    const priceFlower = 15
    return <div className='lmj-cart'>
        <h2>Panier</h2>
        <ul>
            <li>{"Monstera : " + priceMonstera + " €"}</li>
            <li>{"Lierre : " + priceLierre + " €"}</li>
            <li>{"Bouquet de Fleurs :" + priceFlower + " €"}</li>
        </ul>
        <p>Total du panier : {priceMonstera + priceLierre + priceFlower + " €"}</p>
    </div>
}

export default Cart