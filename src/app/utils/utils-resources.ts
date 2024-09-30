export const BRAND_BASE_INFO: { [key: string]: string } = {
  COMPANY_NAME: "ChatRep",
  BRAND_NAME: "ChatRep",
  COMPANY_SITE_NAME: "ChatRep.com",
  COMPANY_SITE_URL: "https://www.ChatRep.com",
  CONTACT_US_EMAIL: "support@ChatRep.com",

  FAVICON: "https://i.ibb.co/xzyFjXH/Chat-Rep-fav-icon.png", //TO DO CHAANGE THE URL
  META_TITLE: "Design Studio",
  LOGO_CHAT: "https://i.ibb.co/2cSz0T0/Chat-Rep-logo-new-white2.png", //TO DO CHAANGE THE URL
  POWERED_BY:
    "<a tabindex='-1' target='_blank' ref='https://www.tiledesk.com/?utm_source=widget'><img src='https://i.ibb.co/NnSP7JJ/Chat-Rep-circular-icon1.png'/><span>Powered by ChatRep</span></a>", //TO DO CHANGE THE URL
};

export const LOGOS_ITEMS: { [key: string]: { label: string; icon: string } } = {
  COMPANY_LOGO: {
    label: BRAND_BASE_INFO.COMPANY_NAME,
    icon: "assets/logos/ChatRep_logo2.svg",
  },
  COMPANY_LOGO_NO_TEXT: {
    label: BRAND_BASE_INFO.COMPANY_NAME,
    icon: "assets/logos/ChatRep_logo_no_text.svg",
  },
  BASE_LOGO: {
    label: BRAND_BASE_INFO.BRAND_NAME,
    icon: "assets/logos/ChatRep_logo2.svg",
  },
  BASE_LOGO_NO_TEXT: {
    label: BRAND_BASE_INFO.BRAND_NAME,
    icon: "assets/logos/ChatRep_logo_no_text.svg",
  },
  BASE_LOGO_WHITE: {
    label: BRAND_BASE_INFO.BRAND_NAME,
    icon: '"assets/logos/ChatRep-logo-new-white.svg',
  },
  BASE_LOGO_WHITE_NO_TEXT: {
    label: BRAND_BASE_INFO.BRAND_NAME,
    icon: '"assets/logos/ChatRep-logo-new-white.svg',
  },
  BASE_LOGO_GRAY: { label: BRAND_BASE_INFO.BRAND_NAME, icon: "" },
};
