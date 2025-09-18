// src/components/WebpImg.jsx
import React from "react";

/**
 * WebP with PNG (or any) fallback.
 * - Tries `webp` first; on error switches to `fallback`.
 * - Forwards ref so it works with framer-motion's `motion()`.
 */
const WebpImg = React.forwardRef(
  ({ webp, fallback, alt = "", className, loading = "lazy", ...rest }, ref) => {
    const [src, setSrc] = React.useState(webp || fallback);

    // If props change, reset source
    React.useEffect(() => {
      setSrc(webp || fallback);
    }, [webp, fallback]);

    return (
      <img
        ref={ref}
        src={src}
        alt={alt}
        className={className}
        loading={loading}
        onError={() => {
          // swap to fallback once if webp fails or 404s
          if (fallback && src !== fallback) setSrc(fallback);
        }}
        {...rest}
      />
    );
  }
);

export default WebpImg;
