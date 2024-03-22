import  { useState } from "react";

const ServiceCard = ({ imgSrc, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-white p-6 rounded-lg shadow-lg transform transition duration-500 hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="w-24 h-24 mb-4 mx-auto rounded-full border-8 border-blue-500 flex items-center justify-center">
        <img
          src={imgSrc}
          alt={title}
          className={`transition-transform duration-1000 ${
            isHovered ? "rotate-360" : "rotate-0"
          }`}
        />
      </div>
      <h4 className="text-xl mb-2">{title}</h4>
      <p>{description}</p>
    </div>
  );
};

const Box = () => {
  return (
    <div className="bg-blue-500 min-h-screen flex flex-col items-center py-12">
      <h1 className="text-white text-3xl uppercase mb-20">What We Do?</h1>
      <div className="flex flex-wrap justify-center gap-4">
        <ServiceCard
          imgSrc="https://fadzrinmadu.github.io/hosted-assets/website-design-service-section/icon-apple.png"
          title="App Design"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat molestiae ducimus laborum voluptate quisquam adipisci aut tempore cum iste nesciunt repudiandae sapiente, et suscipit."
        />
        <ServiceCard
          imgSrc="https://fadzrinmadu.github.io/hosted-assets/website-design-service-section/icon-android.png"
          title="Development"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat molestiae ducimus laborum voluptate quisquam adipisci aut tempore cum iste nesciunt repudiandae sapiente, et suscipit."
        />
        <ServiceCard
          imgSrc="https://fadzrinmadu.github.io/hosted-assets/website-design-service-section/icon-geography.png"
          title="Marketing"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat molestiae ducimus laborum voluptate quisquam adipisci aut tempore cum iste nesciunt repudiandae sapiente, et suscipit."
        />
      </div>
    </div>
  );
};

export default Box;
