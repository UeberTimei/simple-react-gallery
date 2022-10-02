import { useEffect, useState } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=30323288-e321b9a58a375463cbb37ab1b&q=${term}&image_type=photo&pretty=true`)
      .then(res => res.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(e => console.log(e));
  }, [term]);

  return (
    <>
    <header className="conatainer static w-full py-6 bg-green-600 m-auto">
      <div className="flex">
        <h1 className="font-semibold text-2xl ml-auto mr-10">Search Images</h1>
        <a href="https://github.com/UeberTimei" className="font-semibold text-lg mr-auto mt-1">My github</a>
      </div>

    </header>
    <div className="absolute mt-1 ml-10">
    </div>
    <div className="container mx-auto">
      <ImageSearch searchText={text => setTerm(text)}/>

      {!isLoading && images.length === 0 &&
        <h1 className="font-bold text-6xl text-center mt-72 mx-auto">No images found...</h1>
      }

      {isLoading ? <h1 className="font-bold text-6xl text-center mt-72 mx-auto">Loading...</h1> : <div className="grid grid-cols-3 gap-4">
        {images.map(image => (
          <ImageCard key={image.id} image={image}/>
        ))}
      </div>}
    </div>
    </>
  );
}

export default App;
