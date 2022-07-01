const searchInput = document.getElementById("searchinput");

searchInput.addEventListener('keydown', e => {
    if(e.key == "Enter"){
        e.preventDefault();
        if (searchtext.value.trim() && searchtext.value.trim() !== undefined) {
            const searchParams = new URLSearchParams ({
                q: searchtext.value.trim()
            });
            window.location.href = `${window.location.origin}/search?${searchParams.toString()}`;
        };
    };
});

searchInput.addEventListener('submit', search);

function search(e) {
    e.preventDefault();
    const query = searchtext.value;
    if (searchtext.value.trim() && searchtext.value.trim() !== undefined) {
        const searchParams = new URLSearchParams ({
            q: searchtext.value.trim()
        });

        if (e.submitter.name === "search") {
            window.location.href = `${window.location.origin}/search?${searchParams.toString()}`;
            document.getElementById("searchtext").textContent = query;
        } else {
            fetch(`${window.location.origin}/search/results?${searchParams.toString()}`)
            .then(res => res.json())
            .then(data => {window.location.href = data['organic_results'][0]['link'];})
            .catch(console.warn);
        };
    };
};