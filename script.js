

 const fullnav = document.querySelector('#navbar');
 const burger =document.querySelector('.burger')
 const nav = document.querySelector('.nav-links')
 const navlinks =document.querySelectorAll('.nav-links li')
 const burger1 = document.querySelector('.line1')
 const burger2 = document.querySelector('.line2')
 const burger3 = document.querySelector('.line3')
 const main = document.getElementById('backround');

const navslide = () => {
   

    burger.addEventListener('mousedown',()=>{

        //Toggle burger

        nav.classList.toggle('nav-active')
        main.classList.toggle('blur')
        //Animate links

        navlinks.forEach((link,index)=>{
            if(link.style.animation){
                link.style.animation = ''
            }
            else{
                link.style.animation = `fadeIn 0.5s ease forwards ${index/7 +0.3}s`
            }
        })

        //Burger animation

        burger.classList.toggle('toggle'); 
        })
        window.addEventListener('mouseup',(e)=>{
            if(e.target !== nav && e.target !== navlinks  && e.target !== burger && e.target !== burger1 && e.target !== burger2 && e.target !== burger3  ){
                burger.classList.remove('toggle'); 
                nav.classList.remove('nav-active')
                main.classList.remove('blur')

                console.log(e.target)

                navlinks.forEach((link)=>{
                        link.style.animation = ''
                    
                })
                
            }
        })
   
}

navslide();