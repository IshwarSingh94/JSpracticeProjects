let shopItemsData = [
    {
        id: "101",
        name: "Casual Shirt",
        price: 45,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
        img: "images/img-1.jpg"
    },
    {
        id: "102",
        name: "Formal Shirt",
        price: 70,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
        img: "images/img-2.jpg"
    },
    {
        id: "103",
        name: "T-Shirt",
        price: 30,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
        img: "images/img-3.jpg"
    },
    {
        id: "104",
        name: "Casual Shirt",
        price: 100,
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing.",
        img: "images/img-4.jpg"
    }]

let shop = document.getElementById("shop");
let basket = [];

// with destructuring

let generateShop = () => {
    return (shop.innerHTML = shopItemsData.map((x) => {
        let {id, name, price, desc, img} = x;
        return `
            <div id=product-id-${id} class="item">
                <img width="220" src=${img} alt="">
                <div class="details">
                <h3>${name}</h3>
                <p>${desc}</p>
                    <div class="price-quantity">
                        <h2>$ ${price} </h2>
                        <div class="buttons">
                            <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                            <div id=${id} class="quantity">0</div>
                            <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join("")); 
}

generateShop();

let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem);
    if(search === undefined) {
        basket.push({
            id: selectedItem,
            item: 1,
        });
    }
    else {
        search.item += 1;
    }
    update(selectedItem);
};

let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem);
    if(search.item === 0) return;
    else {
        search.item -= 1;
    }
    update(selectedItem);
};

let update = (id) => {
    let search = basket.find((x) => x.id === id);
    document.getElementById(id).innerHTML = search.item;
    calculations();
};

let calculations = () => {
    let cartAmount = 0;
    basket.forEach(element => {
        cartAmount += element.item;
    });
    document.getElementsByClassName(".cartAmount").innerHTML = cartAmount; 
};