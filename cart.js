///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce((accu,curVal)=>{
    return accu + curVal.price;
},0)
console.log(summedPrice);


//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
function calcFinalPrice(cartTotal,couponValue,tax){
    let total = cartTotal * (1 + tax);
    total = total - couponValue;
    return total;
}
console.log(calcFinalPrice(20,10,0.8))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    ·name - a string, the name of the customer, its a string cause names typically tend to be alphabetical
        I chose this so they can be polite and civil when interacting, and to help organize orders, and in case we need to search the system for their activity
    ·id - number, I saw this in the next file and it would make more sense to have this to help find their orders and such    
    ·address - a string, the address, its a string because alpha values and numerical values are used for addresses
    ·cardInfo - a number, so there aren't string characters don't come into too much play when storing it.
    ·curCartItems - an array of all the item names, or IDs of the items put into the cart.
        odds are this would be an array of an object of a pizza object so they can customize the pizza
    ·phoneNum - the customers phone number, a number type, odds are it will be converted to a string later, but this is as to not allow misconception about what the number is, and not have characters to deal with.
        so we can contact them in case anything goes wrong
    ·prefersText - a boolean, I chose this just to add in a boolean example
        so they don't annoy the customer, and the customer has more opportunity to customize their experience
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
let customer1 = {
    name: "john",
    id: 13,
    address: "55 N 30 W Oregon, 83405",
    cardInfo: 123412341234,
    curCartItems: [{name: "Pepperoni",
        toppings: ["pepperoni","sausage"],
        crust: "thick",
        price: 10}],
    phoneNum: 801222333,
    prefersText: true
};