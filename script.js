// String => '', "", ``

// let str = 'Webbrain';

// console.log(str.length);  // textni uzunlik, xar doim 1 dan boshlanadi
// console.log(str[1]); // xarflarni joylashuv urni, xar doim 0 dan boshlanadi

// console.log(str[str.length-1]);

// '' vs ""

// let str = 'Webbrain uquv "markaz" ';
// let str = " Webbrain 'uquv' 'markaz'  ";

// console.log(str);

// let str = `web brain`;

// console.log(str);

// ""/'' vs ``

// let name = 'Foziljon';
// let status = 'Student';
// let result = "Mening ismim:" + " " + name + " " + "Status:" + " " + status;
// let result = `Mening ismim: ${name} status: ${status}`;

// console.log(result);

// console.log(`${5} + ${5}`); // 5 + 5

// \t, \n, \r

// let str = 'Webbrain';
// let result = 'Webbrain \t academy';  => tab 4 ta bush joy tashaydi
// let result = 'Webbrain \n academy'; => new line, yangi qatorga utkazadi
// let result = 'Webbrain \r academy uquv markaz '; => faqat ung tarafdagi textni korsatadi

// console.log(result);

// string methods(funksiya);

// let str = 'Webbrain';

// console.log(str.toLowerCase()); => kichkina xarfga ugiradi
// console.log(str.toUpperCase()); => katta xarfga ugiradi
// console.log(str.trim()); => ikki tarafdagi bosh joyni yuqotib beradi
// console.log(str.startsWith('W')); => text qaysi xarf bilan bowlangani tekshiradi, boolean qiymat qaytaradi
// console.log(str.endsWith('y')); => text qaysi xarf bilan tugaganini tekshiradi, boolean qiymat qaytaradi
// console.log(str.padStart(12, 'a')); => boshidan malumot qushish
// console.log(str.padEnd(20, '.')); // => oxiridan malumot qushish
// console.log(str.replace('Web', "IT")); => almashtirish, 1-qiymat nimani almashtirish, 2-qiymat nimaga almashtirish
// console.log(str.replace('Web', "100")); => almashtirish, 1-qiymat nimani almashtirish, 2-qiymat nimaga almashtirish
// console.log(str.repeat(100)); => takrorlab chiqarib beradi, faqat raqam oladi
// console.log(str1.concat(" ",'ITBrain')); => qushish
// console.log(str.includes('brain')); => boolean qaytaradi, text da malum qiymat bor yuqligin tekshirib beradi
// console.log(str.indexOf('n')); => malum bir element ni qaysi index daligini korsatadi
// console.log(str.indexOf('b')); => birinchi kelayotgan elementni indexini oladi
// console.log(str.lastIndexOf('b'));  => oxirgi kelayotgan elementni indexini oladi
// console.log(str.charAt(0)); => malum indexda qanaqa element borligini korsatadi
// console.log(str.substring(1, 4)); // 1-qiymat boshlangich index, 2-qiymat oxirgi index

// const str = 'Webbrain Academy Webbrain';
// console.log(str.replace("Web", "IT"));








