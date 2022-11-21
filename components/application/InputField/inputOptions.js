  export const getType = (types) => Object.entries(types).filter((type) => type[1] === true)[0][0];

  export const changeFieldType = (e, inputs, setInputs, activeField) => {
    const allInputs = [...inputs];
    const newInputs = allInputs.map((input) => {
      if (input.id === activeField.id) {
        const falseEntries = Object.entries(input.properties.type).map((t) => {
          t[1] = t[0] === e.target.value;

          return [t[0], t[1]];
        });
        input.properties.type = Object.fromEntries(falseEntries);
        return input;
      }
      return input;
    });
    setInputs({}); // Setting inputs to an empty object so that it re-rerenders the DOM after setting the actual inputs
    setInputs([...newInputs]);
  };
