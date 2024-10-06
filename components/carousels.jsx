"use client";
import { useState } from "react";
import Card from "./card";
import { cardData } from "@/utils/constant";

const CardCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    if (currentIndex < cardData.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const isFirstCard = currentIndex === 0;
  const isLastCard = currentIndex === cardData.length - 7;

  return (
    <>
      <div className="my-10">
        <div class="flex justify-between">
          <h1 class="text-2xl font-semibold lg:text-3xl">Trending Now</h1>
          <div class="flex items-center gap-2">
            <button
              onClick={prevCard}
              disabled={isFirstCard}
              class="bg-[#333] p-2 text-2xl text-white transition-all duration-300 ease-linear hover:bg-black"
            >
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M11 17l-5-5m0 0l5-5m-5 5h12"
                ></path>
              </svg>
            </button>
            <button
              onClick={nextCard}
              disabled={isLastCard}
              class="bg-[#333] p-2 text-2xl text-white transition-all duration-300 ease-linear hover:bg-black"
            >
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                aria-hidden="true"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="mx-auto w-full">
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <Card />
            </div>
          </div>
          {/* <div className="absolute left-0 top-1/2 -translate-y-1/2 transform">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={prevCard}
            disabled={isFirstCard}
            aria-label="Previous card"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </div> */}
          {/* <div className="absolute right-0 top-1/2 -translate-y-1/2 transform">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={nextCard}
            disabled={isLastCard}
            aria-label="Next card"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div> */}
        </div>
      </div>
    </>
  );
};

export default CardCarousel;
