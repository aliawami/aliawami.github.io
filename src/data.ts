export const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '5+', label: 'Enterprise Apps' },
  { value: '2', label: 'Open Source Packages' },
];

export const meta = {
  name: 'Ali Alawami',
  title: 'Senior Flutter & iOS Developer',
  location: 'Eastern Province, Saudi Arabia',
  email: 'aliawami@proton.me',
  linkedin: 'https://www.linkedin.com/in/ali-awami/',
  github: 'https://github.com/aliawami',
  summary:
    'Mobile developer with 10+ years of experience, specializing in Flutter and iOS for the past five years. Delivered production-grade applications for Aramco through Tech Mahindra and SBM, leading cross-functional teams and driving measurable improvements in performance, architecture, and development efficiency. Proven ability to enter unfamiliar technology stacks under real project pressure — including learning Android and Flutter on live client engagements — and deliver results.',
};

export const skillGroups = [
  { label: 'Mobile', skills: ['Flutter', 'iOS (Swift, SwiftUI, UIKit)', 'Android (Kotlin)'] },
  { label: 'Architecture', skills: ['Clean Architecture', 'Repository Pattern', 'MVVM', 'MVC', 'Protocol-Oriented Programming'] },
  { label: 'State Management', skills: ['Riverpod', 'flutter_hooks', 'hooks_riverpod'] },
  { label: 'Backend & APIs', skills: ['Django REST Framework', 'Supabase', 'Firebase', 'PostgreSQL', 'RESTful Services', 'Vapor (Swift)'] },
  { label: 'Tools & Platforms', skills: ['Git', 'GitHub', 'Figma', 'Xcode', 'Android Studio'] },
  { label: 'Other', skills: ['go_router', 'OOP', 'Swift Package Manager', 'Core Data', 'App Store & Play Store'] },
];

export const experience = [
  {
    role: 'Mobile Application Developer / Project Lead',
    company: 'Tech Mahindra',
    location: 'Eastern, Saudi Arabia',
    period: 'Feb 2025 – Jan 2026',
    projects: [
      {
        name: 'D-Link Project — Confidential Client',
        bullets: [
          'Inherited a Flutter application with no state management, unstructured navigation, and bloated screen count; introduced Riverpod, go_router, and the Repository design pattern, reducing application size and significantly improving maintainability and build performance.',
          'Led cross-platform development across iOS and Android, enforcing architectural standards that accelerated the team\'s delivery cycles and reduced post-launch defect rates.',
          'Implemented application security and localization requirements aligned with client protocols, ensuring compliance across all delivered builds.',
        ],
      },
    ],
  },
  {
    role: 'Mobile Application Developer',
    company: 'Saudi Business Machines (SBM)',
    location: 'Al Khobar, Saudi Arabia',
    period: 'Nov 2023 – Feb 2025',
    projects: [
      {
        name: 'WSAM Project — Confidential Client · 2023–2024',
        bullets: [
          'Led the migration of a critical Android application to Flutter, delivering all project milestones on schedule while improving application performance, scalability, and long-term maintainability.',
          'Collaborated with UX/UI designers to redesign the application interface, resulting in a measurable improvement in user satisfaction and engagement scores.',
          'Produced comprehensive project documentation that streamlined client onboarding and established a foundation for sustainable post-launch support.',
        ],
      },
      {
        name: 'CIDE Project (UI/UX) — Confidential Client · Dec 2024–Feb 2025',
        bullets: [
          'Conducted UX research and led the interface design for a web application, optimizing user flows and interaction patterns to improve usability and satisfaction.',
        ],
      },
    ],
  },
  {
    role: 'Mobile Application Developer / Project Lead',
    company: 'Tech Mahindra',
    location: 'Eastern, Saudi Arabia',
    period: 'Oct 2020 – Oct 2023',
    projects: [
      {
        name: 'IKTVA Project — Confidential Client · 2021–2023',
        bullets: [
          'Directed Flutter development for a cross-platform application, applying Riverpod-based state management and strict client security protocols to deliver a stable, high-performance product.',
          'Drove continuous improvement initiatives that shortened development cycles and reduced costs, strengthening client retention on a high-profile account.',
        ],
      },
      {
        name: 'Maritime Logistics Project — Confidential Client · 2020–2022',
        bullets: [
          'Entered the project as an iOS developer and transitioned to Android mid-engagement at the client\'s request, learning the platform under live project conditions and delivering successfully.',
          'Built data-driven mobile solutions connected to SQL and NoSQL databases, enabling real-time analytics and enhanced reporting capabilities for logistics operations.',
        ],
      },
    ],
  },
  {
    role: 'Earlier Career',
    company: 'Teleperformance & Energy Sector',
    location: 'Saudi Arabia',
    period: '2013 – 2020',
    projects: [
      {
        name: '',
        bullets: [
          'IT Analyst and client-facing roles in the energy sector — building technical communication, client management, and analytical foundations that support enterprise mobile delivery.',
        ],
      },
    ],
  },
];

