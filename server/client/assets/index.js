const searchText = document.getElementById("searchtext")
searchText.addEventListener('keydown', (e) => {
    if (e.key === "Enter") {
        search;
    };
});

if (window.location.href === `${window.location.origin}/` || window.location.href === `${window.location.origin}/index.html`) {
    const searchInput = document.getElementById("searchinput");
    searchInput.addEventListener('submit', search);
};

function search(e) {
    e.preventDefault();
    if (e.target.searchtext.value.trim() && e.target.searchtext.value.trim() !== undefined) {
        const searchParams = new URLSearchParams ({
            q: e.target.searchtext.value.trim()
        });

        // const searchURL = `${window.location.origin}/search?${searchParams.toString()}`;

        if (e.submitter.name === "search") {
            window.location.href = `${window.location.origin}/search?${searchParams.toString()}`;
        } else {
            fetch(`${window.location.origin}/search/results?${searchParams.toString()}`)
            .then(res => res.json())
            .then(data => {window.location.href = data['organic_results'][0]['link'];})
            .catch(console.warn);
        };
    };
};