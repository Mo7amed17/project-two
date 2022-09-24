
let active=document.querySelectorAll(".rightside ul li a")
let fixedmenu=document.querySelector(".fixedmenu")
let fixedmenuactive=document.querySelectorAll(".fixedmenu ul li a")
let morebutton=document.querySelector(".morebutton button")
let morephoto=document.querySelectorAll(".morephoto .photoholder")
let lessbutton=document.querySelector(".lessbutton button")
let header=document.querySelector("header")
let services=document.querySelector(".services")
let portfolio=document.querySelector(".portfolio")
let about=document.querySelector(".about")
let pricing=document.querySelector(".pricing")
let contactus=document.querySelector(".contactus")
lessbutton.style.display="none"

window.addEventListener("scroll",function(){
   fixedmenuactive.forEach(element => {
      element.classList.remove("fixedmenuactive")
   });
   if(scrollY>=header.scrollHeight){
      fixedmenu.style.display="block"
   }
   else{
      fixedmenu.style.display="none"
   }
   if(scrollY>=header.scrollHeight&&scrollY<=header.scrollHeight+services.scrollHeight){

      fixedmenuactive[1].classList.add("fixedmenuactive")
   }
if(scrollY>=(header.scrollHeight+services.scrollHeight)&&(scrollY<=(header.scrollHeight+services.scrollHeight+portfolio.scrollHeight))){

   fixedmenuactive[2].classList.add("fixedmenuactive")
}
if(scrollY>=(header.scrollHeight+services.scrollHeight+portfolio.scrollHeight)&&(scrollY<=(header.scrollHeight+services.scrollHeight+portfolio.scrollHeight+about.scrollHeight))){

   fixedmenuactive[3].classList.add("fixedmenuactive")
}
if(scrollY>=(header.scrollHeight+services.scrollHeight+portfolio.scrollHeight+about.scrollHeight)&&(scrollY<=(header.scrollHeight+services.scrollHeight+portfolio.scrollHeight+about.scrollHeight+pricing.scrollHeight))){

   fixedmenuactive[4].classList.add("fixedmenuactive")
}
if(scrollY>=(header.scrollHeight+services.scrollHeight+portfolio.scrollHeight+about.scrollHeight+pricing.scrollHeight)&&(scrollY<=(header.scrollHeight+services.scrollHeight+portfolio.scrollHeight+about.scrollHeight+pricing.scrollHeight+contactus.scrollHeight))){

   fixedmenuactive[5].classList.add("fixedmenuactive")
}

})


active.forEach(a => {
    a.addEventListener("click",function(ele){
        active.forEach(a=>{
            a.classList.remove("active")
        })
ele.currentTarget.classList.add("active")
    })
});

let rightarrow=document.querySelector(".rightarrow")
let leftarrow=document.querySelector(".leftarrow")
let intro=document.querySelectorAll(".intro")
let intro1=document.querySelector(".intro1")
let intro2=document.querySelector(".intro2")
let intro3=document.querySelector(".intro3")
circle1=document.querySelector("[data-value=one]")
circle2=document.querySelector("[data-value=two]")
circle3=document.querySelector("[data-value=three]")
circle=document.querySelectorAll(".circles div")
let position=0;
if(circle1.attributes.class.nodeValue==="activecircle")
position=1
else if(circle2.attributes.class.nodeValue==="activecircle")
position=2
else if(circle3.attributes.class.nodeValue==="activecircle")
position=3
rightarrow.addEventListener("click",function(){
 circle.forEach(element => {
    element.classList.remove("activecircle")
 });
 intro.forEach(element => {
    element.classList.remove("introactive")
 });
 intro.forEach(element => {
    element.classList.remove("toright")
 });
 intro.forEach(element => {
    element.classList.remove("toleft")
 });
if(position<3 && position>=1)
{
position++;
}
 if(position===2)
 {circle2.classList.add("activecircle")
   intro2.classList.add("introactive")
   intro2.classList.add("toright")}
else if(position===3)
{circle3.classList.add("activecircle")
intro3.classList.add("introactive")
intro3.classList.add("toright")
}
})
leftarrow.addEventListener("click",function(){
 circle.forEach(element => {
    element.classList.remove("activecircle")
 });
 intro.forEach(element => {
    element.classList.remove("introactive")
 });
 intro.forEach(element => {
    element.classList.remove("toright")
 });
 intro.forEach(element => {
    element.classList.remove("toleft")
 });
if(position<=3 && position>1)
{
position--;
}
 if(position===2)
{circle2.classList.add("activecircle")
intro2.classList.add("introactive")
intro2.classList.add("toleft")}
else if(position===1)
{circle1.classList.add("activecircle")
intro1.classList.add("introactive")
intro1.classList.add("toleft")}
})
let menu=document.querySelector(".rightside li i")
let menulist=document.querySelector(".rightside ul div")

