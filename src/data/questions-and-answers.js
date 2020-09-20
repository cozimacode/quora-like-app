import React from "react";
import Image from "../components/utilities/Image";
import { yashodeep } from "../assets";

let sampleData = [
  {
    id: 1,
    topic: "Important Life Lessons",
    userAvatar: yashodeep,
    userName: "Yashodeep Patil",
    userBio: "lives in Chinchwad, Maharashtra, India (1993-present)",
    question: "How is the new Grand i10 Nios Sports automatic?",
    answerExcerpt: `Writing this answer after 1 year of using Grand i10 Nios
        Sportz AMT(Petrol). Last year after a huge research, when I
        was almost about to book Maruti Suzuki Swift VXI AMT, this car
        was launched by Hyundai. After comparing this both cars,`,
    featuredImage:
      "https://qphs.fs.quoracdn.net/main-qimg-c041457e86038ad6ad04b939f5ad5b34",
    featuredImageAlt: "car",
    answerMarkup: () => (
      <>
        <p>
          Writing this answer after 1 year of using Grand i10 Nios Sportz
          AMT(Petrol).
        </p>
        <Image
          src="https://qphs.fs.quoracdn.net/main-qimg-c041457e86038ad6ad04b939f5ad5b34"
          alt="car"
        />
        <p>
          Last year after a huge research, when I was almost about to book
          Maruti Suzuki Swift VXI AMT, this car was launched by Hyundai.
        </p>
        <p>
          After comparing this both cars, obviously Grand i10 Nios was offerings
          a better deal. Even more features than Swift and comparatively low
          price.{" "}
        </p>
        <p>
          Hyundai build quality and premiumness, convinced me to buy this car in
          September 2019. Unfortunately due to the pandemic and lockdown, I
          couldn't take my babes(my car) for long drives. In a year my car has
          completed 2050km.
        </p>
        <Image
          src="https://qphs.fs.quoracdn.net/main-qimg-d05c84a1297b430075586c84142a6821"
          alt="hyundai"
        />
        <p>
          It was always a pleasure to drive this car, I must say! The 1.2L Kappa
          petrol engine is very refined and silent in operation. Cabin
          insulation is just perfect. We can hardly listen any noice and feel
          any vibrations while driving.{" "}
        </p>
        <p>
          Believe me, couple of times I couldn't even guess that my car engine
          was on. The AMT gear shifting of this car is very smooth. Thanks to
          its electronic actuator in AMT system. Whereas I felt it quite jerky
          in Swift.
        </p>
      </>
    ),
  },
];

export { sampleData };
