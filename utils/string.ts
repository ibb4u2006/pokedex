export const camelCaseWord = (string: string) => {
  if (!string) return string;
  const word = string.replaceAll('-', ' ');
  return word[0].toUpperCase() + word.substr(1).toLowerCase();
};
