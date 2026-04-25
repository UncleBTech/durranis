import { Outlet, Link, createRootRoute } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function RootComponent() {
  return (
    <>
      <Helmet>
        <title>
          Durrani's Gold & Diamonds — Bradford's Premier Jewellery & Luxury Watch Showroom
        </title>
        <meta
          name="description"
          content="50 years of artisan craftsmanship from Dubai to Bradford. IGI-certified diamonds, bespoke bridal sets and the world's most coveted luxury watches at 839 Leeds Road, Bradford."
        />
        <meta name="author" content="Durrani's Gold & Diamonds" />
        <meta property="og:title" content="Durrani's Gold & Diamonds — Bradford" />
        <meta
          property="og:description"
          content="Heritage Asian jewellery, IGI-certified diamonds and luxury timepieces in Bradford's most palatial showroom."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Outlet />
    </>
  );
}

export const Route = createRootRoute({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});
