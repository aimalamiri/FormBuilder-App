import Link from 'next/link';
import useAuth from '../utils/useAuth';

export default function Navbar() {
  const [auth] = useAuth();

  return (
    <nav className="w-100 py-4 bg-white">
      <ul className="flex justify-center items-center gap-4 text-gray-700 hover:opacity-90 text-lg">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/forms">Forms</Link></li>
        <li className="absolute right-8 sm:right-5 lg:right-12">
          {auth.user.first_name ? (
            <Link href="/auth/logout">Logout</Link>
          ) : (
            <Link href="/auth/login">Login</Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
