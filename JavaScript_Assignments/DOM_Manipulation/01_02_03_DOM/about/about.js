// task 1 code
document.querySelectorAll("a")[2].innerText = "Projects";

// task 2 code

// create div 
const new_div = document.createElement("div");
new_div.classList.add("accordian");
document.querySelector(".accordian-wrapper").appendChild(new_div);
// create h3
const skills_title = document.createElement("h3");
const textnode1 = document.createTextNode("Skills");
skills_title.appendChild(textnode1);
document.querySelectorAll(".accordian")[4].appendChild(skills_title);
// create p
const skills_para = document.createElement("p");
const textnode2 = document.createTextNode("I posses a very good command over the Full Stack Development technologies like MERN which can be seen in my work over the Github.")
skills_para.appendChild(textnode2);
document.querySelectorAll(".accordian")[4].appendChild(skills_para);

// Display
let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});