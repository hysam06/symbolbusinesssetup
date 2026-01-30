# Implementation Plan - Standardizing Page Animations

## Goal
Standardize the "first animation" (entry animation) of all pages to match the Contact page's fade-up-stagger effect using `IntersectionObserver`.

## Changes Implemented

### [Home Page] Hero Component
#### [MODIFY] [Hero.jsx](file:///c:/Users/sayed/Downloads/cloner/actionist-react/src/components/Hero.jsx)
- Replaced simple `mounted` state with `IntersectionObserver` logic.
- Updated class name from `intro-is-complete` to `has-entered`.

#### [MODIFY] [Hero.css](file:///c:/Users/sayed/Downloads/cloner/actionist-react/src/components/Hero.css)
- Updated CSS selectors to use `.has-entered`.
- Adjusted transition duration to 0.8s to match Contact page.

### [Services Page] Services Component
#### [MODIFY] [Services.jsx](file:///c:/Users/sayed/Downloads/cloner/actionist-react/src/components/Services.jsx)
- Added `IntersectionObserver` logic.
- Added `has-entered` class to the section wrapper.

#### [MODIFY] [Services.css](file:///c:/Users/sayed/Downloads/cloner/actionist-react/src/components/Services.css)
- Added CSS rules for initial state (opacity 0, translateY) and entered state (opacity 1, translateY 0).
- Added stagger delays for title, search, and grid.

### [Service Detail Page] ServiceDetail Component
#### [MODIFY] [ServiceDetail.jsx](file:///c:/Users/sayed/Downloads/cloner/actionist-react/src/components/ServiceDetail.jsx)
- Added `IntersectionObserver` logic.
- Added `has-entered` class.

#### [MODIFY] [ServiceDetail.css](file:///c:/Users/sayed/Downloads/cloner/actionist-react/src/components/ServiceDetail.css)
- Added CSS rules for entry animation.
- Added stagger delays for header, content, and CTA.

### Existing Implementations Verified
- **Contact Page**: Reference implementation.
- **Team Page**: Already implements the pattern.
- **Mission Page**: `ValueProposition` component handles the animation.
- **Home Contact Section**: `HomeContact` component handles the animation.

## Verification
- User should navigate to each page (Home, Services, Service Detail) and observe the content fading up and in upon load/scroll.
