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
  // 2025
  {
    id: 'vesafl25',
    title:
      'VeSAFL: Verifiable Secure Aggregation for Privacy-Preserving Federated Learning',
    authors: 'J. Bouamama, Y. Benkaouz, M. Ouzzif',
    year: 2025,
    type: 'journal',
    venue: 'IEEE Transactions on Dependable and Secure Computing',
    doi: '10.1109/tdsc.2025.3589160',
    team: 'gedis',
    citations: 2
  },
  {
    id: 'vflex25',
    title: 'V-FLEX: Verifiable cross-silo federated learning using TEE',
    authors: 'J. Bouamama, Y. Benkaouz, M. Ouzzif',
    year: 2025,
    type: 'journal',
    venue: 'Progress in Artificial Intelligence (Springer)',
    doi: '10.1007/s13748-025-00386-9',
    team: 'gedis',
    citations: 1
  },
  {
    id: 'lmgdoc25',
    title: 'LMGDoc: Light Multigranular GNN for Efficient Document Understanding',
    authors:
      'A. Sassioui, Y. Elouargui, M. El Kamili, R. Benouini, E.M. Benyoussef',
    year: 2025,
    type: 'journal',
    venue: 'IEEE Access',
    doi: '10.1109/access.2025.3568628',
    team: 'gedis',
    citations: 1
  },
  {
    id: 'kidney25',
    title:
      'AI-Driven Solutions in Kidney Disease Management: A Systematic Literature Review',
    authors: 'A. Aissaoui, I. Chergui, S. Ramdani, S. El Fayq, M. Chergui',
    year: 2025,
    type: 'conference',
    venue: 'IEEE ICAT2I 2025',
    doi: '10.1109/icat2i69744.2025.11472743',
    team: 'gedis'
  },
  {
    id: 'progmatter25',
    title:
      'A Lightweight Distributed Security Protocol with Adaptive Key Management for Programmable Matter',
    authors: 'Y. Faye, A. Makhoul, S.M. Diene, M. Ouzzif',
    year: 2025,
    type: 'conference',
    venue: 'IEEE INISTA 2025',
    doi: '10.1109/inista68122.2025.11249596',
    team: 'gedis'
  },
  {
    id: 'aidiag25',
    title:
      'Deep Learning Based AI Diagnostic Open API Architecture for Healthcare Applications',
    authors: 'F. Haraka, S. Tigani, M. Ouzzif, K. Bouragba',
    year: 2025,
    type: 'conference',
    venue: 'Springer LNNS',
    doi: '10.1007/978-3-031-94623-3_2',
    team: 'bdios'
  },
  {
    id: 'siem25',
    title:
      'How SIEM Technology is Revolutionizing Cybersecurity with the Aid of Artificial Intelligence',
    authors: 'Y. Aboudrar, K. Bouragba, M. Ouzzif',
    year: 2025,
    type: 'conference',
    venue: 'Springer LNNS',
    doi: '10.1007/978-3-031-91334-1_25',
    team: 'dsis'
  },

  // 2024
  {
    id: 'smartcontract24',
    title:
      'A Smart Contract Architecture Framework for Insurance Industry Using Blockchain and Business Process Management Technology',
    authors: 'A. Rachad, L. Gaiz, K. Bouragba, M. Ouzzif',
    year: 2024,
    type: 'journal',
    venue: 'IEEE Engineering Management Review',
    doi: '10.1109/emr.2023.3348431',
    team: 'gedis',
    citations: 7
  },
  {
    id: 'incentive24',
    title:
      'PyIncentiveBC: A Python Module for Simulation of Incentivization Mechanism in Blockchain-Based Systems',
    authors: 'A. Ouaguid, M. Hanine, Z. Chiba, N. Abghour, M. Ouzzif',
    year: 2024,
    type: 'journal',
    venue: 'Computation (MDPI)',
    doi: '10.3390/computation12090179',
    team: 'gedis',
    citations: 1
  },
  {
    id: 'kubernetes24',
    title:
      'Enhanced Vertical Pod Auto Scaling with Decision Tree Regressor-Max in Kubernetes',
    authors: 'Z. Bouflous, F. Haraka, M. Ouzzif, K. Bouragba',
    year: 2024,
    type: 'conference',
    venue: 'IEEE WINCOM 2024',
    doi: '10.1109/wincom62286.2024.10654970',
    team: 'bdios'
  },
  {
    id: 'secureemail24',
    title: 'Sending and Receiving Secure Email Based on Blockchain',
    authors: 'A. Rachad, L. Gaiz, K. Bouragba, M. Ouzzif',
    year: 2024,
    type: 'conference',
    venue: 'IEEE UNet 2024',
    doi: '10.1109/unet62310.2024.10794735',
    team: 'dsis'
  },
  {
    id: 'cfmd24',
    title:
      'Building a Corpus for the Underexplored Moroccan Dialect (CFMD) Through Audio Segmentations',
    authors: 'H. Zaidani, A. Maizate, M. Ouzzif, R. Koulali',
    year: 2024,
    type: 'journal',
    venue: 'Revue d\u2019intelligence artificielle',
    doi: '10.18280/ria.380312',
    team: 'gedis'
  },
  {
    id: 'mledge24',
    title:
      'A Comprehensive Review of Machine Learning and Edge Computing Integration in IoT',
    authors: 'I. Laaroua, M. Ouzzif, K. Bouragba',
    year: 2024,
    type: 'conference',
    venue: 'Springer LNNS',
    doi: '10.1007/978-3-031-70411-6_20',
    team: 'bdios'
  },

  // 2023
  {
    id: 'edgesa23',
    title:
      'EdgeSA: Secure Aggregation for Privacy-Preserving Federated Learning in Edge Computing',
    authors: 'J. Bouamama, Y. Benkaouz, M. Ouzzif',
    year: 2023,
    type: 'conference',
    venue: 'IEEE DASC/PiCom/CBDCom/CyberSciTech 2023',
    doi: '10.1109/dasc/picom/cbdcom/cy59711.2023.10361333',
    team: 'gedis',
    citations: 6
  },
  {
    id: 'transformers23',
    title: 'A Comprehensive Survey on Efficient Transformers',
    authors:
      'Y. Elouargui, M. Zyate, A. Sassioui, M. Chergui, M. El Kamili',
    year: 2023,
    type: 'conference',
    venue: 'IEEE WINCOM 2023',
    doi: '10.1109/wincom59760.2023.10322921',
    team: 'gedis',
    citations: 7
  },
  {
    id: 'vrdu23',
    title:
      'Visually-Rich Document Understanding: Concepts, Taxonomy and Challenges',
    authors:
      'A. Sassioui, R. Benouini, Y. El Ouargui, M. El Kamili, M. Chergui',
    year: 2023,
    type: 'conference',
    venue: 'IEEE WINCOM 2023',
    doi: '10.1109/wincom59760.2023.10322990',
    team: 'gedis',
    citations: 7
  },
  {
    id: 'pdmaas23',
    title:
      'Predictive Maintenance-as-a-Service (PdMaaS) in Industry 4.0 using Blockchain',
    authors: 'A. Rachad, L. Gaiz, K. Bouragba, M. Ouzzif',
    year: 2023,
    type: 'conference',
    venue: 'IEEE WINCOM 2023',
    doi: '10.1109/wincom59760.2023.10322922',
    team: 'gedis'
  },
  {
    id: 'rfid23',
    title:
      'An RFID-Based Traceability Approach to Improve the Overall Health Status Management in Morocco',
    authors: 'K. Souali, M. Souali, M. Ouzzif',
    year: 2023,
    type: 'conference',
    venue: 'IEEE WINCOM 2023',
    doi: '10.1109/wincom59760.2023.10323019',
    team: 'gedis'
  },
  {
    id: 'vanet23',
    title:
      'Traffic Control, Congestion Management and Smart Parking through VANET, ML, and IoT: A Review',
    authors:
      'H. Ouhmidou, A. Nabou, A. Ikidid, W. Bouassaba, M. Ouzzif',
    year: 2023,
    type: 'conference',
    venue: 'IEEE WINCOM 2023',
    doi: '10.1109/wincom59760.2023.10322908',
    team: 'bdios',
    citations: 6
  },
  {
    id: 'ralb23',
    title:
      'Resource-Aware Least Busy (RALB) Strategy for Load Balancing in Containerized Cloud Systems',
    authors: 'Z. Bouflous, M. Ouzzif, K. Bouragba',
    year: 2023,
    type: 'journal',
    venue: 'International Journal of Cloud Applications and Computing',
    doi: '10.4018/ijcac.328094',
    team: 'bdios'
  },
  {
    id: 'sdn23',
    title:
      'Fault tolerant and load balancing model for software defined networking controllers',
    authors: 'I. Choukri, M. Ouzzif, K. Bouragba',
    year: 2023,
    type: 'journal',
    venue: 'Indonesian Journal of Electrical Engineering and Computer Science',
    doi: '10.11591/ijeecs.v31.i1.pp378-385',
    team: 'bdios'
  },

  // 2022
  {
    id: 'mlmanet22',
    title: 'Review on Machine Learning Based Intrusion Detection for MANET Security',
    authors: 'W. Bouassaba, A. Nabou, M. Ouzzif',
    year: 2022,
    type: 'conference',
    venue: 'IEEE WINCOM 2022',
    doi: '10.1109/wincom55661.2022.9966457',
    team: 'dsis',
    citations: 6
  },
  {
    id: 'androscan22',
    title: 'Androscanreg 2.0',
    authors: 'A. Ouaguid, F. Fathi, M. Zouina, M. Ouzzif, N. Abghour',
    year: 2022,
    type: 'journal',
    venue: 'International Journal of Software Innovation',
    doi: '10.4018/ijsi.309724',
    team: 'dsis',
    citations: 5
  },
  {
    id: 'cloudsla22',
    title:
      'Smart contract for cloud SLA using Service Oriented Architecture and Blockchain',
    authors: 'A. Rachad, K. Bouragba, M. Ouzzif',
    year: 2022,
    type: 'conference',
    venue: 'IEEE WINCOM 2022',
    doi: '10.1109/wincom55661.2022.9966420',
    team: 'gedis',
    citations: 3
  },

  // 2020-2021
  {
    id: 'olsr20',
    title:
      'New MPR Computation for Securing OLSR Routing Protocol Against Single Black Hole Attack',
    authors: 'A. Nabou, M.D. Laanaoui, M. Ouzzif',
    year: 2020,
    type: 'journal',
    venue: 'Wireless Personal Communications (Springer)',
    doi: '10.1007/s11277-020-07881-3',
    team: 'dsis',
    citations: 21
  },
  {
    id: 'kmeans20',
    title:
      'Initial Centroid Selection Method for an Enhanced K-means Clustering Algorithm',
    authors: 'Y. Aamer, Y. Benkaouz, M. Ouzzif, K. Bouragba',
    year: 2020,
    type: 'conference',
    venue: 'Springer LNCS',
    doi: '10.1007/978-3-030-58008-7_15',
    team: 'bdios',
    citations: 2
  }
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
