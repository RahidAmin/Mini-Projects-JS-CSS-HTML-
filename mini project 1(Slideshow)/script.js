

let sideshowElements=document.querySelectorAll(".sideshow-element");
// console.log(sideshowElements);

let countElement=1;

setInterval(() => {
    
        countElement++;
        let currentElement=document.querySelector(".current");

        currentElement.classList.remove("current");
        if(countElement>sideshowElements.length)
        {
            sideshowElements[0].classList.add("current");
            countElement=1;
        }
        else{
            currentElement.nextElementSibling.classList.add("current");
        }

        
        
    
}, 1000);