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
      "My name is Anna Chernova. I'm an AI artist, art director, and brand designer — I lead a brand's visual identity from concept to a finished series of photos and videos. I mainly work in hyperrealism, but I also explore other styles.\n\nThree years of working with jewelry, fashion, and beauty brands, together with a background in brand design, let me read a brand's DNA — its story and meaning — and translate that into a visual language, rather than just generating images.",
    'home.clients': 'My clients',
    'home.clientsList': 'Moonswoon, Jardina, Bratskii coffee, Andrei Eros',
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
    'hero.role': 'AI-Artist и бренд дизайнер',
    'home.recentWorks': 'Последние работы',
    'home.portfolioBanner': 'Все портфолио',
    'home.about': 'Обо мне',
    'home.aboutText':
      'Меня зовут Анна Чернова, я AI-artist, арт-директор и бренд-дизайнер: веду визуальную идентичность бренда от концепции до готовой серии, фото и видео. В основном работаю в стиле гиперреализма, но практикую и использую разные стилистики.\n\nТри года работы с ювелирными, fashion- и beauty-брендами, образование бренд-дизайнера позволяет считывать ДНК бренда, его историю и смыслы, и переводить их в визуальный язык, а не просто генерировать изображения.',
    'home.clients': 'Мои клиенты',
    'home.clientsList': 'Moonswoon, Jardina, Братский кофе, Andrei Eros',
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
