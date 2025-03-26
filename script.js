// fetch("people.json")
//   .then(response => response.json()) // Parse JSON
//   .then(data => {
//     const output = document.getElementById("output");
//     output.innerHTML = ""; // Clear existing content
//
//     data.forEach(person => {
//       const p = document.createElement("p"); // Create paragraph element
//       p.textContent = `${person.name} is ${person.age}`; // Format text
//       output.appendChild(p); // Append to output div
//     });
//   })
//   .catch(error => console.error("Error loading JSON:", error));
document.getElementById("menu-icon").addEventListener("click", function () {
    document.getElementById("nav-links").classList.toggle("show");
});
