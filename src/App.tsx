
import { useState, useEffect, type ReactNode } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  Code2,
  Mail,
  Phone,
  Download,
  ChevronLeft,
  ChevronRight,
  Menu,
  MapPin,
  X
} from 'lucide-react';

// --- TYPES ---

type ViewState = {
  name: string;
  section?: string | null;
  id?: string;
};

type Project = {
  id: string;
  title: string;
  category: string;
  year: string;
  coverImage: string;
  thumbnail: string;
  shortDesc: string;
  github?: string;
    figma?: string;
  overview: {
    background: string;
    objectives: string;
    concept: string;
    challenge: string;
  };
  role: string[];
  focus: string;
  process: Record<string, string>;
  direction: Record<string, string>;
  showcase: string[];
  reflection: {
    learned: string;
    challenges: string;
    future?: string;
    skills?: string;
  };
  tools: string[];
  platform: string;
};

// --- DATA ---

const SKILLS = [
  {
    category: "UX/UI Design",
    items: [
      "User Interface Design",
      "Wireframing",
      "Prototyping",
      "Persona Development",
      "User Journey Mapping",
      "Heuristic Evaluation",
      "Usability Testing",
      "A/B Testing"
    ]
  },
  {
    category: "Web Design & Development",
    items: [
      "Website Design",
      "Responsive Web Design",
      "Frontend Development",
      "HTML / CSS / PHP"
    ]
  },
  {
    category: "Graphic & Visual Design",
    items: [
      "Poster Design",
      "Banner Design",
      "Editorial Design",
      "Visual Communication",
      "Layout Design",
      "Typography"
    ]
  },
  {
    category: "Design & Development Tools",
    items: [
      "Figma",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Adobe XD"
    ]
  }
];

