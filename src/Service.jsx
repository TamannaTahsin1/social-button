import s1 from './assets/s1.png'
const Service = () => {
    const sectionsData = [
        {
          image: s1,
          title: "Mobile App Development",
          description:
            "Ensuring excellence through rigorous testing. Our SQA services guarantee the quality, performance, and reliability of your software, adhering to the highest industry standards.",
        },
        {
          image: s1,
          title: "Desktop App Development",
          description:
            "Ensuring excellence through rigorous testing. Our SQA services guarantee the quality, performance, and reliability of your software, adhering to the highest industry standards.",
        },
        {
          image: s1,
          title: "Web Development",
          description:
            "Ensuring excellence through rigorous testing. Our SQA services guarantee the quality, performance, and reliability of your software, adhering to the highest industry standards.",
        },
      ];
  return (
    <div className="my-40">
      <div className="flex justify-center items-center gap-10 ">
       {
        sectionsData.map((section, index) =>(
            <div key={index} className="relative group ">
            <div className=" w-[350px] h-full shadow-xl rounded-md p-10 space-y-5  bg-black z-10 transform hover:-translate-y-7 transition duration-700">
              <img
                src="https://fadzrinmadu.github.io/hosted-assets/website-design-service-section/icon-apple.png"
                className="absolute ml-24 -mt-20 bg-black p-2 rounded-full border-[10px]  border-white transform group-hover:rotate-[360deg] origin-center transition duration-1000"
                alt=""
              />
              <h1 className="text-center font-semibold text-xl">App Design</h1>
              <p className="relative text-gray-500 text-center ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat
                molestiae ducimus laborum voluptate quisquam adipisci aut tempore
                cum iste nesciunt repudiandae sapiente, et suscipit.
              </p>
            </div>
            <div className="absolute -z-50 duration-300 top-10 left-[56px] group-hover:top-12 h-60 bg-black rounded-md w-[250px] text-green-700"></div>
          </div>
        ))
       }
      </div>
    </div>
  );
};

export default Service;
