// ─────────────────────────────────────────────
//  TEAM MEMBERS — edit this file to update the
//  employee gallery on the website.
//
//  Fields:
//    name   – full display name
//    photo  – URL to a portrait photo (square or portrait)
//    role   – job title in English and Danish
//    bio    – short description in English and Danish
// ─────────────────────────────────────────────

export interface TeamMember {
  name: string;
  photo: string;
  role: { en: string; da: string };
  bio: { en: string; da: string };
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Senuja',
    photo: 'https://i.postimg.cc/NjKdX2ZJ/senuja-employyee.jpg',
    role: {
      en: 'Lead IT Technician',
      da: 'Ledende IT-tekniker',
    },
    bio: {
      en: 'Senuja is a skilled IT professional with a hands-on approach from computer hardware, to tech support. Certified in Windows tech support and programming, he has a talent for explaining complex tech in plain language.',
      da: 'Senuja er en dygtig IT-professionel med en praktisk tilgang til alt fra computerhardware til teknisk support. Han er certificeret i Windows teknisk support og programmering og har et talent for at forklare kompleks teknologi på et letforståeligt sprog.',
    },
  },
  {
    name: 'Sewwandi',
    photo: 'https://i.postimg.cc/W1d5Zqx9/ammaemployeenew.jpg',
    role: {
      en: 'support IT Technician',
      da: 'support IT-tekniker',
    },
    bio: {
      en: 'Sewwandi is one of support technicians excelling in customer support and is very helpful. She is good at teaching our customers how to use interfaces.',
      da: 'Sewwandi er en af ​​de supportteknikere, der udmærker sig inden for kundesupport, og hun er meget hjælpsom. Hun er god til at lære vores kunder, hvordan man bruger brugerflader.',
    },
  },
  {
    name: 'Anuhas',
    photo: 'https://i.postimg.cc/hGhQWnVZ/anuhasemployee.jpg',
    role: {
      en: 'support IT Technician',
      da: 'support IT-tekniker',
    },
    bio: {
      en: 'Anuhas is a disciplined IT professional with a strong work ethic and a passion for technology. He is always eager to take on new challenges and provides reliable technical support with a proactive approach and a commitment to getting the job done.',
      da: 'Anuhas er en disciplineret IT-professionel med en stærk arbejdsmoral og en passion for teknologi. Han er altid ivrig efter at tage nye udfordringer op og leverer pålidelig teknisk support med en proaktiv tilgang og en forpligtelse til at få arbejdet gjort.',
    },
  },
  {
    name: 'Selini',
    photo: 'https://i.postimg.cc/kgXd4Y23/seliniemployee.jpg',
    role: {
      en: 'support IT Technician',
      da: 'support IT-tekniker',
    },
    bio: {
      en: 'Selini is a dedicated support technician with a patient and caring approach to helping customers solve technical issues. She is always ready to assist and has a talent for guiding users through challenges with clear explanations and a calm, friendly attitude.',
      da: 'Selini er en dedikeret supporttekniker med en tålmodig og omsorgsfuld tilgang til at hjælpe kunder med at løse tekniske problemer. Hun er altid klar til at hjælpe og har et talent for at guide brugere gennem udfordringer med klare forklaringer og en rolig og venlig attitude.',
    },
  },
];
