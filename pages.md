# HealthFound Intelligence Hub - Design System & Pages

This project has been fully migrated to a React-based web application. All designs previously hosted in this document are now implemented as functional components in the `src/pages` directory.

## Project Structure

- **Core Framework**: React + Vite
- **Styling**: Tailwind CSS (Dark Mode supported via `.dark` class)
- **Animations**: Framer Motion
- **Icons**: Material Symbols Outlined

## Converted Pages

| Page Name | React Component | Path |
|-----------|-----------------|------|
| Homepage | `Home.jsx` | `/` |
| News Feed | `NewsFeed.jsx` | `/news` |
| Intelligence Article | `ArticleDetail.jsx` | `/article/:id` |
| TalentHQ Job Board | `TalentHQ.jsx` | `/jobs` |
| Market Dashboard | `MarketDashboard.jsx` | `/market-dashboard` |
| Venture Capital Hub | `VC.jsx` | `/vc` |
| Debate Circle (Forum) | `Forum.jsx` | `/forum` |
| Pricing & Membership | `Membership.jsx` | `/membership` |
| Advertise with Us | `Advertise.jsx` | `/advertise` |
| Media Kit Hub | `MediaKit.jsx` | `/media-kit` |
| About Mission | `About.jsx` | `/about` |
| Onboarding Flows | `Onboarding.jsx` | `/onboarding` |
| User Profile | `Profile.jsx` | `/profile` |
| Search Results | `Search.jsx` | `/search` |
| Regional Comparison | `Comparison.jsx` | `/comparison` |
| Top 10 Startups | `TopStartups.jsx` | `/top-startups` |
| Trends Map | `TrendsMap.jsx` | `/trends-map` |
| 404 Not Found | `NotFound.jsx` | `*` |

## Design Tokens

- **Primary Green**: `#19e65e` (Main brand color)
- **Secondary Mint**: `#2beead` (Used for Talent/VC sections)
- **Dark Background**: `#112116` / `#10221c`
- **Light Background**: `#f6f8f6`
- **Typography**: Manrope (Sans-serif)

## Global Components

- `BottomNav.jsx`: iOS-style navigation for mobile.
- `CookieConsent.jsx`: Privacy overlay.

---
*Note: This file serves as a reference for the original project scope. For implementation details, refer to the `src/` directory.*
