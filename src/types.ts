/** Explicit project schema — Phase 5 */
export type ProjectVisual = {
  /** diagram key rendered by ArchDiagram */
  diagram: 'supplyshield' | 'delivery' | 'ecm' | 'fraud';
  alt: string;
};

export type Project = {
  number: string;
  slug: string;
  category: string;
  title: string;
  /** one-line business outcome, shown above the summary */
  outcome: string;
  summary: string;
  description: string;
  evidence: string[];
  technology: string[];
  status: string;
  /** only ECM carries a scope statement */
  scope?: string;
  visual: ProjectVisual;
  /** null until the case study page exists — never a broken link */
  caseStudyUrl: string | null;
  /** verified against the live repository list */
  sourceUrl: string;
  lead?: boolean;
};
