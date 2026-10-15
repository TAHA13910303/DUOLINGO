import type { BlocksContent } from "@strapi/blocks-react-renderer";

export interface Item {
  id: number;
  documentId: string;
  taha: string;
  price: number;
  what: BlocksContent | null;
  Image: {
    id: number;
    url: string;
  } | null;
}

export interface ItemsResponse {
  data: Item[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface NavLink {
  id: number;
  title: string;
  href: string;
}

export interface Logo {
  id: number;
  url: string;
  name: string;
}

export interface SiteSettings {
  id: number;
  documentId: string;
  SiteName: string;
  Footer: string;
  Phone: string;
  Email: string;
  Address: string;
  Logo: Logo;
  menu: NavLink[];
}

export interface SiteSettingsResponse {
  data: SiteSettings;
}

/* About */

export interface AboutBlock {
  id: number;
  __component: string;
  title?: string;
  body?: string | null;
}

export interface About {
  id: number;
  documentId: string;
  title: string;
  blocks: AboutBlock[];
}

export interface AboutResponse {
  data: About;
}