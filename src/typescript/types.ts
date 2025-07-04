export interface CookieSettings {
  defaultSettings: {
    consentType: "explicit" | "implicit";
    warnings: {
      text: string;
      cta: string;
    };
  };
}
