export const saveToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
};
