const serverUrl = "http://127.0.0.1:8080/api/fakeid";

const fakeid_read = document.getElementById("fakeid-read");
const interractions = document.getElementById("interractions");

fakeid_read.addEventListener('click', ()=> {
    console.log('clicked');

    fetch(serverUrl)
    .then((response)=> {
        if (!response.ok) {
            interractions.innerText = "Failed de acces " + serverUrl;
            throw new Error(`HTTP error ! with Status $(response.status)`);
        }
        // Parse response JSON file
        return response.json();
    })
    .then((data)=> {
        console.log(data);
    })
    .catch((error) => {
        console.error('Error parsing JSON:', error);        
    })
});
