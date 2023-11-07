import React, { useRef, useEffect, useState } from 'react';
import Banner from '../../../components/Banner';
import { PATH_NAME } from '../../../Variables/GLOBAL_VARIABLE';


export default function Offices() {
  const officeData = [
    {
      name: 'Office of the Municipal Mayor',
      mandate: 'Exercise general supervision and control over all programs, projects, services, and activities of the LGU. Enforce all laws and ordinances relative to the governance of the LGU and the exercise of the appropriate corporate powers. Ensure the delivery of basic services and the provision of adequate facilities.',
      vision: 'Envision an office with competent, honest, courteous workers of the government providing outstanding services to its clients.',
      mission: 'To provide basic services conducive to the attainment of a better quality life through participative governance.',
      orgChartImage: '../../../res/img/Municipal-Traffic-And-Public-Safety-Office-Org-Chart.jpg',
      contactNumbers: ['Contact Number: 0998-547-0465', 'Hotline Number: 0546036244', 'Email Address: lgusanvicente4609@gmail.com'],
    },
    {
      name: 'Office of the Municipal Vice Mayor',
      mandate: 'Take charge of the Office of the Municipal Vice-Mayor and the Office of the Sangguniang Bayan; steer the members to actively and productively participate in the deliberations of the sanggunian; provide leadership during deliberations and in making decisions.',
      vision: 'A progressive and responsive leadership in the legislative branch that actively promotes the overall development of the municipality and its citizenry.',
      mission: (
        <div>
          <ul>
            <li>To provide leadership and direction to the Sangguniang Bayan and to promote the making of resolutions and ordinances that is geared towards an efficient and effective administrations;</li><br></br>
            <li>To promote linkages with different sectors of the society for a more effective administration of the legislative functions; and</li><br></br>
            <li>To support programs that promote the enhancement of skills and capabilities of the Sangguniang Bayan employees, and exercise general supervision over all employees of the legislative branch.</li>
          </ul>
        </div>
      ),
      orgChartImage: '../../../res/img/Municipal-Traffic-And-Public-Safety-Office-Org-Chart.jpg',
      contactNumbers: ['Contact Number: 0939-911-0503', 'Facebook: San Vicente Sangguniang Bayan', 'Email Address: sbsanvicente4609@gmail.com'],
    },
    {
      name: 'Office of the Sangguniang Bayan Legislative',
      mandate: 'The Sangguniang Bayan, as a legislative body of the municipality, shall enact ordinances approve resolutions and appropriate fund for the general welfare of the municipality and its inhabitants pursuant to Section 16 of RA7160 and in the proper exercise of the corporate powers of the municipality as provided for under Section 22 of RA7160.',
      vision: 'A pro-active Sangguniang Bayan that is dedicated, God-fearing, responsible, productive, and transparent in legislation that is pro-people, towards the promotion of effective local governance and general welfare.',
      mission: (
        <div>
          <ul>
            <li>To adequately provide the Sanggunian with a capable support staff in the performance of its functions;</li><br></br>
            <li>To act as custodian and maintain the proper safekeeping of Sanggunian documents and records;</li><br></br>
            <li>To maintain an open line of information and communication to the general public regarding measures undertaken by the Sanggunian; and</li><br></br>
            <li>To enhance personnel capabilities and develop their potentials to the fullest in order to cope with the onset of innovative changes.</li>
          </ul>
        </div>
      ),
      orgChartImage: '../../../res/img/Municipal-Traffic-And-Public-Safety-Office-Org-Chart.jpg',
      contactNumbers: ['Contact Number: 0939-911-0503', 'Facebook: San Vicente Sangguniang Bayan', 'Email Address: sbsanvicente4609@gmail.com'],
    },
    {
      name: 'Office of the Sangguniang Bayan Secretariat',
      mandate: "Take charge of the Office of the Secretary to the Sangguniang Bayan, handle correspondence and keep journal of the Sangguniang Bayan’s proceedings. To keep track of various sanggunian records, transactions, and documents in aid of efficient legislations and to exercise the supervision over the secretariat of the Sangguniang Bayan.",
      vision: 'Effective, efficient, and responsive Legislative Secretariat.',
      mission: 'To enact ordinances, approve resolutions and appropriate funds for the general welfare of the municipality and its inhabitants and in the proper exercise of the corporate powers of the municipality pursuant to RA 7160.',
      orgChartImage: '../../../res/img/Municipal-Traffic-And-Public-Safety-Office-Org-Chart.jpg',
      contactNumbers: ['Contact Number: 0939-911-0503', 'Facebook: San Vicente Sangguniang Bayan', 'Email Address: sbsanvicente4609@gmail.com'],
    },
    {
      name: 'Business Permit and Licensing Office ',
      mandate: 'To follow',
      vision: 'To follow',
      orgChartImage: '../../../res/img/Municipal-Traffic-And-Public-Safety-Office-Org-Chart.jpg',
      contactNumbers: ['Contact Number: To follow',],
    }, {
      name: 'Human Resource Management Office',
      mandate: 'To follow',
      vision: 'To follow',
      mission: 'To follow',
      orgChartImage: '../../../res/img/Municipal-Traffic-And-Public-Safety-Office-Org-Chart.jpg',
      contactNumbers: ['Contact Number: To follow'],
    },
    {
      name: 'Municipal Accounting Office',
      mandate: 'The Municipal Accounting Office takes charge of both the accounting and the internal audit services of the Local Government Unit.',
      vision: 'To provide information and deliver accounting services with professionalism, efficiency, and excellence.',
      mission: (
        <div>
          <ul>
            <li>To implement the standard internal control for a transparent local government financial operation.</li><br></br>
            <li>To prepare financial records and statements in compliance with the new government accounting system.
            </li>
          </ul>
        </div>
      ),
      orgChartImage: '../../../res/img/Municipal-Traffic-And-Public-Safety-Office-Org-Chart.jpg',
      contactNumbers: ['Contact Number: 0998-547-0465', 'Hotline Number: 0546036244', 'Email Address: lgusanvicente4609@gmail.com'],
    },
    {
      name: 'Municipal Agriculture Office',
      mandate: "The Municipal Agriculture Office is responsible for the promotion of agricultural development by providing the policy framework, public investments, and support services needed for domestic and export oriented business enterprises. It shall be the primary concern of this office to improve farm income and generate work opportunities for farmers, fishermen, and rural workers. It shall encourage people’s participation in agricultural development through sectoral representation and agricultural policy making bodies so that the policies, plans, and programs of the office are formulated and executed to satisfy their needs. It shall also use a bottom-up self-reliant farm system approach that will emphasize social justice, equity, productivity, and sustainability in the use of agricultural resources.",
      vision: 'A modernized smallholder agriculture and fisheries; a diversified rural economy that is dynamic, technologically advanced and internationally competitive. Its transformation guided by the sound practices of resource sustainability, the principles of social justice, and a strong sector participation.',
      mission: 'To help and empower the farming and fishing communities and the private sector to produce enough, accessible for every Filipino income for all.',
      orgChartImage: '../../../res/img/Municipal-Traffic-And-Public-Safety-Office-Org-Chart.jpg',
      contactNumbers: ['Contact Number: To follow'],
    },
    {
      name: "Municipal Assessor's Office",
      mandate: "To follow",
      vision: 'A friendly and an office of a smiling face and dedicated public servants, provide honest and efficient service to the people who are in need of our services. Enhance revenue collection and establish a complete inventor and identify ownership of every piece of real property within the municipality.',
      mission: 'The Municipal Assessor’s Office provides knowledgeable customer service and brings a systemic method through real property assessment. Conduct frequent physical surveys to verify and determine whether all real property within the municipality are properly listed in the assessment rolls.',
      orgChartImage: '../../../res/img/Municipal-Traffic-And-Public-Safety-Office-Org-Chart.jpg',
      contactNumbers: ['Email Address: svcnmunicipalassessor@gmail.com'],
    },
    {
      name: 'Municipal Budget Office',
      mandate: 'Takes charge of budgeting and matters with budgetary implications.',
      vision: 'Create the fiscal environment whereby customer departments/offices and barangay achieve applicable qualities of prudence, resourcefulness, and priority-based utilization of scarce resources for effective and efficient delivery of public goods and services to the people/communities.',
      mission: 'To formulate and implement the municipal budget to attain socio-economic objectives and to be responsible for the efficient and sound utilization of government funds and other resources.',
      orgChartImage: '../../../res/img/Municipal-Traffic-And-Public-Safety-Office-Org-Chart.jpg',
      contactNumbers: ['Contact Number: To follow'],
    },

    {
      name: "Municipal Civil Registrar",
      mandate: "To follow",
      vision: 'To follow',
      mission: 'To follow',
      orgChartImage: '../../../res/img/Municipal-Traffic-And-Public-Safety-Office-Org-Chart.jpg',
      contactNumbers: ['Contact Number: To follow'],
    },
    {
      name: 'Municipal Disaster Risk Reduction and Management Office',
      mandate: 'To follow',
      vision: 'San Vicente is a center for agriculture, sustainable, agro-processing eco tourism and hydrothermal energy  and the first walkable municipality in the province of Camarines Norte, where responsible and self-reliant men and women live and enjoy safe an quality life and efficiently managed environment and community vested with rich heritage and culture under a transparent and innovative leadership.',
      mission: 'Ensure effective disaster preparedness, emergency response, and climate change adaptation to enhance the safety of the citizens.',
      orgChartImage: '../../../res/img/Municipal-Traffic-And-Public-Safety-Office-Org-Chart.jpg',
      contactNumbers: ['MDRRMO: 0998-577-3706',
        'SV-PNP: 0998-598-5962',
        'SV-BFP: 0985-471-2169',
        'MTPSO: 0920-488-0734'],
    },
    {
      name: 'Municipal Engineering Office',
      mandate: 'Administer, coordinate, supervise, and control the construction, maintenance, improvement, and repair of roads, bridges, and other engineering and public works projects of the LGU concerned. Provide engineering services to the LGU concerned, including investigation and survey, engineering designs, feasibility studies, and project management.',
      vision: 'A well equipped and fully functional Engineering Unit that focuses and acts on essential infrastructure needs of the Municipality and its citizens.',
      mission: 'To constantly monitor the overall condition of all necessary and central infrastructure facilities in order to sustain their usefulness and to address vital engineering concerns in critical areas of the Municipality.',
      orgChartImage: '../../../res/img/Municipal-Traffic-And-Public-Safety-Office-Org-Chart.jpg',
      contactNumbers: ['To follow'],
    },
    {
      name: 'Municipal Health Office',
      mandate: 'To follow',
      vision: 'A global leader for attaining better health outcomes, competitive and responsive health care system, and equitable health financing.',
      mission: 'To guarantee equitable, sustainable, and quality health for all Filipinos, especially the poor, and to lead the quest for excellence in health.',
      orgChartImage: '../../../res/img/Municipal-Traffic-And-Public-Safety-Office-Org-Chart.jpg',
      contactNumbers: ['To follow'],
    },
    {
      name: '‌Municipal Planning & Development Office',
      mandate: (
        <div>
          <ul>
            <li>Formulate integrated economic, social, physical, and other development plans and policies for consideration of the local development council.</li><br></br>
            <li>Monitor and evaluate the implementation of the different programs, activities, and projects in accordance with the approved development plan.</li>
          </ul>
        </div>
      ),
      vision: 'Effective and sustainable planning for the progress and advancement of the municipality of San Vicente, Camarines Norte.',
      mission: 'Initiate and cause the participatory formulation, coordination, and integration of effective and comprehensive development plans; analyze income and expenditure patterns; provide sufficient and reliable information; conduct researches and continuing studies for project planning; monitor and evaluate the implementation of programs and projects with feedback mechanism in support of the LGU vision.',
      orgChartImage: '../../../res/img/Municipal-Traffic-And-Public-Safety-Office-Org-Chart.jpg',
      contactNumbers: ['To follow'],
    },
    {
      name: 'Municipal Social Welfare and Development Office',
      mandate: 'To follow',
      vision: 'To follow',
      mission: 'To follow',
      orgChartImage: '../../../res/img/Municipal-Traffic-And-Public-Safety-Office-Org-Chart.jpg',
      contactNumbers: ['To follow'],
    },
    {
      name: 'Municipal Traffic & Public Safety Office',
      mandate: 'To follow',
      vision: 'The MTPSO committed to serve and protect the community, life, and property. They are committed to execute any implementing rules and regulations regarding public order and traffic violations and accidents free community.',
      mission: 'To lessen the crime and accident within the vicinity of San Vicente through conducting on duty personnel 24 hours a day and visibility patrolling and to attain a peaceful and safe community within the municipality.',
      orgChartImage: '../../../res/img/Municipal-Traffic-And-Public-Safety-Office-Org-Chart.jpg',
      contactNumbers: ['MTPSO Hotline: 0985-403-2655', 'Email Address: sanvicentemtpso@gmail.com',
        'Facebook Page: Mun. Traffic and Public Safety Office-San Vicente'],
    },
    {
      name: "Municipal Treasurer's Office",
      mandate: 'Take custody of and exercise proper management of the funds of the municipal government to take charge of its disbursement and such other funds which may be entrusted by law or other competent authority.',
      vision: 'To become an effective partner in the attainment of progress and financial stability of the Municipality of San Vicente.',
      mission: 'To generate revenues through efficient collection of taxes, fees, and charges accruing to the local government in accordance with existing laws and ordinances, and to take custody and exercise proper management of funds of the municipality in order to sustain and maintain its financial needs.',
      orgChartImage: '../../../res/img/Municipal-Traffic-And-Public-Safety-Office-Org-Chart.jpg',
      contactNumbers: ['To follow'],
    },
    {
      name: "Municipal Tourism Office",
      mandate: 'To follow',
      vision: 'To promote and develop sustainable and responsible tourism in San Vicente, showcasing its natural beauty, cultural heritage, and unique attractions while contributing to the economic well-being of the community. Our mission is to provide memorable and authentic experiences for visitors, protect and preserve our environment, and enhance the quality of life for our residents by creating opportunities for employment and economic growth in the tourism sector.',
      mission: 'To emphasize responsible tourism practices, community involvement, economic development, and the preservation of the natural and cultural assets that make San Vicente an attractive destination. Specific golas and strategies would be developed in alignment with this mission to guide the tourism development efforts in the area.',
      orgChartImage: '../../../res/img/Municipal-Traffic-And-Public-Safety-Office-Org-Chart.jpg',
      contactNumbers: ['Email Address: taldocindy@gmail.com'],
    },

  ];

  const [selectedContent, setSelectedContent] = useState(officeData[0]);
  const [selectedContentIndex, setSelectedContentIndex] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.clientHeight;
      if (contentHeight > 900) {
        contentRef.current.style.maxHeight = '900px';
        contentRef.current.style.overflowY = 'auto';
      }
    }
  }, []);

  const handleContentClick = (content, index) => {
    setSelectedContent(content);
    setSelectedContentIndex(index);

    // Scroll the content back to the top
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  };


  return (
    <div className="flex flex-col">
      {/* Banner */}
      <Banner
        bannerType="common"
        searchBar={true}
        breadcrumbs={[{ title: "Home", to: PATH_NAME.Home }]}>
        <h1 className="lg:text-6xl text-lgu-lime font-regular font-open sans p-0 md:text-5xl text-2xl md:p-2 mb-0 mt-0">
          Offices
        </h1>
      </Banner>

      <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 m-5'>
        {/* Sidebar */}
        <div className="flex flex-row mt-20 mb-20">
          <div className="w-1/4 bg-lgu-yellow p-4 mt-10 ml-20 mb-20 mr-6" style={{ maxHeight: '800px', overflowY: 'auto' }}>
            <ul>
              {officeData.map((office, index) => (
                <li
                  key={index}
                  style={{
                    marginBottom: '1.5vw',
                    cursor: 'pointer',
                    textDecoration: index === selectedContentIndex ? 'underline' : 'none', // Add underline here
                  }}
                  onClick={() => handleContentClick(office, index)}
                >
                  {office.name}
                </li>
              ))}
            </ul>
          </div>


          {/* Main Content with Scrollable Border */}
          <div className="w-3/4 pr-4 border border-black p-4" ref={contentRef}>
            <div>
              {selectedContent && (
                <>
                  <div className='font-bold font-open sans text-3xl'>
                    <h2>{selectedContent.name}</h2>
                  </div>
                </>
              )}

              <div>
                {/* Content here */}
                <div className='font-bold font-open sans text-2xl mt-4'>
                  <h2>Mandate</h2>
                </div>
                <p className='mt-4'>{selectedContent.mandate}</p>

                <div className='font-bold font-open sans text-2xl mt-60'>
                  <h2>Vision</h2>
                </div>
                <p className='mt-4'>{selectedContent.vision}</p>

                <div className='font-bold font-open sans text-2xl mt-60'>
                  <h2>Mission</h2>
                </div>
                <p className='mt-4'>{selectedContent.mission}</p>

                <div className='font-bold font-open sans text-2xl mt-60'>
                  <h2>Organizational Chart</h2>
                </div>
                <img src={selectedContent.orgChartImage} alt="Organizational Chart" className='mt-4' />

                <div className='font-bold font-open sans text-2xl mt-60'>
                  <h2>Contact Numbers</h2>
                </div>
                <ul className='ml-4'>
                  {selectedContent.contactNumbers.map((contact, index) => (
                    <li key={index} className='my-5'>{contact}</li>
                  ))}
                </ul>
              </div>

              <iframe
                width="90%"
                height="600"
                frameBorder="0"
              ></iframe>

              <div style={{ textAlign: 'right', marginTop: '1.5rem' }}>
                <a
                  href="/services-offered"
                  style={{ textDecoration: 'underline', color: 'black' }}>See Services Offered
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
