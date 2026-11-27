export type Experience = {
  id: string;
  company: string;
  shortName: string;
  period: string;
  years: string;
  role: string;
  sector: string;
  location: string;
  summary: string;
  highlights: string[];
  technologies: string[];
  metric: string;
  metricLabel: string;
};

export const experiences: Experience[] = [
  {
    id: 'sangati',
    company: 'Sangati Berga',
    shortName: 'SANGATI BERGA',
    period: 'APR 2021 — NOV 2022',
    years: '2021',
    role: 'Software Developer',
    sector: 'INDUSTRIAL TECH',
    location: 'Fortaleza, Brazil',
    summary: 'Connecting the physical and digital worlds through industrial telemetry and predictive maintenance.',
    highlights: [
      'Reduced industrial machine telemetry system costs by more than 50% by developing IoT systems with microcontrollers.',
      'Built Django APIs to retrieve telemetry data and apply machine learning to predictive maintenance.',
    ],
    technologies: ['Python', 'Django', 'IoT', 'Machine Learning'],
    metric: '50%+',
    metricLabel: 'LOWER TELEMETRY COSTS',
  },
  {
    id: 'irede',
    company: 'IREDE',
    shortName: 'IREDE',
    period: 'NOV 2022 — JUN 2023',
    years: '2022',
    role: 'Software Developer',
    sector: 'HR TECH',
    location: 'Fortaleza, Brazil',
    summary: 'Making recruitment smarter with conversational tools and data processing.',
    highlights: [
      'Developed a chatbot microservice with Flask, Rasa, AWS S3, and Pytest.',
      'Extracted data from PDFs and contributed to embeddings for candidate seniority classification.',
      'Configured Azure DevOps deployment pipelines and integrated payment platforms.',
    ],
    technologies: ['Python', 'Flask', 'Rasa', 'AWS S3', 'spaCy'],
    metric: 'AI',
    metricLabel: 'SMARTER RECRUITMENT',
  },
  {
    id: 'power',
    company: 'Power.Rent',
    shortName: 'POWER.RENT',
    period: 'JUN 2023 — MAY 2024',
    years: '2023',
    role: 'Software Engineer · Full-stack',
    sector: 'CONSUMER TECH',
    location: 'Seville, Spain · Remote',
    summary: 'Turning charging network data into useful insights for a growing business.',
    highlights: [
      'Developed a CRM platform managing data from more than 7,000 users and 200 devices.',
      'Built backend features with Laravel and interactive frontend components with Livewire and JavaScript.',
    ],
    technologies: ['PHP', 'Laravel', 'Livewire', 'JavaScript'],
    metric: '7K+',
    metricLabel: 'USERS IN THE CRM',
  },
  {
    id: 'catskillet',
    company: 'Catskillet',
    shortName: 'CATSKILLET',
    period: 'MAY 2024 — JUL 2025',
    years: '2024',
    role: 'Software Engineer · Back-end',
    sector: 'EVENT TECH',
    location: 'São Paulo, Brazil · Remote',
    summary: 'Building dependable experiences for people at events on a global scale.',
    highlights: [
      'Contributed to an event platform supporting more than 40,000 concurrent users during Google Cloud Next 2025.',
      'Refactored critical APIs and introduced asynchronous workers to reduce overloads at check-in peaks.',
      'Improved API performance by 20% through Django ORM query optimization.',
    ],
    technologies: ['Python', 'Django', 'Async workers'],
    metric: '40K+',
    metricLabel: 'CONCURRENT USERS',
  },
  {
    id: 'openhealth',
    company: 'OpenHealth Technologies',
    shortName: 'OPENHEALTH',
    period: 'JUL 2025 — PRESENT',
    years: '2025',
    role: 'Senior Software Engineer · Full-stack',
    sector: 'HEALTH TECH',
    location: 'Berlin, Germany · Remote',
    summary: 'Building the platform and infrastructure behind healthcare data at scale.',
    highlights: [
      'Built a data lifecycle service that removed over 40 million MongoDB records and reduced data size by approximately 1 TB.',
      'Designed an ingestion microservice that has processed more than 2 million uploads.',
      'Automated data-rule migrations, reducing cross-environment migration time by 97%.',
      'Built biomarker suggestions using embeddings and vector search, and provisioned secure cloud networking.',
    ],
    technologies: ['MongoDB', 'GCP', 'Terraform', 'Microservices'],
    metric: '2M+',
    metricLabel: 'UPLOADS PROCESSED',
  },
];
