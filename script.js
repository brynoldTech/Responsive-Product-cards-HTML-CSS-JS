let productDetails= document.querySelector('.product-details');
let previewBox= productDetails.querySelectorAll('.preview');

document.querySelectorAll('.product_container .product').forEach(product=>{
    product.onclick = ()=>{
        productDetails.style.display='flex'
        let name =product.getAttribute('data-name');
        previewBox.forEach(preview=>{
            let target = preview.getAttribute('data-target');
            if (name == target){
                console.log(name)
                console.log(target)
                preview.classList.add('active')  
            }
        });
    }
});

// close the product detail popup
previewBox.forEach(close=>{
    close.querySelector('.fa-times').onclick=()=>{
        close.classList.remove('active');
        productDetails.style.display='none'
    }
});
