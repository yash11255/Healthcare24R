import { useState, useEffect } from "react";

/** Read the current googtrans cookie value, e.g. "/en/hi" */
function getGoogTransCookie() {
  return (
    document.cookie
      .split("; ")
      .find((row) => row.startsWith("googtrans="))
      ?.split("=")[1] ?? ""
  );
}

/** Set googtrans cookie on current host and bare domain */
function setGoogTransCookie(value) {
  const host = window.location.hostname;
  document.cookie = `googtrans=${value}; path=/`;
  document.cookie = `googtrans=${value}; path=/; domain=${host}`;
  if (host.includes(".")) {
    document.cookie = `googtrans=${value}; path=/; domain=.${host}`;
  }
}

/** Clear googtrans cookie */
function clearGoogTransCookie() {
  const expired = "expires=Thu, 01 Jan 1970 00:00:01 GMT";
  const host = window.location.hostname;
  document.cookie = `googtrans=; ${expired}; path=/`;
  document.cookie = `googtrans=; ${expired}; path=/; domain=${host}`;
  if (host.includes(".")) {
    document.cookie = `googtrans=; ${expired}; path=/; domain=.${host}`;
  }
}

const LanguageSwitcher = ({ className = "" }) => {
  const [lang, setLang] = useState(() =>
    getGoogTransCookie().endsWith("/hi") ? "hi" : "en",
  );

  useEffect(() => {
    // Suppress the Google Translate toolbar banner
    const styleId = "gt-hide-toolbar";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = `
        body { top: 0 !important; }
        .skiptranslate { display: none !important; }
        iframe.goog-te-banner-frame { display: none !important; }
      `;
      document.head.appendChild(style);
    }

    // Initialise Google Translate widget (hidden)
    if (!window.googleTranslateElementInit) {
      window.googleTranslateElementInit = () => {
        if (!(window.google && window.google.translate)) return;
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,hi",
            layout:
              window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          "google_translate_element",
        );
      };
    }

    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    } else if (window.google && window.google.translate) {
      window.googleTranslateElementInit?.();
    }
  }, []);

  const switchLang = (target) => {
    if (target === lang) return;

    if (target === "hi") {
      setGoogTransCookie("/en/hi");
    } else {
      clearGoogTransCookie();
    }

    setLang(target);
    window.location.reload();
  };

  return (
    <>
      {/* Hidden Google Translate mount point */}
      <div id="google_translate_element" style={{ display: "none" }} />

      {/* Toggle pill */}
      <div
        className={`flex items-center rounded-full border border-slate-200 bg-white shadow-sm overflow-hidden text-xs font-semibold select-none ${className}`}
        aria-label="Switch language"
        role="group"
      >
        <button
          onClick={() => switchLang("en")}
          aria-pressed={lang === "en"}
          className={`px-3 py-1.5 transition-colors duration-200 ${
            lang === "en"
              ? "bg-primary text-white"
              : "text-slate-500 hover:text-primary"
          }`}
        >
          EN
        </button>
        <span className="w-px h-4 bg-slate-200" aria-hidden="true" />
        <button
          onClick={() => switchLang("hi")}
          aria-pressed={lang === "hi"}
          className={`px-3 py-1.5 transition-colors duration-200 ${
            lang === "hi"
              ? "bg-primary text-white"
              : "text-slate-500 hover:text-primary"
          }`}
        >
          हि
        </button>
      </div>
    </>
  );
};

export default LanguageSwitcher;
