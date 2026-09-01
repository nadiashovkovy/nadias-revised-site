// Project catalogue for the Projects section.
// `variant`: "featured" renders as a large two-column editorial block; "standard"
// renders in the responsive grid; "wip" renders in the Works-in-progress row.
// `image` is an optional cover in /public/images — cards without one render a
// typographic cover instead, so a missing screenshot is a deliberate style, not a gap.
// `outcome` is the one-line result shown in the card header (recruiter-scannable).
// `tags` power the filter row; keep them from the shared vocabulary below.

export const FILTERS = ['All', 'AI / ML', 'Web', 'Mobile', 'Research', 'Community'];

const projects = [
  {
    id: 'careascension',
    title: 'CareAscension',
    variant: 'featured',
    image: 'images/careascension.webp',
    tags: ['Web', 'Community'],
    stack: ['React', 'TypeScript', 'Fastify', 'PostgreSQL', 'Prisma', 'AWS Lambda'],
    role: 'Technical Lead · ASU Luminosity Lab',
    outcome: 'Live with the City of Phoenix and local shelters',
    blurb:
      'Real-time shelter bed-tracking platform that connects outreach navigators, shelter staff, and city partners so people seeking shelter get placed faster.',
    details:
      "Built at ASU's Luminosity Lab with the City of Phoenix and local shelters. A React + TypeScript dashboard (beds, check-ins, reports, shifts, alerts) runs on a Fastify/PostgreSQL API with Prisma and JWT auth, live bed-status sync, multi-shelter support, and queue-backed SMS alerts for new reservation requests, deployed on AWS Lambda.",
    links: [{ label: 'Live site', href: 'https://www.careascension.com/' }],
  },
  {
    id: 'storysprout',
    title: 'StorySprout',
    variant: 'featured',
    image: 'images/story-sprout.png',
    tags: ['AI / ML', 'Web'],
    stack: ['React', 'TypeScript', 'Claude Sonnet 4', 'Stable Diffusion', 'ElevenLabs'],
    role: 'Solo build · ASU SunHacks 2025',
    outcome: 'Solo build shipped at SunHacks 2025',
    blurb:
      'Inclusive, adaptive AI storytelling site that makes every child the hero — reflecting their identity, abilities, and imagination.',
    details:
      "Built for ASU's 2025 SunHacks Hackathon as a React app (TypeScript + CSS). Claude Sonnet 4 generates the personalized stories, Stable Diffusion creates the illustrations, and the ElevenLabs API handles text-to-speech narration.",
    links: [
      { label: 'Live site', href: 'https://story-sprout.netlify.app/' },
      { label: 'Code', href: 'https://github.com/nadiashovkovy/Story-Sprout' },
    ],
  },
  {
    id: 'volunteen',
    title: 'VolunTeen',
    variant: 'standard',
    image: 'images/VolunTeen.png',
    tags: ['Mobile'],
    stack: ['Swift', 'SwiftUI', 'Xcode', 'Firebase'],
    role: 'Solo build',
    outcome: 'First iOS app — built from zero Swift',
    blurb:
      'iOS app connecting high school students with volunteering events near them — auth, search, real in-app messaging, maps, and profiles.',
    details:
      'Firebase integration provides reliable user authentication. The app has home, search, chat (real in-app messaging), map, and profile views. I started VolunTeen with no prior Swift or SwiftUI knowledge — it was a steep, rewarding learning curve of dozens of hours of tutorials and iteration.',
    links: [
      { label: 'Video', href: 'https://youtu.be/DiOY3Yxt-EM?feature=shared' },
      { label: 'Code', href: 'https://github.com/nadiashovkovy/VolunTeen_AZ' },
    ],
  },
  {
    id: 'withkip',
    title: 'WithKiP',
    variant: 'featured',
    image: 'images/withkip.webp',
    tags: ['AI / ML', 'Web'],
    stack: ['React', 'TypeScript', 'Three.js', 'OpenAI', 'Stripe', 'Express', 'MongoDB'],
    role: 'Team build · ASU Luminosity Lab',
    outcome: 'Commerce and learning platform site for KiP Robotics',
    blurb:
      'Marketing and commerce site for KiP Robotics — a 3D-printable robot companion that teaches kids programming through interactive block-coding lessons and an AI coding buddy.',
    details:
      "Built at ASU's Luminosity Lab for the Spring 2026 launch. A React + TypeScript + Vite front end with shadcn/ui, a Three.js robot preview, an OpenAI-powered coding companion, and Stripe kit pre-orders, backed by an Express/MongoDB API with JWT and Google auth.",
    links: [{ label: 'Live site', href: 'https://www.withkip.com/' }],
  },
  {
    id: 'eco-iq',
    title: 'Eco-IQ',
    variant: 'standard',
    image: 'images/eco-iq.webp',
    tags: ['AI / ML', 'Web'],
    stack: ['React', 'Python', 'OpenAI GPT-4', 'Render', 'Netlify'],
    role: 'Solo build · Hackathon',
    outcome: 'Scores a business model 1–100 on sustainability',
    blurb:
      'AI-powered tool that scores the sustainability of a business model across environmental impact, operations, and supply chain.',
    details:
      'Using GPT-4, Eco-IQ generates a comprehensive sustainability score from 1–100 and highlights a company’s strengths and weaknesses. Built with React (JavaScript, Python, CSS), deployed with Render for the backend and Netlify for the frontend, with a self-managed OpenAI API integration.',
    links: [
      { label: 'Overview', href: 'https://nadiashovkovy.github.io/eco-iq-site/' },
      { label: 'Live demo', href: 'https://eco-iq.netlify.app/' },
      { label: 'Video', href: 'https://youtu.be/gbt07IEEAIY?feature=shared' },
      { label: 'Code', href: 'https://github.com/nadiashovkovy/eco-iq' },
    ],
  },
  {
    id: 'mask-rcnn',
    title: 'Transfer Learning with Mask R-CNN',
    variant: 'standard',
    image: 'images/maskrcnn.png',
    tags: ['AI / ML', 'Research'],
    stack: ['PyTorch', 'Google Colab', 'COCO 2017'],
    role: 'Honors research',
    outcome: '2nd place, district science fair',
    blurb:
      'Research on how Mask R-CNN differs from other object detectors, plus hands-on transfer learning for instance segmentation.',
    details:
      'Performed transfer learning on a Mask R-CNN pre-trained on COCO 2017 using PyTorch in Google Colab. The model produced highly precise borders, masks, and bounding boxes. Built for my Honors Research class as my introduction to AI; placed second in my district’s science fair.',
    links: [
      {
        label: 'Poster',
        href: 'https://docs.google.com/presentation/d/1CcjcqhZQZ-sD7np40zYBHHCXuLbPojKV/edit?usp=sharing&ouid=114431329760915144189&rtpof=true&sd=true',
      },
      {
        label: 'Code',
        href: 'https://colab.research.google.com/drive/1JkGjOoxuPw9uFBMJsBpK7EFeSgKrJioR?usp=sharing',
      },
    ],
  },
  {
    id: 'thryve',
    title: 'Thryve',
    variant: 'standard',
    image: 'images/Thryve.png',
    tags: ['Web'],
    stack: ['Figma', 'Product design'],
    role: 'Concept, design & pitch · FSE 301',
    outcome: 'Concept & pitch for FSE 301',
    blurb:
      'A professional social network built around diverse communities, designed to create visibility and engagement for people underrepresented in tech.',
    details:
      "Started while taking ASU's Entrepreneurship & Value Creation course (FSE 301). As a woman in computer science, I often feel like an outsider on existing professional networks — Thryve is my answer to that.",
    links: [{ label: 'Pitch video', href: 'https://youtu.be/YhzVh7qH5Qc' }],
  },
  {
    id: 'kids-in-tech',
    title: 'Kids in Tech Arizona',
    variant: 'standard',
    image: 'images/kidsintech.png',
    tags: ['Community'],
    stack: ['Webflow', 'Curriculum design'],
    role: 'Founder',
    outcome: 'Founded 2022 · 150+ volunteer hours',
    blurb:
      'A volunteering organization I founded in 2022 to teach engineering and coding at elementary schools.',
    details:
      'Designed and organized workshops on block coding, robotics, and Girls in Tech initiatives, spearheaded a school’s First Lego League Explore team, and built the organization’s website. Reached hundreds of students.',
    links: [{ label: 'Live site', href: 'https://kidsintech-arizona.webflow.io/' }],
  },
  {
    id: 'totally-tech',
    title: 'Totally Tech',
    variant: 'wip',
    tags: ['AI / ML', 'Community'],
    stack: ['AI / ML', 'Cybersecurity'],
    role: 'In progress',
    blurb:
      'A space for women in tech to share stories about the issues that matter to them, building supportive networks that help them lead in the field.',
    details: '',
    links: [{ label: 'Code', href: 'https://github.com/nadiashovkovy/totally-tech' }],
  },
  {
    id: 'ichigo',
    title: 'Ichigo',
    variant: 'wip',
    tags: ['Research'],
    stack: ['Unity', 'C#'],
    role: 'In progress',
    blurb:
      'Recreating the fictional game "Ichigo" from Gabrielle Zevin’s "Tomorrow, and Tomorrow, and Tomorrow" in Unity.',
    details: '',
    links: [{ label: 'Code', href: 'https://github.com/nadiashovkovy' }],
  },
];

export default projects;
