export type TeamId = 'dsis' | 'bdios' | 'gedis' | 'd2sf';

export type Member = {
  name: string;
  role?: string;
  team: TeamId;
  isLead?: boolean;
  orcid?: string;
  scopus?: string;
  scholar?: string;
  linkedin?: string;
};

export const DIRECTION = {
  director: 'Pr. Mohammed OUZZIF',
  deputy: 'Pr. Mohamed EL KAMILI',
  deputy2: 'Pr. Abdelkrim AMMOUMOU'
};

export const MEMBERS: Member[] = [
  {
    name: 'Pr. Hicham BEL HADAOUI',
    role: 'Team lead',
    team: 'dsis',
    isLead: true,
    orcid: '0000-0001-8676-5570',
    scopus: 'https://www.scopus.com/authid/detail.uri?authorId=24765903400',
    linkedin: 'https://linkedin.com/in/hicham-belhadaoui-72774057'
  },
  {
    name: 'Pr. Nadia AFIFI',
    team: 'dsis',
    orcid: '0000-0001-9727-7054',
    scopus: '56463858200',
    scholar: 'https://scholar.google.com/citations?user=Jg4po40AAAAJ',
    linkedin: 'https://linkedin.com/in/nadia-afifi-a1640616'
  },
  {
    name: 'Pr. Mohamed Reda FILALI HILALI',
    team: 'dsis',
    orcid: '0000-0002-7134-6186',
    scopus: 'https://www.scopus.com/authid/detail.uri?authorId=57209143923',
    scholar: 'https://scholar.google.com/citations?user=2LM5kksAAAAJ'
  },
  {
    name: 'Pr. Mostafa JEBBAR',
    team: 'dsis',
    orcid: '0000-0001-6833-0549',
    scopus: '55638237100',
    linkedin: 'https://linkedin.com/in/mostafa-jebbar-16460b6b'
  },
  {
    name: 'Pr. Azzeddine DAHBI',
    team: 'dsis',
    orcid: '0000-0003-3443-8222',
    scopus: '57188745170'
  },
  {
    name: 'Pr. Moad Hicham SAFHI',
    team: 'dsis',
    orcid: '0000-0001-7301-6060',
    scopus: 'https://www.scopus.com/authid/detail.uri?authorId=57200046855',
    scholar: 'https://scholar.google.com/citations?user=4HIERzQAAAAJ',
    linkedin: 'https://linkedin.com/in/hichammoadsafhi'
  },

  {
    name: 'Pr. Elhoussaine ZIYATI',
    role: 'Team lead',
    team: 'bdios',
    isLead: true,
    orcid: '0000-0003-0195-8459',
    scopus: '55496568900',
    linkedin: 'https://linkedin.com/in/ziyati-houssaine-9851a124'
  },
  {
    name: 'Pr. Khalid BOURAGBA',
    team: 'bdios',
    orcid: '0000-0003-2795-4667',
    scopus: '56611592200',
    scholar: 'https://scholar.google.com/citations?user=cNccXAgAAAAJ'
  },
  {
    name: 'Pr. Soufiane LAKHLIFI',
    team: 'bdios',
    orcid: '0000-0002-9923-4493',
    scopus: '57211585703',
    scholar: 'https://scholar.google.com/citations?user=pkBzbewAAAAJ',
    linkedin: 'https://linkedin.com/in/soufiane-lakhlifi-a19340101'
  },
  {
    name: 'Pr. M\u2019barek IAOUSSE',
    team: 'bdios',
    orcid: '0000-0002-4949-5556',
    scopus: '57215282931',
    scholar: 'https://scholar.google.com/citations?user=l5TfSNoAAAAJ'
  },
  {
    name: 'Pr. Mohammed BAZIRHA',
    team: 'bdios',
    orcid: '0000-0002-7099-152X',
    scopus: 'https://www.scopus.com/authid/detail.uri?authorId=57216805492',
    scholar: 'https://scholar.google.com/citations?user=NqmJi3sAAAAJ',
    linkedin: 'https://linkedin.com/in/mohammed-bazirha'
  },

  {
    name: 'Pr. Meriyem CHERGUI',
    role: 'Team lead · GEDIS',
    team: 'gedis',
    isLead: true,
    orcid: '0000-0002-4372-0097',
    scopus: '57212030033',
    scholar: 'https://scholar.google.com/citations?user=aSsVakUAAAAJ',
    linkedin: 'https://linkedin.com/in/meriyem-chergui-4a780418'
  },
  {
    name: 'Pr. Mohammed OUZZIF',
    role: 'Director · C3S',
    team: 'gedis',
    orcid: '0000-0003-1100-0228',
    scopus: 'https://www.scopus.com/authid/detail.uri?authorId=24178281900',
    linkedin: 'https://sciprofiles.com/profile/3700430'
  },
  {
    name: 'Pr. Mohamed EL KAMILI',
    role: 'Deputy Director',
    team: 'gedis',
    orcid: '0000-0001-8039-684X',
    scopus: '14041412100',
    scholar: 'https://scholar.google.com/citations?user=93wvRuAAAAAJ',
    linkedin: 'https://linkedin.com/in/mohamed-el-kamili-8317496b'
  },
  {
    name: 'Pr. Imane DAOUDI',
    team: 'gedis',
    orcid: '0009-0007-3516-256X',
    scopus: '25421022200',
    scholar: 'https://scholar.google.com/citations?user=06b6ToUAAAAJ'
  },
  {
    name: 'Pr. Ismail EL HADDIOUI',
    team: 'gedis',
    orcid: '0000-0002-9865-4410',
    scopus: '57216827651',
    scholar: 'https://scholar.google.com/citations?user=cosQnkwAAAAJ',
    linkedin: 'https://linkedin.com/in/ismail-el-haddioui-74759162'
  },
  {
    name: 'Pr. Souad HOUFAIDI',
    team: 'gedis',
    orcid: '0000-0002-5950-1892',
    scopus: '57694765800',
    linkedin: 'https://linkedin.com/in/souad-houfaidi-212375194'
  },
  {
    name: 'Pr. Idriss MOUMEN',
    team: 'gedis',
    orcid: '0000-0002-9981-6370',
    scopus: 'https://www.scopus.com/authid/detail.uri?authorId=58479985500',
    scholar: 'https://scholar.google.com/citations?user=qGAy7BUAAAAJ',
    linkedin: 'https://linkedin.com/in/idriss-moumen-026751101'
  },

  {
    name: 'Pr. Khalid ZARBANE',
    role: 'Team lead',
    team: 'd2sf',
    isLead: true,
    orcid: '0000-0002-6048-5279',
    scopus: '42162431200',
    scholar: 'https://scholar.google.com/citations?user=aPOBw1kAAAAJ',
    linkedin: 'https://linkedin.com/in/khalid-zarbane-8a54a260'
  },
  {
    name: 'Pr. Aissa OUBALLOUCH',
    team: 'd2sf',
    orcid: '0000-0002-8800-5564',
    scopus: '57208524903',
    linkedin: 'https://linkedin.com/in/aissa-ouballouch-39975b10b'
  },
  {
    name: 'Pr. Zitouni BEIDOURI',
    team: 'd2sf',
    orcid: '0000-0002-5347-7895',
    scopus: '10039741100',
    scholar: 'https://scholar.google.com/citations?user=7wQv3bgAAAAJ',
    linkedin: 'https://linkedin.com/in/zitouni-beidouri-1573b6198'
  },
  {
    name: 'Pr. Mohamed EL OUMAMI',
    team: 'd2sf',
    orcid: '0000-0003-3166-6529',
    scopus: '57202745354',
    scholar: 'https://scholar.google.com/citations?user=1qdTUIwAAAAJ'
  }
];

export const TEAM_TOPICS: Record<TeamId, string[]> = {
  dsis: [
    'Cyber Security',
    'AI for Security',
    'Cryptography',
    'IoT for healthcare',
    'Intelligent Systems'
  ],
  bdios: [
    'Big Data',
    'IoT',
    'Internet of Skills',
    'NLP / Document AI',
    'Distributed systems',
    'Smart metering'
  ],
  gedis: [
    'Data Governance',
    'Information Systems',
    'Blockchain',
    'Federated Learning',
    'Smart Agriculture',
    'Health AI'
  ],
  d2sf: [
    'Lean & additive manufacturing',
    'Smart systems',
    'Embedded systems',
    'Future technologies'
  ]
};

export type Publication = {
  id: string;
  title: string;
  authors: string;
  year: number;
  type: 'journal' | 'conference' | 'communication';
  venue: string;
  team?: TeamId;
  doi?: string;
  citations?: number;
};

