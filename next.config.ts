import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /*
   * Next's dev-tools indicator is injected by `next start` as well as `next dev`.
   * It is framework chrome, not site content: it has no focus indicator of its
   * own, so it shows up as a phantom failure in the keyboard audit, and it lands
   * in full-page screenshots as a false difference when comparing against the
   * original bundle.
   */
  devIndicators: false,
  async redirects() {
    return [{ source: '/', destination: '/he', permanent: false }];
  },
};

export default nextConfig;
