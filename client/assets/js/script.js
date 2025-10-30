const serverUrl = "http://127.0.0.1:8080/api/fakeid";

const fakeid_read = document.getElementById("fakeid-read");
const fakeid_fill = document.getElementById("fakeid-fill");
const fakeid_item = document.getElementById("fakeid-item");
const interractions = document.getElementById("interractions");

fakeid_fill.addEventListener('click', () => {
    interractions.innerText = "Not implemented yet !!!";
});

fakeid_read.addEventListener('click', () => {
    console.log('clicked');

    fetch(serverUrl)
        .then((response) => {
            if (!response.ok) {
                interractions.innerText = "Failed de acces " + serverUrl;
                throw new Error(`HTTP error ! with Status $(response.status)`);
            }
            // Parse response JSON file
            return response.json();
        })
        .then((data) => {
            console.log(data);

            interractions.innerText = "";
            data.forEach(id => {
                interractions.innerText += "id: " + id._id + "\n";
                interractions.innerText += id.nom + " " + id.prenom + "\n";
                interractions.innerText += "email: " + id.email + "\n";
                interractions.innerText += "\n";
            });
        })
        .catch((error) => {
            console.error('Error parsing JSON:', error);
        })
});

fakeid_item.addEventListener('click', () => {
    interractions.innerText = "Not implemented yet !!!";
});
