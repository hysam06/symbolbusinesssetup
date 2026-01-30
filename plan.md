# Implementation Plan - Layout Adjustment for Who We Are Section

## Goal
Adjust the layout of the "Who We Are" section to match the provided design. The key change is to move the "About Us" title from the left panel (above the image) to the right panel (above the text content).

## Proposed Changes

### Components
#### [MODIFY] [WhoWeAre.jsx](file:///c:/Users/sayed/Downloads/cloner/actionist-react/src/components/WhoWeAre.jsx)
- Move the `<h2>About Us</h2>` element from `.panel-left` to `.panel-right-content`, inserting it before the `.text` div.

### Styles
#### [MODIFY] [WhoWeAre.css](file:///c:/Users/sayed/Downloads/cloner/actionist-react/src/components/WhoWeAre.css)
- Adjust styling for `.panel-right-content` and `.title` to ensure proper spacing in the new layout.
- Potentially reduce top padding of `.panel-right-content` to accommodate the title.

## Verification Plan

### Manual Verification
1.  Run the application (`npm run dev`).
2.  Navigate to the "Who We Are" section.
3.  Verify that:
    - The "About Us" title appears in the right column, above the text.
    - The image is alone in the left column.
    - On mobile, the order is likely Image -> Title -> Text -> Button (check if acceptable).
    - Spacing looks correct and consistent with the design.
