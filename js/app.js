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
console.log(detailsUrl);
}