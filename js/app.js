document.getElementById('button-addon2').addEventListener('click',() =>{
    const inputField = document.getElementById('input');
    const inputValue =inputField.value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${inputValue}`
    fetch(url)
    .then(res => res.json())
    .then(data => display(data));
    inputField.value='';
})
const display = (products) =>{
    // console.log(products)
    const parent2 = document.getElementById('parent2')
    parent2.textContent='';
    const parent = document.getElementById('result-section');
    parent.textContent='';
    const data = products.data;
    // console.log(products.data.length)
    for(const product of data){
        // console.log(product)
        const div = document.createElement('div');
        div.classList.add('col');
        div.classList.add('rounded');
        div.innerHTML=`
            <div class="card h-100">
            <img src="${product.image}" class="card-img-top w-75 mx-auto" alt="...">
                <div class="card-body">
                    <h5 class="card-title text-center">${product.brand} ${product.phone_name}</h5>
                </div>
                <button onclick="details('${product.slug}')" class="w-50 mb-4 btn-info mx-auto rounded">Learn More</button>
            </div>
    `
    parent.appendChild(div);
    }
}
// clean above no need to touch

const details = infoId =>{
    const detailsUrl =`https://openapi.programming-hero.com/api/phone/${infoId}`
    fetch(detailsUrl)
        .then(res => res.json())
        .then(data => detailsCard(data))
}
const detailsCard = sec => {
    console.log(sec)
    const parent2 = document.getElementById('parent2')
    parent2.textContent='';
    const div = document.createElement('div')
    div.classList.add('card')
    div.classList.add('g-0')
    div.innerHTML=`
    <div  class="row g-0 py-4">
    <div class="col-md-4 d-flex justify-content-center">
    <img src="${sec.data.image}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">${sec.data.brand} ${sec.data.name}</h5>
            <h6 class="card-text">Main Features:-</h6>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">${sec.data.releaseDate}</small></p>
        </div>
        </div>
    </div>`
parent2.appendChild(div)
}