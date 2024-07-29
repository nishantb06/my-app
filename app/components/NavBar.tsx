// app/components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="mb-8">
      <div className="container mx-auto px-4 py-5">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="mb-4 sm:mb-0">
            <Link href="/" className="text-mute font-seriff text-gray-700 hover:text-gray-900">
              Your Name
            </Link>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/start-here" className="text-gray-600 hover:text-gray-900">Start Here</Link></li>
              <li><Link href="/writing" className="text-gray-600 hover:text-gray-900">Writing</Link></li>
              <li><Link href="/speaking" className="text-gray-600 hover:text-gray-900">Speaking</Link></li>
              <li><Link href="/prototyping" className="text-gray-600 hover:text-gray-900">Prototyping</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;