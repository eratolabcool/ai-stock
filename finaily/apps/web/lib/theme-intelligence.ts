import themes from "../../../database/themes.json";

export type Theme = {
  name: string;
  slug: string;
  opportunity: string;
  companies: string[];
  thesis: string[];
  risks: string[];
};

export function getThemes(): Theme[] {
  return themes as Theme[];
}

export function getThemeBySlug(slug: string): Theme | undefined {
  return getThemes().find((theme) => theme.slug === slug);
}
