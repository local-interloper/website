const toDisplayDate = (stringDate: string) => {
  const date = new Date(stringDate);

  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = (date.getDate()).toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
};

export default toDisplayDate;