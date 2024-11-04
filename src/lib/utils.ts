export const truncateText = (text: string, maxLength: number = 100) => {
  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};
