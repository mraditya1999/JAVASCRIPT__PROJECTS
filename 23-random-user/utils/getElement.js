const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error(`No such element ${selection} found`);
};

export default getElement;
