//link

function DNAtoRNA(dna) {
   //if not null, split, forEach if arrary[i]===T, assign U
   if (dna.length >0){
      console.log(dna.length)
     return dna.split('').forEach((letter,idx)=>{
       if(letter==='T') {
         dna[idx]==='U'
       }})
   } else{
      return
   }
 }

 console.log(DNAtoRNA("TTTT"))