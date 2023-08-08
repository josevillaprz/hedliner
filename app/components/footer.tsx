import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t flex justify-between py-6 md:px-10 mx-auto max-w-7xl">
      <div className="w-96">
        <h2>About us</h2>
        <p>
          Headliner is your go-to destination for discovering the hottest live
          music concerts. Our user-friendly web app helps you find top artists
          in five popular genres, making sure you never miss an electrifying
          performance. Unleash the power of live music with Headliner today!
        </p>
      </div>
      <div>
        <h2>Navigate</h2>
        <nav className="flex flex-col">
          <Link href="/home">Home</Link>
          <Link href="/blog">Blog</Link>
        </nav>
      </div>
      <div>
        <h2>Contact us</h2>
        <ul>
          <li>
            <a href="mailto:contact@example.com">contact@example.com</a>
          </li>
          <li>
            <a href="tel:+1234567890">+1 (234) 567-890</a>
          </li>
          <li>
            <address>
              123 Main Street, Cityville, Countryland, Postal Code: 12345
            </address>
          </li>
        </ul>
      </div>
    </footer>
  );
}
