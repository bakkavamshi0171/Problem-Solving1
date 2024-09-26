// 1) WAP to print the numbers from 10 to 1 without using >= operator.


for (i = 10 ; !(i == 0) ; i--){
    console.log(i);
}

// 2) WAP to print the numbers from -1 to -10 without using >= operator.

for (i=-1; !(i == -11 ); i--){
    console.log(i);
}

// 3) WAP to print the numbers from -10 to -1 without using <= operator.

for (i=-10; !(i == 0); i++){// ! reverse(false) = true condition needs to be false covert with ! to true
    console.log(i);
}

// wap check a number wheather it is even or not  without using % operator or "&";
let number=99;
if (number/2 === parseInt(number/2)){
    console.log(`${number} is a even number`);
}else{
    console.log(`${number} is not a even number`)
}

