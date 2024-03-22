 const hamburguerHeaderBTN = document.querySelector("#hamburguerHeader");
 
 if (hamburguerHeaderBTN !== null) {
     hamburguerHeaderBTN.addEventListener("click", () => {
         document.querySelector(".menuContainer").classList.toggle("show");
         if(document.querySelector(".menuContainer").classList.contains("show")){
             hamburguerHeaderBTN.src="/assets/img/x.svg";
            }else{
                hamburguerHeaderBTN.src="/assets/img/hamburguer.svg";    
         }
     });
 }
 