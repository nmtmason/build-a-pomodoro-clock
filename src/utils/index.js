export const timeFromValue = value => {
  let minutes = String(Math.floor(value / 60)).padStart(2, '00');
  let seconds = String(Math.round(value % 60)).padStart(2, '00');
  return `${minutes}:${seconds}`;
};
