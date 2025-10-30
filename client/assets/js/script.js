const serverUrl = "http://127.0.0.1:8080/api/fakeid";

const fakeid_read = document.getElementById("fakeid-read");
const fakeid_fill = document.getElementById("fakeid-fill");
const fakeid_item = document.getElementById("fakeid-item");
const interractions = document.getElementById("interractions");

fakeid_fill.addEventListener('click', () => {
    interractions.innerText = "Not implemented yet !!!";
});

/* Create a new fakeid card and returns its new object */

function createIdCard(id) {
    const fakeid = document.createElement('div');
    fakeid.classList.add('fakeid');

    const name = document.createElement('div');
    name.classList.add('id-name');
    name.innerText = id.nom + " " + id.prenom;
    fakeid.append(name);

    const email = document.createElement('div');
    email.classList.add('id-email');
    email.innerText = "email: " + id.email;
    fakeid.append(email);

    const idNumber = document.createElement('div');
    idNumber.classList.add('id-number');
    idNumber.innerText = "id: " + id._id;
    fakeid.append(idNumber);

    return fakeid;
}

fakeid_read.addEventListener('click', () => {
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

            // Clear interraction content
            interractions.innerText = "";

            // Fill in with the database content
            data.forEach(id => {
                const card = createIdCard(id)
                interractions.append(card);
            });
        })
        .catch((error) => {
            console.error('Error parsing JSON:', error);
        })
});

fakeid_item.addEventListener('click', () => {
    const fakeidNumber = document.getElementById('fakeid-number');

    // Get content and removes leading/trailing spaces
    const content = fakeidNumber.value.trim();

    // Check for correct length
    if (content.length != 24) {
        interractions.innerText = "Enter a valid id !!!";
        return;
    }

    fetch(serverUrl + "/" + content)
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

            // Clear interraction content
            interractions.innerText = "";

            // Create the fakeid card
            const card = createIdCard(data);
            interractions.append(card);
        })
        .catch((error) => {
            console.error('Error parsing JSON:', error);
        })
});
