var url ='https://bcw.blob.core.windows.net/public/img/sounds/scale-0'

var boombox =document.getElementById('boombox')

function playTune(num){

  var tuneUrl = url
  
    
  if(num  < 10){
    tuneUrl += '0'
  }
  
  tuneUrl += num + '.mp3'
  
  console.log(tuneUrl)
  
  boombox.src = tuneUrl
  boombox.play()
  
}
