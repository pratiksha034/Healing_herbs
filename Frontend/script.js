const search = () => {
    const searchbox =document.getElementById("search-item").value.toUpperCase();
    const storeitem=document.getElementById("product-list")
    const product=document.querySelectorAll(".product")
    const pname=storeitem.getElementsByTagName("a")
    for(var i =0;i<pname.length;i++){
        let match=product[i].getElementsByTagName('a')[0];
        if (match){
            let textvalue=match.textContent || match.innerHTML
            if(textvalue.toUpperCase().indexOf(searchbox)>-1){
                product[i].style.display="";

            }
            else{
                product[i].style.display="none";
            }
        }

    }
}


const text = "Welcome to Healing Herbs";  // Change text as needed
let index = 0;
let isDeleting = false;

function typeEffect() {
    let h1Element = document.getElementById("typing");
    let currentText = text.substring(0, index);
    h1Element.innerHTML = currentText + '<span class="cursor">|</span>';

    if (!isDeleting && index < text.length) {
        index++;
        setTimeout(typeEffect, 150); // Typing speed
    } else if (isDeleting && index > 0) {
        index--;
        setTimeout(typeEffect, 100); // Deleting speed
    } else {
        isDeleting = !isDeleting;
        setTimeout(typeEffect, 1000); // Pause before switching mode
    }
}

// Start typing effect when the page loads
window.onload = () => typeEffect();




