export type Lang = 'en' | 'da';

export const translations = {
  en: {
    nav: {
      ForHomes: 'For Homes',
      ForCompanies: 'For Companies',
      whyUs: 'Why Us',
      about: 'About',
      contact: 'Contact',
    },
    hero: {
      badge: 'Available Copenhagen-wide',
      heading1: 'IT support',
      heading2: 'for homes and businesses',
      subheading: 'IT support that comes to you',
      subheadingYou: '- accessible for all',
      tagline: 'Troubleshooting · IT systems · Hardware upgrades · Customer Support',
      taglineSub: 'Personal & professional service',
      highlights: [
        'We come to your doorstep',
        'Fast help at fair prices',
        'Friendly & patient service',
        'English spoken',
      ],
      cta1: '71 87 54 94',
      cta2: 'Contact us',
      areaLabel: 'Service area',
    },
    about: {
      badge: 'About Us',
      heading: 'Who We Are',
      subtitle: 'Local, certified IT professionals — we make technology easy for everyone.',
      body: 'HomeTech Denmark was born out of a simple idea: everyone deserves reliable, friendly IT support at home. Based in Amager, we serve households across Dragør, Tårnby, and Copenhagen — showing up in person so you never have to struggle alone with a frustrating tech problem.',
      body2: 'Whether you\'re 18 or 85, we take the time to explain everything clearly, fix it properly, and make sure you feel confident using your devices before we leave.',
      certifiedBadge: 'Certified & Trusted',
      certifiedText: 'Our technicians hold recognised IT certifications and keep their skills up to date. You\'re in safe hands — we treat your home and equipment with the same respect we\'d want for our own.',
      stats: [
        { value: '100%', label: 'Satisfaction goal' },
      ],
    },
    ForHomes: {
      badge: 'For Homes',
      heading: 'How do we help your home?',
      subtitle: 'From personal computers to smart home devices',
      bottomNote: "Not sure if we can help ? Give us a call – we'll figure it out together.",
      cards: [
        {
          title: 'Device Maintenance',
          subtitle: 'Caring for your devices',
          items : ['Improve Computer Performance', 'New Computer & Device Setup', 'Data Transfer to New Devices', 'Software Installation & Updates', 'Printer & Peripheral Setup', 'Remote Technical Support'],
        },        
        {
          title: 'Better Connectivity',
          subtitle: 'Connecting your home',
          items : ['Improve Wi-Fi Coverage','Resolve Slow or Unstable Internet','Home Network Optimisation','Router Installation & Configuration','Home Office Connectivity','Network Health Check'],
        },
        {
          title: 'Digital Safety',
          subtitle: 'Protecting your digital identity',
          items: ['Device Security Health Check', 'Online Safety Check', 'Password & Account Protection', 'Scam Prevention Guidance', 'Backup & Recovery Planning', 'Privacy & Security Advice'],
        },
        {
          title: 'Data recovery & Backup',
          subtitle: 'Family-Photo Care',
          items: ['Organize Photos & Videos', 'Cloud Storage & Backup Setup', 'Move Data to New Devices', 'Video Calling Setup', 'Technology Support', 'Family Digital Archive'],
        },
      ],
    },
    ForCompanies: {
      badge: 'For Companies',
      heading: 'How do we help your business?',
      subtitle: 'From servers to office systems',
      bottomNote: "Not sure if we can help? Give us a call – we'll figure it out together.",
      cards: [
        {
          title: 'Automation and Optimization',
          subtitle: 'Automate tasks and optimize workflows',
          items: ['Workflow Automation', 'AI Business Solutions', 'Business Process Optimisation', 'Custom Business Applications', 'Dashboards & Reporting', 'System Integration'],
        },
        {
          title: 'Company Network Support',
          subtitle: 'Support the digital backbone of your business',
          items: ['Business Network Design & Upgrades', 'Improve Network Performance', 'Secure Business Networks', 'Business Wi-Fi Solutions', 'Secure Remote Access (VPN)', 'Network Health Assessments'],
        },
        {
          title: 'Staff Technical Training',
          subtitle: 'Helping businesses build stronger IT teams',
          items: ['Enterprise Network Engineering', 'Network Troubleshooting Workshops', 'Python & Network Automation', 'AI for IT Teams', 'Technical Mentoring', 'Knowledge Transfer'],
        },
        {
          title: 'Data Center Remote-hands Support',
          subtitle: 'Have a swift team ready to fulfill your data center needs',
          items: ['Rack & Stack Services', 'Equipment Installation & Decommissioning', 'Hardware Replacement (RMA)', 'Console Access & Remote Engineering Support', 'Optical Power & Link Verification', 'Smart Hands & Emergency Support'],
        },
      ],
    },
    team: {
      badge: 'Our Team',
      heading: 'The people behind HomeTech',
      subtitle: 'Friendly faces you can trust to come to your home and get things working.',
    },
    whyUs: {
      badge: 'Why us',
      heading: 'Why choose HomeTech?',
      subtitle: 'Local, friendly, and professional – we make technology simple for you.',
      bannerText: '"We come to you!"',
      reasons: [
        {
          title: 'We come to your home',
          desc: 'No need to carry heavy equipment anywhere – we show up at your door.',
        },
        {
          title: 'Fast response',
          desc: 'We aim to help you as quickly as possible so you can get back online.',
        },
        {
          title: 'Friendly & patient',
          desc: 'We explain things clearly, without jargon. No question is too small.',
        },
        {
          title: 'Fair prices',
          desc: 'Transparent and competitive pricing – you always know what you pay.',
        },
        {
          title: 'Personal & professional',
          desc: 'Local, trusted, and dedicated to giving you the best experience.',
        },
      ],
    },
    contact: {
      badge: 'Contact',
      heading: 'Get in touch',
      subtitle: "We're happy to help – reach out any way you like.",
      info: {
        heading: 'Contact Information',
        phoneLabel: 'Phone',
        emailLabel: 'E-mail',
        chatLabel: 'WhatsApp / Chat',
        chatSub: 'Chat with us',
        areaLabel: 'Service area',
      },
      facebook: {
        title: 'Find us on Facebook',
        sub: 'Visit our Facebook page',
      },
      form: {
        heading: 'Send a message',
        sub: "We'll get back to you as soon as possible.",
        nameLabel: 'Name',
        namePlaceholder: 'Your full name',
        emailLabel: 'E-mail',
        phoneLabel: 'Phone',
        phonePlaceholder: '12 34 56 78',
        messageLabel: 'Message',
        messagePlaceholder: 'Describe what you need help with…',
        submit: 'Send message',
      },
      success: {
        heading: 'Thank you!',
        sub: "Your message has been sent. We'll get back to you soon.",
      },
    },
    footer: {
      tagline: 'Your personal home IT support.',
      servicesHeading: 'Services',
      servicesList: ['Computer & Laptop', 'Wi-Fi & Internet', 'Printer & E-mail', 'Phone & TV', 'Remote support'],
      contactHeading: 'Contact',
      areaLabel: 'Amager area, Copenhagen',
      copyright: 'All rights reserved.',
      slogan: 'We come to you',
    },
  },

  da: {
    nav: {
      ForHomes: 'Til Boliger',
      ForCompanies: 'Til Virksomeheder',
      whyUs: 'Hvorfor os',
      about: 'Om os',
      contact: 'Kontakt',
    },
    hero: {
      badge: 'Tilgængelig i hele København',
      heading1: 'IT-support',
      heading2: 'til hjem og virksomheder',
      subheading: 'IT-support der kommer til dig',
      subheadingYou: '- tilgængelig for alle',
      tagline: 'Fejlfinding · IT-systemer · Hardwareopgraderinger · Kundesupport',
      taglineSub: 'Personlig og professionel service',
      highlights: [
        'Vi kommer hjem til din dør',
        'Hurtig hjælp · Rimelige priser',
        'Venlig og tålmodig service',
        'Engelsk',
      ],
      cta1: '71 87 54 94',
      cta2: 'Kontakt os',
      areaLabel: 'Betjeningsområde',
    },
    about: {
      badge: 'Om os',
      heading: 'Hvem er vi?',
      subtitle: 'Lokale, certificerede IT-fagfolk — vi gør teknologi let for alle.',
      body: 'HomeTech Denmark er opstået ud af en simpel idé: alle fortjener pålidelig og venlig IT-support derhjemme. Med base på Amager betjener vi husstande i Dragør, Tårnby og København — vi møder op i person, så du aldrig behøver at kæmpe alene med et frustrerende teknologiproblem.',
      body2: 'Uanset om du er 18 eller 85 år, tager vi os tid til at forklare alt tydeligt, løse problemet ordentligt og sikre, at du er tryg ved at bruge dine enheder, inden vi tager af sted.',
      certifiedBadge: 'Certificerede & Pålidelige',
      certifiedText: 'Vores teknikere har anerkendte IT-certificeringer og holder løbende deres kompetencer opdaterede. Du er i trygge hænder — vi behandler dit hjem og udstyr med samme respekt, som vi ønsker for vores eget.',
      stats: [
        { value: '100%', label: 'Tilfredshedsmål' },
      ],
    },
    ForHomes: {
    badge: 'Til hjemmet',
    heading: 'Hvordan hjælper vi dit hjem?',
    subtitle: 'Fra personlige computere til smarte hjemmeenhederFra personlige computere til smarte hjemmeenheder',
    bottomNote: "Er du ikke sikker på, om vi kan hjælpe? Ring til os – så finder vi ud af det sammen.",
    cards: [
    {
    title: 'Enhedsvedligeholdelse',
    subtitle: 'Pleje af dine enheder',
    items: ['Forbedring af computerens ydeevne', 'Opsætning af ny computer og enhed', 'Dataoverførsel til nye enheder', 'Installation og opdatering af software', 'Opsætning af printer og tilbehør', 'Fjernsupport'],
    },
    {
    title: 'Bedre internetforbindelse',
    subtitle: 'Forbindelse til dit hjem',
    items: ['Forbedring af Wi-Fi-dækning', 'Løsning af langsomt eller ustabilt internet', 'Optimering af hjemmenetværk', 'Installation og opsætning af router', 'Forbindelse til hjemmekontor', 'Tjek af netværkets tilstand'],
    },
    {
    title: 'Digital sikkerhed',
    subtitle: 'Beskyttelse af din digitale identitet',
    items: ['Sikkerhedstjek af enhed', 'Online sikkerhedstjek', 'Beskyttelse af adgangskoder og konti', 'Vejledning i svindelforebyggelse', 'Planlægning af backup og genoprettelse', 'Rådgivning om privatliv og sikkerhed'],
    },
    {
    title: 'Datagenoprettelse & Backup',
    subtitle: 'Pleje af familiebilleder',
    items: ['Organisering af billeder og videoer', 'Opsætning af cloud-lagring og backup', 'Flytning af data til nye enheder', 'Opsætning af videoopkald', 'Teknologisk support', 'Digitalt familiearkiv'],
        },
      ],
    },
    ForCompanies: {
    badge: 'Til virksomheder',
    heading: 'Hvordan hjælper vi din virksomhed?',
    subtitle: 'Fra servere til kontorsystemer',
    bottomNote: "Er du ikke sikker på, om vi kan hjælpe? Ring til os – så finder vi ud af det sammen.",
    cards: [
    {
    title: 'Automatisering og optimering',
    subtitle: 'Automatiser opgaver og optimer arbejdsgange',
    items: ['Automatisering af arbejdsgange', 'AI-forretningsløsninger', 'Optimering af forretningsprocesser', 'Skræddersyede forretningsapplikationer', 'Dashboards og rapportering', 'Systemintegration'],
    },
    {
    title: 'Netværkssupport til virksomheder',
    subtitle: 'Support til den digitale rygrad i din virksomhed',
    items: ['Design og opgradering af virksomhedsnetværk', 'Forbedring af netværksydeevne', 'Sikre virksomhedsnetværk', 'Wi-Fi-løsninger til erhverv', 'Sikker fjernadgang (VPN)', 'Sundhedstjek af netværk'],
    },
    {
    title: 'Teknisk træning af medarbejdere',
    subtitle: 'Hjælp til virksomheder med at opbygge stærkere IT-teams',
    items: ['Netværksingeniørarbejde for virksomheder', 'Workshops i fejlfinding på netværk', 'Python og netværksautomatisering', 'AI til IT-teams', 'Teknisk mentorskab', 'Vidensdeling'],
    },
    {
    title: 'Remote-hands support til datacentre',
    subtitle: 'Hav et hurtigt team klar til at opfylde dine datacenterbehov',
    items: ['Rack & Stack-tjenester', 'Installation og nedlukning af udstyr', 'Udskiftning af hardware (RMA)', 'Konsoladgang og teknisk fjernsupport', 'Verificering af optisk effekt og link', 'Smart Hands & nødsupport'],
        },
      ],
    },
    team: {
      badge: 'Vores team',
      heading: 'Folkene bag HomeTech',
      subtitle: 'Venlige ansigter du kan stole på – vi kommer hjem til dig og løser problemet.',
    },
    whyUs: {
      badge: 'Hvorfor os',
      heading: 'Hvorfor vælge HomeTech?',
      subtitle: 'Lokal, venlig og professionel – vi gør teknologi enkelt for dig.',
      bannerText: '"Vi kommer hjem til dig!"',
      reasons: [
        {
          title: 'Vi kommer hjem til dig',
          desc: 'Intet behov for at slæbe tungt udstyr nogen steder – vi møder op ved din dør.',
        },
        {
          title: 'Hurtig hjælp',
          desc: 'Vi bestræber os på at hjælpe dig så hurtigt som muligt, så du kommer online igen.',
        },
        {
          title: 'Venlig og tålmodig',
          desc: 'Vi forklarer tingene klart og uden fagudtryk. Intet spørgsmål er for småt.',
        },
        {
          title: 'Rimelige priser',
          desc: 'Gennemsigtig og konkurrencedygtig prissætning – du ved altid, hvad du betaler.',
        },
        {
          title: 'Personlig og professionel',
          desc: 'Lokal, pålidelig og dedikeret til at give dig den bedste oplevelse.',
        },
      ],
    },
    contact: {
      badge: 'Kontakt',
      heading: 'Tag fat i os',
      subtitle: 'Vi hjælper gerne – kontakt os på den måde, der passer dig bedst.',
      info: {
        heading: 'Kontaktoplysninger',
        phoneLabel: 'Telefon',
        emailLabel: 'E-mail',
        chatLabel: 'WhatsApp / Chat',
        chatSub: 'Chatte med os',
        areaLabel: 'Betjeningsområde',
      },
      facebook: {
        title: 'Find os på Facebook',
        sub: 'Besøg vores Facebook-side',
      },
      form: {
        heading: 'Send en besked',
        sub: 'Vi svarer hurtigst muligt.',
        nameLabel: 'Navn',
        namePlaceholder: 'Dit fulde navn',
        emailLabel: 'E-mail',
        phoneLabel: 'Telefon',
        phonePlaceholder: '12 34 56 78',
        messageLabel: 'Besked',
        messagePlaceholder: 'Beskriv hvad du har brug for hjælp til…',
        submit: 'Send besked',
      },
      success: {
        heading: 'Tak!',
        sub: 'Din besked er afsendt. Vi vender tilbage snarest.',
      },
    },
    footer: {
      tagline: 'Din personlige IT-hjælp i hjemmet.',
      servicesHeading: 'Tjenester',
      servicesList: ['Computer & Laptop', 'Wi-Fi & Internet', 'Printer & E-mail', 'Telefon & TV', 'Fjernsupport'],
      contactHeading: 'Kontakt',
      areaLabel: 'Amagerområdet, København',
      copyright: 'Alle rettigheder forbeholdes.',
      slogan: 'Vi kommer hjem til dig',
    },
  },
} as const;

export type T = typeof translations['en'];
