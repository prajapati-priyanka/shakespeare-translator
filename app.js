const inputTxt = document.querySelector("#input-txt");

const btnTranslate = document.querySelector("#btn-translate");

const outputTxt = document.querySelector("#output-txt");

// API used for translation
const serverURL= "https://api.funtranslations.com/translate/shakespeare.json";

btnTranslate.addEventListener("click", clickEventHandler);

function constructURL(text){
    return serverURL+"?text="+text;
}
 
//  function for error handling

function errorHandler(error){
     
    console.log("error occured: " ,error);
    alert("Something wrong with the server! Please try again after some time.")

 }




// function for input-output processing

function clickEventHandler(){

    let inputDesc = inputTxt.value
    // console.log(inputDesc);

    // calling server for processing

    fetch(constructURL(inputDesc))
    .then(response => response.json())
    .then(json => {
          
        let translatedText = json.contents.translated;
         outputTxt.innnerText = translatedText;
        //  console.log(json.contents.translated)

    })
    .catch(erronHandler);




}