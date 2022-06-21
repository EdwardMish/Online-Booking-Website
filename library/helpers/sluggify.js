// fiunction to slugify a string
export const slugify = (str) => {
    return str
      ?.toLowerCase()
      .replace(/[^\w ]+/g, '')
      .replace(/ +/g, '-');
};
