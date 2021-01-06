// Initial function
const init = () => {
  // Add button to body
  const btn = document.createElement(`button`);
  btn.textContent = "Dodaj 10 elementów do listy";
  document.body.appendChild(btn);

  // Add List to body
  const list = document.createElement(`ul`);
  document.body.appendChild(list);
};

// Run initial function
init();

// "Create elements" function variables
let orderElement = 1;
let size = 10;

// "Create elements" function
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

// Listener
document.querySelector(`button`).addEventListener(`click`, createElements);
