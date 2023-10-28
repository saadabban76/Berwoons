import Image from "next/image";
import React from "react";
import wwa from "../../public/assets/whoweare.jpg";

const Whoweare = () => {
  return (
    <main
      id="whoweare"
      className="flex rounded-md relative gap-4 lg:flex-row
     flex-col pl-12 xl:pl-52 xl:py-36 py-20 bg-white text-black"
    >
      {/* left side */}
      <section className="flex-1 flex flex-col gap-20  items-start">
        <h1
          className="self-start text-center xl:text-[4.6rem] text-[3.4rem] 
         font-bold"
        >
          WHO WE ARE{" "}
        </h1>
        <div
          className="flex flex-wrap sm:flex-nowrap gap-10 xl:gap-14 text-left text-[0.9rem]
         sm:text-[1rem] xl:text-[1.1rem] font-semibold"
        >
          <article className="flex flex-wrap lg:flex-col w-[80%] xl:w-[450px] gap-6 xl:gap-10">
            <p>
              We are a dynamic and talented group of young artists and
              developers from around the world, united by our passion for
              creativity and innovation. As freelancers, we have come together
              as a tight-knit team to offer our clients a unique blend of
              artistic flair and technical expertise.
            </p>
            <p>
              Our mission is clear to deliver excellence to our clients. We pour
              our hearts and souls into every project, aiming not just to meet
              expectations but to exceed them. Our dedication to quality
              craftsmanship and artistic expression is unwavering.
            </p>
          </article>
          <article className="flex flex-wrap lg:flex-col w-[90%] xl:w-[450px] gap-6 xl:gap-10">
            <p>
              We understand that cost can be a barrier to creativity and
              innovation. That{"'"}s why we are committed to offering our
              services at the most competitive prices possible. We believe that
              everyone, regardless of their budget, should have access to
              top-notch artistic and technical solutions.
            </p>
            <p>
              When you work with us, you{"'"}re not just hiring a team, you{"'"}
              re gaining a creative partner. We listen to your needs,
              collaborate closely with you, and bring your visions to life. Your
              success is our success, and we take pride in helping you achieve
              your goals.
            </p>
          </article>
        </div>
      </section>
      {/* right side */}
      <div className="xl:self-end xl:mt-0 mt-20">
        <Image
          src={wwa}
          className="w-[450px] xl:h-[380px] xl:w-[600px]
          xl:border-l-[1.8rem] border-l-[1.1rem] border-y-[1.1rem]
           xl:border-y-[1.8rem]  border-highlight"
          alt="who we are"
        />
      </div>
    </main>
  );
};

export default Whoweare;
