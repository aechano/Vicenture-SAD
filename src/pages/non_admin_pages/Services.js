import React, { useState } from 'react';
import { Collapse } from 'react-collapse';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { PATH_NAME } from '../../Variables/GLOBAL_VARIABLE';
import Banner from '../../components/Banner';
import { FaPeopleGroup } from "react-icons/fa6";
import { GiPalmTree } from "react-icons/gi";
import { MdAddBusiness } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import BackToTop from '../../components/BackToTop';

export default function Services() {

    const [search, setSearch] = useState('');
    const [open, setOpen] = useState(null);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            console.log(search);
            //HANDLE SEARCH QUERY HERE.
        }
    };


    const toggle = (index) => {
        if (open === index) {
            setOpen(null);
        } else {
            setOpen(index);
        }
    };

    const servicesData = [
        {
            office: 'Local Civil Registrar Office',
            services: [
                {
                    typeOfService: 'Registering Births and Issuance of Certificate of Live Birth',
                    aboutTheService: "The birth of a child shall be registered with in (30) days from the time of birth at the Office of the Civil Registrar of the city/municipality where the birth occurred.",
                },
                {
                    typeOfService: "Registering Foundlings",
                    aboutTheService: "A foundling is a deserted or abandoned infant/ child whose relatives are unknown or a child committed in an orphanage or similar institution and whose facts of birth and parentage are unknown. The civil Registry Law provides that the registration of foundling in the city/municipality where the child was found shall be made by the finder/charitable institution within thirty (30) days from the date of finding/commitment of the child.",
                },
                {
                    typeOfService: "Registering/Issuance of Death Certificates",
                    aboutTheService: " It shall be the responsibility of the nearest relative or spouse who has knowledge of the death to report the same within forty-eight (48) hours if the deceased died without medical assistance. The Health Officer shall examine the deceased and shall certify as to the cause of death and direct the registration of death certificate to the Local Civil Registrar within the reglementary period of thirty (30) days.",
                },
                {
                    typeOfService: "Issuance of a Marriage License",
                    aboutTheService: "Where a marriage license is required, each of the contracting parties shall file separate sworn application for such license with the proper local civil registrar of the place where either or both of the contracting parties reside. The local civil registrar concerned shall enter all applications for marriage license filed in a registry book strictly in the order in which the same are received. When the license is issued, the same shall be valid in any part of the Philippines for a period of one hundred twenty (120) days from the date of issue, and shall be deemed automatically cancelled at the expiration date of the said period if the contracting parties have not made use of it.",
                },
                {
                    typeOfService: "Registering Marriage Certificates",
                    aboutTheService: "In ordinary marriage, the time of submission of the Certificate of Marriage is within fifteen (15) days following the solemnization of marriage but in marriage exempt from license requirement, the prescribed period is thirty (30) days, at the place where the marriage was solemnized.",
                },
                {
                    typeOfService: "Issuance of Certified True Transcriptions/Photocopies of Birth, Death and Marriage Certificates ",
                    aboutTheService: "Civil registry documents such as birth, marriage and death certificates may be availed of by securing certified true transcription/photocopies from the office.",
                },
                {
                    typeOfService: "Processing Petitions Under Republic Act 9048 (Correction of Clerical Error and Change of Name or Nickname) and Republic Act 10172 (Correction of Clerical Error in the day and month (date of birth) and sex/gender in the COLB. ",
                    aboutTheService: "Republic Act No. 9048 authorizes the city or municipal civil registrar or the consul general to correct a clerical or typographical error in an entry and/or change of first name or nickname in the civil register without need of a judicial order. Republic Act No. 10172 authorizes the city/municipal civil registrar including the consul general, in accordance with the provisions of existing laws, to correct clerical or typographical errors in the day and month (date of birth) or sex of a person in the civil register of birth, without the need of judicial order. An administrative remedy in nature, it is a departure from the usual judicial process in correcting clerical errors of changing an entry in civil registry documents. It is aimed at according petitioners an expeditious and cheaper way of correcting errors found in her/his record.",
                },
                {
                    typeOfService: "Registration of Legal Instruments ",
                    aboutTheService: "Similar to court orders/decrees, legal instruments are also registrable in the civil registrar where the birth certificate of the child is registered.",
                },
                {
                    typeOfService: "Endorsement of Birth, Marriage and Death Certificate to PSA-OCRG",
                    aboutTheService: "A document issued to client if they request for the Security Paper of their documents to National Statistics office but the result is negative or no record and the Office of the Municipal Civil Registrar or the person has the copy of the registered document. The Municipal Civil Registrar will issue the endorsement of the said document to the National Statistics Office.",
                },
                {
                    typeOfService: "Registration of Court Orders",
                    aboutTheService: "All amendments in the civil registry entries requiring court orders should be registered within 30 days after finality of the court decision has been received.",
                },
            ],
        },
        {
            office: 'Office of the Sangguniang Bayan Secretariat',
            services: [
                {
                    typeOfService: "Issuance of Certified Copies of Legislative Documents, Certifications, Minutes, Affidavits, etc.",
                    aboutTheService: "Issuance of vital documents on the basis of resolutions and ordinances adopted and enacted which belong of right and benefits to the people, as well as the abstract of legislative appropriations authorized, and all such non-legislative nature such as concurrence of appointments, authorization and empowerment contracts, and the awarding of legislative franchise.",
                },
            ],
        },
        {
            office: 'Municipal Agriculture Office',
            services: [
                {
                    typeOfService: "Distribution of Vegetable Seeds",
                    aboutTheService: "Food Always Available in the Home (FAITH) simply to ensure that farmers need not to buy their vegetable daily needs. The Local Government Unit in partnership with Office of the Provincial Agriculturist and the Department of Agriculture provides continues assistance by providing free vegetable seeds to our walk-in backyard vegetable raisers. Theses assorted vegetable seeds are in packet form (repacked) enough to cultivate in their backyards and container plants. Semi-commercial vegetable growers can also avail provided that they already have ready area to be planted subject to seeds availability and site validation.",
                },
                {
                    typeOfService: "Anti-Rabies Vaccination",
                    aboutTheService: "Rabies is a deadly viral infection that is spread by infected animals caused by a rabies virus that infects the central nervous system. Rabies can be transferred by bites or scratches from rabid animal like dogs. Rabies has no cure but can be prevented through dog vaccination. Anti-rabies mass dog vaccination is scheduled on the requesting barangay to provide a system for the control, prevention of the spread and eventual eradication of human and animal rabies. In coordination and partnership with the Provincial Veterinary Office, every Wednesday is anti-rabies vaccination on the requesting barangay with the vaccinator from the ProVet and the anti-rabies vaccine from the MAO.",
                },
                {
                    typeOfService: "Conduct of Technical Assistance on the Monitoring, Prevention, Diagnosis, Treatment, and Control of Animal Diseases",
                    aboutTheService: "Technical assistance on livestock and poultry are rendered to ensure and promote animal health as well as the owner’s welfare. These services include frequent farm household monitoring for vitamin supplementation, iron injection, castration, deworming, diagnosis and treatment of common diseases. Vaccination against hemorrhagic septicemia, hog cholera, & other common diseases is also conducted as preventive measures. This activity is in partnership with Provincial Veterinary Office.",
                },
                {
                    typeOfService: "Conduct of Technical Assistance on the Identification, Prevention, and Control of Plant Pests and Diseases",
                    aboutTheService: "Technical assistance on plant pests and diseases are rendered to ensure healthy crops for maximize production. These services include on-site field monitoring for plant inspection, analysis, and gathering of plant specimen; in case need of laboratory analysis. Proper crop care management including vine training and trimming, fertilizer recommendation, pest and disease identification and management, water management, maturity indices and also harvesting techniques.",
                },
                {
                    typeOfService: "Conduct of Extension Services to Office Callers of 4-Banner Programs, Organic, Inland Fisheries & Multi-Sectoral Program of the Department of Agriculture and Its Attached Agencies",
                    aboutTheService: "Due to devolution, Agricultural Extension Services was been handled now to the Agricultural Extension Workers of the LGU. This agri-extension service is an on-site activity which provided our farmer clienteles with different farming techniques and technologies with the aim of improving their production not only in crops but also in livestock and fisheries. It also includes farm home management and agricultural livelihood. On-site demo on food processing, crop productions, fertilizer concoctions and animal and fish feed formulation is also being undertaken. ",
                },
                {
                    typeOfService: "Issuance of Non-Objection Certificate",
                    aboutTheService: "Non-Objection Certificate is pre-requisite prior the issuance of Certification Interposes No Objection from the Municipal Mayor to those who wish to apply for coconut cutting permit to PCA. These services ensure that all cutting permit endorsed by the Municipal Mayor to the PCA had undergone field inspection and validation.",
                },
                {
                    typeOfService: "Issuance of Certification (Animal Inspection Certificate/Certificate of Ownership/Farmers Certification)",
                    aboutTheService: "Certification is being issued by this office upon request of the farmer clientele in order to provide them documents for the purposes not limited to transporting animals from our place to another, proof of ownership once they were fully paid on animal dispersal; and those requiring certification as registered farmers.",
                },
                {
                    typeOfService: "Conduct of Farmers Registration in Registry System for Basic Sector in Agriculture (RSBSA)",
                    aboutTheService: "Registry System for Basic Sector in Agriculture (RSBSA) is a nationwide electronic compilation of basic information on farmers, farm laborers, and fishermen; the target beneficiaries of agriculture-related programs and services. It also serves as a requirement and basis for providing financial assistance, subsidiary funding, and insurance services for farmers and fisherfolks such that those registered in RSBSA are given priority in the targeting and implementation of the respective programs of the Department of Agriculture and its attached agencies.",
                },
                {
                    typeOfService: "Conduct of Technical Assistance on the Availment of Palay Seeds and Fertilizer",
                    aboutTheService: "Palay production is still the primary focus commodity of the office considering its relevance to the everyday needs of the constituents. Rice is still irreplaceable by any crops like corn, banana, cassava, sweet potato, and the like. The Department of Agriculture doesn’t ceases to provide production inputs to rice production like seeds, and fertilizers in a varying scheme. These services provide technical assistance to farmers to ensure that all rice farmers in the locality can receive the input subsidy from the Department of Agriculture.",
                },
            ],
        },
        {
            office: "Municipal Environment and Natural Resources Office (MENRO)",
            services: [
                {
                    typeOfService: "Research/Interview Request",
                    aboutTheService: "MENRO offers research and interview to any individuals/ groups private and public. Gives update to other government offices, private individuals, organization and other sectors the ongoing activities and any information regarding environmental concerns within the municipality. It helps improve environmental awareness to all sectors especially among residents.",
                },
                {
                    typeOfService: "Waste to Goods Program ",
                    aboutTheService: "Plastic wastes inserted and compacted in a plastic bottle of coke or pepsi also known as Eco-bottle is an environmentally friendly project of the municipality to reduce plastic litters along walkways and bodies of water thus making the surrounding clean and healthy to live in. This also helps provide alternative source of food(rice) among residents and providing school supplies to students who exchange or redeemed their Eco-bottles to MENR Office.",
                },
            ],
        },
        {
            office: "Municipal Social Welfare and Development Office",
            services: [
                {
                    typeOfService: "Issuance of Certificate of Indigency",
                    aboutTheService: "Certificate of Indigency is issued to indigent residents of the municipality of San Vicente, Camarines Norte who want to avail assistance such as educational, medical, financial, burial and free legal assistance to Public Attorney’s Office (PAO).",
                },
                {
                    typeOfService: "Issuance of Person with Disability Identification Card (PWD ID and Purchase Booklet",
                    aboutTheService: "Purchase Booklet is issued to all Persons with Disability who wants to avail  the benefits and privileges under RA No. 9442 such as free medical/ dental diagnostic & laboratories in all government facilities, 20% discounts in purchase of medicines, in hotels, restaurants, recreation centers, theaters, cinema houses and concert halls, and in fare for domestic air, sea travel and public and transportation, 20% for selected food commodities.",
                },
                {
                    typeOfService: "Issuance of Senior Citizen Identification Card (Senior Citizen ID and Purchase Booklet",
                    aboutTheService: "Senior Citizen Id and Purchase Booklet is issued to citizen ages 60 years old and up who wants to avail of the benefits and privileges under RA No. 9994 such as free medical/ dental diagnostic &laboratories in all government facilities, 20% discounts in purchase of medicines, purchases of selected food commodities, in hotels, restaurants, recreation centers, theaters, cinema houses and concert halls, and in fare for domestic air, sea travel and public and transportation.",
                },
                {
                    typeOfService: "Issuance of Solo Parent Identification Card (Solo Parent ID)",
                    aboutTheService: "Solo Parent Identification as mandated by RA 8972 can be availed by solo parents who have been qualified as such by the MSWD shall likewise be entitled to avail of any benefits/services provided in the law. Solo parent shall be issued upon approval by any local government unit as recommended by the Social Worker of the Municipality.",
                },
                {
                    typeOfService: "Scholarship Program",
                    aboutTheService: "The objective of this Program is to encourage and assists deserving student in the Municipality of San Vicente to attain quality education and contribute towards community building and helps attain national economic prosperity.",
                },
                {
                    typeOfService: "Early Childhood Care and Development (Daycare Service)",
                    aboutTheService: "This program provides and defends the right of children to assistance, including proper care and nutrition, provide them with special protection against all forms of neglect, abuse, cruelty, exploitation and other condition prejudicial to their development and opportunities for the total development of the child through various early childhood care and development activities. The MSWD supervised and monitors all daycare centers in Barangay.",
                },
                {
                    typeOfService: "Social Case Study Report",
                    aboutTheService: "Social Case Study Report is issued to residents of San Vicente who wants to avail assistance to other agencies such as medical, financial, burial and educational as part of the Expanded Assistance to Individuals/Families in Crisis situation program and services of this municipality.",
                },
                {
                    typeOfService: "PhilHealth Ng Masa",
                    aboutTheService: "This program funded by the Local Government Unit of San Vicente which provides access to health care services for identified indigent families with one-year coverage and renewable.",
                },
                {
                    typeOfService: "Violence Against Women and Their Children Welfare Program",
                    aboutTheService: "This program aims to assist support women and their children who are victims of Domestic Violence such as physical abuse, sexual abuse, psychological abuse, and financial abuse. ",
                },
                {
                    typeOfService: "Children in Conflict with the Law (CICL)",
                    aboutTheService: "Child in conflict with the law is usually referred by Department of Justice who has cases needed for assessment if acted with discernment or without discernment. This is to determine if minor will undergo intervention program based on the assessment. The Municipal Social Welfare and Development Office (MSWDO) is the forefront to assist minors who are physically abuse and other related abuses as referred by PNP, Barangay Officials and other concerned citizens.",
                },
            ],
        },
        {
            office: "Office of the Municipal Assesor",
            services: [
                {
                    typeOfService: "Issuance of Revised Tax Declarations",
                    aboutTheService: "The existing tax declaration or previous tax receipt is required from real property owners when paying their Real Property Tax. A new tax declaration is issued when there is a transfer of ownership and / or amendment of value.",
                },
                {
                    typeOfService: "Issuance of a Certified Computer Print-out of the Tax Declaration",
                    aboutTheService: "The Tax Declaration serves as a period-covered record of a real property unit (Land, Building and Machinery) and as basis for payment of real property taxes. Real Property owners or any authorized representative can be provided computer print-outs of their tax declaration/s for their own records.",
                },
                {
                    typeOfService: "Issuance of Certification of No-Improvement / Certificate of No-Property and other Certifications",
                    aboutTheService: "Certified True Copies Certifications of Various Property Holdings or non-improvements and other certifications may be obtained from this office.",
                },
                {
                    typeOfService: "Provision of Re-Assessment / Revision / Cancellation of Assessment of Real Properties",
                    aboutTheService: "The Assessment Records at the Municipal Assessor’s Office serve as a basis for computing the Annual tax dues from the owners of Land and Buildings.  Property owners occasionally request the cancellation or dropping of the assessment of their property/ies from the Assessment Roll for Building and Machineries or for the adjustment or correction of the assessment of their real property.",
                },
                {
                    typeOfService: "Assessment of Newly Discovered Property (Land); Newly Constructed Building / Machineries and Issuance of updated Tax Declaration",
                    aboutTheService: "New Tax Declaration is needed by the owners of newly declared property/ies Land / Building and newly installed Machinery to determine the value of the Real Property.",
                },
                {
                    typeOfService: "Verification of History of Real Property Assessment / Tax Declaration",
                    aboutTheService: "Real Property Owners & Authorized Representatives Require Verification & Examination of Superseded (Cancelled) Tax Declaration on file for New Titling Procedures, court Cases and other Legal Processes.",
                },
                {
                    typeOfService: "Verification of Property Location and Vicinity",
                    aboutTheService: "Persons with legal interest in a Real Property / ies require verification of the Location / Vicinity of such with available data of the OMASS, for various personal or legal uses. ",
                },
            ],
        },
        {
            office: "Municipal Health Office",
            services: [
                {
                    typeOfService: "Provision of Medical Consultation",
                    aboutTheService: "Among the service of the Municipal Health Office is to provide preventive services, diagnose and give appropriate medical services to any individual who need medical assistance .Refer complicated cases to higher facility. There is leveling of patients from Barangay to Midwife to Nurse and to Municipal Health Officer. Referral form is a prerequisite.",
                },
                {
                    typeOfService: "Expanded Program in Immunization (OPV, BCG, DPT, Hepa Measles",
                    aboutTheService: "To ensure that infants/children and mothers have access to routinely recommended infant/childhood vaccines. Six vaccinepreventable diseases were initially included in the EPI: tuberculosis, poliomyelitis, diphtheria, tetanus, pertussis and measles.BCG birth dose, Hepatitis B birth dose, Oral Poliovirus Vaccine, Pentavalent Vaccine, Measles Containing Vaccines(Antimeasles Vaccine, Measles, Mumps, Rubella) and Tetanus Toxoid.",
                },
                {
                    typeOfService: "Maternal/Child Health Care Service",
                    aboutTheService: "To achieve Low Maternal Mortality and Morbidity Rates and to fully carry out the implementation of a comprehensive MATERNAL CARE PROGRAM for Pregnant and lactating women.",
                },
                {
                    typeOfService: "Family Planning Services (Barangay Health Station)",
                    aboutTheService: "The Municipal Health office provides Family Planning to promote proper child spacing and birth control.",
                },
                {
                    typeOfService: "Bemonc (San Vicente Birthing Home)",
                    aboutTheService: "To achieve low maternal mortality and morbidity rates. The Municipal Health Office of San Vicente implements / provides comprehensive maternal care program for pregnant and lactating women. Ensures that all deliveries are handled by trained health personal on BemONC.",
                },
                {
                    typeOfService: "Issuance of Medical Certificate/Medico Legal Certificate",
                    aboutTheService: "A Medical Certificate - who will seek a medical certificate as a requirement for local employment, school entrance, medical excuses and other related matters. A Medico Legal Certificate is generally required for any legal purposes.",
                },
                {
                    typeOfService: "Issuance of Sanitary Permit",
                    aboutTheService: "All Food/Non-Food business establishments are required to secure sanitary permit for safe/healthy measures and compliance pursuant to PD 856 – The Standard of the Sanitary Code of the Philippines.",
                },
                {
                    typeOfService: "Issuance of Healthcare Certificate",
                    aboutTheService: "To ensure safety / healthy measures of all food / non-food handlers.",
                },
                {
                    typeOfService: "Provision of the National TB Program",
                    aboutTheService: "To promote health in general by decreasing the number of TB patient in LGU through DOTS.",
                },
                {
                    typeOfService: "Provision of the Leprosy Program",
                    aboutTheService: "To promote health in general by decreasing the number of Leprosy patient through Case finding by using Slit Skin Smear.",
                },
                {
                    typeOfService: "Availment of Laboratory Request",
                    aboutTheService: "To improve the management of health conditions using various means of identifying the causes and nature of diseases and aid the physician in diagnosing/treatment of diseases.",
                },
                {
                    typeOfService: "Laboratory Services for TB Patients",
                    aboutTheService: "To provide laboratory services for the probable TB patient, to provide early detection and proper medication in order to reduce mortality and morbidity of TB patients.",
                },
                {
                    typeOfService: "Availing of New Born Screening",
                    aboutTheService: "To assess/examine all Newborn for any Congenital Metabolic Disorder in order to prevent the cause of mental retardation or fetal death.",
                },
                {
                    typeOfService: "Availing of Animal Bite Service",
                    aboutTheService: "The Municipal Health Center in partnership with the DOH for the implementation of RA-9482. Give the initial dose of Anti Rabies to the client.",
                },
                {
                    typeOfService: "Adolescence Health Youth Development Program",
                    aboutTheService: "Establishment of Friendly Clinic to cater adolescence among 15-19 age groups. Gives immunization of tetanus toxoid / MMR and reduce the incidence of early pregnancy / STIs / HIV / AIDS.",
                },
            ],
        },
        {
            office: "Municipal Tourism Office",
            services: [
                {
                    typeOfService: "Research/Interview Request",
                    aboutTheService: "Tourism Office offers research and interview to any individuals/ groups private and public.  It can help how to boost the tourism sector of the municipality.",
                },
                {
                    typeOfService: "Tourism Coordination",
                    aboutTheService: "To visit the town of discovery and adventure. And experience the thrill of Mananap falls. We offer tour guiding to local and foreign tourist.",
                },
            ],
        },
        {
            office: "Municipal Property and Supply Office",
            services: [
                {
                    typeOfService: "Receipt and Issuance of Office Supplies & Equipment to Requesting Officer/End User of Local Government Unit and Other Government Agencies/Entities",
                    aboutTheService: "This is an extension services of the Local Government of San Vicente to provide assistance to those who are in needs of the Office Supplies and Equipment for the Requesting Officer/end user.",
                },
                {
                    typeOfService: "Rental Fee for the Use of Government Owned Facilities and Equipment",
                    aboutTheService: "This is an extension service of the Local Government Unit of San Vicente, Camarines Norte to provide assistance to those who are in needs of the properties and facilities owned by the Municipality.",
                },
            ],
        },
        {
            office: "Office of the Municipal Treasurer",
            services: [
                {
                    typeOfService: "Collection of Business Tax",
                    aboutTheService: "All business establishments are required to secure a  Business License and Mayor’s Permit and pay the corresponding business taxes before the start of operations. The Business License must be renewed from January 1 to 20 every year as mandated in the local tax ordinances unless an extension is issued by the Sangguniang Bayan. Penalties are imposed after this period. Business taxes for newly opened enterprises are based on capitalization, but those already existing are computed on the receipts. Payments may be made annually or quarterly. Taxes are due on the first 20 days of the start of each period or by quarterly installments beginning on January 20, April 20, July 20 and October 20.",
                },
                {
                    typeOfService: "Collection of Community Tax Certificate (CTC) - Individual",
                    aboutTheService: "Every inhabitant of the Philippines, eighteen (18yrs old) of age or over has been regularly employed on a wage or salary basis for at least thirty (30) consecutive working days during any calendar year or who is engaged in a business or occupation, or who owns a real property with an aggregate assessed value of One Thousand Pesos (Php 1,000.00) or more, or who is required by law to file an income tax return shall pay an annual additional tax of Five Pesos(Php 5.00) and an annual additional tax of One Peso (Php1.00) for every One thousand pesos (P1,000.00) of income regardless of whether for business, exercise of profession or from property which in no case shall exceed Five Thousand Pesos (Php5,000.00).",
                },
                {
                    typeOfService: "Collection of Community Tax Certificate (CTC) - Corporation",
                    aboutTheService: "Every Corporation no matter how created or organized, whether domestic or resident foreign, engaged in or doing business in the Philippines shall pay an Annual Community Tax of Five Hundred Pesos (Php500.00) and an annual additional tax of Two Pesos (Php2.00) for every Five Thousand Pesos of Gross Receipts or earnings derived from business in the Philippines during the preceding year, in no case shall not exceed Ten Thousand Pesos (Php10,000). An annual additional tax of Two Pesos (Php2.00) for every Five Thousand Pesos (Php5,000) worth of real property in the country during the valuation used for payment of the Real Property.",
                },
                {
                    typeOfService: "Collection of Regulatory Fees and Changes",
                    aboutTheService: "The Municipality of San Vicente imposes the collection of regulatory fees (such as fees on weights and measures, building permits, zonal/ location permit, tricycle operators permit, occupational fees animal and civil registration and inspection) and charges (clearances and certifications, and other service income) in accordance to the newly implemented 2011 Local Revenue Code.",
                },
                {
                    typeOfService: "Collection of Real Property Taxes (RPT)",
                    aboutTheService: "Real properties such as land, buildings and machineries are assessed by the Municipal Assessor’s Office and Real Property Taxes are due every year based on the assessment level and fair market value of the real property. The Real Property Taxes are made at Land Tax Division of the Municipal Treasurer’s Office. Payments can be made in annual, semiannual, or quarterly basis. Advance payment will be done on or before the last working day of the year which a 20% discount maybe acquires. It can be paid also through the Compromise Agreement Scheme which pertain  to a legal document signed by and both the Municipal Treasurer and Taxpayer with the conditions that the Real Property Tax delinquent shall be settled within the period agreed upon on an installment basis.",
                },
                {
                    typeOfService: "Issuance of Tax Clearance",
                    aboutTheService: "Tax Clearance is issued by the Office of the Municipal Treasurer when the property is fully paid from its corresponding tax due. It is one of the requirements in securing different documents in selling and in processing of property transfer in the Bureau of Internal Revenue and in the Registry of Deeds.",
                },
                {
                    typeOfService: "Registration of Large Cattle",
                    aboutTheService: "The owner of the Large cattle is required to register in the office of the Municipal Treasurer for which a certificate of ownership shall  be issued to the owner. 'Large Cattle' includes an at least twoyear-old horse, mule, ass, carabao, cow or other domesticated  member of bovine family. The ownership or its sale or transfer of ownership to another person shall be registered.",
                },
                {
                    typeOfService: "Transfer of Large Cattle",
                    aboutTheService: "Transfer Fee shall be collected only once a large cattle is transferred more than once in a day. Transfer of Ownership of Large cattle is paid in the Office of the Municipal Treasurer.",
                },
                {
                    typeOfService: "Issuance of Treasury Certification",
                    aboutTheService: "Treasury Certification is issued by the Municipal Treasurer in accordance to the request of the taxpayer such as Certificate of Payment.",
                },
            ],
        },
        {
            office: "Municipal Engineering Office",
            services: [
                {
                    typeOfService: "Building Permits",
                    aboutTheService: "A Building Permit is required prior to the construction, erection, alteration, major repair, or renovation or conversion of any building/structure owned by government of private entities.  The permit becomes null and void if work does not commence within one year from the date of such permit, or if the building or work is suspended or abandoned at any time after it has been commenced for a period of 120 days.",
                },
                {
                    typeOfService: "Ancillary Permits",
                    aboutTheService: "The Ancillary Permits duly signed and sealed by the corresponding professionals and the plans and specifications shall be submitted together with the duly notarized application for Building Permit. The Building Permit is null and void if not accompanied by the Ancillary Permits. The prescribed Ancillary and other Accessory Permits/forms shall likewise be used whenever applicable. The Ancillary Permits are the following: i. Architectural Permit; ii. Civil/Structural Permit; iii.Electrical Permit; iv. Mechanical Permit; v. Sanitary Permit 119; vi. Plumbing Permit vii. Electronics Permit.",
                },
                {
                    typeOfService: "Accessory Permits",
                    aboutTheService: "Accessory Permits are issued by the Building Official for accessory parts of the project with very special functions or use which are indicated in the plans and specifications that accompany the building permit application. These may include, among others: bank and records vaults; swimming pools; firewalls separate from the building/structure; towers; silos; smokestacks; chimneys; commercial/industrial fixed ovens; industrial kilns/furnaces; water/waste treatment tanks, septic vaults; concrete and steel tanks; booths, kiosks and stages; and tombs, mausoleums and niches. Accessory Permits are issued by the Building Official for activities being undertaken prior to or during the processing of the building permit. The coverage is spelled out in the accessory permit form including the expiry period. These shall be signed by the concerned owner/applicant and by the concerned professionals. These permits include, among others, ground preparation and excavation, encroachment of foundation to public area, fencing, for fence not exceeding 1.80 meters high, sidewalk construction, temporary sidewalk enclosure and occupancy, erection of scaffolding, erecting, repair, removal of sign; and demolition. ",
                },
            ],
        },
        {
            office: "Municipal Accounting Office",
            services: [
                {
                    typeOfService: "Issuance of Certificate of Premium Contribution and/or Certificate of Loan Payment",
                    aboutTheService: "Upon the request of the employee, Office of the Municipal Accountant issues a certification to the employee for the Premium Contributions and/or Loan Payment for reconciliation purposes.",
                },
            ],
        },
        {
            office: "Business Permits and Licensing Office",
            services: [
                {
                    typeOfService: "Motorized Tricycle Operator's Permit (MTOP) New or Renewal",
                    aboutTheService: "The Motorized Tricycle Operator’s Permit (MTOP) is a document granting franchise or license to any individual with tricycle/s allowing him to ply and operate within the territorial jurisdiction of San Vicente, Camarines Norte. MTOP is being issued to regulate the number of tricycles to avoid traffic congestion. There shall be collected an annual franchise fee per unit payable on or before January 20 of the year for the operation of each tricycle-for hire. Only Filipino citizens who are actually residing in the municipality of San Vicente, Camarines Norte are qualified to operate and maintain tricycles-for-hire.",
                },
                {
                    typeOfService: "Cessation (Retirement/Closure) of Business",
                    aboutTheService: "Enterprises, upon cessation of operation, shall inform the LGU for the assessment of any tax due. Any person natural or juridical who discontinues, transfer to other locality/ies or close/retire his/her business operation(s) is subject to the taxes, fees and charges on business. Any tax due must first be paid before any business or an undertaking is finally terminated.",
                },
                {
                    typeOfService: "Issuance of Mayor's Clearance",
                    aboutTheService: "Serves as pre-requisite for employment.",
                },
                {
                    typeOfService: "Business Registration (New/Renewal) Issuance of Business Permits",
                    aboutTheService: "The Local Government Code authorizes the LGU to impose taxes, fees and other charges on business entities in order to generate revenue. The Business Permits and Licensing Section (BPLS) were tasked to implement several provisions of the existing Municipal Tax Ordinance. Its main objective is to require all business establishments to register and secure Business License and pay the required taxes and fees prior to the start of operations. Said permit shall be renewed annually, before the 20th of January. Business One Stop Shop (BOSS) is being conducted during business renewal period participated in by authorized representatives from DTI, San Vicente PNP, BFP, Engineering, Assessors, Health, MPDO, and MTPSO.",
                },
                {
                    typeOfService: "Permit on Hauling and Trucking Services (New or Renewal)",
                    aboutTheService: "The Mayor’s Permit to operate hauling or trucking services is granted to every person engaged in the business of hauling and trucking services operating within this municipality.",
                },
            ],
        },
        {
            office: "Municipal Human Resource Office",
            services: [
                {
                    typeOfService: "Request for Issuance of Official Documents, Certificate of Employment and Compensation, Copy of Leave Balances, Copy of Service Records, Copy of Training List Attended, Copy of Appointment and Other Pertinent Documents, Copy of Authenticated Documents, List of Existing Vacant Positions, Human Resource Data and Statistics.",
                    aboutTheService: "Upon the request of the employee, HRMO issues a certification to the employee for their official documents",
                },
                {
                    typeOfService: "The Release of Official Turnover of 201",
                    aboutTheService: "Upon the request of the employee, HRMO issues a certification to the employee for their official documents",
                },
                {
                    typeOfService: "Complaint Mechanism",
                    aboutTheService: "",
                },
                {
                    typeOfService: "Feedback Form",
                    aboutTheService: "",
                },
                {
                    typeOfService: "Complaint Form",
                    aboutTheService: "",
                },
            ],
        },
        {
            office: "Municipal Traffic and Public Safety Office",
            services: [
                {
                    typeOfService: "Public Safety and Order",
                    aboutTheService:
                    <ul>
                        <li>Provide Man-power and Security to all Public Events/Edifices and crowd control</li>
                        <li className='mt-2'>Conduct of Road Clearing Operations along San Vicente to Daet Road and Spillway De- Clogging.</li>
                        <li className='mt-2'>Conduct of Bio-Security and Preventive activities as ANIMAL CHEKCPOINT measure for Large Cattle and Swine Products</li>
                        <li className='mt-2'>Checking of Trucking Business for their renewal and redeem of their Annual Business Permit.</li>
                        <li className='mt-2'>Inspection of Public Utility Vehicle, i,e, SVTODA(TRICYCLE) and SVPODA(PEDICAB) during annual renewal for Road Worthiness and Passenger’s Safety.</li>
                        <li className='mt-2'>Augmentation during collection and imposing of Municipal Ordinance # 11 series 2016(Environmental Fee Collection for Local Tourist bound to Mananap Resort and other Recreational Place of San Vicente.)</li>
                    </ul> ,
                },
                {
                    typeOfService: "Traffic Road and Safety",
                    aboutTheService: <ul>
                        <li className='mt-2'>
                        Conduct of Regular Checkpoint within the vicinity of San Vicente, mostly for Public Utility Vehicle, Private Owned vehicle and non-compliant for existing traffic rules and regulations.
                        </li>
                        <li className='mt-2'>
                        Putting up and maintenance of Traffic Sign-ages, Road Humps, Pedestrian Warning along Provincial Road within the vicinity of San Vicente.
                        </li>
                    </ul>,
                },
                {
                    typeOfService: "Emergency and Crisis Management",
                    aboutTheService: "Provide man power and crowd control/security/ assistance to MDRRMO during disaster.",
                },
                {
                    typeOfService: "Miscellaneous Services",
                    aboutTheService: 
                    <ul>
                        <li className='mt-2'>
                        Conducting Inspection for applying Permit to Cut of Softwood trees.
                        </li>
                        <li className='mt-2'>
                        Releasing of LGU-Property such as tables and chairs, Industrial Fan, etc.
                        </li>
                    </ul>,
                },
            ],
        },



    ];

    return (
        <>
            <Banner bannerType="common" src={require("../../res/img/LGU-PERS.jpg")} alt="LGU" searchBar={false} breadcrumbs={[{ title: "Home", to: PATH_NAME.Home }]}>
                <p>Services</p>
            </Banner>

            <div className="pt-3 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 m-5 relative">

                <div className='pb-20'>
                    <img src={require("../../res/img/SERVICES.png")} alt='services_cover' className='rounded-sm' />
                </div>

                <div className='grid grid-cols-3 justify-items-center gap-4 pb-20'>
                    <div className='text-center border-r-2 border-black p-2'>
                        <FaPeopleGroup className='text-5xl text-lgu-green mx-auto' />
                        <p className='leading-loose'>We offer different services for people within our community.</p>
                    </div>
                    <div className='text-center border-r-2 border-black'>
                        <GiPalmTree className='text-5xl text-lgu-green mx-auto' />
                        <p className='leading-loose'>
                            Feel the warmth of our small town as you embark on a journey of exploration and relaxation during your travels.</p>
                    </div>
                    <div className='text-center'>
                        <MdAddBusiness className='text-5xl text-lgu-green mx-auto' />
                        <p className='leading-loose'>
                            Select San Vicente as the inaugural destination for your business venture.</p>
                    </div>
                </div>

                <div className=' grid grid-rows-2 sm:grid-rows-none md:grid-cols-2 gap-8 pb-10'>
                    <div class=" p-3 pb-10 border rounded-lg shadow bg-slate-200 border-gray-100">
                        <div>
                            <img className='w-auto h-auto rounded-sm' src={require("../../res/img/residents.jpg")} alt='San Vicente Blood Donation Program' />
                        </div>
                    </div>
                    <div className='p-5'>
                        <div className='flex md:block '>
                            <h1 className='text-2xl lg:text-5xl font-bold pb-4'>FOR&nbsp;</h1>
                            <h1 className='text-2xl lg:text-5xl font-bold pb-4'>RESIDENTS</h1>
                        </div>
                        <div className="sm:flex-grow sm:border-b-2 sm:border-gray-900"></div>
                        <p className='font-semibold pt-4'>Title Goes Here...</p>
                        <p className='text-sm pt-4 text-justify leading-6'>It engages its enemies using psychic powers. Each of its three heads fires off psychokinetic energy, tripling its power.Weezing alternately shrinks and inflates its twin bodies to mix together toxic gases inside. The more the gases are mixed, the more powerful the toxins become. The Pokémon also becomes more putrid.Geodude that have lived a long life have had all their edges smoothed out until they’re totally round. They also have a calm, quiet disposition.</p>
                        <div className='pt-8'>
                            <NavLink to={PATH_NAME.TheTown.CitizensCharter} onClick={() => window.scrollTo({ top: 0, left: 0 })} className="inline-flex w-full px-8 py-2 text-base font-bold leading-4 text-white bg-lgu-green border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                                Go to Citizen Charter
                            </NavLink>
                        </div>
                    </div>
                </div>

                <div className=' grid grid-rows-2 sm:grid-rows-none md:grid-cols-2 gap-8 pb-10'>
                    <div class=" p-3 pb-10 border rounded-lg shadow bg-slate-200 border-gray-100">
                        <div>
                            <img className='w-auto h-auto rounded-sm' src={require("../../res/img/investors.jpg")} alt='Woman in Black Blazer Smiling' />
                        </div>
                    </div>
                    <div className='p-5'>
                        <div className='flex md:block'>
                            <h1 className='text-2xl lg:text-5xl font-bold pb-4'>FOR&nbsp;</h1>
                            <h1 className='text-2xl lg:text-5xl font-bold pb-4'>INVESTORS</h1>
                        </div>
                        <div className="sm:flex-grow sm:border-b-2 sm:border-gray-900"></div>
                        <p className='font-semibold pt-4'>Title Goes Here...</p>
                        <p className='text-sm pt-4 text-justify leading-6'>It engages its enemies using psychic powers. Each of its three heads fires off psychokinetic energy, tripling its power.</p>
                        <div className='flex flex-wrap space-x-2 pt-5'>
                            <div className="pt-2">
                                <a href={require("../../res/pdf/Geographic-Location.pdf")} download="Geographic-Location.pdf" class="inline-flex w-full px-8 py-2 text-base font-bold leading-4 text-white bg-blue-500 border border-transparent rounded-full md:w-auto hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
                                    Download Business Permit
                                </a>
                            </div>
                            <div className="pt-2">
                                <a href={require("../../res/pdf/Geographic-Location.pdf")} download="Geographic-Location.pdf" class="inline-flex w-full px-8 py-2 text-base font-bold leading-4 text-white bg-blue-500 border border-transparent rounded-full md:w-auto hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
                                    Download File
                                </a>
                            </div>
                            <div className="pt-2">
                                <a href={require("../../res/pdf/Geographic-Location.pdf")} download="Geographic-Location.pdf" class="inline-flex w-full px-8 py-2 text-base font-bold leading-4 text-white bg-blue-500 border border-transparent rounded-full md:w-auto hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600">
                                    Download File
                                </a>
                            </div>
                        </div>

                        <div className='pt-5'>
                            <NavLink to={PATH_NAME.Invest.InvestmentOpportunities} onClick={() => window.scrollTo({ top: 0, left: 0 })} className="inline-flex w-full px-8 py-2 text-base font-bold leading-4 text-white bg-lgu-green border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                                View our Investor Contents
                            </NavLink>
                        </div>
                    </div>
                </div>

                <div className=' grid grid-rows-2 sm:grid-rows-none md:grid-cols-2 gap-8 pb-10'>
                    <div class=" p-3 pb-10 border rounded-lg shadow bg-slate-200 border-gray-100">
                        <div>
                            <img className='w-auto h-auto rounded-sm' src={require("../../res/img/tourist.jpg")} alt='Man in Hat and with Backpack Standing with Hills behind' />
                        </div>
                    </div>
                    <div className='p-5'>
                        <div className='flex md:block'>
                            <h1 className='text-2xl lg:text-5xl font-bold pb-4'>FOR&nbsp;</h1>
                            <h1 className='text-2xl lg:text-5xl font-bold pb-4'>TOURISTS</h1>
                        </div>

                        <div className="sm:flex-grow sm:border-b-2 sm:border-gray-900"></div>
                        <p className='font-semibold pt-4'>Title Goes Here...</p>
                        <p className='text-sm pt-4 text-justify leading-6'>It engages its enemies using psychic powers. Each of its three heads fires off psychokinetic energy, tripling its power.Weezing alternately shrinks and inflates its twin bodies to mix together toxic gases inside. The more the gases are mixed, the more powerful the toxins become. The Pokémon also becomes more putrid.Geodude that have lived a long life have had all their edges smoothed out until they’re totally round. They also have a calm, quiet disposition.</p>
                        <div className='pt-8'>
                            <NavLink to={PATH_NAME.Tourism.SanVicente} onClick={() => window.scrollTo({ top: 0, left: 0 })} className="inline-flex w-full px-8 py-2 text-base font-bold leading-4 text-white bg-lgu-green border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
                                View San Vicente Tourism
                            </NavLink>
                        </div>
                    </div>
                </div>

                <div className='grid grid-cols-2'>
                    <div className='flex items-center justify-center'>
                        <h1 className='sm:text-3xl font-bold text-center'>View Other Offered Services</h1>
                    </div>

                    <div className='pt-3 px-2 sm:px-6 lg:px-8 m-5 relative'>

                        {/* Search input box */}
                        <div className="relative">

                            <input
                                type="search"
                                className="block w-full mb-4 p-4 pl-10 text-sm text-gray-900 border border-lgu-green rounded-full bg-gray-100 focus:ring-lgu-green focus:border-lgu-green"
                                placeholder="Search"
                                value={search}
                                onChange={(e) => {
                                    setSearch(e.target.value);
                                }}
                                required
                                onKeyDown={handleKeyDown}
                            />

                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg
                                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </div>

                        </div>

                    </div>


                </div>
            </div>



            <div className="pt-3 mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 m-5">
                {servicesData.map((office, index) => (
                    <div key={index} className="pt-3">
                        <div
                            className="bg-lgu-green py-2 p-4 sm:px-16 flex justify-between item-center cursor-pointer rounded-xl"
                            onClick={() => toggle(index)}
                        >
                            <p className="text-2xl mt-2 text-white font-semibold">{office.office}</p>
                            <div className="text-5xl text-white">
                                {open === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </div>
                        </div>

                        <Collapse isOpened={open === index}>
                            <div className="bg-lgu-lime px-16 pb-10 pt-5 rounded-tr-xl rounded-tl-xl rounded-br-xl rounded-bl-xl">
                                {office.services.map((service, serviceIndex) => (
                                    <div key={serviceIndex} className="mb-4">
                                        <p className="text-xl font-semibold text-justify">{service.typeOfService}</p>
                                        <p className="text-sm text-justify">{service.aboutTheService}</p>
                                    </div>
                                ))}
                            </div>
                        </Collapse>
                    </div>
                ))}
            </div>
            <BackToTop />
        </>
    );
}