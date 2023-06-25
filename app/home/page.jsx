import Header from "@/components/ui/header/Header";
import React from "react";
import BackColorDashText from "@/components/text/backColorDashText";
const Home = () => {
  return (
    <div>
      <Header />
      <div className="">
        <section className="p-4">
          <BackColorDashText
            text="Hey, Hello"
            bgColor="bg-lightGreen"
            textColor="text-blue"
            fontFamily="font-monospace"
          />
          <h3 className="text-xl">
            Let me share some information about myself.
          </h3>
          <p className="text-sm mt-2 lg:w-1/2">
            With a passion for creating innovative solutions, I specialize in
            building robust web applications that deliver exceptional user
            experiences. From crafting visually appealing user interfaces to
            developing efficient server-side functionality, I am committed to
            delivering high-quality results. Explore my portfolio and discover
            how my skills and expertise can contribute to the success of your
            next project.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Home;
