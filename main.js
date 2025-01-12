// const ism = prompt ("Enter your name: ");
// console.log(ism.split("").reverse("").join(""));
const arr = ['olma','Banan','Gilos','Shaftoli'];
console.log(arr);
alert(`Boshlanishi Arryning uzunligi: ${arr.length}`);
if (confirm(`Sizning arrayingizdan malumotlarni olib tashlamoqchimiz`)) {
    arr.pop();
}

alert(`Arryning uzunligi ${arr.length}`);