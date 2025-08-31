'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    {
      href: '/dashboard',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6a2 2 0 01-2 2H10a2 2 0 01-2-2V5z" />
        </svg>
      ),
      label: 'Dashboard'
    },
    {
      href: '/timetable',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Timetable'
    },
    {
      href: '/students',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      label: 'Students'
    },
    {
      href: '/viva',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      label: 'Viva'
    }
  ];

  return (
    <nav className="fixed left-0 top-0 h-full w-20 bg-gray-900 shadow-xl z-50 flex flex-col justify-between items-center py-6">
      {/* Top Section - Logo */}
      <div className="flex flex-col items-center">
        <Link href="/dashboard" className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mb-10 hover:scale-110 transition-all duration-200 shadow-lg">
          <span className="text-white text-xl font-bold">U</span>
        </Link>
      </div>

      {/* Middle Section - Navigation Icons */}
      <div className="flex flex-col items-center space-y-8 flex-1 justify-center">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <div key={item.href} className="relative group">
              {/* Active indicator */}
              {isActive && (
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-8 w-1 h-10 bg-primary-500 rounded-r"></div>
              )}
              
              <Link
                href={item.href}
                className={`relative flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-200 ${
                  isActive 
                    ? 'bg-primary-500/20 text-primary-400' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
                aria-label={item.label}
              >
                <div className="w-7 h-7">
                  {item.icon}
                </div>
                
                {/* Tooltip */}
                <div className="absolute left-full ml-3 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                  {item.label}
                  <div className="absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>

      {/* Bottom Section - Profile */}
      <div className="flex flex-col items-center">
        <div className="relative group">
          {/* Active indicator for profile */}
          {pathname === '/profile' && (
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-8 w-1 h-10 bg-primary-500 rounded-r"></div>
          )}
          
          <Link 
            href="/profile" 
            className={`relative w-11 h-11 rounded-full overflow-hidden transition-all duration-200 ${
              pathname === '/profile' ? 'ring-2 ring-primary-400 scale-110' : 'hover:scale-110'
            }`}
            aria-label="Profile"
          >
            <div className="w-full h-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            
            {/* Tooltip */}
            <div className="absolute left-full ml-3 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
              Profile
              <div className="absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
