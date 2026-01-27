import { useEffect, useRef } from "react";

const LanguageSwitcher = ({ className = "" }) => {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) {
      if (window.google && window.google.translate && window.google.translate.TranslateElement) {
        // Ensure widget is mounted if script was already present
        window.googleTranslateElementInit?.();
      }
      return;
    }

    initialized.current = true;

    // Define the global callback expected by Google Translate
    if (!window.googleTranslateElementInit) {
      window.googleTranslateElementInit = () => {
        if (!(window.google && window.google.translate)) return;
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            includedLanguages: "en,hi",
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
          },
          "google_translate_element",
        );
      };
    }

    // Inject the Google Translate script once
    const existingScript = document.getElementById("google-translate-script");
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    } else if (window.google && window.google.translate) {
      window.googleTranslateElementInit();
    }
  }, []);

  return (
    <div
      className={`flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm text-secondary shadow-sm hover:border-primary transition-colors ${className}`}
      aria-label="Switch language"
    >
      <i className="fas fa-language text-primary text-base" aria-hidden="true" />
      <div id="google_translate_element" className="leading-none [&_.goog-te-combo]:min-w-[80px]" />
    </div>
  );
};

export default LanguageSwitcher;
