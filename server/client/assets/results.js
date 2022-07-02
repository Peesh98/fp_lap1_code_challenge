function collectResultData() {
    const searchParams = (new URL(document.location)).searchParams;

    getSearchResults();
    
    async function getSearchResults() {
        try{
        const resp = await fetch(`${window.location.origin}/search/results?${searchParams.toString()}`);
        const searchResults = await resp.json();
        populateSearchResults(searchResults);
        } catch (err) {
            alert("Unable to fetch search results!");
        }
    }
}

function populateSearchResults(data) {
    document.getElementById("time-taken").textContent = `About ${data['search_information'].total_results.toLocaleString("en-US")} results (${data['search_information'].time_taken_displayed} seconds)` 
    
    data['organic_results'].forEach(result => {
        document.getElementById(`result${result.position}-heading`).textContent = result.title;
        document.getElementById(`result${result.position}-heading`).href = result.link;
        document.getElementById(`result${result.position}-desc`).textContent = result.snippet;
    });
    
    document.getElementById("question-table").style.display = "none"
    if (data['related_questions'] && data['related_questions'] !== undefined) {
        document.getElementById("question-table").style.display = "block";

        data['related_questions'].forEach(question => {
            const tableRow = document.createElement("tr");
            const tableHead = document.createElement("th")
            const tableRowLink = document.createElement("a");
            tableRow.scope = "row";
            const queryParams = new URLSearchParams({q:question.question})
            tableRowLink.href = `http://localhost:3000/search?${queryParams.toString()}`
            tableRowLink.textContent = question.question;
            tableHead.appendChild(tableRowLink)
            tableRow.appendChild(tableHead)
            document.getElementById("question-table-body").appendChild(tableRow)
        })
    }
}

collectResultData()