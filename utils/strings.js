export const ucFirst = (text) => {
  text = text.split('');
  text[0] = text[0].toUpperCase();
  return text.join('');
};
