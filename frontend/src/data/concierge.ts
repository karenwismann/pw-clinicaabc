export interface HotelItem {
  id: string;
  name: string;
  stars: number;
  phone: string;
  phoneRaw: string;
  address: string;
  googleMapsUrl: string;
}

export interface PharmacyItem {
  id: string;
  name: string;
  phones: { display: string; raw: string }[];
  address: string;
  hours: {
    es: string;
    en: string;
  };
  email?: string;
  is24Hours?: boolean;
  googleMapsUrl: string;
}

export const CONCIERGE_HOTELS: HotelItem[] = [
  {
    id: "camino-real-santa-fe",
    name: "CAMINO REAL SANTA FE MÉXICO",
    stars: 4,
    phone: "+52 (55) 5004 1616",
    phoneRaw: "+525550041616",
    address: "C. Guillermo Gonzalez Camarena 300, Santa Fe, Zedec Sta Fé, Álvaro Obregón, 01219 Ciudad de México, CDMX.",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Camino+Real+Santa+Fe+Mexico"
  },
  {
    id: "hilton-mexico-city-santa-fe",
    name: "HILTON MEXICO CITY SANTA FE",
    stars: 4,
    phone: "+52 (55) 5985 9000",
    phoneRaw: "+525559859000",
    address: "Antonio Dovali Jaime 70, Santa Fe, Zedec Sta Fé, Álvaro Obregón, 01376 Ciudad de México, CDMX.",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hilton+Mexico+City+Santa+Fe"
  },
  {
    id: "hyatt-house-santa-fe",
    name: "HYATT HOUSE MEXICO CITY/SANTA FE",
    stars: 4,
    phone: "+52 (55) 5282 1234",
    phoneRaw: "+525552821234",
    address: "Prol, Vasco de Quiroga #4001, Santa Fe, Cuajimalpa de Morelos, 05348 Ciudad de México, CDMX.",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Hyatt+House+Mexico+City+Santa+Fe"
  },
  {
    id: "jw-marriott-santa-fe",
    name: "HOTEL JW MARRIOTT SANTA FÉ CIUDAD DE MÉXICO",
    stars: 5,
    phone: "+52 (55) 5292 7272",
    phoneRaw: "+525552927272",
    address: "Av. Santa Fe 160, Santa Fe, Zedec Sta Fé, Álvaro Obregón, 01219 Ciudad de México, CDMX.",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=JW+Marriott+Hotel+Mexico+City+Santa+Fe"
  },
  {
    id: "nh-collection-santa-fe",
    name: "HOTEL NH COLLECTION MEXICO CITY SANTA FE",
    stars: 4,
    phone: "+52 (55) 9177 7380",
    phoneRaw: "+525591777380",
    address: "Juan Salvador Agraz 44, Lomas de Santa Fe, Contadero, Cuajimalpa de Morelos, 05109 Ciudad de México, CDMX.",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=NH+Collection+Mexico+City+Santa+Fe"
  },
  {
    id: "stadia-suites-santa-fe",
    name: "STADÍA SUITES MEXICO CITY SANTA FE",
    stars: 4,
    phone: "+52 (55) 5004 2000",
    phoneRaw: "+525550042000",
    address: "Juan Salvador Agraz 60, Lomas de Santa Fe, Contadero, Cuajimalpa de Morelos, 05348 Ciudad de México, CDMX.",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Stadia+Suites+Mexico+City+Santa+Fe"
  },
  {
    id: "westin-santa-fe",
    name: "THE WESTIN SANTA FE",
    stars: 4,
    phone: "+52 (55) 5089 8000",
    phoneRaw: "+525550898000",
    address: "Av. Javier Barros Sierra 540, Santa Fe, Lomas de Sta Fé, Álvaro Obregón, 01219 Ciudad de México, CDMX.",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=The+Westin+Santa+Fe+Mexico+City"
  }
];

export const CONCIERGE_PHARMACIES: PharmacyItem[] = [
  {
    id: "farmacia-hospital-abc",
    name: "FARMACIA HOSPITAL ABC DE SANTA FE",
    phones: [
      { display: "+52 (55) 1103 1675", raw: "+525511031675" }
    ],
    address: "Av. Carlos Graef Fernández 154 PB, Col. Tlaxala C.P. 05300",
    hours: {
      es: "Lunes a Viernes de 10:00 a 21:00 hrs y Sábado de 10:00 a 14:00 hrs",
      en: "Monday to Friday 10:00 - 21:00 hrs and Saturday 10:00 - 14:00 hrs"
    },
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Farmacia+Hospital+ABC+Santa+Fe"
  },
  {
    id: "farmacia-san-isidro",
    name: "FARMACIA SAN ISIDRO SANTA FE",
    phones: [
      { display: "(55) 5292 0361", raw: "+525552920361" },
      { display: "(55) 5292 9899", raw: "+525552929899" },
      { display: "(55) 5442 1106", raw: "+525554421106" }
    ],
    address: "Av. Vasco de Quiroga No. 3900 Nivel 1 local 11, Col. Lomas de Santa Fe",
    hours: {
      es: "Lunes a Sábado de 9:00 a 21:30 hrs",
      en: "Monday to Saturday 9:00 - 21:30 hrs"
    },
    email: "sisantafe@racer.com.mx",
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Farmacia+San+Isidro+Santa+Fe+Vasco+de+Quiroga"
  },
  {
    id: "farmacia-san-pablo",
    name: "FARMACIA SAN PABLO",
    phones: [
      { display: "(55) 5354 9000", raw: "+525553549000" }
    ],
    address: "(Suc. Vista Hermosa) Noche de Paz No. 14 Loc. 3-4 Col. Granjas Navidad, Deleg. Cuajimalpa C.P. 05240",
    hours: {
      es: "Servicio las 24 Horas",
      en: "24 Hours Service"
    },
    is24Hours: true,
    googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Farmacia+San+Pablo+Vista+Hermosa+Noche+de+Paz"
  }
];
