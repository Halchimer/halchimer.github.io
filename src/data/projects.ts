export const categories = [
  'game',
  'audio',
  'engine',
  'tool',
  'art'
] as const
export type ProjectCategory = typeof categories[number]

export interface Project {
  slug: string
  title: string
  description: string
  image?: string
  link?: string
  skills?: string[]
  categories : ProjectCategory[]
}

export const projects: Project[] = [
  {
    slug: 'doomlike-engine',
    title: 'C23 Doomlike Engine',
    description: 'A tiny doom-like game engine written in C, featuring an ECS, a software renderer, baked lighting and a custom level file format.',
    image: '/project_medias/doomlike/doomlike_lighting_b.png',
    link: '/',
    skills: [
        'C23',
        'SDL',
        'Engine architecture',
        'Multithreading',
        'Graphics programming',
        'Memory management'
    ],
    categories : ['engine']
  },
  {
    slug: 'pas',
    title: 'PAS',
    description: 'A small game i made in C# using SFML for a school exercise at Enjmin.',
    image: '/project_medias/pas/pas_minia.png',
    link: '/',
    skills: [
        'C#',
        'SFML',
        'Pixel art & Animation',
        'Team work'
    ],
    categories : ['game', 'art']
  },
  {
    slug: 'naguere',
    title: 'Naguère',
    description: 'A City builder game made in unity for a school project at Enjmin.',
    image: '/project_medias/naguere/naguere3.png',
    link: '/',
    skills: [
        'Unity',
        'C#',
        'Job System',
        'Algorithmy',
        'Team work'
    ],
    categories : ['game', 'art']
  },
  {
    slug: 'dollipop',
    title: 'Dollipop Chainsaw',
    description: 'Our submission for the 2024 minijam, which theme was "clean".',
    image: '/project_medias/dollipop/dollipop.png',
    link: '/',
    skills: [
        'Unity',
        'C#',
        'Pixel art',
        'Team work'
    ],
    categories : ['game', 'art']
  },
  {
    slug: 'trickster',
    title: 'Trickster',
    description: 'Our submission for the 2024 Enjam, the game jam of the school i was at the time.',
    image: '/project_medias/trickster/trickster.jpg',
    link: '/',
    skills: [
        'Unity',
        'C#',
        'Fmod',
        'Sound design',
        'Music'
    ],
    categories : ['game', 'audio']
  },
  {
    slug: 'dobbs',
    title: 'Dobbs Engine',
    description: 'A flexible 3D game engine written in D, featuring an archetype-based ECS and (one day) a custom functionnal scripting language.',
    image: '/project_medias/dobbs/dobbs.png',
    link: '/',
    skills: [
        'D',
        'Engine architecture',
        'Multithreading',
        'Graphics programming',
        'OpenGL','Vulkan',
        'Networking'
    ],
    categories : ['engine']
  },
  {
    slug: 'osc8',
    title: 'OSC8',
    description: 'A node based sound creation library and its editor, OSC8Lab, written in C++',
    image: '/project_medias/osc8/osc8.png',
    link: '/',
    skills: [
        'C++',
        'Raylib',
        'Sound manipulation',
        'App architecture'
    ],
    categories : ['tool', 'audio']
  },
  {
    slug: 'picotest',
    title: 'Picotest',
    description: 'C lightweight unit tests single header library',
    image: '/project_medias/picotest/picotest.png',
    link: '/',
    skills: [
        'C'
    ],
    categories : ['tool']
  },
  {
    slug: 'music',
    title: 'My Music',
    description: 'Link to a page with all my music work',
    link: '/',
    categories : ['audio', 'art']
  },
  {
    slug: 'art',
    title: 'My Art',
    description: 'Everything ranging from drawing to 3D modeling.',
    link: '/myart',
    categories : ['art']
  },
]