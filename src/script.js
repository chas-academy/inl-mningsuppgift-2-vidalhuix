// Definera array av namn
let people = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Frank",
  "Grace",
  "Henry",
  "Ivy",
  "Jack",
  "Kelly",
  "Liam",
  "Mia",
  "Noah",
  "Olivia",
  "Peter",
  "Quinn",
  "Ryan",
  "Sophia",
  "Thomas",
  "Ursula",
  "Victor",
  "Willow",
  "Xavier",
  "Yara",
  "Zane",
  "Aaliyah",
  "Brandon",
  "Caitlin",
  "Dylan",
  "Emily",
  "Finn",
  "Gabriella",
  "Hunter",
  "Isabella",
  "Jacob",
  "Kylie",
  "Lucas",
  "Madison",
  "Nathan",
  "Owen",
  "Penelope",
  "Riley",
  "Scarlett",
  "Tyler",
  "Violet",
  "Wyatt",
  "Zoey",
];

// You can then use this array in your JavaScript code
// For example:
//console.log(names[0]); // Output: Alice
//console.log(names.length); // Output: 50

export function initSearch(people) {
  // rör ej denna rad

  // Hämta HTML-element
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");
  const resultDisplay = document.getElementById("resultDisplay");

  // Lägg till en klickhändelse på "Sök"-knappen
  searchBtn.addEventListener("click", () => {
    // 1. Hämta texten i searchInput.value
    const searchText = searchInput.value;

    // 2. Skapa en boolean för found
    let found = false;

    // 3. Loopa igenom people-arrayen
    // 4. Jämför texten med varje namn i arrayen
    for (name of people) {
      // 5. Om du hittar en match, skriv ut "Namn hittades!" i resultDisplay, ändra found till true
      if (name === searchText) {
        resultDisplay.innerHTML = "Namn hittades!";
        console.log("Namn hittades!");
        found = true;
      }

      // 6. Om du efter loopen inte hittat något, skriv ut "Namn hittades inte." och gör found till false igen.
      if (!found) {
        resultDisplay.innerHTML = "Namn hittades inte.";
        console.log("Namn hittades inte.");
      }
    }
  });
}

// rör ej dessa rader
document.addEventListener("DOMContentLoaded", () => {
  initSearch(people);
});
