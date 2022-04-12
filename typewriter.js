//writing a function that will animate by generating one letter after the next

const sentence = 'hello there from lighthouse labs';
//loop through each letter and return the sentence
let timer = 0;
for (let i = 0; i < sentence.length; i++) {
  timer+=50
  setTimeout(() => {
    if (i === sentence.length - 1) {
    process.stdout.write(sentence[i] + '\n')
  } else {
    process.stdout.write(sentence[i]);
  }
  } , timer)
}


  //returns the entire line after 1000ms}
//process.stdout.write('\n')
// instead need to return one letter at a time every 50ms
// to loop through setTimeout for it to run for each letter
// need to increment setTimeout by 50ms

