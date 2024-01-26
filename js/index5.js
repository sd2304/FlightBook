const baseUrl = "https://flightbooker.azurewebsites.net";
const task5EP = "/task5";
const showButton = document.getElementById("showResults");

document.addEventListener("DOMContentLoaded", function () {
    showButton.addEventListener("click", async function (event) {
      console.log("Event listen for task 5");
      event.preventDefault(); // Prevent the form from submitting traditionally
      
    // Get the lowercase initial letter of the user-entered city
      const sourceCityInput = document.getElementById("fromC");
      const sourceCity = sourceCityInput.value.trim().toLowerCase().charAt(0);
      const kidReview = parseInt(document.getElementById("kreview").value, 10);
  
      // Create a request payload
      const requestData5 = {
        source_city: sourceCity,
        min_kids_review: kidReview,
      };
      // Get the values from the input fields
  
      try {
        const response5 = await fetch(`${baseUrl}${task5EP}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json", // Set the content type to JSON
          },
          body: JSON.stringify(requestData5), // Convert the data to JSON
        });
  
        if (response5.ok) {
          const data = await response5.json();
          const citiesList = document.getElementById("cities-list");
  
          // Clear any existing list items
          citiesList.innerHTML = "";
  
          // Loop through the reachable cities and create list items
          if (data.reachable_cities.length == 0) {
            const errorMsg = "Oops ! Looks like you are stuck in your own city";
            document.getElementById("SecError").innerHTML = errorMsg;
          }
          data.reachable_cities.forEach((city) => {
            const listItem = document.createElement("li");
            listItem.textContent = city;
            citiesList.appendChild(listItem);
          });
          console.log(data);
        } else {
          console.error("Error:", response5.statusText);
        }
      } catch (error) {
        console.error("Fetch Error:", error);
      }
    });
  });
  