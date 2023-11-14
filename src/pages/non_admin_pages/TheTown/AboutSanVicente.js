import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../../components/Banner';
import SectionContent from '../../../components/SectionContent';
import BackToTop from '../../../components/BackToTop';
import { PATH_NAME } from '../../../Variables/GLOBAL_VARIABLE';


export default function AboutSanVicente() {
  const [isHovered, setHovered] = useState(false);
  const [isHovered1, setHovered1] = useState(false);
  const [isHovered2, setHovered2] = useState(false);
  const [isHovered3, setHovered3] = useState(false);
  return (
    <div>
      <Banner bannerType="common" searchBar={true} breadcrumbs={[{ title: "Home", to: PATH_NAME.Home }]}>
        <p>Get to Know San Vicente!</p>
      </Banner>

      {/* San Vicente, Camarines Norte */}
      <div className="block lg:flex lg:flex-row">
        <div className="lg:w-2/3 p-2 bg-white">
          <h1 className="text-3xl text-left font-bold pl-4 mt-7 ml-5">San Vicente, Camarines Norte</h1>
          <p className="text-40 text-justify p-4 mt-4 ml-5 leading-9">San Vicente, formally recognized as the Municipality of San Vicente, is a town of the 5th class located in the province of Camarines Norte, Philippines. As of the 2020 census, it is home to a population of approximately 12,579 residents. The Mananap Falls is approximately 20–25 ft tall, tucked inside the thick forest and mountains. The water was ice cold, and there is a small raft tied which will lead you near the falls and a ladder to get to the top of the falls. There is a jumping point as well. It is more than this we-attitude that is practiced by the people, each one treating the other as more than a neighbor. A large segment of the population is related by blood.<br></br><br></br> Step into San Vicente, and you'll find yourself in a living museum, where every street and corner has a story to tell. From the graceful swaying on the coconut palms to the vibrant festivities that echo through its streets, this town encapsulates the essence of Bicolano charm. Whether you're tracing its historical origins or savoring the serenity of its landscapes, San Vicente invites you to uncover the past and embrace the present. A town that has weathered the test of time, it continues to thrive, and its captivating heritage awaits those ready to explore.
          </p>
        </div>
        <div className="lg:w-2/3 p-4">
          <video className="w-full h-full rounded-2xl p-4" autoPlay loop controls muted>
            <source src="https://tecdn.b-cdn.net/img/video/Sail-Away.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* History Unveiling: San Vicente */}
      <SectionContent
        left={true}
        title="History Unveiling: San Vicente"
        src={require("../../../res/img/mananap.jpg")}
        alt="Mananap Falls"
        button="Read More"
        arrow={true}
        href={PATH_NAME.TheTown.History} onClick={() => window.scrollTo({ top: 0, left: 0 })}>
        Travel back in time and immerse yourself in the captivating history of San Vicente. The town's roots stretch far beyond Camarines Norte's official formation in 1919. Historical records tell us that San Vicente came into existence around 1790, boasting a population of 1,187 residents. Religious elements heavily influenced the town's origins. It started as a barrio named San Antonio, strategically located southwest of Daet. In 1771, under the guidance of Bishop Fray Antonio de Luna, it was a mission aimed at expanding the Franciscan Missions in Daet. However, due to a series of events, the Franciscans had to depart, only for the mission to be revived in 1783 and renamed San Vicente, dedicated to Saint Vincent Ferrer.

      </SectionContent>

      {/* SV Hymn */}

      {/* Center the content */}
      <div className='relative bg-fixed bg-cover p-10'
        style={{
          backgroundImage: "url(" + require("../../../res/img/LGU-PERS.jpg") + ")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}>
        <div className="absolute inset-0 bg-green-800 bg-opacity-70"></div>

        <div className='p-5 relative z-10'>
          <h1 className="text-4xl font-bold text-center mt-6 text-white">San Vicente Hymn</h1>
        </div>

        <div className="text-40 text-center mt-2 italic relative z-10 text-white">
          <p className="mt-2">Ang luntiang kabundukan, Nitong ating bayang minamahal</p>
          <p className="mt-2">Tila isang Paraiso, Biyaya sa pamayanan</p>
          <p className="mt-2">Yamang gubat na taglay, Bulsa ay tubig na Dalisay</p>
          <p className="mt-2">Ganda ng Talon ng Mananap, Mga turista hinahanap</p>
          <p className="mt-2">Siyam na nayon, iisang layon, Kalakal at agrikultura</p>
          <p className="mt-2">Turismo at pagsasaka, Edukasyon dinadakila</p>
          <p className="mt-2">Sa Silangan at Kanluran, Man-Ogob, Cabanbanan</p>
          <p className="mt-2">Calabagas, Asdum, Fabrica, Iraya sur, San Jose, anong sigla!</p>
          <p className="mt-6 mb-2"><b>CHORUS</b></p>
          <p className="mt-2">O San Vicente, yamang likas natatangi, Kaulara’y kapuri-puri</p>
          <p className="mt-2">Masayang nagbunbunyi. Pakinabang nito sa pamayanan masaganang buhay</p>
          <p className="mt-2">Ang kinabukasan asam tagumpay ng bayan</p>
          <p className="mt-2">Mga tao ay naghahabi, Angking sining at kultura</p>
          <p className="mt-2">Sayaw Esperanza de San Vicente, Laso de Palo at Española</p>
          <p className="mt-2">Ang madla’y nagpupugay, At nagkakaisang tunay</p>
          <p className="mt-2">Sa tulong ng Patrong San Vicente, Sa pag-unlad siyang saksi</p>
          <p className="mt-3"><b>REPEAT CHORUS TWICE</b></p>
        </div>
      </div>



      <div className="block md:flex md:flex-row bg-lgu-green p-10 space-y-2 md:space-y-0 md:space-x-4">
        {/* Mandate Column */}
        <div className="w-full p-2 text-lgu-lime max-h-screen overflow-y-auto border-4 rounded-xl border-lgu-lime">
          <h1 className="text-3xl font-bold mt-3 ml-5 text-center">Mandate</h1>
          <p className="text-35 text-left mt-4 ml-5 p-5 leading-10">
            To serve primarily as a general-purpose government for the coordination of effective and efficient delivery of basic and regular governance of the inhabitants within its territorial jurisdiction.
          </p>
        </div>

        {/* Vision Column */}
        <div className="w-full p-2  text-lgu-lime max-h-screen overflow-y-auto border-4 rounded-xl border-lgu-lime">
          <h1 className="text-3xl font-bold mt-3 ml-5 text-center">Vision</h1>
          <p className="text-35 text-left mt-4 ml-5 p-5 leading-10">
            San Vicente is a center for agriculture, sustainable agro-processing, eco-tourism and hydrothermal energy and the first walkable municipality in the province of Camarines Norte, where responsible and self-reliant men and women live and enjoy safe and quality life in an efficiently managed environment and community vested with rich heritage and culture under a transparent and innovative leadership.
          </p>
        </div>

        {/* Mission Column */}
        <div className="w-full p-2  text-lgu-lime max-h-screen overflow-y-auto border-4 rounded-xl border-lgu-lime">
          <h1 className="text-3xl font-bold mt-3 ml-5 text-center">Mission</h1>
          <p className="text-35 text-left mt-4 ml-5 p-5 leading-10">
            The Municipal Government shall spearhead the implementation of various development programs, projects, and activities through people empowerment, efficient and effective utilization of resources, committed public servants with strong political will.
          </p>
        </div>
      </div>

      {/* Cards Section */}

      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 m-5 p-10">

        <div className='pb-5'>
          <h1 className='text-4xl text-center font-bold pb-2'>Additional Information</h1>
        </div>

        <div className='flex flex-wrap md:justify-center lg:flex-nowrap'>
          <div className="md:w-80 w-full mx-3 my-5 relative overflow-hidden group">
            <Link to={PATH_NAME.TheTown.OtherInfo} onClick={() => window.scrollTo({ top: 0, left: 0 })}>
              <div
                className="block w-full rounded-lg bg-lgu-green shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] relative overflow-hidden"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                <div className="relative">
                  <img
                    className="rounded-t-lg w-full md:h-52 transition-transform transform group-hover:scale-107"
                    src={require("../../../res/img/geography.png")}
                    alt="Geography"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity group-hover:opacity-75"></div>
                </div>
                <div className="absolute -top-8 left-3 w-full h-full flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100 break-words p-4">
                  <p className="text-base text-white font-normal">The municipality covers 57.49 square kilometers (22.20 square miles), accounting for 2.52% of Camarines Norte's total land area. According to the 2020 Census, its population was 12,579.</p>
                </div>
                <div className="p-5 text-center">
                  {isHovered ? (
                    <button className="border-2 p-2 pl-5 pr-5 rounded-lg text-lgu-lime text-sm font-semibold">Read More</button>
                  ) : (
                    <p className="text-base text-lgu-lime font-bold">Geography</p>
                  )}
                </div>
              </div>
            </Link>
          </div>

          <div className="md:w-80 w-full mx-3 my-5 relative overflow-hidden group">
            <Link to={PATH_NAME.TheTown.OtherInfo} onClick={() => window.scrollTo({ top: 0, left: 0 })}>
              <div
                className="block w-full rounded-lg bg-lgu-green shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] relative overflow-hidden"
                onMouseEnter={() => setHovered1(true)}
                onMouseLeave={() => setHovered1(false)}
              >
                <div className="relative">
                  <img
                    className="rounded-t-lg w-full md:h-52 transition-transform transform group-hover:scale-107"
                    src={require("../../../res/img/economy.jpg")}
                    alt="Economy"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity group-hover:opacity-75"></div>
                </div>
                <div className="absolute -top-8 left-1 w-full h-full flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100 break-words p-4">
                  <p className="text-base text-white font-normal">San Vicente aspires to secure a brighter future over the next decade, one characterized by an enhanced quality of life and a thriving economy.</p>
                </div>
                <div className="p-5 text-center">
                  {isHovered1 ? (
                    <button className="border-2 p-2 pl-5 pr-5 rounded-lg text-lgu-lime text-sm font-semibold">Read More</button>
                  ) : (
                    <p className="text-base text-lgu-lime font-bold">Economy</p>
                  )}
                </div>
              </div>
            </Link>
          </div>

          <div className="md:w-80 w-full mx-3 my-5 relative overflow-hidden group">
            <Link to={PATH_NAME.TheTown.OtherInfo} onClick={() => window.scrollTo({ top: 0, left: 0 })}>
              <div
                className="block w-full rounded-lg bg-lgu-green shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] relative overflow-hidden"
                onMouseEnter={() => setHovered2(true)}
                onMouseLeave={() => setHovered2(false)}
              >
                <div className="relative">
                  <img
                    className="rounded-t-lg w-full md:h-52 transition-transform transform group-hover:scale-107"
                    src={require("../../../res/img/population.jpg")}
                    alt="Population"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity group-hover:opacity-75"></div>
                </div>
                <div className="absolute -top-8 left-1 w-full h-full flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100 break-words p-4">
                  <p className="text-base text-white font-normal">Based on the data from the PhilAtlas, the population of San Vicente totals 12,579 in the year 2020. Man-Ogob has 3,303 members, the highest percentage among the nine barangays.</p>
                </div>
                <div className="p-5 text-center">
                  {isHovered2 ? (
                    <button className="border-2 p-2 pl-5 pr-5 rounded-lg text-lgu-lime text-sm font-semibold">Read More</button>
                  ) : (
                    <p className="text-base text-lgu-lime font-bold">Population</p>
                  )}
                </div>
              </div>
            </Link>
          </div>

          <div className="md:w-80 w-full mx-3 my-5 relative overflow-hidden group">
            <Link to={PATH_NAME.TheTown.OtherInfo} onClick={() => window.scrollTo({ top: 0, left: 0 })}>
              <div
                className="block w-full rounded-lg bg-lgu-green shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] relative overflow-hidden"
                onMouseEnter={() => setHovered3(true)}
                onMouseLeave={() => setHovered3(false)}
              >
                <div className="relative">
                  <img
                    className="rounded-t-lg w-full md:h-52 transition-transform transform group-hover:scale-107"
                    src={require("../../../res/img/geography.png")}
                    alt="Barangay"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-black opacity-0 transition-opacity group-hover:opacity-75"></div>
                </div>
                <div className="absolute -top-8 left-1 w-full h-full flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100 break-words p-4">
                  <p className="text-base text-white font-normal">Asdum, Cabanban, Calabagas, Fabrica, Iraya Sur, Man-Ogob, Poblacion District 1 and 2, and San Jose are among the nine barangays that make up San Vicente.</p>
                </div>
                <div className="p-5 text-center">
                  {isHovered3 ? (
                    <button className="border-2 p-2 pl-5 pr-5 rounded-lg text-lgu-lime text-sm font-semibold">Read More</button>
                  ) : (
                    <p className="text-base text-lgu-lime font-bold">Barangays</p>
                  )}
                </div>
              </div>
            </Link>
          </div>

        </div>
      </div>






      <BackToTop />
    </div>
  );
}
