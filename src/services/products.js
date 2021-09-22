const BASE_URL_COL = "https://api.mercadolibre.com/"; //La de Colombia está caída
const BASE_URL_ARG = "https://api.mercadolibre.com/sites/MLA/search?"; //La de Colombia está caída


export async function getProductsByName(productName, offset = 0) {
  try {
    const res = await fetch(
      `${BASE_URL_COL}sites/MCO/search?q=${productName}&offset=${offset}&limit=20`
    );
    const data = res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getProductByID(productID) {
  try {
    const res = await fetch(
      `${BASE_URL_COL}items/${productID}`
    );
    const data = res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}

export async function getProductsByCategory(offset = 0) {
  try {
    const res = await fetch(
      `${BASE_URL_ARG}category=MLA1430&offset=${offset}&limit=10`
    );
    const data = res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
