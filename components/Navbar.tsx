import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link href="/dashboard" className="nav-link text-lg font-semibold">
              Dashboard
            </Link>
            <Link href="/timetable" className="nav-link">
              Timetable
            </Link>
            <Link href="/students" className="nav-link">
              Students
            </Link>
            <Link href="/viva" className="nav-link">
              Viva
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/profile" className="w-8 h-8 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200 cursor-pointer">
              <span className="text-white text-sm font-bold">U</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
