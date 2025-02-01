const elts = {
    text1: document.getElementById("text1"),
    text2: document.getElementById("text2")
};

const texts = [
    "See",
    "You",
    "Soon.",
    "Have",
    "a",
    "Great",
    "day!",
    ":)",
];

const morphTime = 1;
const cooldownTime = 0.25;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
    morph -= cooldown;
    cooldown = 0;

    let fraction = morph / morphTime;

    if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
    }

    setMorph(fraction);
}

function setMorph(fraction) {
    elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    fraction = 1 - fraction;
    elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
    morph = 0;

    elts.text2.style.filter = "";
    elts.text2.style.opacity = "100%";

    elts.text1.style.filter = "";
    elts.text1.style.opacity = "0%";
}

function animate() {
    requestAnimationFrame(animate);

    let newTime = new Date();
    let shouldIncrementIndex = cooldown > 0;
    let dt = (newTime - time) / 1000;
    time = newTime;

    cooldown -= dt;

    if (cooldown <= 0) {
        if (shouldIncrementIndex) {
            textIndex++;
        }

        doMorph();
    } else {
        doCooldown();
    }
}

animate();


// Hamburger Menu Logic:
let Hamburgerbutton = document.querySelector(".hamburgerIcon");
let sideMenuButton = document.querySelector(".sideMenu");
let sideMenuCrossBtns = document.querySelectorAll(".crossClass");


Hamburgerbutton.addEventListener("click",()=>{
    sideMenuButton.style.visibility = "visible";

    // Login for remove side bar:
    sideMenuCrossBtns.forEach((elem,index)=>{
        elem.addEventListener("click",()=>{
                 sideMenuButton.style.visibility = "hidden";
             })
    })
})

// Skills Btn Hover Effects:
let SkillsBtns = document.querySelectorAll(".hoverBtn");
let skillsLists = document.querySelector(".skillsLists");
let educationSection = document.querySelector(".educationSection");


for(let i=0;i<2;i++){
    SkillsBtns[i].addEventListener("click",()=>{
        if(i==0){
            if(SkillsBtns[i+1].style.color === "white"){
                SkillsBtns[i+1].style.color = "#c9c9c9";
                educationSection.style.display = "none";
            }
            SkillsBtns[i].style.color = "white";
            skillsLists.style.display = "flex";
        }
        else{
            if(SkillsBtns[i-1].style.color === "white"){
                SkillsBtns[i-1].style.color = "#c9c9c9";
                skillsLists.style.display = "none";
            }
            SkillsBtns[i].style.color = "white";
            educationSection.style.display = "flex";
        }
    })
}


// Submit Button Logic:

// localStorage.clear();
let dataArr = JSON.parse(localStorage.getItem("dataArr")) || new Array();
let inputFields = document.querySelectorAll(".inputField");
let submitBtn = document.querySelector(".submitBtn");

submitBtn.addEventListener("click",()=>{
    let email="",subject="",message="";

    inputFields.forEach((elem,ind)=>{
        console.log(elem.value);

        if(ind==0) email=elem.value;
        else if(ind==1) subject=elem.value;
        else message=elem.value;

        elem.value = " ";
    })
    dataArr.push({email,subject,message});
    localStorage.setItem("dataArr",JSON.stringify(dataArr));
    console.log(dataArr);
})


// Gihub Section:

const boxContainer = document.querySelector(".boxContainer");
for(let i = 0; i<365; i++){

    const list = [
      0, 1, 2, 3, 41, 42, 43, 44, 82, 83, 123, 124, 125, 126, 164, 165, 166, 167,
      205, 206, 246, 247, 287, 288, 5, 6, 46, 47, 87, 88, 128, 129, 169, 170, 210,
      211, 251, 252, 292, 293, 8, 9, 14, 15, 49, 50, 51, 90, 91, 92, 131, 132,
      133, 134, 172, 173, 213, 214, 254, 255, 295, 296, 175, 176, 217, 177, 218,
      259, 55, 56, 96, 97, 137, 138, 178, 179, 219, 220, 260, 261, 217, 218, 259,
      260, 261, 301, 302, 17, 18, 19, 58, 59, 60, 61, 99, 100, 102, 103, 140, 141,
      144, 181, 182, 185, 222, 223, 225, 226, 263, 264, 265, 266, 304, 305, 306,
      24, 25, 65, 66, 67, 106, 107, 108, 147, 148, 149, 150, 188, 189, 229, 230,
      270, 271, 311, 312, 67, 108, 149, 150, 191, 232, 192, 233, 274, 234, 275,
      316, 194, 235, 276, 154, 195, 236, 73, 114, 155, 33, 34, 74, 75, 115, 116,
      156, 157, 197, 198, 238, 239, 279, 280, 320, 321, 36, 37, 38, 39, 77, 78,
      79, 80, 118, 119, 159, 160, 161, 162, 200, 201, 202, 203, 241, 242, 282,
      283, 284, 285, 323, 324, 325, 326,
    ];
  
  
    const el = document.createElement("div")
    el.classList = list.includes(i) ? "box active" : "box"
    boxContainer.appendChild(el)
  }


//   Scroll Animation:

console.log('ScrollReveal available:', window.ScrollReveal);

// Then modify your ScrollReveal initialization
const sr = ScrollReveal({
    distance: "60px",
    duration: 2500,
    delay: 400,
});

// Add reveals with specific configurations
sr.reveal(".hero-main", {
    duration: 2000,
    delay: 200
});

sr.reveal(".hero-annimation", {
    duration: 2000,
    origin: "right",
    distance: "100px"
});







