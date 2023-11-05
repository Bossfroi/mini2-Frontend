import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Footer from '../Footer';

const categoryList = [
  {
    id: 1,
    title: "Air Compressor",
    picture: "https://guzent.com/wp-content/uploads/2023/02/Guzent-Air-Compressor-Product-Image.jpg.webp",
    picture1:"https://guzent.com/wp-content/uploads/2023/02/Guzent-Air-Compressor-Product-01.jpg.webp",
    picture2:"https://guzent.com/wp-content/uploads/2023/02/Guzent-Air-Compressor-Product-02.jpg.webp",
    picture3:"https://guzent.com/wp-content/uploads/2023/02/Guzent-Air-Compressor-Product-03.jpg.webp",
    link: "/AirCompressor",
    discription: "We offer air compressor rentals and sales in the Philippines that are designed to deliver high-quality performance, reliability, and ease of use for a variety of applications. These machines power pneumatic tools and produce large volumes of air for large-scale industrial processes.",
    rentalAmount: 500
    
  },
  {
    id: 2,
    title: "Backhoe",
    picture: "https://guzent.com/wp-content/uploads/2023/02/Guzent-Backhoe-Product-Image.jpg.webp",
    picture1:"https://guzent.com/wp-content/uploads/2023/02/Guzent-Backhoe-Product-01.jpg",
    picture2:"https://guzent.com/wp-content/uploads/2023/02/Guzent-Backhoe-Product-03.jpg.webp",
    picture3:"https://guzent.com/wp-content/uploads/2023/02/Guzent-Backhoe-Product-02.jpg.webp",
    link: "/Backhoe",
    discription: "We rent and sell excavating machines such as the backhoe to customers involved in construction, landscaping, and other industrial businesses. These are easy to operate and come with multiple safety features, making them reliable and practical machines to have on the job site.",
    rentalAmount: 600
  },
  {
    id: 3,
    title: "Backhoe Loader",
    picture: "https://guzent.com/wp-content/uploads/2023/02/Guzent-Backhoe-Loader-Product-Image.jpg.webp",
    picture1:"https://guzent.com/wp-content/uploads/2023/02/Guzent-Backhoe-Loader-Product-01.jpg.webp",
    picture2:"https://guzent.com/wp-content/uploads/2023/02/Guzent-Backhoe-Loader-Product-02.jpg.webp",
    picture3:"https://guzent.com/wp-content/uploads/2023/02/Guzent-Backhoe-Loader-Product-03.jpg.webp",
    link: "/BackhoeLoader",
    discription: "We rent and sell backhoe loaders that can be used for a wide variety of urban engineering projects and minor construction work that involve tasks such as excavation, landscaping, breaking asphalt, and the transport of light building materials.",
    rentalAmount: 700
  },
  {
    id: 4,
    title: "Boom Truck",
    picture: "https://guzent.com/wp-content/uploads/2023/03/Guzent-Boom-Truck-Product-Image-V2.jpg.webp",
    picture1:"https://guzent.com/wp-content/uploads/2023/03/Guzent-Isuzu-Boom-Truck.jpg",
    picture2:"https://guzent.com/wp-content/uploads/2023/02/Guzent-Boom-Truck-Product-01.jpg.webp",
    picture3:"https://guzent.com/wp-content/uploads/2023/03/Guzent-XCMG-Boom-Truck-02.jpg",
    link: "/BoomTruck",
    discription: "We offer boom truck rentals and sales in the Philippines for use at construction, manufacturing, and other industrial sites. The boom crane attached to a flatbed truck or tractor allows for the easy and convenient transport of materials and cargo.",
    rentalAmount: 800
  },
  {
    id: 5,
    title: "Crane",
    picture: "https://guzent.com/wp-content/uploads/2023/02/Guzent-Crane-Product-Image.jpg.webp",
    picture1:"https://guzent.com/wp-content/uploads/2023/02/Guzent-Crane-Product-Image-01-1.jpg.webp",
    picture2:"https://guzent.com/wp-content/uploads/2023/02/Guzent-Crane-Product-Image-03.jpg.webp",
    picture3:"https://guzent.com/wp-content/uploads/2023/02/Guzent-Crane-Product-Image-02-1.jpg.webp",
    link: "/Crane",
    discription: "We rent and sell cranes which are often used in construction, manufacturing, transportation, and other industries that require the lifting and movement of heavy objects. We only provide trusted brands of heavy-duty cranes to ensure the quick, convenient, and safe transport of heavy loads around the work site. ",
    rentalAmount: 900
  },
  {
    id: 6,
    title: "Excavator",
    picture: "https://guzent.com/wp-content/uploads/2023/02/Guzent-Excavator-Product-Image.jpg.webp",
    picture1:"https://guzent.com/wp-content/uploads/2023/02/Guzent-Excavator-Product-Image-01.jpg",
    picture2:"https://guzent.com/wp-content/uploads/2023/02/Guzent-Excavator-Product-Image-03.jpg.webp",
    picture3:"https://guzent.com/wp-content/uploads/2023/02/Guzent-Excavator-Product-Image-02.jpg.webp",
    link: "/Excavator",
    discription: "We rent and sell excavators that are essential for industrial, construction, and mining businesses. These are commonly used for digging, material handling, landscaping, demolition, river dredging, and pile driving.",
    rentalAmount: 1000
  },
  {
    id: 7,
    title: "Forklift",
    picture: "https://guzent.com/wp-content/uploads/2023/02/Guzent-Forklift-Product-Image.jpg.webp",
    picture1:"https://guzent.com/wp-content/uploads/2023/02/Guzent-Forklift-Product-Image-01.jpg.webp",
    picture2:"https://guzent.com/wp-content/uploads/2023/02/Guzent-Forklift-Product-Image-02.jpg.webp",
    picture3:"https://guzent.com/wp-content/uploads/2023/02/Guzent-Forklift-Product-Image-01.jpg.webp",
    link: "/Forklift",
    discription: "We rent and sell forklifts that are designed to easily lift and move materials across short distances. Each forklift is well-maintained in prime condition to ensure safety and productivity at the work site.",
    rentalAmount: 1100
  },
  {
    id: 8,
    title: "Generator",
    picture: "https://guzent.com/wp-content/uploads/2023/02/Guzent-Generator-Product-Image.jpg.webp",
    picture1:"https://guzent.com/wp-content/uploads/2023/02/Guzent-Generator-Product-Image-01.jpg.webp",
    picture2:"https://guzent.com/wp-content/uploads/2023/02/Guzent-Generator-Product-Image-02.jpg.webp",
    picture3:"https://guzent.com/wp-content/uploads/2023/02/Guzent-Generator-Product-Image-03.jpg.webp",
    link: "/Generator",
    discription: "We rent and sell generators from trusted brands known for durability, and superior mechanical and electrical performance. Reliable sources of energy are necessary at every construction and industrial work site. Generators are versatile sources of energy that provide power when and where it is needed, regardless of the availability or reliability of the power grid.",
    rentalAmount: 1200
  },
  {
    id: 9,
    title: "Grader",
    picture: "https://guzent.com/wp-content/uploads/2023/02/Guzent-Grader-Product-Image.jpg.webp",
    picture1:"https://guzent.com/wp-content/uploads/2023/02/Guzent-Grader-Product-Image-01.jpg.webp",
    picture2:"https://guzent.com/wp-content/uploads/2023/02/Guzent-Grader-Product-Image-02.jpg.webp",
    picture3:"https://guzent.com/wp-content/uploads/2023/02/Guzent-Grader-Product-Image-03.jpg.webp",
    link: "/Grader",
    discription: "We rent and sell motor graders which are used to create a smooth, level surface on roads, highways, and other construction sites. They are often used in combination with other equipment, such as bulldozers and excavators, to prepare construction sites and to finish grading work.",
    rentalAmount: 1300
  },
  {
    id: 10,
    title: "Hydraulic Breaker",
    picture: "https://guzent.com/wp-content/uploads/2023/02/Guzent-Hydraulic-Breaker-Product-Image.jpg.webp",
    picture1:"https://guzent.com/wp-content/uploads/2023/02/Guzent-Hydraulic-Breaker-Product-Image-01.jpg.webp",
    picture2:"https://guzent.com/wp-content/uploads/2023/02/Guzent-Hydraulic-Breaker-Product-Image-02.jpg.webp",
    picture3:"https://guzent.com/wp-content/uploads/2023/02/Guzent-Hydraulic-Breaker-Product-Image-03.jpg.webp",
    link: "/HydraulicBreaker",
    discription: "We rent and sell heavy-duty hydraulic breaker attachments along with machines such as excavators. These are powerful tools that effectively and quickly break down concrete, rocks, and other tough materials at construction projects and demolition sites.",
    rentalAmount: 1400
  },
  {
    id: 11,
    title: "Light Tower",
    picture: "https://guzent.com/wp-content/uploads/2023/02/Guzent-Light-Tower-Product-Image.jpg.webp",
    picture1:"https://guzent.com/wp-content/uploads/2023/02/Guzent-Light-Tower-Product-Image-01.jpg.webp",
    picture2:"https://guzent.com/wp-content/uploads/2023/02/Guzent-Light-Tower-Product-Image-02.jpg.webp",
    picture3:"https://guzent.com/wp-content/uploads/2023/02/Guzent-Light-Tower-Product-Image-03.jpg.webp",
    link: "/LightTower",
    discription: "We offer light tower rentals and sales in the Philippines that can be used for construction, mining, emergency services, and other purposes. These may be powered by generators, batteries, and other portable power sources.",
    rentalAmount: 1500
  },
  {
    id: 12,
    title: "Manlift",
    picture: "https://guzent.com/wp-content/uploads/2023/02/Guzent-Manlift-Product-Image.jpg.webp",
    picture1:"https://guzent.com/wp-content/uploads/2023/02/Guzent-Skyjack-Manlift-1.jpg",
    picture2:"https://guzent.com/wp-content/uploads/2023/02/Guzent-Skyjack-Manlift-02.jpg.webp",
    picture3:"https://guzent.com/wp-content/uploads/2023/02/Guzent-Skyjack-Manlift-03.jpg.webp",
    link: "/Manlift",
    discription: "These machines feature hydraulic lifting systems that come with a set of safety controls to prevent incidents of tipping over. Thus, workers can reach the tops of trees, electrical poles, and other tall structures, and do their jobs conveniently and safely.",
    rentalAmount: 1600
  },
  {
    id: 13,
    title: "Road Roller",
    picture: "https://guzent.com/wp-content/uploads/2023/02/Guzent-Road-Roller-Product-Image.jpg.webp",
    picture1:"https://guzent.com/wp-content/uploads/2023/02/Guzent-Road-Roller-Product-Image-01.jpg.webp",
    picture2:"https://guzent.com/wp-content/uploads/2023/02/Guzent-Road-Roller-Product-Image-02.jpg.webp",
    picture3:"https://guzent.com/wp-content/uploads/2023/02/Guzent-Road-Roller-Product-Image-03.jpg.webp",
    link: "/RoadRoller",
    discription: "We rent and sell road rollers with different roller types, drum widths, and other special features to help achieve a variety of work tasks. Commonly used in road construction projects, road rollers flatten compact soil, gravel, concrete, and asphalt quickly and evenly. These machines may also be used at landfills, as well as on agricultural farmland.",
    rentalAmount: 1700
  },
  {
    id: 14,
    title: "Scissor Lift",
    picture: "https://guzent.com/wp-content/uploads/2023/02/Guzent-Scissor-Lift-Product-Image.jpg.webp",
    picture1:"https://guzent.com/wp-content/uploads/2023/02/Guzent-Scissor-Lift-Product-Image-02.jpg.webp",
    picture2:"https://guzent.com/wp-content/uploads/2023/02/Guzent-Scissor-Lift-Product-Image-03.jpg.webp",
    picture3:"https://guzent.com/wp-content/uploads/2023/02/Guzent-Scissor-Lift-Product-Image-01.jpg.webp",
    link: "/ScissorLift",
    discription: "We offer scissor lift rentals and sales in the Philippines that are safe and easy to control. These provide easy access to high structures such as building facades and electrical posts. We also supply various lengths of work platforms and extending bridges along with our scissor lifts to allow closer and secure access to work areas.",
    rentalAmount: 1800
  },
  {
    id: 15,
    title: "Skid Steer Loader",
    picture: "https://guzent.com/wp-content/uploads/2023/02/Guzent-Skid-Steer-Loader-Product-Image.jpg.webp",
    picture1:"https://guzent.com/wp-content/uploads/2023/02/Guzent-Skid-Steer-Loader-Product-Image-01.jpg.webp",
    picture2:"https://guzent.com/wp-content/uploads/2023/02/Guzent-Skid-Steer-Loader-Product-Image-02.jpg.webp",
    picture3:"https://guzent.com/wp-content/uploads/2023/02/Guzent-Skid-Steer-Loader-Product-Image-03.jpg",
    link: "/SkidSteerLoader",
    discription: "Our skid steer loaders come with a variety of labor-saving attachments and tools that can be used for numerous tasks. We ensure our machines are equipped with superior safety features to protect the machine operator, as well as others in the work place.",
    rentalAmount: 1900
  },
  {id: 16,
    title: "Telehandler",
    picture: "https://guzent.com/wp-content/uploads/2023/02/Guzent-Telehandler-Product-Image.jpg.webp",
    picture1:"https://guzent.com/wp-content/uploads/2023/02/Guzent-Telehandler-Product-Image-01.jpg.webp",
    picture2:"https://guzent.com/wp-content/uploads/2023/02/Guzent-Telehandler-Product-Image-02.jpg.webp",
    picture3:"https://guzent.com/wp-content/uploads/2023/02/Guzent-Telehandler-Product-Image-03.jpg.webp",
    link: "/TeleHandler",
    discription: "We rent and sell telehandlers for various agricultural and industrial operations. Due to their technical capability to access high and unreachable places, telehandlers offer greater mobility and efficiency at the job site.",
    rentalAmount: 2000
  },
  {
    id: 17,
    title: "Telescopic ClamShell",
    picture: "https://guzent.com/wp-content/uploads/2023/02/Guzent-Telescopic-Clamshell-Product-Image.jpg.webp",
    picture1:"https://guzent.com/wp-content/uploads/2023/02/Guzent-Telescopic-Clamshell-Product-Image-01.jpg.webp",
    picture2:"https://guzent.com/wp-content/uploads/2023/02/Guzent-Telescopic-Clamshell-Product-Image-02.jpg.webp",
    picture3:"https://guzent.com/wp-content/uploads/2023/02/Guzent-Telescopic-Clamshell-Product-Image-03.jpg.webp",
    link: "/TelescopicClamshell",
    discription: "It can be used for hauling earth from great depths, and loading heavy materials onto transport vehicles. Our reliable telescopic clamshells are engineered to operate safely without difficulty, and thus promote efficiency and productivity on the work site.",
    rentalAmount: 2100
  },
  {
    id: 18,
    title: "Wheel Loader",
    picture: "https://guzent.com/wp-content/uploads/2023/02/Guzent-Wheel-Loader-Product-Image.jpg.webp",
    picture1:"https://guzent.com/wp-content/uploads/2023/02/Guzent-Wheel-Loader-Product-Image-01.jpg",
    picture2:"https://guzent.com/wp-content/uploads/2023/02/Guzent-Wheel-Loader-Product-Image-02.jpg.webp",
    picture3:"https://guzent.com/wp-content/uploads/2023/02/Guzent-Wheel-Loader-Product-Image-03.jpg",
    link: "/WheelLoader",
    discription: "We rent and sell wheel loaders for various landscaping, mining, construction, and agricultural applications. Commonly used for loading, handling, and transporting different types of materials, these versatile machines can aid in the quick and efficient completion of a project that meets the highest standards.",
    rentalAmount: 2200
  },
  {
    id: 19,
    title: "Auger Drill",
    picture: "https://guzent.com/wp-content/uploads/2023/10/Guzent-Auger-Product-Image.jpg",
    picture1:"https://guzent.com/wp-content/uploads/2023/10/Guzent-Auger-Product-01-1.jpg",
    picture2:"https://guzent.com/wp-content/uploads/2023/10/Guzent-Auger-Product-02.jpg",
    picture3:"https://guzent.com/wp-content/uploads/2023/10/Guzent-Auger-Product-03.jpg",
    link: "/AugerDrill",
    discription: "We offer auger drill attachment rentals and sales in the Philippines that are designed to cut and do any job with maximum efficiency. As a tool, augers are extremely versatile and can save you time and effort.",
    rentalAmount: 2300
  },
  {
    id: 20,
    title: "Trencher",
    picture: "https://guzent.com/wp-content/uploads/2023/10/Guzent-Trencher-Product-Image.jpg",
    picture1:"https://guzent.com/wp-content/uploads/2023/10/Guzent-Trencher-Product-01-1.jpg",
    picture2:"https://guzent.com/wp-content/uploads/2023/10/Guzent-Trencher-Product-02-1.jpg",
    picture3:"https://guzent.com/wp-content/uploads/2023/10/Guzent-Trencher-Product-03-1.jpg",
    link: "/Trencher",
    discription: "Our trencher attachment is made of the highest quality hydraulic motors that allow flow rates of up to 150LPM. They have the reliability and power you need to carry out any trenching jobs with ease.",
    rentalAmount: 2400
  },

];




