export const getPoetry = () => {
  const url = "https://v1.jinrishici.com/all.json";
  return fetch(url, {
    method: "GET",
    headers: {
      accept: "text/html",
    },
    credentials: "same-origin",
  })
    .then((response) => response.json())
    .then((data) => {
      const result = [];
      result.push(data.origin);
      result.push(data.author);
      result.push(data.content);
      return result;
    });
};
