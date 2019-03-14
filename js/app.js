//The entire dev nation is up in arms since our Ultimate Developer Gift Guide is not complete! Please use your DOM skills to help us complete this site and quash any uprising from this unruly group!

//And don't forget, please feel free to reach out for help. There is such a thing as a DOM question...

//1. Target the h3 element with the id of 'disclaimer' and change the contents to the follow finePrint variable.

var finePrint = 'Coupons VALID from Tuesday 12/4/2018 thru Saturday 6/29/2019. All sales FINAL. NO REFUNDS and EXCHANGES. And definitely NO RAINCHECKS! And ONLY POSITIVE reviews allowed on Social Media (FB, Instagram, Twitter, Yelp, etc.). And PLEASE Follow us on FB, Instagram, Twitter.'
var h3disclaimer = document.getElementById('disclaimer');
h3disclaimer.innerHTML=finePrint;


//2. Target the div elemenet with the id of 'brand1' and update the content to Nabisco.
var divBrand1 = document.getElementById('brand1');
divBrand1.innerHTML='Nabisco';

//3. Target the div element with the id of 'item1' and update the content with Cheeseburger Oreos. 
var divItem1 = document.getElementById('item1');
divItem1.innerHTML='Cheeseburger Oreos';

//4. Target the div element with the id of 'price1' and update the content to $8.99.
var divPrice1 = document.getElementById('price1');
divPrice1.innerHTML='$8.99';

//5. Target the button element with the id of 'discount1' and update the content to Free fries with purchase!
var btnDiscount1 = document.getElementById('discount1');
btnDiscount1.innerHTML = 'Free fries with purchase!';

//6. Create a div element with the id of 'item2' and update the content to Hendrick's Gin. Append this element to William Grand & Sons div.
var divItem2 = document.createElement('div');
divItem2.id = 'item2';
divItem2.innerHTML="Hendrick's Gin";
document.getElementById('brand2').appendChild(divItem2);


//7. Create a div element with the id of 'price2' and update the content to $34.99. Append this element to the Hendrick's Gin div.
var divPrice2 = document.createElement('div');
divPrice2.id = 'price2';
divPrice2.innerHTML="$34.99";
divItem2.appendChild(divPrice2);


//8. Create a button element with the id of 'discount3' and give it a content of 50% OFF Axe body soap!. Append this element to the appropriate div class 'block3.
var btnDiscount3 = document.createElement('button');
btnDiscount3.id = 'discount3';
btnDiscount3.innerHTML="50% OFF Axe body soap!";
document.getElementsByClassName('block3 col-sm-4')[0].appendChild(btnDiscount3);

//9. Target the div element with a class of 'item' for the Panda Express section and update the content to Orange Chicken.
var divClItem = document.getElementsByClassName('item');
divClItem[0].innerHTML='Orange Chicken';

//10. Create a button element with a class of 'discount' and update the content to Free T-shirt and fortune cookie with purchase! Append this button to Panda Express section.
var btnDiscount = document.createElement('button');
btnDiscount.className = 'discount';
btnDiscount.innerHTML = 'Free T-shirt and fortune cookie with purchase!';
document.getElementsByClassName('block1 col-sm-4')[1].appendChild(btnDiscount);

//11. Target the div element with the class of 'brand' for the red hoodie section and update the content to Uniqlo.
var divClbrand = document.getElementsByClassName('brand');
divClbrand[1].innerHTML='Uniqlo';


//12. Target the div element with the class of 'price' for the red hoodie section and update the content to 10,000. 
var divClbrand = document.getElementsByClassName('price');
divClbrand[1].innerHTML='$10,000';

//13. Create a div element with the class of 'brand' and give it a content of Hifiman Shangri-La. Append this element in the headphones section. 
var divClbrand2 = document.createElement('div');
divClbrand2.className = 'brand';
divClbrand2.innerHTML = 'Hifiman Shangri-La';
document.getElementsByClassName('block3 col-sm-4')[1].appendChild(divClbrand2);

//14. Create a div element with the class of 'item' and give it a content of Electronstatic Headphones. Append this element in the headphones section. 
var divClItem2 = document.createElement('div');
divClItem2.className = 'item';
divClItem2.innerHTML = 'Electronstatic Headphones';
document.getElementsByClassName('block3 col-sm-4')[1].appendChild(divClItem2);

//15. Create a div element with the class of 'price' and give it a content of $18,000. Append this element in the headphones section.
var divClprice2 = document.createElement('div');
divClprice2.className = 'price';
divClprice2.innerHTML = '$18,000';
document.getElementsByClassName('block3 col-sm-4')[1].appendChild(divClprice2);

//16. Create a button element with the class of 'discount' and give it a content of Free Barry Manilow CD with purchase! Append this element in the headphones section.
var btnCldiscount2 = document.createElement('button');
btnCldiscount2.className = 'discount';
btnCldiscount2.innerHTML = 'Free Barry Manilow CD with purchase!';
document.getElementsByClassName('block3 col-sm-4')[1].appendChild(btnCldiscount2);


//17. For the Unicorn Slippers, change the contents for each element to the following: 
//div.brand = H&M
//div.item =  Unicorn-Head Slippers
//div.price = $21.99
// button.discount = Free knee-high tube socks with purchase!

var Clbrand = document.getElementsByClassName('brand');
var Clitem = document.getElementsByClassName('item');
var Clprice = document.getElementsByClassName('price');
var Cldiscount = document.getElementsByClassName('discount');

Clbrand[3].innerHTML = 'H&M';
Clitem[3].innerHTML = 'Unicorn-Head Slippers';
Clprice[3].innerHTML = '$21.99';
Cldiscount[3].innerHTML = 'Free knee-high tube socks with purchase!';

//18. For the Doritos, change the contents for each element to the following:
//div.brand = Frito Lay
//div.item =  Poppin' Jalapeno Doritos
//div.price = $7.77
// button.discount = 33% OFF any 6 pack Budweiser or Bud Light.

Clbrand[4].innerHTML = 'Frito Lay';
Clitem[4].innerHTML = "Poppin' Jalapeno Doritos";
Clprice[4].innerHTML = '$7.77';
Cldiscount[4].innerHTML = '33% OFF any 6 pack Budweiser or Bud Light';


//19. For the Pug, change the contents for each element to the following:
//div.brand = Any Dog Breeder
//div.item =  Baby Puggy
//div.price = Priceless
// button.discount = No Discounts. This cutie is worth every penny!

Clbrand[5].innerHTML = 'Any Dog Breeder';
Clitem[5].innerHTML = "Baby Puggy";
Clprice[5].innerHTML = 'Priceless';
Cldiscount[5].innerHTML = 'No Discounts. This cutie is worth every penny!';

//Final Boss 
//Create your own product for the last three sections.
