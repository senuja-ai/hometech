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
    photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
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
    photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    role: {
      en: 'Lead IT Technician',
      da: 'Ledende IT-tekniker',
    },
    bio: {
      en: 'Sewwandi is a skilled IT professional with a hands-on approach from computer hardware, to tech support. Certified in Windows tech support and programming, she has a talent for explaining complex tech in plain language.',
      da: 'Sewwandi er en dygtig IT-professionel med en praktisk tilgang til alt fra computerhardware til teknisk support. Hun er certificeret i Windows teknisk support og programmering og har et talent for at forklare kompleks teknologi på et letforståeligt sprog.',
    },
  },
  {
    name: 'Anuhas',
    photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    role: {
      en: 'Lead IT Technician',
      da: 'Ledende IT-tekniker',
    },
    bio: {
      en: 'Anuhas is a skilled IT professional with a hands-on approach from computer hardware, to tech support. Certified in Windows tech support and programming, he has a talent for explaining complex tech in plain language.',
      da: 'Anuhas er en dygtig IT-professionel med en praktisk tilgang til alt fra computerhardware til teknisk support. Han er certificeret i Windows teknisk support og programmering og har et talent for at forklare kompleks teknologi på et letforståeligt sprog.',
    },
  },
];
