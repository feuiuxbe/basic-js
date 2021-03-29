const CustomError = require("../extensions/custom-error");

module.exports = function transform(arrayToTransform) {

if (arrayToTransform === undefined || !Array.isArray(arrayToTransform)) {
  throw new Error('Hello, this is error');
}

let copyOf_arrayToTransform = arrayToTransform.map(x => x);
let transformedArray = [];

let i = 0;
while (i !== -1){

  let k = copyOf_arrayToTransform[i];
  switch (k) {
      case "--discard-prev":
          if (i !== 0){
              copyOf_arrayToTransform.splice(i-1,1);
              i--;
          }
          break;
      case "--discard-next":
          if ((i+1) < copyOf_arrayToTransform.length){
              copyOf_arrayToTransform.splice(i+1,1);
          }
          break;
      case "--double-prev":
          if (i !== 0){
              copyOf_arrayToTransform.splice(i-1,0,copyOf_arrayToTransform[i-1]);
              i++;
          }
          break;
      case "--double-next":
          if ((i+1) < copyOf_arrayToTransform.length){
              copyOf_arrayToTransform.splice(i+1,0,copyOf_arrayToTransform[i+1]);
          }
          break;
      default:
  }
  i++;
  if (i >= copyOf_arrayToTransform.length) {
    i = -1;
  }
}

for (let k of copyOf_arrayToTransform){
    if ((k !== "--discard-prev")&&((k !== "--discard-next"))&&(k !== "--double-prev")&&(k !== "--double-next")){
        transformedArray.push(k);
    }
}

return transformedArray;
}