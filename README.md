# Zen Tidy Popup

A clean theme extension for Zen Browser and Firefox that modifies popup panels by replacing divider lines with empty spacers and making buttons more compact for a tidier, more polished interface.

## Features

- 🎨 **Clean Popup Design** - Replaces harsh divider lines with subtle empty spacers (optionally keep dividers)
- 📏 **Compact Buttons** - Makes popup buttons more compact and visually appealing
- 🌈 **Customizable Hover Colors** - Set custom hover colors for both light and dark themes
- 🧩 **Zen Primary Color Integration** - Optionally use Zen Browser’s primary color as the hover color
- 🎯 **Rounded Corners** - Adds modern rounded corners to popup panels and buttons
- 🔧 **Universal Compatibility** - Works with both Zen Browser and Firefox
- 🧩 **Tidy Extension Panel** - Cleans up the unified extensions popup for a more organized look
- ⚡ **Lightweight** - Minimal CSS with no performance impact

## Prerequisites

Before installing this theme, you need to have **Sine** installed, which is a theme manager for Zen Browser and Firefox. If you don't know how to install Sine, [please click here to view the Sine installation Guide.](https://github.com/CosmoCreeper/Sine#%EF%B8%8F-installation)

### Installing Sine

1. Download Sine from the official repository
2. Follow the installation instructions for your browser
3. Restart your browser after installation

## Installation

### Method 1: Through Sine Theme Store (Recommended)

1. Open Sine menu in your browser
2. Search for "Zen Tidy Popup" in the theme store
3. Click "Install" on the theme
4. The theme will be automatically applied

### Method 2: Manual Installation

If the theme is not available in the Sine theme store:

1. Open Sine menu
2. Enter the following repository URL:
   ```
   rasyidrafi/zen-tidy-popup
   ```
3. Click "Install" to add the theme
4. The theme will be applied

## Customization Options

These options map directly to Sine preferences and drive the CSS in chrome.css.

### Toggles

- Enable/Disable Tidy Popup
  - Property: mod.forkedtidypopup.usetidypopup
  - Default: true
- Keep divider lines
  - Property: mod.forkedtidypopup.keepdividers
  - Default: true
  - When off, dividers are hidden and spacing is adjusted.
- Enable/Disable custom hover color
  - Property: mod.forkedtidypopup.usecustomhovercolor
  - Default: true
  - When off, no custom hover color is applied.
- Use color from Zen Browser (overrides custom hover colors)
  - Property: mod.forkedtidypopup.usezenprimarycolor
  - Default: true
  - If Zen primary color is available, it is used for both light and dark hover states.
- Enable/Disable Tidy Extension
  - Property: mod.forkedtidypopup.usetidyextension
  - Default: true
  - When enabled, applies clean styling to the unified extensions popup panel.

### Hover Colors

Used only when mod.forkedtidypopup.usecustomhovercolor is true.

- Button color when hovered (Light mode)
  - Property: mod.forkedtidypopup.hovercolor.light
  - Default: rgba(243,202,176,255)
- Button color when hovered (Dark mode)
  - Property: mod.forkedtidypopup.hovercolor.dark
  - Default: rgba(87,65,50,255)

Behavior and precedence:
1) If usecustomhovercolor is false: no custom hover color is applied.
2) If usecustomhovercolor is true AND usezenprimarycolor is true: Zen primary color is used for both light and dark.
3) If usecustomhovercolor is true AND usezenprimarycolor is false: the manual colors above are used per scheme.

Tip: If the Zen color looks incorrect or unavailable, disable “Use color from Zen Browser” and set manual colors.

### How to Configure

1. Open Sine menu in your browser
2. Go to the theme settings for "Zen Tidy Popup"
3. Adjust:
   - Enable/Disable Tidy Popup
   - Keep divider lines
   - Enable/Disable custom hover color
   - Use color from Zen Browser
   - Button color when hovered (Light mode)
   - Button color when hovered (Dark mode)
   - Enable/Disable Tidy Extension
4. Changes apply automatically

## What This Theme Does

- Removing or keeping dividers: Hide dividers entirely or keep the native separators
- Compact button styling: Smaller, rounded, consistent hit areas
- Enhanced hover effects: Customizable, light/dark-aware, optional Zen color integration
- Modern panel design: Rounded corners, refined borders and shadows
- Better spacing: Optimized padding and margins for a cleaner look
- Tidy extensions panel: Streamlined unified extensions popup with improved layout and spacing

## How it works

- chrome.css reads the prefs via @media (-moz-bool-pref: ...) to toggle features:
  - mod.forkedtidypopup.usetidypopup gates all panel styling
  - mod.forkedtidypopup.keepdividers toggles separator visibility and layout
  - mod.forkedtidypopup.usecustomhovercolor enables hover color rules
  - mod.forkedtidypopup.usezenprimarycolor switches hover color source to --zen-primary-color
  - mod.forkedtidypopup.usetidyextension applies specialized styling to the extensions popup
- Light/Dark hover colors automatically follow your system color scheme.

## Compatibility

- ✅ Zen Browser
- ✅ Firefox (with Sine installed)

## Credits

Originally forked from [Dinno-DEV/zen-tidy-popup](https://github.com/Dinno-DEV/zen-tidy-popup)

Enhanced with additional customization options and improved styling.

## Contributing

Found a bug or want to suggest an improvement? Feel free to open an issue or submit a pull request on the [GitHub repository](https://github.com/rasyidrafi/zen-tidy-popup/).

## License

This project is open source and available under standard open source terms.

## Author

Modified and enhanced by [rasyidrafi](https://github.com/rasyidrafi)

---

*Version 2.8.4 - Last updated: August 2, 2025*