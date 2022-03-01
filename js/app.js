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
    const parent = document.getElementById('result-section');
    parent.textContent='';
    const data = products.data;
    for(const product of data){
        // console.log(product,data)
        const div = document.createElement('div');
        div.classList.add('col');
        div.classList.add('rounded');
        div.innerHTML=`
            <div class="card h-100">
            <img src="${product.image}" class="card-img-top w-75 mx-auto" alt="...">
                <div class="card-body">
                    <h5 class="card-title text-center">${product.brand} ${product.phone_name}</h5>
                </div>
                <button onclick="details()" class="w-50 mb-4 btn-info mx-auto rounded">Learn More</button>
            </div>
    `
    parent.appendChild(div);
    }
}
const details = infoId =>{
    const detailsUrl =`https://openapi.programming-hero.com/api/phone/${infoId}`
    fetch(detailsUrl)
        .then(res => res.json())
        .then(data => console.log(data))
    const parent2 = document.getElementById('parent2')
    parent2.textContent='';
    const div = document.createElement('div')
    div.classList.add('card')
    div.classList.add('g-0')
    div.innerHTML=`
    <div  class="row g-0">
    <div class="col-md-4">
    <img src="..." class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
        </div>
    </div>`
parent2.appendChild(div)
}