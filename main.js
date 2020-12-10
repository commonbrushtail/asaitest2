
gsap.registerPlugin(ScrollTrigger)


//*Check If Enter website for the first time/////
let introAnimationOverlay = document.querySelector('.introAnimationOverlay')
if(localStorage.getItem('asaiVisited')){
    introAnimationOverlay.classList.add('hide')  
} else {
    gsap.set('.introAnimationOverlay',{
        opacity:100,
    })

    if(document.body.clientWidth>1200){
        gsap.set('.introAnimate1Wrap,.introAnimate2',{
            top:'50%'
        })
        
    } else {
        gsap.set('.introAnimate1Wrap,.introAnimate2',{
            top:'40%'  
    })
    }


    var tl = gsap.timeline({
        onStart:()=>{
            html.classList.add('active')
        },
        onComplete:()=>{
            html.classList.remove('active')
            
        }
    });
        
        
        tl.to('.introAnimate1',{y:0,duration:0.6,stagger:0.05,})
          .to('.introAnimate1',{opacity:0,duration:0.8})
          .to('.introAnimate2',{opacity:100,duration:0.8})
          .to('.introAnimationOverlay',{height:0,duration:0.7,delay:0.8})
          .to('.introAnimate2',{opacity:0,duration:0.01},'-=1')
          .set('.introAnimationOverlay',{display:'none'})
          
          localStorage.setItem('asaiVisited',true)          
        
}


let line = document.querySelector('.cls-1')

var lineLength = line.getTotalLength();
 



gsap.fromTo('.cls-1',{
    attr:{"stroke-dashoffset": lineLength,
    "stroke-dasharray": lineLength},
},
    {
        attr:{"stroke-dashoffset": 0},
        duration:3,
        scrollTrigger:{
            trigger:'.membership',
            start:"center bottom"
        }
    }
    
    
    )






//*floatbook Change Color -> add 'white' class to the section////

blueSection = document.querySelectorAll('.blue')
whiteSection = document.querySelectorAll('.white')
floatBook = document.querySelector('.float-book-wrap')

whiteSection.forEach(section => {
    ScrollTrigger.create({
        trigger: section,
        endTrigger:section,
        start: "top bottom",
        end: "bottom bottom",
        invalidateOnRefresh: true,
        onEnter:()=>{ ScrollTrigger.refresh();},
        onLeave:()=>{ ScrollTrigger.refresh();},

        toggleClass: {targets: floatBook, className: "white",}
        
        
      });

});


/* floatbook change color when enter footer section**/       
ScrollTrigger.create({
    trigger: 'footer',
    endTrigger:'html',
    start: "top bottom",
    end: "bottom +500+bottom",
    invalidateOnRefresh: true,
    onEnter:()=>{ ScrollTrigger.refresh();},
    onLeave:()=>{ ScrollTrigger.refresh();},
    
    toggleClass: {targets: floatBook, className: "white",}
    
    
});


window.addEventListener('DOMContentLoaded', (event) => {
    ScrollTrigger.refresh();
    });    
window.addEventListener('onResize', (event) => {
    ScrollTrigger.refresh();
    
});    

/**header change to white when enter second section**/
function findSecondSection(){
    if(parseInt(window.innerWidth)>=1200){
        return "-220+top top"
    } else {
        return "-45+top top"
    }
}

if(document.querySelector('.indexPage')){
    ScrollTrigger.create({
    
        start: findSecondSection(),
        trigger:'.secondSection',
        endTrigger:"html" ,
        end:"bottom top",
        marker:true,
        
        toggleClass: {targets: "header,.svgHeaderIcon,.hamburger-inner,.userNameWrap", className: "scrolling",}
        
    });
}else {
    ScrollTrigger.create({
    
        start: 'top top',
        trigger:'.secondSection',
        endTrigger:"html" ,
        end:"bottom top",
        marker:true,
        
        toggleClass: {targets: "header,.svgHeaderIcon,.hamburger-inner,.userNameWrap", className: "scrolling",}
        
    });
}




/** non transparent header **/

gsap.to('.nonTransparent.locationHeader',{
        y:'-100%',
        
        scrollTrigger:{
            start:'top top',
            end:'10 top',
            scrub:true,
            duration:0.1,
            
        },
})




/** text reveal scrolltrigger **/

let hiddenText = document.querySelectorAll('.hiddenText');
let dinTitle = document.querySelectorAll('.din-title');

hiddenText.forEach(section => {
    ScrollTrigger.create({
        trigger:section,
        start: "100 bottom",
        endTrigger:section ,
        end:"bottom center",
        onEnter:(i)=>{
            section.classList.add('active')
            ScrollTrigger.refresh()
            
        },
        
            
    });


});


/****sliding text section***/


let slidingText = document.querySelectorAll('.text');
let slidingTextLeft = document.querySelectorAll('.textLeft');
let textWrapLength = 3500;
let textWrap = document.querySelectorAll('.textWrap');
let count = 0


