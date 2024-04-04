const cartsProduct = document.querySelectorAll(".cart-product");
if (cartsProduct.length > 0) {
    cartsProduct.forEach(item => {
        const plus = item.querySelector(".plus"),
            minus = item.querySelector(".minus"),
            num = item.querySelector(".num");
    
        let a =1;
    
        plus.addEventListener("click", () =>{
            a++;
            a = ( a < 10) ? "0" + a : a;
            num.innerText = a;
        });
    
        minus.addEventListener("click", () =>{
            if(a >1){
                a--;
                a = ( a < 10) ? "0" + a : a;
                num.innerText = a;
            }
        });        
    });
}