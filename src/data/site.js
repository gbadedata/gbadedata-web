/* Structured content records — §48.
   Manually maintained. No repository fetching. */

export const site = {
  name: 'Oluwagbade Odimayo',
  title: 'Data and Cloud Engineer',
  positioning:
    'I build reliable data platforms, cloud infrastructure and reproducible workflows for operational and scientific data.',
  supporting:
    'I design data-intensive systems using Python, SQL, AWS, Azure, Terraform, Docker, Kubernetes and CI/CD. My work spans data engineering, cloud platform automation, applied machine learning and scientific computing, supported by research publications and open-source contributions.',
  availability:
    'UK-based. Open to Data Engineering, Cloud Engineering, Platform Engineering and Bioinformatics Engineering opportunities.',
  email: 'o.odimayo@gbadedata.com',
  github: 'https://github.com/gbadedata',
  linkedin: 'https://www.linkedin.com/in/oluwagbade-odimayo-',
  researchgate: '',
};

/* Anchors resolve to real homepage sections. Dedicated pages replace
   these as they are built; nothing here points at a missing route. */
/* Full biography — corrected. No education-sector, teaching or
   institutional-assessment framing. Used by the About page. */
export const bio = [
  'I am a Data and Cloud Engineer with an MSc in Applied Data Science and a foundation in Life Science. My work spans data engineering, cloud infrastructure, platform automation and bioinformatics. I build data pipelines, cloud-native platforms, APIs, reproducible scientific workflows and deployment systems using Python, SQL, AWS, Azure, GCP, Terraform, Docker, Kubernetes, Nextflow and CI/CD.',
  'My background in life sciences shapes how I approach biological and clinical data: computational outputs must be reproducible, traceable and explicit about their limitations. My engineering work therefore emphasises data validation, provenance, infrastructure automation, observability, testing and clear technical documentation.',
  'Recent work includes cloud-native sequencing data platforms, germline variant-calling workflows, autonomous bioinformatics agents, Azure and AWS deployment platforms, and analytical systems for fraud, credit risk and decision support.',
  'The common thread across my work is building dependable systems for complex operational and scientific data.',
];

/* Full contribution records — used by the Open Source page. */
export const contributions = [
  {
    project: 'nf-core/modules',
    title: 'FreeBayes module: test labelling, EDAM ontology and lint compliance',
    issue: '#7766',
    pr: '#12018',
    url: 'https://github.com/nf-core/modules/pull/12018',
    status: 'Merged',
    domain: 'Bioinformatics · workflow engineering',
    summary: 'Improved the FreeBayes bioinformatics module: corrected three nf-test cases that ran on homo_sapiens test data but were labelled sarscov2, updated the matching snapshot keys, added missing EDAM ontology entries to the module metadata, and fixed stub gzip syntax required by nf-core linting.',
    work: [
      'Renamed misleading FreeBayes nf-test cases from sarscov2 to homo_sapiens where the tests used human data',
      'Updated the corresponding nf-test snapshot keys',
      'Added EDAM ontology entries for BAM, CRAM, SAM, index, BED, FASTA, FASTA index and textual inputs in meta.yml',
      'Fixed stub gzip syntax in main.nf to satisfy nf-core module linting',
      'Validated locally with nf-core lint and nf-test before submission',
    ],
    validation: [
      'nf-core modules lint freebayes — 67 tests passed, 0 warnings, 0 failures',
      'nf-test modules/nf-core/freebayes — 6 tests passed',
      'GitHub CI — 36 successful checks',
      'Maintainer review — approved and merged',
    ],
    technology: ['Nextflow','nf-core','nf-test','FreeBayes','EDAM ontology','YAML','Bash','Conda','GitHub Actions'],
  },
];