slidingText.forEach(text => {
    let innerContent = text.innerHTML
    let textNeeded = Math.ceil(textWrapLength / text.offsetWidth);
    

    if(text.classList.contains('textRight')){
        for (let i = 0; i < textNeeded; i++) {
            let textToAdd =  document.createElement("div")
            textToAdd.classList.add('text')
            textToAdd.classList.add('textRight')
            textToAdd.innerHTML = innerContent
            textWrap[count].appendChild(textToAdd)
        }
        count++
    

    } else if (text.classList.contains('textLeft')){
        for (let i = 0; i < textNeeded; i++) {
            let textToAdd =  document.createElement("div")
            textToAdd.classList.add('text')
            textToAdd.classList.add('textLeft')
            textToAdd.innerHTML = innerContent
            textWrap[count].appendChild(textToAdd)
        }
        count++
    }
});

gsap.to('.textRight',
{x:1000,
    scrollTrigger:{
        trigger:'.text',
        start: "-300+top bottom",
        endTrigger:'.text' ,
        end:"+600+top center",
    
        scrub:true,
    
    }
}
)

gsap.to('.textLeft',
    {x:-1000,
        scrollTrigger:{
            trigger:'.text',
            start: "-300+top bottom",
            endTrigger:'.text' ,
            end:"+600+top center",
            scrub:true,
        }
    }
)






let floatBooking = document.querySelector('.float-booking')
let overlayBookMenu = document.querySelector('.overlayBookMenu')
let closeButton = document.querySelector('.closeButton')
floatBooking.addEventListener('click',()=>{
    overlayBookMenu.classList.add('active')
    html.classList.add('active')
    
})

closeButton.addEventListener('click',()=>{
    overlayBookMenu.classList.remove('active')
    html.classList.remove('active')
})

let html = document.documentElement
let hamburger = document.querySelector('.hamburger')
let overlayNav = document.querySelector('.overlayNav')

function resetNavMenu(){
    document.querySelector('#sathornNavMenu').classList.remove('active')
    document.querySelector('#chinatownNavMenu').classList.remove('active')
}

function goBackToFirstMenuLayer(){
    overlayNav.classList.remove('secondLayer')
    returnButton.classList.remove('sathorn','chinatown')
}

hamburger.addEventListener('click',(e)=>{
    hamburger.classList.toggle('is-active');
    overlayNav.classList.toggle('active');
    html.classList.toggle('active');
})


let returnButton = document.querySelector('.returnButton')
returnButton.addEventListener('click',()=>{
    resetNavMenu();
    goBackToFirstMenuLayer()
})

let locationList = document.querySelectorAll('.locationList');
let addArrow = function(event){
    event.currentTarget.classList.toggle('active')
}

if(parseInt(window.innerWidth)>=992){
locationList.forEach(element => {
    element.addEventListener('mouseover',addArrow);
    element.addEventListener('mouseleave',addArrow);
    
});
}

let chinatownListMenu = document.querySelector('#chinatownNavMenu');
let sathornListMenu = document.querySelector('#sathornNavMenu');
let rightMenu = document.querySelector('.rightMenu');

locationList.forEach(element => {
    
    element.addEventListener('click',(e)=>{
        
        locationList.forEach(element => {
            element.removeEventListener('mouseover',addArrow);
            element.removeEventListener('mouseleave',addArrow);     
        });
       
        if(parseInt(window.innerWidth)>=992){
     
            if (e.currentTarget.dataset.locationNavTarget=="chinatown"){
                resetNavMenu()
                document.querySelector('#chinatownNavMenu').classList.add('active')
                locationList.forEach(element => {
                    element.classList.remove('active')
                });
                e.currentTarget.classList.add('active')
                rightMenu.dataset.backgroundImage ="chinaDefault"
            } else if(e.currentTarget.dataset.locationNavTarget=="sathorn"){
                resetNavMenu()
                document.querySelector('#sathornNavMenu').classList.add('active')
                locationList.forEach(element => {
                    element.classList.remove('active')
                });
                e.currentTarget.classList.add('active')
                rightMenu.dataset.backgroundImage ="sathornDefault"
            }

        } else if((parseInt(window.innerWidth)<=991)){
            overlayNav.classList.add('secondLayer')
            if(e.currentTarget.dataset.locationNavTarget == 'chinatown'){
                locationList.forEach(element => {
                    element.classList.remove('active')
                });
                resetNavMenu()
                document.querySelector('#chinatownNavMenu').classList.add('active')
                returnButton.classList.add('chinatown')
                
               
            } else if (e.currentTarget.dataset.locationNavTarget == 'sathorn'){
                locationList.forEach(element => {
                    element.classList.remove('active')
                });
                resetNavMenu()
                document.querySelector('#sathornNavMenu').classList.add('active')
                returnButton.classList.add('sathorn')
            }


        }
        

        
    })
});

let listForMenuBackground = document.querySelectorAll('[data-list-background]')

listForMenuBackground.forEach(element => {
    element.addEventListener('mouseover',(e)=>{
        let dataTarget = e.currentTarget.dataset.listBackground
        rightMenu.dataset.backgroundImage = dataTarget;
    })
});



if(document.querySelector('.locationNavMobile')){
new Accordion('.locationNavMobile');}
    












   










