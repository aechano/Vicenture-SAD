import React from 'react';
import Banner from '../../../components/Banner';
import Sections from '../../../components/Sections';
import BackToTop from '../../../components/BackToTop';
import { PATH_NAME } from '../../../Variables/GLOBAL_VARIABLE';

export default function OtherInfo(){
    return (
        <div>
            <Banner bannerType="common" searchBar={true} breadcrumbs={[{ title: "Home", to: PATH_NAME.Home }]}>
                <p>Get to Know San Vicente!</p>
            </Banner>

            <Sections
                left={true}
                title="Geography"
                src={require("../../../res/img/geography.png")}
                alt="Geography">
                San Vicente, formally recognized as the Municipality of San Vicente, is a town of the 5th class located in the province of Camarines Norte, Philippines. As of the 2020 census, it is home to a population of approximately 12,579 residents. The Mananap Falls is approximately 20–25 ft tall, tucked inside the thick forest and mountains. The water was ice cold, and there is a small raft tied which will lead you near the falls and a ladder to get to the top of the falls. There is a jumping point as well. It is more than this we-attitude that is practiced by the people, each one treating the other as more than a neighbor. A large segment of the population is related by blood.
            </Sections>

            <Sections
                title="Economy"
                src={require("../../../res/img/economy.jpg")}
                alt="Economy">
                San Vicente, formally recognized as the Municipality of San Vicente, is a town of the 5th class located in the province of Camarines Norte, Philippines. As of the 2020 census, it is home to a population of approximately 12,579 residents. The Mananap Falls is approximately 20–25 ft tall, tucked inside the thick forest and mountains. The water was ice cold, and there is a small raft tied which will lead you near the falls and a ladder to get to the top of the falls. There is a jumping point as well. It is more than this we-attitude that is practiced by the people, each one treating the other as more than a neighbor. A large segment of the population is related by blood.
            </Sections>

            <Sections
                left={true}
                title="Population"
                src={require("../../../res/img/population.jpg")}
                alt="Population">
                San Vicente, formally recognized as the Municipality of San Vicente, is a town of the 5th class located in the province of Camarines Norte, Philippines. As of the 2020 census, it is home to a population of approximately 12,579 residents. The Mananap Falls is approximately 20–25 ft tall, tucked inside the thick forest and mountains. The water was ice cold, and there is a small raft tied which will lead you near the falls and a ladder to get to the top of the falls. There is a jumping point as well. It is more than this we-attitude that is practiced by the people, each one treating the other as more than a neighbor. A large segment of the population is related by blood.
            </Sections>

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