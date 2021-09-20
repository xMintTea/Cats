const button = document.querySelector(".btn");
const image = document.querySelector(".img");
const url = "http://aws.random.cat/meow";


async function fetchHandler() {
    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)

        image.src = data.file
    } catch(error) {
        console.log("Error")
    }
}

button.addEventListener("click", () => {
    let isLoaded = image.complete;
    if (isLoaded) {
        fetchHandler();
    }
})