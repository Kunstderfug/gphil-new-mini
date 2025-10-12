# Mobile Safe Areas Implementation

## Date
2025-10-12

## Description
Implemented support for mobile device safe areas to ensure the dark background blends seamlessly with the notch and address bar areas on phones.

## Changes Made
1. **Viewport Meta Tag**: Added `viewport-fit=cover` to the meta viewport tag in `nuxt.config.ts` to allow content to extend into safe areas.
2. **CSS Adjustments**: Moved the dark gradient and background image from `body` to `html` element to cover the entire viewport, including safe areas.
3. **Safe Area Padding**: Added `padding-top: env(safe-area-inset-top)` and `padding-bottom: env(safe-area-inset-bottom)` to the `body` element to prevent content from being obscured by device features.

## Files Modified
- `nuxt.config.ts`: Added viewport meta tag.
- `app/assets/css/main.css`: Adjusted background and padding for safe areas.

## Testing
Test on mobile devices to verify that the top notch and bottom address bar areas now display the dark background instead of white.