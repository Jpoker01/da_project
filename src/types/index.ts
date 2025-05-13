export interface FactRequest {
  category: string;
  country: string;
  timeFrame: string;
}

export interface FactResponse {
  title: string;
  description: string;
  date: string;
}

export const categories = [
  'Války a konflikty',
  'Vědecké objevy',
  'Kulturní události',
  'Politické události',
  'Technologický pokrok',
  'Sociální změny'
];

export const timeFrames = [
  'Den',
  'Týden',
  'Měsíc',
  'Rok',
  'Desetiletí',
  'Století'
];

export const countries = [
  'Česká republika',
  'Slovensko',
  'Německo',
  'Francie',
  'Velká Británie',
  'USA',
  'Rusko',
  'Čína',
  'Japonsko',
  'Itálie'
]; 