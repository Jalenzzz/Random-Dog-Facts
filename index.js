const factDisplay = document.getElementById("fact");
const fetchButton = document.getElementById("fetch-fact");

fetchButton.addEventListener("click", fetchDogFact);

async function fetchDogFact() {
  const response = await fetch("https://dog-api.kinduff.com/api/facts");
  const data = await response.json();

  // facts is an array in the API response
  const randomFact = data.facts[0];
  factDisplay.textContent = randomFact;
}
