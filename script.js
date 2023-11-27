// \n
// \r
// \t
// replace() / repeat() / concat()
// trim () / padStart()/padEnd() / includes()
// startsWith()/endsWith() / substring() / indexOf()
// lastIndexOf() /

// let str = 'Webbrain';

// console.log(str.substring(1, 5));
 

// let str = '   schooL';

// console.log(str.trim().toLowerCase().endsWith('l'));
// console.log(str.trim().toLowerCase().includes('l'));
// console.log(str.trim().toLowerCase()[str.trim().length - 1] === 'l');

// let newStr = str.trim().toLowerCase();
// let result = newStr[newStr.length - 1] === 'l';

// console.log(result);

// let str1 = 'Web';
// let str2 = 'Brain';

// let yangiUzgaruvchi = str1;

// str1 = str2;
// str2 = yangiUzgaruvchi;

// console.log(str1);
// console.log(str2);

// let yil = 2001;

// yil % 4 === 0 && console.log('Kabisa yili');
// yil % 4 !== 0 && console.log('Kabisa yili emas!');


// regex

// let str = '1WeBbr4AiN10';
// let arr = ['a', 'b', 'c']

// terminal => WBAN

// let result = str.match(/[A-Z]/g).join(""); => katta xarflarni yigib beradi
// let result = str.match(/[a-z]/g).join(""); => kichkina xarflarni yigib beradi
// let result = str.match(/[0-9]/g); => sonlarni ajratib beradi

// match => string metodi, regex bilan ishlaydi va mos kelgan qiymatlarni ajratib beradi
// /[A-Z]/g => bu xolatda 'g' global degan manoda

// console.log(typeof result);

// let str = 'Web Brain Web Web Web Web Web';
// let result = str.replace(/Web/g, "IT");

// console.log(result);
// DRY => don't repeat yourself
// function => malum muammoni xal qilish uchun kodlar majmuasi
// function types => decloration, expression, arrow

// function decloration

// function example() {
    
//    return 10 + 10
    
// }

// console.log(example());
// console.log(example());

////////////////////////////////////////////////////////////

// function expression yoki anonymous

// var example = function () {
//     return 'Salom G24';
// }

// console.log(example());

/////////////////////////////////////////////////////////////////

// arrow function

// var example = () => { return 'Salom G24' };
// var example = () => 'Salom G24';

// console.log(example());

// decloration function => hoisting buladi
// expression function => hoisting bulmaydi
// arrow function => hoisting bulmaydi, va qachonki {} bulmasa return keywordi ni talab qilmaydi, avtoReturn xususiyati mavjud

// parametr va argument

// function person(name = 'Test', age = 25) {
    
//     console.log(`Name: ${name} Age: ${age}`);
    
// }

// person("Foziljon", 'Student', 27);
// person("Shuxratjon", 'Mentor', 25);
// person("Madina", 'Developer', 16);
// person();

// reusabilty => qayta-qayta foydalanish

// karra jadvali

// 1 x 1 = 1
// 1 x 2 = 2
// 1 x 3 = 3
// 1 x 10 = 10

//////////////////////////

// 2 x 1 = 2
// 2 x 10 = 20

//////////////////////////

// 3 x 1 = 3
// 3 x 10 = 30

//////////////////

// 10 x 1 = 10
// 10 x 10 = 100