function CategoryDetails() {
  const { id } = useParams();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const category = categoryList.find((category) => category.id === parseInt(id));

  if (!category) {
    return <div>Category not found</div>;
  }

  const [cart, setCart] = useState([]);

  const addToCart = () => {
    if (startDate && endDate) {

      const cartItem = {
        id: category.id,
        title: category.title,
        rentalAmount: category.rentalAmount,
        startDate,
        endDate,
        rentdays: rentalDays,
      };
  
      setCart([...cart, cartItem]);
    }
  };
  const saveCartToLocalStorage = () => {
    if (startDate && endDate) {
      const rentalDays = (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24);
      const cartItem = {
        id: category.id,
        title: category.title,
        picture: category.picture,
        description: category.discription,
        rentalAmount: category.rentalAmount,
        startDate,
        endDate,
        rentdays: rentalDays,
      };

      localStorage.setItem(`cartuserdata ${category.id}`, JSON.stringify(cartItem));

      alert('Successfully added to Cart.');
    } else {
      alert('Please select start and end dates.');
    }
  };
 
  return (
    <div className="bg-red-300">
      <div className="flex">
        <img src={category.picture} alt={category.title} className="w-1/2 h-auto m-8 mr-0" />
        <div className="bg-white p-6 shadow-md w-full sm:w-1/2 m-8 ml-0">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">{category.title}</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">{category.discription}</p>
          <p className="text-2xl font-semibold text-blue-500">
            Rental Amount: ${category.rentalAmount}
          </p>
  
          <div className="flex items-center mt-4">
            <div className="mb-4">
              <label htmlFor="startDate" className="block text-gray-700 text-sm font-bold">
                Start Date:
              </label>
              <input
                type="date"
                id="startDate"
                className="w-full p-2 border rounded-md"
                value={startDate}
             
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div className="mb-4 ml-4">
              <label htmlFor="endDate" className="block text-gray-700 text-sm font-bold">
                End Date:
              </label>
              <input
                type="date"
                id="endDate"
                className="w-full p-2 border rounded-md"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-8 flex">
            <div>
              <Link
                to={startDate && endDate ? "/PaymentMethod" : "#"}
                className={`p-3 mt-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600 ml-4 ${!startDate || !endDate ? "cursor-not-allowed opacity-50" : ""}`}
              >
                Make Payment
              </Link>
            </div>
        
            <div>
            <button
  onClick={() => {
    if (startDate && endDate) {
      saveCartToLocalStorage();
      addToCart();
    } else {
      alert('Please insert a Date');
    }
  }}
  className="p-2 bg-green-500 text-white rounded hover-bg-green-600 focus:outline-none focus:bg-green-600 ml-4"
>
  Add to Cart
</button>

            </div>
          </div>
        </div>
      </div>
  
  

      <Footer />
    </div>
  );
  
  
}

export default CategoryDetails;
