import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";
import { SITE_PHONE } from "@/lib/seo";

export function SiteLoader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const startedAt = Date.now();
    let hideTimer: number | undefined;
    let hideScheduled = false;

    const hideWhenReady = () => {
      if (hideScheduled) {
        return;
      }

      hideScheduled = true;
      const elapsed = Date.now() - startedAt;
      hideTimer = window.setTimeout(() => setVisible(false), Math.max(950 - elapsed, 0));
    };

    const fallbackTimer = window.setTimeout(hideWhenReady, 2400);

    if (document.readyState === "complete") {
      hideWhenReady();
    } else {
      window.addEventListener("load", hideWhenReady, { once: true });
    }

    return () => {
      window.clearTimeout(fallbackTimer);
      if (hideTimer) {
        window.clearTimeout(hideTimer);
      }
      window.removeEventListener("load", hideWhenReady);
    };
  }, []);

  return (
    <div
      className={`site-loader ${visible ? "site-loader--visible" : "site-loader--hidden"}`}
      aria-hidden={!visible}
    >
      <div className="site-loader__mark">
        <span className="site-loader__ring" />
        <img src={logo} alt="Hope Trust Vellore" className="site-loader__logo" />
        <div className="site-loader__content">
          <p className="site-loader__slogan">Medical support, education and community welfare</p>
          <p className="site-loader__contact">Contact: {SITE_PHONE}</p>
        </div>
      </div>
    </div>
  );
}
