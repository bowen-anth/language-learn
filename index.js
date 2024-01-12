const progressBar = document.querySelector(".progress");
const submitButton = document.querySelector(".submit-button");
const selectButtons = document.querySelectorAll(".select-button");
const selectButtonCorrect = document.querySelector(".select-button.correct");

const increaseProgressBar = () => {
  progressBar.style.width = "100%";
};

const decreaseProgressBar = () => {
  progressBar.style.width = "60%";
};

const handleSubmit = () => {
  if (selectButtonCorrect.classList.contains("selected")) {
    increaseProgressBar();
    selectButtonCorrect.classList.toggle("selected");
  } else {
    decreaseProgressBar();
  }
};

submitButton.addEventListener("click", handleSubmit);

selectButtons.forEach((button) =>
  button.addEventListener("click", () => {
    button.classList.toggle("selected");
  })
);
