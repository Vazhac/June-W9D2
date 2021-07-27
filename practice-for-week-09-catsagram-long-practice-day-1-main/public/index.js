const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {

        const res = await fetch("https://thecatapi.com/")
        const data = await res.json();
        const url = data.data.url;

        // Create element to inject
        const newImg = document.getElementById("Kitten");
        newImg.src = url;

        // Inject element into correct location
    } catch (e) {
        console.log("Couldn't fetch cat :(")
    }
});
