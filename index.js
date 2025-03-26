fetch("people.json")
  .then(response => response.json()) // Parse JSON
  .then(data => {
    console.log(data); // Log data to check
    document.getElementById("output").textContent = JSON.stringify(data, null, 2);
  })
  .catch(error => console.error("Error loading JSON:", error));
