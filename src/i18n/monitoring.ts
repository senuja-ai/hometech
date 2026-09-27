// Content for the Smart Monitoring (WaterGuard / StableGuard / FireGuard / AgriGuard) flagship section.
// Kept separate from translations.ts because of its size. Same structure for 'en' and 'da'.

export const monitoring = {
  en: {
    badge: 'New · Flagship solution',
    title: 'Smart Monitoring',
    heading: 'Spot leaks, fire risk and problems early – before they become expensive',
    intro:
      'We design and install wireless monitoring for homes, businesses, stables and farms. Long-range LoRaWAN sensors keep watch over water, heat and smoke, temperature, levels and power – and notify the right people the moment something needs attention.',
    ctaPrimary: 'Discuss a pilot project',
    ctaSecondary: 'See how it works',
    pilotNote:
      'WaterGuard, StableGuard, FireGuard and AgriGuard are solution packages we scope together with you. Start with a small pilot and expand once it has proven its value.',

    benefits: [
      { title: 'Early warning', desc: 'Detect leaks, abnormal temperatures and low levels before they turn into damage or downtime.' },
      { title: 'No Wi-Fi at every sensor', desc: 'Battery-powered sensors reach a gateway over long distances – often into basements and outbuildings Wi-Fi cannot reach.' },
      { title: 'Alerts that reach someone', desc: 'Notifications go to the people responsible, with escalation if the first person does not respond.' },
      { title: 'Optional water shutoff', desc: 'With compatible valves and an agreed control design, water can be shut off remotely or automatically.' },
    ],

    productsHeading: 'Four solution packages',
    monitorsLabel: 'Can monitor',
    whereLabel: 'Typical locations',
    featuresLabel: 'Includes',
    products: [
      {
        id: 'waterguard',
        tag: 'Solution concept · Pilot available',
        name: 'WaterGuard',
        tagline: 'Water-leak and property monitoring',
        desc: 'An early-warning system for water damage in the places where leaks start unseen. Sensors watch for water, temperature, water level and flow – and WaterGuard notifies the people responsible, day or night.',
        monitors: ['Water leaks', 'Temperature & frost risk', 'Water levels', 'Water flow & unusual consumption'],
        where: ['Basements', 'Utility rooms', 'Kitchens', 'Plant rooms', 'Rental properties', 'Commercial buildings'],
        features: [
          'Dashboard with live status',
          'Event log of every alarm',
          'Alert escalation to backup contacts',
          'Optional remote or automatic water shutoff*',
        ],
        footnote: '*Requires compatible equipment and an agreed control design.',
      },
      {
        id: 'stableguard',
        tag: 'Solution concept · Pilot available',
        name: 'StableGuard',
        tagline: 'Stable and agricultural monitoring',
        desc: 'A modular system for stables, barns and agricultural buildings. Choose the measurements that matter on your site – and know that animals, water and equipment are fine, even when you are not there.',
        monitors: [
          'Temperature & humidity',
          'Air quality (with suitable sensors)',
          'Water leaks, trough & tank levels',
          'Equipment temperature',
          'Power-loss indication',
          'Doors & access contacts',
          'Outdoor conditions',
          'Gateway & connection status',
        ],
        where: ['Horse stables', 'Barns', 'Livestock buildings', 'Feed & machine stores', 'Water tanks & troughs', 'Remote outbuildings'],
        features: [
          'Built up module by module',
          'One dashboard across buildings',
          'Alerts to owners, staff or neighbours',
          'Optional remote water-valve control*',
        ],
        footnote: '*Equipment is chosen per application – not every sensor measures every value.',
      },
      {
        id: 'fireguard',
        tag: 'Solution concept · Pilot available',
        name: 'FireGuard',
        tagline: 'Fire early warning – for buildings and open land',
        desc: 'One early-warning system for two very different fire risks. Protect your buildings, the land around them – or both – and alert the right people fast.',
        monitors: [] as string[],
        where: [] as string[],
        split: [
          {
            label: 'Buildings',
            title: 'From hotels and offices to barns',
            desc: 'An extra layer of early warning for large and small buildings – technical rooms, basements, storage and outbuildings where problems can start unnoticed. Alerts go straight to facility staff, owners or on-call contacts.',
            monitors: [
              'Smoke & heat',
              'Rapid temperature rise',
              'Electrical cabinets & server rooms',
              'Battery & EV-charging areas',
              'Kitchens & technical rooms',
              'Hay & bale self-heating',
              'Gas / CO (with suitable sensors)',
              'Power status',
            ],
            where: ['Hotels', 'Large office buildings', 'Shared & commercial buildings', 'Warehouses', 'Barns & hay stores', 'Stables', 'Workshops', 'Holiday homes'],
          },
          {
            label: 'Wildfire',
            title: 'Wildfire & open land',
            desc: 'Watch fire-risk conditions and early signs of fire across fields, woodland edges and remote sites – no mains power needed.',
            monitors: [
              'Hot, dry & windy fire-risk weather',
              'Smoke & particles in the air',
              'Temperature & humidity',
              'Vegetation & soil dryness (with suitable sensors)',
            ],
            where: ['Field edges', 'Woodland borders', 'Heath & dunes', 'Straw & stubble fields', 'Campsites', 'Remote sites'],
          },
        ],
        features: [
          'Instant alerts with escalation to on-call staff',
          'Fire-risk weather overview',
          'Event log for documentation',
          'Works where there is no Wi-Fi',
        ],
        footnote: 'Note: FireGuard is a supplementary early-warning system. It does not replace a certified fire alarm system (e.g. ABA) or the fire-safety requirements for your building – in hotels and larger buildings it works alongside the existing system.',
      },
      {
        id: 'agriguard',
        tag: 'Solution concept · Pilot available',
        name: 'AgriGuard',
        tagline: 'Farm, field and land monitoring',
        desc: 'A flexible toolkit for farms, growers and anyone managing land – from a single greenhouse to large estates, parks and sports grounds. Keep an eye on soil, weather, water and storage across your land – so you can water, harvest and protect crops at the right time.',
        monitors: [
          'Soil moisture & temperature',
          'Local weather & rainfall',
          'Frost warnings',
          'Greenhouse climate',
          'Silo, grain & tank levels',
          'Irrigation status & water use',
          'Livestock water supply',
          'Equipment & gate status',
        ],
        where: ['Arable farms', 'Livestock & dairy farms', 'Greenhouses & nurseries', 'Orchards & vineyards', 'Grain stores & silos', 'Hobby farms & estates', 'Parks & sports fields', 'Golf courses'],
        useCasesLabel: 'Common uses',
        useCases: [
          { title: 'Water at the right time', desc: 'Irrigate by soil moisture, not guesswork.' },
          { title: 'Frost protection', desc: 'Early warnings for orchards, crops and greenhouses.' },
          { title: 'Storage under control', desc: 'Grain, feed and tank levels without daily trips.' },
          { title: 'Animals looked after', desc: 'Water supply and stable climate for livestock.' },
          { title: 'Greenhouse climate', desc: 'Temperature and humidity kept in range, day and night.' },
          { title: 'Parks & grounds', desc: 'Irrigation and water use for green areas and pitches.' },
        ],
        startNote: 'A typical pilot: a handful of sensors and one gateway on a single field, greenhouse or barn – then expand season by season.',
        features: [
          'Start small, add sensors season by season',
          'One dashboard across your land',
          'Alerts straight to your phone',
          'Optional irrigation or valve control*',
        ],
        footnote: '*Requires compatible equipment and an agreed control design.',
      },
    ],

    valve: {
      badge: 'Remote water-valve control',
      heading: 'Open, close or automate water – wherever you are',
      body: 'For suitable farm, rural and property applications, a valve can be operated remotely or triggered by a sensor – for example closing the supply when a leak is detected, or filling a trough when the level drops.',
      body2: 'A project typically combines these parts, designed to work together:',
      chain: [
        { title: 'Valve actuator or controller', desc: 'Operates the valve on site' },
        { title: 'LoRaWAN node', desc: 'Reports status and receives commands' },
        { title: 'Gateway', desc: 'Connects the site to the network' },
        { title: 'Application', desc: 'Dashboard, logging and control' },
        { title: 'Operating rules', desc: 'When to act and who to notify' },
      ],
      safety:
        'Every control design is agreed in advance – including manual override and what should happen if power or connection is lost.',
    },

    sitesHeading: 'Where it fits',
    sitesSub: 'From a single basement to many sites across a region.',
    sites: [
      { title: 'Homes & holiday homes', desc: 'Leak and frost alerts while you are at work or away.' },
      { title: 'Rental & shared buildings', desc: 'Early warning across flats, stairwells and common areas.' },
      { title: 'Offices', desc: 'Kitchens, server rooms and plant rooms under watch.' },
      { title: 'Industrial premises', desc: 'Equipment temperature, levels and power status.' },
      { title: 'Stables & farms', desc: 'Animal welfare, water supply and outbuildings.' },
      { title: 'Distributed sites', desc: 'Many locations in one shared overview.' },
    ],

    platformHeading: 'One system, a clear overview',
    platform: [
      { title: 'Dashboards', desc: 'Live status for every sensor, room and building.' },
      { title: 'Event records', desc: 'A time-stamped history of alarms and actions.' },
      { title: 'Alert escalation', desc: 'If no one responds, the next person is notified.' },
      { title: 'Periodic service reporting', desc: 'Regular reports on sensor health, batteries and events.' },
      { title: 'Integration', desc: 'Data can be forwarded to your existing dashboard or platform.' },
      { title: 'Local support', desc: 'Installation and follow-up by our own technicians.' },
    ],

    processHeading: 'How a project begins',
    processSub: 'A clear, low-risk path from the first conversation to a full rollout.',
    steps: [
      { title: 'First conversation', desc: 'We talk about the problem you want to solve, your site and who should be alerted.' },
      { title: 'Site survey & scoping', desc: 'We check radio coverage, locations and existing equipment, and propose sensors and a design.' },
      { title: 'Pilot', desc: 'A small installation proves that sensors, coverage and alerts work in practice.' },
      { title: 'Rollout', desc: 'We expand to more rooms, buildings or sites based on what the pilot showed.' },
      { title: 'Support & reporting', desc: 'Ongoing support, maintenance and periodic service reports.' },
    ],

    validateEyebrow: 'Before we install',
    validateHeading: 'What we validate together',
    validateSub: 'Every site is different. Before a full installation, we confirm the essentials together with you – so the system works from day one.',
    validatePromises: [
      { title: 'Survey before commitment', desc: 'We visit or review your site before proposing anything.' },
      { title: 'Proven on your own site', desc: 'A pilot shows real coverage and alerts – not just a datasheet.' },
      { title: 'Clear scope and price', desc: 'You know what is included before any rollout begins.' },
    ],
    validateCta: 'Book a site survey',
    validate: [
      'Radio coverage on your site – including basements and outbuildings',
      'Which sensors suit each measurement and environment',
      'Compatibility of existing valves, pumps or equipment',
      'The control design, fail-safes and manual override',
      'Integration with your existing network, gateway or platform',
      'Who receives alerts, and how escalation should work',
    ],
    validateNote:
      'We only recommend equipment that fits the application – not every sensor measures every value.',

    faqHeading: 'Frequently asked questions',
    faq: [
      {
        q: 'What can LoRaWAN monitor?',
        a: 'LoRaWAN is a long-range, low-power wireless technology for sensors that send small amounts of data. Typical measurements include water leaks, temperature, humidity, smoke and heat, soil moisture, water and tank levels, flow, door contacts, power status and air quality. The right sensor depends on what and where you want to measure – we help you choose.',
      },
      {
        q: 'Do I need Wi-Fi at every sensor?',
        a: 'No. Sensors communicate by radio with a gateway that can be hundreds of metres away – and in open terrain often several kilometres. Only the gateway needs an internet connection, via cable, Wi-Fi or the mobile network. Many sensors run on batteries for years, depending on how often they report.',
      },
      {
        q: 'Can we use an existing gateway or network?',
        a: 'Often, yes. If you already have a LoRaWAN gateway, or there is suitable network coverage in your area, we assess whether it is reliable enough for your needs. For critical alarms we usually recommend a gateway you control yourself.',
      },
      {
        q: 'Can you install a private gateway?',
        a: 'Yes. We can install and configure a private gateway on your premises, connected via Ethernet, Wi-Fi or the mobile network, so you are not dependent on third-party coverage.',
      },
      {
        q: 'Can the system send alerts or control a valve?',
        a: 'Yes. Depending on the chosen platform, alerts can be sent by e-mail, SMS or app notification, with escalation to backup contacts. With compatible equipment and an agreed control design, the system can also open or close a water valve remotely or automatically.',
      },
      {
        q: 'Can it connect to our existing dashboard or platform?',
        a: 'In many cases, yes. Sensor data can be forwarded using standard integrations such as MQTT, webhooks or APIs. We confirm compatibility with your platform during scoping.',
      },
      {
        q: 'Can we begin with a small pilot?',
        a: 'Yes – and we recommend it. A pilot with a few sensors lets you test coverage, alerts and value on your own site before deciding on a larger rollout.',
      },
      {
        q: 'What support is available after installation?',
        a: 'We offer ongoing support, including help with alerts and settings, battery and sensor replacement, system updates and periodic service reports. The support level is agreed to suit your site.',
      },
    ],

    enquiryHeading: 'Start a conversation',
    enquirySub: 'The more we know, the more useful our first reply will be. If you can, tell us:',
    enquiryItems: [
      'What type of site it is – home, business, stable or farm',
      'What you want to monitor or control',
      'Roughly how many rooms, buildings or locations',
      'Whether you already have a gateway, network or platform',
      'Who should receive alerts',
    ],
    enquiryButton: 'Send an enquiry',
    enquiryPhone: 'Or call 71 87 54 94',
    prefill:
      'Hi HomeTech,\n\nI am interested in smart monitoring (WaterGuard / StableGuard / FireGuard / AgriGuard).\n\nType of site:\nWhat we want to monitor or control:\nNumber of rooms / buildings / locations:\nExisting gateway, network or platform:\nWho should receive alerts:\n',
  },

  da: {
    badge: 'Nyhed · Flagskibsløsning',
    title: 'Smart overvågning',
    heading: 'Opdag lækager, brandrisiko og problemer tidligt – før de bliver dyre',
    intro:
      'Vi designer og installerer trådløs overvågning til hjem, virksomheder, stalde og landbrug. LoRaWAN-sensorer med lang rækkevidde holder øje med vand, varme og røg, temperatur, niveauer og strøm – og giver de rette personer besked, så snart noget kræver opmærksomhed.',
    ctaPrimary: 'Drøft et pilotprojekt',
    ctaSecondary: 'Se hvordan det virker',
    pilotNote:
      'WaterGuard, StableGuard, FireGuard og AgriGuard er løsningspakker, som vi tilpasser sammen med dig. Start med et lille pilotprojekt, og udvid når det har vist sit værd.',

    benefits: [
      { title: 'Tidlig varsling', desc: 'Opdag lækager, unormale temperaturer og lave niveauer, før de bliver til skader eller driftsstop.' },
      { title: 'Ingen Wi-Fi ved hver sensor', desc: 'Batteridrevne sensorer når en gateway over lange afstande – ofte ind i kældre og udhuse, hvor Wi-Fi ikke rækker.' },
      { title: 'Alarmer der når frem', desc: 'Beskeder sendes til de ansvarlige personer – og eskaleres, hvis den første ikke reagerer.' },
      { title: 'Valgfri vandafbrydelse', desc: 'Med kompatible ventiler og et aftalt styringsdesign kan vandet lukkes eksternt eller automatisk.' },
    ],

    productsHeading: 'Fire løsningspakker',
    monitorsLabel: 'Kan overvåge',
    whereLabel: 'Typiske steder',
    featuresLabel: 'Indeholder',
    products: [
      {
        id: 'waterguard',
        tag: 'Løsningskoncept · Pilot mulig',
        name: 'WaterGuard',
        tagline: 'Overvågning af vandlækager og ejendomme',
        desc: 'Et varslingssystem mod vandskader de steder, hvor lækager starter uset. Sensorer holder øje med vand, temperatur, vandstand og flow – og WaterGuard giver de ansvarlige besked, døgnet rundt.',
        monitors: ['Vandlækager', 'Temperatur og frostrisiko', 'Vandstand', 'Vandflow og unormalt forbrug'],
        where: ['Kældre', 'Bryggers', 'Køkkener', 'Teknikrum', 'Udlejningsejendomme', 'Erhvervsbygninger'],
        features: [
          'Dashboard med live-status',
          'Hændelseslog over alle alarmer',
          'Eskalering af alarmer til backup-kontakter',
          'Valgfri ekstern eller automatisk lukning af vandet*',
        ],
        footnote: '*Kræver kompatibelt udstyr og et aftalt styringsdesign.',
      },
      {
        id: 'stableguard',
        tag: 'Løsningskoncept · Pilot mulig',
        name: 'StableGuard',
        tagline: 'Overvågning af stalde og landbrug',
        desc: 'Et modulopbygget system til hestestalde, lader og landbrugsbygninger. Vælg de målinger, der betyder noget på netop dit sted – og vid, at dyr, vand og udstyr har det godt, også når du ikke er der.',
        monitors: [
          'Temperatur og luftfugtighed',
          'Luftkvalitet (med egnede sensorer)',
          'Vandlækager, trug- og tankniveauer',
          'Temperatur på udstyr',
          'Indikation af strømsvigt',
          'Døre og adgangskontakter',
          'Udendørs forhold',
          'Status for gateway og forbindelse',
        ],
        where: ['Hestestalde', 'Lader', 'Staldbygninger', 'Foder- og maskinhuse', 'Vandtanke og drikkekar', 'Fjerntliggende udhuse'],
        features: [
          'Opbygges modul for modul',
          'Ét dashboard på tværs af bygninger',
          'Alarmer til ejere, personale eller naboer',
          'Valgfri fjernstyring af vandventil*',
        ],
        footnote: '*Udstyr vælges efter opgaven – ikke alle sensorer måler alle værdier.',
      },
      {
        id: 'fireguard',
        tag: 'Løsningskoncept · Pilot mulig',
        name: 'FireGuard',
        tagline: 'Tidlig brandvarsling – til bygninger og åbent land',
        desc: 'Ét varslingssystem til to meget forskellige brandrisici. Beskyt dine bygninger, arealerne omkring dem – eller begge dele – og giv de rette personer besked hurtigt.',
        monitors: [] as string[],
        where: [] as string[],
        split: [
          {
            label: 'Bygninger',
            title: 'Fra hoteller og kontorer til lader',
            desc: 'Et ekstra lag tidlig varsling til store og små bygninger – teknikrum, kældre, lagre og udhuse, hvor problemer kan starte ubemærket. Alarmer går direkte til driftspersonale, ejere eller vagthavende.',
            monitors: [
              'Røg og varme',
              'Hurtig temperaturstigning',
              'El-tavler og serverrum',
              'Batteri- og ladeområder til elbiler',
              'Køkkener og teknikrum',
              'Selvopvarmning i hø og baller',
              'Gas / CO (med egnede sensorer)',
              'Strømstatus',
            ],
            where: ['Hoteller', 'Store kontorbygninger', 'Fælles- og erhvervsbygninger', 'Lagerhaller', 'Lader og hølagre', 'Stalde', 'Værksteder', 'Sommerhuse'],
          },
          {
            label: 'Naturbrand',
            title: 'Naturbrand og åbent land',
            desc: 'Hold øje med brandrisiko og tidlige tegn på brand på marker, skovkanter og fjerntliggende steder – uden behov for fast strøm.',
            monitors: [
              'Varmt, tørt og blæsende brandvejr',
              'Røg og partikler i luften',
              'Temperatur og luftfugtighed',
              'Tørhed i vegetation og jord (med egnede sensorer)',
            ],
            where: ['Markkanter', 'Skovbryn', 'Hede og klitter', 'Halm- og stubmarker', 'Campingpladser', 'Fjerntliggende steder'],
          },
        ],
        features: [
          'Øjeblikkelige alarmer med eskalering til vagthavende',
          'Overblik over brandrisiko-vejr',
          'Hændelseslog til dokumentation',
          'Virker, hvor der ikke er Wi-Fi',
        ],
        footnote: 'Bemærk: FireGuard er et supplerende varslingssystem. Det erstatter ikke et certificeret brandalarmanlæg (fx ABA) eller brandsikkerhedskrav til din bygning – i hoteller og større bygninger fungerer det som supplement til det eksisterende anlæg.',
      },
      {
        id: 'agriguard',
        tag: 'Løsningskoncept · Pilot mulig',
        name: 'AgriGuard',
        tagline: 'Overvågning af landbrug, marker og arealer',
        desc: 'En fleksibel værktøjskasse til landbrug, gartnerier og alle, der forvalter jord – fra et enkelt drivhus til store godser, parker og idrætsanlæg. Hold øje med jord, vejr, vand og lagre på tværs af dine arealer – så du kan vande, høste og beskytte afgrøderne på det rette tidspunkt.',
        monitors: [
          'Jordfugtighed og jordtemperatur',
          'Lokalt vejr og nedbør',
          'Frostvarsling',
          'Klima i drivhuse',
          'Niveau i siloer, korn og tanke',
          'Vandingsstatus og vandforbrug',
          'Vandforsyning til dyr',
          'Status for udstyr og låger',
        ],
        where: ['Planteavl', 'Kvæg- og malkebedrifter', 'Drivhuse og planteskoler', 'Frugtplantager og vinmarker', 'Kornlagre og siloer', 'Hobbylandbrug og godser', 'Parker og idrætsanlæg', 'Golfbaner'],
        useCasesLabel: 'Typisk brug',
        useCases: [
          { title: 'Vand på det rette tidspunkt', desc: 'Vand efter jordfugtighed – ikke mavefornemmelse.' },
          { title: 'Frostbeskyttelse', desc: 'Tidlig varsling til frugt, afgrøder og drivhuse.' },
          { title: 'Styr på lagrene', desc: 'Korn-, foder- og tankniveauer uden daglige ture.' },
          { title: 'Dyrene er passet', desc: 'Vandforsyning og staldklima til husdyr.' },
          { title: 'Klima i drivhuset', desc: 'Temperatur og luftfugtighed holdt på plads, døgnet rundt.' },
          { title: 'Parker og grønne arealer', desc: 'Vanding og vandforbrug til grønne områder og baner.' },
        ],
        startNote: 'Et typisk pilotprojekt: en håndfuld sensorer og én gateway på en enkelt mark, et drivhus eller en lade – og derefter udvidelse sæson for sæson.',
        features: [
          'Start i det små, udvid sæson for sæson',
          'Ét dashboard på tværs af dine arealer',
          'Alarmer direkte på din telefon',
          'Valgfri styring af vanding eller ventiler*',
        ],
        footnote: '*Kræver kompatibelt udstyr og et aftalt styringsdesign.',
      },
    ],

    valve: {
      badge: 'Fjernstyring af vandventiler',
      heading: 'Åbn, luk eller automatisér vandet – uanset hvor du er',
      body: 'Til egnede opgaver i landbrug, på landet og i ejendomme kan en ventil betjenes eksternt eller udløses af en sensor – for eksempel ved at lukke for vandet, når der registreres en lækage, eller fylde et drikkekar, når niveauet falder.',
      body2: 'Et projekt kombinerer typisk disse dele, der er designet til at arbejde sammen:',
      chain: [
        { title: 'Ventilaktuator eller controller', desc: 'Betjener ventilen på stedet' },
        { title: 'LoRaWAN-node', desc: 'Sender status og modtager kommandoer' },
        { title: 'Gateway', desc: 'Forbinder stedet til netværket' },
        { title: 'Applikation', desc: 'Dashboard, logning og styring' },
        { title: 'Driftsregler', desc: 'Hvornår der handles, og hvem der får besked' },
      ],
      safety:
        'Hvert styringsdesign aftales på forhånd – herunder manuel betjening, og hvad der skal ske, hvis strøm eller forbindelse forsvinder.',
    },

    sitesHeading: 'Hvor det passer ind',
    sitesSub: 'Fra en enkelt kælder til mange lokationer i hele regionen.',
    sites: [
      { title: 'Hjem og sommerhuse', desc: 'Lækage- og frostalarmer, mens du er på arbejde eller væk.' },
      { title: 'Udlejnings- og fællesbygninger', desc: 'Tidlig varsling i lejligheder, opgange og fællesarealer.' },
      { title: 'Kontorer', desc: 'Køkkener, serverrum og teknikrum under opsyn.' },
      { title: 'Industrilokaler', desc: 'Udstyrstemperatur, niveauer og strømstatus.' },
      { title: 'Stalde og landbrug', desc: 'Dyrevelfærd, vandforsyning og udhuse.' },
      { title: 'Spredte lokationer', desc: 'Mange steder samlet i ét overblik.' },
    ],

    platformHeading: 'Ét system, klart overblik',
    platform: [
      { title: 'Dashboards', desc: 'Live-status for hver sensor, hvert rum og hver bygning.' },
      { title: 'Hændelseslog', desc: 'En tidsstemplet historik over alarmer og handlinger.' },
      { title: 'Eskalering af alarmer', desc: 'Hvis ingen reagerer, får den næste person besked.' },
      { title: 'Periodisk servicerapportering', desc: 'Løbende rapporter om sensorernes tilstand, batterier og hændelser.' },
      { title: 'Integration', desc: 'Data kan sendes videre til dit eksisterende dashboard eller system.' },
      { title: 'Lokal support', desc: 'Installation og opfølgning ved vores egne teknikere.' },
    ],

    processHeading: 'Sådan starter et projekt',
    processSub: 'En klar vej med lav risiko fra første samtale til fuld udrulning.',
    steps: [
      { title: 'Første samtale', desc: 'Vi taler om det problem, du vil løse, dit sted, og hvem der skal have besked.' },
      { title: 'Besigtigelse og afgrænsning', desc: 'Vi tjekker radiodækning, placeringer og eksisterende udstyr og foreslår sensorer og et design.' },
      { title: 'Pilotprojekt', desc: 'En lille installation viser, at sensorer, dækning og alarmer virker i praksis.' },
      { title: 'Udrulning', desc: 'Vi udvider til flere rum, bygninger eller lokationer ud fra erfaringerne fra piloten.' },
      { title: 'Support og rapportering', desc: 'Løbende support, vedligeholdelse og periodiske servicerapporter.' },
    ],

    validateEyebrow: 'Før vi installerer',
    validateHeading: 'Det afklarer vi sammen',
    validateSub: 'Alle steder er forskellige. Før en fuld installation afklarer vi det væsentlige sammen med dig – så systemet virker fra første dag.',
    validatePromises: [
      { title: 'Besigtigelse før forpligtelse', desc: 'Vi besøger eller gennemgår dit sted, før vi foreslår noget.' },
      { title: 'Afprøvet på dit eget sted', desc: 'En pilot viser reel dækning og alarmer – ikke kun et datablad.' },
      { title: 'Klart omfang og pris', desc: 'Du ved, hvad der er inkluderet, før en udrulning begynder.' },
    ],
    validateCta: 'Book en besigtigelse',
    validate: [
      'Radiodækning på stedet – også i kældre og udhuse',
      'Hvilke sensorer der passer til hver måling og hvert miljø',
      'Kompatibilitet med eksisterende ventiler, pumper eller udstyr',
      'Styringsdesign, fejlsikring og manuel betjening',
      'Integration med dit eksisterende netværk, gateway eller system',
      'Hvem der modtager alarmer, og hvordan eskalering skal fungere',
    ],
    validateNote:
      'Vi anbefaler kun udstyr, der passer til opgaven – ikke alle sensorer måler alle værdier.',

    faqHeading: 'Ofte stillede spørgsmål',
    faq: [
      {
        q: 'Hvad kan LoRaWAN overvåge?',
        a: 'LoRaWAN er en trådløs teknologi med lang rækkevidde og lavt strømforbrug til sensorer, der sender små mængder data. Typiske målinger er vandlækager, temperatur, luftfugtighed, røg og varme, jordfugtighed, vand- og tankniveauer, flow, dørkontakter, strømstatus og luftkvalitet. Den rette sensor afhænger af, hvad og hvor du vil måle – vi hjælper dig med at vælge.',
      },
      {
        q: 'Skal der være Wi-Fi ved hver sensor?',
        a: 'Nej. Sensorerne kommunikerer via radio med en gateway, der kan stå flere hundrede meter væk – og i åbent terræn ofte flere kilometer. Kun gatewayen skal have internetforbindelse, via kabel, Wi-Fi eller mobilnettet. Mange sensorer kører på batteri i årevis, afhængigt af hvor ofte de sender data.',
      },
      {
        q: 'Kan vi bruge en eksisterende gateway eller et eksisterende netværk?',
        a: 'Ofte, ja. Hvis du allerede har en LoRaWAN-gateway, eller der er egnet netværksdækning i dit område, vurderer vi, om den er pålidelig nok til dine behov. Til kritiske alarmer anbefaler vi som regel en gateway, du selv har kontrol over.',
      },
      {
        q: 'Kan I installere en privat gateway?',
        a: 'Ja. Vi kan installere og konfigurere en privat gateway hos dig, forbundet via kabel, Wi-Fi eller mobilnettet, så du ikke er afhængig af andres dækning.',
      },
      {
        q: 'Kan systemet sende alarmer eller styre en ventil?',
        a: 'Ja. Afhængigt af den valgte platform kan alarmer sendes som e-mail, SMS eller app-notifikation – med eskalering til backup-kontakter. Med kompatibelt udstyr og et aftalt styringsdesign kan systemet også åbne eller lukke en vandventil eksternt eller automatisk.',
      },
      {
        q: 'Kan det kobles til vores eksisterende dashboard eller system?',
        a: 'I mange tilfælde, ja. Sensordata kan sendes videre via standardintegrationer som MQTT, webhooks eller API’er. Vi bekræfter kompatibiliteten med dit system under afgrænsningen.',
      },
      {
        q: 'Kan vi starte med et lille pilotprojekt?',
        a: 'Ja – og det anbefaler vi. En pilot med få sensorer lader dig teste dækning, alarmer og værdi på dit eget sted, før du beslutter en større udrulning.',
      },
      {
        q: 'Hvilken support får vi efter installationen?',
        a: 'Vi tilbyder løbende support, herunder hjælp til alarmer og indstillinger, udskiftning af batterier og sensorer, systemopdateringer og periodiske servicerapporter. Supportniveauet aftales, så det passer til dit sted.',
      },
    ],

    enquiryHeading: 'Start en samtale',
    enquirySub: 'Jo mere vi ved, jo mere brugbart bliver vores første svar. Fortæl os gerne:',
    enquiryItems: [
      'Hvilken type sted det er – hjem, virksomhed, stald eller landbrug',
      'Hvad du vil overvåge eller styre',
      'Cirka hvor mange rum, bygninger eller lokationer',
      'Om du allerede har en gateway, et netværk eller et system',
      'Hvem der skal modtage alarmer',
    ],
    enquiryButton: 'Send en forespørgsel',
    enquiryPhone: 'Eller ring på 71 87 54 94',
    prefill:
      'Hej HomeTech,\n\nJeg er interesseret i smart overvågning (WaterGuard / StableGuard / FireGuard / AgriGuard).\n\nType af sted:\nHvad vi vil overvåge eller styre:\nAntal rum / bygninger / lokationer:\nEksisterende gateway, netværk eller system:\nHvem skal modtage alarmer:\n',
  },
};

// Opens the contact form with the enquiry template filled in (if the message field is empty).
export const PREFILL_EVENT = 'hometech:prefill-contact';
export function prefillContact(message: string) {
  window.dispatchEvent(new CustomEvent(PREFILL_EVENT, { detail: message }));
}
