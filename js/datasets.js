document.addEventListener("DOMContentLoaded", function () {
    fetch("jsons/datasets.json")
        .then(response => response.json())
        .then(data => {
            const datasetsContainer = document.getElementById("datasets-container");

            // Sort datasets by year (newest first)
            data.sort((a, b) => b.year - a.year);

            let currentYear = null;
            data.forEach(dataset => {
                // Add year header if it's a new year
                if (dataset.year !== currentYear) {
                    currentYear = dataset.year;
                    const yearHeader = document.createElement("div");
                    yearHeader.className = "dataset-year";
                    yearHeader.textContent = currentYear;
                    datasetsContainer.appendChild(yearHeader);
                }

                // Add dataset item
                const datasetItem = document.createElement("div");
                datasetItem.className = "dataset-item";
                datasetItem.innerHTML = `
                    <a href="${dataset.link}" target="_blank">${dataset.title}</a>
                    <p class="dataset-description">${dataset.description}</p>
                `;
                datasetsContainer.appendChild(datasetItem);
            });
        })
        .catch(error => console.error("Error loading JSON:", error));
});
