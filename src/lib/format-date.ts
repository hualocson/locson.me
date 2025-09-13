import dayjs from "dayjs";

function formatDate(d: string | Date, onlyDate = true) {
  const date = dayjs(d);
  if (onlyDate || date.year() === dayjs().year()) {
    return date.format("MMM D");
  }
  return date.format("MMM D, YYYY");
}

export default formatDate;
