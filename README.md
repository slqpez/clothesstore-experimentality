# Frontend technical test 

Layout for an online clothing store, consuming the MercadoLibre's API, Built with  [React.js](https://es.reactjs.org/).



The initial setup was built with [Vite.js](https://vitejs.dev/).


## Instalation

#### To install dependencies.
```bash
  npm install 
```

#### To run project.
```bash
 npm run dev
```

#### To run tests. (Only search product E2E test at the moment).
```bash
 npm run cypress:open
```

## Application content
<ul>
  <li>Search product by name</li> 
  <li>Add product to cart</li>
  <li>Delete product from cart</li>
  <li>Responsive design</li>
  <li>Get products by cathegory in home page</li>
</ul>

## Considerations 
Mercadolibre's API does not work in the clothing and accessories category search with Colombia's ID (MCO), so the ID of Argentina was used in that case.    

## Deployment
The application is deployed on these two sites.      
With Vercel: [ClothesStore Vercel](https://clothesstore-experimentality.vercel.app/)     
With Heroku: [ClothesStore Heroku](https://clothesstore-exp.herokuapp.com/) 
