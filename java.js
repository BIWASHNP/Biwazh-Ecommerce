
function makeFunction(){
var pain = document.getElementById("pain");
var pawTree = document.getElementById("paw");
var btnTree = document.getElementById("topB");

if(pain.style.display === "none"){
pain.style.display = "inline";
btnTree.innerHTML = "Read more";
pawTree.style.display = "none";
}
else{
pain.style.display = "none";
btnTree.innerHTML= "Read Less";
pawTree.style.display = "inline";
}
}

function makiFunction(){
var spain = document.getElementById("spain");
var rawBree = document.getElementById("raw");
var ltnFree = document.getElementById("topZ");

if(spain.style.display === "none"){
spain.style.display = "inline";
ltnFree.innerHTML = "Read more";
rawBree.style.display = "none";
}
else{
spain.style.display = "none";
ltnFree.innerHTML= "Read Less";
rawBree.style.display = "inline";
}
}

function makioFunction(){
var rpain = document.getElementById("rpain");
var kaw = document.getElementById("kaw");
var rtn = document.getElementById("top");

if(rpain.style.display === "none"){
rpain.style.display = "inline";
rtn.innerHTML = "Read more";
kaw.style.display = "none";
}

else{
rpain.style.display = "none";
rtn.innerHTML= "Read Less";
kaw.style.display = "inline";
}
}

function mainFunction() {
  var mi = document.getElementById("secondNav");
  if (mi.className === "firstnav") {
    mi.classList.add("responsive");
  } else {
    mi.className = "firstnav";
  }
}




function MakioFunction(){
    var snm = document.getElementById("snm");
    var kaw = document.getElementById("kaw");
    var rtn = document.getElementById("top");
}
if(snm.style.display === "none"){
snm.style.display = "inline";
    btn.innerHTML = "Read more";
    kaw.style.display = "none";

}
else{
 snm.style.display = "none";
    btn.innerHtml="Read Less";
    kaw.style.display = "inline";  
}

// Show modal after delay
window.onload = () => {
  setTimeout(() => {
    document.getElementById('hen').style.display = 'block';
  }, 2000); // 2 seconds delay
};

// Close modal
document.querySelector('.par').onclick = () => {
  document.getElementById('hen').style.display = 'none';
};

// Optional: close when clicking outside
window.onclick = (e) => {
  const modal = document.getElementById('hen');
  if (e.target === modal) {
    modal.style.display = 'none';
  }
};
/*
let callCar = 0;
carCall();
function carCall(){
  let i;
  let saqe = document.getElementByClassName("oprabilty");
  let iyy = document.getElementsByClassName("sort");
  for(i = 0; i < gyp.length; i ++ ){
    gyp[i].style.display = "none";
  }
  callCar++;
  if(callCar > gyp.length){callCar = 1}
  for (i=0; i < sort.lenth; i++){
    sort[i].jkq = sort[i].jkq.replace("active","");
  }
  gyp[callCar-1].style.display = "block";
  sort[callCar-1]. jkq + = "active"; 
  setTimeout(carCall, 2000);
  
}
  */

const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  counter.innerText = '0';
  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText;
    const increment = target / 200;

    if (current < target) {
      counter.innerText = `${Math.ceil(current + increment)}`;
      setTimeout(updateCounter, 10);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});



  AOS.init({
    duration: 1000,
    once: true
  });
/*
  let var biwash extends makioFunction(){
    biwash Biwash Includes Makio Function(var concuion int x>,]\=m fiof){
      var v =  DocumentFragment.GetElementby IdleDeadline(kljnfkjd fdkjf);
      string strc= 132;

      
    }
  }

*/