import React, { useState, useEffect } from "react";
import Banner from "../../../components/Banner";
import { useParams } from 'react-router-dom';
import { PATH_NAME, USER_TYPES } from "../../../Variables/GLOBAL_VARIABLE";
import Page403 from "../../Accounts/ErrorPages/Page403";


export default function ReasonsToInvestContent({ userType }) {

    const { contentID, subtopicID } = useParams();
    const [activeSubtopic, setActiveSubtopic] = useState(subtopicID || "");

    useEffect(() => {
      setActiveSubtopic(subtopicID || "");
    }, [subtopicID]);
  
    if ([USER_TYPES.Citizen, USER_TYPES.Guest, USER_TYPES.Tourist].includes(userType)) {
      return <Page403 />;
    }

    const contents = [
        {
            contentID: "agriculture",
            title: "Agriculture",
            body: (
              <div className="text-35 text-left ml-4 mt-6 border-b-2 border-lgu-lime pb-2">
                <div className="flex flex-col md:flex-row items-center">
                  <img
                    src={require("../../../res/img/agri.jpeg")}
                    alt="Farmers Planting Pineapple"
                    className="float-left mr-4 mb-8 ml-4 my-2 w-auto h-96 mt-2 object-cover md:w-96 md:h-96"
                  />
                  <p className="mt-4 mb-4 md:w-2/3">
                    Agriculture in San Vicente, Camarines Norte plays a pivotal role in the local economy, serving as its backbone. This sector not only sustains the population but also provides livelihood opportunities, supplies raw materials to industries, and fuels economic growth through trade and business activities. The agricultural landscape of San Vicente primarily focuses on the cultivation of major crops such as coconut, pineapple, and rice.<br>
                    </br><br></br>
                    In addition to these staples, the Municipality also engages in small-scale production of vegetables, livestock, poultry, and fisheries. One of the key income sources for farmers in San Vicente is the production of copra, which involves drying coconut kernels to extract valuable coconut oil. Furthermore, the production of coconut and pineapple fiber plays a significant role in the local economy and is facilitated by the Fabrica Manpower Fiber Association.<br>
                    </br><br></br>
                    To further support and enhance farming activities, the Local Government Unit (LGU) of San Vicente through Municipal Agricultural Office in coordination with various government agencies offers specialized training programs and initiates livelihood projects aimed at increasing farmers' productivity and improving the overall agricultural sector in the Municipality. This concerted effort reflects the commitment of San Vicente to ensure the sustainability and prosperity of its agriculture-driven economy.
                  </p>
                </div>
              </div>
            ),
          subtopics: [
            {
              subtopicID: "crop-cultivation",
              title: "Crop Cultivation",
              body: (
                <div>
                  <p>Embarking on the journey of crop cultivation is not merely a practice; it's a commitment to fostering sustainable growth and nourishing communities. In the heart of San Vicente, Camarines Norte, the art of cultivating crops transcends the fields—it weaves the very fabric of our livelihoods. Picture lush landscapes adorned with vibrant fields of coconut, pineapple, and rice, each seed sown representing a promise of abundance. As we nurture the soil, we sow the seeds of prosperity, creating a ripple effect that reaches every corner of our community. Crop cultivation isn't just about reaping what we sow; it's about cultivating a future where abundance, sustainability, and shared prosperity flourish hand in hand. Join us in the harvest, where every crop tells a story of resilience, growth, and a shared commitment to a thriving tomorrow.</p>
                </div>
              ),
            },
            {
              subtopicID: "livestock-farming",
              title: "Livestock Farming",
              body: (
                <div>
                  <p>{/* Livestock Farming content */}</p>
                </div>
              ),
            },
            // Add more subtopics as needed
          ],
        },
        {
          contentID: "infrastructure",
          title: "Infrastructure",
          body: (
            <div className="text-35 text-left ml-4 mt-6 border-b-2 border-lgu-lime pb-2">
              <div className="flex flex-col md:flex-row items-center">
              <img
                    src={require("../../../res/img/infra.jpg")}
                    alt="San Vicente Church"
                    className="float-left mr-4 mb-8 ml-4 my-2 w-auto h-96 mt-2 object-cover md:w-96 md:h-96"
                  />
              <p className="mt-4 mb-4">
                The Municipality has made significant investments in its infrastructure to meet the need of its residents and support its growing economy. San Vicente boasts well-maintained roads with ongoing concrete work on national roads, stretching from Poblacion, San Vicenten to Brgy. San Jose and Brgy. Fabrica, including concrete bridges and spillways connecting various Brgy. of San Vicente, such as Brgy. Iraya Sur, Cabanbanan, San Jose, and Calabagas. Furthermore, San Vicente not only has access to its 9 Barangays but is strategically positioned with road networks connecting to different municipalities within Camarines Norte, including Labo, Vinzons, Talisay, and Daet.There are also ongoing efforts to connect to the roads of San Lorenzo and San-Antinio, Labo. This extensive road network fosters connectivity, trade, and accessibility for its residents.
              </p>
            </div>
            </div>
          ),
          subtopics: [
            {
              subtopicID: "waste-management",
              title: "Waste Management",
              body: (
                <div>
                  <p>{/* Waste Management content */}</p>
                </div>
              ),
            },
            {
              subtopicID: "water-supply",
              title: "Water Supply",
              body: (
                <div>
                  <p>{/* Water Supply content */}</p>
                </div>
              ),
            },
            // Add more subtopics as needed
          ],
        },
        {
          contentID: "tourism",
          title: "Tourism",
          body: (
            <div className="text-35 text-left ml-4 mt-6 border-b-2 border-lgu-lime pb-2">
              <div className="flex flex-col md:flex-row items-center">
              <img
                    src={require("../../../res/img/tourism.jpg")}
                    alt="San Falss"
                    className="float-left mr-4 mb-8 ml-4 my-2 w-auto h-96 mt-2 object-cover md:w-96 md:h-96"
                  />
              <p className="mt-4 mb-4">
                San Vicente is a picturesque municipality in Camarines Norte, Philippines. Nestled amidst lush greenery, it offers a harmonious blend of natural beauty and cultural richness. It takes pride in its commitment to eco and agri-tourism adventures. The town's pristine environment and fertile lands provide a perfect backdrop for a wide range of activities catering to diverse interests.
              </p>
            </div>
            </div>
          ),
          subtopics: [
            {
              subtopicID: "natural-attractions",
              title: "Natural Attractions",
              body: (
                <div>
                  <p>{/* Natural Attractions content */}</p>
                </div>
              ),
            },
            {
              subtopicID: "sports-culture",
              title: "Sports and Culture",
              body: (
                <div>
                  <p>{/* Sports and Culture content */}</p>
                </div>
              ),
            },
            // Add more subtopics as needed
          ],
        },
        // Add more main categories as needed
      ];

    // Find the content that matches the contentID
    const selectedContent = contents.find(content => content.contentID === contentID);
    const selectedSubtopic = selectedContent?.subtopics?.find((subtopic) => subtopic.subtopicID === activeSubtopic);

    const handleSubtopicClick = (subtopicID) => {
        setActiveSubtopic(subtopicID);
    };

    if (!selectedContent) {
        return null; // or handle appropriately if no content is found
    }

    return (
        <div>
            <Banner bannerType="common" searchBar={true} breadcrumbs={[{ title: "Home", to: PATH_NAME.Home }]}>
                <p>Reasons to Invest</p>
            </Banner>

            <div>
        <div className="p-4 ">
        <div className="flex items-center">
          <h1 className="text-4xl font-bold mt-4 mb-2 ml-8">{selectedContent.title}</h1>
          <div className="sm:flex-grow sm:border-b-4 sm:border-gray-900 mt-4 ml-2">
          </div>
          </div>

          {/* Main content */}
          {selectedContent.body}

          {/* Subtopics buttons */}
          {selectedContent.subtopics && (
            <div className="flex mb-4">
              {selectedContent.subtopics.map((subtopic) => (
                <button
                  key={subtopic.subtopicID}
                  className={`ml-8 mt-8 p-2 focus:outline-none ${
                    activeSubtopic === subtopic.subtopicID ? "bg-lgu-lime text-lgu-green" : "bg-gray-300 text-gray-800"
                  }`}
                  onClick={() => handleSubtopicClick(subtopic.subtopicID)}
                >
                  {subtopic.title}
                </button>
              ))}
            </div>
          )}

          {/* Subtopic content */}
          {selectedSubtopic && (
            <div className="ml-8">
              <h2 className="text-3xl font-bold mt-7">{selectedSubtopic.title}</h2>
              {selectedSubtopic.body}
            </div>
          )}
        </div>
      </div>
        </div>
    )
}
