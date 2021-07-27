const loadPage = () => {
    const container = document.createElement("container");
    container.className = "container";
    // adding css features to JavaScript
    container.style.display = "flex"; // flex need to be in a string
    container.style.alignItems = "center";
    container.style.flexDirection = "column";
    container.style.marginTop = "25px";
    document.body.appendChild(container);
}

const createPageElement = () => {
    const h1 = document.createElement("h1");
    h1.innerText = "Catstagram";
    const img = document.createElement("img");
    img.style.maxWidth = "50%";
    const container = document.querySelector(".container")
    const newKitten = generateNewKitten();
    // adding elements into the container from line 11.
    container.appendChild(h1);
    container.append(newKitten);
    container.appendChild(img);
}


const fetchImage = async () => {

    try {
        const kittenResponse = await fetch("https://api.thecatapi.com/v1/images/search?size=small");

        const kittenData = await kittenResponse.json();

        const kittenImgUrl = kittenData[0].url;
        const kittenImg = document.querySelector("img");
        kittenImg.src = kittenImgUrl;
    } catch (e) {
        console.log("Failed to fetch image", e);
    }
};

const generateNewKitten = () => {
    const button = document.createElement("button");
    button.id = "new-kitten";
    button.innerText = "New Kitten";
    button.addEventListener("click", fetchImage) // how you want the button to function
    return button;
}

// loading the functions to the windows browser.
window.onload = () => {
    loadPage();
    createPageElement();
    fetchImage();
}
