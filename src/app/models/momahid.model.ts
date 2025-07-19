export type PageLanguage = 'ar';

export interface Momahid {
  /** Auto‑increment ID starting from 0 */
  id: number;

  /** Always 'ar' for now */
  pageLanguage: PageLanguage;

  isStoryVerified: boolean;

  isStoryApproved: boolean;

  // -------
  momahidPhoto: string;

  momahidName: string;

  momahidAge: number;

  isMomahidMarried: boolean;

  isMomahidStudy: boolean;

  momahidCountry: string;

  momahidTypeOfWorkStudy: string;

  // ---------
  momahidAgeWhenFirstInteractWithPorn: number;

  momahidAddictionDuration: number;

  momahidPornDiscovery: string;

  // --------
  previousFailedAttempts: string;

  lifeDuringAddiction: string;

  // withdrawal symptoms
  cravingToWatchPorn: boolean;
  sexWakingDreams: boolean;
  pornScenesCrossMind: boolean;

  fastAnger: boolean;
  exaggeratedSensitivity: boolean;

  laziness: boolean;

  delirium: boolean;

  additionalWithdrawalSymptoms: [];

  // -------
  lifeAfterTrueTawbah: string;
  majorWorshipsThatHealedTheHeart: string;
  majorSinsThatPoisonedTheHeart: string;

  // -------
  messageForMomahidBrother: string;
}
