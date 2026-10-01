export interface CountryContact {
  code: string;
  name: string;
  flag: string;
  phone: string;
  phoneFormatted: string;
  email: string;
  address?: string;
  isHeadquarter?: boolean;
}

export const COUNTRIES: CountryContact[] = [
  {
    code: "CL",
    name: "Chile",
    flag: "🇨🇱",
    phone: "+56988065917",
    phoneFormatted: "+56 9 8806 5917",
    email: "comercial@mtsolutions.io",
    isHeadquarter: true,
  },
  {
    code: "CO",
    name: "Colombia",
    flag: "🇨🇴",
    phone: "+573102206133",
    phoneFormatted: "+57 310 2206133",
    email: "comercial@mtsolutions.io",
  },
  {
    code: "BR",
    name: "Brasil",
    flag: "🇧🇷",
    phone: "+5527999297926",
    phoneFormatted: "+55 (27) 99929 7926",
    email: "comercial@mtsolutions.io",
  },
  {
    code: "MX",
    name: "México",
    flag: "🇲🇽",
    phone: "+5213481515394",
    phoneFormatted: "+52 1 348 151 5394",
    email: "comercial@mtsolutions.io",
  },
  {
    code: "PE",
    name: "Perú",
    flag: "🇵🇪",
    phone: "+51986366255",
    phoneFormatted: "+51 986 366 255",
    email: "comercial@mtsolutions.io",
  },
  {
    code: "AR",
    name: "Argentina",
    flag: "🇦🇷",
    phone: "+56988065917",
    phoneFormatted: "+56 9 8806 5917",
    email: "comercial@mtsolutions.io",
  },
  {
    code: "US",
    name: "Estados Unidos",
    flag: "🇺🇸",
    phone: "+56988065917",
    phoneFormatted: "+56 9 8806 5917",
    email: "comercial@mtsolutions.io",
  },
];
