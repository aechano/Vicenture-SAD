import React, {useState, useEffect} from "react";
import Banner from "../../../components/Banner";
import SectionContent from "../../../components/SectionContent";
import { Link } from "react-router-dom/dist";
import { useParams } from 'react-router-dom';
import BackToTop from "../../../components/BackToTop";
import { PATH_NAME } from "../../../Variables/GLOBAL_VARIABLE";
import axios from "axios";
import { API } from "../../../Variables/GLOBAL_VARIABLE";

export default function MunicipalityPrograms() {
    const { sports } = useParams();

    const [contents, setContents] = useState([]);

    useEffect(() => {
        axios.get(API.viewSportsArticle, {})
            .then((response) => response.data)
            .then((data) => {
                var newItems = [];
                for (var item of data) {
                    newItems.push({ id: item.articleID, title: item.articleTitle, cont: item.contents, date: item.timeStamps, caption: item.alt, tags: item.tags });
                }
                setContents(newItems);
            });
    }, []);


    return (
        <div>
            <Banner bannerType="common" searchBar={true} breadcrumbs={[{ title: "Home", to: PATH_NAME.Home }]}>
                <p>Municipality Programs</p>
            </Banner>


            <SectionContent
                title="Community Assistance"
                src={require("../../../res/img/assistance.jpg")}
                alt="Community Assistance"
                arrow={true}>
                Engage in the vibrant conversations surrounding San Vicente, Camarines Norte, as you join our forums and discussions. Connect with fellow travelers, adventurers, and culture enthusiasts to share experiences, gather recommendations, and embrace diverse perspectives within our community. Explore the rich culture, history, and natural wonders of this coastal town through these insightful dialogues, finding inspiration for your next adventure. Join us now and immerse yourself in a world of captivating stories and connections waiting to be discovered in San Vicente, Camarines Norte.
            </SectionContent>

            <SectionContent
                left={true}
                title="Safety Programs"
                src={require("../../../res/img/programs.jpg")}
                alt="Safety Programs"
                arrow={true}>
                Engage in the vibrant conversations surrounding San Vicente, Camarines Norte, as you join our forums and discussions. Connect with fellow travelers, adventurers, and culture enthusiasts to share experiences, gather recommendations, and embrace diverse perspectives within our community. Explore the rich culture, history, and natural wonders of this coastal town through these insightful dialogues, finding inspiration for your next adventure. Join us now and immerse yourself in a world of captivating stories and connections waiting to be discovered in San Vicente, Camarines Norte.
            </SectionContent>


            <div className='relative bg-fixed bg-cover p-5'
                style={{
                    backgroundImage: "url(" + require("../../../res/img/sports_cover.jpg") + ")",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}>
                <div className="absolute inset-0 bg-black bg-opacity-70"></div>
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 m-2">
                    <div>
                        <div>
                            <img src={require("../../../res/img/kAWAT-KITA.png")} alt="banner" className="relative z-10 rounded-md" />
                        </div>
                        <div className="sm:flex sm:flex-col relative z-10">
                            <h1 className="text-4xl font-bold text-left mt-10 pb-6 text-white">Sports Activities</h1>
                            <p className="text-white text-md leading-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper eget nulla facilisi etiam dignissim. In nulla posuere sollicitudin aliquam ultrices. Varius quam quisque id diam vel quam elementum pulvinar. Eu tincidunt tortor aliquam nulla facilisi cras. Sit amet nulla facilisi morbi tempus iaculis urna id volutpat. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                            {contents.map((content, index) => (
                                <div key={index} className="p-1 mt-3">
                                    <div className="w-full relative z-10 p-2">
                                        <div className="flex flex-col justify-between min-h-[208px]">
                                            <Link
                                                to={`/article/${content.id}`}
                                                className={`block flex-1 p-8 ${index % 2 === 0 ? 'bg-lgu-green text-lgu-lime' : 'bg-lgu-yellow text-black'} border rounded-lg shadow`}
                                                onClick={() => window.scrollTo({ top: 0, left: 0 })} key={index}
                                            >
                                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-center line-clamp-1">{content.title}</h5>
                                                <p className="font-normal text-center transition-all duration-400 hover:scale-105 line-clamp-4">{content.cont}</p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>

            <BackToTop />
        </div>
    )
}



