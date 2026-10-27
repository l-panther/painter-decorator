export const site = {
  name: 'David williams',
  tagline: 'Painting & decorating contractor',
  phone: '1234 567890 ',
  email: 'email',
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
        'The wooden front door had become weathered, with deterioration to its existing finish. The surface was carefully sanded to remove the old coating, then prepared and primed in white before applying a grey paint finish. A protective lacquer was applied to complete the restoration, refreshing the door\'s appearance while preserving its original character and decorative features.',
      preparation: [
        'Assessment of the wooden door and deterioration of the existing finish',
        'Thorough sanding to remove the old lacquer and prepare the wood surface',
        'Application of white primer to provide a suitable base for painting',
        'Careful application of grey paint around panels, glazing and door furniture',
        'Application of a protective lacquer to seal and preserve the finished surface',
      ],
    finish:
        'A smooth, refreshed grey finish, completed with a protective lacquer to enhance durability while preserving the wooden door’s original character and decorative details.',
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
        'The interior walls had suffered water damage, resulting in deteriorated plaster and uneven surfaces. The project focused on repairing the affected areas, restoring the wall surfaces, and achieving a smooth, consistent finish that returned the room to a clean, well-maintained condition.',
      preparation: [
        'Assessment of water-damaged plaster and surrounding wall surfaces',
        'Removal of loose and deteriorated plaster from affected areas',
        'Repair and filling of damaged sections to restore the wall surface',
        'Sanding and smoothing repaired areas ready for decorating',
        'Application of primer where required, followed by repainting for a consistent finish',
      ],
      finish:
        'Water-damaged walls restored to a smooth, uniform finish, with repaired areas blending seamlessly into the surrounding surfaces and improving the overall appearance of the room.',
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
        'The ceiling had developed visible staining, mould and damp damage, particularly around the corner above the window, caused by defective guttering. The affected areas were thoroughly cleaned and treated with Watertite to seal the surface and prevent stains from bleeding through. The ceiling was then repainted to restore a clean, bright and consistent finish.',
     preparation: [
        'Assessment of mould, damp damage and staining caused by defective guttering',
        'Thorough cleaning of affected ceiling areas to remove mould and surface contamination',
        'Preparation of damaged surfaces ready for treatment',
        'Application of Watertite to seal the affected areas and prevent stain bleed-through',
        'Repainting of the ceiling to achieve a clean, consistent finish',
      ],
      finish:
        'A restored ceiling with mould and damp staining treated and concealed, finished with a fresh, uniform coat of paint to brighten the room and improve its overall appearance.',
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
      'The exterior masonry had become weathered and discoloured, while the decorative metal railings showed signs of rust and deterioration. The work involved restoring both surfaces through careful preparation, repairs and repainting to improve their appearance and provide lasting protection.',
    preparation: [
      'Assessment of weathered masonry and rust-affected metal railings',
      'Cleaning of masonry surfaces to remove dirt and surface contamination',
      'Filling and repairing damaged areas of masonry',
      'Application of stain-blocking treatment before repainting the masonry',
      'Scraping and removing loose paint and surface rust from the metal railings',
      'Priming the prepared metalwork before applying a fresh protective paint finish',
      'Repainting the masonry in white to achieve a clean, consistent appearance',
    ],
    finish:
      'Restored white masonry with a smooth, uniform finish, complemented by freshly painted black metal railings. The completed work refreshed the exterior appearance while helping protect both surfaces against further weathering.',
     },
    },
  {
    title: 'Interior Wall Repairs',
    place: 'Interior decorating',
    description:
      'Repairing damaged wall surfaces around existing fixtures.',
    type: 'slider',
    before: 'images/portfolio/bedroom2-before.webp',
    after: 'images/portfolio/bedroom2-after.webp',
    details: {
     overview:
      'The interior walls had areas of bubbling and flaking paint, particularly around the washbasin and wall-mounted fixtures. The windowsill also required attention due to deterioration of its existing finish. The project involved repairing the affected surfaces and repainting the entire room to restore a clean, consistent appearance.',
    preparation: [
      'Assessment of bubbling and flaking paint on walls and windowsill',
      'Scraping and removal of loose, deteriorating paint',
      'Filling and repairing damaged wall surfaces and windowsill',
      'Sanding and smoothing repaired areas ready for decorating',
      'Careful preparation and protection of existing fixtures and fittings',
      'Repainting the entire room, including the windowsill, to achieve a uniform finish',
    ],
    finish:
      'A fully refreshed interior with repaired wall surfaces, a restored windowsill and a clean, consistent paint finish throughout the room. The completed work improved the overall appearance while maintaining neat detailing around existing fixtures and fittings.',
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
        'The property required a complete interior repaint, including walls, skirting boards and surrounding woodwork. The work involved preparing and decorating the surfaces throughout the house to achieve a fresh, consistent appearance. The photograph captures one of the rooms nearing completion, with approximately 90% of the decorating work finished.',
    preparation: [
      'Protection of flooring and surrounding areas with dust sheets',
      'Assessment and preparation of walls, skirting boards and woodwork',
      'Filling and repairing minor surface imperfections where required',
      'Sanding and smoothing surfaces ready for repainting',
      'Careful painting of walls and detailed finishing around edges and fixtures',
      'Preparation and repainting of skirting boards and interior woodwork',
    ],
    finish:
      'A nearly completed room with freshly painted walls, skirting boards and woodwork, showing the progress of the wider house repainting project. The work brings a cleaner, brighter and more consistent appearance to the interior.',
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
    job: 'Management Feedback',
    text: "Thank you. You've done an excellent job."
  },
  {
    name: 'Site Supervisor',
    job: 'Site Feedback',
    text: "There's always good work happening when you're on site."
  },
  {
    name: 'Private Client',
    job: 'Client Feedback',
    text: "Really pleased with the work. Thank you!"
  }
];
