import React from "react";
import Image from "../components/utilities/Image";
import { yashodeep, prayash } from "../assets";

let sampleData = [
  {
    id: 1,
    upvotes: 100,
    shares: 5,
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
  {
    id: 2,
    upvotes: 50,
    shares: 2,
    topic: "Recommended for you",
    userAvatar: prayash,
    userName: "Prayash Giria",
    userBio: "Lost 30+ kgs in 18 months.",
    question: "What are some tips for fat loss during a lockdown?",
    answerExcerpt: `Two things: 1. Exercise regularly 2. Eat healthy You need to figure out an exercise regimen that balances cardio, high intensity training, and strength building. The first two will help you burn calories and lose fat, while the latter will help build muscle that will in turn raise your resting metabolism as well as strength.`,
    featuredImage:
      "https://qphs.fs.quoracdn.net/main-qimg-055b52cc966a4789ff919bccad9d9d64",
    featuredImageAlt: "fitness",
    answerMarkup: () => (
      <>
        <p>Two things:</p>
        <ol>
          <li>Exercise regularly</li>
          <li>Eat healthy</li>
        </ol>

        <p>
          You need to figure out an exercise regimen that balances cardio, high
          intensity training, and strength building. The first two will help you
          burn calories and lose fat, while the latter will help build muscle
          that will in turn raise your resting metabolism as well as strength.
        </p>

        <p>
          For eating, you need to consume less calories than you burn through
          the day. You can calculate the burn using a fitness tracker or an
          online estimator, and the consumption with a calorie tracking app as
          well as a food scale. A daily deficit of around 500 calories is
          considered healthy, and allows you to lose around 0.5 kg of weight in
          a week.
        </p>

        <p>
          I would not encourage you to try out special diets as they are often
          too severe, and their results do not last for very long. My advice
          would always be to opt for gradual but more sustained lifestyle
          changes. The point is to enjoy the fitter you, not feel miserable
          about it.
        </p>

        <p>
          My advice is based on personal experience. I lost 11 kg between March
          and August 2020 (basically my last and first gym sessions before and
          after lockdown) by doing regular strength training (5–6 times a week
          with light dumbbells), intensive cardio (long distance running and
          bicycling almost daily), and strict monitoring of my calorie intake. I
          also lost some body fat on the way, going down from around 20–22
          percent to 15–16 percent (approximations only).
        </p>

        <p>Visual proofs below:</p>
        <Image
          src="https://qphs.fs.quoracdn.net/main-qimg-055b52cc966a4789ff919bccad9d9d64"
          alt="fitness"
        />
      </>
    ),
  },
];

export { sampleData };
