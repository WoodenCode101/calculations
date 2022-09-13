let value1 = prompt("Enter the 1st Number:");
let value2 = prompt("Enter the 2nd Number:");

// //eta korar por dekhbo j number duto pasha pashhi asche . karon amra user er kache jai input nei seta string akare amader kache ase ta setake amader number e convert kore nite hobe parseInt use kore.

value1 = parseInt(value1);
value2 = parseInt(value2); //int e convert kore nilam.

const plus = value1 + value2;
document.write("Addition = " + plus + "<br>"); //shudhu plus ta likhle output chole asbe. amra jodi chai j erokom likhe ans asuk j "The ans is: 55" tale setake " " er moddhe string akare likhe akta + sign die tarpor variable er name ta likhte hobe tahole e orokom asbe. R jodi chai j akta line break hok tahole amra akta + die " " er moddhe <br> tag use korte pari. Even amra j kono tag e use korte pari okhane.

const minus = value1 - value2;
document.write("Substraction = " + minus + "<br>");

const Multiplication = value1 * value2;
document.write("Multiplication = " + Multiplication + "<br>");

const Division = value1 / value2;
document.write("Division = " + Division + "<br>");

const Mod = value1 % value2;
document.write("Modulus = " + Mod + "<br>");