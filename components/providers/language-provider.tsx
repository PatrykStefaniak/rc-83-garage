"use client";

import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export const LANGUAGE_OPTIONS = [
  { value: "en", label: "EN" },
  { value: "es", label: "ES" },
  { value: "pl", label: "PL" },
] as const;

type LanguageOption = (typeof LANGUAGE_OPTIONS)[number];
export type Locale = LanguageOption["value"];

type NavLink = {
  label: string;
  href: string;
};

type StatCard = {
  label: string;
  value: string;
  detail: string;
};

type HighlightItem = {
  title: string;
  description: string;
};

type ServiceCard = {
  title: string;
  description: string;
  features: string[];
};

type TestimonialItem = {
  quote: string;
  author: string;
  car: string;
};

type GalleryImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Copy = {
  nav: {
    brand: string;
    motto: string;
    links: NavLink[];
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: StatCard[];
  };
  highlights: {
    title: string;
    description: string;
    items: HighlightItem[];
  };
  services: {
    title: string;
    description: string;
    sections: ServiceCard[];
  };
  testimonials: {
    title: string;
    description: string;
    items: TestimonialItem[];
  };
  gallery: {
    title: string;
    description: string;
    images: GalleryImage[];
  };
  map: {
    title: string;
    description: string;
    note: string;
    cta: string;
  };
};

