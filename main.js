// Initial function
const init = () => {
  // Add create button to body
  const btnCreate = document.createElement(`button`);
  btnCreate.textContent = "Dodaj 10 elementów do listy";
  btnCreate.id = "add";
  document.body.appendChild(btnCreate);

  // Add reset button to body
  const btnReset = document.createElement(`button`);
  btnReset.textContent = "Reset";
  btnReset.style.marginLeft = "10px";
  btnReset.id = "reset";
  document.body.appendChild(btnReset);

  // Add List to body
  const list = document.createElement(`ul`);
  document.body.appendChild(list);
};

// Run initial function
init();

// Functions variables
let orderElement = 1;
let size = 10;

// "Create" function
const createElements = () => {
  for (let i = 0; i < 10; i++) {
    const li = document.createElement(`li`);
    li.textContent = `Element nr ${orderElement}`;
    li.style.fontSize = `${size}px`;
    document.querySelector(`ul`).appendChild(li);

    orderElement++;
    size++;
  }
};

// "Create" listener
document.querySelector(`#add`).addEventListener(`click`, createElements);

// "Reset" function
const resetElements = () => {
  const elements = document.querySelectorAll(`li`);
  elements.forEach((element) => {
    element.remove();
  });

  orderElement = 1;
  size = 10;
};

// "Reset" listener
document.querySelector(`#reset`).addEventListener(`click`, resetElements);
