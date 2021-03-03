module.exports = function check(str, bracketsConfig) {
  let stek = [];
    
  for (item of str)
  {
      for (bracket of bracketsConfig)
      {
          if(item === bracket[0] && item !== bracket[1])
          {
              stek.push(item)
          }
          else if(item === bracket[1] && item !== bracket[0])
          {
               let currentItem  = stek.pop()
               if(currentItem !== bracket[0]){
                   return false;
               }

          }
          else if (item === bracket[0] && item === bracket[1])
          {
              if(stek[stek.length-1] === item)
              {
                  stek.pop()
              }
              else{
                  stek.push(item)
              }
          }
          
      }
  }
  return !stek.length
}
