const ratingButtons = document.querySelectorAll(".rating");
const submitButton = document.getElementById("submit");
const frontCard = document.querySelector(".front-card");
const backCard = document.querySelector(".back-card");
const ratingInfo = document.getElementById("rating-info");

let selectedRating = null;

// Adiciona evento de clique em cada botão de nota
ratingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    ratingButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    selectedRating = button.dataset.value;
  });
});
submitButton.addEventListener("click", () => {
  if (selectedRating) {
    // Atualiza o texto com a nota selecionada
    ratingInfo.textContent = `You selected ${selectedRating} out of 5`;

    // Troca as telas
    frontCard.style.display = "none";
    backCard.style.display = "block";
  } else {
    alert("Please select a rating before submitting!");
  }
});
