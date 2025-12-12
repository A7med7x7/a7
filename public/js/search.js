// filepath: static/js/search.js
const searchInput = document.getElementById("search");
const resultsList = document.getElementById("results");

fetch("/search.json")
    .then((response) => response.json())
    .then((data) => {
        const fuse = new Fuse(data, {
            keys: ["title", "content"],
            threshold: 0.3,
        });

        searchInput.addEventListener("input", (e) => {
            const results = fuse.search(e.target.value);
            resultsList.innerHTML = results
                .map((result) => `<li><a href="${result.item.url}">${result.item.title}</a></li>`)
                .join("");
        });
    });