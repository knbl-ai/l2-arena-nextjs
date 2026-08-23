import type { Lang } from './types';

/**
 * Copy for the accessibility statement (הצהרת נגישות).
 *
 * Publishing this page is a requirement in its own right under תקנות שוויון
 * זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), סעיף 35 — it is not merely
 * documentation of the technical work. It has to name a person to contact.
 *
 * The three TODO_ values below are placeholders. They are deliberately loud:
 * shipping this page with "{{ ... }}" visible is far better than shipping it
 * with a plausible-looking but wrong contact, because the whole point of the
 * page is that someone can actually be reached.
 */
const TODO_NAME = '{{ שם רכז/ת הנגישות }}';
const TODO_EMAIL = '{{ accessibility@example.co.il }}';
const TODO_PHONE = '{{ 00-0000000 }}';

export type A11yStatement = {
  title: string;
  updatedLabel: string;
  updated: string;
  intro: string[];
  conformanceTitle: string;
  conformance: string[];
  doneTitle: string;
  done: string[];
  exceptionsTitle: string;
  exceptionsIntro: string;
  exceptions: string[];
  contactTitle: string;
  contactIntro: string;
  coordinatorLabel: string;
  coordinatorName: string;
  emailLabel: string;
  email: string;
  phoneLabel: string;
  phone: string;
  backHome: string;
};

const he: A11yStatement = {
  title: 'הצהרת נגישות',
  updatedLabel: 'עודכן לאחרונה',
  updated: '23 באוגוסט 2026',
  intro: [
    'אתר L2 ARENA פועל להנגשת שירותיו הדיגיטליים לכלל הציבור, לרבות אנשים עם מוגבלות, מתוך תפיסה שלכל אדם הזכות לקבל מידע מלא ושוויוני על ההליך המכרזי.',
    'האתר הונגש בהתאם לתקן הישראלי ת"י 5568, המאמץ את הנחיות WCAG 2.1 של ארגון W3C ברמת התאמה AA.',
  ],
  conformanceTitle: 'רמת הנגישות באתר',
  conformance: [
    'האתר עומד בדרישות תקן ישראלי 5568 ברמת AA.',
    'האתר נבדק בדפדפני Chrome, Safari ו-Firefox בגרסאותיהם העדכניות, במחשב ובמכשירים ניידים.',
    'האתר תומך בניווט מלא באמצעות מקלדת ובשימוש בטכנולוגיות מסייעות, לרבות קוראי מסך.',
  ],
  doneTitle: 'מה הונגש באתר',
  done: [
    'מבנה סמנטי מלא של העמוד — אזורי ניווט, תוכן ראשי, כותרות מדורגות ותחתית מוגדרים לקוראי מסך.',
    'קישור "דילוג לתוכן העמוד" בתחילת הדף, המאפשר לדלג על סרגל הניווט.',
    'ניווט מלא במקלדת, כולל סימון ברור וגלוי של הרכיב הממוקד בכל שלב.',
    'תפריט הנייד פועל כדו-שיח: המיקוד נשמר בתוכו, ניתן לסגור אותו במקש Escape, והמיקוד חוזר לכפתור הפתיחה.',
    'ניגודיות צבעים תקינה בין טקסט לרקע בכל רכיבי התוכן.',
    'כיבוד הגדרת מערכת ההפעלה לצמצום תנועה — אנימציות ואפקטים נעצרים עבור מי שביקש זאת.',
    'תפריט נגישות ייעודי המאפשר הגדלת טקסט, ניגודיות גבוהה, גווני אפור, הדגשת קישורים, עצירת אנימציות, גופן קריא וסמן עכבר מוגדל. ההעדפות נשמרות בדפדפן.',
    'טקסט חלופי לתמונות נושאות מידע, וסימון תמונות דקורטיביות ככאלה כדי שלא יקראו לשווא.',
    'סימון קישורים הנפתחים בחלון חדש עבור משתמשי קוראי מסך.',
  ],
  exceptionsTitle: 'חלקים שאינם נגישים במלואם',
  exceptionsIntro: 'למרות מאמצינו, ייתכנו באתר חלקים שטרם הונגשו במלואם:',
  exceptions: [
    'קיר הלוגואים של השותפים מוצג כתוכן דקורטיבי ואינו מוקרא על ידי קוראי מסך, מאחר שטרם התקבלו שמות השותפים לצורך טקסט חלופי מדויק. אנו פועלים להשלמת הנתונים.',
    'מסמכי ההליך המכרזי מתפרסמים באתר חיצוני של החברה הכלכלית לוד ואינם באחריות אתר זה. לפניות בנוגע לנגישותם יש לפנות למפרסם המסמכים.',
  ],
  contactTitle: 'פניות בנושא נגישות',
  contactIntro: 'נתקלתם בבעיית נגישות באתר? נשמח שתעדכנו אותנו. אנא תארו את הבעיה, את העמוד שבו נתקלתם בה ואת סוג הדפדפן והטכנולוגיה המסייעת שבהם השתמשתם — כך נוכל לטפל בפנייה במהירות.',
  coordinatorLabel: 'רכז/ת הנגישות',
  coordinatorName: TODO_NAME,
  emailLabel: 'דוא"ל',
  email: TODO_EMAIL,
  phoneLabel: 'טלפון',
  phone: TODO_PHONE,
  backHome: 'חזרה לעמוד הראשי',
};

