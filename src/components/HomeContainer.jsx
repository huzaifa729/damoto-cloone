import React from 'react';
import 'tw-elements';

const HomeContainer = () => {
  return (
    <div id="carouselExampleCaptions" class="carousel slide relative rounded-lg  z-10 " data-bs-ride="carousel">
    <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
       <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="3"
        aria-label="Slide 4"
      ></button>
    </div>
    <div class="carousel-inner  relative  text-center h-460 w-full object-contain  overflow-hidden">
      <div class="carousel-item active relative float-left w-full text-center ">
        <img
          src="https://img.freepik.com/premium-vector/realistic-crispy-chicken-burger-elements-set_139630-254.jpg"
          class="block w-full object-contain"
          alt="..."
        />
      </div>
      <div class="carousel-item relative float-left w-full">
        <img
          src="https://img.freepik.com/free-vector/isometric-fast-food-collection-with-different-products-drinks_1284-34490.jpg?t=st=1666349759~exp=1666350359~hmac=7e06809a27d8951401b2f24c5c13d39e2774246c3d900cec396c9279fc8d2f31"
          class="block w-full object-contain"
          alt="..."
        />
      </div>
      <div class="carousel-item relative float-left w-full">
        <img
          src="https://img.freepik.com/premium-vector/burger-vector-design-template-fast-food-restaurant_605910-3.jpg"
          class="block w-full h-460 object-contain "
          alt="..."
        />
      </div>
  
      <div class="carousel-item relative float-left w-full">
        <img
          src="https://img.freepik.com/free-vector/delicious-fast-food-collection_79603-1774.jpg?t=st=1666351043~exp=1666351643~hmac=176ccae17ee0c758bf2c5e9c6165f15b554984387a41664f57e6bed524f76812"
          class="block w-full object-contain"
          alt="..."
        />
      </div>
    </div>
    <button
      class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
  )
}

export default HomeContainer