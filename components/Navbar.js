import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='w-100 py-4 bg-white'>
      <ul className="flex justify-center items-center gap-4 text-gray-700 hover:opacity-90 text-lg">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/forms">Forms</Link></li>
      </ul>
    </nav>
  );
}
