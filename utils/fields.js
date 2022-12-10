export const fields = () => [
  {
    tagname: 'input',
    clsname: 'input',
    properties: {
      title: 'Textbox',
      type: { text: true, number: false, email: false, password: false },
      placeholder: '',
    },
  },
  {
    tagname: 'textarea',
    clsname: 'input',
    properties: {
      title: 'Textarea',
      placeholder: '',
    },
  },
  {
    tagname: 'checkbox',
    clsname: 'input',
    properties: {
      title: 'Checkbox',
      options: ['Option'],
    },
  },
  {
    tagname: 'radio',
    clsname: 'input',
    properties: {
      title: 'Radio',
      options: ['Option'],
    },
  },
  {
    tagname: 'select',
    clsname: 'input',
    properties: {
      title: 'Select',
      placeholder: 'Select an option',
      options: [],
    },
  },
];
