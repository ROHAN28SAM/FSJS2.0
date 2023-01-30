# Final Result of Project 01 of DOM
![final_result](./Result_Images/final_result_01_dom.png)

### **Task 1** 
#### Output
![hire_me_list_item_added](./Result_Images/hire_me_item.gif)

#### Code
```
JavaScript

const hire_me_item = document.createElement("li");
const textnode = document.createTextNode("Hire Me");
hire_me_item.appendChild(textnode);
document.querySelector("ul").appendChild(hire_me_item);
```

### **Task 2**
#### Output
![search_placeholder_updated](./Result_Images/search_placeholder_updated.gif)

#### Code
```
JavaScript

document.querySelector("input").placeholder = "Search My Project";
```

### **Task 3**
#### Output
![paragraph_text_updated](./Result_Images/para_text-updated.gif)

#### Code
```
JavaScript

document.querySelectorAll("span")[2].innerText = "an Employee";
document.querySelectorAll("span")[3].innerText = "iNeuron Intelligence Pvt Ltd"
```

### **Task 4**
#### Output
![image_updated](./Result_Images/image_updated.gif)

#### Code
```
JavaScript

document.querySelector("img").src = "avtar2.jpg";
```

### **Task 5**
#### Output
![support_button_added](./Result_Images/support_button_added.gif)

#### Code
```
JavaScript

const support_me_button = document.createElement("button");
const textnode1 = document.createTextNode("Support Me");
support_me_button.appendChild(textnode1);
document.querySelector(".hero-right-section-btns").appendChild(support_me_button);
```