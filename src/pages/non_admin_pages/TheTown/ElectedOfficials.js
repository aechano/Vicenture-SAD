import React, { useState } from 'react';
import Banner from '../../../components/Banner';
import { PATH_NAME } from '../../../Variables/GLOBAL_VARIABLE';
import BackToTop from '../../../components/BackToTop';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { Collapse } from 'react-collapse';


export default function ElectedOfficials() {
    // Step 1: Add state
    const [open, setOpen] = useState(null);

    const toggle = (index) => {
        // Step 2: Set state
        if (open === index) {
            setOpen(null);
        } else {
            setOpen(index);
        }
    };

    

    var directoriesData = [
        {
            directoryName: "Hon. Mayor Ma. Jhoanna C. Ong",
            charpersonCommitteeOn: "",
            list: [],
            contactNo: "Contact Number",
            num: "0930-298-3529",
        },
        {
            directoryName: "Hon. Vice Mayor Vivian M. Villamor",
            charpersonCommitteeOn: "Chairperson Committee on:",
            list: ["Tourism", "Sisterhood and Special Events", "External Affairs"],
            contactNo: "Contact Number",
            num: "0930-298-3529",
        },
        {
            directoryName: "Hon. Coun. Luisito G. Bobis",
            charpersonCommitteeOn: "Chairperson Committee On",
            list: ["Labor and Employment", "Public Works and Infrastructure", "Accreditation and Civil Society Organizations", "Project Monitoring and Evaluation"],
            contactNo: "Contact Number",
            num: "0948-672-2876",
        },
        {
            directoryName: "Hon. Coun. Nestor C. Gonzales",
            charpersonCommitteeOn: "Chairperson Committee on:",
            list: ["Food Security and Agriculture", "Housing, Zoning, and Rural/Urban Development", "Energy"],
            contactNo: "Contact Number",
            num: "0949-446-9042",
        },
        {
            directoryName: "Hon. Coun. Percival K. Palma",
            charpersonCommitteeOn: "Chairperson Committee on:",
            list: ["Laws, Rules, Ethics, Justice, and Good Governance", "Appropriations", "Public Order and Safety", "Disaster Risk Reduction and Management"],
            contactNo: "Contact Number",
            num: "0909-687-0012",
        },
        {
            directoryName: "Hon. Coun. Emmanuel R. Opeda",
            charpersonCommitteeOn: "Chairperson Committee on",
            list: ["Ways and Means", "Trade and Industry", "Local Economic Enterprises and Public Utilities"],
            contactNo: "Contact Number",
            num: "0907-845-9108",
        },
        {
            directoryName: "Hon. Coun. Thamar P. Belista",
            charpersonCommitteeOn: "Chairperson Committee on:",
            list: ["Health and Sanitation", "Environmental Protection and Natural Resources", "Solid Waste Management"],
            contactNo: "Contact Number",
            num: "0910-901-9645",
        },
        {
            directoryName: "Hon. Coun. Analet G. Villamin",
            charpersonCommitteeOn: "Chairperson Committee on:",
            list: ["Education, Culture and Arts", "Social Welfare and Community Development", "Cooperatives"],
            contactNo: "Contact Number",
            num: "0950-868-4822",
        },
        {
            directoryName: "Hon. Coun. Mercy L. Magana",
            charpersonCommitteeOn: "Chairperson Committee on:",
            list: ["Women and Family Welfare", "Senior Citizens and Persons with Disability Affairs"],
            contactNo: "Contact Number",
            num: "0950-868-4666",
        },
        {
            directoryName: "Hon. Coun. Elmer P. San Juan",
            charpersonCommitteeOn: "Chairperson Committee on:",
            list: ["Transportation and Communications"],
            contactNo: "Contact Number",
            num: "0907-775-6633",
        },
        {
            directoryName: "Hon. Coun. Alberto E. Mera",
            charpersonCommitteeOn: "Chairperson Committee on:",
            list: ["Barangay Affairs"],
            contactNo: "Contact Number",
            num: "0907-504-1784",
        },
        {
            directoryName: "Hon. Coun. Aldrin R. Alarde",
            charpersonCommitteeOn: "Chairperson Committee on:",
            list: ["Youth Affairs and Sports Development"],
            contactNo: "Contact Number",
            num: "0907-504-1784",
        },
    ];


    return (
        <>
            <Banner bannerType="common" searchBar={true} breadcrumbs={[{ title: "Home", to: PATH_NAME.Home }]}>
                <p>Elected Officials</p>
            </Banner>

            <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 m-5'>

                <div className="flex flex-col my-4 items-center pb-5">

                    <div className='md:flex md:flex-row md:space-x-5 lg:space-x-0 space-y-2 md:space-y-0 lg:space-y-2 lg:block pb-2  '>
                        {/* Container 1 */}
                        <div className="block w-[18rem] rounded-lg bg-white mb-5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border-2">
                            <div className="relative overflow-hidden aspect-w-3 aspect-h-4 flex justify-center items-center">
                                <img
                                    className="rounded-t-lg object-cover w-96 h-52"
                                    src={require("../../../res/img/Hon-Mayor-Ma-Jhoanna-C-Ong.JPG")}
                                    alt="Hon. Mayor Ma. Jhoanna C. Ong"
                                />
                            </div>
                            <div className="p-6 bg-lgu-lime rounded-bl-lg rounded-br-lg">
                                <p className="text-lg text-black text-center font-bold">
                                    Ma. Jhoanna C. Ong
                                </p>
                                <p className="text-sm text-black text-center font-bold">
                                    Mayor
                                </p>
                            </div>
                        </div>

                        {/* Container 3 */}
                        <div className="block w-[18rem] rounded-lg bg-white mb-5 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border-2">
                            <div className="relative overflow-hidden aspect-w-3 aspect-h-4 flex justify-center items-center">
                                <img
                                    className="rounded-t-lg object-cover w-96 h-52"
                                    src={require("../../../res/img/Hon-Vice-Mayor-Vivian-M-Villamor.JPG")}
                                    alt="Hon. Vice Mayor Vivian M. Villamor"
                                />
                            </div>
                            <div className="p-6 bg-lgu-lime rounded-bl-lg rounded-br-lg">
                                <p className="text-lg text-black text-center font-bold">
                                    Vivian M. Villamor
                                </p>
                                <p className="text-sm text-black text-center font-bold">
                                    Vice Mayor
                                </p>
                            </div>
                        </div>

                    </div>


                    {/* Containers 4, 5, and 6 (Horizontally aligned) */}
                    <div className="block md:flex md:flex-row md:flex-wrap md:justify-center lg:flex -m-2 mb-5 ">
                        <div className="block w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] mx-2 m-2 border-2">
                            <div className="relative overflow-hidden aspect-w-3 aspect-h-4 flex justify-center items-center">
                                <img
                                    className="rounded-t-lg object-fill w-96 h-52"
                                    src={require("../../../res/img/Hon-Councilor-Luisito-G-Bobis.JPG")}
                                    alt=""
                                />
                            </div>
                            <div className="p-6 bg-lgu-lime rounded-bl-lg rounded-br-lg">
                                <p className="text-lg text-black text-center font-bold">
                                    Luisito G. Bobis
                                </p>
                                <p className="text-sm text-black text-center font-bold">
                                    Councilor
                                </p>
                            </div>
                        </div>

                        <div className="block w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] mx-2 m-2 border-2">
                            <div className="relative overflow-hidden aspect-w-3 aspect-h-4 flex justify-center items-center">
                                <img
                                    className="rounded-t-lg object-fill w-96 h-52"
                                    src={require("../../../res/img/Hon-Councilor-Nestor-C-Gonzales.JPG")}
                                    alt=""
                                />
                            </div>
                            <div className="p-6 bg-lgu-lime rounded-bl-lg rounded-br-lg">
                                <p className="text-lg text-black text-center font-bold">
                                    Nestor C. Gonzales
                                </p>
                                <p className="text-sm text-black text-center font-bold">
                                    Councilor
                                </p>
                            </div>
                        </div>

                        <div className="block w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] mx-2 m-2 border-2">
                            <div className="relative overflow-hidden aspect-w-3 aspect-h-4 flex justify-center items-center">
                                <img
                                    className="rounded-t-lg object-fill w-96 h-52"
                                    src={require("../../../res/img/Hon-Councilor-Percival-K-Palma.JPG")}
                                    alt=""
                                />
                            </div>
                            <div className="p-6 bg-lgu-lime rounded-bl-lg rounded-br-lg">
                                <p className="text-lg text-black text-center font-bold">
                                    Percival K. Palma
                                </p>
                                <p className="text-sm text-black text-center font-bold">
                                    Councilor
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Layer 4 */}
                    <div className="block md:flex md:flex-row md:flex-wrap md:justify-center lg:flex -m-2 mb-5 ">
                        <div className="block w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] mx-2 m-2 border-2">
                            <div className="relative overflow-hidden aspect-w-3 aspect-h-4 flex justify-center items-center">
                                <img
                                    className="rounded-t-lg object-fill w-96 h-52"
                                    src={require("../../../res/img/Hon-Councilor-Emmanuel-R-Opeda.JPG")}
                                    alt=""
                                />
                            </div>
                            <div className="p-6 bg-lgu-lime rounded-bl-lg rounded-br-lg">
                                <p className="text-lg text-black text-center font-bold">
                                    Emmanuel R. Opeda
                                </p>
                                <p className="text-sm text-black text-center font-bold">
                                    Councilor
                                </p>
                            </div>
                        </div>

                        <div className="block w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] mx-2 m-2 border-2">
                            <div className="relative overflow-hidden aspect-w-3 aspect-h-4 flex justify-center items-center">
                                <img
                                    className="rounded-t-lg object-fill w-96 h-52"
                                    src={require("../../../res/img/Hon-Councilor-Thamar-P-Belista.JPG")}
                                    alt=""
                                />
                            </div>
                            <div className="p-6 bg-lgu-lime rounded-bl-lg rounded-br-lg">
                                <p className="text-lg text-black text-center font-bold">
                                    Thamar P. Belista
                                </p>
                                <p className="text-sm text-black text-center font-bold">
                                    Councilor
                                </p>
                            </div>
                        </div>

                        <div className="block w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] mx-2 m-2 border-2">
                            <div className="relative overflow-hidden aspect-w-3 aspect-h-4 flex justify-center items-center">
                                <img
                                    className="rounded-t-lg object-fill w-96 h-52"
                                    src={require("../../../res/img/Hon-Councilor-Analet-G-Villamin.JPG")}
                                    alt=""
                                />
                            </div>
                            <div className="p-6 bg-lgu-lime rounded-bl-lg rounded-br-lg">
                                <p className="text-lg text-black text-center font-bold">
                                    Analet G. Villamin
                                </p>
                                <p className="text-sm text-black text-center font-bold">
                                    Councilor
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Layer 5 */}
                    <div className="block md:flex md:flex-row md:flex-wrap md:justify-center lg:flex -m-2 mb-5">
                        <div className="block w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] mx-2 m-2 border-2">
                            <div className="relative overflow-hidden aspect-w-3 aspect-h-4 flex justify-center items-center">
                                <img
                                    className="rounded-t-lg object-fill w-96 h-52"
                                    src={require("../../../res/img/Hon-Councilor-Mercy-L-Magana.JPG")}
                                    alt=""
                                />
                            </div>
                            <div className="p-6 bg-lgu-lime rounded-bl-lg rounded-br-lg">
                                <p className="text-lg text-black text-center font-bold">
                                    Mercy L. Magana
                                </p>
                                <p className="text-sm text-black text-center font-bold">
                                    Councilor
                                </p>
                            </div>
                        </div>

                        <div className="block w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] mx-2 m-2 border-2">
                            <div className="relative overflow-hidden aspect-w-3 aspect-h-4 flex justify-center items-center">
                                <img
                                    className="rounded-t-lg object-fill w-96 h-52"
                                    src={require("../../../res/img/Hon-Councilor-Elmer-P-San-Juan.JPG")}
                                    alt=""
                                />
                            </div>
                            <div className="p-6 bg-lgu-lime rounded-bl-lg rounded-br-lg">
                                <p className="text-lg text-black text-center font-bold">
                                    Elmer P. San Juan
                                </p>
                                <p className="text-sm text-black text-center font-bold">
                                    Councilor
                                </p>
                            </div>
                        </div>

                        <div className="block w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] mx-2 m-2 border-2">
                            <div className="relative overflow-hidden aspect-w-3 aspect-h-4 flex justify-center items-center">
                                <img
                                    className="rounded-t-lg object-fill w-96 h-52"
                                    src={require("../../../res/img/Hon-Councilor-Alberto-E-Mera.JPG")}
                                    alt=""
                                />
                            </div>
                            <div className="p-6 bg-lgu-lime rounded-bl-lg rounded-br-lg">
                                <p className="text-lg text-black text-center font-bold">
                                    Albert E. Mera
                                </p>
                                <p className="text-sm text-black text-center font-bold">
                                    Councilor
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Layer 6 */}
                    <div className="block w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] mx-2 m-2 border-2">
                            <div className="relative overflow-hidden aspect-w-3 aspect-h-4 flex justify-center items-center">
                                <img
                                    className="rounded-t-lg object-fill w-96 h-52"
                                    src={require("../../../res/img/Hon-Councilor-Aldrin-R-Alarde.JPG")}
                                    alt=""
                                />
                            </div>
                            <div className="p-6 bg-lgu-lime rounded-bl-lg rounded-br-lg">
                                <p className="text-lg text-black text-center font-bold">
                                    Aldrin R. Alarde
                                </p>
                                <p className="text-sm text-black text-center font-bold">
                                    Councilor
                                </p>
                            </div>
                        </div>
                </div>


                {/*put the directories here */}
                <div className='pt-5 mb-3 m-5 space-y-6'>
                    <h1 className='font-bold text-center text-4xl'>Directories</h1>
                </div>
                <div className="pt-3 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 m-5">
            {directoriesData.map((directory, index) => (
                <div key={index} className="pt-3">
                    <div
                        className="bg-lgu-green py-2 p-4 sm:px-16 flex justify-between item-center cursor-pointer rounded-xl"
                        onClick={() => toggle(index)}
                    >
                        <p className="text-2xl mt-2 text-white font-semibold">{directory.directoryName}</p>
                        <div className="text-5xl text-white">
                            {open === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
                        </div>
                    </div>

                    <Collapse isOpened={open === index}>
                        <div className="bg-lgu-lime px-16 pb-10 pt-5 rounded-tr-xl rounded-tl-xl rounded-br-xl rounded-bl-xl">
                            <p className="text-2xl font-bold">{directory.charpersonCommitteeOn}</p>

                            <ul className="text-lg ml-4">
                                {directory.list.map((item, idx) => (
                                    <li key={idx} className='list-disc ml-6'>
                                        {item}
                                    </li>
                                ))}
                            </ul>

                            <p className="text-2xl font-bold mt-6">
                                {directory.contactNo} 
                            </p>
                            <p className="text-lg ml-4">
                                {directory.num}
                            </p>
                        </div>
                    </Collapse>
                </div>
            ))}
        </div>



            </div>


            <BackToTop />
        </>
    );
}