const en: A11yStatement = {
  title: 'Accessibility Statement',
  updatedLabel: 'Last updated',
  updated: '23 August 2026',
  intro: [
    'The L2 ARENA website works to make its digital services available to everyone, including people with disabilities, on the principle that every person is entitled to full and equal information about the tender process.',
    'The site has been made accessible in accordance with Israeli Standard IS 5568, which adopts the W3C WCAG 2.1 guidelines at conformance level AA.',
  ],
  conformanceTitle: 'Level of accessibility',
  conformance: [
    'The site meets the requirements of Israeli Standard 5568 at level AA.',
    'It has been tested in current versions of Chrome, Safari and Firefox, on desktop and on mobile devices.',
    'The site supports full keyboard navigation and the use of assistive technologies, including screen readers.',
  ],
  doneTitle: 'What has been made accessible',
  done: [
    'Full semantic page structure — navigation, main content, ranked headings and footer are all exposed to screen readers.',
    'A "skip to main content" link at the start of the page that bypasses the navigation bar.',
    'Complete keyboard navigation, with a clear and visible indicator of the focused element at every step.',
    'The mobile menu behaves as a dialog: focus is kept inside it, Escape closes it, and focus returns to the button that opened it.',
    'Sufficient colour contrast between text and background throughout the content.',
    'The operating system’s reduced-motion preference is honoured — animations and effects stop for visitors who have asked for that.',
    'A dedicated accessibility menu offering larger text, high contrast, grayscale, highlighted links, stopped animations, a readable font and an enlarged cursor. Preferences are remembered in the browser.',
    'Alternative text for informative images, with decorative images marked as such so they are not announced needlessly.',
    'Links that open in a new window are announced as such to screen reader users.',
  ],
  exceptionsTitle: 'Parts that are not yet fully accessible',
  exceptionsIntro: 'Despite our efforts, some parts of the site may not yet be fully accessible:',
  exceptions: [
    'The partner logo wall is presented as decorative content and is not announced by screen readers, because the partner names required for accurate alternative text have not yet been supplied. We are working to complete this.',
    'Tender documents are published on an external site belonging to the Lod Economic Corporation and are outside the responsibility of this website. Enquiries about their accessibility should be directed to the publisher of those documents.',
  ],
  contactTitle: 'Accessibility enquiries',
  contactIntro: 'Did you encounter an accessibility problem on this site? Please tell us. Describe the problem, the page on which you encountered it, and the browser and assistive technology you were using — that will let us deal with it quickly.',
  coordinatorLabel: 'Accessibility coordinator',
  coordinatorName: TODO_NAME,
  emailLabel: 'Email',
  email: TODO_EMAIL,
  phoneLabel: 'Phone',
  phone: TODO_PHONE,
  backHome: 'Back to the main page',
};

const statements: Record<Lang, A11yStatement> = { he, en };

export const getStatement = (lang: Lang): A11yStatement => statements[lang];

/** True while the contact details are still placeholders. */
export const statementHasPlaceholders = (s: A11yStatement): boolean =>
  [s.coordinatorName, s.email, s.phone].some((v) => v.includes('{{'));
