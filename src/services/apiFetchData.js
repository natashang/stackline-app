import data from "../data/Webdev_data2.json";

export const apiFetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data[0], 1000));
  });
};
