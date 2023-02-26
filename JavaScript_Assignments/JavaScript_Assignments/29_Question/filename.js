// Write a javascript program which takes the input of filename as string and prints the extension of the file in the console.

function getExtension(file_name){
    let file_name_without_extension = file_name.split(".")[0]
    let extension = file_name.split(".")[1]
    console.log("File Name is", file_name_without_extension);
    console.log("Extension is", extension);
}

getExtension("Script.js");