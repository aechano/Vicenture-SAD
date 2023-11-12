import React from 'react';
import Banner from '../../../components/Banner';
import { PATH_NAME } from '../../../Variables/GLOBAL_VARIABLE';
import BackToTop from '../../../components/BackToTop';

export default function History() {
    return (
        <div>
            <Banner bannerType="common" searchBar={true} breadcrumbs={[{ title: "Home", to: PATH_NAME.Home }]}>
                <p>History Unveiling: San Vicente</p>
            </Banner>

            {/* San Vicente, Camarines Norte */}
            <div className="flex flex-row">
                <div className="p-4">
                    <img
                        src={require("../../../res/img/mananap.jpg")}
                        alt="Mananap Falls"
                        className="float-left mr-4 my-2 w-auto h-96"
                    />
                    <div className="text-35">
                        <p className='mb-3 mt-1'>Long before Ambos Camarines was finally divided into provinces of Camarines Norte and Camarines Sur in 1919, the town of San Vicente had been existing for more than a century. Based on the document Memoria de la Provincia de Camarines Norte from the Records Management and Archives Office in Manila, San Vicente was created in 1790. The document provided details of Camarines Norte such as the creation, situation, communications, products, bodies of water, climate, and poblacions. There was no exact date of the creation except for the year and a recorded population of 1,187.</p>
                        <p className='mb-3'>The historical origin of the municipality of San Vicente has some religious elements.   The town originated as a barrio known as San Antonio, located southwest of Daet.It was founded in 1771 when Fray Antonio de Luna, OFM was the Bishop of Nueva Caceres who favored the expansion of the Franciscan Missions in Daet. However, when the bishop died on April 16, 1771, the Franciscans subsequently left the mission. During the time, there were vigorous attempts for secularization in many parts of the country, including the Diocese of Nueva Caceres.   It was then when religious were prevented from expanding their missions and the parishes were filled by seculars.</p>

                        <p className='mb-5'>Fortunately, in the year 1783, the mission in San Antonio was re-opened and was placed within the jurisdiction of the Parish of Talisay.    During the term of Fray Domingo Collantes, OP Bishop of Nueva Caceres, Barrio San Antonio was established as a visita of Talisay.   The visita was placed under the patronage of one of the great Dominican saints, Saint Vincent Ferrer, and its name was changed to San Vicente, in honor of the patron saint.</p>

                        <p className='mb-3'>Legend says that a statuette of Saint Vincent Ferrer was owned by an old woman living at the eastern part of the barrio. It was her practice to pray to the saint every morning at dawn.   One morning, she noticed that the statuette was no longer at its place on the altar.   The woman went in search of it and at last, she found it among the thick guava grooves on the southern part of the barrio. The statuette was only a foot tall but she did not able to carry it back home. Requesting the help of some able-bodied and strong men, they tried to lift the statuette but to no avail.    Soon an old woman devotee of the saint arrived walking on bent knees and folded arms. She tried to raise it and what a miracle! She had able to lift the statuette like it was a blade of grass.</p>

                        <p className='mb-3'>The incident happened many more times and always, the statuette would be found standing on the same big stone amidst the guava trees.    The statuette was wrapped in luminous light that people could not stand the sparkling brightness.    Investigation by the devotees revealed that many amorseko blooms (a kind of grass with spines) were stuck to the statuette’s clothing.    Had the saint been walking among the undergrowth?   The people wondered!</p>

                        <p className='mb-3'>The statuette of Saint Vincent Ferrer was then carried to his glass sanctuary in the poblacion, where the capitanes, other town officials, and the parish priest held a meeting.    A decision was made to appropriate funds for the construction of a church in the site chosen by the saint himself. Because of his miracles, Saint Vincent Ferrer was declared the patron saint and the town was named in his honor.</p>

                        <p className='mb-3'>For several years, San Vicente remained as a visita of Talisay while its neighboring Barrio Mambunga-bunga remained as a visita of Daet. There came a time that the principales and naturales of the two visitas resolved to request their separation from the pueblos of Daet and Talisay.   From year 1802 to 1803, they petitioned for their independence, but their endeavor was not yet granted.</p>

                        <p className='mb-3'>Under the guidance of the parish priest of Talisay, Padre Domingo Valencia and later, Padre Thomas Matias de San Antonio, supervised the construction of a stone church until the transfer of the latter in 1840. Padre Ignacio dela Cruz took over in 1842 and the church was completed in 1843. On March 7, 1864, during the term of Padre Tomas Romero, Fray Francisco Gainza, OP, Bishop of Nueva Caceres solemnly consecrated the church.   He was the first bishop to ever set foot in the locality.</p>

                        <p className='mb-3'>On May 3, 1874, during his third Visita Pastoral in the Parish of Talisay, the bishop returned to San Vicente.   Judging from what he saw and from the reports of Padre Balbino del Castillo, Parish Priest of Talisay and Padre Juan Natividad, Resident Priest of San Vicente, plans were laid out for the establishment of San Vicente as an independent parish.    After consultations with the Bishop of Nueva Caceres, the Alcalde Mayor of Camarines Norte and the Gobierno General, it was approved on October 5, 1876 through Real Orden No. 696. Following the approval was the confirmation of the Real Orden creating a parish in the pueblo of San Vicente and the appropriation of Four Hundred Pesos (P400.00) annually as stipend of the designated parish priest, and One Hundred Fifty Pesos (P 150.00) for the activities of the parish.    The confirmation coming from Manila was dated September 11, 1877.</p>

                        <p className='mb-3'>On October 30, 1877, Bishop Francisco Gainza, OP, issued the Ecclesiastical Charter elevating the status of the visita into an independent parish of San Vicente, sharing with people of Naga City, the honor of bearing the imprint of the Third Dominican Bishop of Nueva Caceres.    He assigned Padre Tomas Saralde as Cura Interino, who reported to his parish assignment immediately on November 17, 1877. He performed his first baptisms in the parish on two baby girls given the names of Andrea Albis and Martina Comienda.</p>

                        <p className='mb-3'>The parish celebrates its fiesta every April 5, the date assigned by the Universal Church to celebrate the memory of Saint Vincent Ferrer.    However, in 1957, upon the prompting of Padre Pablo Balon, the municipal council headed by Mayor Benjamin Llamanzares petitioned Bishop Pedro Santos of Nueva Caceres to allow them to celebrate the town fiesta every last Friday of April, because April 5 falls within the Lenten Season and many times within the Holy Week. Friday, on the other hand, is the day of the week dedicated to Saint Vincent Ferrer.   The Archbishop granted the petition, so that in 1958, the town celebrated their fiesta on April 25 and then, every last Friday of April every year thereafter.   Volume 1 General Information 4.</p>

                        <p className='mb-3'>During the early years of Spanish rule, the padre or Spanish friar assigned in a paroquia or parish towers as the symbol of Christian faith and Spanish sovereignty.   His word was the law.   He was respected and obeyed.   He was in charge of the charities, education, social welfare, and other activities of the community.   He assembles the principalia or moneyed class and presents to them whoever he chose.     The people simply nod in approval. He was the real authority and he overpowered the officials of a pueblo or town.</p>

                        <p className='mb-3'>The pueblo was headed by a gobernadorcillo (little governor), popularly called as capitan.   He was assisted by the cabezas de barangay, who were either appointed or elected. Other town officials were elected annually by all married men of the pueblo. To qualify as town official, one must be a Filipino of not less than twenty-five (25) years of age, must be able to read and write Spanish, and for the office of gobernadorcillo, he must had been a teniente mayor or a cabeza de barangay.   The governor-general confirmed their appointments and elections in Manila, as they were the choice of his authorized representative during the elections. The capitanes and the cabezas had no fixed terms, because they held offices at the wish of the friars.</p>

                        <p className='mb-3'>The pioneer capitan to hold the reins of the pueblo of San Vicente was Capitan Camilo Moreno, with his wife Capitana Epifania de Moreno.   He was succeeded by Capitanes Hegino Mendoza, Cresencio Parica, Gregorio Parica, Rufino Ricafrente, and Eduardo Ybarola, among others.    The pueblo then was composed of five (5) barangays, each with about fifty (50) families headed by a cabeza, who stood in assistance to the capitan.    These composite barangays were Calabagas, headed by Cabezang Luis Estravez; Fabrica, headed by Cabezang Moning Hernandez; Iraya Sur, headed by Cabezang Lucio Opeda; Man-ogob, headed by Cabezang Felipe Alarde; and the poblacion, together with Asdum, headed by Narciso Ricafrente.   Each cabeza de barangay had their vast real estate in their respective territorial jurisdiction.</p>

                        <p className='mb-3'>Other town officials were Tenientes Valentin Sacro, Estanislao Albis, and Isabelo Apo (father of Florentino Apo).   Teniente Valentin Sacro was designated as lieutenant of the field, whose duty was to guard during the night, not only the surroundings of the tribunal municipal, but also the town proper.   Teniente Estanislao Albis was designated as lieutenant of the cattle.   He had to supervise the ganado mayor in the business of the cattle in and out of the province.   Teniente Isabelo Apo was designated as lieutenant of the police. He was well known as Tinteng Sabelo, who was assigned by the capitan to remit the monthly collection to Naga, hiking for one (1) day and one (1) night with his guia guardia.   The sources of revenue collections were the cedula tax paid by every Filipino men and women from eighteen (18) to sixty (60) years of age, the urbana tax imposed on real properties, ansag or fish coral tax, and the cockfighting permits.</p>

                        <p className='mb-3'>When a law was made and approved for the whole community and ready for public announcement, the lieutenant of the police summons a crier, and through a bandillo, the new law is made known to the people with the use of a bell or drum. Tomas Orbe was then the town crier, who used to announce the content of the new laws with his stentorian voice.   He was succeeded by Gregorio Ponayo, popularly known as Goriong Obak.</p>

                        <p className='mb-3'>Education was under the supervision of the Spanish Ministry and among the members of the youth were Maestrong Sixto Jamito, Maestrang Gavina Zantua-Hernandez, and in later years, Mr. Miguel Albis.    Maestrong Sixto taught Cartilla-Caton and Doctrina Cristiana, while Maestrang Gavina taught the Etica and Español.    Mr. Miguel Albis became the first Filipino teacher, who taught in primary and secondary with English subjects when the US Congress enacted the Philippine Bill of 1902.</p>

                        In a research conducted by the Municipal Planning and Development Coordinator (MPDC) from the Records Management and Archives Office in Manila revealed a treasure of listings of municipal officials from 1839 to 1879, a period of 40 years. Painstaking efforts were made just to decipher the handwriting in the worn out documents and its translation from Spanish to English language, resulting to the presentation of the officials listed in ANNEX BF.1.

                    </div>
                </div>



            </div>






            <BackToTop />
        </div>



    )
}