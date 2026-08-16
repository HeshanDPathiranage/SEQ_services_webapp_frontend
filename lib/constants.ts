export type Service = {
  slug: string;
  title: string;
  description: string;
  content: string;
};

export const services: Service[] = [
  {
    slug: 'facility-management',
    title: 'Facility management',
    description: 'Comprehensive cleaning and maintenance for commercial facilities.',
    content: 'SEQ Services provides planned cleaning, hygiene management and site support to keep your building operating efficiently.',
  },
  {
    slug: 'construction-cleaning',
    title: 'Construction cleaning',
    description: 'Final cleans and construction site cleaning to hand over projects on time.',
    content: 'Our construction cleaning teams clear waste, polish surfaces and prepare sites for clients, handover and inspection.',
  },
];

export const cities = [
  {
    slug: 'brisbane',
    name: 'Brisbane',
    description: 'Commercial cleaning and facility management in Brisbane and nearby suburbs.',
  },
  {
    slug: 'gold-coast',
    name: 'Gold Coast',
    description: 'Local cleaning and management services for Gold Coast businesses and builders.',
  },
];
