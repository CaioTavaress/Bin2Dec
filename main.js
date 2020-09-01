
   const BIN = document.getElementById('binary-value')
   const DEC = document.getElementById('decimal-value') 
   document.getElementById('convert-bin').addEventListener('click', () => {
      let convertToDec = parseInt(BIN.value, 2);
      DEC.value = convertToDec
   })