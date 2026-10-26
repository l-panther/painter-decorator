
export interface Service {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  image?: string;
  description: string;
  overview: string;
  includes: string[];
  approach: string;
}

export const services: Service[] = [
  {
    id: 'interior',
    title: 'Interior Painting',
    subtitle: 'Walls, ceilings and woodwork',
    icon: 'bi-house-door',
    image: 'images/services/interior.webp',
    description:
      'Walls, ceilings, woodwork and doors, with furniture covered and floors protected.',

    overview:
      'Refresh your living spaces with carefully prepared surfaces and a clean, professional finish. From individual rooms to larger interior decorating projects, attention is given to protecting your home and achieving a consistent result.',

    includes: [
      'Walls and ceilings',
      'Doors, frames and skirting boards',
      'Interior woodwork and trim',
      'Filling minor cracks and imperfections',
      'Sanding and surface preparation',
      'Protection of furniture and flooring',
    ],

    approach:
      'Surfaces are assessed and prepared before painting begins, with care taken around fixtures, fittings and adjoining surfaces. The aim is a smooth, even finish and a tidy working environment.',
  },
  {
    id: 'exterior',
    title: 'Exterior Painting',
    subtitle: 'Protecting and refreshing your property',
    icon: 'bi-building',
    image: 'images/services/exterior.webp',
    description:
      'Masonry, render, fascias and windows, prepared and sealed to cope with the weather.',

    overview:
      'Exterior decorating improves the appearance of your property while helping protect exposed surfaces from everyday weathering. Suitable preparation and appropriate coatings are important for achieving a durable finish.',

    includes: [
      'Exterior masonry and rendered walls',
      'Front doors and exterior woodwork',
      'Window frames and fascias',
      'Removal of loose or flaking paint',
      'Surface cleaning and preparation',
      'Priming and suitable exterior finishes',
    ],

    approach:
      'Exterior surfaces are checked for loose paint, weathering and other visible defects. Preparation and coating choices are matched to the condition of the surface and the requirements of the job.',
  },
  {
    id: 'commercial',
    title: 'Commercial Work',
    subtitle: 'Decorating business premises',
    icon: 'bi-shop',
    image: 'images/services/commercial.webp',
    description:
      'Offices, shops and communal areas, scheduled around your opening hours.',

    overview:
      'Painting and decorating services for commercial interiors and shared spaces, with an emphasis on clear communication, careful preparation and minimising unnecessary disruption.',

    includes: [
      'Offices and workspaces',
      'Retail and customer-facing areas',
      'Communal hallways and stairwells',
      'Walls, ceilings and woodwork',
      'Surface repairs and preparation',
      'Scheduling around access requirements',
    ],

    approach:
      'The work is planned around the space, its use and the agreed schedule. Working areas are protected where necessary, and attention is given to keeping the premises organised throughout the project.',
  },
  {
    id: 'preparation',
    title: 'Prep and Repairs',
    subtitle: 'The foundation of a lasting finish',
    icon: 'bi-brush',
    image: 'images/services/repairs.webp',
    description:
      'Filling, sanding, stain blocking and lining so the finish lasts.',

    overview:
      'A good decorating finish starts with properly prepared surfaces. Repairing imperfections and addressing damaged paintwork helps create a better foundation before the final coats are applied.',

    includes: [
      'Filling cracks and small holes',
      'Repairing minor surface damage',
      'Sanding uneven areas',
      'Removing loose and flaking paint',
      'Stain blocking where appropriate',
      'Priming and sealing prepared surfaces',
      'Lining walls where required',
    ],

    approach:
      'Existing surfaces are assessed to identify the preparation needed. Suitable repair and preparation methods are then used to improve the surface before decorating begins.',
  },
];