const PROJECTS: Project[] = [
  {
    id: 'beauty-clinic',
    title: 'Beauty Clinic Website Banner',
    category: 'WordPress / Web Design / Graphic Design',
    year: 'November 2024 – February 2025',
    coverImage: "/images/banner1.png",
    thumbnail: "/images/banner2.png",
    shortDesc: 'A comprehensive beauty clinic website designed to enhance customer experience and showcase services.',
    overview: {
      background: 'The beauty clinic needed a modern online presence to attract new clients and provide clear information about their services and products.',
      objectives: 'To create an elegant, user-friendly website that reflects the clinic\'s brand identity and incorporates promotional elements seamlessly.',
      concept: 'A clean, sophisticated design with high-quality visuals and intuitive navigation to guide users toward booking or product discovery.',
      challenge: 'Balancing the aesthetic appeal of a beauty brand with the practical necessity of displaying detailed service information and promotional banners.'
    },
    role: [
      'Served as the Head of Design.',
      'Led the website page design.',
      'Designed product advertising banners for the clinic\'s products and services.',
      'Created promotional visuals to be displayed on the website.'
    ],
    focus: 'Website visual design, promotional graphics, and dashboard presentation (visual layout).',
    process: {
      research: 'Analyzed competitor beauty clinic websites and identified key visual trends in the aesthetics industry.',
      exploration: 'Developed several mood boards focusing on luxury, cleanliness, and approachability.'
    },
    direction: {
      colors: 'Soft pastels combined with clean whites and sophisticated dark accents to convey elegance.',
      typography: 'A mix of elegant serif for headings and clean sans-serif for readable body copy.',
      inspiration: 'High-end cosmetic brands and modern wellness centers.'
    },
    showcase: [
      "/images/banner1.png",
      "/images/banner2.png",
      "/images/banner6.png"
    ],
    reflection: {
      learned: 'Gained significant experience in leading a design project and translating brand identity into web pages and promotional graphics.',
      challenges: 'Ensuring consistency across diverse promotional banners while maintaining the overall clean website aesthetic.',
      future: 'Would like to explore more interactive elements for showcasing before-and-after service results.'
    },
    tools: ['WordPress', 'Adobe Photoshop', 'Figma'],
    platform: 'Web'
  },
  {
    id: 'flower-knows',
    title: 'Flower Knows Website Redesign',
    category: 'UX/UI Design / Responsive Web Design',
    year: 'July 2025 – October 2025',
    coverImage: "/images/FlowerKnows1.png",
    thumbnail: "/images/FlowerKnows1.png",
    shortDesc: 'A conceptual responsive e-commerce redesign inspired by Korean cosmetics aesthetics.',
    github: 'https://github.com/ichiniran/flowerknows-website-redesign',
    overview: {
      background: 'An academic project aimed at reimagining the e-commerce experience for a visually striking cosmetics brand.',
      objectives: 'To create an attractive, highly responsive e-commerce platform that adapts flawlessly to different screen sizes while highlighting the ornate product packaging.',
      concept: 'Inspired by the Korean brand AOU, the design focuses on immersive product presentation and a seamless shopping journey.',
      challenge: 'Managing the heavy visual assets of the brand without compromising website performance and layout clarity.'
    },
    role: [
      'Participated in UX/UI website design.',
      'Designed the product slider section.',
      'Worked on the visual layout and product presentation.',
      'Supported responsive design for desktop, tablet, and mobile.'
    ],
    focus: 'Visual design, product presentation, and responsive web layouts.',
    process: {
      wireframes: 'Created low-fidelity wireframes to establish the structural hierarchy before applying the elaborate brand visuals.',
      testing: 'Tested responsive breakpoints to ensure the product slider remained functional and visually appealing on mobile devices.'
    },
    direction: {
      colors: 'Vintage-inspired pastels to match the brand\'s signature packaging.',
      typography: 'Decorative serifs paired with highly legible sans-serif for product details.',
      layout: 'Grid-based product galleries with a distinctive, custom-designed slider component.'
    },
    showcase: [
      "/images/FlowerKnows4.png",
      "/images/FlowerKnows3.png",
      "/images/FlowerKnows2.png"
    ],
    reflection: {
      learned: 'Deepened my understanding of responsive design principles and how to handle complex interactive components like sliders across devices.',
      challenges: 'Translating highly decorative brand elements into a clean, usable UI without making it feel cluttered.',
      future: 'Implementing micro-interactions for adding items to the cart.'
    },
    tools: ['Figma', 'HTML', 'CSS', 'JavaScript'],
    platform: 'Responsive Web'
  },
  {
    id: 'sut-technopolis',
    title: 'SUT Technopolis Website Redesign',
    figma: 'https://www.figma.com/design/pwwNuQVCtSJJhlO4kTYNJw/1101073?node-id=30-2&t=YwTawWicRKfn2Grv-1',
    category: 'UX Research / UX/UI Design / Website Redesign',
    year: 'November 2025 – February 2026',
    coverImage: "/images/sut-technopolis.png",
    thumbnail: "/images/sut-technopolis.png",
    shortDesc: 'A research-driven redesign for Suranaree University of Technology\'s Technopolis platform.',
    overview: {
      background: 'The existing SUT Technopolis website needed modernization to better serve its diverse user base of students, researchers, and external partners.',
      objectives: 'To improve usability, update the visual identity, and restructure information architecture based on solid UX research.',
      concept: 'A structured, professional, yet approachable institutional website that prioritizes user journeys and easy access to resources.',
      challenge: 'Catering to multiple distinct user personas with very different goals on the same platform.'
    },
    role: [
      'Assisted with website design.',
      'Contributed to color selection.',
      'Worked on spacing and layout consistency.',
      'Helped select suitable typography and fonts.',
      'Supported the overall visual direction of the redesigned website.'
    ],
    focus: 'User-centered design, visual consistency, and website redesign based on research insights.',
    process: {
      research: 'Conducted stakeholder interviews and analyzed existing site analytics to understand pain points.',
      journey: 'Developed multiple User Personas and Customer Journey Maps to outline the optimal paths for different user types.',
      exploration: 'Explored various visual directions to find a balance between academic professionalism and modern tech aesthetics.'
    },
    direction: {
      colors: 'Institutional trust colors (blues) modernized with vibrant accent colors for calls to action.',
      typography: 'Clean, modern sans-serif fonts optimized for readability and scanning heavy information.',
      ui: 'Card-based UI components for easy categorization of resources and news.'
    },
    showcase: [
      "/images/sut-technopolis.png",
      "/images/sut-technopolis2.png",
      "/images/sut-technopolis3.png"
    ],
    reflection: {
      learned: 'Gained valuable experience in applying theoretical UX research directly to UI design decisions.',
      challenges: 'Establishing a consistent design system that could handle various types of content gracefully.',
      future: 'Conducting post-launch usability testing to validate design decisions.'
    },
    tools: ['Figma', 'Miro (for mapping)'],
    platform: 'Web'
  },
  {
    id: 'book-exchange',
    title: 'Wonwan Book Marketplace & Exchange Platform',
    figma: 'https://www.figma.com/design/rdYrLN3MENyHOrrDO1UT0Q/1101910?node-id=17-2&t=QaENo6p8zeTDOvGQ-1',
    category: 'UX/UI Design / User Research',
    year: 'July 2026 – October 2026',
    coverImage: "/images/wonwan1 (2).png",
    thumbnail: "/images/wonwan1 (2).png",
    shortDesc: 'A comprehensive web platform for buying, selling, and exchanging books with AI integrations.',
    overview: {
      background: 'A large-scale academic project to build a full-stack platform addressing the needs of avid readers looking to trade or purchase books locally and safely.',
      objectives: 'To develop a functional, secure marketplace with advanced discovery features, including AI-driven recommendations and an escrow payment system.',
      concept: 'A community-driven hub combining standard e-commerce functionality with unique exchange mechanics and AI-powered book discovery.',
      challenge: 'Designing an intuitive interface that handles complex workflows like multi-party exchanges and escrow payments without confusing the user.'
    },
    role: [
      'Assisted with UI design.',
      'Developed user personas and created user journey maps.',
      'Conducted Heuristic Evaluation with experienced UX/UI evaluators.',
      'Conducted Usability Testing with real users and performed A/B Testing.'
    ],
    focus: 'UX/UI design, user experience evaluation, system functionality mapping, and integrating AI-powered discovery into the user flow.',
    process: {
      evaluation: 'Led Heuristic Evaluations to identify usability issues early in the design phase.',
      testing: 'Conducted rigorous Usability Testing and A/B Testing to refine complex flows like the book exchange agreement process.',
      wireframes: 'Iterated on wireframes based on direct feedback from testing sessions.'
    },
    direction: {
      layout: 'Dashboard-style layouts for user accounts, combined with immersive discovery feeds for finding new books.',
      features: 'Integrated AI features like "Digital Twin" (chat with a book) and "Mood Match" seamlessly into the standard search interface.',
      inspiration: 'Modern marketplaces and social reading apps.'
    },
    showcase: [
      "/images/wonwan1 (1).png",
      "/images/wonwan1 (2).png",
      "/images/wonwan1 (3).png"
    ],
    reflection: {
      learned: 'The critical importance of iterative testing. Many assumptions about how users would approach the "exchange" feature were corrected through usability testing.',
      challenges: 'Designing UI for innovative features like the AI "Digital Twin" where there are few established design patterns.',
      skills: 'Advanced usability testing methodologies, full-scale system UX mapping.'
    },
    tools: ['Figma', 'PHP', 'MySQL', 'Laragon'],
    platform: 'Web Application'
  },
  {
    id: 'gen-z-magazine',
    title: 'Gen Z Trend Magazine',
    category: 'Editorial Design / Graphic Design',
    year: 'November 2025 – February 2026',
    coverImage: "/images/ปก-01.jpg",
    thumbnail: "/images/ปก-01.jpg",
    shortDesc: 'An editorial design project exploring popular trends and nostalgic youth culture.',
    overview: {
      background: 'An editorial exploration into the cultural touchstones of Generation Z, focusing on trends from the 2010s onward.',
      objectives: 'To create a visually compelling, print-ready magazine that captures the chaotic, nostalgic, and vibrant energy of contemporary youth culture.',
      concept: 'A scrapbook-inspired, highly experimental editorial layout breaking traditional grid rules while maintaining readability.',
      challenge: 'Balancing experimental, boundary-pushing typography and graphics with actual editorial legibility.'
    },
    role: [
      'Served as the Head of Design.',
      'Led the magazine cover design.',
      'Designed the assigned magazine column.',
      'Contributed to the overall visual direction and layout.'
    ],
    focus: 'Editorial layout, experimental typography, visual storytelling, and creative direction.',
    process: {
      exploration: 'Experimented extensively with typography, mixing rigid serifs with distorted or handwritten fonts.',
      concept: 'Developed a "digital scrapbook" aesthetic utilizing cutout imagery, bold stickers, and overlapping elements.'
    },
    direction: {
      colors: 'High contrast: Deep blacks, stark whites, and hyper-vibrant neon accents (pink, green, yellow).',
      typography: 'Oversized, aggressive typography used as graphic elements rather than just text.',
      layout: 'Intentionally asymmetrical grids and chaotic layering that guide the eye dynamically.'
    },
    showcase: [
      "/images/ปก-01.jpg",
      "/images/msn-mgz-01.jpg",
      "/images/nokia-mgz-01.jpg"
   
    ],
    reflection: {
      learned: 'How to break design rules intentionally and effectively to evoke a specific mood or cultural feeling.',
      challenges: 'Ensuring that despite the chaotic aesthetic, the actual articles were still inviting and easy to read.'
    },
    tools: ['Adobe InDesign', 'Adobe Photoshop', 'Adobe Illustrator'],
    platform: 'Print / Editorial'
  }
];

