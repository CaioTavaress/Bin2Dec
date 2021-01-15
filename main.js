
   const BIN = document.getElementById('binary-value')
   const DEC = document.getElementById('decimal-value') 
   document.getElementById('convert-bin').addEventListener('click', () => {
      
   DEC.value = parseInt(BIN.value, 2)
     
   })
