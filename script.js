/*let key = Number(prompt("Saheni tapmaq ucun 1- secin        Uzunlugu tapmaq ucun 2- secin           "))
switch (key) {
    case 1:
        let pi = 3.14;
        let r = Number(prompt("radiusu daxil edin:"))
        let s = pi * r * r;
        document.write("Cevrenin sahesi=")
        document.write(s);

        break;
    case 2:
        let pii = 3.14;
        let rr = Number(prompt("radiusu daxil edin:"))
        let sr = pii * 2 * rr
        document.write("Cevrenin uzunlugu=")
        document.write(sr);

        break;

    default:
        break;
}

/*function makeCity(name, population, continent) {
    return {
        name: name,
        population: population,
        continent: continent,
    }
}


let city = makeCity("tokio", 123, "asia");
alert(city.name + " has a population " + city.population + " is situated in  " + city.continent);
function product(costprice, sellprice, inventory) {
    return {
        costprice: costprice,
        sellprice: sellprice,
        inventory: inventory,


    }
}

let product1 = product(32, 40, 100);
document.write("Azersud: " + (product1.sellprice - product1.costprice) * product1.inventory + " azn "); 
function range(Number, min, max) {
    return (
        Number >= min && Number <= max
    )
}
document.write(range(prompt("NUMBERI DAXIL EDIN:"), prompt("min-u daxil edin:"), prompt("max-i daxil edin:"))) */
function product(costprice, sellprice, inventory) {
    return {
        costprice: costprice,
        sellprice: sellprice,
        inventory: inventory,


    }
}

let product1 = product(prompt("cost Price-i DAXIL EDIN:"), prompt("sell Price-i daxil edin:"), prompt("inventory-i daxil edin:"));
document.write("Azersud bu mehsuldan: " + (product1.sellprice - product1.costprice) * product1.inventory + " azn gelir qazanir! ");