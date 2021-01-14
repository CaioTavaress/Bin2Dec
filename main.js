
   const BIN = document.getElementById('binary-value')
   const DEC = document.getElementById('decimal-value') 
   document.getElementById('convert-bin').addEventListener('click', () => {
      if(BIN.value != 0 || BIN.value != 1){
      alerta('Insira um valor binário válido')
      } else {
   DEC.value = parseInt(BIN.value, 2);
     }
   })
