// Numeric-safe wrapper for the design system's Icon (template attributes arrive as strings,
// and Icon's `size` must be a number). Mirrors PrimegramasDesignSystem_83b74f.Icon exactly.
var CDN = 'https://unpkg.com/lucide-static@0.544.0/icons/';

window.PGIcon = function PGIcon({ name, size, color, style }) {
  const px = Number(size) || 20;
  const url = CDN + name + '.svg';
  return React.createElement('span', {
    role: 'img', 'aria-hidden': 'true',
    style: {
      display: 'inline-block', width: px, height: px, flex: 'none',
      background: color || 'currentColor',
      WebkitMaskImage: 'url(' + url + ')', maskImage: 'url(' + url + ')',
      WebkitMaskSize: 'contain', maskSize: 'contain',
      WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center', maskPosition: 'center',
      ...(style || {})
    }
  });
};
