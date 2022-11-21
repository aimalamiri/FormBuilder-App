  export const getType = (types) => Object.entries(types).filter((type) => type[1] === true)[0][0];

  export const changeFieldType = (e, inputs, setInputs, activeField) => {
    const allInputs = [...inputs];
    const newInputs = allInputs.map((input) => {
      if (input.id === activeField.id) {
        const falseEntries = Object.entries(input.properties.type).map((t) => {
          if (t[0] === e.target.value) {
            t[1] = true;
          } else {
            t[1] = false;
          }
          return [t[0], t[1]];
        });
        const types = Object.fromEntries(falseEntries);
        input.properties.type = types;
        return input;
      }
      return input;
    });
    setInputs({});
    setInputs([...newInputs]);
  };
