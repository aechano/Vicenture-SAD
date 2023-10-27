import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../../components/Banner';
import Sections from '../../../components/Sections';
import BackToTop from '../../../components/BackToTop';

export default function AboutSanVicente() {
  return (
    <div>
      {/* Hero Section */}
      <Banner
        src={require("../../../res/img/mananap_falls.png")}
        alt="Mananap Falls"
        searchBar={true}
      >
        <div className="text-white justify-center items-center text-center">
          <h1 className="lg:text-6xl font-bold p-0 md:text-5xl text-2xl md:p-2 mb-0 mt-0">
            Get to Know San Vicente!
          </h1>
        </div>
      </Banner>

      {/* San Vicente, Camarines Norte */}
      <div className="flex flex-row">
        <div className="lg:w-2/3 p-2 bg-white">
          <h1 className="text-3xl font-bold mt-7 ml-5">San Vicente,</h1>
          <h1 className="text-3xl font-bold ml-5">Camarines Norte</h1>
          <p className="text-35 text-left mt-6 ml-5">San Vicente, formally recognized as the Municipality of San Vicente, is a town of the 5th class located in the province of Camarines Norte, Philippines. As of the 2020 census, it is home to a population of approximately 12,579 residents. The Mananap Falls is approximately 20–25 ft tall, tucked inside the thick forest and mountains. The water was ice cold, and there is a small raft tied which will lead you near the falls and a ladder to get to the top of the falls. There is a jumping point as well. It is more than this we-attitude that is practiced by the people, each one treating the other as more than a neighbor. A large segment of the population is related by blood.
          </p>
        </div>
        <div className="lg:w-2/3 p-4">
          <video className="w-full h-full p-4" autoPlay loop controls muted>
            <source src="https://tecdn.b-cdn.net/img/video/Sail-Away.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* History Unveiling: San Vicente */}
      <Sections
        left={true}
        title="History Unveiling: San Vicente"
        src={require("../../../res/img/mananap.jpg")}
        alt="Mananap Falls"
        button={<Link to="/history" className="button-link">Read More</Link>}
        arrow={true}
        href="/">
        San Vicente, formally recognized as the Municipality of San Vicente, is a town of the 5th class located in the province of Camarines Norte, Philippines. As of the 2020 census, it is home to a population of approximately 12,579 residents. The Mananap Falls is approximately 20–25 ft tall, tucked inside the thick forest and mountains. The water was ice cold, and there is a small raft tied which will lead you near the falls and a ladder to get to the top of the falls. There is a jumping point as well. It is more than this we-attitude that is practiced by the people, each one treating the other as more than a neighbor. A large segment of the population is related by blood.
      </Sections>

      {/* SV Hymn */}
      <div className="flex flex-row justify-center">
        {/* Center the content */}
        <div className="lg:w-2/3 p-2 bg-white">
          <h1 className="text-3xl font-bold text-center mt-6">San Vicente Hymn</h1>
          <div className="text-40 text-center mt-4 italic">
            <p className="mt-2">Pagmamahal sa Makati</p>
            <p className="mt-2">Bayan na itatanghal</p>
            <p className="mt-2">Sa ngalan ng mga malalaya na may pagtingin sa bansa</p>
            <p className="mt-2">Diwa't puso na natin sa Makati ibibigay!</p>
            <p className="mt-2">Kapit bisig tayo itaguyod na natin</p>
            <p className="mt-2">Ang magandang simula ang magpapaunlad ng bayan</p>
            <p className="mt-2">O Makati na aming mahal</p>
            <p className="mt-2">Bayan mo'y itatanghal</p>
            <p className="mt-2">O Makati o Makati mahalin natin atin ito</p>
            <p className="mt-2">Kapit bisig tayo itaguyod na natin</p>
            <p className="mt-2">Ang maganda ng simula</p>
            <p className="mt-2">Ang magpapaunlad ng bayan!</p>
            <p className="mt-2">O Makati na aming mahal</p>
            <p className="mt-2">Bayan mo'y itatanghal</p>
            <p className="mt-2 mb-5">O Makati o Makati mahalin natin atin ito</p>
          </div>
        </div>
      </div>

      <div className="flex flex-row">
        {/* Mandate Column */}
        <div className="w-1/3 p-2 bg-lgu-green text-lgu-lime max-h-screen overflow-y-auto">
          <h1 className="text-3xl font-bold mt-3 ml-5">Mandate</h1>
          <p className="text-35 text-left mt-4 ml-5">
            To serve primarily as a general-purpose government for the coordination of effective and efficient delivery of basic and regular governance of the inhabitants within its territorial jurisdiction.
          </p>
        </div>

        {/* Vision Column */}
        <div className="w-1/3 p-2 bg-lgu-green text-lgu-lime max-h-screen overflow-y-auto">
          <h1 className="text-3xl font-bold mt-3 ml-5">Vision</h1>
          <p className="text-35 text-left mt-4 ml-5 mb-10">
            San Vicente is a center for agriculture, sustainable agro-processing, eco-tourism and hydrothermal energy and the first walkable municipality in the province of Camarines Norte, where responsible and self-reliant men and women live and enjoy safe and quality life in an efficiently managed environment and community vested with rich heritage and culture under a transparent and innovative leadership.
          </p>
        </div>

        {/* Mission Column */}
        <div className="w-1/3 p-2 bg-lgu-green text-lgu-lime max-h-screen overflow-y-auto">
          <h1 className="text-3xl font-bold mt-3 ml-5">Mission</h1>
          <p className="text-35 text-left mt-4 ml-5">
            The Municipal Government shall spearhead the implementation of various development programs, projects, and activities through people empowerment, efficient and effective utilization of resources, committed public servants with strong political will.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="w-full p-2 flex flex-wrap justify-center">
        <div className="w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mx-5 my-5">
          <Link to="/other_info">
            <div className="block w-full rounded-lg bg-lgu-yellow shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <img
                  className="rounded-t-lg w-full h-60"
                  src={require("../../../res/img/geography.png")}
                  alt="Geography"
                />
              </div>
              <div className="p-5 text-center">
                <p className="text-base text-black font-bold">
                  Geography
                </p>
              </div>
            </div>
          </Link>
        </div>

        <div className="w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mx-5 my-5">
          <Link to="/other_info">
            <div className="block w-full rounded-lg bg-lgu-yellow shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <img
                  className="rounded-t-lg w-full h-60"
                  src={require("../../../res/img/economy.jpg")}
                  alt="Economy"
                />
              </div>
              <div className="p-5 text-center">
                <p className="text-base text-black font-bold">
                  Economy
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="w-full p-2 flex flex-wrap justify-center mt-1">
        <div className="w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mx-5 my-5">
          <Link to="/other_info">
            <div className="block w-full rounded-lg bg-lgu-yellow shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <img
                  className="rounded-t-lg w-full h-60"
                  src={require("../../../res/img/population.jpg")}
                  alt="Population"
                />
              </div>
              <div className="p-5 text-center">
                <p className="text-base text-black font-bold">
                  Population
                </p>
              </div>
            </div>
          </Link>
        </div>

        <div className="w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 mx-5 my-5">
          <Link to="/other_info">
            <div className="block w-full rounded-lg bg-lgu-yellow shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <img
                  className="rounded-t-lg w-full h-60"
                  src={require("../../../res/img/geography.png")}
                  alt="Barangays"
                />
              </div>
              <div className="p-5 text-center">
                <p className="text-base text-black font-bold">
                  Barangays
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <BackToTop />
    </div>
  );
}
