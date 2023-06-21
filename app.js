// let userName = prompt("Enter User Name")
// let wellcomeMessage = "wellcome to java script " + userName
// alert(wellcomeMessage)

const textInput = document.querySelector('#textinput');
const button = document.querySelector('#button');
const outputDiv = document.querySelector('#output');

//   storing url
let serverUrl = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

//converting text and addding queryperams and textkey to server URL
function getserverURL(text){
   return serverUrl + "?" + "text=" + text
}

button.addEventListener('click', (clickHandler) =>{
    // taking input from user
       let inputText = textInput.value;

   //  processing dsta
     fetch(getserverURL(inputText))
      .then(rsponse => rsponse.json())
      .then (json =>{let translatedText = json.contents.translated;
             outputDiv.innerText = translatedText;            // Showing the output to the user
      })
      //  When error occured error handling
        .catch(errorHandler)
});
 
function errorHandler(error){
   console.log("error occurred", error);
   alert("Someting Went Wrong With Server! try again after some time")
}
   
   