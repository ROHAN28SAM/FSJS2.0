function updateLight(myValue){
    document.getElementById("light_range").innerHTML = myValue;
    console.log(myValue);
    let class_elements = document.querySelector(".light");
    let class_one = Object.values(class_elements.classList);
    if (myValue === '0'){
        if (class_one.includes("h-[350px]")){
            class_elements.classList.add("bg-none");
        }
    }
    else if (myValue === '1'){
        if (class_one.includes("h-[350px]")){
            class_elements.classList.remove("bg-none");
            class_elements.classList.remove("w-[150px]")
            class_elements.classList.remove("w-[200px]")
            class_elements.classList.remove("w-[250px]")
            class_elements.classList.add("h-[350px]");
            class_elements.classList.add("w-[80px]");
        }
    }
    else if (myValue === '2'){
        if (class_one.includes("h-[350px]")){
            class_elements.classList.remove("bg-none");
            class_elements.classList.remove("w-[80px]")
            class_elements.classList.remove("w-[200px]")
            class_elements.classList.remove("w-[250px]")
            class_elements.classList.add("h-[350px]");
            class_elements.classList.add("w-[150px]");
        }
    }
    else if (myValue === '3'){
        if (class_one.includes("h-[350px]")){
            class_elements.classList.remove("bg-none");
            class_elements.classList.remove("w-[80px]")
            class_elements.classList.remove("w-[150px]")
            class_elements.classList.remove("w-[250px]")
            class_elements.classList.add("h-[350px]");
            class_elements.classList.add("w-[200px]");
        }
    }
    else if (myValue === '4'){
        if (class_one.includes("h-[350px]")){
            class_elements.classList.remove("bg-none");
            class_elements.classList.remove("w-[80px]")
            class_elements.classList.remove("w-[150px]")
            class_elements.classList.remove("w-[200px]")
            class_elements.classList.add("h-[350px]");
            class_elements.classList.add("w-[250px]");
        }
    }
    else if (myValue === '5'){
        if (class_one.includes("h-[350px]")){
            class_elements.classList.remove("bg-none");
            class_elements.classList.remove("w-[80px]");
            class_elements.classList.remove("w-[150px]");
            class_elements.classList.remove("w-[200px]");
            class_elements.classList.remove("w-[250px]");
            class_elements.classList.add("h-[350px]");
            class_elements.classList.add("w-[350px]")
        }
    }
    else {
        console.log("Not Working");
    }
}