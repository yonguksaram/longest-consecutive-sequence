module.exports =    function longestConsecutiveLength(array) {
  var newArray = array.concat();
  newArray.sort(function compareNumeric(a, b) {
return a - b;
});
  var count = 1;
  var lengthOfSequence = 0;
  for (var i=0;i<newArray.length;i++){
    if(newArray[i+1]==newArray[i]) {
      continue;
    }
    if(newArray[i+1]-newArray[i]==1) {
      count++;
    } else {
      if(count>lengthOfSequence){
        lengthOfSequence = count;
      }
        count = 1;
      
    }
  }
return lengthOfSequence;
}