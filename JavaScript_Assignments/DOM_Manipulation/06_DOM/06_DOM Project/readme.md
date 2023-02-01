# Final Result of Project 04 of DOM
![final_result](./Result_Images/final_result_06_dom.gif)
 

### **Task 1**
#### Output
![update_logo](./Result_Images/update_logo.png)

#### Code
```
JavaScript

// Update logo
document.querySelector(".logo").src = "./assets/ineuron-logo.png";
document.querySelector(".logo").style.width = "500px";

// Update size of heading and paragraph
document.querySelector(".hero").children[0].style.fontSize = "65px";
```

### **Task 2**
#### Output
![update_price](./Result_Images/update_price.png)

#### Code
```
JavaScript

// Update value
document.querySelector(".app_price").children[0].innerText = "$10";
```