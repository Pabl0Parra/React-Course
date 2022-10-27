const getImage = async () => {
  try {
    const API_KEY = "3HkkXF3RYaFwVjbp4awVvteU1Hdf0OuP";

    const resp = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
    );
    const { data } = await resp.json();

    const { url } = data.images.original;

    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    // error handling
    console.log(error);
  }
};

getImage();
