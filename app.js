// let userName = prompt("Enter User Name")
// let wellcomeMessage = "wellcome to java script " + userName
// alert(wellcomeMessage)

const textInput = document.querySelector('#textinput');
const button = document.querySelector('#button');
const outputDiv = document.querySelector('#output');

//   storing url
let serverUrl = "https://api.funtranslations.com/translate/groot.json"

 
//converting text and addding queryperams and textkey to server URL
 function getserverURL(text){
   return serverUrl + "?" + "text=" + text
}

button.addEventListener('click',(clickHandler) => {
    // taking input from user
    let inputText = textInput.value;

   //  processing dsta
    fetch(getserverURL(inputText))
    .then(response => response.json())
    .then (json =>{let translatedText = json.contents.translated;
           outputDiv.innerText = translatedText;            // Showing the output to the user
   })
    
//  When error occured error handling
   .catch(errorHandler)

});
    


