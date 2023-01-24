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
        }
    }
    else {
        console.log("Not Working");
    }
}

function updateLightOpacity(myValue){
    document.getElementById("light_range1").innerHTML = myValue;
    console.log(myValue);
    let class_elements = document.querySelector(".light");
    let class_two = Object.values(class_elements.classList);
    if (myValue === '0'){
        // if (class_two.includes("opacity-100")){
            class_elements.classList.remove("opacity-100")
            class_elements.classList.remove("opacity-90")
            class_elements.classList.remove("opacity-75")
            class_elements.classList.remove("opacity-50")
            class_elements.classList.remove("opacity-25")
            class_elements.classList.add("opacity-0")
        // }
    }
    else if (myValue === '1') {
        // if (class_two.includes("opacity")){
            class_elements.classList.remove("opacity-100")
            class_elements.classList.remove("opacity-90")
            class_elements.classList.remove("opacity-75")
            class_elements.classList.remove("opacity-50")
            class_elements.classList.remove("opacity-0")
            class_elements.classList.add("opacity-25")
        // }
    }
    else if (myValue === '2') {
        // if (class_two.includes("opacity-100")){
            class_elements.classList.remove("opacity-100")
            class_elements.classList.remove("opacity-0")
            class_elements.classList.remove("opacity-25")
            class_elements.classList.remove("opacity-75")
            class_elements.classList.remove("opacity-90")
            class_elements.classList.add("opacity-50")
        // }
    }
    else if (myValue === '3') {
        // if (class_two.includes("opacity-100")){
            class_elements.classList.remove("opacity-100")
            class_elements.classList.remove("opacity-0")
            class_elements.classList.remove("opacity-25")
            class_elements.classList.remove("opacity-50")
            class_elements.classList.remove("opacity-90")
            class_elements.classList.add("opacity-75")
        // }
    }
    else if (myValue === '4') {
        // if (class_two.includes("opacity-100")){
            class_elements.classList.remove("opacity-100")
            class_elements.classList.remove("opacity-0")
            class_elements.classList.remove("opacity-25")
            class_elements.classList.remove("opacity-50")
            class_elements.classList.remove("opacity-75")
            class_elements.classList.add("opacity-90")
        // }
    }
    else if (myValue === '5'){
        // if (class_two.includes("opacity-100")){
            class_elements.classList.remove("opacity-0")
            class_elements.classList.remove("opacity-25")
            class_elements.classList.remove("opacity-50")
            class_elements.classList.remove("opacity-75")
            class_elements.classList.remove("opacity-90")

        // }
    }
}

function updateColor(myValue){
    document.getElementById("color_input").innerHTML = myValue;
    console.log(myValue);
    let class_elements = document.querySelector(".light");
    let class_two = Object.values(class_elements.classList);
    if (class_two.includes("from-[#e7e7e9]")){
        class_elements.classList.remove("\bfrom");
        class_elements.classList.add("from-[" + myValue + "]");
        console.log(class_elements.classList);
    }else{
        console.log("Not Working");
    }
}
