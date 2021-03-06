export default function shortenString(string, cap = '...', maxLength = 250) {
  let trimmedString = string.substring(0, maxLength);
  return trimmedString.substring(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(' '))) + cap;
}