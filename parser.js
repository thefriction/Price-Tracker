const nightmare = require ('nightmare')()
const args = process.argv.slice(2);
const URL = args[0];
const price = args[1];
console.log(URL);
console.log(price);
const id = "priceblock_dealprice" ;


async function checkPrice()
{
    const priceString = await nightmare.goto(URL)
                        .wait("#priceblock_dealprice")
                        .evaluate(()=> document.getElementById("priceblock_dealprice").innerText)
                        .end()

    console.log(priceString);
    
    const priceNumber =  parseFloat(priceString.replace(/₹|,/g,''));
    console.log(priceNumber);
    console.log("Price is "+price);



}
checkPrice();