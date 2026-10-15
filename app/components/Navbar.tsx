import Image from "next/image";
import Link from "next/link";
import { auth } from "@/auth";
import { getSiteSettings } from "@/lib/api";
import LogoutButton from "./LogoutButton";
import NavbarVisibility from "./NavbarVisibility";
import { getImageUrl } from "@/lib/image";

export default async function Navbar() {
  const session = await auth();
  const { data } = await getSiteSettings();

  return (
    <NavbarVisibility>
      <header className="navbar-card">

        {/* Logo */}
        <Link
          href="/"
          className="navbar-logo"
        >
          {data.Logo ? (
            <Image
              src={getImageUrl(data.Logo.url)}
              alt={data.Logo.name || data.SiteName}
              width={44}
              height={44}
              className="navbar-logo-image"
            />
          ) : (
            <span className="navbar-logo-fallback">
              MS
            </span>
          )}
        </Link>

        {/* Everything except logo */}
        <div className="navbar-expanded">

          <nav className="navbar-links">

            {data.menu?.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="navbar-link"
              >
                {item.title}
              </Link>
            ))}

            <Link
              href="/about"
              className="navbar-link"
            >
              About
            </Link>

          </nav>

          <div className="navbar-divider" />

          {session?.user ? (
            <div className="navbar-account">

              <Link
                href="/dashboard"
                className="navbar-dashboard"
              >
                Dashboard
              </Link>

              <span className="navbar-username">
                {session.user.name || session.user.email}
              </span>

              <LogoutButton />

            </div>
          ) : (
            <Link
              href="/login"
              className="navbar-login"
            >
              Login
            </Link>
          )}

        </div>

      </header>
    </NavbarVisibility>
  );
}