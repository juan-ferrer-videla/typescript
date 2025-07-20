export interface CookieSettings {
  defaultSettings: {
    consentType: "explicit" | "implicit";
    warnings: {
      text: string;
      cta: string;
    };
  };
}

declare const __brand: unique symbol;

export type Brand<T, Name extends string> = T & { [__brand]: Name };

export type AccertFunction<T, Assertion extends T> = (
  value: T
) => asserts value is Assertion;

export type TypePredicateFunction<T, Assertion extends T> = (
  value: T
) => value is Assertion;

type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer Value>
  ? Value extends Promise<unknown>
    ? Awaited<Value>
    : Value
  : never;
