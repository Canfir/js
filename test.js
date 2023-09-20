const sort = (arr) => {
  for (let j = arr.length - 1; j > 0; j--) {
    for (let i = 0; i < j; i++) {
      if (arr[i] > arr[i + 1]) {
        let vr = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = vr;
      }
    }
  }
  return arr
}
console.log( "Я запущен" )
const mas = []
for (let i = 0; i < 10000; i++) {
    mas.push(Math.random()*10000)
}
console.log( mas )
sort(mas)
console.log( mas )