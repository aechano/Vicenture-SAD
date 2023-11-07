import React from "react";
import Banner from "../../../components/Banner";
import { useParams } from 'react-router-dom';
import { PATH_NAME } from "../../../Variables/GLOBAL_VARIABLE";


export default function ReasonsToInvestContent() {
    let { contentID } = useParams();


    // Your contents array
    var contents = [
        {
            contentID: "agriculture",
            contentImg: require("../../../res/img/mananap.jpg"),
            title: "Agriculture",
            body: (
                <div>
                    <br></br>
                    <p>
                        Agriculture in San Vicente, Camarines Norte plays a pivotal role in the local economy, serving as its backbone. This sector not only sustains the population but also provides livelihood opportunities, supplies raw materials to industries, and fuels economic growth through trade and business activities. The agricultural landscape of San Vicente primarily focuses on the cultivation of major crops such as coconut, pineapple, and rice.
                    </p> <br></br>
                    <p>
                        In addition to these staples, the Municipality also engages in small-scale production of vegetables, livestock, poultry, and fisheries. One of the key income sources for farmers in San Vicente is the production of copra, which involves drying coconut kernels to extract valuable coconut oil. Furthermore, the production of coconut and pineapple fiber plays a significant role in the local economy and is facilitated by the Fabrica Manpower Fiber Association.
                    </p> <br></br>
                    <p>
                        To further support and enhance farming activities, the Local Government Unit (LGU) of San Vicente through Municipal Agricultural Office in coordination with various government agencies offers specialized training programs and initiates livelihood projects aimed at increasing farmers' productivity and improving the overall agricultural sector in the Municipality. This concerted effort reflects the commitment of San Vicente to ensure the sustainability and prosperity of its agriculture-driven economy.
                    </p>
                </div>
            )
        },
        {
            contentID: "infrastructure",
            contentImg: require("../../../res/img/mananap.jpg"),
            title: "Infrastructure",
            body: (
                <div>
                    <br></br>
                    <p>
                        The Municipality has established a Material Recovery Facility (MRF) as a waste management system for every Barangay in San Vicente. The LGU also has plans to develop a Sanitary Landfill Facility to enhance waste management within San Vicente.
                    </p><br></br>
                    <p>
                        Regarding water supply, the Municipality is served by the PrimeWater Company, and a solar-powered water supply system project, initiated by AKO BICOL Partylist in coordination with the LGU of San Vicente, currently supplies (4) Barangays: Asdum, Fabrica, Man-ogob, and San Jose. Additionally, some locals, especially those without access to water services, obtain their water supply from natural sources such as deep wells and natural springs.
                    </p> <br></br>
                    <p>
                        In terms of power supply, all the Barangays of San Vicente are already energized, provided by the local electric cooperative (CANORECO). Moreover, through PAVI Green Renewable Energy solar farm project at Brgy. Cabanbanan, the Municipality of San Vicente is now considered as the first to utilize solar-powered energy with a 36 MW solar facility scalable up to 75 MW, which will help augment power supply in the Municipality, particularly during the summer months.
                    </p><br></br>
                    <p>
                        Internet services offered by PLDT and Converge now extend to all 9 Barangays of the Municipality. With the internet accces availably in every Barangay, San Vicente has embraced digital connectivity, enabling its residents to engage in online activities such as education, remote work, e-commerce, and communication with ease. Reliable internet services signficanlty contribute to the socio-economic development of San Vicente, empowering local businesses, supporting educational initiatives, and enhancing communication networks within the community. The availability of internet services from providers like PLDT and Converge in all 9 Barangays of San Vicente plays a crucial role in enhancing the quality of life, economic opportunities, and connectivity for its residents.
                    </p><br></br>
                    <p>
                        The convention center i situated in the elevated part of Brgy. Man-ogob, offering panoramic views of the town. This scenic location adds to its appeal and makes it a significant asset for the municipality. It serves as a multipurpose facility that can host a variety of events, including conferences, seminars, cultural exhibitions, and community gatherings. Its versatile design accommodates a wide range of activities, fostering cultural and economic development. It not only adds a touch of sophistication to San Vicente but also provides a venue for residents to engage in culltural and educational events. It contributes to local tourism and the promotion of the municipality's unique features. The convention center's presence promotes economic activities through events and tourism. It also enriches the cultural scene of San Vicente by hosting diverse programs and exhibitions that bring the community together.
                    </p><br></br>
                    <p>
                        The town's terminal serves as a dynamic transportation hub that not only facilitates mobility but also contributes significantly to the local economy. Its strategic importance in connecting people and goods within and beyond the municipality underscores its role as a cornerstone of San Vicente's infrastructure network. The grand terminal plays a crucial role in enhancing connectivitiy within San Vicente and to neighboring areas. It provides residents with convenient acces to transportation services, making it easier to commute to work, school, healthcare facilities, and othe essential destinations. The revenue generated contributes directly to the local economy. These funds can be reinvested in municipal development projects, improving infrastructure, and enhancing the overall quality of life for residents. The presence of a well-organized terminal ensures that residents and visitors experience effecient and reliable transportation services. This is especially in promoting economic activities and tourism within the municipality.
                    </p><br></br>
                </div>
            )
        },
        {
            contentID: "tourism",
            contentImg: require("../../../res/img/mananap.jpg"),
            title: "Tourism",
            body: (
                <div>
                    <p>
                        San Vicente boasts an array of natural attractions, including: The stunning Mananap waterfalls surrounded by lush tropical vegetation, offering an ideal spot for relaxation and adventure, Mananap crystal-clear rivers and rejuvenating springs provide refereshing opportunities for swimming, picnicking, and natura appreciation, while hte municipality's rice granary showcases the vital role of agriculture in the region and offers insights intro traditional farming practices.
                    </p><br></br>
                    <p>
                        In terms of sports and culture tourism, San Vicente's Agro-Sports and Cultural Complex is a hub for sports enthusiasts and cultural afficionados. It serves as a well-maintained court that caters to both friendly games and tournaments.
                    </p><br></br>
                    <p>
                        Additionally, it boasts several captivating man-made attractions, including: A beautifully landscaped park where visitors can relax, stroll, and appreciate the town's serene ambiance, the modern facility of convention center that hosts various events, conferences, and gatherings. San Vicente also offers a range of resorts to cater different tastes, including Anahaw Resort, Iriah-anns Resort, Paraiso sa Iraya Resort, and BF Resort, ensuring a comfotable and enjoyable stay.
                    </p>
                </div>
            )
        }
    ];

    // Find the content that matches the contentID
    const selectedContent = contents.find(content => content.contentID === contentID);

    return (
        <div>
            <Banner bannerType="common" searchBar={true} breadcrumbs={[{ title: "Home", to: PATH_NAME.Home }]}>
                <p>Reasons to Invest</p>
            </Banner>

            <div className="flex flex-row">
                <div className=" p-4" >
                    <img
                        src={selectedContent.contentImg}
                        alt={selectedContent.title}
                        
                        className="float-left mr-4 my-2 w-auto h-96 mt-7"             
                    />
                    <h2 className="text-3xl font-bold mt-7">{selectedContent.title}</h2>
                    <p className="text-35 text-left">{selectedContent.body}</p>
                </div>

            </div>
        </div>
    )
}
