let sumaArray = 0;

for(let i = 2; i < process.argv.length; i++) {
  sumaArray += Number(process.argv[i])
}

console.log(sumaArray);