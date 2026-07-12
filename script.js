<<<<<<< HEAD
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

=======
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

>>>>>>> 32e189745c99fb61d203a9678957ce9aa55d52cc
});