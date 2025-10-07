import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import { HiDesktopComputer } from 'react-icons/hi';
import { BiDna } from 'react-icons/bi';
import { CgListTree, CgPill } from 'react-icons/cg';
import { SiElasticstack } from 'react-icons/si';
import {
  FaGlobeAfrica,
  FaDatabase,
  FaFlask,
  FaClock,
  FaHospital,
  FaProjectDiagram,
  FaUsers,
} from 'react-icons/fa';
import { IoIosGitNetwork } from 'react-icons/io';

const ToolEntry = ({ tool }) => (
  <a
    href={tool.url}
    className="flex items-start gap-4 rounded-2xl border border-slate-200/70 bg-white/70 px-5 py-4 transition hover:border-blue-300 hover:bg-blue-50/60"
  >
    <span className="text-2xl text-blue-500">{tool.icon}</span>
    <div>
      <h3 className="text-base font-semibold text-slate-900">{tool.name}</h3>
      <p className="mt-1 text-sm text-slate-600">{tool.desc}</p>
    </div>
  </a>
);

const sections = [
  {
    title: 'Flagship tools',
    intro:
      'These are the tools that anchor much of our ongoing work, built to help researchers explore complex genomic datasets at scale.',
    items: [
      {
        name: 'Taxonium',
        url: '//taxonium.org',
        desc: 'A high-performance phylogenetic tree explorer that lets users visualise millions of sequences with rich metadata overlays.',
        icon: <CgListTree />,
      },
      {
        name: 'Gensplore',
        url: '//gensplore.theo.io',
        desc: 'An interactive browser for microbial reference genomes, combining GenBank annotations with intuitive filtering and search.',
        icon: <BiDna />,
      },
      {
        name: 'DeeperSeq',
        url: '//deeperseq.genomium.org',
        desc: 'A toolkit for interrogating deep sequencing datasets, highlighting within-host diversity and rare variants across genomes.',
        icon: <SiElasticstack />,
      },
    ],
  },
  {
    title: 'Supplemental tools',
    intro:
      'Utilities that complement our flagship projects by addressing specific analytical or visualisation challenges encountered in the lab.',
    items: [
      {
        name: 'CovGlobe',
        url: '//covglobe.org',
        desc: 'Maps SARS-CoV-2 lineages and their defining mutations onto an interactive globe for rapid geospatial interpretation.',
        icon: <FaGlobeAfrica />,
      },
      {
        name: 'Codon2Nucleotide',
        url: '//codon2nucleotide.theo.io',
        desc: 'Converts between genomic and protein coordinates, including ORF1ab/ORF1a/ORF1b frames and nsp boundaries for SARS-CoV-2.',
        icon: <HiDesktopComputer />,
      },
      {
        name: 'PhenoPlasm',
        url: 'http://phenoplasm.org',
        desc: 'Aggregates published phenotypes for malaria parasite genes, making it easy to cross-reference experimental findings.',
        icon: <FaDatabase />,
      },
      {
        name: 'Chronumental',
        url: '//github.com/theosanderson/chronumental',
        desc: 'An installable command-line tool that rapidly dates very large phylogenetic trees using scalable stochastic optimisation.',
        icon: <FaClock />,
      },
    ],
  },
  {
    title: 'Bonus tools',
    intro:
      'Smaller experiments and niche applications that have proven useful to collaborators, clinicians, and the wider community.',
    items: [
      {
        name: 'Mixology',
        url: '//mixology.science',
        desc: 'Calculates precise laboratory solution recipes, adjusting for stock concentrations and desired final volumes.',
        icon: <FaFlask />,
      },
      {
        name: 'Hospital Medicines',
        url: '//hospitalmedicines.genomium.org',
        desc: "Explores England’s hospital medicine usage data with filters for indications, trusts, and time periods.",
        icon: <FaHospital />,
      },
      {
        name: 'Lineage networks',
        url: '//lineage-networks.genomium.org/',
        desc: 'Visualises similarities and differences between PANGO lineages, highlighting shared mutations and related clusters.',
        icon: <IoIosGitNetwork />,
      },
      {
        name: 'Molnupiravir branch identification helper',
        url: '//movbranchapp.streamlit.app/',
        desc: 'Estimates the likelihood that a tree branch originated from molnupiravir treatment using nucleotide context patterns.',
        icon: <CgPill />,
      },
    ],
  },
  {
    title: 'Collaborations',
    intro:
      'We actively contribute to broader community efforts, lending expertise and development time to projects led by partners.',
    items: [
      {
        name: 'Pathoplexus',
        url: 'https://pathoplexus.org',
        desc: 'A collaborative pathogen genomics platform where we co-develop infrastructure for data sharing, curation, and analysis.',
        icon: <FaProjectDiagram />,
      },
      {
        name: 'Loculus',
        url: 'https://loculus.org',
        desc: 'An open collaboration advancing tools for contextualising pathogen evolution, with Sanderson Lab contributing visual analytics.',
        icon: <FaUsers />,
      },
    ],
  },
];

const Genomium = () => (
  <Layout>
    <Head>
      <title>Genomium Tools - Sanderson Lab</title>
      <meta
        name="description"
        content="Explore Genomium tools and collaborations for microbial genome analysis and infectious disease research."
      />
    </Head>
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="space-y-12 rounded-3xl bg-white px-6 py-10 shadow-2xl shadow-slate-200/60 ring-1 ring-slate-900/10 sm:px-10 sm:py-12">
        <header className="space-y-3 text-slate-900">
          <h1 className="text-3xl font-bold">Tools</h1>
          <p className="text-base text-slate-600">
            A curated overview of the software, utilities, and collaborations driven by the Sanderson Lab to support infectious
            disease research and genomic surveillance.
          </p>
        </header>

        {sections.map((section, sectionIdx) => (
          <section key={section.title} className={sectionIdx === 0 ? 'space-y-4' : 'space-y-4 border-t border-slate-200 pt-8'}>
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold text-slate-800">{section.title}</h2>
              <p className="text-sm text-slate-600">{section.intro}</p>
            </div>
            <div className="space-y-3">
              {section.items.map((tool) => (
                <ToolEntry key={tool.name} tool={tool} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  </Layout>
);

Genomium.getLayout = function getLayout(page) {
  return <Layout showBackground={false}>{page}</Layout>;
};

export default Genomium;
