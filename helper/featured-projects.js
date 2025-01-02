const allImages = [
  {
    id: 1,
    category: "others",
    alt: "Comandante Ferraz Antarctic Station",
    title: "Comandante Ferraz Antarctic Station for the Brasil's Marine",
    architect: "Arquitecture by Estúdio 41",
    year: "2013",
    location: "Keller Peninsule, Antarctica",
    images: [
      "/assets/webp/card-1.webp",
      "/assets/webp/antartica-station2.webp",
      "/assets/webp/antartica-station3.webp",
      "/assets/webp/antartica-station4.webp",
      "/assets/webp/antartica-station5.webp",
      "/assets/webp/antartica-station6.webp",
    ],
  },
  {
    id: 2,
    category: "others",
    alt: "Shelter",
    title: "Module Shelter by GG Site specific for the European Capital of Culture",
    architect: "Designer Gabriela Gomes, Arq. Adalgisa Lopes. 2012",
    year: "2012",
    location: "Guimarães, Portugal",
    images: [
      "/assets/webp/card-5.webp",
      "/assets/webp/shelter-2.webp",
      "/assets/webp/shelter-3.webp",
      "/assets/webp/shelter-4.webp",
    ],
  },
  {
    id: 3,
    category: "museums",
    alt: "MUDE",
    title: "MUDE - Museum of Fashion and Design",
    architect: "",
    year: "",
    location: "Lisbon, Portugal",
    images: ["/assets/webp/mude.webp"
    ],
  },
  {
    id: 4,
    category: "service",
    alt: "Restaurant Gull",
    title: "Restaurant Gull",
    architect: "Arq. Alfredo Resende.",
    year: "2012",
    location: "Oporto, Portugal",
    images: [
      "/assets/webp/card-11.webp",
    ],
  },
  {
    id: 5,
    category: "others",
    alt: "Monestry of Salvador of Paço de Sousa",
    title: "Monestry of Salvador of Paço de Sousa",
    architect:
      "",
    year: "",
    location: "Paços de Sousa, Portugal",
    images: [
      "/assets/webp/mosteiro-salvador-paco-sousa.webp",
    ],
  },
  {
    id: 6,

    category: "heritage",
    alt: "Boavista Health Center",
    title: "Boavista Health Center",
    architect:
      "Extension project. Participation: SCIE",
    year: "",
    location: "Oporto, Portugal",
    images: [
      "/assets/webp/card-2.webp",
      "/assets/webp/casa-saude-boavista.webp",
    ],
  },
  {
    id: 7,
    category: "museums",
    alt: "Cultural House of Pinhel",
    title: "Cultural House of Pinhel",
    architect:
      "Participation: Project Electricity, Lighting and SCIE.",
    year: "2014",
    location: "Pinhel, Portugal",
    images: [
      "/assets/webp/card-3.webp",
    ],
  },
  {
    id: 8,
    category: "others",
    alt: "Church of Covas do Barroso",
    title: "Church of Covas do Barroso",
    architect: "Participation: Electricity and Lighting.",
    year: "",
    location: "Vila Real, Portugal",
    images: [
      "/assets/webp/card-8.webp",
    ],
  },
  {
    id: 9,
    category: "others",
    alt: "KACST",
    title: "Expansion of the KACST Research Pole",
    architect:
      "Participation: Engineering Design and Lighting technology.",
    year: "",
    location: "Kiyadh, Saudi Arabia",
    images: [
      "/assets/webp/card-4.webp",
    ],
  },
  {
    id: 10,

    category: "education",
    alt: "Secondary School António Arroio",
    title: "Secondary School António Arroio",
    architect:
      "Arquitect Francisco Aires Mateus.",
    year: "2010",
    location: "Lisbon, Portugal",
    images: [
      "/assets/webp/card-13.webp",
    ],
  },
  {
    id: 11,
    category: "residential",
    alt: "Rehabilitation of Multi-household Building",
    title: "Rehabilitation of Multi-household Building",
    architect:
      "Participation: Project Electricity, Lighting and SCIE. Arquitecture RAR Studio.",
    year: "2017-2020",
    location: "Lisbon, Portugal",
    images: [
      "/assets/webp/card-9.webp",
      "/assets/webp/residential-2.webp",
      "/assets/webp/residential-3.webp",
    ],
  },
  {
    id: 12,
    category: "commercial",
    alt: "Embraer Composites Factory",
    title: "Embraer Composites Factory",
    architect:
      "Arq. Alexandre Burmester.",
    year: "2011",
    location: "Évora, Portugal",
    images: [
      "/assets/webp/embraer-1.webp",
    ],
  },
  {
    id: 13,
    category: "service",
    alt: "Sapienta Boutique Hotel",
    title: "Sapienta Boutique Hotel",
    architect:
      "Participation: Project Electricity, Lighting and SCIE.",
    year: "",
    location: "Coimbra, Portugal",
    images: [
      "/assets/webp/sapienta-hotel.webp",
    ],
  },
  {
    id: 14,
    category: "others",
    alt: "Kigali Bugesera Airport",
    title: "Kigali Bugesera Airport",
    architect:
      "Participation: Project Electricity, Lighting and SCIE.",
    year: "2017",
    location: "Rilima, Rwanda",
    images: [
      "/assets/webp/aeroporto-buguesera-2.webp",
      "/assets/webp/aeroporto-buguesera.webp",
    ],
  },
  {
    id: 15,
    category: "commercial",
    alt: "Tratolixo's Social Building",
    title: "Tratolixo's Social Building",
    architect:
      "",
    year: "",
    location: "Abrunheira, Portugal",
    images: ["/assets/webp/tratolixo-social.webp"],
  },
  {
    id: 16,
    category: "others",
    alt: "MJA Gym",
    title: "MJA Gym Center",
    architect:
      "Arq. Maria João Andrade e Silva",
    year: "2012",
    location: "Odivelas, Portugal",
    images: ["/assets/webp/card-16.webp"],
  },
  {
    id: 17,
    category: "heritage",
    alt: "Lisboa Oriental new hospital",
    title: "Lisboa Oriental's new hospital",
    architect: "Arq. Eduardo Souto Moura",
    year: "2010",
    location: "Lisbon, Portugal",
    images: [
      "/assets/webp/hospital-lisboa-oriental.webp",
    ],
  },
  {
    id: 18,
    category: "others",
    alt: "Mechanic connections for Virtude's trail paths",
    title: "Mechanic connections for Virtude's trail paths",
    architect: "Participation: Project Electricity, Lighting and SCIE.",
    year: "",
    location: "Porto, Portugal",
    images: [
      "/assets/webp/virtudes-porto.webp",
    ],
  },
  {
    id: 19,
    category: "heritage",
    alt: "Heritage Building 2",
    title: "Évora's new hospital",
    architect: "Arq. Eduardo Souto Moura",
    year: "2011",
    location: "Évora, Portugal",
    images: ["/assets/webp/novo-hospital-evora.webp"],
  },
  {
    id: 20,
    category: "museums",
    alt: "National Museum of Music",
    title: "National Museum of Music",
    architect: "",
    year: "",
    location: "Mafra, Portugal",
    images: [
      "/assets/webp/museu-musica.webp",
    ],
  },
  {
    id: 21,
    category: "museums",
    alt: "National Coach Museum",
    title: "National Coach Museum",
    architect:
      "Arq. Paulo Mendes da Rocha.",
    year: "2010-2011",
    location: "Lisbon, Portugal",
    images: [
      "/assets/webp/museu-coches.webp",
    ],
  },
  {
    id: 22,
    category: "service",
    alt: "Restaurant Alfaiate",
    title: "Restaurant Alfaiate",
    architect:
      "Complete renovation project of the facilities.",
    year: "2012",
    location: "Porto, Portugal",
    images: [
      "/assets/webp/restaurante-alfaiate.webp",
    ],
  },
  {
    id: 23,
    category: "museums",
    alt: "Miguel Torga Cultural Center",
    title: "Miguel Torga Cultural Center",
    architect:
      "Arq. Gabriel Andrade-DRCN.",
    year: "2015",
    location: "Sabrosa, Portugal",
    images: [
      "/assets/webp/casa-museu-miguel-torga.webp",
    ],
  },
  {
    id: 24,
    category: "service",
    alt: "Hostel M at Largo São Domingos",
    title: "Hostel M at Largo São Domingos",
    architect: "Arq. PedraLiquida.",
    year: "2013",
    location: "Porto, Portugal",
    images: [
      "/assets/webp/card-6.webp",
    ],
  },
  {
    id: 25,
    category: "service",
    alt: "Various fuel stations in Angola",
    title: "Various fuel stations in Angola",
    architect:
      "AFRIPLANUS subcontractor.",
    year: "2012-2013",
    location: "Angola",
    images: [
      "/assets/webp/fuel-station.webp",
    ],
  },
];