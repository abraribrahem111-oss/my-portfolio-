 var typed = new Typed("#typing", {
                strings:["Front-End Developer" , "Web Design" , "Freelancer"],
            typeSpeed: 80 ,
            backSpeed: 50 ,
            loop: true
         });

const listBtn = document.getElementById("listBtn");
const navList = document.getElementById("navList");

listBtn.addEventListener("click", () => {
  navList.classList.toggle("active");
});