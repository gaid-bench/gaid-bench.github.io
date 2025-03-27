document.addEventListener("DOMContentLoaded", function () {
    fetch("jsons/papers.json")
        .then(response => response.json())
        .then(data => {
            const papersContainer = document.getElementById("papers-container");
            const yearFilter = document.getElementById("yearFilter");

            // Sort papers by year (newest first)
            data.sort((a, b) => b.year - a.year);

            // Populate year filter dropdown
            const uniqueYears = [...new Set(data.map(paper => paper.year))].sort((a, b) => b - a);
            uniqueYears.forEach(year => {
                const option = document.createElement("option");
                option.value = year;
                option.textContent = year;
                yearFilter.appendChild(option);
            });

            // Render papers
            renderPapers(data);

            // Store data for filtering
            window.allPapers = data;
        })
        .catch(error => console.error("Error loading JSON:", error));
});

// Render papers function
function renderPapers(papers) {
    const papersContainer = document.getElementById("papers-container");
    papersContainer.innerHTML = "";

    papers.forEach(paper => {
        const paperItem = document.createElement("div");
        paperItem.className = "paper-item";
        if (paper.github!=""){
            paperItem.innerHTML = `<span>${paper.authors} (${paper.year}).</span> <a target="_blank" href="${paper.link}">${paper.title}</a>. <i>${paper.journal}</i>.<br> <a class="btn" href="${paper.github}">GitHub</a>`;
        }
        else{
            paperItem.innerHTML = `<span>${paper.authors} (${paper.year}).</span> <a target="_blank" href="${paper.link}">${paper.title}</a>. <i>${paper.journal}</i>.`;
        }

        papersContainer.appendChild(paperItem);
    });
}

// Search and Filter Function
function filterPapers() {
    const searchInput = document.getElementById("searchInput").value.toLowerCase();
    const selectedYear = document.getElementById("yearFilter").value;

    const filteredPapers = window.allPapers.filter(paper => {
        const matchesSearch = paper.title.toLowerCase().includes(searchInput) ||
            paper.authors.toLowerCase().includes(searchInput) ||
            paper.journal.toLowerCase().includes(searchInput);
        const matchesYear = selectedYear === "all" || paper.year.toString() === selectedYear;

        return matchesSearch && matchesYear;
    });

    renderPapers(filteredPapers);
}