export const nav = [
  { label: 'Work', href: '#work' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Credentials', href: '#credentials' },
  { label: 'Research', href: '#research' },
  { label: 'Open Source', href: '#open-source' },
  { label: 'Writing', href: '#writing' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

/* §7 credibility strip */
export const credibility = [
  {
    title: 'Data Engineering',
    body: 'Reliable ingestion, transformation, modelling, validation, reconciliation and monitoring.',
  },
  {
    title: 'Cloud Platforms',
    body: 'Infrastructure as code, containers, Kubernetes, CI/CD and deployment automation.',
  },
  {
    title: 'Scientific Workflows',
    body: 'Reproducible bioinformatics pipelines, provenance, data integration and research-software engineering.',
  },
  {
    title: 'Research',
    body: 'Published and collaborative work across computational biology, artificial intelligence, cybersecurity and molecular genetics.',
  },
];

/* §9–§12 flagship projects */
export const projects = [
  {
    slug: 'aws-supplyshield-lakehouse',
    title: 'AWS SupplyShield Lakehouse',
    subtitle:
      'A cloud data platform for reliable supply-chain ingestion, validation and analytics',
    category: 'Data Engineering',
    status: 'Portfolio implementation',
    year: '2026',
    summary:
      'A modern data platform designed to ingest operational data, enforce data contracts, validate quality and support traceable downstream analytics. The focus is the engineering that determines whether a platform can be trusted: incremental loading, schema enforcement, reconciliation and failure handling.',
    focus: [
      'Incremental data ingestion',
      'Batch-processing design',
      'Data contracts',
      'Schema validation',
      'Source-to-target reconciliation',
      'Data-quality controls',
      'Cloud storage architecture',
      'Infrastructure as code',
      'CI/CD validation',
      'Logging and observability',
    ],
    stack: ['Python', 'SQL', 'PostgreSQL', 'AWS', 'Amazon S3', 'Terraform', 'Docker', 'GitHub Actions'],
    repo: 'https://github.com/gbadedata/aws-supplyshield-lakehouse',
  },
  {
    slug: 'enterprise-progressive-delivery-eks',
    title: 'Enterprise Progressive Delivery Platform',
    subtitle:
      'A Kubernetes platform for controlled releases, validation and rollback on AWS',
    category: 'Cloud & Platform Engineering',
    status: 'Portfolio implementation',
    year: '2026',
    summary:
      'Cloud-native releases through infrastructure as code, Kubernetes and progressive delivery. The platform provisions AWS infrastructure, deploys to Amazon EKS and evaluates release health before promotion. The case study documents unsuccessful deployment behaviour as well as successful — the degraded Argo Rollouts state is presented as engineering evidence rather than hidden.',
    focus: [
      'AWS infrastructure provisioning',
      'Amazon EKS',
      'Kubernetes platform configuration',
      'Infrastructure security',
      'CI/CD automation',
      'Progressive delivery',
      'Deployment health checks',
      'Rollback procedures',
      'Vulnerability and configuration scanning',
      'Failure analysis',
      'Teardown and cost control',
    ],
    stack: ['AWS', 'Amazon EKS', 'Terraform', 'Kubernetes', 'Docker', 'GitHub Actions', 'NGINX Ingress', 'Argo Rollouts', 'Trivy', 'Checkov'],
    repo: 'https://github.com/gbadedata/enterprise-progressive-delivery-eks',
  },
  {
    slug: 'ecm-target-discovery-pipeline',
    title: 'ECM Target Discovery Pipeline',
    subtitle:
      'A reproducible bioinformatics workflow for extracellular-matrix target prioritisation',
    category: 'Bioinformatics & Scientific Computing',
    status: 'Research and portfolio implementation',
    year: '2026',
    summary:
      'Data and cloud engineering principles applied to biological research: integrating scientific datasets, preserving analytical provenance and producing reviewable evidence for candidate prioritisation. The workflow separates acquisition, processing, quality control, evidence integration, scoring, reporting and validation. It supports research prioritisation — it does not replace biological interpretation, experimental validation or clinical review.',
    focus: [
      'Scientific workflow orchestration',
      'Biological data integration',
      'Reproducible computational environments',
      'Data provenance',
      'Containerised analysis',
      'Metadata management',
      'Quality control',
      'Evidence traceability',
      'Research-software documentation',
    ],
    stack: ['Python', 'R', 'Nextflow', 'Docker', 'Conda', 'Public biological databases'],
    repo: 'https://github.com/gbadedata/ecm-target-discovery-pipeline',
  },
  {
    slug: 'transaction-fraud-scoring',
    title: 'Transaction Fraud Scoring Platform',
    subtitle:
      'A leakage-aware analytical system for prioritising potentially fraudulent transactions',
    category: 'Applied Machine Learning',
    status: 'Portfolio implementation',
    year: '2026',
    summary:
      'Data engineering, machine learning, anomaly detection and business rules combined to produce reviewable fraud-risk outputs. The design focuses on the system around the model rather than presenting model training as the complete solution — point-in-time correctness, leakage prevention, calibration and capacity-aware prioritisation.',
    focus: [
      'Data preparation and validation',
      'Point-in-time correctness',
      'Leakage prevention',
      'Feature engineering',
      'Class imbalance',
      'Model calibration',
      'Business-rule integration',
      'Anomaly detection',
      'Capacity-aware prioritisation',
      'Batch scoring',
      'Drift monitoring',
    ],
    stack: ['Python', 'SQL', 'PostgreSQL', 'pandas', 'scikit-learn', 'Docker', 'pytest'],
    repo: 'https://github.com/gbadedata/transaction-fraud-scoring',
  },
];

/* §13 additional projects */
export const additionalProjects = [
  {
    title: 'GenomicFlow-Clin',
    body: 'A provenance-aware workflow supporting genomic variant prioritisation using established annotation resources and documented evidence sources. The system organises and surfaces evidence; it does not determine pathogenicity or replace qualified clinical interpretation.',
    focus: 'Variant annotation · provenance · reproducibility · bioinformatics workflow engineering',
  },
  {
    title: 'Azure AKS Blue-Green Deployment Platform',
    body: 'A cloud deployment system demonstrating automated validation, controlled traffic switching and rollback on Azure Kubernetes Service.',
    focus: 'Azure · AKS · ACR · GitHub Actions · Kubernetes · deployment automation',
  },
  {
    title: 'ShopSwift Blue-Green Deployment',
    body: 'A local Kubernetes implementation demonstrating zero-downtime traffic switching, rollback and failed-readiness protection.',
    focus: 'Kubernetes · service selectors · readiness validation · deployment strategies',
  },
  {
    title: 'CloudMart E-Commerce Platform',
    body: 'A team cloud-engineering project that progressed from AWS EKS to Azure AKS with containerised deployment, ingress configuration and controlled blue-green releases.',
    focus: 'Team delivery · Kubernetes · AWS · Azure · CI/CD · deployment validation',
  },
];

/* §18 publications — identifiers pending */
export const publications = [
  {
    title: 'DNA Methylation in the Recovery of Maize from Maize Streak',
    area: 'Molecular genetics and plant biology',
    type: 'Journal article',
    status: 'Published',
    role: 'Co-author',
    summary:
      'A study examining the role of DNA methylation during the recovery of maize from maize streak disease, involving biological experimentation, bisulfite treatment and DNA-sequencing approaches.',
    relevance:
      'Contributes to an understanding of biological data generation, sequencing workflows, molecular evidence, and the distinction between computational results and biological interpretation.',
    doi: '',
  },
  {
    title: 'Characterisation of Celosia argentea Germplasm Using ISSR Markers',
    area: 'Molecular genetics and plant diversity',
    type: 'Journal article',
    status: 'Published',
    role: 'Co-author',
    summary:
      'An investigation of genetic variability among Celosia argentea genotypes using inter-simple sequence repeat markers.',
    relevance:
      'Demonstrates experience with molecular-marker data, biological variation, experimental documentation and interdisciplinary research.',
    doi: '',
  },
  {
    title: 'Exploration of Plant Alkaloids as Potential Inhibitors of HIV–CD4 Binding',
    area: 'Computational drug discovery and bioinformatics',
    type: 'Journal article',
    status: 'Published',
    role: 'Co-author',
    summary:
      'An in-silico investigation of selected plant alkaloids as potential inhibitors of HIV–CD4 binding, considering molecular interactions, binding affinity and pharmacokinetic characteristics.',
    relevance:
      'Connects directly with bioinformatics workflow engineering, computational evidence integration and reproducible scientific analysis.',
    doi: '',
  },
  {
    title: 'QSAR-Based Virtual Screening for Quinolone-Based Antibacterial Discovery',
    area: 'QSAR and computational drug discovery',
    type: 'Journal article',
    status: 'Published',
    role: 'Co-author',
    summary:
      'Research applying molecular descriptors and statistical modelling to evaluate quinolone compounds for antibacterial activity.',
    relevance:
      'Connects statistical modelling, molecular data, classification and computational candidate prioritisation.',
    doi: '',
  },
  {
    title: 'Temporal-Spatial Attention Network for DoS Attack Detection',
    area: 'Cybersecurity, deep learning and network analytics',
    type: 'Preprint and conference publication record',
    status: 'Preprint / conference record',
    role: 'Co-author',
    summary:
      'An attention-based deep-learning architecture for identifying denial-of-service attacks from network-traffic data.',
    relevance:
      'Connects machine-learning systems, network data, cloud security and model evaluation under operational constraints.',
    doi: '',
  },
  {
    title: 'GreenIQ: Automated Carbon-Market Research and Report Generation',
    area: 'Artificial intelligence, information retrieval and sustainability intelligence',
    type: 'Preprint',
    status: 'Preprint',
    role: 'Co-author',
    summary:
      'A multi-agent artificial-intelligence system for collecting, synthesising and reporting heterogeneous carbon-market information.',
    relevance:
      'Intersects with data integration, information retrieval, automated reporting, evidence provenance and machine-learning systems.',
    doi: '',
  },
  {
    title: 'Shadows in the Classroom: Consequences of Large Language Models in Education',
    area: 'Artificial intelligence and education',
    type: 'Journal article',
    status: 'Published',
    role: 'Co-author',
    summary:
      'An examination of risks and unintended consequences associated with the use of large language models in educational environments.',
    relevance:
      'Supports an evidence-based approach to responsible AI deployment, model evaluation and technology governance.',
    doi: '',
  },
];

/* §26 open source */
export const openSource = [
  {
    project: 'nf-core/modules',
    headline: 'Improving bioinformatics test clarity and metadata',
    body: 'Contribution work involving test-data naming and missing ontology metadata.',
    focus: ['Bioinformatics workflow modules', 'Test maintenance', 'Metadata standards', 'EDAM ontology mapping'],
    status: 'Contribution accepted; contributor access granted',
  },
  {
    project: 'Meltano',
    headline: 'Contributing to data-engineering CLI behaviour',
    body: 'Work involving command-line functionality, logging behaviour, refresh-catalog behaviour, maintainer requirements and test coverage.',
    focus: ['Python CLI development', 'Click', 'Logging behaviour', 'Test design', 'Continuous integration'],
    status: 'Status shown per contribution',
  },
  {
    project: 'Pydantic Settings',
    headline: 'Testing nested environment-variable alias behaviour',
    body: 'A focused test suite examining nested environment-variable aliases, validation aliases and alias choices, involving environment pinning, failure analysis and regression-test design.',
    focus: ['Python', 'Pydantic', 'Pytest', 'Environment management'],
    status: 'Local implementation validated',
  },
  {
    project: 'AEGIS',
    headline: 'Correcting installation and quick-start documentation',
    body: 'Improvements to installation guidance for an AI-governance application, replacing inaccurate package instructions with a reproducible local setup.',
    focus: ['Technical documentation', 'Installation reproducibility', 'Python environments', 'Streamlit'],
    status: 'Documentation contribution',
  },
];

/* §14 engineering principles */
export const principles = [
  ['Reproducibility', 'Infrastructure, dependencies, transformations and deployment procedures should be defined in code rather than reconstructed from memory.'],
  ['Data quality', 'A successful pipeline run does not prove that the data is correct. Schemas, volumes, freshness, reconciliation and business rules must be tested.'],
  ['Failure-aware design', 'Retries, idempotency, rollback, useful logs and recovery procedures should be designed before failure occurs.'],
  ['Observability', 'A system should expose enough information to identify what happened, where, when, what data was affected and what action is required.'],
  ['Security', 'Secrets, access controls, network exposure, container vulnerabilities, dependencies and infrastructure configuration must be reviewed deliberately.'],
  ['Evidence', 'Architecture diagrams, tests, quality reports, deployment records and limitations should be visible and reviewable.'],
  ['Documentation', 'A technical system is incomplete when another engineer cannot understand, reproduce or operate it.'],
  ['Honest scope', 'Portfolio systems should not be described as enterprise production systems unless they have genuinely served users under operational responsibility.'],
];

/* §21–§25 expertise summary */
export const expertise = [
  {
    title: 'Data Engineering',
    position: 'A pipeline is not reliable because it completed successfully. It is reliable when the data is complete, valid, timely, reconciled and recoverable.',
    capabilities: ['Batch and incremental ingestion', 'ETL and ELT', 'Python', 'SQL', 'Relational modelling', 'Data contracts', 'Schema validation', 'Reconciliation', 'Idempotent processing', 'Observability'],
  },
  {
    title: 'Cloud & Platform Engineering',
    position: 'Cloud infrastructure should be represented in code, validated before deployment, and supported by evidence showing the system behaves as intended.',
    capabilities: ['AWS', 'Azure', 'Terraform', 'Docker', 'Kubernetes', 'EKS', 'AKS', 'GitHub Actions', 'Blue-green and progressive delivery', 'Security scanning', 'Rollback design'],
  },
  {
    title: 'Bioinformatics & Scientific Computing',
    position: 'Scientific results must be reproducible, traceable and explicit about uncertainty. Computational output is not the same as biological or clinical validation.',
    capabilities: ['Nextflow', 'Containerised tooling', 'Biological data integration', 'Metadata management', 'Provenance', 'Variant annotation', 'Quality-control checkpoints', 'Research documentation'],
  },
  {
    title: 'Applied Machine Learning',
    position: 'A technically accurate model can still fail when its data pipeline, decision threshold, monitoring strategy or operational workflow is badly designed.',
    capabilities: ['Leakage prevention', 'Feature engineering', 'Classification', 'Anomaly detection', 'Imbalanced datasets', 'Calibration', 'Threshold selection', 'Cost-sensitive evaluation', 'Drift monitoring'],
  },
];

/* §33 writing */
export const writing = [
  { category: 'Data Engineering', titles: ['Building an Incremental Supply-Chain Lakehouse on AWS', 'Data Contracts Are Not Enough: Adding Reconciliation and Quality Gates', 'What a Successful Pipeline Run Does Not Prove'] },
  { category: 'Cloud Engineering', titles: ['Building a Progressive Delivery Platform on Amazon EKS', 'What I Learned from an Argo Rollouts Failure', 'Testing Rollback Before Calling a Deployment Strategy Reliable'] },
  { category: 'Bioinformatics', titles: ['Applying Data Engineering Principles to Bioinformatics Workflows', 'Designing a Provenance-Aware Variant Prioritisation Pipeline', 'Candidate Prioritisation Is Not Experimental Validation'] },
  { category: 'Open Source', titles: ['Contributing to nf-core/modules: Tests, Metadata and Ontologies', 'How I Scope an Open-Source Contribution Before Writing Code', 'Developing Regression Tests for Pydantic Settings'] },
];
