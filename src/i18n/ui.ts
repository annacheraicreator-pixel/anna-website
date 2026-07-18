export const locales = ['en', 'ru'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const ui = {
  en: {
    'nav.menu': 'Menu',
    'nav.home': 'Home',
    'nav.portfolio': 'Portfolio',
    'nav.video': 'AI Video',
    'nav.about': 'About me',
    'nav.contacts': 'Contacts',
    'hero.role': 'AI-Artist and Brand designer',
    'home.recentWorks': 'Recent works',
    'home.portfolioBanner': 'All portfolio',
    'home.about': 'About me',
    'home.aboutText':
      "My name is Anna Chernova — I'm an AI artist and brand designer. I work mainly with jewelry and streetwear brands, developing concepts and AI-generated creatives tailored to each brand's identity and audience.",
    'home.clients': 'My clients',
    'home.clientsList': 'Moonswoon, Jardina, Chainy Kofe, Andrei Eros',
    'home.contacts': 'Contacts',
    'portfolio.title': 'Portfolio',
    'video.title': 'AI Video',
    'card.view': 'View →',
    'card.client': 'client —',
    'card.photo': 'Photo',
    'card.video': 'Video',
    'work.back': 'Back',
    'work.next': 'Next',
    'work.noMedia': 'Media coming soon',
    'footer.rights': '© 2026 Anna Cher. All rights reserved.'
  },
  ru: {
    'nav.menu': 'Меню',
    'nav.home': 'Главная',
    'nav.portfolio': 'Портфолио',
    'nav.video': 'AI видео',
    'nav.about': 'Обо мне',
    'nav.contacts': 'Контакты',
    'hero.role': 'AI-Artist and Brand designer',
    'home.recentWorks': 'Последние работы',
    'home.portfolioBanner': 'Все портфолио',
    'home.about': 'Обо мне',
    'home.aboutText':
      'Меня зовут Чернова Анна, я AI-artist и бренд дизайнер. Работаю преимущественно с ювелирными и уличными брендами. Разрабатываю концепции, креативы с использованием ИИ, учитывая особенности бренда и его ЦА.',
    'home.clients': 'Мои клиенты',
    'home.clientsList': 'Moonswoon, Jardina, Чайный Кофе, Andrei Eros',
    'home.contacts': 'Контакты',
    'portfolio.title': 'Портфолио',
    'video.title': 'AI видео',
    'card.view': 'Смотреть →',
    'card.client': 'клиент —',
    'card.photo': 'Фото',
    'card.video': 'Видео',
    'work.back': 'Назад',
    'work.next': 'Далее',
    'work.noMedia': 'Медиа скоро появится',
    'footer.rights': '© 2026 Anna Cher. Все права защищены.'
  }
} as const;

export type UiKey = keyof (typeof ui)['en'];