export const projects = [
  {
    nameAr: 'الباحِث المُرتبِك',
    nameEn: 'The Confused Researcher',
    tagline: 'Arabic-first educational mobile game for children',
    description:
      'An AI researcher whose memory has developed faults — and the child\'s job is to find and fix them. Each round presents a statement with exactly one deliberate flaw. The child identifies the broken word and selects the correct replacement. A fluffy, bespectacled cat researcher makes critical thinking feel like play. Every round is human-reviewed before it reaches a child. No account creation. No personal data collected.',
    stack: ['Flutter', 'iOS', 'Android', 'Arabic RTL', 'AI-assisted content'],
    status: 'In Progress',
    type: 'app' as const,
  },
  {
    nameAr: 'مُبرم',
    nameEn: 'Mubarram',
    tagline: 'Freelancer contract & invoice management — Arabic-first, Saudi market',
    description:
      'An Arabic-first app for Saudi freelancers and independent professionals to create, send, and track contracts and invoices. The name means "concluded / finalized / tied" — aligned with the core action of sealing agreements. Built with feature-first Flutter architecture and Supabase for secure per-user data isolation.',
    stack: ['Flutter', 'Supabase', 'PostgreSQL', 'go_router', 'hooks_riverpod', 'saudi_verify'],
    status: 'In Progress',
    type: 'app' as const,
  },
  {
    nameAr: '',
    nameEn: 'saudi_verify',
    tagline: 'Dart package · Published on pub.dev',
    description:
      'A pure Dart package for validating Saudi Arabian identifiers — National ID / Iqama, mobile numbers with carrier detection, IBAN with check digit validation, and ZATCA-format VAT numbers. Uses Dart 3 sealed classes: results are either Valid (with metadata) or Invalid (with reason). Works across all platforms — no native code.',
    stack: ['Dart', 'Dart 3 Sealed Classes', 'pub.dev'],
    status: 'Published · v0.1.1',
    link: 'https://pub.dev/packages/saudi_verify',
    type: 'package' as const,
  },
  {
    nameAr: '',
    nameEn: 'flutter_security_detection',
    tagline: 'Flutter package · Published on pub.dev',
    description:
      'An enterprise-grade Flutter security package that detects active threats before allowing an app to function — Frida instrumentation, jailbreak/root, emulator, hook frameworks (Xposed, LSPosed), and debugger attachment. Integrates directly with go_router via a redirect guard. devMode flag bypasses all checks in debug builds.',
    stack: ['Flutter', 'iOS', 'Android', 'go_router', 'pub.dev'],
    status: 'Published · v0.1.2',
    link: 'https://pub.dev/packages/flutter_security_detection',
    type: 'package' as const,
  },
];

export const certifications = [
  { name: 'Generative AI for Software Developers Specialization', issuer: 'IBM / Coursera', year: '2025–2026' },
  { name: 'How to Think Strategically', issuer: 'LinkedIn Learning', year: '2023' },
  { name: 'AWS Machine Learning Foundations', issuer: 'Udacity', year: '2022' },
  { name: 'The Complete Flutter Development Bootcamp with Dart', issuer: 'Udemy', year: '2022' },
  { name: 'Swift 5: Protocol-Oriented Programming', issuer: 'LinkedIn Learning', year: '2022' },
  { name: 'iOS Development: Architecture', issuer: 'LinkedIn Learning', year: '2022' },
  { name: 'Programming Foundations: Object-Oriented Design', issuer: 'LinkedIn Learning', year: '2022' },
  { name: 'Practical Design Patterns in Swift', issuer: 'LinkedIn Learning', year: '2022' },
  { name: 'iOS Developer Nanodegree', issuer: 'Udacity', year: '2019' },
];

export const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    school: 'University of Nebraska at Omaha',
    location: 'USA',
    year: '2012',
  },
  {
    degree: "Associate's Degree in Computer Programming",
    school: 'College of Telecommunication and Information',
    location: 'Saudi Arabia',
    year: '2005',
  },
];
