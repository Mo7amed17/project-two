
let form= document.querySelector("form")
let h1=document.querySelector("form h1")
let paynow=document.querySelector("button[type=submit]")
let body=document.querySelector("body")
let html=document.querySelector("html")
let text=document.querySelectorAll(".maintext")
let input=document.querySelectorAll("input")
let dateinput=document.querySelectorAll(".d")
let paymentbutton=document.querySelectorAll(".paymentbuttons .paybutton")
let buttons=document.querySelectorAll(".prevent")
let cardnumber=document.querySelector(".cardnumber")
let carddetails=document.querySelector(".carddetails")
let gotopaypal=document.querySelector(".gotopaypal")
let i =document.querySelectorAll("i")
let inputshaveicon=document.querySelectorAll(".have")
buttons.forEach(element => {
element.addEventListener("click",function(event){
event.preventDefault();
})
});

html.onclick=function(ele){
    if(ele.target===body ||ele.target===html){
        h1.style.color="black"
    text.forEach(element => {
        element.style.color="black"
    });
    }
    else {
        h1.style.color="#19c8fa"
     text.forEach(element => {
        element.style.color="#19c8fa"
    });
    }
}

    input.forEach(element => {
        element.onfocus=function(ele){
            input.forEach(element => {
                element.parentElement.style.borderColor="rgba(128, 128, 128, 0.397)" 
            });
            ele.target.parentElement.style.borderColor="#19c8fa" 
        }
    });
    input.forEach(element => {
        element.onblur=function(){
            element.parentElement.style.borderColor="rgba(128, 128, 128, 0.397)"
        }
    });

    dateinput.forEach(element => {
        element.onfocus=function(ele){
            input.forEach(element => {
                element.style.borderColor="rgba(128, 128, 128, 0.397)" 
            });
            ele.target.style.borderColor="#19c8fa" 
        }
    });

    dateinput.forEach(element => {
        element.onblur=function(){
            element.style.borderColor="rgba(128, 128, 128, 0.397)"
        }
    });

    paymentbutton.forEach(element => {
        element.addEventListener("click",function(){
              paymentbutton.forEach(ele => {
            ele.classList.remove("paymethodcolor")
           });
           element.classList.add("paymethodcolor")
           if(element.classList[0]==="left")
           {
            cardnumber.classList.remove("paymethodvisible")
            carddetails.classList.remove("paymethodvisible")
            gotopaypal.classList.add("paymethodvisible")
           }else {
            cardnumber.classList.add("paymethodvisible")
            carddetails.classList.add("paymethodvisible")
            gotopaypal.classList.remove("paymethodvisible")
           }
        })
    });

    let genderbuttons=document.querySelectorAll(".genderbuttons .theborder")
    genderbuttons.forEach(element => {
    
        element.onclick=function(){
            genderbuttons.forEach(ele => {
                ele.classList.remove("gendercolor")
            });
            element.classList.add("gendercolor")
        }
    });

    inputshaveicon.forEach(element => {
    element.addEventListener("click",function(ele1){
        inputshaveicon.forEach(ele => {
            ele.classList.remove("coloricon")
        });
        element.classList.add("coloricon")
    })
});