// --- COMPONENTS ---

// Helper component for scrapbook stickers
const Sticker = ({
  children,
  color = 'bg-pink-500',
  rotate = '-rotate-6',
  className = ''
}: {
  children: ReactNode;
  color?: string;
  rotate?: string;
  className?: string;
}) => (
  <div className={`absolute z-10 inline-block px-4 py-1 text-sm font-bold text-zinc-950 rounded-full shadow-lg ${color} ${rotate} ${className}`}>
    {children}
  </div>
);

const Header = ({
  setView
}: {
  setView: (view: ViewState) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', action: () => setView({ name: 'home', section: 'hero' }) },
    { name: 'About', action: () => setView({ name: 'home', section: 'about' }) },
    { name: 'Skills', action: () => setView({ name: 'home', section: 'skills' }) },
    { name: 'Projects', action: () => setView({ name: 'home', section: 'projects' }) },
    { name: 'Education', action: () => setView({ name: 'home', section: 'education' }) },
  ];

  return (
    <header className="fixed top-0 w-full z-50 mix-blend-difference text-zinc-100">
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <button
          onClick={() => setView({ name: 'home', section: 'hero' })}
          className="text-xl font-serif font-bold tracking-tighter uppercase hover:text-pink-500 transition-colors"
        >
          Timaporn  Tongputsar
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium tracking-wide">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={link.action}
              className="hover:text-pink-500 hover:-translate-y-1 transition-all"
            >
              {link.name}
            </button>
          ))}
          <a href="#contact" className="hover:text-pink-500 hover:-translate-y-1 transition-all">
            Contact
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-zinc-950 border-b border-zinc-800 p-6 flex flex-col gap-4 text-zinc-100">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => {
                link.action();
                setIsOpen(false);
              }}
              className="text-left text-lg font-serif"
            >
              {link.name}
            </button>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="text-left text-lg font-serif"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

