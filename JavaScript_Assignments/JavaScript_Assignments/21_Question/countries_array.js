// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

let countries_name = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Ethiopia"];

function check_country(country_name){
    if (countries_name.includes(country_name)){
        console.log(country_name.toUpperCase())
    } else {
        countries_name.push(country_name);
        console.log(countries_name);
    }
}

check_country("Ethiopia");