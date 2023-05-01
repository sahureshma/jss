import React, { useState, useEffect, useRef } from 'react';

export default function Changer() {
  const [image, setImage] = useState('');
  const imageRef = useRef(null);
  const images = ['https://w0.peakpx.com/wallpaper/959/164/HD-wallpaper-golden-retriever-puppy-labradors-running-dog-dogs-pets-cute-dogs-small-labrador-golden-retriever-dogs.jpg', 'https://w0.peakpx.com/wallpaper/889/1012/HD-wallpaper-dogs-dog-poppy.jpg', 'https://w0.peakpx.com/wallpaper/211/23/HD-wallpaper-pomeranian-puppies-small-cute-dogs-pets-fluffy-dogs.jpg'];

  useEffect(() => {
    setImage(images[0]);
  }, []);

  const handleChange = () => {
    const currentIndex = images.indexOf(image);
    const nextIndex = (currentIndex + 1) % images.length;
    setImage(images[nextIndex]);
  };

  useEffect(() => {
    if (imageRef.current) {
      imageRef.current.src = image;
    }
  }, [image]);

  return (
    <div>
      <img ref={imageRef} />
      
      <button onClick={handleChange}>Change Image</button>
    </div>
  );
}