const Footer = () => (
  <footer id="contact" className="bg-zinc-900 border-t border-zinc-800 py-24 relative overflow-hidden">
    <Sticker color="bg-[#f8e71c]" rotate="rotate-3" className="top-12 left-10 md:left-1/4">
      Get In Touch!
    </Sticker>

    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-12 relative z-10">
      <div className="max-w-2xl">
        <h2 className="text-5xl md:text-8xl font-serif font-bold tracking-tighter text-zinc-100 mb-6 leading-none">
          Let's create <br />
          <span className="text-pink-500 italic pr-4">something</span> <br />
          meaningful.
        </h2>

        <a
          href="/resume/Pin-Resume.pdf"
          download="Pin-Resume.pdf"
          className="inline-flex items-center gap-2 px-8 py-4 bg-zinc-100 text-zinc-950 font-bold rounded-full hover:bg-pink-500 hover:text-white transition-colors mt-4"
        >
          <Download size={20} /> Download Resume
        </a>
      </div>

      <div className="flex flex-col gap-4 text-zinc-400">
        <h3 className="text-zinc-100 font-bold mb-2 uppercase tracking-widest text-sm">
          Contact Details
        </h3>

        <a href="mailto:timaporn31380@gmail.com" className="flex items-center gap-3 hover:text-pink-500 transition-colors">
          <Mail size={18} /> timaporn31380@gmail.com
        </a>

        <a href="tel:+66624873329" className="flex items-center gap-3 hover:text-pink-500 transition-colors">
          <Phone size={18} /> +66 62 487 3329
        </a>

<div className="flex items-center gap-2">
  <MapPin size={16} />
  <span>Nakhon Ratchasima, Thailand</span>
</div>
      </div>
    </div>
  </footer>
);

