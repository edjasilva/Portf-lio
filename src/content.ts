export type NavItem = { label: string; href: string }
export type Service = { title: string; desc: string; bullets: string[] }
export type CaseStudy = { title: string; sector: string; impact: string; tags: string[] }

export const BRAND = {
  name: 'Sua Consultoria',
  tagline: 'Consultoria em tecnologia com foco em produto, performance e escala.',
  location: 'Lisboa • Remoto',
  email: 'contato@suaempresa.com',
} as const

export const NAV: NavItem[] = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Cases', href: '#cases' },
  { label: 'Processo', href: '#processo' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Contato', href: '#contato' },
]

export const SERVICES: Service[] = [
  {
    title: 'Estratégia & Arquitetura',
    desc: 'Decisões técnicas que reduzem risco e aumentam velocidade de entrega.',
    bullets: ['Arquitetura moderna', 'Observabilidade', 'Roadmap técnico'],
  },
  {
    title: 'Engenharia de Produto',
    desc: 'Experiências rápidas, acessíveis e com alta conversão.',
    bullets: ['React/Next', 'Design system', 'Performance & Core Web Vitals'],
  },
  {
    title: 'Dados & Automação',
    desc: 'Insights e fluxos automatizados para operar melhor e crescer.',
    bullets: ['Pipelines', 'Dashboards', 'Integrações & automações'],
  },
]

export const CASES: CaseStudy[] = [
  {
    title: 'Plataforma B2B com fluxo de onboarding',
    sector: 'SaaS',
    impact: '+27% ativação em 6 semanas',
    tags: ['React', 'UX', 'Analytics'],
  },
  {
    title: 'Migração gradual para arquitetura modular',
    sector: 'Fintech',
    impact: '-35% incidentes e deploy diário',
    tags: ['Arquitetura', 'Observabilidade', 'CI/CD'],
  },
  {
    title: 'Otimização de performance e bundle',
    sector: 'E-commerce',
    impact: '-42% TTFB / +18% conversão',
    tags: ['Performance', 'Vite', 'Web Vitals'],
  },
]

export const PROCESS = [
  {
    step: '01',
    title: 'Diagnóstico',
    desc: 'Entendemos objetivos, restrições, dados e contexto do time.',
  },
  {
    step: '02',
    title: 'Plano',
    desc: 'Definimos opções, riscos e uma sequência de entregas mensuráveis.',
  },
  {
    step: '03',
    title: 'Entrega',
    desc: 'Implementação com qualidade: testes, observabilidade e documentação.',
  },
  {
    step: '04',
    title: 'Evolução',
    desc: 'Acompanhamento e melhorias contínuas com metas claras.',
  },
] as const
