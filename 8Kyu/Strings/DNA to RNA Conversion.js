//https://www.codewars.com/kata/5556282156230d0e5e000089/javascript

function DNAtoRNA(dna) {
   return dna.replace(/'t'/gi,'U')
  }

   //if not null, split, forEach if arrary[i]===T, assign U
   /*let dnArray=[]
   if (dna.length >0){
      //console.log(dna.length)
      dnArray = dna.split('')
      //console.log(dnArray)
      return dnArray.map((letter,idx)=>{
         if(letter==='T'){ 
            dnArray[idx]='U';
         }}).join('')
      }
   }
   console.log(DNAtoRNA("TTTT"))*/

/*function DNAtoRNA(dna) {
   //if not null, split, forEach if arrary[i]===T, assign U
   if (dna.length >0){
      console.log(dna.length)
      return dna.split('').map((letter,idx)=>{
         if(letter==='T') {
            console.log('Tee');
         dna[idx]='U';
         console.log(dna[idx])
         } 
      })
   }
   }*/
 console.log(DNAtoRNA("TTTT"))
 // incomplete