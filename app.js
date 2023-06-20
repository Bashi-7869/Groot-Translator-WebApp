// let userName = prompt("Enter User Name")
// let wellcomeMessage = "wellcome to java script " + userName
// alert(wellcomeMessage)

const textInput = document.querySelector('#textinput');
const button = document.querySelector('#button');
const outputDiv = document.querySelector('#output');

// console.log(outputDiv);
//   storing url
let serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

//converting text and addding queryperams and textkey to server URL
function getserverURL(text){
   return serverUrl + "?" + "text=" + text
}


   function clickHandler(){

      // taking input from user
       let inputText = textInput.value;

      //  processing dsta
       fetch(getserverURL(inputText))
       .then(rsponse => rsponse.json())
       .then (json =>{let translatedText = json.contents.translated;
              outputDiv.innerText = translatedText;            // Showing the output to the user
      })
    
   }

button.addEventListener('click', clickHandler);