export const PUBLICATIONS: Publication[] = [
  {
    id: '1109-wincom62286-2024-10657270',
    title: 'A New AI-Based University Guidance Model for Moroccan Students',
    authors: 'M. Ghizlane; L. Khalid; F. H. M. Reda; B. Hicham',
    year: 2024,
    type: 'conference',
    venue: '2024 11th International Conference on Wireless Networks and Mobile Communications (WINCOM)',
    team: 'dsis',
    doi: '10.1109/WINCOM62286.2024.10657270'
  },
  {
    id: '1002-jcb-30662',
    title: 'A Novel Assay Reveals the Early Setting-Up of Membrane Repair Machinery in Human Skeletal Muscle Cells',
    authors: 'd\'Agata L.; Rassinoux P.; Gounou C.; Bouvet F.; Bouragba D.; Mamchaoui K.; Bouter A.',
    year: 2024,
    type: 'journal',
    venue: 'Journal of Cellular Biochemistry',
    team: 'bdios',
    doi: '10.1002/jcb.30662'
  },
  {
    id: '1109-emr-2023-3348431',
    title: 'A Smart Contract Architecture Framework for Insurance Industry Using Blockchain and Business Process Management Technology',
    authors: 'Rachad A.; Gaiz L.; Bouragba K.; Ouzzif M.',
    year: 2024,
    type: 'journal',
    venue: 'IEEE Engineering Management Review',
    team: 'gedis',
    doi: '10.1109/EMR.2023.3348431'
  },
  {
    id: '1109-wincom62286-2024-10657409',
    title: 'Arabic Aspect Category Detection Using Traditional Neural Networks and Arbert',
    authors: 'L. Youssef; Z. Elhoussaine',
    year: 2024,
    type: 'conference',
    venue: '2024 11th International Conference on Wireless Networks and Mobile Communications (WINCOM)',
    team: 'bdios',
    doi: '10.1109/WINCOM62286.2024.10657409'
  },
  {
    id: '1109-wincom62286-2024-10654822',
    title: 'Contributions to Meteorological Forecasting: A Comparative Study of Machine Learning-Driven Temperature Predictions at Menara Station in Morocco',
    authors: 'Iaousse M.; El Kamili M.; Hmimou A.; Jouilil Y.',
    year: 2024,
    type: 'conference',
    venue: 'Proceedings - 11th International Conference on Wireless Networks and Mobile Communications, WINCOM 2024',
    team: 'gedis',
    doi: '10.1109/WINCOM62286.2024.10654822'
  },
  {
    id: '1109-icc51166-2024-10623064',
    title: 'Efficient Collaborations through Weight-Driven Coalition Dynamics in Federated Learning Systems',
    authors: 'Hanjri M.E.; Reguieg H.; Attiaoui A.; Abouaomar A.; Kobbane A.; Kamili M.E.',
    year: 2024,
    type: 'conference',
    venue: 'IEEE International Conference on Communications',
    team: 'gedis',
    doi: '10.1109/ICC51166.2024.10623064'
  },
  {
    id: '1109-wincom62286-2024-10654970',
    title: 'Enhanced Vertical Pod Auto Scaling with Decision Tree Regressor-Max in Kubernetes',
    authors: 'Bouflous Z.; Haraka F.; Ouzzif M.; Bouragba K.',
    year: 2024,
    type: 'conference',
    venue: 'Proceedings - 11th International Conference on Wireless Networks and Mobile Communications, WINCOM 2024',
    team: 'gedis',
    doi: '10.1109/WINCOM62286.2024.10654970'
  },
  {
    id: '1109-wincom62286-2024-10657389',
    title: 'LoRaWAN Behavior Analysis in a Linear Topology for Border Monitoring',
    authors: 'Ndoye E.H.M.; Diallo O.; El Kamili M.',
    year: 2024,
    type: 'conference',
    venue: 'Proceedings - 11th International Conference on Wireless Networks and Mobile Communications, WINCOM 2024',
    team: 'gedis',
    doi: '10.1109/WINCOM62286.2024.10657389'
  },
  {
    id: '4018-979-8-3693-3641-0-ch004',
    title: 'The importance of knowledge management and AI in collaborative and adaptive learning: Impact on education',
    authors: 'Hilali K.; Chergui M.; Ahattab J.; Ammoumou A.',
    year: 2024,
    type: 'conference',
    venue: 'Adaptive Learning Technologies for Higher Education',
    doi: '10.4018/979-8-3693-3641-0.ch004'
  },
  {
    id: '1109-wincom59760-2023-10322899',
    title: 'A Comparative Evaluation of FedAvg and Per-FedAvg Algorithms for Dirichlet Distributed Heterogeneous Data',
    authors: 'Reguieg H.; Hanjri M.E.; Kamili M.E.; Kobbane A.',
    year: 2023,
    type: 'conference',
    venue: 'Proceedings - 10th International Conference on Wireless Networks and Mobile Communications, WINCOM 2023',
    team: 'gedis',
    doi: '10.1109/WINCOM59760.2023.10322899'
  },
  {
    id: '1109-wincom59760-2023-10322921',
    title: 'A Comprehensive Survey On Efficient Transformers',
    authors: 'Elouargui Y.; Zyate M.; Sassioui A.; Chergui M.; El Kamili M.; Ouzzif M.',
    year: 2023,
    type: 'conference',
    venue: 'Proceedings - 10th International Conference on Wireless Networks and Mobile Communications, WINCOM 2023',
    team: 'gedis',
    doi: '10.1109/WINCOM59760.2023.10322921'
  },
  {
    id: 't-a-gamified-e-learning-model-ba-2023',
    title: 'A GAMIFIED E-LEARNING MODEL BASED ON THE ONE SIZE FITS ALL MODEL AND THE STATIC AND DYNAMIC ADAPTATION MODEL',
    authors: 'Ezzoubair Z.; Mohammed O.; Ismail E.H.',
    year: 2023,
    type: 'journal',
    venue: 'Journal of Theoretical and Applied Information Technology',
    team: 'gedis'
  },
  {
    id: '1109-wincom59760-2023-10323009',
    title: 'A Multi-Cloud and Zero-Trust based Approach for Secure and Redundant Data Storage',
    authors: 'Moudni M.E.; Ziyati E.',
    year: 2023,
    type: 'conference',
    venue: 'Proceedings - 10th International Conference on Wireless Networks and Mobile Communications, WINCOM 2023',
    team: 'bdios',
    doi: '10.1109/WINCOM59760.2023.10323009'
  },
  {
    id: 't-a-role-attribute-based-access--2023',
    title: 'A Role-Attribute Based Access Control Model for Dynamic Access Control in Hadoop Ecosystem',
    authors: 'idar H.A.; Belhadaoui H.; Filali R.; Malassé O.',
    year: 2023,
    type: 'journal',
    venue: 'IAENG International Journal of Computer Science',
    team: 'dsis'
  },
  {
    id: '1109-wincom59760-2023-10323026',
    title: 'A secure based trust model for Optimized Link State Routing protocol (OLSR)',
    authors: 'Lakrami F.; Kamili M.E.; Elkamoun N.; Sounni H.; Labouidya O.',
    year: 2023,
    type: 'conference',
    venue: 'Proceedings - 10th International Conference on Wireless Networks and Mobile Communications, WINCOM 2023',
    team: 'gedis',
    doi: '10.1109/WINCOM59760.2023.10323026'
  },
  {
    id: '1109-ictmod59086-2023-10438128',
    title: 'Adaptive Learning Systems: A Comprehensive Overview and Identification of Challenges',
    authors: 'Hilali K.; Chergui M.; Ammoumou A.',
    year: 2023,
    type: 'conference',
    venue: '2023 IEEE International Conference on Technology Management, Operations and Decisions, ICTMOD 2023',
    team: 'gedis',
    doi: '10.1109/ICTMOD59086.2023.10438128'
  },
  {
    id: '1109-wincom59760-2023-10323019',
    title: 'An RFID-Based Traceability Approach to Improve the Overall Health Status Management in Morocco',
    authors: 'Souali K.; Souali M.; Ouzzif M.',
    year: 2023,
    type: 'conference',
    venue: 'Proceedings - 10th International Conference on Wireless Networks and Mobile Communications, WINCOM 2023',
    team: 'gedis',
    doi: '10.1109/WINCOM59760.2023.10323019'
  },
  {
    id: '1007-978-3-031-18344-7-13',
    title: 'Analysis of Load Balancing Algorithms Used in the Cloud Computing Environment: Advantages and Limitations',
    authors: 'Bouflous Z.; Ouzzif M.; Bouragba K.',
    year: 2023,
    type: 'conference',
    venue: 'Lecture Notes in Networks and Systems',
    team: 'bdios',
    doi: '10.1007/978-3-031-18344-7_13'
  },
  {
    id: '1109-wincom59760-2023-10322935',
    title: 'Data Leakage Prevention Approach Based On Insider Trust Calculation',
    authors: 'Moudni M.E.; Ziyati E.',
    year: 2023,
    type: 'conference',
    venue: 'Proceedings - 10th International Conference on Wireless Networks and Mobile Communications, WINCOM 2023',
    team: 'bdios',
    doi: '10.1109/WINCOM59760.2023.10322935'
  },
  {
    id: '1109-dasc-picom-cbdcom-cy59711-2023-10361333',
    title: 'EdgeSA: Secure Aggregation for Privacy-Preserving Federated Learning in Edge Computing',
    authors: 'Bouamama J.; Benkaouz Y.; Ouzzif M.',
    year: 2023,
    type: 'conference',
    venue: '2023 IEEE International Conference on Dependable, Autonomic and Secure Computing, International Conference on Pervasive Intelligence and Computing, International Conference on Cloud and Big Data Computing, International Conference on Cyber Science and Technology Congress, DASC/PiCom/CBDCom/CyberSciTech 2023',
    team: 'gedis',
    doi: '10.1109/DASC/PiCom/CBDCom/Cy59711.2023.10361333'
  },
  {
    id: '11591-ijeecs-v31-i1-pp378-385',
    title: 'Fault tolerant and load balancing model for software defined networking controllers',
    authors: 'Choukri I.; Ouzzif M.; Bouragba K.',
    year: 2023,
    type: 'journal',
    venue: 'Indonesian Journal of Electrical Engineering and Computer Science',
    team: 'gedis',
    doi: '10.11591/ijeecs.v31.i1.pp378-385'
  },
  {
    id: '1109-wincom59760-2023-10322988',
    title: 'Intelligent Systems Engineering in Open Pit Mines: Intelligent Systems for Mining Fleet Management',
    authors: 'Bnouachir H.; Meriyem C.; Hicham M.',
    year: 2023,
    type: 'conference',
    venue: 'Proceedings - 10th International Conference on Wireless Networks and Mobile Communications, WINCOM 2023',
    team: 'gedis',
    doi: '10.1109/WINCOM59760.2023.10322988'
  },
  {
    id: '11591-ijece-v13i5-pp5333-5341',
    title: 'Intelligent solution for automatic online exam monitoring',
    authors: 'Moukhliss G.; Hilali R.F.; Belhadaoui H.',
    year: 2023,
    type: 'journal',
    venue: 'International Journal of Electrical and Computer Engineering',
    team: 'dsis',
    doi: '10.11591/ijece.v13i5.pp5333-5341'
  },
  {
    id: '1108-ijrdm-12-2022-0505',
    title: 'Live streaming shopping as a new retail format: insights from a qualitative study of consumers and retailers',
    authors: 'Picot-Coupey K.; Bouragba Y.; Collin Lachaud I.; Gallarza M.G.; Ouazzani Y.',
    year: 2023,
    type: 'journal',
    venue: 'International Journal of Retail and Distribution Management',
    team: 'bdios',
    doi: '10.1108/IJRDM-12-2022-0505'
  },
  {
    id: '1109-wincom59760-2023-10322922',
    title: 'Predictive Maintenance-as-a-Service (PdMaaS) in Industry 4.0 using Blockchain',
    authors: 'Rachad A.; Gaiz L.; Bouragba K.; Ouzzif M.',
    year: 2023,
    type: 'conference',
    venue: 'Proceedings - 10th International Conference on Wireless Networks and Mobile Communications, WINCOM 2023',
    team: 'gedis',
    doi: '10.1109/WINCOM59760.2023.10322922'
  },
  {
    id: '4018-ijcac-328094',
    title: 'Resource-Aware Least Busy (RALB) Strategy for Load Balancing in Containerized Cloud Systems',
    authors: 'Bouflous Z.; Ouzzif M.; Bouragba K.',
    year: 2023,
    type: 'journal',
    venue: 'International Journal of Cloud Applications and Computing',
    team: 'bdios',
    doi: '10.4018/IJCAC.328094'
  },
  {
    id: 't-smart-truck-distribution-in-an-2023',
    title: 'SMART TRUCK DISTRIBUTION IN AN OPEN-PIT MINE',
    authors: 'Bnouachir H.; Chergui M.; Medromi H.',
    year: 2023,
    type: 'journal',
    venue: 'International Journal on Technical and Physical Problems of Engineering',
    team: 'gedis'
  },
  {
    id: '1109-wincom59760-2023-10322908',
    title: 'Traffic Control, Congestion Management and Smart Parking through VANET, ML, and IoT: A Review',
    authors: 'Ouhmidou H.; Nabou A.; Ikidid A.; Bouassaba W.; Ouzzif M.; El Kiram M.A.',
    year: 2023,
    type: 'conference',
    venue: 'Proceedings - 10th International Conference on Wireless Networks and Mobile Communications, WINCOM 2023',
    team: 'gedis',
    doi: '10.1109/WINCOM59760.2023.10322908'
  },
  {
    id: '1109-wincom59760-2023-10322990',
    title: 'Visually-Rich Document Understanding: Concepts, Taxonomy and Challenges',
    authors: 'Sassioui A.; Benouini R.; El Ouargui Y.; El Kamili M.; Chergui M.; Ouzzif M.',
    year: 2023,
    type: 'conference',
    venue: 'Proceedings - 10th International Conference on Wireless Networks and Mobile Communications, WINCOM 2023',
    team: 'gedis',
    doi: '10.1109/WINCOM59760.2023.10322990'
  },
  {
    id: '15866-iremos-v15i3-21680',
    title: 'Application of Double Integral Inequality for the Stability Analysis of the Singular Time-Varying Delay System',
    authors: 'Haouti K.E.; Barra A.; Ammoumou A.; Bensassi B.',
    year: 2022,
    type: 'conference',
    venue: 'International Review on Modelling and Simulations',
    doi: '10.15866/iremos.v15i3.21680'
  },
  {
    id: 't-big-data-and-machine-learning--2022',
    title: 'BIG DATA AND MACHINE LEARNING APPROACH FOR AN EFFICIENT INTELLIGENT LOGISTICS TRANSPORTATION',
    authors: 'Mouammine Z.; Khoulimi H.; El Imrani O.; Chrayah M.; Ammoumou A.; Nsiri B.',
    year: 2022,
    type: 'journal',
    venue: 'Journal of Theoretical and Applied Information Technology'
  },
  {
    id: '18280-isi-270516',
    title: 'Business Value Creation Through Project Management Based on Big Data Approach',
    authors: 'Chennouk H.; Ziyati E.H.; El Bhiri B.',
    year: 2022,
    type: 'conference',
    venue: 'Ingenierie des Systemes d\'Information',
    team: 'bdios',
    doi: '10.18280/isi.270516'
  },
  {
    id: '1016-j-physb-2022-413898',
    title: 'Corrigendum: “Optical, electrical and dielectric properties of mixed metal oxides derived from Mg–Al Layered Double Hydroxides based solid solution series” (Physica B: Physics of Condensed Matter (2022) 626, (413367), (S0921452621005354), (10.1016/j.physb.2021.413367))',
    authors: 'Lahkale R.; Sadik R.; Elhatimi W.; Bouragba F.Z.; Assekouri A.; Chouni K.; Rhalmi O.; Sabbar E.',
    year: 2022,
    type: 'conference',
    venue: 'Physica B: Condensed Matter',
    team: 'bdios',
    doi: '10.1016/j.physb.2022.413898'
  },
  {
    id: '1504-ijics-2022-122921',
    title: 'Effect of black hole attack in different mobility models of MANET using OLSR protocol',
    authors: 'Nabou A.; Laanaoui M.D.; Ouzzif M.',
    year: 2022,
    type: 'journal',
    venue: 'International Journal of Information and Computer Security',
    team: 'gedis',
    doi: '10.1504/IJICS.2022.122921'
  },
  {
    id: '11591-ijece-v12i2-pp1982-1989',
    title: 'Features selection by genetic algorithm optimization with k-nearest neighbour and learning ensemble to predict Parkinson disease',
    authors: 'Benayad N.; Soumaya Z.; Taoufiq B.D.; Abdelkrim A.',
    year: 2022,
    type: 'journal',
    venue: 'International Journal of Electrical and Computer Engineering',
    doi: '10.11591/ijece.v12i2.pp1982-1989'
  },
  {
    id: '18280-isi-270117',
    title: 'Federated Learning for Medical Imaging: An Updated State of the Art',
    authors: 'Mouhni N.; Elkalay A.; Chakraoui M.; Abdali A.; Ammoumou A.; Amalou I.',
    year: 2022,
    type: 'conference',
    venue: 'Ingenierie des Systemes d\'Information',
    doi: '10.18280/isi.270117'
  },
  {
    id: 't-functional-safety-audit-assess-2022',
    title: 'Functional Safety Audit/Assessment for Automotive Engineering',
    authors: 'El Kamili A.; El Kharaz Y.; Tribak A.',
    year: 2022,
    type: 'conference',
    venue: 'Smart Embedded Systems and Applications',
    team: 'gedis'
  },
  {
    id: '1007-978-3-030-96308-8-54',
    title: 'Implementation of the Business Process Model and Notation in the Modelling of Patient’s Clinical Workflow in Oncology',
    authors: 'Bout N.; Khazaz R.; Azougaghe A.; El-Hfid M.; Abik M.; Belhadaoui H.',
    year: 2022,
    type: 'conference',
    venue: 'Lecture Notes in Networks and Systems',
    team: 'dsis',
    doi: '10.1007/978-3-030-96308-8_54'
  },
  {
    id: '1109-wincom55661-2022-9966456',
    title: 'Industry 4.0 concepts and implementation challenges: Literature Review',
    authors: 'Habib F.E.; Bnouachir H.; Chergui M.; Ammoumou A.',
    year: 2022,
    type: 'conference',
    venue: 'Proceedings - 2022 9th International Conference on Wireless Networks and Mobile Communications, WINCOM 2022',
    team: 'gedis',
    doi: '10.1109/WINCOM55661.2022.9966456'
  },
  {
    id: 't-multi-criteria-analysis-betwee-2022',
    title: 'MULTI-CRITERIA ANALYSIS BETWEEN NOSQL DATABASES CATEGORIES TOWARD A COMPLETE MIGRATION FROM RELATIONAL DATABASE',
    authors: 'Erraji A.; Maizate A.; Ouzzif M.',
    year: 2022,
    type: 'journal',
    venue: 'Journal of Theoretical and Applied Information Technology',
    team: 'gedis'
  },
  {
    id: '1007-978-3-031-01942-5-13',
    title: 'New ETL Process for a Smart Approach of Data Migration from Relational System to MongoDB System',
    authors: 'Erraji A.; Maizate A.; Ouzzif M.',
    year: 2022,
    type: 'conference',
    venue: 'Lecture Notes in Networks and Systems',
    team: 'gedis',
    doi: '10.1007/978-3-031-01942-5_13'
  },
  {
    id: '1016-j-physb-2021-413367',
    title: 'Optical, electrical and dielectric properties of mixed metal oxides derived from Mg-Al Layered Double Hydroxides based solid solution series',
    authors: 'Lahkale R.; Sadik R.; Elhatimi W.; Bouragba F.Z.; Assekouri A.; Chouni K.; Rhalmi O.; Sabbar E.',
    year: 2022,
    type: 'conference',
    venue: 'Physica B: Condensed Matter',
    team: 'bdios',
    doi: '10.1016/j.physb.2021.413367'
  },
  {
    id: '1109-mcsi55933-2022-00026',
    title: 'Predicting Parkinson\'s disease based on transformed speech signal by DWT with two methods for features selection: GA-AdaBoost and BPSO',
    authors: 'Soumaya Z.; Benayad N.; Taoufiq B.D.; Abdelkrim A.',
    year: 2022,
    type: 'conference',
    venue: 'Proceedings - 2022 7th International Conference on Mathematics and Computers in Sciences and Industry, MCSI 2022',
    doi: '10.1109/MCSI55933.2022.00026'
  },
  {
    id: '1109-wincom55661-2022-9966457',
    title: 'Review on Machine Learning Based Intrusion Detection for MANET Security',
    authors: 'Bouassaba W.; Nabou A.; Ouzzif M.',
    year: 2022,
    type: 'conference',
    venue: 'Proceedings - 2022 9th International Conference on Wireless Networks and Mobile Communications, WINCOM 2022',
    team: 'gedis',
    doi: '10.1109/WINCOM55661.2022.9966457'
  },
  {
    id: '1109-wincom55661-2022-9966420',
    title: 'Smart contract for cloud SLA using Service Oriented Architecture and Blockchain',
    authors: 'Rachad A.; Bouragba K.; Ouzzif M.',
    year: 2022,
    type: 'conference',
    venue: 'Proceedings - 2022 9th International Conference on Wireless Networks and Mobile Communications, WINCOM 2022',
    team: 'gedis',
    doi: '10.1109/WINCOM55661.2022.9966420'
  },
  {
    id: '1007-978-3-030-94188-8-20',
    title: 'Toward a Smart Approach of Migration from Relational Database System to NoSQL System: Analyzing and Modeling',
    authors: 'Erraji A.; Maizate A.; Ozzif M.',
    year: 2022,
    type: 'conference',
    venue: 'Lecture Notes on Data Engineering and Communications Technologies',
    team: 'gedis',
    doi: '10.1007/978-3-030-94188-8_20'
  },
  {
    id: '1007-978-3-030-94191-8-63',
    title: 'Toward a Smart Approach of Migration from Relational System DataBase to NoSQL System: Transformation Rules of Structure',
    authors: 'Erraji A.; Maizate A.; Ouzzif M.',
    year: 2022,
    type: 'conference',
    venue: 'Lecture Notes in Networks and Systems',
    team: 'gedis',
    doi: '10.1007/978-3-030-94191-8_63'
  },
  {
    id: '3390-healthcare10102102',
    title: 'Unmanned Aerial Vehicle in the Logistics of Pandemic Vaccination: An Exact Analytical Approach for Any Number of Vaccination Centres',
    authors: 'Benayad A.; Malasse O.; Belhadaoui H.; Benayad N.',
    year: 2022,
    type: 'conference',
    venue: 'Healthcare (Switzerland)',
    team: 'dsis',
    doi: '10.3390/healthcare10102102'
  },
  {
    id: '1007-978-981-15-6048-4-37',
    title: 'A Conceptual Model for Dynamic Access Control in Hadoop Ecosystem',
    authors: 'Ait idar H.; Belhadaoui H.; Filali R.',
    year: 2021,
    type: 'conference',
    venue: 'Advances in Intelligent Systems and Computing',
    team: 'dsis',
    doi: '10.1007/978-981-15-6048-4_37'
  },
  {
    id: '1109-globecom46510-2021-9685308',
    title: 'A Personalized Learning Scheme for Internet of Vehicles Caching',
    authors: 'Oualil S.; Oucheikh R.; El Kamili M.; Berrada I.',
    year: 2021,
    type: 'conference',
    venue: 'Proceedings - IEEE Global Communications Conference, GLOBECOM',
    team: 'gedis',
    doi: '10.1109/GLOBECOM46510.2021.9685308'
  },
  {
    id: '1007-s10668-020-00999-1',
    title: 'A decisional smart approach for the adoption of the IT green',
    authors: 'Chakir A.; Chergui M.; Andry J.F.',
    year: 2021,
    type: 'conference',
    venue: 'Environment, Development and Sustainability',
    team: 'gedis',
    doi: '10.1007/s10668-020-00999-1'
  },
  {
    id: '1016-j-apenergy-2021-116644',
    title: 'A multiphysics model of large-scale compact PV–CSP hybrid plants',
    authors: 'Ziyati D.; Dollet A.; Flamant G.; Volut Y.; Guillot E.; Vossier A.',
    year: 2021,
    type: 'conference',
    venue: 'Applied Energy',
    team: 'bdios',
    doi: '10.1016/j.apenergy.2021.116644'
  },
  {
    id: '1109-iccworkshops50388-2021-9473809',
    title: 'Benchmarking Classical and AI-based Caching Strategies in Internet of Vehicles',
    authors: 'Oualil S.; Oucheikh R.; El Kamili M.; Berrada I.',
    year: 2021,
    type: 'conference',
    venue: '2021 IEEE International Conference on Communications Workshops, ICC Workshops 2021 - Proceedings',
    team: 'gedis',
    doi: '10.1109/ICCWorkshops50388.2021.9473809'
  },
  {
    id: '1109-pvsc43889-2021-9518718',
    title: 'Compact PV-CSP: Extending solar power production beyond daylight',
    authors: 'D. Ziyati',
    year: 2021,
    type: 'conference',
    venue: '2021 IEEE 48th Photovoltaic Specialists Conference (PVSC)',
    team: 'bdios',
    doi: '10.1109/PVSC43889.2021.9518718'
  },
  {
    id: 't-ensemble-learning-based-featur-2021',
    title: 'Ensemble learning based feature reduction and selection methods for network intrusion detection system',
    authors: 'Tamy S.; Belhadaoui H.; Rabbah N.; Rifi M.',
    year: 2021,
    type: 'journal',
    venue: 'Journal of Theoretical and Applied Information Technology',
    team: 'dsis'
  },
  {
    id: '17420-ap3702-347',
    title: 'Epidemiological profile and fertility assessment of hydatid cysts surgically removed from patients in Djelfa province, Algeria',
    authors: 'Laatamna A.; Bouragba M.; Reghaissia N.; Benhadj N.; Mahdjoub I.; Harfouche K.; Bouragba N.',
    year: 2021,
    type: 'conference',
    venue: 'Annals of parasitology',
    team: 'bdios',
    doi: '10.17420/ap3702.347'
  },
  {
    id: '1007-s00607-021-00940-y',
    title: 'Fast-MICDTN: a new decentralized control mechanism for content-centric disruption tolerant networks',
    authors: 'El Ouadrhiri A.; Nissar B.; El Kamili M.; Rahmouni I.',
    year: 2021,
    type: 'conference',
    venue: 'Computing',
    team: 'gedis',
    doi: '10.1007/s00607-021-00940-y'
  },
  {
    id: '14569-ijacsa-2021-0121131',
    title: 'Real Time Distributed and Decentralized Peer-to-Peer Protocol for Swarm Robots',
    authors: 'Rabbah M.A.; Rabbah N.; Belhadaoui H.; Rifi M.',
    year: 2021,
    type: 'journal',
    venue: 'International Journal of Advanced Computer Science and Applications',
    team: 'dsis',
    doi: '10.14569/IJACSA.2021.0121131'
  },
  {
    id: '1007-978-3-030-66840-2-18',
    title: 'Smart Pedagogical Knowledge Management Model for Higher Education',
    authors: 'Chergui M.; Chakir A.; Mansouri H.; Sayouti A.',
    year: 2021,
    type: 'conference',
    venue: 'Lecture Notes in Networks and Systems',
    team: 'gedis',
    doi: '10.1007/978-3-030-66840-2_18'
  },
  {
    id: '1145-3454127-3456591',
    title: 'Study of the use of gamification elements in e-learning applications',
    authors: 'Zecri E.; Ouzzif M.; El El Haddioui I.',
    year: 2021,
    type: 'conference',
    venue: 'ACM International Conference Proceeding Series',
    team: 'gedis',
    doi: '10.1145/3454127.3456591'
  },
  {
    id: '1504-ijipt-2021-118961',
    title: 'The quality factor for detecting node isolation attack in mobile ad hoc networks using OLSR protocol',
    authors: 'Nabou A.; Laanaoui M.D.; Ouzzif M.',
    year: 2021,
    type: 'journal',
    venue: 'International Journal of Internet Protocol Technology',
    team: 'gedis',
    doi: '10.1504/IJIPT.2021.118961'
  },
  {
    id: '1109-tst52996-2021-00010',
    title: 'Virtual and Augmented Reality in school context: A literature review',
    authors: 'Brij Y.; Belhadaoui H.',
    year: 2021,
    type: 'conference',
    venue: '2021 3rd International Conference on Transportation and Smart Technologies, TST 2021',
    team: 'dsis',
    doi: '10.1109/TST52996.2021.00010'
  },
  {
    id: '1051-e3sconf-202129701027',
    title: 'Virtual and Augmented Reality in school context: A literature review',
    authors: 'Brij Y.; Belhadaoui H.',
    year: 2021,
    type: 'conference',
    venue: 'E3S Web of Conferences',
    team: 'dsis',
    doi: '10.1051/e3sconf/202129701027'
  },
  {
    id: 't-a-mathematical-model-to-calcul-2020',
    title: 'A Mathematical Model to Calculate Data Sensitivity in Hadoop Platform Using the Analytic Hierarchy Process Method',
    authors: 'idar H.A.; Belhadaoui H.; Filali R.',
    year: 2020,
    type: 'journal',
    venue: 'IAENG International Journal of Computer Science',
    team: 'dsis'
  },
  {
    id: '4103-jmss-jmss-61-18',
    title: 'A hybrid method for the diagnosis and classifying Parkinson\'s patients based on time-frequency domain properties and K-nearest neighbor',
    authors: 'Soumaya Z.; Taoufiq B.; Benayad N.; Achraf B.; Ammoumou A.',
    year: 2020,
    type: 'journal',
    venue: 'Journal of Medical Signals and Sensors',
    doi: '10.4103/jmss.JMSS_61_18'
  },
  {
    id: '1109-wincom50532-2020-9272459',
    title: 'A new approach for increasing K-nearest neighbors performance',
    authors: 'Aamer Y.; Benkaouz Y.; Ouzzif M.; Bouragba K.',
    year: 2020,
    type: 'conference',
    venue: 'Proceedings - 2020 International Conference on Wireless Networks and Mobile Communications, WINCOM 2020',
    team: 'gedis',
    doi: '10.1109/WINCOM50532.2020.9272459'
  },
  {
    id: '1145-3386723-3387890',
    title: 'Adaptive E-learning: Adaptation of Content According to the Continuous Evolution of the Learner during his Training',
    authors: 'Zaoudi M.; Belhadaoui H.',
    year: 2020,
    type: 'conference',
    venue: 'ACM International Conference Proceeding Series',
    team: 'dsis',
    doi: '10.1145/3386723.3387890'
  },
  {
    id: '1007-978-3-030-36653-7-7',
    title: 'Addressing Stemming Algorithm for Arabic Text Using Spark Over Hadoop',
    authors: 'Bougar M.; Ziyati E.H.',
    year: 2020,
    type: 'conference',
    venue: 'Advances in Intelligent Systems and Computing',
    team: 'bdios',
    doi: '10.1007/978-3-030-36653-7_7'
  },
  {
    id: '5373-jardcs-v12sp7-20202243',
    title: 'Big data with distributed architecture using genetic algorithm in intelligent transport systems',
    authors: 'Mouammine Z.; Ammoumou A.; Bourekkadi S.; Ennima S.; Nsiri B.',
    year: 2020,
    type: 'journal',
    venue: 'Journal of Advanced Research in Dynamical and Control Systems',
    doi: '10.5373/JARDCS/V12SP7/20202243'
  },
  {
    id: 't-cyber-security-based-machine-l-2020',
    title: 'Cyber security based machine learning algorithms applied to industry 4.0 application case: Development of network intrusion detection system using hybrid method',
    authors: 'Tamy S.; Belhadaoui H.; Rabbah N.; Rifi M.',
    year: 2020,
    type: 'journal',
    venue: 'Journal of Theoretical and Applied Information Technology',
    team: 'dsis'
  },
  {
    id: '25088-complexsystems-29-3-729',
    title: 'Daubechies wavelet cepstral coefficients for parkinson’s disease detection',
    authors: 'Zayrit S.; Belhoussine Drissi T.; Ammoumou A.; Nsiri B.',
    year: 2020,
    type: 'conference',
    venue: 'Complex Systems',
    doi: '10.25088/ComplexSystems.29.3.729'
  },
  {
    id: '1007-978-3-030-32523-7-60',
    title: 'Effect of Traffic Generator and Density on the Performance of Protocols in Mobile Wireless Networks',
    authors: 'Kada A.; Echoukairi H.; Bouragba K.; Ouzzif M.',
    year: 2020,
    type: 'conference',
    venue: 'Advances in Intelligent Systems and Computing',
    team: 'gedis',
    doi: '10.1007/978-3-030-32523-7_60'
  },
  {
    id: '18178-ijesd-2020-11-7-1275',
    title: 'Empirical approach for modeling of partition coefficient on lead concentrations in riverine sediment',
    authors: 'Bouragba S.; Komai K.; Nakayama K.',
    year: 2020,
    type: 'journal',
    venue: 'International Journal of Environmental Science and Development',
    team: 'bdios',
    doi: '10.18178/IJESD.2020.11.7.1275'
  },
  {
    id: '14202-vetworld-2020-1635-1640',
    title: 'Gastrointestinal parasites of dromedary camel (Camelus dromedarius) in Algeria',
    authors: 'Bouragba M.; Laatamna A.; Cheddad F.E.; Baroudi D.; Houali K.; Hakem A.',
    year: 2020,
    type: 'conference',
    venue: 'Veterinary World',
    team: 'bdios',
    doi: '10.14202/vetworld.2020.1635-1640'
  },
  {
    id: 't-innovative-architecture-based--2020',
    title: 'INNOVATIVE ARCHITECTURE BASED on BIG DATA and GENETIC ALGORITHM for TRANSPORT LOGISTICS OPTIMIZATION.',
    authors: 'Mouammine Z.; Ammoumou A.; Nsiri B.; Bourekkadi S.',
    year: 2020,
    type: 'journal',
    venue: 'Journal of Theoretical and Applied Information Technology'
  },
  {
    id: '25046-aj050629',
    title: 'IT GRC smart adviser: Process driven architecture applying an integrated framework',
    authors: 'Chergui M.; Chakir A.',
    year: 2020,
    type: 'conference',
    venue: 'Advances in Science, Technology and Engineering Systems',
    team: 'gedis',
    doi: '10.25046/aj050629'
  },
  {
    id: '25103-jestr-135-09',
    title: 'IT Governance Knowledge: From Repositories to Artificial Intelligence Solutions',
    authors: 'Chergui M.; Chakir A.',
    year: 2020,
    type: 'journal',
    venue: 'Journal of Engineering Science and Technology Review',
    team: 'gedis',
    doi: '10.25103/jestr.135.09'
  },
  {
    id: '1007-978-3-030-37629-1-76',
    title: 'Improving Recommendations Using Traceability and Machine Learning',
    authors: 'Souali K.; Rahmaoui O.; Ouzzif M.',
    year: 2020,
    type: 'conference',
    venue: 'Lecture Notes in Intelligent Transportation and Infrastructure',
    team: 'gedis',
    doi: '10.1007/978-3-030-37629-1_76'
  },
  {
    id: '1007-978-3-030-58008-7-15',
    title: 'Initial centroid selection method for an enhanced k-means clustering algorithm',
    authors: 'Aamer Y.; Benkaouz Y.; Ouzzif M.; Bouragba K.',
    year: 2020,
    type: 'conference',
    venue: 'Lecture Notes in Computer Science (including subseries Lecture Notes in Artificial Intelligence and Lecture Notes in Bioinformatics)',
    team: 'gedis',
    doi: '10.1007/978-3-030-58008-7_15'
  },
  {
    id: '1109-wincom50532-2020-9272505',
    title: 'New method of compensation the out-of-focus defect introduced by the optical system of a micro-camera',
    authors: 'Ghennioui H.; El Kamili M.',
    year: 2020,
    type: 'conference',
    venue: 'Proceedings - 2020 International Conference on Wireless Networks and Mobile Communications, WINCOM 2020',
    team: 'gedis',
    doi: '10.1109/WINCOM50532.2020.9272505'
  },
  {
    id: '1145-3386723-3387836',
    title: 'Normality Test to Detect the Congestion in MANET by Using OLSR Protocol',
    authors: 'Nabou A.; Laanaoui M.D.; Ouzzif M.; El Houssaini M.-A.',
    year: 2020,
    type: 'conference',
    venue: 'ACM International Conference Proceeding Series',
    team: 'gedis',
    doi: '10.1145/3386723.3387836'
  },
  {
    id: '1145-3419604-3419605',
    title: 'OMT design based on Boifot Orthomode junctions for satellite communication applications in the Ku Band',
    authors: 'El Kamili A.; Tribak A.; Terhzaz J.; Mediavilla A.',
    year: 2020,
    type: 'conference',
    venue: 'ACM International Conference Proceeding Series',
    team: 'gedis',
    doi: '10.1145/3419604.3419605'
  },
  {
    id: '1007-978-3-030-37629-1-72',
    title: 'Recommendation Enhancement Using Traceability and Machine Learning: A Review',
    authors: 'Souali K.; Rahmaoui O.; Ouzzif M.',
    year: 2020,
    type: 'conference',
    venue: 'Lecture Notes in Intelligent Transportation and Infrastructure',
    team: 'gedis',
    doi: '10.1007/978-3-030-37629-1_72'
  },
  {
    id: 't-the-machine-learning-in-projec-2020',
    title: 'The machine learning in project management: A systematic mapping study',
    authors: 'Chennouk H.; El Bhiri B.; Bara S.; Ziyati E.H.',
    year: 2020,
    type: 'journal',
    venue: 'Journal of Theoretical and Applied Information Technology',
    team: 'bdios'
  },
  {
    id: '1007-978-3-030-36674-2-48',
    title: 'Towards a Recommended Documentation System Using Data Traceability and Machine Learning in a Big Data Environment',
    authors: 'Rahmaoui O.; Souali K.; Ouzzif M.',
    year: 2020,
    type: 'conference',
    venue: 'Advances in Intelligent Systems and Computing',
    team: 'gedis',
    doi: '10.1007/978-3-030-36674-2_48'
  },
  {
    id: '3991-ijep-v10i3-12421',
    title: 'Towards a new educational engineering model for moroccan university based on ICT',
    authors: 'Chergui M.; Chakir A.; Tahiri A.; Mansouri H.',
    year: 2020,
    type: 'journal',
    venue: 'International Journal of Engineering Pedagogy',
    team: 'gedis',
    doi: '10.3991/IJEP.V10I3.12421'
  },
  {
    id: '1007-978-3-030-37629-1-81',
    title: 'Well-Being Observing Framework in Smart Home',
    authors: 'Ainane N.; Ouzzif M.; Bouragba K.',
    year: 2020,
    type: 'conference',
    venue: 'Lecture Notes in Intelligent Transportation and Infrastructure',
    team: 'gedis',
    doi: '10.1007/978-3-030-37629-1_81'
  },
  {
    id: '1109-syscobiots48768-2019-9028027',
    title: 'A New Model of Automatic and Continuous Online Exam Monitoring',
    authors: 'M. Ghizlane; B. Hicham; F. H. Reda',
    year: 2019,
    type: 'conference',
    venue: '2019 International Conference on Systems of Collaboration Big Data, Internet of Things & Security (SysCoBIoTS)',
    team: 'dsis',
    doi: '10.1109/SysCoBIoTS48768.2019.9028027'
  },
  {
    id: '1109-cmt-2019-8931404',
    title: 'A Vision for Discontinuous Link Networking for Underserved Areas',
    authors: 'Youssef L.; Maizate A.; Mahmoudi C.F.; Ziyati E.H.',
    year: 2019,
    type: 'conference',
    venue: '7th Mediterranean Congress of Telecommunications 2019, CMT 2019',
    team: 'bdios',
    doi: '10.1109/CMT.2019.8931404'
  },
  {
    id: '6084-ijact-v8i11-1038',
    title: 'A digital identity security model with smart card and public key infrastructure',
    authors: 'Moukhliss G.; Malasse O.; Hilali R.; Belhadaoui H.',
    year: 2019,
    type: 'conference',
    venue: 'Compusoft',
    team: 'dsis',
    doi: '10.6084/ijact.v8i11.1038'
  },
  {
    id: '1145-3368756-3369050',
    title: 'A review on improving recommendations using traceability',
    authors: 'Souali K.; Rahmaoui O.; Ouzzif M.',
    year: 2019,
    type: 'conference',
    venue: 'ACM International Conference Proceeding Series',
    team: 'gedis',
    doi: '10.1145/3368756.3369050'
  },
  {
    id: '1145-3320326-3320401',
    title: 'A smart card digital identity check model for university services access',
    authors: 'Moukhliss G.; Filali Hilali R.; Belhadaoui H.',
    year: 2019,
    type: 'conference',
    venue: 'ACM International Conference Proceeding Series',
    team: 'dsis',
    doi: '10.1145/3320326.3320401'
  },
  {
    id: '1109-cmt-2019-8931327',
    title: 'An Evaluation of Machine Learning Algorithms to Detect Attacks in Scada Network',
    authors: 'Tamy S.; Belhadaoui H.; Rabbah M.A.; Rabbah N.; Rifi M.',
    year: 2019,
    type: 'conference',
    venue: '7th Mediterranean Congress of Telecommunications 2019, CMT 2019',
    team: 'dsis',
    doi: '10.1109/CMT.2019.8931327'
  },
  {
    id: '1007-978-3-030-11928-7-42',
    title: 'An efficient model of text categorization based on feature selection and random forests: Case for business documents',
    authors: 'Lagrari F.-E.; Ziyati H.; Kettani Y.E.',
    year: 2019,
    type: 'conference',
    venue: 'Advances in Intelligent Systems and Computing',
    team: 'bdios',
    doi: '10.1007/978-3-030-11928-7_42'
  },
  {
    id: '1109-iwcmc-2019-8766570',
    title: 'An evolutionary game-theoretic approach for cache-enabled cognitive D2D networks',
    authors: 'Nissar B.; El Ouadrhiri A.; El Kamili M.',
    year: 2019,
    type: 'conference',
    venue: '2019 15th International Wireless Communications and Mobile Computing Conference, IWCMC 2019',
    team: 'gedis',
    doi: '10.1109/IWCMC.2019.8766570'
  },
  {
    id: '2166-wst-2019-250',
    title: 'Assessment of distributed hydrological model performance for simulation of multi-heavy-metal transport in Harrach River, Algeria',
    authors: 'Bouragba S.; Komai K.; Nakayama K.',
    year: 2019,
    type: 'conference',
    venue: 'Water Science and Technology',
    team: 'bdios',
    doi: '10.2166/wst.2019.250'
  },
  {
    id: '1109-icssd47982-2019-9002676',
    title: 'Big Data Dependability Opportunities & Challenges',
    authors: 'M. Fatima Ezzahra; A. Nadia; H. Imane',
    year: 2019,
    type: 'conference',
    venue: '2019 1st International Conference on Smart Systems and Data Science (ICSSD)',
    team: 'dsis',
    doi: '10.1109/ICSSD47982.2019.9002676'
  },
  {
    id: '1109-icssd47982-2019-9002673',
    title: 'Black SDN for WSN',
    authors: 'El Yazidi A.; El Kamili M.; Hasnaoui M.L.',
    year: 2019,
    type: 'conference',
    venue: 'ICSSD 2019 - International Conference on Smart Systems and Data Science',
    team: 'gedis',
    doi: '10.1109/ICSSD47982.2019.9002673'
  },
  {
    id: '1109-icds47004-2019-8942259',
    title: 'Conferencing-Ng Protocol For Internet Of Things',
    authors: 'Saadaoui F.Z.; Mahmoudi C.; Maizate A.; Ouzzif M.',
    year: 2019,
    type: 'conference',
    venue: '2019 3rd International Conference on Intelligent Computing in Data Sciences, ICDS 2019',
    team: 'gedis',
    doi: '10.1109/ICDS47004.2019.8942259'
  },
  {
    id: '1109-wcnc-2019-8886019',
    title: 'Crowd Management Services in Hajj: A Mean-Field Game Theory Approach',
    authors: 'N. Nasser; A. el Ouadrhiri; M. el Kamili; A. Ali; M. Anan',
    year: 2019,
    type: 'conference',
    venue: '2019 IEEE Wireless Communications and Networking Conference (WCNC)',
    team: 'gedis',
    doi: '10.1109/WCNC.2019.8886019'
  },
  {
    id: '1007-978-3-030-11196-0-58',
    title: 'Data Security of Smart Cities',
    authors: 'Ainane N.; Ouzzif M.; Bouragba K.',
    year: 2019,
    type: 'conference',
    venue: 'Lecture Notes in Intelligent Transportation and Infrastructure',
    team: 'gedis',
    doi: '10.1007/978-3-030-11196-0_58'
  },
  {
    id: '1109-ithings-greencom-cpscom-smartdata-2019-00200',
    title: 'Deep learning in building management systems over ndn: Use case of forwarding and hvac control',
    authors: 'Ayadi M.I.; Maizate A.; Ouzzif M.; Mahmoudi C.',
    year: 2019,
    type: 'conference',
    venue: 'Proceedings - 2019 IEEE International Congress on Cybermatics: 12th IEEE International Conference on Internet of Things, 15th IEEE International Conference on Green Computing and Communications, 12th IEEE International Conference on Cyber, Physical and Social Computing and 5th IEEE International Conference on Smart Data, iThings/GreenCom/CPSCom/SmartData 2019',
    team: 'gedis',
    doi: '10.1109/iThings/GreenCom/CPSCom/SmartData.2019.00200'
  },
  {
    id: '1109-irec-2019-8754617',
    title: 'Design of Grid-Connected Converter Control using Fuzzy Logic for Wind Energy Conversion System',
    authors: 'L. BENAAOUINATE; M. KHAFALLAH; A. MESBAHI; D. VOYER; T. BOURAGBA',
    year: 2019,
    type: 'conference',
    venue: '2019 10th International Renewable Energy Congress (IREC)',
    team: 'bdios',
    doi: '10.1109/IREC.2019.8754617'
  },
  {
    id: '1007-978-3-319-91337-7-37',
    title: 'Designing Middleware over Real Time Operating System for Mobile Robot',
    authors: 'Rabbah M.A.; Rabbah N.; Belhadaoui H.; Rifi M.',
    year: 2019,
    type: 'conference',
    venue: 'Advances in Intelligent Systems and Computing',
    team: 'dsis',
    doi: '10.1007/978-3-319-91337-7_37'
  },
  {
    id: '1109-icocs-2019-8930802',
    title: 'Diagnosis of Parkinson disease using the wavelet transform and MFCC and SVM classifier',
    authors: 'Soumaya Z.; Taoufiq B.D.; Nsiri B.; Abdelkrim A.',
    year: 2019,
    type: 'conference',
    venue: 'Proceedings of 2019 IEEE World Conference on Complex Systems, WCCS 2019',
    doi: '10.1109/ICoCS.2019.8930802'
  },
  {
    id: '1109-syscobiots48768-2019-9028009',
    title: 'Foreword',
    authors: 'Afifi N.; Bouragba K.; El Kamili M.; Hanaoui M.; Ouzzif M.',
    year: 2019,
    type: 'conference',
    venue: 'Proceedings - 2019 4th International Conference on Systems of Collaboration, Big Data, Internet of Things and Security, SysCoBIoTS 2019',
    team: 'bdios',
    doi: '10.1109/SysCoBIoTS48768.2019.9028009'
  },
  {
    id: '1145-3368756-3369102',
    title: 'Health monitoring system in a smart home',
    authors: 'Ainane N.; Ouzzif M.; Bouragba K.',
    year: 2019,
    type: 'conference',
    venue: 'ACM International Conference Proceeding Series',
    team: 'gedis',
    doi: '10.1145/3368756.3369102'
  },
  {
    id: '1007-978-3-319-91337-7-33',
    title: 'Implementation of an Hierarchical Hybrid Intrusion Detection Mechanism in Wireless Sensor Network Based on Energy Management',
    authors: 'Moulad L.; Belhadaoui H.; Rifi M.',
    year: 2019,
    type: 'conference',
    venue: 'Advances in Intelligent Systems and Computing',
    team: 'dsis',
    doi: '10.1007/978-3-319-91337-7_33'
  },
  {
    id: '1007-978-3-030-11928-7-31',
    title: 'Introducing a traceability based recommendation approach using chatbot for e-learning platforms',
    authors: 'Souali K.; Rahmaoui O.; Ouzzif M.',
    year: 2019,
    type: 'conference',
    venue: 'Advances in Intelligent Systems and Computing',
    team: 'gedis',
    doi: '10.1007/978-3-030-11928-7_31'
  },
  {
    id: '1109-wincom47513-2019-8942490',
    title: 'New PAPR reduction technique combining the Tone Reservation based on PCG algorithm with Clipping',
    authors: 'Abdelali H.; Ghennioui H.; El Kamili M.; Firdaoussi M.',
    year: 2019,
    type: 'conference',
    venue: 'Proceedings - 2019 International Conference on Wireless Networks and Mobile Communications, WINCOM 2019',
    team: 'gedis',
    doi: '10.1109/WINCOM47513.2019.8942490'
  },
  {
    id: '12720-jcm-14-9-758-764',
    title: 'Optimal routing and clustering technique for wireless sensor networks',
    authors: 'Rais A.; Bouragba K.; Ouzzif M.',
    year: 2019,
    type: 'journal',
    venue: 'Journal of Communications',
    team: 'gedis',
    doi: '10.12720/jcm.14.9.758-764'
  },
  {
    id: '1109-wincom47513-2019-8942531',
    title: 'Predicting driver lane change maneuvers using driver’s face',
    authors: 'Moussaid A.; Berrada I.; EL Kamili M.; Fardousse K.',
    year: 2019,
    type: 'conference',
    venue: 'Proceedings - 2019 International Conference on Wireless Networks and Mobile Communications, WINCOM 2019',
    team: 'gedis',
    doi: '10.1109/WINCOM47513.2019.8942531'
  },
  {
    id: '1109-sitis-2019-00110',
    title: 'Recommending moodle resources using chatbots',
    authors: 'Souali K.; Rahmaoui O.; Ouzzif M.; El Haddioui I.',
    year: 2019,
    type: 'conference',
    venue: 'Proceedings - 15th International Conference on Signal Image Technology and Internet Based Systems, SISITS 2019',
    team: 'gedis',
    doi: '10.1109/SITIS.2019.00110'
  },
  {
    id: '1155-2019-4861294',
    title: 'Routing and clustering of sensor nodes in the honeycomb architecture',
    authors: 'Rais A.; Bouragba K.; Ouzzif M.',
    year: 2019,
    type: 'journal',
    venue: 'Journal of Computer Networks and Communications',
    team: 'gedis',
    doi: '10.1155/2019/4861294'
  },
  {
    id: '1109-worlds4-2019-8903997',
    title: 'Smart IT governance, risk and compliance semantic model: Business Driven architecture',
    authors: 'Chergui M.; Chakir A.; Medromi H.',
    year: 2019,
    type: 'conference',
    venue: 'Proceedings of the 3rd World Conference on Smart Trends in Systems, Security and Sustainability, WorldS4 2019',
    team: 'gedis',
    doi: '10.1109/WorldS4.2019.8903997'
  },
  {
    id: '1109-icocs-2019-8930734',
    title: 'Stability of singular system with two additive time varying delays via neutral system approach',
    authors: 'Kawtar E.H.; Noreddine C.; Abdelkirim A.',
    year: 2019,
    type: 'conference',
    venue: 'Proceedings of 2019 IEEE World Conference on Complex Systems, WCCS 2019',
    doi: '10.1109/ICoCS.2019.8930734'
  },
  {
    id: '1007-978-981-13-1165-9-23',
    title: 'Stemming algorithm for arabic text using a parallel data processing',
    authors: 'Bougar M.; Ziyati E.H.',
    year: 2019,
    type: 'conference',
    venue: 'Advances in Intelligent Systems and Computing',
    team: 'bdios',
    doi: '10.1007/978-981-13-1165-9_23'
  },
  {
    id: '1007-978-3-030-11928-7-24',
    title: 'The effect of transmit power on MANET routing protocols using AODV, DSDV, DSR and OLSR in NS3',
    authors: 'Nabou A.; Laanaoui M.D.; Ouzzif M.',
    year: 2019,
    type: 'conference',
    venue: 'Advances in Intelligent Systems and Computing',
    team: 'gedis',
    doi: '10.1007/978-3-030-11928-7_24'
  },
  {
    id: '1109-syscobiots48768-2019-9028039',
    title: 'Towards a New Reward and Punishment Approach for Blockchain-based System',
    authors: 'Ouaguid A.; Abghour N.; Ouzzif M.',
    year: 2019,
    type: 'conference',
    venue: 'Proceedings - 2019 4th International Conference on Systems of Collaboration, Big Data, Internet of Things and Security, SysCoBIoTS 2019',
    team: 'gedis',
    doi: '10.1109/SysCoBIoTS48768.2019.9028039'
  },
  {
    id: '1007-978-3-030-11928-7-46',
    title: 'Towards an improvement of the software documentation using a traceability approach',
    authors: 'Rahmaoui O.; Souali K.; Ouzzif M.',
    year: 2019,
    type: 'conference',
    venue: 'Advances in Intelligent Systems and Computing',
    team: 'gedis',
    doi: '10.1007/978-3-030-11928-7_46'
  },
  {
    id: '1109-globecom38437-2019-9013938',
    title: 'UAV-based ubiquitous network access: A game theoretic analysis',
    authors: 'Garmani H.; Ait Omar D.; Baslam M.; El Kamili M.',
    year: 2019,
    type: 'conference',
    venue: 'Proceedings - IEEE Global Communications Conference, GLOBECOM',
    team: 'gedis',
    doi: '10.1109/GLOBECOM38437.2019.9013938'
  },
  {
    id: '1109-icmcs-2018-8525978',
    title: 'A Security Policy for Access Control to Academic Services Based on Public Key Infrastructures and Smart Cards',
    authors: 'M. Ghizlane; F. H. Reda; B. Hicham',
    year: 2018,
    type: 'conference',
    venue: '2018 6th International Conference on Multimedia Computing and Systems (ICMCS)',
    team: 'dsis',
    doi: '10.1109/ICMCS.2018.8525978'
  },
  {
    id: '1109-sai-2017-8252252',
    title: 'A novel centralized clustering approach based on K-means algorithm for wireless sensor network',
    authors: 'Echoukairi H.; Kada A.; Bouragba K.; Ouzzif M.',
    year: 2018,
    type: 'conference',
    venue: 'Proceedings of Computing Conference 2017',
    team: 'gedis',
    doi: '10.1109/SAI.2017.8252252'
  },
  {
    id: '1109-irsec-2018-8703032',
    title: 'An Improved Approach of Control for a Battery Charger Based Forward Converter and SEPIC',
    authors: 'A. Hassoune; M. Khafallah; A. Mesbahi; T. Bouragba',
    year: 2018,
    type: 'conference',
    venue: '2018 6th International Renewable and Sustainable Energy Conference (IRSEC)',
    team: 'bdios',
    doi: '10.1109/IRSEC.2018.8703032'
  },
  {
    id: '1109-isacv-2018-8354032',
    title: 'An hybrid approach to improve part of speech tagging system',
    authors: 'Farrah S.; El Manssouri H.; Ziyati E.H.; Ouzzif M.',
    year: 2018,
    type: 'conference',
    venue: '2018 International Conference on Intelligent Systems and Computer Vision, ISCV 2018',
    team: 'bdios',
    doi: '10.1109/ISACV.2018.8354032'
  },
  {
    id: '1145-3286606-3286866',
    title: 'Data security of smart cities',
    authors: 'Ainane N.; Ouzzif M.; Bouragba K.',
    year: 2018,
    type: 'conference',
    venue: 'ACM International Conference Proceeding Series',
    team: 'gedis',
    doi: '10.1145/3286606.3286866'
  },
  {
    id: '1109-mownet-2018-8428938',
    title: 'Deep learning for packet forwarding with an application for real time IoT',
    authors: 'Ayadi M.I.; Saadaoui F.Z.; Maizatc A.; Ouzzif M.; Mahmoudi C.',
    year: 2018,
    type: 'conference',
    venue: '2018 International Conference on Selected Topics in Mobile and Wireless Networking, MoWNeT 2018',
    team: 'gedis',
    doi: '10.1109/MoWNet.2018.8428938'
  },
  {
    id: '1109-cist-2018-8596381',
    title: 'Dynamic Data Sensitivity Access Control in Hadoop Platform',
    authors: 'Idar H.A.; Aissaoui K.; Belhadaoui H.; Hilali R.F.',
    year: 2018,
    type: 'conference',
    venue: 'Colloquium in Information Science and Technology, CIST',
    team: 'dsis',
    doi: '10.1109/CIST.2018.8596381'
  },
  {
    id: '1109-isacv-2018-8354075',
    title: 'Efficient spark-based framework for solving the traveling salesman problem using a distributed swarm intelligence method',
    authors: 'Y. Karouani; Z. Elhoussaine',
    year: 2018,
    type: 'conference',
    venue: '2018 International Conference on Intelligent Systems and Computer Vision (ISCV)',
    team: 'bdios',
    doi: '10.1109/ISACV.2018.8354075'
  },
  {
    id: '1109-wincom-2018-8629603',
    title: 'Evaluation of MANET Routing Protocols under Black Hole Attack Using AODV and OLSR in NS3',
    authors: 'Nabou A.; Laanaoui M.D.; Ouzzif M.',
    year: 2018,
    type: 'conference',
    venue: 'Proceedings - 2018 International Conference on Wireless Networks and Mobile Communications, WINCOM 2018',
    team: 'gedis',
    doi: '10.1109/WINCOM.2018.8629603'
  },
  {
    id: '1109-isivc-2018-8709189',
    title: 'Fast outlier detection method based on Rough set',
    authors: 'Marouane E.M.; Houssaine Z.',
    year: 2018,
    type: 'conference',
    venue: '9th International Symposium on Signal, Image, Video and Communications, ISIVC 2018 - Proceedings',
    team: 'bdios',
    doi: '10.1109/ISIVC.2018.8709189'
  },
  {
    id: '1145-3264560-3264572',
    title: 'From big data to better behavior in self-driving cars',
    authors: 'Fathi F.; Abghour N.; Ouzzif M.',
    year: 2018,
    type: 'conference',
    venue: 'ACM International Conference Proceeding Series',
    team: 'gedis',
    doi: '10.1145/3264560.3264572'
  },
  {
    id: '5220-0009776500110015',
    title: 'Predictive analytics in healthcare system using deep learning approach',
    authors: 'Lahlali S.; Ammoumou A.',
    year: 2018,
    type: 'conference',
    venue: 'Proceedings of the 1st International Conference of Computer Science and Renewable Energies, ICCSRE 2018',
    doi: '10.5220/0009776500110015'
  },
  {
    id: '1504-ijscc-2017-081537',
    title: 'A near-optimal green control for probabilistic routing protocols in delay-tolerant networks',
    authors: 'El Ouadrhiri A.; El Kamili M.; Rahmouni I.; Berrada I.',
    year: 2017,
    type: 'journal',
    venue: 'International Journal of Systems, Control and Communications',
    team: 'gedis',
    doi: '10.1504/IJSCC.2017.081537'
  },
  {
    id: '1007-978-981-10-1627-1-22',
    title: 'A new approach for modeling strategic IT governance workflow',
    authors: 'Chergui M.; Chakir A.; Medromi H.; Radoui M.',
    year: 2017,
    type: 'conference',
    venue: 'Lecture Notes in Electrical Engineering',
    team: 'gedis',
    doi: '10.1007/978-981-10-1627-1_22'
  },
  {
    id: '1109-sysco-2016-7831329',
    title: 'A new architecture for traffic congestion using smartphone and wireless sensor networks',
    authors: 'Aouami R.; Ouzzif M.; Rifi M.',
    year: 2017,
    type: 'conference',
    venue: 'Proceedings - 2016 3rd International Conference on Systems of Collaboration, SysCo 2016',
    team: 'gedis',
    doi: '10.1109/SYSCO.2016.7831329'
  },
  {
    id: '1109-sysco-2016-7831342',
    title: 'An approach for meteorological data integration and stream processing',
    authors: 'Hdafa M.; Zouhairi Y.; Lemoudden M.; Ziyati E.',
    year: 2017,
    type: 'conference',
    venue: 'Proceedings - 2016 3rd International Conference on Systems of Collaboration, SysCo 2016',
    team: 'bdios',
    doi: '10.1109/SYSCO.2016.7831342'
  },
  {
    id: '25046-aj020345',
    title: 'An overview of traceability: Towards a general multi-domain model',
    authors: 'Souali K.; Rahmaoui O.; Ouzzif M.',
    year: 2017,
    type: 'conference',
    venue: 'Advances in Science, Technology and Engineering Systems',
    team: 'gedis',
    doi: '10.25046/aj020345'
  },
  {
    id: '1007-978-3-319-68179-5-7',
    title: 'Community detection through topic modeling in social networks',
    authors: 'Tamimi I.; Lamrani E.K.; Kamili M.E.',
    year: 2017,
    type: 'conference',
    venue: 'Lecture Notes in Computer Science (including subseries Lecture Notes in Artificial Intelligence and Lecture Notes in Bioinformatics)',
    team: 'gedis',
    doi: '10.1007/978-3-319-68179-5_7'
  },
  {
    id: '1109-atsip-2017-8075540',
    title: 'Design and simulation of a multiband orthomodetransducer in k/Ka band for satellite communications',
    authors: 'Kamili A.E.; Tribak A.; Terhzaz J.; Mediavilla A.',
    year: 2017,
    type: 'conference',
    venue: 'Proceedings - 3rd International Conference on Advanced Technologies for Signal and Image Processing, ATSIP 2017',
    team: 'gedis',
    doi: '10.1109/ATSIP.2017.8075540'
  },
  {
    id: 't-effect-of-mobility-models-on-p-2017',
    title: 'Effect of mobility models on performance of novel centralized clustering approach based on K-means for wireless sensor networks',
    authors: 'Echoukairi H.; Kada A.; Bouragba K.; Ouzzif M.',
    year: 2017,
    type: 'journal',
    venue: 'International Journal of Applied Engineering Research',
    team: 'bdios'
  },
  {
    id: '1145-3141128-3141143',
    title: 'From Big data platforms to smarter solution, with intelligent learning: [PAV] 4 -Pave the way for Intelligence',
    authors: 'Fathi F.; Abghour N.; Ouzzif M.',
    year: 2017,
    type: 'conference',
    venue: 'ACM International Conference Proceeding Series',
    team: 'gedis',
    doi: '10.1145/3141128.3141143'
  },
  {
    id: '1109-iwcmc-2017-7986515',
    title: 'Messages propagation control in Delay Tolerant Networks under epidemic routing protocol',
    authors: 'A. El Ouadrhiri; M. El Kamili; I. Rahmouni',
    year: 2017,
    type: 'conference',
    venue: '2017 13th International Wireless Communications and Mobile Computing Conference (IWCMC)',
    team: 'gedis',
    doi: '10.1109/IWCMC.2017.7986515'
  },
  {
    id: '1109-sysco-2016-7831335',
    title: 'Modeling cooperation of inter-university e-leaming workflows with a multi-level virtual architecture',
    authors: 'El Messari S.; Bouragba K.',
    year: 2017,
    type: 'conference',
    venue: 'Proceedings - 2016 3rd International Conference on Systems of Collaboration, SysCo 2016',
    team: 'bdios',
    doi: '10.1109/SYSCO.2016.7831335'
  },
  {
    id: '1109-sysco-2016-7831326',
    title: 'New approach for securing communication over MQTT protocol A comparaison between RSA and Elliptic Curve',
    authors: 'Mektoubi A.; Hassani H.L.; Belhadaoui H.; Rifi M.; Zakari A.',
    year: 2017,
    type: 'conference',
    venue: 'Proceedings - 2016 3rd International Conference on Systems of Collaboration, SysCo 2016',
    team: 'dsis',
    doi: '10.1109/SYSCO.2016.7831326'
  },
  {
    id: '1109-wincom-2017-8238180',
    title: 'PAPR reduction using Tone Reservation method with Preconditioned Conjugate Gradient optimization algorithm',
    authors: 'Abdelali H.; Ghennioui H.; El Kamili M.',
    year: 2017,
    type: 'conference',
    venue: 'Proceedings - 2017 International Conference on Wireless Networks and Mobile Communications, WINCOM 2017',
    team: 'gedis',
    doi: '10.1109/WINCOM.2017.8238180'
  },
  {
    id: '1007-978-981-10-1627-1-14',
    title: 'Packet delay analysis in wireless sensor networks using fountain code enabled-DCF',
    authors: 'Aouami R.; Hanaoui M.; Rifi M.; Ouzzif M.',
    year: 2017,
    type: 'conference',
    venue: 'Lecture Notes in Electrical Engineering',
    team: 'gedis',
    doi: '10.1007/978-981-10-1627-1_14'
  },
  {
    id: '1109-wincom-2017-8238204',
    title: 'Predicting lane change maneuvers using inverse reinforcement learning',
    authors: 'A. Zouzou; A. Bouhoute; K. Boubouh; M. E. Kamili; I. Berrada',
    year: 2017,
    type: 'conference',
    venue: '2017 International Conference on Wireless Networks and Mobile Communications (WINCOM)',
    team: 'gedis',
    doi: '10.1109/WINCOM.2017.8238204'
  },
  {
    id: '1007-978-981-10-1627-1-25',
    title: 'Recognition of OFDM and SCLD signals based on second-order statistics',
    authors: 'Firdaoussi M.; Ghennioui H.; El-Kamili M.',
    year: 2017,
    type: 'conference',
    venue: 'Lecture Notes in Electrical Engineering',
    team: 'gedis',
    doi: '10.1007/978-981-10-1627-1_25'
  },
  {
    id: '1109-eitech-2017-8255314',
    title: 'Smart topology of EVs in a PV-grid system based charging station',
    authors: 'A. Hassoune; M. Khafallah; A. Mesbahi; T. Bouragba',
    year: 2017,
    type: 'conference',
    venue: '2017 International Conference on Electrical and Information Technologies (ICEIT)',
    team: 'bdios',
    doi: '10.1109/EITech.2017.8255314'
  },
  {
    id: '1109-sysco-2016-7831338',
    title: 'Supporting ITIL processes implementation using business process management systems',
    authors: 'Mahy Y.; Ouzzif M.; Bouragba K.',
    year: 2017,
    type: 'conference',
    venue: 'Proceedings - 2016 3rd International Conference on Systems of Collaboration, SysCo 2016',
    team: 'gedis',
    doi: '10.1109/SYSCO.2016.7831338'
  },
  {
    id: '1109-wits-2017-7934624',
    title: 'Survey on data remanence in Cloud Computing environment',
    authors: 'Aissaoui K.; Ait Idar H.; Belhadaoui H.; Rifi M.',
    year: 2017,
    type: 'conference',
    venue: '2017 International Conference on Wireless Technologies, Embedded and Intelligent Systems, WITS 2017',
    team: 'dsis',
    doi: '10.1109/WITS.2017.7934624'
  },
  {
    id: 'part-f129474',
    title: 'Towards an ontology of dependability automatic search approach with systematic mapping',
    authors: 'Zahir N.; Afifi N.; Hilal I.',
    year: 2017,
    type: 'conference',
    venue: 'ACM International Conference Proceeding Series',
    team: 'dsis',
    doi: 'Part F129474'
  },
  {
    id: '1007-978-981-10-1627-1-8',
    title: 'Towards the enhancement of QoS in 802.11e for ad hoc networks',
    authors: 'Lakrami F.; El-Kamili M.; Elkamoun N.',
    year: 2017,
    type: 'conference',
    venue: 'Lecture Notes in Electrical Engineering',
    team: 'gedis',
    doi: '10.1007/978-981-10-1627-1_8'
  },
  {
    id: 't-web-service-for-incremental-da-2017',
    title: 'Web service for incremental data warehouses fragmentation assisted with temporary materialized views',
    authors: 'Ettaoufik A.; Ouzzif M.',
    year: 2017,
    type: 'journal',
    venue: 'Journal of Theoretical and Applied Information Technology',
    team: 'gedis'
  },
  {
    id: '1109-wcnc-2014-6952895',
    title: 'A decentralized network selection algorithm for group vertical handover in heterogeneous networks',
    authors: 'Walid A.; El Kamili M.; Kobbane A.; Mabrouk A.; Sabir E.; El Koutbi M.',
    year: 2016,
    type: 'conference',
    venue: 'IEEE Wireless Communications and Networking Conference, WCNC',
    team: 'gedis',
    doi: '10.1109/WCNC.2014.6952895'
  },
  {
    id: '1007-978-981-287-990-5-40',
    title: 'A decision approach to select the best framework to treat an IT problem by using multi-agent system and expert systems',
    authors: 'Chakir A.; Chergui M.; Elhasnaou S.; Medromi H.; Sayouti A.',
    year: 2016,
    type: 'conference',
    venue: 'Lecture Notes in Electrical Engineering',
    team: 'gedis',
    doi: '10.1007/978-981-287-990-5_40'
  },
  {
    id: '1109-wmnc-2016-7543978',
    title: 'A hierarchical caching game for message relaying in delay tolerant networks',
    authors: 'Rahmouni I.; Ezzahidi S.A.; El Ouadrhiri A.; El Kamili M.; Sabir E.',
    year: 2016,
    type: 'conference',
    venue: '2016 9th IFIP Wireless and Mobile Networking Conference, WMNC 2016',
    team: 'gedis',
    doi: '10.1109/WMNC.2016.7543978'
  },
  {
    id: '1109-wcst-2016-7886603',
    title: 'A multi-criteria methodology to select the best wave energy sites',
    authors: 'A. Martinez; Z. B. Mustapha; R. Campbell; T. Bouragba',
    year: 2016,
    type: 'conference',
    venue: '2016 World Congress on Sustainable Technologies (WCST)',
    team: 'bdios',
    doi: '10.1109/WCST.2016.7886603'
  },
  {
    id: '1109-wcnc-2016-7565161',
    title: 'A non-cooperative file caching for delay tolerant networks: A reward-based incentive mechanism',
    authors: 'Ezzahidi S.A.; Sabir E.; El Kamili M.; Bouyakhf E.-H.',
    year: 2016,
    type: 'conference',
    venue: 'IEEE Wireless Communications and Networking Conference, WCNC',
    team: 'gedis',
    doi: '10.1109/WCNC.2016.7565161'
  },
  {
    id: '1007-978-981-287-990-5-25',
    title: 'A survey on flat routing protocols in wireless sensor networks',
    authors: 'Echoukairi H.; Bourgba K.; Ouzzif M.',
    year: 2016,
    type: 'conference',
    venue: 'Lecture Notes in Electrical Engineering',
    team: 'gedis',
    doi: '10.1007/978-981-287-990-5_25'
  },
  {
    id: '1504-ijcnds-2016-077667',
    title: 'An effective buffer management in delay tolerant networks based on a partially observed Markov decision process framework',
    authors: 'Rahmouni I.; El Kamili M.; El Fenni M.R.; Omari L.',
    year: 2016,
    type: 'journal',
    venue: 'International Journal of Communication Networks and Distributed Systems',
    team: 'gedis',
    doi: '10.1504/IJCNDS.2016.077667'
  },
  {
    id: '1109-wincom-2015-7381328',
    title: 'An enforced QoS shceme for high mobile adhoc networks',
    authors: 'Lakrami F.; Elkamoun N.; Kamili M.E.',
    year: 2016,
    type: 'conference',
    venue: 'International Conference on Wireless Networks and Mobile Communications, WINCOM 2015',
    team: 'gedis',
    doi: '10.1109/WINCOM.2015.7381328'
  },
  {
    id: '1109-cist-2016-7804995',
    title: 'An overview of traceability: Definitions and techniques',
    authors: 'Souali K.; Rahmaoui O.; Ouzzif M.',
    year: 2016,
    type: 'conference',
    venue: 'Colloquium in Information Science and Technology, CIST',
    team: 'gedis',
    doi: '10.1109/CIST.2016.7804995'
  },
  {
    id: '1109-wincom-2015-7381305',
    title: 'Analytical models for jitter and QoS requirements with IPP and MMPP-2 traffics',
    authors: 'Magri H.; Abghour N.; Ouzzif M.',
    year: 2016,
    type: 'conference',
    venue: 'International Conference on Wireless Networks and Mobile Communications, WINCOM 2015',
    team: 'gedis',
    doi: '10.1109/WINCOM.2015.7381305'
  },
  {
    id: '1109-aiccsa-2015-7507233',
    title: 'Building a structured collaboration system from XML specification',
    authors: 'Najam S.; Mousannif H.; Ouzzif M.',
    year: 2016,
    type: 'conference',
    venue: 'Proceedings of IEEE/ACS International Conference on Computer Systems and Applications, AICCSA',
    team: 'gedis',
    doi: '10.1109/AICCSA.2015.7507233'
  },
  {
    id: 't-cloud-radio-access-network-tec-2016',
    title: 'Cloud radio access network technology for the next fifth generation mobile networks',
    authors: 'Hicham M.; Abghour N.; Ouzzif M.',
    year: 2016,
    type: 'journal',
    venue: 'Journal of Theoretical and Applied Information Technology',
    team: 'gedis'
  },
  {
    id: '1109-aiccsa-2015-7507207',
    title: 'Considering dependability requirements in the context of Decision Support Systems',
    authors: 'Hilal I.; Afifi N.; Ouzzif M.; Belhaddaoui H.',
    year: 2016,
    type: 'conference',
    venue: 'Proceedings of IEEE/ACS International Conference on Computer Systems and Applications, AICCSA',
    team: 'gedis',
    doi: '10.1109/AICCSA.2015.7507207'
  },
  {
    id: '1109-mascots-2016-10',
    title: 'Dynamic clustering algorithm for tracking target with high and variable celerity',
    authors: 'Toumi M.; Maizate A.; Ouzzif M.; Salah M.S.',
    year: 2016,
    type: 'conference',
    venue: 'Proceedings - 2016 IEEE 24th International Symposium on Modeling, Analysis and Simulation of Computer and Telecommunication Systems, MASCOTS 2016',
    team: 'gedis',
    doi: '10.1109/MASCOTS.2016.10'
  },
  {
    id: '1109-icocs-2015-7483214',
    title: 'Evaluation and comparative study of wireless sensors networks hierarchical protocols',
    authors: 'Echoukairi H.; Bouragba K.; Ouzzif M.',
    year: 2016,
    type: 'conference',
    venue: 'Proceedings of 2015 IEEE World Conference on Complex Systems, WCCS 2015',
    team: 'gedis',
    doi: '10.1109/ICoCS.2015.7483214'
  },
  {
    id: '1109-wincom-2016-7777230',
    title: 'Foreword',
    authors: 'M. El-Kamili; I. Berrada; A. Badri; H. Ghennioui',
    year: 2016,
    type: 'conference',
    venue: '2016 International Conference on Wireless Networks and Mobile Communications (WINCOM)',
    team: 'gedis',
    doi: '10.1109/WINCOM.2016.7777230'
  },
  {
    id: '1109-icitst-2015-7412136',
    title: 'Fountain-code-enabled DCF for optimazing throughput in wireless sensors',
    authors: 'Aouami R.; Sabir E.; Rifi M.; Ouzzif M.',
    year: 2016,
    type: 'journal',
    venue: '2015 10th International Conference for Internet Technology and Secured Transactions, ICITST 2015',
    team: 'gedis',
    doi: '10.1109/ICITST.2015.7412136'
  },
  {
    id: '1109-wcnc-2014-6952639',
    title: 'Learning controlled forwarding strategy improving probabilistic routing in DTNs',
    authors: 'El Ouadrhiri A.; El Kamili M.; El Fenni M.R.; Omari L.',
    year: 2016,
    type: 'conference',
    venue: 'IEEE Wireless Communications and Networking Conference, WCNC',
    team: 'gedis',
    doi: '10.1109/WCNC.2014.6952639'
  },
  {
    id: '1109-wincom-2015-7381332',
    title: 'Literature survey on dynamic community detection and models of social networks',
    authors: 'Tamimi I.; Kamili M.E.',
    year: 2016,
    type: 'conference',
    venue: 'International Conference on Wireless Networks and Mobile Communications, WINCOM 2015',
    team: 'gedis',
    doi: '10.1109/WINCOM.2015.7381332'
  },
  {
    id: '1109-wincom-2015-7381336',
    title: 'New algorithm for blind recognition of OFDM based systems using second-order statistics',
    authors: 'Firdaoussi M.; Ghennioui H.; Kamili M.E.',
    year: 2016,
    type: 'conference',
    venue: 'International Conference on Wireless Networks and Mobile Communications, WINCOM 2015',
    team: 'gedis',
    doi: '10.1109/WINCOM.2015.7381336'
  },
  {
    id: '1109-wincom-2016-7777217',
    title: 'Optimal content caching for epidemic routing in Delay Tolerant Networks',
    authors: 'A. El Ouadrhiri; K. Rahhali; M. El Kamili; M. Abbad',
    year: 2016,
    type: 'conference',
    venue: '2016 International Conference on Wireless Networks and Mobile Communications (WINCOM)',
    team: 'gedis',
    doi: '10.1109/WINCOM.2016.7777217'
  },
  {
    id: '1109-cist-2016-7804967',
    title: 'Proposition of improvement areas in most heavy an light stemmer algorithms novel stemmer: EST.Stemmer',
    authors: 'El Manssouri H.; Farrah S.; Ziyati E.H.; Ouzzif M.',
    year: 2016,
    type: 'conference',
    venue: 'Colloquium in Information Science and Technology, CIST',
    team: 'gedis',
    doi: '10.1109/CIST.2016.7804967'
  },
  {
    id: '1109-wincom-2016-7777219',
    title: 'Recognition of OFDM and SCLD signals based on the Generalized Mean Ambiguity Function',
    authors: 'M. Firdaoussi; H. Ghennioui; M. El Kamili',
    year: 2016,
    type: 'conference',
    venue: '2016 International Conference on Wireless Networks and Mobile Communications (WINCOM)',
    team: 'gedis',
    doi: '10.1109/WINCOM.2016.7777219'
  },
  {
    id: '1109-icm-2015-7437981',
    title: 'Security approaches based on elliptic curve cryptography in wireless sensor networks',
    authors: 'Salah M.S.; Maizate A.; Ouzzif M.',
    year: 2016,
    type: 'conference',
    venue: 'Proceedings of the International Conference on Microelectronics, ICM',
    team: 'gedis',
    doi: '10.1109/ICM.2015.7437981'
  },
  {
    id: '1007-978-981-287-990-5-38',
    title: 'Statistical learning based framework for random networks knowledge extraction applied in smart cities',
    authors: 'Tigani S.; Ouzzif M.; Saadane R.',
    year: 2016,
    type: 'conference',
    venue: 'Lecture Notes in Electrical Engineering',
    team: 'gedis',
    doi: '10.1007/978-981-287-990-5_38'
  },
  {
    id: '1109-icocs-2015-7483311',
    title: 'An approach to select effectively the best framework IT according to the axes of the governance IT, to handle and to set up an objective IT',
    authors: 'A. Chakir; M. Chergui; H. Medromi; A. Sayouti',
    year: 2015,
    type: 'conference',
    venue: '2015 Third World Conference on Complex Systems (WCCS)',
    team: 'gedis',
    doi: '10.1109/ICoCS.2015.7483311'
  },
  {
    id: '1109-wincom-2015-7381330',
    title: 'Energy and delay optimal epidemic relaying in delay tolerant networks',
    authors: 'A. E. Ouadrhiri; R. El-Azouzi; M. E. Kamili',
    year: 2015,
    type: 'conference',
    venue: '2015 International Conference on Wireless Networks and Mobile Communications (WINCOM)',
    team: 'gedis',
    doi: '10.1109/WINCOM.2015.7381330'
  },
  {
    id: '1007-978-3-319-26850-7-12',
    title: 'Improving cognitive radio wireless network performances using clustering schemes and coalitional games',
    authors: 'Belghiti I.D.; Berrada I.; El Kamili M.',
    year: 2015,
    type: 'conference',
    venue: 'Lecture Notes in Computer Science (including subseries Lecture Notes in Artificial Intelligence and Lecture Notes in Bioinformatics)',
    team: 'gedis',
    doi: '10.1007/978-3-319-26850-7_12'
  },
  {
    id: '1109-isacv-2015-7106161',
    title: 'Knowledge discovery in WSN using mobile agents',
    authors: 'R. Amine; K. Amine; B. Khalid; Z. Elhoussaine; O. Mohammed',
    year: 2015,
    type: 'conference',
    venue: '2015 Intelligent Systems and Computer Vision (ISCV)',
    team: 'gedis',
    doi: '10.1109/ISACV.2015.7106161'
  },
  {
    id: '1109-wict-2015-7489655',
    title: 'Study of the credibility of the information shared by a wireless sensor network',
    authors: 'L. Karim; H. Mohamed; B. Hicham',
    year: 2015,
    type: 'conference',
    venue: '2015 5th World Congress on Information and Communication Technologies (WICT)',
    team: 'dsis',
    doi: '10.1109/WICT.2015.7489655'
  },
  {
    id: '1007-978-3-319-26850-7-40',
    title: 'Towards an optimal pricing for mobile virtual network operators',
    authors: 'Raiss-El-Fenni M.; El Kamili M.; Ezzahidi S.A.; Berrada I.; Bouyakhf E.H.',
    year: 2015,
    type: 'conference',
    venue: 'Lecture Notes in Computer Science (including subseries Lecture Notes in Artificial Intelligence and Lecture Notes in Bioinformatics)',
    team: 'gedis',
    doi: '10.1007/978-3-319-26850-7_40'
  },
  {
    id: '1007-978-3-319-09581-3-21',
    title: 'A formal driving behavior model for intelligent transportation systems',
    authors: 'Bouhoute A.; Berrada I.; El Kamili M.',
    year: 2014,
    type: 'conference',
    venue: 'Lecture Notes in Computer Science (including subseries Lecture Notes in Artificial Intelligence and Lecture Notes in Bioinformatics)',
    team: 'gedis',
    doi: '10.1007/978-3-319-09581-3_21'
  },
  {
    id: '1109-iwcmc-2014-6906362',
    title: 'A formal model of human driving behavior in vehicular networks',
    authors: 'A. Bouhoute; I. Berrada; M. El Kamili',
    year: 2014,
    type: 'conference',
    venue: '2014 International Wireless Communications and Mobile Computing Conference (IWCMC)',
    team: 'gedis',
    doi: '10.1109/IWCMC.2014.6906362'
  },
  {
    id: '1007-978-3-319-11818-5-10',
    title: 'A formal modeling approach for emergency crisis response in health during catastrophic situation',
    authors: 'Ouzzif M.; Hamdani M.; Mountassir H.; Erradi M.',
    year: 2014,
    type: 'conference',
    venue: 'Lecture Notes in Business Information Processing',
    team: 'gedis',
    doi: '10.1007/978-3-319-11818-5_10'
  },
  {
    id: '1109-icmcs-2014-6911213',
    title: 'Aspect-Oriented Method for dependable data warehouse systems based on MDA approach',
    authors: 'Imane H.; Nadia A.; Hicham B.; Hilali Reda F.; Mohammed O.',
    year: 2014,
    type: 'conference',
    venue: 'International Conference on Multimedia Computing and Systems -Proceedings',
    team: 'dsis',
    doi: '10.1109/ICMCS.2014.6911213'
  },
  {
    id: '1109-icocs-2014-7060922',
    title: 'Comparative analysis of contention oriented power saving based medium access control protocols for wireless sensor networks',
    authors: 'Aouami R.; Rifi M.; Ouzzif M.',
    year: 2014,
    type: 'conference',
    venue: '2014 2nd World Conference on Complex Systems, WCCS 2014',
    team: 'gedis',
    doi: '10.1109/ICoCS.2014.7060922'
  },
  {
    id: '1109-iscc-2014-6912530',
    title: 'Controlling messages for probabilistic routing protocols in Delay-Tolerant Networks',
    authors: 'El Ouadrhiri A.; Rahmouni I.; El Kamili M.; Berrada I.',
    year: 2014,
    type: 'conference',
    venue: 'Proceedings - IEEE Symposium on Computers and Communications',
    team: 'gedis',
    doi: '10.1109/ISCC.2014.6912530'
  },
  {
    id: '1109-icmcs-2014-6911348',
    title: 'Energy consumption balancing in wireless sensors networks',
    authors: 'R. Amine; B. Khalid; Z. Elhoussaine; O. Mohammed',
    year: 2014,
    type: 'conference',
    venue: '2014 International Conference on Multimedia Computing and Systems (ICMCS)',
    team: 'gedis',
    doi: '10.1109/ICMCS.2014.6911348'
  },
  {
    id: '1109-ngns-2014-7090888',
    title: 'Intelligent audit of information systems by inter-organizational workflow',
    authors: 'M. Chergui; H. Medromi; A. Sayouti',
    year: 2014,
    type: 'conference',
    venue: '2014 International Conference on Next Generation Networks and Services (NGNS)',
    team: 'gedis',
    doi: '10.1109/NGNS.2014.7090888'
  },
  {
    id: '1109-ngns-2014-6990260',
    title: 'Modeling securized cooperation of inter-organizational workflows in a multi-level virtual architecture',
    authors: 'Messari S.E.; Bouragba K.; Ouzzif M.; Rifi M.',
    year: 2014,
    type: 'conference',
    venue: 'International Conference on Next Generation Networks and Services, NGNS',
    team: 'gedis',
    doi: '10.1109/NGNS.2014.6990260'
  },
  {
    id: '1109-ngns-2014-6990221',
    title: 'Monte Carlo simulation based algorithm design for automatic learning machine performance analysis',
    authors: 'Tigani S.; Ouzzif M.; Hasbi A.',
    year: 2014,
    type: 'conference',
    venue: 'International Conference on Next Generation Networks and Services, NGNS',
    team: 'gedis',
    doi: '10.1109/NGNS.2014.6990221'
  },
  {
    id: '1109-icc-2014-6883301',
    title: 'Optimal buffer management policies in DTNs: A POMDP approach',
    authors: 'I. Rahmouni; M. E. Kamili; M. R. E. Fenni; L. Omari; A. Kobbane',
    year: 2014,
    type: 'conference',
    venue: '2014 IEEE International Conference on Communications (ICC)',
    team: 'gedis',
    doi: '10.1109/ICC.2014.6883301'
  },
  {
    id: '1109-icc-2014-6883574',
    title: 'POMDP game framework for service providers inciting mobile users',
    authors: 'Raiss-El-Fenni M.; El-Kamili M.; Ben-Othman J.; Kobbane A.',
    year: 2014,
    type: 'conference',
    venue: '2014 IEEE International Conference on Communications, ICC 2014',
    team: 'gedis',
    doi: '10.1109/ICC.2014.6883574'
  },
  {
    id: '1109-ngns-2014-6990243',
    title: 'Query\'s optimization in data warehouse on the cloud using fragmentation',
    authors: 'Ettaoufik A.; Ouzzif M.',
    year: 2014,
    type: 'conference',
    venue: 'International Conference on Next Generation Networks and Services, NGNS',
    team: 'gedis',
    doi: '10.1109/NGNS.2014.6990243'
  },
  {
    id: '1109-ngns-2014-6990269',
    title: 'Towards a new model of management and securing digital identities',
    authors: 'Bourass I.; Afifi N.; Belhadaoui H.; Ouzzif M.; Hilali R.F.',
    year: 2014,
    type: 'conference',
    venue: 'International Conference on Next Generation Networks and Services, NGNS',
    team: 'gedis',
    doi: '10.1109/NGNS.2014.6990269'
  },
  {
    id: '1109-aiccsa-2013-6616465',
    title: 'Normed principal components analysis: A new approach to data warehouse fragmentation',
    authors: 'Elmansouri R.; Elbeqqali O.; Ziyati E.',
    year: 2013,
    type: 'conference',
    venue: 'Proceedings of IEEE/ACS International Conference on Computer Systems and Applications, AICCSA',
    team: 'bdios',
    doi: '10.1109/AICCSA.2013.6616465'
  },
  {
    id: '1109-icmcs-2012-6320257',
    title: 'A dynamic proxy for lightweight web service composition',
    authors: 'Najam S.; Dinkelaker T.; Erradi M.; Ouzzif M.',
    year: 2012,
    type: 'conference',
    venue: 'Proceedings of 2012 International Conference on Multimedia Computing and Systems, ICMCS 2012',
    team: 'gedis',
    doi: '10.1109/ICMCS.2012.6320257'
  },
  {
    id: 't-learner-behavior-analysis-on-a-2012',
    title: 'Learner behavior analysis on an online learning platform',
    authors: 'Haddiuoi I.E.; Khaldi M.',
    year: 2012,
    type: 'journal',
    venue: 'International Journal of Emerging Technologies in Learning',
    team: 'gedis'
  },
  {
    id: '1109-icmcs-2012-6320319',
    title: 'The fragmentation of data warehouses: An approach based on principal components analysis',
    authors: 'Elmansouri R.; Ziyati E.; Elbeqqali O.; Aboutajdine D.',
    year: 2012,
    type: 'conference',
    venue: 'Proceedings of 2012 International Conference on Multimedia Computing and Systems, ICMCS 2012',
    team: 'bdios',
    doi: '10.1109/ICMCS.2012.6320319'
  },
  {
    id: '1145-1868521-1868578',
    title: 'Dynamic spectrum allocation based on cognitive radio for QoS support',
    authors: 'Raiss El-Fenni M.; El-Azouzi R.; El-Kamili M.; Ibrahimi K.; Bouyakhf E.H.',
    year: 2010,
    type: 'conference',
    venue: 'MSWiM\'10 - Proceedings of the 13th ACM International Conference on Modeling, Analysis, and Simulation of Wireless and Mobile Systems',
    team: 'gedis',
    doi: '10.1145/1868521.1868578'
  },
  {
    id: 't-efficient-generation-and-repre-2009',
    title: 'Efficient generation and representation of failure lists out of an information flux model for modeling safety critical systems',
    authors: 'Pock M.; Belhadaoui H.; Malassé O.; Walter M.',
    year: 2009,
    type: 'conference',
    venue: 'Safety, Reliability and Risk Analysis: Theory, Methods and Applications - Proceedings of the Joint ESREL and SRA-Europe Conference',
    team: 'dsis'
  },
  {
    id: 't-evaluation-of-important-reliab-2009',
    title: 'Evaluation of important reliability parameters using VHDL-RTL modelling and information flow approach',
    authors: 'Jallouli M.; Diou C.; Monteiro F.; Dandache A.; Belhadaoui H.; Malassé O.; Buchheit G.; Aubry J.E.; Medromi H.',
    year: 2009,
    type: 'conference',
    venue: 'Safety, Reliability and Risk Analysis: Theory, Methods and Applications - Proceedings of the Joint ESREL and SRA-Europe Conference',
    team: 'dsis'
  },
  {
    id: 't-algorithms-for-data-warehouse--2008',
    title: 'Algorithms for data warehouse design to enhance decision-making',
    authors: 'Elhoussaine Z.; Aboutajdine D.; Abderrahim E.Q.',
    year: 2008,
    type: 'journal',
    venue: 'WSEAS Transactions on Computer Research',
    team: 'bdios'
  },
  {
    id: '1109-ecoc-2008-4729365',
    title: 'Capacity optimisation for optical links using DMT modulation, an application to POF',
    authors: 'Charbonnier B.; Urvoas P.; Ouzzif M.; Masson J.L.',
    year: 2008,
    type: 'conference',
    venue: 'European Conference on Optical Communication, ECOC',
    team: 'gedis',
    doi: '10.1109/ECOC.2008.4729365'
  },
  {
    id: '1109-dtis-2008-4540256',
    title: 'Dependability consequences of fault-tolerant technique integrated in stack processor emulator using information flow approach',
    authors: 'Jallouli M.; Belhadaoui H.; Diou C.; Monteiro F.; Malasse O.; Aubry J.-F.; Dandache A.; Buchheit G.; Medromi H.',
    year: 2008,
    type: 'conference',
    venue: 'International Conference on Design and Technology of Integrated Systems in Nanoscale Era, DTIS\'08',
    team: 'dsis',
    doi: '10.1109/DTIS.2008.4540256'
  },
  {
    id: '1016-j-engappai-2007-11-003',
    title: 'Description of a teleconferencing floor control protocol and its implementation',
    authors: 'Ouzzif M.; Erradi M.; Mountassir H.',
    year: 2008,
    type: 'conference',
    venue: 'Engineering Applications of Artificial Intelligence',
    team: 'gedis',
    doi: '10.1016/j.engappai.2007.11.003'
  },
  {
    id: 't-new-ftf9n-stabilized-recursive-1993',
    title: 'New FTF9N stabilized recursive algorithm, implementation on finite-precision',
    authors: 'Ammoumou A.; Aboutajdine D.; Najim M.',
    year: 1993,
    type: 'conference',
    venue: 'IFAC Symposia Series'
  },
];

export const RESEARCH_AREAS = [
  'data',
  'bigdata',
  'iot',
  'wireless',
  'cloud',
  'info',
  'cyber',
  'modelling',
  'robotics'
] as const;
