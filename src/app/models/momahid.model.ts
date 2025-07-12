export type PageLanguage = 'ar';

export interface Momahid {
  /** Auto‑increment ID starting from 0 */
  id: number;

  /** Always 'ar' for now */
  pageLanguage: PageLanguage;

  isStoryVerified: boolean;

  momahidPhoto: string;

  momahidName: string;

  momahidAge: number;

  momahidCountry: string;

  isMomahidStudy: boolean;

  isMomahidMarried: boolean;

  momahidAddictionDuration: number;
}
