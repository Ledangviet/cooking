import i18n from "i18n-js";

// Set the fallback language to "en"
i18n.defaultLocale = "en";
i18n.defaultLocale = "vi";
// Define the translations for each language
i18n.translations = {
  en: {
    home: "Home",
    category: "Category",
    search: "Search",
    // Add more translations here
  },
  vi: {
    home: "Trang Chủ",
    category: "Lựa Chọn",
    search: "Tìm Kiếm",
    // Add more translations here
  },
};

// Set the current language to the default
i18n.locale = i18n.defaultLocale;

export default i18n;
