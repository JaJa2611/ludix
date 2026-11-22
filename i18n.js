/*
 * Übersetzungen der LUDIX-Website.
 *
 * Deutsch steht direkt in den HTML-Seiten und wird beim Laden automatisch eingesammelt.
 * Jede weitere Sprache ist nur ein Eintrag in LUDIX_LANGS plus ein Wörterbuch in LUDIX_STRINGS
 * mit denselben Schlüsseln wie die data-i18n-Attribute im HTML. Fehlt ein Schlüssel,
 * bleibt der deutsche Text stehen.
 */
window.LUDIX_LANGS = [
  { code: 'de', name: 'Deutsch' },
  { code: 'en', name: 'English' },
];

window.LUDIX_STRINGS = {
  en: {
    'meta.title': 'LUDIX – All your PC games in one place',
    'meta.desc': 'LUDIX brings your games from Steam, Epic Games and Xbox into one app – with price comparison, wishlist, price alerts and an update overview. Free for Windows.',
    'lang.label': 'Choose language',

    'nav.features': 'Features',
    'nav.download': 'Download',
    'nav.faq': 'FAQ',
    'nav.cta': 'Download',

    'hero.eyebrow': 'Free for Windows',
    'hero.title': 'All your PC games.<br>One place.',
    'hero.lead': 'LUDIX finds your games from Steam, Epic Games and Xbox automatically, launches them in one click and shows you where new games are cheapest right now.',
    'hero.more': 'Learn more',
    'hero.platforms': 'Supported platforms',
    'cta.windows': 'Download for Windows',
    'cta.meta': 'Windows 10 &amp; 11',

    'shot.library': 'The LUDIX library with games from Steam, Epic Games and Xbox',
    'shot.store': 'The LUDIX store comparing prices for Cyberpunk 2077',
    'shot.wishlist': 'The LUDIX wishlist with prices and price alerts',
    'shot.updates': 'The LUDIX update overview with size and duration',

    'features.eyebrow': 'Features',
    'features.title': 'One app instead of four launchers',
    'features.lead': 'No more jumping between Steam, Epic and the Xbox app. LUDIX puts everything in one place.',

    'f1.title': 'Your entire library',
    'f1.text': 'LUDIX detects installed games from Steam, Epic Games and Xbox on its own – with cover art, size and platform. Search, sort, mark favourites and launch with one click.',
    'f1.c1': 'Automatic game detection',
    'f1.c2': 'Favourites and platform filters',
    'f1.c3': 'Launch games right from LUDIX',

    'f2.title': 'Store with price comparison',
    'f2.text': 'Search for a game and LUDIX compares prices on Steam, Epic Games and the Microsoft Store. The cheapest store is listed first – including discount and savings.',
    'f2.c1': 'Three stores at a glance',
    'f2.c2': 'Best price highlighted',
    'f2.c3': 'One click to the store',

    'f3.title': 'Wishlist with price alerts',
    'f3.text': 'Save games and set a target price. As soon as a game drops below it, LUDIX lets you know with a Windows notification. Import your Steam wishlist in one click.',
    'f3.c1': 'Notification at your target price',
    'f3.c2': 'Steam wishlist import',
    'f3.c3': 'Prices are checked regularly',

    'f4.title': 'Every update in view',
    'f4.text': 'See at a glance which games need an update, how big it is and how long it takes. Downloads show live progress – whether Steam, Epic or Xbox.',
    'f4.c1': 'Live progress for every platform',
    'f4.c2': 'Size and estimated time',
    'f4.c3': 'All updates in one click',

    'x1.title': 'Runs in the background',
    'x1.text': 'Price alerts and updates keep working even when the window is closed.',
    'x2.title': 'Your data stays with you',
    'x2.text': 'No account, no passwords. Favourites and wishlist live only on your PC.',
    'x3.title': 'Starts with Windows',
    'x3.text': 'If you like, LUDIX starts silently with Windows – switch it off in one click.',
    'x4.title': 'Free',
    'x4.text': 'You can download and use LUDIX for free.',

    'dl.title': 'Get LUDIX',
    'dl.lead': 'Download the installer, run it, done. LUDIX finds your games on first launch by itself.',
    'dl.s1': 'Download the installer and open it.',
    'dl.s2': 'Pick a folder – no admin rights needed.',
    'dl.s3': 'Launch LUDIX from the desktop or the Start menu.',
    'dl.note': '<strong>About the Windows warning:</strong> LUDIX is new and not yet digitally signed, so Windows may show “Windows protected your PC”. Click <em>More info</em> and then <em>Run anyway</em>.',

    'faq.eyebrow': 'FAQ',
    'faq.title': 'Frequently asked questions',
    'q1.q': 'Does LUDIX cost anything?',
    'q1.a': 'No, LUDIX is free.',
    'q2.q': 'Which platforms are supported?',
    'q2.a': 'Steam, Epic Games and Xbox / the Microsoft Store. More platforms are planned.',
    'q3.q': 'Do I have to sign in with my accounts?',
    'q3.a': 'No. LUDIX only reads which games are installed on your PC. It does not need passwords or logins for Steam, Epic or Xbox.',
    'q4.q': 'Does LUDIX replace Steam, Epic and the Xbox app?',
    'q4.a': 'Not quite. The launchers need to stay installed because your games still run through them. LUDIX is the shared interface on top, so you don’t have to open each one.',
    'q5.q': 'Is LUDIX available for Mac or Linux?',
    'q5.a': 'Right now it’s Windows 10 and 11 only.',
    'q6.q': 'How do I uninstall LUDIX?',
    'q6.a': 'Via Windows Settings → Apps. This also removes the autostart entry. Your games stay installed, of course.',

    'footer.imprint': 'Legal notice',
    'footer.privacy': 'Privacy',
    'footer.legal': '© 2026 LUDIX. Steam, Epic Games, Xbox and Microsoft Store are trademarks of their respective owners. LUDIX is not affiliated with these companies.',
    'footer.back': '← Back to the home page',
    'lightbox.close': 'Close',
  },
};
