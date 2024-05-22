const factDisplay = document.getElementById("fact");
const fetchButton = document.getElementById("fetch-fact");
const woofSound = document.getElementById("woof-sound");

fetchButton.addEventListener("click", async () => {
  fetchButton.textContent = "Please wait...";
  fetchButton.disabled = true; // Disable the button
  fetchButton.classList.add("disabled-button");
  await fetchDogFact();
  woofSound.play(); // bark sound effect once a fact is fetched
  setTimeout(() => {
    fetchButton.textContent = "Fetch another fact!";
    fetchButton.disabled = false; // Enable the button
    fetchButton.classList.remove("disabled-button");
  }, 3000);
});

async function fetchDogFact() {
  const response = await fetch("https://dog-api.kinduff.com/api/facts");
  const data = await response.json();
  const randomFact = data.facts[0];
  factDisplay.textContent = randomFact;
}
