const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) return element;
  throw new Error(`no such element found ${selection} `);
};

export default getElement;
