


let btn = document.querySelector('.btn')
let message = document.querySelector('.message')



btn.addEventListener('click',()=>{
 let text = message.value
  if( text.replaceAll(' ','') !== '') {
    axios.get(`https://api.callmebot.com/whatsapp.php?phone=237695068073&text=${text}&apikey=6796605`)
  .then(response => {
   console.log("success");
  })
  .catch(error => {
    // Gérer les erreurs ici
   console.log(error);
  });
  }else{
    alert("renseignez un message")
  }
    
})
