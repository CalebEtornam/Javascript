const search = () => {
    const searchItem = document.getElementById("search-product").value.toUpperCase();
    const product = document.querySelectorAll(".product");
    const pname = document.getElementsByTagName("h2");


    for(var i = 0; i < pname.length; i++){
        let match = product[i].getElementsByTagName('h2')[0];

        if(match){
            let textvalue = match.textContent || match.innerHTML
 
            if(textvalue.toUpperCase().indexOf(searchItem) > -1){
                    product[i].style.display = "";
            } else {
                product[i].style.display ="none";
            }
        }
    }
}