if(screen.width<=767){
document.addEventListener("click",function(ele){
if(ele.target===menu){
if(menulist.style.display==="flex"){
   menu.style.color="white"
   menulist.style.display="none"
   menu.style.transform="rotate(0deg)"
}else {
   menu.style.color="#19c8fa"
   menulist.style.display="flex"
   menu.style.transform="rotate(90deg)"
}
}else {
   menu.style.color="white"
   menulist.style.display="none"
   menu.style.transform="rotate(0deg)"
}

})
}
let toup=document.querySelector(".toup i")
window.onscroll=function(){
   if(window.scrollY>=650){
      toup.style.display="block"
   }else
   toup.style.display="none"
   if(window.scrollY<=400){
      active.forEach(a => {
         a.classList.remove("active");
         active[0].classList.add("active");
            })
   }
}
toup.onclick=function(){
window.scrollTo(0,0)
active.forEach(a => {
a.classList.remove("active");
active[0].classList.add("active");
   })
};

let portfoliomenu=document.querySelectorAll(".portfoliomenu span")
let photo=document.querySelectorAll(".portfoliotop .photoholder")
document.onclick=function(ele){
for(let a=0;a<=4;a++){
   if(ele.target===portfoliomenu[a]){
      portfoliomenu.forEach(span => {
         span.classList.remove("portfoliomenuactive")
         ele.target.classList.add("portfoliomenuactive")
         if(a===0)
         {morebutton.style.display="none"
         lessbutton.style.display="inline"}
         else {
            morebutton.style.display="none"
            lessbutton.style.display="none"
         }
      });
   }

   }
   
}

morebutton.onclick=function(){
morephoto.forEach(img => {
   img.classList.add("activephoto")
});
morebutton.style.display="none"
lessbutton.style.display="inline"
}
lessbutton.addEventListener("click",function(){
   morephoto.forEach(img => {
      img.classList.remove("activephoto")
   });
   lessbutton.style.display="none"
morebutton.style.display="inline"
})


document.addEventListener("click",function(element){
  if (element.target===portfoliomenu[0])
 { photo.forEach(image => {
   image.classList.add("activephoto")
  });
   morephoto.forEach(image => {
      image.classList.add("activephoto")
   });
}
  else if (element.target===portfoliomenu[1])
  {photo.forEach(image => {
   image.classList.remove("activephoto")
   photo[0].classList.add("activephoto")
   photo[6].classList.add("activephoto")
   photo[7].classList.add("activephoto")
});
morephoto.forEach(image => {
   image.classList.remove("activephoto")
   morephoto[1].classList.add("activephoto")
   morephoto[5].classList.add("activephoto")
});
}
  else if (element.target===portfoliomenu[2])
  {photo.forEach(image => {
   image.classList.remove("activephoto")
   photo[1].classList.add("activephoto")
   photo[2].classList.add("activephoto")
   photo[3].classList.add("activephoto")
  });
  morephoto.forEach(image => {
   image.classList.remove("activephoto")
});
}
  else if (element.target===portfoliomenu[3])
  {photo.forEach(image => {
   image.classList.remove("activephoto")
  });
  morephoto.forEach(image => {
   image.classList.remove("activephoto")
   morephoto[2].classList.add("activephoto")
   morephoto[3].classList.add("activephoto")
   morephoto[4].classList.add("activephoto")
   morephoto[7].classList.add("activephoto")
  });

}
  else if (element.target===portfoliomenu[4])
  {photo.forEach(image => {
   image.classList.remove("activephoto")
   photo[4].classList.add("activephoto")
   photo[5].classList.add("activephoto")
  });
  morephoto.forEach(image => {
   image.classList.remove("activephoto")
   morephoto[0].classList.add("activephoto")
   morephoto[6].classList.add("activephoto")

  });

}
});

