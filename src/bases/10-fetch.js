const API_KEY = "3HkkXF3RYaFwVjbp4awVvteU1Hdf0OuP";

const request = fetch(
  `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
);

// request
//   .then((resp) => {
//     resp.json().then((data) => {
//       console.log(data);
//     });
//   })
//   .catch(console.warn);

// Chaining promises (much cleaner code)
// request
//   .then((resp) => resp.json())
//   .then((data) => console.log(data))
//   .catch(console.warn);

// Pointing to actual gifs
request
  .then((resp) => resp.json())
  .then(({ data }) => {
    const { url } = data.images.original;

    const img = document.createElement("img");
    img.src = url;

    document.body.append(img);
  })
  .catch(console.warn);
