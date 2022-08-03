import { useRouter } from "next/router";
import { useCallback, useMemo } from "react";

import { en, id } from "@Definitions";

const locales = { en, id };
type Locale = keyof typeof locales;
type Namespace = keyof typeof locales["en"];

export const useTranslation = <T extends Namespace>(namespace: T) => {
  const router = useRouter();
  const locale = (router.locale as Locale) || "en";

  const t = useMemo(() => locales[locale][namespace], [locale, namespace]);

  const changeLanguage = useCallback(
    (localeTarget: Locale) => {
      router.push(router.pathname, router.asPath, { locale: localeTarget });
    },
    [router]
  );

  return {
    t,
    changeLanguage,
    language: locale,
  };
};
