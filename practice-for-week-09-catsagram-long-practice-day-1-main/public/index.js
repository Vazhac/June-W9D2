const add = document.getElementById("add");
add.addEventListener("click", async () => {
    try {
        const res = await fetch("https://thecatapi.com/")
        const data = await res.json();
        debugger;
        // URL of new dog image
        const url = data.message;

        const breed = url.split('/')[4];
        // Create element to inject
        const newCat = document.createElement("li");
        const newFigure = document.createElement("figure");
        const newImg = document.createElement("img");
        newImg.src = url;
        const newCaption = document.createElement("figcaption");
        newCaption.innerText = breed;
        newFigure.appendChild(newImg);
        newFigure.appendChild(newCaption);
        newDog.appendChild(newFigure);
        // Inject element into correct location
        const ul = document.getElementsByTagName("ul")[0];
        ul.appendChild(newCat);
        // other way of doing it but unsafe, do not use:
        // ul.innerHTML += `
        //     <li>
        //         <figure>
        //             <img src="${url}"/>
        //             <figcaption>${breed}</figcaption>
        //         </figure>
        //     </li>
        // `;
    } catch (e) {
        console.log("Couldn't fetch cat :(")
    }
});
