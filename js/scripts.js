var pageCounter = 1;
var animalContainer = document.getElementById("animal-info");
btn = document.getElementById("btn");

btn.addEventListener("click", request);

function request() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
    ourRequest.onload = function() {
        ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    };
    ourRequest.send();
    pageCounter++;

    if (pageCounter > 4) {
        animalContainer.insertAdjacentHTML('beforeend', "No more animals");
        btn.classList.add("hide-me");
        ourRequest.abort();
    }
}

function renderHTML(data) {
    var htmlString = "";

    for (var i = 0; i < data.length; i++) {
        htmlString += "<p>My name is " + data[i].name + " and I am a " + data[i].species + ". I like " +
         data[i].foods.likes + " and I hate " + data[i].foods.dislikes + ".</p>";
    }

    animalContainer.insertAdjacentHTML('beforeend', htmlString);
}