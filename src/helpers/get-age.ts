const getAge = (dob: Date) => {
  const monthDiff = Date.now() - dob.getTime();
  const ageDelta = new Date(monthDiff);
  const year = ageDelta.getUTCFullYear();
  return Math.abs(year - 1970);
};

export default getAge;