const products = [
    { name: "Men's Jeans", price: 1299, img: "https://i5.walmartimages.com/asr/93eb2cf2-4332-470c-a0a3-616bf62b6919.46754fa15c340ff8aa5513bd57a2fc39.jpeg" },
    { name: "Men's Trousers", price: 999, img: "https://xcdn.next.co.uk/common/items/default/default/publications/g27/shotzoom/844/636-902s.jpg" },
    { name: "Men's Shorts", price: 799, img: "https://i5.walmartimages.com/asr/e6aae540-c21b-46af-98b6-8dc62aeead71.8244be212d93187acd43f5bde242a4e0.jpeg" },
    { name: "Denim Jeans", price: 1499, img: "https://cdn.fcglcdn.com/brainbees/images/products/583x720/18243816a.webp" },
    { name: "Formal Trousers", price: 1199, img: "https://sp.yimg.com/ib/th?id=OPAC.mUM4mBuwqe4FQA474C474&o=5&pid=21.1&w=160&h=105" },
    { name: "Casual Pants", price: 899, img: "https://sp.yimg.com/ib/th?id=OPAC.j%2fy6%2fS5QzrikjA474C474&o=5&pid=21.1&w=160&h=105" },
    { name: "Track Pants", price: 699, img: "https://sp.yimg.com/ib/th?id=OPAC.W6O%2bSTyyUAWSrw474C474&o=5&pid=21.1&w=160&h=105" },
    { name: "Joggers", price: 999, img: "https://sp.yimg.com/ib/th?id=OPAC.dTPbY%2bMT%2bzVOhA474C474&o=5&pid=21.1&w=160&h=105" }
];

const productContainer = document.getElementById("product-list");

let productHTML = "";
for (let i = 0; i < 28; i++) {
    let p = products[i % products.length];
    productHTML += `
        <div class="product">
            <img src="${p.img}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p>Price: ₹${p.price}</p>
            <button onclick="addToCart('${p.name}', ${p.price})">Add to Cart</button>
        </div>
    `;
}

productContainer.innerHTML = productHTML;

function addToCart(productName, price) {
    alert(productName + " added to cart for ₹" + price);
}