let videobuttonmore=document.querySelector(".videobuttonmore")
let videobuttonless=document.querySelector(".videobuttonless")
let videotexthidden=document.querySelector(".videotext .hidden")
videotexthidden.style.display="none"

videobuttonmore.onclick=function(){
   if(videotexthidden.style.display==="none")
   {
      videotexthidden.style.display="block"
      videobuttonmore.style.display="none"
   }
}
videobuttonless.onclick=function(){
   if(videotexthidden.style.display==="block")
   {
      videotexthidden.style.display="none"
      videobuttonmore.style.display="block"
   }
}


let leftarrowperson=document.querySelector(".leftarrowperson")
let rightarrowperson=document.querySelector(".rightarrowperson")
let personcircles=document.querySelectorAll(".personcircles div")
let the1=document.querySelector("[data-name=the1]")
let the2=document.querySelector("[data-name=the2]")
let the3=document.querySelector("[data-name=the3]")
let coloredcircle=0;
let person1=document.querySelector("[data-person=person1]")
let person2=document.querySelector("[data-person=person2]")
let person3=document.querySelector("[data-person=person3]")
let person=document.querySelectorAll(".person")

let skills=document.querySelectorAll(".skills")
let skill1=document.querySelector(".s1")
let skill2=document.querySelector(".s2")
let skill3=document.querySelector(".s3")

if(the1.className=="activethecircle")
coloredcircle=1;
else if(the2.className=="activethecircle")
coloredcircle=2;
else if(the3.className=="activethecircle")
coloredcircle=3;


leftarrowperson.onclick=function(){
   if(coloredcircle<=3&&coloredcircle>1)
   coloredcircle--;
      personcircles.forEach(thecircle => {
      thecircle.classList.remove("activethecircle")
      person.forEach(element => {
         element.classList.remove("personshow")
         element.classList.remove("toright")
         element.classList.remove("toleft")
      });
      skills.forEach(skill => {
         skill.classList.remove("activeskills")
      });
   });
   if(coloredcircle===2){
      the2.classList.add("activethecircle")
      person2.classList.add("personshow")
      person2.classList.add("toleft")
      skill2.classList.add("activeskills")
   }else if(coloredcircle===1){
      {the1.classList.add("activethecircle")
      person1.classList.add("personshow")
      person1.classList.add("toleft")
      skill1.classList.add("activeskills")
   }
   }

}
rightarrowperson.onclick=function(){
   if(coloredcircle>=1&&coloredcircle<3)
   coloredcircle++;
      personcircles.forEach(thecircle => {
      thecircle.classList.remove("activethecircle")
      person.forEach(element => {
         element.classList.remove("personshow")
         element.classList.remove("toleft")
         element.classList.remove("toright")
      });
      skills.forEach(skill => {
         skill.classList.remove("activeskills")
      });
   });
   if(coloredcircle===2){
      the2.classList.add("activethecircle")
      person2.classList.add("personshow")
      person2.classList.add("toright")
      skill2.classList.add("activeskills")
   }else if(coloredcircle===3){
      the3.classList.add("activethecircle")
      person3.classList.add("personshow")
      person3.classList.add("toright")
      skill3.classList.add("activeskills")
   }

}
let date=new Date();
let year=document.querySelector("p .year")
let theyear=document.createTextNode(date.getFullYear())
year.appendChild(theyear)
