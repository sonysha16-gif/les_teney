# Technical Documentation - Forest of Shadows

## Layout & Navigation

### Sticky "About Me" Section
The "About Me" section uses a complex layout to ensure engagement:
- **Left Column (Photo)**: Uses `lg:sticky` with `lg:top-24`. The parent container `flex-row` has `items-stretch`.
- **Logic**: The sticky behavior requires the parent flex container to have `items-stretch` so the columns have equal height. The left column acts as a rail; its child `div` (the sticky box) slides down this rail until the container ends.
- **Float Animation**: The photo has a subtle floating animation using `motion.div` with a `y` offset transition to add "life" to the static section.

### Cinematic Banner Quests
- **Full-Viewport Sections**: Uses `h-[100dvh]` for consistent mobile and desktop experience.
- **AnimatePresence**: Handles smooth transitions between slides, preventing flickering and providing a polished feel.
- **Dynamic Layouts**: Support for `center`, `split`, `left`, and `right` content alignment allows for a variable rhythm that matches the background imagery.

## Typography & Visuals

### Deep Shadows & Darkening
- **Image Darkening**: All banner images are darkened by 30% using a dedicated `bg-black/30` overlay layer. This provides consistent visual style across all browsers (including Telegram's embedded browser) where CSS filters might be unsupported.
- **Deep Shadows**: A custom `.text-shadow-deep` class is applied to all primary text:

### Mobile Optimization
- **Vertical Spacing**: Reduced bottom padding of the content wrapper and grid gaps on mobile to ensure multi-point lists (like Quest Structure) fit on smaller screens without being covered by navigation buttons.
- **Custom Positioning**: Specific slides (like Slide 7) use custom background positioning (`bg-[15%_center]`) on mobile to ensure key visual elements remain visible even when cropped.
- **Image Positioning**: Banner images use `bg-center` by default, but specific slides can override this via `mobilePosition` property.
- **Layout Stacking**: Grid layouts transition from multi-column on desktop to single column on mobile with refined padding to prevent text-to-button collisions.
