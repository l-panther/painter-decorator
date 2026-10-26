export const site = {
  name: 'Leroy Russell',
  tagline: 'Painting & decorating contractor',
  phone: '07737 672 064 ',
  email: 'leroy_rus@hotmail.com',
  area: 'Central London and surrounding areas',
  hours: 'Mon–Fri 8am–6pm, Sat 9am–1pm',
  role: 'Painter & decorator'
};

export const services = [
  { icon: 'bi-house-door', title: 'Interior painting', text: 'Walls, ceilings, woodwork and doors, with furniture covered and floors protected.' },
  { icon: 'bi-building', title: 'Exterior painting', text: 'Masonry, render, fascias and windows, prepared and sealed to cope with the weather.' },
  { icon: 'bi-shop', title: 'Commercial work', text: 'Offices, shops and communal areas, scheduled around your opening hours.' },
  { icon: 'bi-brush', title: 'Prep and repairs', text: 'Filling, sanding, stain blocking and lining so the finish lasts.' },
];

export interface Project {
  title: string;
  place: string;
  description: string;
  type: 'static' | 'slider' | 'single';
  before?: string;
  after?: string;
  image?: string;
  videos?: {
    before: string;
    after: string;
    enabled: boolean;
  };
  details?: {
    overview: string;
    preparation?: string[];
    finish?: string;
  };
}


export const projects = [
  {
    title: 'Front Door Repainting',
    place: 'Exterior woodwork',
    description:
      'Preparing and repainting a weathered front door.',
    type: 'slider',
    before: 'images/portfolio/door-before.webp',
    after: 'images/portfolio/door-after.webp',

    details: {
      overview:
        'The front door had a worn, weathered appearance, with deterioration to the existing dark finish. The project focused on refreshing the door while retaining its original character and decorative features.',

      preparation: [
        'Assessment of the existing paintwork and surface condition',
        'Preparation of worn areas to improve the finish',
        'Careful repainting around panels, glazing and door furniture',
      ],

      finish:
        'A clean white finish that brightens the entrance and gives the door a refreshed, well-maintained appearance.',
    },
  },
  {
    title: 'Interior Wall Restoration',
    place: 'Surface preparation',
    description:
      'Repairing damaged plaster and restoring interior walls.',
    type: 'static',
    before: 'images/portfolio/bedroom1-before.webp',
    after: 'images/portfolio/bedroom1-after.webp',

    videos: {
      before: 'videos/portfolio/walkthrough-before.mp4',
      after: 'videos/portfolio/walkthrough-after.mp4',
      enabled: false,
    },

    details: {
      overview:
        'The interior walls showed areas of damaged and deteriorating plaster, leaving an uneven surface. The aim was to restore the affected areas and create a smooth, consistent appearance throughout.',

      preparation: [
        'Assessment of damaged plaster and existing wall surfaces',
        'Preparation and repair of affected areas',
        'Smoothing surfaces ready for decorating',
        'Repainting to achieve an even finish',
      ],

      finish:
        'Restored walls with a clean, uniform finish, improving the overall appearance of the room.',
    },
  },
  {
    title: 'Ceiling Restoration',
    place: 'Ceiling decorating',
    description:
      'Preparing and repainting a stained ceiling.',
    type: 'static',
    before: 'images/portfolio/ceiling-before.webp',
    after: 'images/portfolio/ceiling-after.webp',

    details: {
      overview:
        'The ceiling had visible staining and discolouration, particularly around the corner above the window. The decorating work focused on improving the affected surface and restoring a brighter, more consistent appearance.',

      preparation: [
        'Inspection of visible staining and surface condition',
        'Preparation of affected ceiling areas',
        'Application of a fresh decorative finish',
      ],

      finish:
        'A cleaner, brighter ceiling with a more uniform appearance, helping the room feel refreshed and well maintained.',
    },
  },
  {
    title: 'Exterior Masonry Restoration',
    place: 'Exterior painting',
    description:
      'Preparing and repainting weathered exterior masonry.',
    type: 'static',
    before: 'images/portfolio/external-before.webp',
    after: 'images/portfolio/external-after.webp',

    details: {
      overview:
        'The existing exterior masonry had become weathered and discoloured. The work focused on improving the appearance of the wall beneath the decorative metal railings.',

      preparation: [
        'Assessment of the existing masonry surface',
        'Surface preparation prior to repainting',
        'Application of a fresh white finish',
      ],

      finish:
        'A brighter, more consistent appearance that complements the existing black metal railings.',
    },
  },
  {
    title: 'Interior Wall Repairs',
    place: 'Interior decorating',
    description:
      'Repairing damaged wall surfaces around existing fixtures.',
    type: 'static',
    before: 'images/portfolio/bedroom2-before.webp',
    after: 'images/portfolio/bedroom2-after.webp',

    details: {
      overview:
        'Several areas of the interior walls had peeling paint and damaged surfaces, particularly around the washbasin and wall-mounted fixtures. The project focused on restoring these areas while maintaining a tidy finish around the existing fittings.',

      preparation: [
        'Preparation of peeling and damaged wall surfaces',
        'Repair and smoothing of affected areas',
        'Careful decorating around existing fixtures and fittings',
        'Repainting to achieve a consistent appearance',
      ],

      finish:
        'A refreshed interior with smoother, more consistent wall surfaces and a cleaner appearance around the existing fixtures.',
    },
  },
  {
    title: 'Room Painting & Preparation',
    place: 'Work in progress',
    description:
      'Protecting flooring and surrounding surfaces during decorating.',
    type: 'single',
    image: 'images/portfolio/room-process1.webp',

    details: {
      overview:
        'This project photograph highlights the preparation and painting stage of an interior decorating job. Protecting the surrounding space and organising materials are important parts of carrying out decorating work carefully and efficiently.',

      preparation: [
        'Protecting flooring with dust sheets',
        'Organising painting tools and materials',
        'Preparing the room for decorating work',
        'Carrying out interior painting with attention to surrounding surfaces',
      ],

      finish:
        'A view of the decorating process, demonstrating the care taken to protect the working area while painting is underway.',
    },
  },
] satisfies Project[];

export const serviceOptions = ['Interior painting', 'Exterior painting', 'Commercial work', 'Prep and repairs', 'Something else'];

export const reasons = [
  {
    icon: 'bi-tools',
    title: 'Proper Preparation',
    text: 'From filling and sanding to preparing surfaces, I take the time to get the foundations right before painting begins.'
  },
  {
    icon: 'bi-brush',
    title: 'Attention to Detail',
    text: 'Careful cutting-in, even coverage and tidy finishing touches help achieve a clean, professional result.'
  },
  {
    icon: 'bi-house-check',
    title: 'Respect for Your Space',
    text: 'I aim to keep work areas organised, protect surrounding surfaces and minimise disruption wherever possible.'
  },
  {
    icon: 'bi-chat-dots',
    title: 'Personal Approach',
    text: 'You deal directly with me, with straightforward communication and a shared understanding of the work involved.'
  }
];

// Placeholder reviews. Replace with real customer comments.
export const feedback = [
  {
    name: 'University Management',
    job: 'Professional Feedback',
    text: "Thank you. You're amazing."
  },
  {
    name: 'Site Supervisor',
    job: 'Professional Feedback',
    text: "There's always good things happening when you are on site."
  },
  {
    name: 'Mum',
    job: 'Personal Feedback',
    text: "You're the best!"
  }
];
