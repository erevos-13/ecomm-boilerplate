import faker from 'faker'





const mount = (el) => {
    let products = '';

    for (let i = 0 ; i< 4 ; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name} <p>orfeas</p></div>`
    }
    el.innerHTML = products
}
// Context/Situation #1
// we are running this file in dev in isolation
// we are using local index.html file
if(process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-products')
    if(el) {
        mount(el)
    }
}

// Context/Situation #2
// in prod through container app and id dev-products exist.
// We do not want try to immmediatly render the app.
export {mount}
