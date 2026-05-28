export async function copyToClipboard(text: string) {
  if ("clipboard" in navigator) {
    return await navigator.clipboard.writeText(text);
  }
  // Fallback for older browsers
  return document.execCommand("copy", true, text);
}
