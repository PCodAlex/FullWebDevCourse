document.addEventListener("DOMContentLoaded",()=>{
    const productList=document.getElementById("product-list");
    const cartItems=document.getElementById("cart-items");
    const emptyCartMessage=document.getElementById("empty-cart");
    const cartTotalMessage=document.getElementById("cart-total");
    const totalPriceDisplay=document.getElementById("total-price");
    const chechOutBtn=document.getElementById("checkout-btn");

    const products=[
        {id:101,name:'schoolBag',price:999},
        {id:102,name:'tSshirt',price:1101},
        {id:103,name:'jeansPant',price:3900}
    ]

    let cart=[];

    products.forEach((product)=>{
        const itemDiv=document.createElement('div');
        itemDiv.classList.add('product');
        itemDiv.innerHTML=`<span>${product.name}-$${product.price}</span><button data-id=${product.id}>add to cart</button>`;
        // console.log(itemDiv);
        productList.appendChild(itemDiv);
    })

    productList.addEventListener('click',(e)=>{
        if(e.target.tagName==='BUTTON'){
            const productId=parseInt(e.target.getAttribute('data-id'));
            const product=products.find(p => p.id===productId);
            // console.log(product);
            addToCart(product);
        }
    })
    
    function addToCart(productDetils){
        cart.push(productDetils);
        renderCartItem();
    }

    function renderCartItem(){
        let totalPrice=0;
        cartItems.innerHTML='';

        if(cart.length>0){
            cart.forEach(c=>{
                totalPrice+=c.price;
                const cartItem=document.createElement('div');
                cartItem.innerHTML=`<span>${c.name}</span> --- <span>$${c.price}</span>`;
                cartItems.appendChild(cartItem);
            });

            emptyCartMessage.classList.add('hidden');     // hide empty msg
            cartTotalMessage.classList.remove('hidden');  // show total
            totalPriceDisplay.textContent=totalPrice;

        }else{
            emptyCartMessage.classList.remove('hidden');  // show empty msg
            cartTotalMessage.classList.add('hidden');     // hide total msg
            totalPriceDisplay.textContent='0.00';
        }
    }

    chechOutBtn.addEventListener('click',()=>{
        // cartTotalMessage.classList.remove('hidden');
        alert(`you have successfully checked out!`);
        cart=[];
        renderCartItem();
        // cartItems.innerHTML='';
        // totalPriceDisplay.textContent='0.00';
        // chechOutBtn.innerText='reStart';
    })
})