const BASE_URL = "https://api.mercadolibre.com/sites/MCO/search?q="; //motorola&paging&offset=50

export async function getProductsByName(productName, offset=0) {
  
  try {
    const res = await fetch(`${BASE_URL}${productName}&offset=${offset}&limit=20`);
    const data = res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
