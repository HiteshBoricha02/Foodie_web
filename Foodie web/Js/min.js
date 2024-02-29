document.addEventListener("scroll" , () => {
        const header = document.querySelector("header");
    
        if(window.scrollY > 200){
            header.classList.add("active-1");
        }
        else{
            header.classList.remove("active-1");
        }

        

        

        // let prevScroll = window.pageYoffset;
        // window.onscroll = function () {
        //     let currentScroll = window.pageYoffset;
        //     if (prevScroll > currentScroll) {
        //         header.style.top = "0";
        //         console.log("a")
        //     } else {
        //         header.style.top = "-50px";
        //         console.log("ABC")
        //     }
        //     prevScroll = currentScroll;

        // };
    
    })



    const hambagerMenu = document.querySelector(".hambger-menu");
const Menu = document.querySelector("#navbar");

hambagerMenu.addEventListener("click" , () => {
    hambagerMenu.classList.toggle("active");
    Menu.classList.toggle("active");
})
    