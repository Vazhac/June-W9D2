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
