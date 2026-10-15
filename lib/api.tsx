import {
  ItemsResponse,
  SiteSettingsResponse,
  Item,
  AboutResponse,
} from "./types";

const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL!;

export async function getProducts(): Promise<ItemsResponse> {
  const res = await fetch(
    `${BASE_URL}/api/taha1391nnns?populate=*`,
    {
      next: {
        revalidate: 300,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return await res.json();
}

export async function getSiteSettings(): Promise<SiteSettingsResponse> {
  const res = await fetch(
    `${BASE_URL}/api/site-setting?populate=*`,
    {
      next: {
        revalidate: 0,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch site settings");
  }

  return await res.json();
}

export async function getProductById(
  id: string
): Promise<{ data: Item }> {
  const res = await fetch(
    `${BASE_URL}/api/taha1391nnns/${id}?populate=*`,
    {
      next: {
        revalidate: 300,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch product");
  }

  return await res.json();
}

export async function getAbout(): Promise<AboutResponse> {
  const res = await fetch(
    `${BASE_URL}/api/about?populate=*`,
    {
      next: {
        revalidate: 0,
      },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch about");
  }

  return await res.json();
}