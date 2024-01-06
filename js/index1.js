// Task 1
const baseUrl = "https://flightbooker.azurewebsites.net";
const task1EP = "/task1";
const button = document.getElementById("show");
const choicesElement = document.getElementById("choices");

// Task 5
// const task5EP = "/task5";
// const showButton = document.getElementById("showResults");
// const kids = document.getElementById("filter");

//Task 4
// const task3EP = "/task3";
// const showFlights = document.getElementById("showFlights");

document.addEventListener("DOMContentLoaded", function () {
  // TASK 1
  button.addEventListener("click", async function (event) {
    console.log("Event lisssdf");
    event.preventDefault(); // Prevent the form from submitting traditionally

    const sourceCity = document.getElementById("source").value;
    const arrivalCity = document.getElementById("arrival").value;

    // Create a request payload
    const requestData = {
      source_city: sourceCity,
      dest_city: arrivalCity,
    };
    // Get the values from the input fields

    try {
      const response = await fetch(`${baseUrl}${task1EP}`, {
        //const response = await fetch('http://127.0.0.1:5000/task1', {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
        body: JSON.stringify(requestData), // Convert the data to JSON
      });

      if (response.ok) {
        const data = await response.json();
        // Handle the response data as needed
        console.log(data);
        // Business Price
        document.getElementById("t1bid").innerHTML =
          data.business_flights[0]["Flight ID"];
        document.getElementById("t1bp").innerHTML =
          data.business_flights[0]["Business Class Price (Rs)"];
        document.getElementById("t1bd").innerHTML =
          data.business_flights[0]["Duration (minutes)"];
        document.getElementById("t2bid").innerHTML =
          data.business_flights[1]["Flight ID"];
        document.getElementById("t2bp").innerHTML =
          data.business_flights[1]["Business Class Price (Rs)"];
        document.getElementById("t2bd").innerHTML =
          data.business_flights[1]["Duration (minutes)"];
        document.getElementById("t3bid").innerHTML =
          data.business_flights[2]["Flight ID"];
        document.getElementById("t3bp").innerHTML =
          data.business_flights[2]["Business Class Price (Rs)"];
        document.getElementById("t3bd").innerHTML =
          data.business_flights[2]["Duration (minutes)"];

        // Economy Price
        document.getElementById("t1eid").innerHTML =
          data.economy_flights[0]["Flight ID"];
        document.getElementById("t1ep").innerHTML =
          data.economy_flights[0]["Economy Class Price (Rs)"];
        document.getElementById("t1ed").innerHTML =
          data.economy_flights[0]["Duration (minutes)"];
        document.getElementById("t2eid").innerHTML =
          data.economy_flights[1]["Flight ID"];
        document.getElementById("t2ep").innerHTML =
          data.economy_flights[1]["Economy Class Price (Rs)"];
        document.getElementById("t2ed").innerHTML =
          data.economy_flights[1]["Duration (minutes)"];
        document.getElementById("t3eid").innerHTML =
          data.economy_flights[2]["Flight ID"];
        document.getElementById("t3ep").innerHTML =
          data.economy_flights[2]["Economy Class Price (Rs)"];
        document.getElementById("t3ed").innerHTML =
          data.economy_flights[2]["Duration (minutes)"];

        // Economy Price
        document.getElementById("t1did").innerHTML =
          data.duration_flights[0]["Flight ID"];
        document.getElementById("t1dp").innerHTML =
          data.duration_flights[0]["Economy Class Price (Rs)"];
        document.getElementById("t1dd").innerHTML =
          data.duration_flights[0]["Duration (minutes)"];
        document.getElementById("t2did").innerHTML =
          data.duration_flights[1]["Flight ID"];
        document.getElementById("t2dp").innerHTML =
          data.duration_flights[1]["Economy Class Price (Rs)"];
        document.getElementById("t2dd").innerHTML =
          data.duration_flights[1]["Duration (minutes)"];
        document.getElementById("t3did").innerHTML =
          data.duration_flights[2]["Flight ID"];
        document.getElementById("t3dp").innerHTML =
          data.duration_flights[2]["Economy Class Price (Rs)"];
        document.getElementById("t3dd").innerHTML =
          data.duration_flights[2]["Duration (minutes)"];

        choicesElement.scrollIntoView({ behavior: "smooth" });
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      const errorMsg =
        "Oops ! Looks like there are no flights available at the moment";
      document.getElementById("TypeError").innerHTML = errorMsg;
      console.error("Fetch Error:", error);
    }
  });
});
// Task 5
// document.addEventListener("DOMContentLoaded", function () {
//   kids.addEventListener("click", function () {
//     const kidsSection = document.getElementById("kids");

//     if (kidsSection) {
//       kidsSection.scrollIntoView({ behavior: "smooth" });
//     }
//   });

//   showButton.addEventListener("click", async function (event) {
//     console.log("Event listen for task 5");
//     event.preventDefault(); // Prevent the form from submitting traditionally

//     const sourceCity = document.getElementById("fromC").value;
//     const kidReview = parseInt(document.getElementById("kreview").value, 10);

    // Create a request payload
    // const requestData5 = {
    //   source_city: sourceCity,
    //   min_kids_review: kidReview,
    // };
    // Get the values from the input fields

    // try {
    //   const response5 = await fetch(`${baseUrl}${task5EP}`, {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json", // Set the content type to JSON
    //     },
    //     body: JSON.stringify(requestData5), // Convert the data to JSON
    //   });

    //   if (response5.ok) {
    //     const data = await response5.json();
    //     const citiesList = document.getElementById("cities-list");

        // Clear any existing list items
        // citiesList.innerHTML = "";

        // Loop through the reachable cities and create list items
//         if (data.reachable_cities.length == 0) {
//           const errorMsg = "Oops ! Looks like you are stuck in your own city";
//           document.getElementById("SecError").innerHTML = errorMsg;
//         }
//         data.reachable_cities.forEach((city) => {
//           const listItem = document.createElement("li");
//           listItem.textContent = city;
//           citiesList.appendChild(listItem);
//         });
//         console.log(data);
//       } else {
//         console.error("Error:", response5.statusText);
//       }
//     } catch (error) {
//       console.error("Fetch Error:", error);
//     }
//   });
// });

// TASK 4
// document.addEventListener("DOMContentLoaded", function () {
// kids.addEventListener('click', function () {
//     const kidsSection = document.getElementById('kids');

//     if (kidsSection) {
//         kidsSection.scrollIntoView({ behavior: 'smooth' });
//     }
// });

// showFlights.addEventListener("click", async function (event) {
//   console.log("Event listen for task 4");
//   event.preventDefault(); // Prevent the form from submitting traditionally

//   const sourceCity = document.getElementById("fromCity").value;
//   const time = parseInt(document.getElementById("dur").value, 10);
//   const budget = parseInt(document.getElementById("budget").value, 10);
//   const breaks = parseInt(document.getElementById("breaks").value, 10);

  // Create a request payload
  // const requestData4 = {
  //   source_city: sourceCity,
  //   available_time: time,
  //   budget: budget,
  //   max_breaks: breaks,
  // };
  // Get the values from the input fields

  // try {
  //   const response4 = await fetch(`${baseUrl}${task3EP}`, {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json", // Set the content type to JSON
  //     },
  //     body: JSON.stringify(requestData4), // Convert the data to JSON
  //   });

    // if (response4.ok) {
    //   const data = await response4.json();
    //   const citiesList = document.getElementById("city-list");

      // Clear any existing content
      // citiesList.innerHTML = "";

      // Check if there are reachable cities
      // if (data.reachable_city.length === 0) {
      //   const noCitiesText = document.createTextNode(
      //     "No reachable cities found."
      //   );
      //   citiesList.appendChild(noCitiesText);
      // } else {
        // Create an unordered list element
        // const ul = document.createElement("ul");

        // Loop through the reachable cities and create list items
        // data.reachable_city.forEach((city) => {
        //   const li = document.createElement("li");
        //   const cityText = document.createTextNode(city);
        //   li.appendChild(cityText);
        //   ul.appendChild(li);
        // });

        // Append the unordered list to the cities list container
//         citiesList.appendChild(ul);
//       }

//       console.log(data);
//     } else {
//       console.error("Error:", response4.statusText);
//     }
//   } catch (error) {
//     console.error("Fetch Error:", error);
//   }
// });
// });
