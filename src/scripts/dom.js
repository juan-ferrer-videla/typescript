const logButton = () => {
  const button = document.querySelector("button.wtb-swaven");

  button.addEventListener("click", () => {
    console.log(button);
  });
};

logButton();
