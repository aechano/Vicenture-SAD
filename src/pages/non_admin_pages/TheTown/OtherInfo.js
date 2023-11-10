import React from 'react';
import Banner from '../../../components/Banner';
import SectionContent from '../../../components/SectionContent';
import BackToTop from '../../../components/BackToTop';
import { PATH_NAME } from '../../../Variables/GLOBAL_VARIABLE';

export default function OtherInfo() {
    return (
        <div>
            <Banner bannerType="common" searchBar={true} breadcrumbs={[{ title: "Home", to: PATH_NAME.Home }]}>
                <p>Get to Know San Vicente!</p>
            </Banner>

            <SectionContent
                left={true}
                title="Geography"
                src={require("../../../res/img/geography.png")}
                alt="Geography">
                The municipality covers 57.49 square kilometers (22.20 square miles), accounting for 2.52% of Camarines Norte's total land area. According to the 2020 Census, its population was 12,579. This accounted for 2.00% of the total population of Camarines Norte province, or 0.21% of the Bicol Region's total population. Based on these numbers, the population density is calculated to be 219 people per square kilometer or 567 people per square mile.
            </SectionContent>

            <SectionContent
                title="Economy"
                src={require("../../../res/img/economy.jpg")}
                alt="Economy">
                San Vicente aspires to secure a brighter future over the next decade, one characterized by an enhanced quality of life and a thriving economy. The municipality's key drivers for this transformation are its promising agricultural and tourism sectors, both poised for sustainable growth. Additionally, ensuring peace and order at the barangay level is a top priority, empowering public safety officers to safeguard the community.

                Efficiently managing both the natural and built environment is another core objective. Collaboration with various stakeholders, from government agencies to civil society groups, will be pivotal in achieving this vision. Stringent enforcement of occupational safety, health standards, and building codes guarantees a well-regulated environment.

                San Vicente's commitment to fostering a safer, higher quality of life while promoting economic opportunities sets it on a path toward a promising and harmonious future.

            </SectionContent>

            <SectionContent
                left={true}
                title="Population"
                src={require("../../../res/img/population.jpg")}
                alt="Population">
                Asdum, Cabanban, Calabagas, Fabrica, Iraya Sur, Man-Ogob, Poblacion District 1 and 2, and San Jose are among the nine barangays that make up San Vicente. Based on the data from the PhilAtlas, the population of San Vicente totals 12,579 in the year 2020. Man-Ogob has 3,303 members, the highest percentage among the nine barangays. While Iraya Sur is the least populated barangay which has 367 citizens. As for the other barangays the population are as follows: Asdum – 620 ; Cabanban – 1,427 ; Calabagas – 1,342 ; Fabrica – 1,441 ; Poblacion District 1 – 663 ; Poblacion District 2 – 884; lastly San Jose – 1,972. Between 2015 and 2020, their yearly population growth rate is 4.09%.
            </SectionContent>

            {/* SV Hymn */}
            <div className="flex flex-row justify-center">
                {/* Center the content */}
                <div className="lg:w-2/3 p-2 bg-white">
                    <h1 className="text-3xl font-bold text-center mt-6">Barangays</h1>
                    <div className="text-40 text-center mt-4">
                        <p className="mt-2">Barangay Mang-Ogob</p>
                        <p className="mt-2">Barangay Poblacion District I (Silangan/Barangay 1)</p>
                        <p className="mt-2">Barangay Poblacion District II (Kanluran/Barangay 2)</p>
                        <p className="mt-2">Barangay San Jose</p>
                        <p className="mt-2">Barangay Asdum</p>
                        <p className="mt-2">Barangay Cabanbanan</p>
                        <p className="mt-2">Barangay Calabagas</p>
                        <p className="mt-2">Barangay Fabrica</p>
                        <p className="mt-2 mb-5">Barangay Iraya Sur</p>
                    </div>
                </div>
            </div>

            <BackToTop />
        </div>
    )
}