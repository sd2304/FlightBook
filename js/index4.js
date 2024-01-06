const baseUrl = "https://flightbooker.azurewebsites.net";
const task3EP = "/task3";
const showFlights = document.getElementById("showFlights");
document.addEventListener("DOMContentLoaded", function () {
    showFlights.addEventListener("click", async function (event) {
        console.log("Event listen for task 4");
        event.preventDefault(); // Prevent the form from submitting traditionally
    
        const sourceCity = document.getElementById("fromCity").value;
        const time = parseInt(document.getElementById("dur").value, 10);
        const budget = parseInt(document.getElementById("budget").value, 10);
        const breaks = parseInt(document.getElementById("breaks").value, 10);
    
        // Create a request payload
        const requestData4 = {
          source_city: sourceCity,
          available_time: time,
          budget: budget,
          max_breaks: breaks,
        };
        // Get the values from the input fields
    
        try {
          const response4 = await fetch(`${baseUrl}${task3EP}`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json", // Set the content type to JSON
            },
            body: JSON.stringify(requestData4), // Convert the data to JSON
          });
    
          if (response4.ok) {
            const data = await response4.json();
            const citiesList = document.getElementById("city-list");
    
            // Clear any existing content
            citiesList.innerHTML = "";
    
            // Check if there are reachable cities
            if (data.reachable_city.length === 0) {
              const noCitiesText = document.createTextNode(
                "No reachable cities found."
              );
              citiesList.appendChild(noCitiesText);
            } else {
              // Create an unordered list element
              const ul = document.createElement("ul");
    
              // Loop through the reachable cities and create list items
              data.reachable_city.forEach((city) => {
                const li = document.createElement("li");
                const cityText = document.createTextNode(city);
                li.appendChild(cityText);
                ul.appendChild(li);
              });
    
              // Append the unordered list to the cities list container
              citiesList.appendChild(ul);
            }
    
            console.log(data);
          } else {
            console.error("Error:", response4.statusText);
          }
        } catch (error) {
          console.error("Fetch Error:", error);
        }
      });
});