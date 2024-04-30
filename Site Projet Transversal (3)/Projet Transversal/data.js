// fetch api users and return it to the frontend
// set the users data to the table in the html

const url = "http://localhost:3000/api/users";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    console.log("Number of users:", data.length);
    const maxScore = Math.max(...data.map((player) => player.score));
    console.log(
      "Best player:",
      data.find((player) => player.score === maxScore).username
    );
    // set the data into the table from the html
    const table = document.getElementById("tableId"); // Replace "tableId" with the actual ID of your table element

    data
      .forEach((player) => {
        const row = table.insertRow();
        const usernameCell = row.insertCell();
        const scoreCell = row.insertCell();

        usernameCell.textContent = player.username;
        scoreCell.textContent = player.score;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  });
