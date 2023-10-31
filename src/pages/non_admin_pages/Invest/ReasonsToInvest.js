import React from 'react';
import Sections from '../../../components/Sections';
import Banner from '../../../components/Banner';
import BackToTop from '../../../components/BackToTop';
import { PATH_NAME } from '../../../Variables/GLOBAL_VARIABLE';

export default function ReasonsToInvest(){
    return (
        <div>
        <Banner bannerType="common" searchBar={true} breadcrumbs={[{ title: "Home", to: PATH_NAME.Home }]}>
            <p>Reasons to Invest</p>
        </Banner>

        {/* Agriculture */}
        <Sections
          title="Agriculture"
          src={require("../../../res/img/mananap.jpg")}
          alt="Agriculture"
          button="Read More"
          arrow={true}
          href={PATH_NAME.Invest.ReasonsToInvest+"/agriculture"} onClick={() => window.scrollTo({top: 0, left: 0, behavior: "smooth"})}>
          Agriculture in San Vicente, Camarines Norte plays a pivotal role in the local economy, serving as its backbone. This sector not only sustains the population but also provides livelihood opportunities, supplies raw materials to industries, and fuels economic growth through trade and business activities. The agricultural landscape of San Vicente primarily focuses on the cultivation of major crops such as coconut, pineapple, and rice. In addition to these staples, the Municipality also engages in small-scale production of vegetables, livestock, poultry, and fisheries.
          One of the key income sources for farmers in San Vicente is the production of copra, which involves drying coconut kernels to extract valuable coconut oil. Furthermore, the production of coconut and pineapple fiber plays a significant role in the local economy and is facilitated by the Fabrica Manpower Fiber Association.
      </Sections>


        {/* Infrastructure */}
        <Sections
          left={true}
          title="Infrastructure"
          src={require("../../../res/img/mananap.jpg")}
          alt="Infrastructure"
          button="Read More"
          arrow={true}
          href={PATH_NAME.Invest.ReasonsToInvest+"/infrastructure"} onClick={() => window.scrollTo({top: 0, left: 0, behavior: "smooth"})}>
          The Municipality has made significant investments in its infrastructure to meet the need of its residents and support its growing economy. San Vicente boasts well-maintained roads with ongoing concrete work on national roads, stretching from Poblacion, San Vicenten to Brgy. San Jose and Brgy. Fabrica, including concrete bridges and spillways connecting various Brgy. of San Vicente, such as Brgy. Iraya Sur, Cabanbanan, San Jose, and Calabagas. Furthermore, San Vicente not only has access to its 9 Barangays but is strategically positioned with road networks connecting to different municipalities within Camarines Norte, including Labo, Vinzons, Talisay, and Daet.
          There are also ongoing efforts to connect to the roads of San Lorenzo and San-Antinio, Labo. This extensive road network fosters connectivity, trade, and accessibility for its residents.
      </Sections>


      {/* Tourism */}
      <Sections
          title="Tourism"
          src={require("../../../res/img/mananap.jpg")}
          alt="Tourism"
          button="Read More"
          arrow={true}
          href={PATH_NAME.Invest.ReasonsToInvest+"/tourism"} onClick={() => window.scrollTo({top: 0, left: 0, behavior: "smooth"})}>
          San Vicente is a picturesque municipality in Camarines Norte, Philippines. Nestled amidst lush greenery, it offers a harmonious blend of natural beauty and cultural richness. It takes pride in its commitment to eco and agri-tourism adventures. The town's pristine environment and fertile lands provide a perfect backdrop for a wide range of activities catering to diverse interests.
      </Sections>


    <BackToTop />  
    </div>
    )
}