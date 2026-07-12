// Smooth scrolling

document.querySelectorAll("a").forEach(link=>{

    link.addEventListener("click",function(e){

        let target=document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            e.preventDefault();

            target.scrollIntoView({
                behavior:"smooth"
            });

        }

    });

});