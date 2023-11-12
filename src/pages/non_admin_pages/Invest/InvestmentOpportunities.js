import React from 'react';
import Banner from '../../../components/Banner';
import BackToTop from '../../../components/BackToTop';
import { PATH_NAME, USER_TYPES } from '../../../Variables/GLOBAL_VARIABLE';
import InvestContent from '../../../components/InvestContent';
import Page403 from '../../Accounts/ErrorPages/Page403';

export default function InvestmentOpportunities({ userType }) {

  var contents = [
    {
      title: "Agriculture",
      source: require("../../../res/img/agri.jpeg"),
      alt: "Farmers Planting Pineapple",
      ref: PATH_NAME.Invest.InvestmentOpportunities + "/agriculture",
      body: "Agriculture in San Vicente, Camarines Norte plays a pivotal role in the local economy, serving as its backbone. This sector not only sustains the population but also provides livelihood opportunities, supplies raw materials to industries, and fuels economic growth through trade and business activities. The agricultural landscape of San Vicente primarily focuses on the cultivation of major crops such as coconut, pineapple, and rice. In addition to these staples, the Municipality also engages in small-scale production of vegetables, livestock, poultry, and fisheries.One of the key income sources for farmers in San Vicente is the production of copra, which involves drying coconut kernels to extract valuable coconut oil. Furthermore, the production of coconut and pineapple fiber plays a significant role in the local economy and is facilitated by the Fabrica Manpower Fiber Association."
    },
    {
      title: "Infrastructure",
      source: require("../../../res/img/infra.jpg"),
      alt: "Church",
      ref: PATH_NAME.Invest.InvestmentOpportunities + "/infrastructure",
      body: "The Municipality has made significant investments in its infrastructure to meet the need of its residents and support its growing economy. San Vicente boasts well-maintained roads with ongoing concrete work on national roads, stretching from Poblacion, San Vicenten to Brgy. San Jose and Brgy. Fabrica, including concrete bridges and spillways connecting various Brgy. of San Vicente, such as Brgy. Iraya Sur, Cabanbanan, San Jose, and Calabagas. Furthermore, San Vicente not only has access to its 9 Barangays but is strategically positioned with road networks connecting to different municipalities within Camarines Norte, including Labo, Vinzons, Talisay, and Daet.There are also ongoing efforts to connect to the roads of San Lorenzo and San-Antinio, Labo. This extensive road network fosters connectivity, trade, and accessibility for its residents."
    },
    {
      title: "Tourism",
      source: require("../../../res/img/tourism.jpg"),
      alt: "Falls",
      ref: PATH_NAME.Invest.InvestmentOpportunities + "/tourism",
      body: "San Vicente is a picturesque municipality in Camarines Norte, Philippines. Nestled amidst lush greenery, it offers a harmonious blend of natural beauty and cultural richness. It takes pride in its commitment to eco and agri-tourism adventures. The town's pristine environment and fertile lands provide a perfect backdrop for a wide range of activities catering to diverse interests."
    },

  ];

  if ([USER_TYPES.Citizen, USER_TYPES.Guest, USER_TYPES.Tourist].includes(userType)){
    return <Page403/>
  }

    return (
      <div>
        <Banner bannerType="common" searchBar={true} breadcrumbs={[{ title: "Home", to: PATH_NAME.Home }]}>
          <p>Investment Opportunities</p>
        </Banner>



        <div>
          {contents.map((data, index) => {
            return <InvestContent key={index} data={data} />
          })}
        </div>



        <BackToTop />
      </div>
    )
}
