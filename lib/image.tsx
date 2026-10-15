const BASE_URL = process.env.NEXT_PUBLIC_STRAPI_URL!;

export function getImageUrl(path?: string | null) {
  if (!path) return "";
  return BASE_URL + path;
}