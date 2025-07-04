export {};

interface BuyNowEvent {
  event: "buy_now";
  action: "click";
  title: string;
  cta: string;
}

interface NavigationEvent {
  event: "navigation";
  action: "in_article_click";
  href: string;
}

declare global {
  interface Window {
    dataLayer?: (BuyNowEvent | NavigationEvent)[];
  }
}
