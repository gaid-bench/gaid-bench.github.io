document.addEventListener("DOMContentLoaded", function () {
    fetch("about.md")
        .then(response => response.text())
        .then(markdown => {
            document.getElementById("about-content").innerHTML = marked.parse(markdown);
        })
        .catch(error => {
            console.error("Error loading Markdown:", error);
            document.getElementById("about-content").innerHTML = "<p>⚠️ Error loading content. Please try again later.</p>";
        });

    // Toggle Mobile Menu
    document.querySelector(".hamburger").addEventListener("click", function () {
        document.querySelector(".nav-links").classList.toggle("show");
    });
});
