import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="w-screen max-w-lg text-center">
        <h2 className="text-7xl font-bold mb-4">404</h2>
        <p className="text-xl mb-4">Nie znaleziono strony </p>
        <p className="text-sm mb-4">
          Wróć do{" "}
          <Link
            className="underline underline-offset-2 hover:underline-offset-auto"
            href="/"
          >
            strony głównej
          </Link>
        </p>
      </div>
    </div>
  );
}
