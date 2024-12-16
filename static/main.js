window.onload = () => {
  const yearDropdown = document.getElementById("year-dropdown");

  if (!yearDropdown) {
    console.error("Year dropdown element not found.");
    return;
  }

  // Populate the dropdown with years from 2000 to 2050
  for (let year = 2000; year <= 2050; year++) {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;
    yearDropdown.appendChild(option);
  }
};
