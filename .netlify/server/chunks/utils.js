function dateFormat(date) {
  const parsed = new Date(date);
  const month = parsed.toLocaleString("default", { month: "long" });
  const year = parsed.getUTCFullYear();
  return `${month} ${year}`;
}
export {
  dateFormat as d
};
