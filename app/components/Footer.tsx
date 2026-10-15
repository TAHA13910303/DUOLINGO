export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-black/20">

      <div className="mx-auto max-w-7xl px-6 py-10">

        <div className="text-center">

          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} My Shop.
            All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}