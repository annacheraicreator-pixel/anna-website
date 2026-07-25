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
      "My name is Anna, and I'm an AI Artist, brand designer, and art director all rolled into one. My journey in visual creativity began with graphic design and gradually led me to work with neural networks.\n\nI hold a degree and certification in brand design from the Higher School of Branding (VSHB). This education allows me to work with brands on a deeper level: to understand a brand's essence and DNA, and to use visuals and neural networks to steer the brand in new directions while preserving what makes it unique.\n\nI have experience working across many niches, but I primarily work with jewelry brands, clothing brands of various styles, and cosmetics.\n\nI love what I do, and I'm always looking to grow further in this space.",
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
      'Меня зовут Анна, я AI-creator, бренд-дизайнер и арт-директор в одном лице. Мой путь в визуальном творчестве начался с графического дизайна и постепенно привёл меня к работе с нейросетями.\n\nУ меня есть образование и квалификация бренд-дизайнера, которые я получила в Высшей Школе Брендинга (ВШБ). Это образование позволяет мне работать с брендами глубже: понимать суть бренда, его ДНК, а также с помощью визуала и нейросетей направлять бренд в новые направления, сохраняя его уникальность и особенности.\n\nУ меня есть опыт работы со многими нишами, но больше всего я работаю с ювелирными брендами, брендами одежды разных стилистик и косметикой.\n\nЯ люблю то, чем занимаюсь, и мечтаю развиваться в этом дальше!',
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
