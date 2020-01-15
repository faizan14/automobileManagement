const helper = (() => {
  const baseUrl = "https://auto1-mock-server.herokuapp.com/api/";
  const colorsUrl = baseUrl + "colors";
  const manufacturersUrl = baseUrl + "manufacturers";
  const carsUrl = baseUrl + "cars";
  const constructQueryParam = (object, params = {}) => {
    let url = `${object || ""}?`;
    Object.keys(params).forEach(element => {
      url = `${url}${element}=${params[element]}&`;
    });
    return baseUrl + url;
  };

  return {
    getBaseUrl: () => baseUrl,
    getQueryParam: (object, params) => constructQueryParam(object, params),
    getColorsUrl: () => colorsUrl,
    getManufacturersUrl: () => manufacturersUrl,
    getCarsUrl: () => carsUrl
  };
})();

export default helper;
