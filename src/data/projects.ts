export type ProjectCategory = "dev" | "design" | "both";

export interface ProjectTechnologyChoice {
  name: string;
  reason: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  heroImage: string | null;
  screenshots: string[] | null;
  link?: string;
  github?: string;
  year?: string;
  role?: string;
  subject?: string;
  overview?: string;
  problem?: string;
  solution?: string;
  technologyChoices?: ProjectTechnologyChoice[];
  process?: string[];
  result?: string;
}

export const categoryLabels: Record<ProjectCategory, string> = {
  dev: "Development",
  design: "UX/UI Design",
  both: "Development & UX/UI Design",
};

export function hasCategory(
  project: Project,
  filter: "dev" | "design",
): boolean {
  return project.category === filter || project.category === "both";
}

export function getProjectImageSrc(imagePath: string | null): string | null {
  if (!imagePath) {
    return null;
  }

  return imagePath.startsWith("/") ? imagePath : `/${imagePath}`;
}

export const projects: Project[] = [
  {
    id: "restaurant-visual-identity",
    title: "Vizuální identita pro restauraci Slunce",
    description: "Kompletní vizuální identita pro imaginární restauraci Slunce, zahrnující logo, barvy, typografii a aplikace na různých materiálech.",
    category: "design",
    tags: ["InkScape", "Affinity", "Branding", "Logo Design", "Visual Identity"],
    heroImage: 'portfolio/projects/restaurant-visual-identity/hero.png',
    screenshots: [
      'portfolio/projects/restaurant-visual-identity/screenshot-1.jpg',
      'portfolio/projects/restaurant-visual-identity/screenshot-2.jpg',
      'portfolio/projects/restaurant-visual-identity/screenshot-3.jpg',
      'portfolio/projects/restaurant-visual-identity/screenshot-4.jpg',
    ],
    year: "2024",
    role: "Graphic Designer",
    overview:
      "Projekt zahrnoval kompletní návrh vizuální identity pro imaginární restauraci Slunce na základě zadání od klienta. Cílem bylo vytvořit konzistentní a atraktivní vizuální styl, který by odrážel koncept a atmosféru řemeslné restaurace.",
    problem:
      "Zadání potřebovalo převést obecnou představu o řemeslné restauraci do jasné a konzistentní značky, která bude fungovat napříč různými materiály a neztratí čitelnost ani v menších aplikacích.",
    solution:
      "Navrhl jsem jednoduchý vizuální systém postavený na výrazném logu, omezené barevné paletě a pevně definované typografii. Díky tomu bylo možné vytvořit identitu, která působí jednotně v menu, na plakátech i na drobných tiskovinách.",
    technologyChoices: [
      {
        name: "InkScape",
        reason:
          "Zvolil jsem ho pro tvorbu vektorového loga a ikonických prvků, aby výstupy zůstaly škálovatelné bez ztráty kvality.",
      },
      {
        name: "Affinity",
        reason:
          "Použil jsem ho pro kombinaci layoutu a finálních vizuálních aplikací, protože dobře podporuje práci s tiskovými výstupy i prezentací konceptu.",
      },
    ],
    process: [
      "Analýza zadání a inspirace z řemeslných restaurací",
      "Návrh moodboardu a výběr vizuálního stylu",
      "Tvorba loga s důrazem na jednoduchost a zapamatovatelnost",
      "Definice barevné palety a typografie pro konzistentní vizuální komunikaci",
      "Aplikace vizuální identity na různé materiály — plakáty, menu, vizitky, obaly",
    ],
    subject: "4ME411 Počítačová grafika a sazba"
  },
  {
    id: "design-cofee-product-page",
    title: "Design produktové stránky pro kávu",
    description:
      "Návrh produktové stránky pro e-commerce prodej kávy, zaměřený na vizuální přitažlivost a uživatelskou přívětivost.",
    category: "design",
    tags: ["Figma", "UX Research", "Prototyping"],
    heroImage: 'portfolio/projects/design-cofee-product-page/hero.png',
    screenshots: ['portfolio/projects/design-cofee-product-page/screenshot-1.png'],
    year: "2024",
    role: "UX/UI Designer",
    overview: 
      "Projekt zahrnoval kompletní designový proces — od uživatelského výzkumu a tvorby person až po high-fidelity prototyp v Figma. Cílem bylo vytvořit atraktivní a funkční produktovou stránku, která zaujme milovníky kávy.",
      problem:
        "Bylo potřeba navrhnout produktovou stránku, která bude vizuálně silná, ale zároveň nezkomplikuje uživateli rozhodování a nákupní cestu.",
      solution:
        "Postavil jsem návrh na kombinaci rešerše, obsahové hierarchie a iterativního prototypování. Důraz jsem dal na jasné CTA, čitelné dávkování informací o produktu a konzistentní komponentový systém, který drží celý detail stránky pohromadě.",
      technologyChoices: [
        {
          name: "Figma",
          reason:
            "Použil jsem ji jako hlavní návrhový nástroj, protože umožnila rychlé iterace od low-fidelity wireframů po interaktivní high-fidelity prototyp.",
        },
        {
          name: "UX Research",
          reason:
            "Výzkumné vstupy pomohly rozhodnout, které informace mají být na stránce prioritní a jak minimalizovat tření v nákupním flow.",
        },
        {
          name: "Prototyping",
          reason:
            "Interaktivní prototyp byl důležitý pro ověření struktury, mikrointerakcí a celkové srozumitelnosti návrhu ještě před implementací.",
        },
      ],
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
      ],
      subject: "4ME485 Design uživatelských rozhraní"
  },  
  {
    id: "photography-portfolio-website",
    title: "Fotografické portfolio",
    description:
      "Osobní portfolio pro prezentaci fotografických prací, navržené s důrazem na vizuální estetiku a jednoduchost.",
    category: "both",
    tags: ["React", "Tailwind CSS"],
    heroImage: 'portfolio/projects/photography-portfolio-website/hero.png',
    screenshots: null,
    github: "https://github.com/vojtechnerad/photography-portfolio",
    year: "2024",
    role: "Frontend Developer",
    overview:
      "Jednoduché a elegantní portfolio pro prezentaci fotografií. Projekt zahrnoval návrh a implementaci responzivního designu s důrazem na vizuální dojem.",
      problem:
        "Hlavní výzvou bylo navrhnout portfolio, které nechá vyniknout samotné fotografie, ale přitom nebude působit prázdně a bude dobře fungovat i na mobilech.",
      solution:
        "Zvolil jsem minimalistické rozhraní s důrazem na rytmus, whitespace a responzivní grid. Implementace se soustředila na to, aby navigace a galerie nepřebíjely obsah a celý web působil rychle a čistě.",
      technologyChoices: [
        {
          name: "React",
          reason:
            "Použil jsem ho pro modulární stavbu galerie a dalších opakovatelných částí rozhraní, které se daly snadno udržovat a rozšiřovat.",
        },
        {
          name: "Tailwind CSS",
          reason:
            "Zvolil jsem ho pro rychlou práci s layoutem, spacingem a responzivitou, což bylo u vizuálně čistého portfolia klíčové.",
        },
      ],
      link: "https://vojtechnerad.github.io/photography-portfolio",
    subject: "4ME421 Digitálni fotografie"
  },
  {
    id: "eshop-obuv",
    title: "E-shop s obuví",
    description
      : "Fullstack e-commerce řešení postavené na PHP + NETTE s administračním rozhraním.",
    category: "both",
    tags: ["PHP", "NETTE", "MySQL", "Bootstrap"],
    heroImage: null,
    screenshots: null,
    year: "2023",
    role: "Fullstack Developer & Designer",
    overview:
      "E-commerce platforma s administračním rozhraním, správou produktů a košíkem. Projekt vznikl jako semestrální práce z předmětu 4IZ571 Vývoj pokročilých webových aplikací v PHP.",
      problem:
        "Projekt měl pokrýt celý e-commerce scénář od katalogu přes košík až po administraci, takže bylo potřeba sladit uživatelskou část s interní správou obsahu a produktů.",
      solution:
        "Navrhl jsem aplikaci jako propojení frontendové nákupní zkušenosti a administrace s důrazem na přehlednou správu dat. Řešení se soustředilo na srozumitelné flow nákupu, jednoduchou správu produktů a funkční datový základ.",
      technologyChoices: [
        {
          name: "PHP + NETTE",
          reason:
            "Tuto kombinaci jsem zvolil kvůli rychlému vývoji MVC aplikace a přehlednému oddělení prezentační, aplikační a datové vrstvy.",
        },
        {
          name: "MySQL",
          reason:
            "Relační databáze byla vhodná pro správu produktů, objednávek a vazeb mezi entitami v typickém e-commerce scénáři.",
        },
        {
          name: "Bootstrap",
          reason:
            "Pomohl urychlit návrh rozhraní a zajistit konzistentní responzivní chování bez zbytečného vlastního CSS od nuly.",
        },
      ],
      subject: "4IZ571 Vývoj pokročilých webových aplikací v PHP"
  },
  {
    id: "architecture-of-service-for-missing-pets",
    "title": "Návrh architektury pro službu věnující se pohřešovaným domácím mazlíčkům",
    "description": "Návrh architektury pro službu, která pomáhá lidem najít pohřešované domácí mazlíčky pomocí webové platformy.",
    "category": "dev",
    tags: ["Microservices", "SOA", "Draw.io", "Usecase Diagram", "Component Diagram"],
    heroImage: null,
    screenshots: [
      'portfolio/projects/architecture-of-service-for-missing-pets/screenshot-1.png',
      'portfolio/projects/architecture-of-service-for-missing-pets/screenshot-2.png',
      'portfolio/projects/architecture-of-service-for-missing-pets/screenshot-3.png',
    ],
    year: "2025",
    role: "System Architect",
    overview:
      "Projekt zahrnoval návrh architektury pro službu zaměřenou na pomoc lidem při hledání pohřešovaných domácích mazlíčků. Cílem bylo vytvořit škálovatelnou a spolehlivou platformu, která umožní uživatelům snadno sdílet informace o pohřešovaných mazlíčcích a pomáhat při jejich nalezení.",
    problem:
      "Bylo potřeba navrhnout službu, která zvládne různé typy uživatelů, notifikace, práci s daty o mazlíčcích a budoucí růst systému bez ztráty přehlednosti architektury.",
    solution:
      "Zpracoval jsem dvě varianty architektury a porovnal jejich dopad na škálovatelnost, integraci i provozní složitost. Díky tomu bylo možné jasně ukázat trade-offy mezi microservices a SOA a doporučit vhodné směřování řešení.",
    technologyChoices: [
      {
        name: "Microservices",
        reason:
          "Zvažoval jsem je jako vhodnou volbu pro samostatně škálovatelné doménové části systému a lepší oddělení odpovědností.",
      },
      {
        name: "SOA",
        reason:
          "Druhá varianta umožnila ukázat přístup orientovaný na sdílené služby a porovnat jeho vhodnost vůči komplexitě daného use case.",
      },
      {
        name: "Draw.io",
        reason:
          "Použil jsem ho pro modelování architektury, use casů a komponent tak, aby bylo možné návrh jasně komunikovat i obhájit.",
      },
    ],
    github: "https://github.com/vojtechnerad/4IT575-seminarni-prace",
    result: "Pro projekt jsme navrhli dvě řešení - jedno založené na microservices a druhé na SOA. Obě řešení zahrnovala detailní diagramy komponent, use case diagramy a návrh databázového schématu. Naše práce poskytla jasný plán pro implementaci služby a zdůraznila klíčové aspekty škálovatelnosti a spolehlivosti.",
    process:[
      "Analýza požadavků a funkcionalit služby",
      "Návrh architektury založené na microservices s důrazem na škálovatelnost a modularitu",
      "Návrh architektury založené na SOA s důrazem na integraci a interoperabilitu",
      "Vytvoření diagramů komponent a use case diagramů pro obě architektury",
      "Porovnání obou řešení a zhodnocení jejich výhod a nevýhod pro daný případ použití",
      "Dokumentace návrhu a příprava prezentace pro obhajobu projektu"
    ],
    subject: "4IT575 Softwarové architektury"
  },
  {
    id: "password-manager-prototype",
    title: "Návrh prototypu správce hesel",
    description: "Návrh a implementace prototypu pro správce hesel s důrazem na uživatelskou přívětivost.",
    category: "dev",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    heroImage: null,
    screenshots: [
      'portfolio/projects/password-manager-prototype/screenshot-1.png',
    ],
    year: "2024",
    role: "Frontend Developer",
    overview:
      "Týmový projekt byl zaměřený na navrhnutí a implementaci aplikace s využitím praktik User-centered designu. Cílem bylo vytvořit prototyp správce hesel, který by byl intuitivní a snadno použitelný pro širokou škálu uživatelů. Já jsem v tomto projektu zastával pozici frontend developera, kde jsem implementoval aplikaci podle rešerše a návrhů vytvořených kolegy z týmu.",
    problem:
      "Správce hesel je citlivý produkt, kde musí uživatel rychle pochopit strukturu aplikace a zároveň mít důvěru v bezpečnost i ovladatelnost řešení.",
    solution:
      "Můj přínos byl převést výstupy z UX části do funkčního prototypu, který zachovává jednoduché ovládání i jasnou informační architekturu. Soustředil jsem se na konzistentní frontendové chování a na to, aby návrh byl použitelný v realistických scénářích práce s hesly.",
    technologyChoices: [
      {
        name: "React",
        reason:
          "Zvolil jsem ho pro stavbu komponentního rozhraní, kde bylo potřeba udržet konzistenci mezi formuláři, přehledy a opakujícími se interakcemi.",
      },
      {
        name: "TypeScript",
        reason:
          "Pomohl udržet spolehlivější práci se strukturou dat a stavem aplikace i při rychlém prototypování.",
      },
      {
        name: "Tailwind CSS",
        reason:
          "Urychlil implementaci návrhu a usnadnil dotažení detailů rozhraní bez velké režie kolem stylování.",
      },
    ],
    github: "https://github.com/vojtechnerad/password-manager-prototype",
    link: "https://vojtechnerad.github.io/password-manager-prototype/",
    subject: "4ME483 Design zaměřený na člověka"
  }
];
