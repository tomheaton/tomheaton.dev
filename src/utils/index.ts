export const getAge = (birthdate: Date) => {
  return Math.abs(new Date(Date.now() - birthdate.getTime()).getUTCFullYear() - 1970);
};

export const copyToClipboard = async (text: string) => {
  if ("clipboard" in navigator) {
    return await navigator.clipboard.writeText(text);
  }
  return document.execCommand("copy", true, text);
};
