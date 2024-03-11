export function getAge(birthdate: Date) {
  return Math.abs(
    new Date(Date.now() - birthdate.getTime()).getUTCFullYear() - 1970,
  );
}

export async function copyToClipboard(text: string) {
  if ("clipboard" in navigator) {
    return await navigator.clipboard.writeText(text);
  }
  return document.execCommand("copy", true, text);
}
