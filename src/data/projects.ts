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
  {
    id: "architecture-of-service-for-missing-pets",
    "title": "Návrh architektury pro službu věnující se pohřešovaným domácím mazlíčkům",
    "description": "Návrh architektury pro službu, která pomáhá lidem najít pohřešované domácí mazlíčky pomocí webové platformy.",
    "category": "dev",
    tags: ["Microservices", "SOA", "Draw.io", "Usecase Diagram", "Component Diagram"],
    year: "2025",
    role: "System Architect",
    overview:
      "Projekt zahrnoval návrh architektury pro službu zaměřenou na pomoc lidem při hledání pohřešovaných domácích mazlíčků. Cílem bylo vytvořit škálovatelnou a spolehlivou platformu, která umožní uživatelům snadno sdílet informace o pohřešovaných mazlíčcích a pomáhat při jejich nalezení.",
    github: "https://github.com/vojtechnerad/4IT575-seminarni-prace",
    link: "https://github.com/vojtechnerad/4IT575-seminarni-prace/blob/main/README.md",
    result: "Pro projekt jsme navrhli dvě řešení - jedno založené na microservices a druhé na SOA. Obě řešení zahrnovala detailní diagramy komponent, use case diagramy a návrh databázového schématu. Naše práce poskytla jasný plán pro implementaci služby a zdůraznila klíčové aspekty škálovatelnosti a spolehlivosti.",
    process:[
      "Analýza požadavků a funkcionalit služby",
      "Návrh architektury založené na microservices s důrazem na škálovatelnost a modularitu",
      "Návrh architektury založené na SOA s důrazem na integraci a interoperabilitu",
      "Vytvoření diagramů komponent a use case diagramů pro obě architektury",
      "Porovnání obou řešení a zhodnocení jejich výhod a nevýhod pro daný případ použití",
      "Dokumentace návrhu a příprava prezentace pro obhajobu projektu"
    ]
  },
  {
    id: "password-manager-prototype",
    title: "Návrh prototypu správce hesel",
    description: "Návrh a implementace prototypu pro správce hesel s důrazem na uživatelskou přívětivost.",
    category: "dev",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    year: "2024",
    role: "Frontend Developer",
    overview:
      "Týmový projekt byl zaměřený na navrhnutí a implementaci aplikace s využitím praktik User-centered designu. Cílem bylo vytvořit prototyp správce hesel, který by byl intuitivní a snadno použitelný pro širokou škálu uživatelů. Já jsem v tomto projektu zastával pozici frontend developera, kde jsem implementoval aplikaci podle rešerše a návrhů vytvořených kolegy z týmu.",
    github: "https://github.com/vojtechnerad/password-manager-prototype",
    link: "https://vojtechnerad.github.io/password-manager-prototype/"

  }
];
