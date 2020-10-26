import data from "../data/Webdev_data2.json";

/**
 * Retrieve JSON data from a file
 * Called in async/await actions.fetchData()
 */
export const apiFetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data[0], 1));
  });
};
