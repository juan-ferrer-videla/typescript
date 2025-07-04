const logButton = () => {
  const button = document.querySelector("button.wtb-swaven");

  // if (!(button instanceof HTMLButtonElement)) return;

  button.addEventListener("click", () => {
    console.log(button);
  });
};

logButton();
