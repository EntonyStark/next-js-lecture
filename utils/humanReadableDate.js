export const getHumanReadableDate = (date) => new Date(date).toLocaleDateString('en-US', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});