const translations: Record<Locale, Copy> = {
  en: {
    nav: {
      brand: "RC-83 Garage",
      motto: "BMW paint atelier",
      links: [
        { label: "Services", href: "#services" },
        { label: "Testimonials", href: "#testimonials" },
        { label: "Gallery", href: "#gallery" },
        { label: "Visit us", href: "#map" },
      ],
    },
    hero: {
      badge: "BMW Individual Studio",
      title: "Iconic finishes for iconic BMWs",
      subtitle: "Track-built techniques for road-going masterpieces.",
      description:
        "RC-83 Garage blends motorsport discipline with the finesse of BMW Individual. We restore heritage colors, design bespoke pearls, and deliver mirror-level surfaces for every M badge.",
      ctaPrimary: "Book a consultation",
      ctaSecondary: "See our finishes",
      stats: [
        {
          label: "Heritage shades matched",
          value: "180+",
          detail: "From Dakar Yellow to Velvet Blue",
        },
        {
          label: "Motorsport liveries delivered",
          value: "65",
          detail: "Touring cars and hill-climb builds",
        },
        {
          label: "Average turnaround",
          value: "7 days",
          detail: "Full exterior resprays",
        },
      ],
    },
    highlights: {
      title: "Why drivers trust RC-83",
      description:
        "We obsess over panel alignment, metallic depth, and the attitude every BMW should project.",
      items: [
        {
          title: "Factory-level prep",
          description:
            "Laser guides, spectro matching, and dust-free booths sized for SUVs and Ms.",
        },
        {
          title: "Motorsport DNA",
          description:
            "Liveries inspired by DTM, CSL, and endurance icons with perfect symmetry.",
        },
        {
          title: "Sustainable finishes",
          description:
            "Low-VOC clear coats and ceramic tech that protects daily driven Ms.",
        },
        {
          title: "Concierge updates",
          description:
            "Studio photos, progress notes, and delivery logistics every step.",
        },
      ],
    },
    services: {
      title: "Signature services",
      description:
        "From factory-correct restorations to futuristic satin flips, every layer is tuned for your BMW.",
      sections: [
        {
          title: "Heritage color lab",
          description:
            "Hand-match BMW Classic palettes and limited runs with controlled curing.",
          features: [
            "OEM+ refinishing",
            "Patina-safe masking",
            "Depth-checked clear",
          ],
        },
        {
          title: "Motorsport liveries",
          description:
            "True-to-era striping, sponsor layout, and race-ready vinyl integration.",
          features: [
            "Wind-tunnel vinyl maps",
            "Paddock-safe coatings",
            "Trackside repair kits",
          ],
        },
        {
          title: "Future finish studio",
          description:
            "Satin, matte, and PPF hybrids that highlight every crisp shoulder line.",
          features: [
            "Self-healing layers",
            "Color-shift micaflakes",
            "BMW i-series safe cures",
          ],
        },
      ],
    },
    testimonials: {
      title: "Drivers talking",
      description: "Owners across Europe trust us with their dream BMW builds.",
      items: [
        {
          quote:
            "They recreated my M3 Sport Evolution tone by tone. The depth under direct sun is unreal.",
          author: "Carlos M.",
          car: "E30 M3 Sport Evo",
        },
        {
          quote:
            "Our customer cars need perfection. RC-83 delivers touring-car liveries that survive every sprint.",
          author: "Lena P.",
          car: "G82 M4 GT4",
        },
        {
          quote:
            "My i4 looks like a concept car thanks to their satin plus ceramic combo, and washing is effortless.",
          author: "Marek Z.",
          car: "BMW i4 M50",
        },
      ],
    },
    gallery: {
      title: "Studio glimpses",
      description: "A peek inside the booth before we publish the full gallery.",
      images: [
        {
          src: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d",
          alt: "BMW coupe under studio lighting",
          width: 640,
          height: 480,
        },
        {
          src: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
          alt: "Close-up of paint correction on BMW",
          width: 640,
          height: 480,
        },
        {
          src: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef",
          alt: "BMW concept in satin finish",
          width: 640,
          height: 480,
        },
      ],
    },
    map: {
      title: "Visit the pit lane",
      description:
        "Our studio sits between Munich and Ingolstadt, minutes from the Autobahn for shake-down drives.",
      note: "Google Map preview only - a full interactive map arrives soon.",
      cta: "Open Google Maps",
    },
  },
  es: {
    nav: {
      brand: "RC-83 Garage",
      motto: "Taller de pintura BMW",
      links: [
        { label: "Servicios", href: "#services" },
        { label: "Testimonios", href: "#testimonials" },
        { label: "Galeria", href: "#gallery" },
        { label: "Visitanos", href: "#map" },
      ],
    },
    hero: {
      badge: "Estudio BMW Individual",
      title: "Acabados iconicos para BMW legendarios",
      subtitle: "Tecnicas de pista llevadas a la calle.",
      description:
        "RC-83 Garage mezcla disciplina de motorsport con el detalle de BMW Individual. Restauramos colores clasicos, creamos perlas a medida y entregamos superficies espejo para cada emblema M.",
      ctaPrimary: "Agenda una consulta",
      ctaSecondary: "Ver acabados",
      stats: [
        {
          label: "Tonos de herencia igualados",
          value: "180+",
          detail: "De Dakar Yellow a Velvet Blue",
        },
        {
          label: "Liveries de competicion",
          value: "65",
          detail: "Turismos y builds de subida",
        },
        {
          label: "Tiempo promedio",
          value: "7 dias",
          detail: "Repintado exterior completo",
        },
      ],
    },
    highlights: {
      title: "Por que confian en RC-83",
      description:
        "Obsesion por alineacion de paneles, metalicos profundos y actitud BMW.",
      items: [
        {
          title: "Preparacion nivel fabrica",
          description:
            "Guias laser, espectrometria y cabinas libres de polvo para SUVs y Ms.",
        },
        {
          title: "ADN de motorsport",
          description:
            "Liveries inspiradas en DTM, CSL y resistencia con simetria perfecta.",
        },
        {
          title: "Acabados sostenibles",
          description:
            "Clear de bajo VOC y tecnologia ceramica para Ms de diario.",
        },
        {
          title: "Actualizaciones concierge",
          description:
            "Fotos de estudio, notas de avance y logistica de entrega.",
        },
      ],
    },
    services: {
      title: "Servicios firma",
      description:
        "Desde restauraciones OEM hasta satin futurista, cada capa se ajusta a tu BMW.",
      sections: [
        {
          title: "Laboratorio de color clasico",
          description:
            "Igualamos paletas BMW Classic y series limitadas con curado controlado.",
          features: [
            "Refinish OEM+",
            "Enmascarado que cuida la patina",
            "Clear con control de profundidad",
          ],
        },
        {
          title: "Liveries de motorsport",
          description:
            "Franjas de epoca, sponsor layout y vinil listo para pista.",
          features: [
            "Mapas de vinil en tunel de viento",
            "Clear seguro para paddock",
            "Kits de reparacion trackside",
          ],
        },
        {
          title: "Estudio de acabado futuro",
          description:
            "Satin, matte y PPF hibrido que resalta cada linea de cintura.",
          features: [
            "Capas autorreparables",
            "Micaflakes con color shift",
            "Curado seguro para BMW i",
          ],
        },
      ],
    },
    testimonials: {
      title: "Clientes al volante",
      description: "Propietarios en Europa confian sus BMW de suenos.",
      items: [
        {
          quote:
            "Recrearon mi M3 Sport Evolution tono por tono. La profundidad al sol es irreal.",
          author: "Carlos M.",
          car: "E30 M3 Sport Evo",
        },
        {
          quote:
            "Nuestros autos de cliente exigen precision. RC-83 entrega liveries que sobreviven cada sprint.",
          author: "Lena P.",
          car: "G82 M4 GT4",
        },
        {
          quote:
            "Mi i4 parece un concept gracias a su combo satin y ceramico; lavarlo es facil.",
          author: "Marek Z.",
          car: "BMW i4 M50",
        },
      ],
    },
    gallery: {
      title: "Vistas del estudio",
      description: "Un vistazo rapido antes de lanzar la galeria completa.",
      images: [
        {
          src: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d",
          alt: "BMW coupe en el estudio",
          width: 640,
          height: 480,
        },
        {
          src: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
          alt: "Detalle de correccion de pintura en BMW",
          width: 640,
          height: 480,
        },
        {
          src: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef",
          alt: "Concept BMW con acabado satin",
          width: 640,
          height: 480,
        },
      ],
    },
    map: {
      title: "Visita el pit lane",
      description:
        "Estamos entre Munich e Ingolstadt, a minutos del Autobahn para pruebas rapidas.",
      note: "Vista previa de Google Map sin marcadores. Modo interactivo muy pronto.",
      cta: "Abrir Google Maps",
    },
  },
  pl: {
    nav: {
      brand: "RC-83 Garage",
      motto: "Atelier lakiernicze BMW",
      links: [
        { label: "Uslugi", href: "#services" },
        { label: "Opinie", href: "#testimonials" },
        { label: "Galeria", href: "#gallery" },
        { label: "Wizyta", href: "#map" },
      ],
    },
    hero: {
      badge: "Studio BMW Individual",
      title: "Ikoniczne wykonczenia dla kultowych BMW",
      subtitle: "Techniki z toru dostepne na codzien.",
      description:
        "RC-83 Garage laczy dyscypline motorsportu z rzemioslem BMW Individual. Odtwarzamy kolory dziedzictwa, tworzymy perlowe mieszanki i dostarczamy lakier jak lustro dla kazdego M.",
      ctaPrimary: "Umow konsultacje",
      ctaSecondary: "Zobacz realizacje",
      stats: [
        {
          label: "Kolory klasyczne",
          value: "180+",
          detail: "Dakar Yellow, Velvet Blue i wiecej",
        },
        {
          label: "Livery torowe",
          value: "65",
          detail: "Auta turystyczne i hill climb",
        },
        {
          label: "Sredni czas",
          value: "7 dni",
          detail: "Pelny zewnetrzny respray",
        },
      ],
    },
    highlights: {
      title: "Dlaczego RC-83",
      description:
        "Dbamy o spasowanie paneli, glebie metaliku i charakter kazdego BMW.",
      items: [
        {
          title: "Przygotowanie fabryczne",
          description:
            "Laserowe prowadnice, spektrometria i kabiny bez pylu dla SUV i M.",
        },
        {
          title: "DNA motorsportu",
          description:
            "Livery inspirowane DTM, CSL i wyscigami dlugodystansowymi.",
        },
        {
          title: "Trwale powloki",
          description:
            "Lakiery low VOC i ceramika chroniaca auta codzienne.",
        },
        {
          title: "Pewna komunikacja",
          description: "Raporty zdjeciowe, notatki i logistyka dostaw.",
        },
      ],
    },
    services: {
      title: "Uslugi sygnowane",
      description:
        "Restauracje OEM, futurystyczny satin lub hybrydy PPF dopasowane do BMW.",
      sections: [
        {
          title: "Laboratorium klasyki",
          description:
            "Rekonstruujemy palety BMW Classic i serie limitowane.",
          features: [
            "Refinish OEM+",
            "Maskowanie bez utraty patyny",
            "Kontrola glebokosci klaru",
          ],
        },
        {
          title: "Livery torowe",
          description:
            "Historyczne pasy, uklady sponsorow i gotowe do wyscigow winyle.",
          features: [
            "Mapy winylu z tunelu",
            "Powleki bezpieczne w paddocku",
            "Zestawy naprawcze trackday",
          ],
        },
        {
          title: "Studio przyszlosci",
          description:
            "Satin, matte i hybrydy PPF podkreslajace linie BMW i M.",
          features: [
            "Warstwy samoregenerujace",
            "Pigmenty ze zmiana koloru",
            "Bezpieczne utwardzanie dla BMW i",
          ],
        },
      ],
    },
    testimonials: {
      title: "Historie kierowcow",
      description: "Wlasciciele z calej Europy wybieraja nasze studio.",
      items: [
        {
          quote:
            "Odtworzyli kolor mojego M3 do ostatniego tonu. W sloncu lakier zyje.",
          author: "Carlos M.",
          car: "E30 M3 Sport Evo",
        },
        {
          quote:
            "Potrzebujemy perfekcji dla aut klientow. Livery od RC-83 znosi kazdy sprint.",
          author: "Lena P.",
          car: "G82 M4 GT4",
        },
        {
          quote:
            "Moje i4 wyglada jak concept. Satin z ceramika sprawia, ze mycie to chwila.",
          author: "Marek Z.",
          car: "BMW i4 M50",
        },
      ],
    },
    gallery: {
      title: "Zajawki ze studia",
      description: "Podglad zanim udostepnimy pelna galerie.",
      images: [
        {
          src: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d",
          alt: "BMW w oswietleniu studyjnym",
          width: 640,
          height: 480,
        },
        {
          src: "https://images.unsplash.com/photo-1502877338535-766e1452684a",
          alt: "Korekta lakieru BMW",
          width: 640,
          height: 480,
        },
        {
          src: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef",
          alt: "BMW z satynowym wykonczeniem",
          width: 640,
          height: 480,
        },
      ],
    },
    map: {
      title: "Wpadnij do pit lane",
      description:
        "Studio miedzy Monachium i Ingolstadt, kilka minut od Autobahnu.",
      note: "Na razie podglad Map Google bez znacznikow. Pelna wersja wkrotce.",
      cta: "Otworz Google Maps",
    },
  },
};

type LanguageContextValue = {
  language: Locale;
  setLanguage: (locale: Locale) => void;
  copy: Copy;
  supportedLanguages: readonly LanguageOption[];
};

const STORAGE_KEY = "rc83-language";

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined,
);

const resolveStoredLanguage = (): Locale => {
  if (typeof window === "undefined") {
    return "en";
  }
  const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
  return LANGUAGE_OPTIONS.some((option) => option.value === stored) && stored
    ? stored
    : "en";
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Locale>(() =>
    resolveStoredLanguage(),
  );

  const setLanguage = (value: Locale) => {
    setLanguageState(value);
    window.localStorage.setItem(STORAGE_KEY, value);
  };

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      copy: translations[language],
      supportedLanguages: LANGUAGE_OPTIONS,
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

