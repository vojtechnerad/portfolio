export type ProjectCategory = "dev" | "design" | "both";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  image?: string;
  link?: string;
  github?: string;
  year?: string;
  role?: string;
  overview?: string;
  process?: string[];
  result?: string;
}

export const categoryLabels: Record<ProjectCategory, string> = {
  dev: "Development",
  design: "UX/UI Design",
  both: "Design & Implementace",
};

export function hasCategory(
  project: Project,
  filter: "dev" | "design",
): boolean {
  return project.category === filter || project.category === "both";
}

export const projects: Project[] = [
  {
    id: "restaurant-visual-identity",
    title: "Vizuální identita pro restauraci Slunce",
    description: "Kompletní vizuální identita pro imaginární restauraci Slunce, zahrnující logo, barvy, typografii a aplikace na různých materiálech.",
    category: "design",
    tags: ["InkScape", "Affinity", "Branding", "Logo Design", "Visual Identity"],
    year: "2024",
    role: "Graphic Designer",
    overview:
      "Projekt zahrnoval kompletní návrh vizuální identity pro imaginární restauraci Slunce na základě zadání od klienta. Cílem bylo vytvořit konzistentní a atraktivní vizuální styl, který by odrážel koncept a atmosféru řemeslné restaurace.",
    process: [
      "Analýza zadání a inspirace z řemeslných restaurací",
      "Návrh moodboardu a výběr vizuálního stylu",
      "Tvorba loga s důrazem na jednoduchost a zapamatovatelnost",
      "Definice barevné palety a typografie pro konzistentní vizuální komunikaci",
      "Aplikace vizuální identity na různé materiály — plakáty, menu, vizitky, obaly",
    ]
  },
  {
    id: "design-cofee-product-page",
    title: "Design produktové stránky pro kávu",
    description:
      "Návrh produktové stránky pro e-commerce prodej kávy, zaměřený na vizuální přitažlivost a uživatelskou přívětivost.",
    category: "design",
    tags: ["Figma", "UX Research", "Prototyping"],
    year: "2024",
    role: "UX/UI Designer",
    overview: 
      "Projekt zahrnoval kompletní designový proces — od uživatelského výzkumu a tvorby person až po high-fidelity prototyp v Figma. Cílem bylo vytvořit atraktivní a funkční produktovou stránku, která zaujme milovníky kávy.",
      process: [
        "Rešerše konkurence a analýza trendů v e-commerce designu",
        "Moodboard a inspirace z e-commerce stránek s kávou",
        "Výběr barvné palety a typografie pro vytvoření vizuální identity",
        "Zkompletování vizuální identity imaginární značky kávy 'Beanz'",
        "Návrh low-fidelity prototypu s důrazem na strukturu a uživatelskou přívětivost",
        "Tvorba komponent v atomickém designu pro zajištění konzistence a efektivity",
        "High-fidelity prototyp s interakcemi pro realistickou prezentaci",
        "Úspěšné obhájení designu před lektory kurzu s pozitivní zpětnou vazbou a menší doporučení pro zlepšení",
        "Retrospektiva a lessons learned z procesu návrhu"
      ]
  },  
  {
    id: "photography-portfolio-website",
    title: "Fotografické portfolio",
    description:
      "Osobní portfolio pro prezentaci fotografických prací, navržené s důrazem na vizuální estetiku a jednoduchost.",
    category: "dev",
    tags: ["React", "Tailwind CSS"],
    github: "https://github.com/vojtechnerad/photography-portfolio",
    year: "2024",
    role: "Frontend Developer",
    overview:
      "Jednoduché a elegantní portfolio pro prezentaci fotografií. Projekt zahrnoval návrh a implementaci responzivního designu s důrazem na vizuální dojem.",
      link: "https://vojtechnerad.github.io/photography-portfolio"
  },
  {
    id: "eshop-obuv",
    title: "E-shop s obuví",
    description
      : "Fullstack e-commerce řešení postavené na PHP + NETTE s administračním rozhraním.",
    category: "both",
    tags: ["PHP", "NETTE", "MySQL", "Bootstrap"],
    year: "2023",
    role: "Fullstack Developer & Designer",
    overview:
      "E-commerce platforma s administračním rozhraním, správou produktů a košíkem. Projekt vznikl jako semestrální práce z předmětu 4IZ571 Vývoj pokročilých webových aplikací v PHP."
  },
  // {
  //   id: "e-shop-platforma",
  //   title: "E-shop platforma",
  //   description:
  //     "Fullstack e-commerce řešení postavené na Next.js s integrací Stripe plateb a dynamickým CMS.",
  //   category: "dev",
  //   tags: ["Next.js", "TypeScript", "Stripe", "Prisma"],
  //   year: "2025",
  //   role: "Frontend Developer",
  //   overview:
  //     "Kompletní e-commerce platforma s administračním rozhraním, správou produktů, košíkem a platební bránou. Projekt vznikl jako semestrální práce z předmětu Webové technologie.",
  //   process: [
  //     "Analýza požadavků a návrh databázového schématu",
  //     "Implementace backendu s Prisma ORM a tRPC",
  //     "Tvorba frontend komponent s Next.js App Router",
  //     "Integrace Stripe platební brány",
  //     "Testování a nasazení na Vercel",
  //   ],
  //   result:
  //     "Funkční e-shop s administrací, který zvládá kompletní nákupní flow od prohlížení produktů po platbu.",
  // },
  // {
  //   id: "task-manager",
  //   title: "Task Manager App",
  //   description:
  //     "Produktivní aplikace s drag & drop rozhraním, real-time synchronizací a tmavým režimem.",
  //   category: "both",
  //   tags: ["React", "Firebase", "Tailwind CSS", "DnD Kit", "Figma"],
  //   year: "2025",
  //   role: "UX/UI Designer & Frontend Developer",
  //   overview:
  //     "Kanban-style task manager navržený a implementovaný od nuly. Projekt zahrnoval kompletní designový proces i technickou realizaci v Reactu.",
  //   process: [
  //     "User research — rozhovory s 8 studenty o jejich workflow",
  //     "Wireframy a low-fidelity prototypy v Figma",
  //     "Usability testing na papírových prototypech",
  //     "High-fidelity design s design tokeny",
  //     "Implementace v React s Firebase backend",
  //     "Iterace na základě uživatelského testování",
  //   ],
  //   result:
  //     "Aplikace aktivně používaná 30+ studenty. Průměrná spokojenost 4.6/5 v dotazníku po testování.",
  // },
  // {
  //   id: "weather-dashboard",
  //   title: "Weather Dashboard",
  //   description:
  //     "Interaktivní dashboard s vizualizací počasí, geolokací a 7denní předpovědí.",
  //   category: "dev",
  //   tags: ["React", "Chart.js", "OpenWeather API", "CSS Modules"],
  //   year: "2024",
  //   role: "Frontend Developer",
  //   overview:
  //     "Responsivní webová aplikace zobrazující aktuální počasí a předpověď na 7 dní s interaktivními grafy a geolokací.",
  //   process: [
  //     "Návrh API vrstvy a datových modelů",
  //     "Implementace geolokace a vyhledávání měst",
  //     "Vizualizace dat pomocí Chart.js",
  //     "Optimalizace pro mobilní zařízení",
  //   ],
  //   result:
  //     "Plně funkční weather app s rychlým načítáním a přehlednou vizualizací meteorologických dat.",
  // },
  // {
  //   id: "redesign-univerzitniho-webu",
  //   title: "Redesign univerzitního webu",
  //   description:
  //     "Kompletní UX audit a redesign webových stránek fakulty. User research, wireframy, prototypy a testování.",
  //   category: "design",
  //   tags: ["Figma", "User Research", "Wireframing", "Usability Testing"],
  //   year: "2025",
  //   role: "UX/UI Designer",
  //   overview:
  //     "Semestrální projekt zaměřený na redesign webu fakulty. Zahrnoval heuristickou analýzu, uživatelský výzkum, návrh nové informační architektury a high-fidelity prototyp.",
  //   process: [
  //     "Heuristická analýza stávajícího webu (Nielsen's heuristics)",
  //     "Uživatelský výzkum — 12 rozhovorů se studenty a zaměstnanci",
  //     "Card sorting pro novou informační architekturu",
  //     "Wireframy klíčových stránek",
  //     "High-fidelity prototyp v Figma",
  //     "Usability testing s 6 participanty",
  //   ],
  //   result:
  //     "Nový návrh snížil průměrný čas nalezení informace o 40% v porovnání s původním webem.",
  // },
  // {
  //   id: "mobilni-bankovni-app",
  //   title: "Mobilní bankovní aplikace",
  //   description:
  //     "Návrh mobilní bankovní aplikace s důrazem na přístupnost a jednoduchost ovládání.",
  //   category: "design",
  //   tags: ["Figma", "Prototyping", "Design System", "Accessibility"],
  //   year: "2024",
  //   role: "UX/UI Designer",
  //   overview:
  //     "Koncept mobilní bankovní aplikace zaměřené na seniory a uživatele s omezenými digitálními dovednostmi. Důraz na přístupnost, čitelnost a intuitivní navigaci.",
  //   process: [
  //     "Competitive analysis 5 bankovních aplikací",
  //     "Persony a scénáře použití",
  //     "Prototypování v Figma s focus na accessibility",
  //     "Testování s uživateli 60+",
  //     "Iterace designu na základě zpětné vazby",
  //   ],
  //   result:
  //     "Všech 5 testovacích účastníků dokázalo dokončit klíčové úlohy bez asistence — oproti 2 z 5 u konkurenční aplikace.",
  // },
  // {
  //   id: "design-system",
  //   title: "Design System – Komponenty",
  //   description:
  //     "Tvorba komplexního design systému s komponentovou knihovnou, tokeny a dokumentací.",
  //   category: "both",
  //   tags: [
  //     "Figma",
  //     "Design Tokens",
  //     "React",
  //     "Storybook",
  //     "Component Library",
  //   ],
  //   year: "2025",
  //   role: "UX/UI Designer & Frontend Developer",
  //   overview:
  //     "End-to-end design systém — od tokenů a Figma komponent po implementaci v Reactu s dokumentací ve Storybook. Projekt propojuje design a development workflow.",
  //   process: [
  //     "Audit existujících UI patterns napříč projekty",
  //     "Definice design tokenů (barvy, typografie, spacing)",
  //     "Tvorba Figma komponentové knihovny",
  //     "Implementace React komponent s Tailwind CSS",
  //     "Dokumentace ve Storybook",
  //     "Testování konzistence mezi Figma a kódem",
  //   ],
  //   result:
  //     "Knihovna 40+ komponent používaná ve 3 dalších projektech. Zkrácení času návrhu nové stránky o ~50%.",
  // },
];
