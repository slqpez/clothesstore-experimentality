const BASE_URL = "https://api.mercadolibre.com/sites/MCO/search?"; 


export async function getProductsByName(productName, offset=0) {
  
  try {
    const res = await fetch(`${BASE_URL}q=${productName}&offset=${offset}&limit=20`);
    const data = res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}


export async function getProductsByCategory(category, offset=0) {
  
  try {
    const res = await fetch(`${BASE_URL}category=MLA1430${category}&offset=${offset}&limit=20`);
    const data = res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
}
