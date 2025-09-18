// Simple <picture> helper with WebP + fallback <img>
// If the webp path is present, browsers that support WebP will use it.
// Others will fall back to the <img> src.
const WebpImg = ({ webp, fallback, alt, className }) => (
  <picture>
    {webp && <source srcSet={webp} type="image/webp" />}
    <img src={fallback} alt={alt} className={className} loading="lazy" />
  </picture>
);