// --- VIEWS ---

const HomeView = ({
  setView,
  targetSection
}: {
  setView: (view: ViewState) => void;
  targetSection?: string | null;
}) => {

  // Handle scrolling to section if targetSection is passed
  useEffect(() => {
    if (targetSection) {
      const el = document.getElementById(targetSection);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [targetSection]);

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section id="hero" className="min-h-screen pt-32 pb-20 px-6 flex flex-col justify-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 relative">
            <Sticker color="bg-[#b8e986]" rotate="-rotate-12" className="-top-6 -left-6">
              Hello I'm Pin!
            </Sticker>

            <h1 className="text-5xl md:text-6xl lg:text-[7rem] leading-[0.85] font-serif font-bold text-zinc-100 tracking-tighter uppercase">
              CREATIVE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                DESIGN JOURNEY.
              </span>
            </h1>

            <p className="mt-8 text-xl md:text-2xl text-zinc-400 max-w-lg font-light leading-relaxed">
              Hi, I'm <strong className="text-zinc-100 font-bold">Pin</strong>, an Aspiring UX/UI & Web Designer blending structural logic with editorial creativity.
            </p>

            <button
              onClick={() => setView({ name: 'home', section: 'projects' })}
              className="mt-10 group flex items-center gap-4 text-lg font-bold text-zinc-100 hover:text-pink-500 transition-colors"
            >
              Explore My Work
              <span className="p-3 rounded-full border border-zinc-700 group-hover:border-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-all">
                <ArrowRight size={20} />
              </span>
            </button>
          </div>

          <div className="flex-1 relative w-full aspect-square md:aspect-[4/5] max-w-md mx-auto">
            <div className="absolute inset-0 bg-pink-500 rounded-3xl translate-x-4 translate-y-4"></div>

            <img
              src="/images/Profile1.jpg"
              alt="Creative Collage"
              className="w-full h-full object-cover rounded-3xl relative z-10 border border-zinc-800 grayscale hover:grayscale-0 transition-all duration-700"
            />

            <Sticker color="bg-[#a4cafe]" rotate="rotate-12" className="bottom-12 -right-6 text-lg">
              Creative ✦
            </Sticker>
          </div>
        </div>

        {/* Background decorative elements */}
        <div className="absolute top-1/4 -right-20 text-[20rem] font-serif font-black text-zinc-900 opacity-50 pointer-events-none select-none">
          UX
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-32 px-6 bg-zinc-900/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/3 relative">
            <img
              src="/images/Profile2.jpg"
              alt="Profile"
              className="w-full aspect-[3/4] object-cover rounded-lg"
            />

            <Sticker color="bg-zinc-100" rotate="-rotate-6" className="-bottom-4 -right-4">
              Always Learning
            </Sticker>
          </div>

          <div className="w-full md:w-2/3">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-zinc-100 mb-8">
              A bit about me.
            </h2>

            <div className="text-lg md:text-xl text-zinc-400 font-light space-y-6 max-w-2xl">
              <p>
                Hello My Name is <strong className="text-zinc-100">Timaporn Tongputsar</strong>, a third-year Digital Technology student at Suranaree University of Technology.
              </p>

              <p>
                My passion lies at the intersection of <span className="text-pink-400">user-centered logic</span> and <span className="text-pink-400">expressive visual design</span>. I believe that digital experiences shouldn't just be functional; they should be memorable and aesthetically engaging.
              </p>

              <p>
                I am currently seeking a cooperative education placement or internship where I can apply my skills in UX/UI Design and Web Design, learn from experienced professionals, and contribute to meaningful digital products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-16 border-b border-zinc-800 pb-8">
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-zinc-100">
              Toolkit
            </h2>

            <Sticker color="bg-[#f8e71c]" rotate="rotate-6" className="relative top-4 hidden md:block">
              Capabilities
            </Sticker>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SKILLS.map((skillGroup, idx) => (
              <div
                key={idx}
                className="bg-zinc-900/40 p-8 rounded-2xl border border-zinc-800 hover:border-pink-500/50 transition-colors group"
              >
                <h3 className="text-xl font-bold text-zinc-100 mb-6 group-hover:text-pink-400 transition-colors">
                  {skillGroup.category}
                </h3>

                <ul className="space-y-3">
                  {skillGroup.items.map((item, i) => (
                    <li key={i} className="text-zinc-400 flex items-center gap-2 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-pink-500 transition-colors"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-32 px-6 bg-zinc-100 text-zinc-950 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl md:text-8xl font-serif font-black tracking-tighter mb-20">
            Selected Work.
          </h2>

          {/* Asymmetrical Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {PROJECTS.map((project, idx) => (
              <div
                key={project.id}
                onClick={() => setView({ name: 'project', id: project.id })}
                className={`group cursor-pointer flex flex-col ${
                  idx === 0 || idx === 3 ? 'md:col-span-2' : 'md:col-span-1'
                }`}
              >
                <div className="relative overflow-hidden rounded-xl mb-6 bg-zinc-200">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10"></div>

                  <img
                    src={idx === 0 || idx === 3 ? project.coverImage : project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover aspect-[4/3] md:aspect-auto md:h-[500px] group-hover:scale-105 transition-transform duration-700"
                  />

                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-white px-3 py-1 text-xs font-bold uppercase rounded-full tracking-wider shadow-md">
                      {project.year}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-pink-500 text-white p-3 rounded-full shadow-lg">
                    <ArrowUpRight size={24} />
                  </div>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold font-serif mb-2 group-hover:text-pink-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-3">
                  {project.category}
                </p>

                <p className="text-zinc-700 max-w-xl">
                  {project.shortDesc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section id="education" className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-zinc-100 mb-16">
            Academic Journey
          </h2>

          <div className="relative border-l border-zinc-800 ml-4 md:ml-0 md:border-l-0">
            {/* Timeline item */}
            <div className="pl-8 md:pl-0 relative mb-12 flex flex-col md:flex-row md:justify-between items-start md:items-center group">
              <div className="absolute left-0 top-2 md:left-1/2 md:-translate-x-1/2 w-3 h-3 bg-pink-500 rounded-full md:border-4 md:border-zinc-950 md:w-5 md:h-5 group-hover:scale-150 transition-transform"></div>

              <div className="md:w-[45%] text-left md:text-right mb-4 md:mb-0">
                <h3 className="text-2xl font-bold text-zinc-100 mb-1">
                  Suranaree University of Technology
                </h3>
                <p className="text-zinc-400">Digital Technology Program</p>
              </div>

              <div className="md:w-[45%] text-left">
                <span className="inline-block px-3 py-1 bg-zinc-800 text-pink-400 text-sm font-bold rounded-full mb-2">
                  Current (3rd Year)
                </span>

                <p className="text-zinc-500 text-sm">
                  Interested in UX/UI Design, Web Design, and creative digital experiences.
                </p>
              </div>
            </div>

            {/* Divider for desktop */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[1px] bg-zinc-800 -z-10"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ProjectDetailView = ({
  projectId,
  setView
}: {
  projectId?: string;
  setView: (view: ViewState) => void;
}) => {

  const projectIndex = PROJECTS.findIndex(p => p.id === projectId);
  const project = PROJECTS[projectIndex];

  const nextProject = PROJECTS[(projectIndex + 1) % PROJECTS.length];
  const prevProject = PROJECTS[(projectIndex - 1 + PROJECTS.length) % PROJECTS.length];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="w-full bg-zinc-100 text-zinc-950 min-h-screen selection:bg-pink-300">

      {/* 01 - PROJECT HERO */}
      <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
        <button
          onClick={() => setView({ name: 'home', section: 'projects' })}
          className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-zinc-500 hover:text-pink-600 transition-colors mb-12"
        >
          <ChevronLeft size={16} /> Back to Projects
        </button>

        <div className="mb-12">
          <p className="text-pink-600 font-bold uppercase tracking-widest text-sm mb-4">
            {project.category}
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black tracking-tighter leading-[0.9] mb-8">
            {project.title}
          </h1>

          <p className="text-xl md:text-2xl text-zinc-600 max-w-2xl font-light">
            {project.shortDesc}
          </p>
        </div>

        <div className="w-full aspect-video rounded-2xl overflow-hidden mb-16 relative">
          <img
            src={project.coverImage}
            alt={`${project.title} Cover`}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-zinc-300">
          <div>
            <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
              Role
            </h4>
            <p className="font-medium text-sm">{project.role[0] || 'Designer'}</p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
              Year
            </h4>
            <p className="font-medium text-sm">{project.year}</p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
              Tools
            </h4>
            <p className="font-medium text-sm">{project.tools.join(', ')}</p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
              Platform
            </h4>
            <p className="font-medium text-sm">{project.platform}</p>
          </div>
        </div>
      </section>

      {/* 02 & 03 - OVERVIEW & ROLE */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16">
        <div className="md:col-span-8 space-y-12">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-6 flex items-center gap-4">
              <span className="text-pink-400">01.</span> Project Overview
            </h2>

            <div className="space-y-6 text-lg text-zinc-700 font-light">
              <p><strong>Background:</strong> {project.overview.background}</p>
              <p><strong>Objectives:</strong> {project.overview.objectives}</p>
              <p><strong>Concept:</strong> {project.overview.concept}</p>

              <p className="p-6 bg-zinc-200 border-l-4 border-pink-500 italic">
                <strong>Main Challenge:</strong> {project.overview.challenge}
              </p>
            </div>
          </div>
        </div>

        <div className="md:col-span-4">
          <div className="bg-zinc-950 text-zinc-100 p-8 rounded-2xl sticky top-32">
            <h3 className="text-2xl font-serif font-bold mb-6 text-pink-400">
              My Responsibilities
            </h3>

            <ul className="space-y-4">
              {project.role.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-zinc-300">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-pink-500 shrink-0"></div>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-zinc-800">
              <h4 className="text-xs uppercase tracking-wider text-zinc-500 mb-2">
                Key Focus
              </h4>
              <p className="text-sm font-medium">{project.focus}</p>
            </div>

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="mt-8 flex items-center justify-center gap-2 w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-pink-500 hover:text-white transition-colors"
              >
                <Code2 size={18} /> View Repository
              </a>
            )}

            {project.figma && (
  <a
    href={project.figma}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-3 flex items-center justify-center gap-2 w-full py-3 border border-white text-white font-bold rounded-lg hover:bg-pink-500 hover:border-pink-500 transition-colors"
  >
    View Design <ArrowUpRight size={18} />
  </a>
)}
          </div>
        </div>
      </section>

      {/* 04 & 05 - PROCESS & DIRECTION */}
      <section className="py-20 px-6 bg-zinc-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

            <div>
              <h2 className="text-3xl font-serif font-bold mb-8 flex items-center gap-4">
                <span className="text-pink-500">02.</span> Design Process
              </h2>

              <div className="space-y-8">
                {Object.entries(project.process).map(([key, value]) => (
                  <div key={key}>
                    <h4 className="text-lg font-bold capitalize mb-2">{key}</h4>
                    <p className="text-zinc-700 leading-relaxed">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-serif font-bold mb-8 flex items-center gap-4">
                <span className="text-pink-500">03.</span> Design Direction
              </h2>

              <div className="space-y-8">
                {Object.entries(project.direction).map(([key, value]) => (
                  <div key={key}>
                    <h4 className="text-lg font-bold capitalize mb-2">{key}</h4>
                    <p className="text-zinc-700 leading-relaxed">{value}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 06 - SHOWCASE */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-serif font-bold mb-12 text-center">
          Final Showcase
        </h2>

        <div className="space-y-8">
          {project.showcase.map((imgUrl, idx) => (
            <div
              key={idx}
              className="w-full bg-zinc-200 rounded-xl overflow-hidden shadow-xl border border-zinc-300"
            >
              <img
                src={imgUrl}
                alt={`Showcase ${idx + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 07 - REFLECTION */}
      <section className="py-20 px-6 max-w-3xl mx-auto text-center">
        <Sticker color="bg-[#b8e986]" rotate="-rotate-3" className="relative -top-4 mx-auto block w-max">
          Looking Back
        </Sticker>

        <h2 className="text-4xl font-serif font-bold mb-10">
          Reflection
        </h2>

        <div className="space-y-8 text-left">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-200">
            <h4 className="text-lg font-bold text-pink-600 mb-2">
              What I Learned
            </h4>
            <p className="text-zinc-700 leading-relaxed">
              {project.reflection.learned}
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-200">
            <h4 className="text-lg font-bold text-pink-600 mb-2">
              Challenges
            </h4>
            <p className="text-zinc-700 leading-relaxed">
              {project.reflection.challenges}
            </p>
          </div>

          {project.reflection.future && (
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-200">
              <h4 className="text-lg font-bold text-pink-600 mb-2">
                Future Improvements
              </h4>
              <p className="text-zinc-700 leading-relaxed">
                {project.reflection.future}
              </p>
            </div>
          )}

          {project.reflection.skills && (
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-zinc-200">
              <h4 className="text-lg font-bold text-pink-600 mb-2">
                Skills Gained
              </h4>
              <p className="text-zinc-700 leading-relaxed">
                {project.reflection.skills}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* 08 - NEXT PROJECT FOOTER */}
      <section className="border-t border-zinc-300 bg-zinc-950 text-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-zinc-800">

          <button
            onClick={() => setView({ name: 'project', id: prevProject.id })}
            className="flex-1 p-12 group hover:bg-zinc-900 transition-colors text-left"
          >
            <p className="text-zinc-500 uppercase tracking-widest text-xs font-bold mb-2 flex items-center gap-2">
              <ChevronLeft size={14} /> Previous Project
            </p>

            <h3 className="text-2xl md:text-4xl font-serif font-bold group-hover:text-pink-400 transition-colors">
              {prevProject.title}
            </h3>
          </button>

          <button
            onClick={() => setView({ name: 'project', id: nextProject.id })}
            className="flex-1 p-12 group hover:bg-zinc-900 transition-colors text-right"
          >
            <p className="text-zinc-500 uppercase tracking-widest text-xs font-bold mb-2 flex items-center justify-end gap-2">
              Next Project <ChevronRight size={14} />
            </p>

            <h3 className="text-2xl md:text-4xl font-serif font-bold group-hover:text-pink-400 transition-colors">
              {nextProject.title}
            </h3>
          </button>

        </div>
      </section>

    </div>
  );
};

// --- MAIN APP COMPONENT ---

export default function App() {
  const [view, setView] = useState<ViewState>({
    name: 'home',
    section: null
  });

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-pink-500 selection:text-white">
      <Header setView={setView} />

      <main>
        {view.name === 'home' ? (
          <HomeView
            setView={setView}
            targetSection={view.section}
          />
        ) : (
          <ProjectDetailView
            projectId={view.id}
            setView={setView}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}
