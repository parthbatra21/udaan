'use client';

import Link from 'next/link';

export default function DashboardPage() {
  // Get current date information
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();
  const currentDay = currentDate.getDate();
  
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  
  // Get first day of month and number of days in month
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const daysInPrevMonth = new Date(currentYear, currentMonth, 0).getDate();

  const courses = [
    {
      id: 1,
      title: "Design Strategy",
      description: "Lesson on planning a design concept and proper planning of work",
      tags: ["UX/UI Design", "Web Design"],
      startDate: "May 5",
      rating: 4.0,
      color: "bg-green-100",
      accentColor: "text-green-600",
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h4a2 2 0 002-2V9a2 2 0 00-2-2H7a2 2 0 00-2 2v6a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 2,
      title: "React Development",
      description: "Learn modern React development with hooks and context",
      tags: ["Programming", "JavaScript"],
      startDate: "May 8",
      rating: 4.5,
      color: "bg-purple-100",
      accentColor: "text-purple-600",
      icon: (
        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Product Management",
      description: "Understanding product lifecycle and management strategies",
      tags: ["Business", "Strategy"],
      startDate: "May 12",
      rating: 4.2,
      color: "bg-orange-100",
      accentColor: "text-orange-600",
      icon: (
        <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  const scheduleItems = [
    { date: "05", subject: "UX/UI Workshop", time: "18:00-19:30", progress: "03 of 20", isActive: true, color: "bg-purple-500" },
    { date: "06", subject: "English", time: "11:00-12:30", progress: "18 of 60", isActive: false, color: "bg-green-500" },
    { date: "07", subject: "Product Design", time: "14:00-15:30", progress: "08 of 45", isActive: false, color: "bg-orange-500" }
  ];



  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-gray-200 px-6 py-4 shadow-sm">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-xl font-semibold text-gray-900">
              Hi, Mia Lore 👋
            </h1>
          </div>
          <div className="flex items-center">
            <Link href="/profile" className="w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-200 shadow-lg">
              <span className="text-white text-lg font-bold">U</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content Grid */}
      <div className="flex-1 grid grid-cols-3 gap-6 p-6">
        {/* Left Column - My Courses (2/3 width) */}
        <div className="col-span-2">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">My Courses</h2>
            <div className="flex space-x-6 border-b border-gray-200">
              <button 
                onClick={() => console.log('All courses')}
                className="pb-2 border-b-2 border-gray-900 text-gray-900 font-medium transition-colors duration-200"
              >
                All
              </button>
              <button 
                onClick={() => console.log('Active courses')}
                className="pb-2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
              >
                Active
              </button>
              <button 
                onClick={() => console.log('Upcoming courses')}
                className="pb-2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
              >
                Upcoming
              </button>
              <button 
                onClick={() => console.log('Completed courses')}
                className="pb-2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
              >
                Completed
              </button>
            </div>
          </div>

          {/* Course Cards */}
          <div className="space-y-3">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100 hover:shadow-xl hover:scale-[1.02] transition-all duration-300">
                <div className="flex items-center space-x-5">
                  {/* Preview Graphic */}
                  <div className={`w-20 h-20 ${course.color} rounded-xl flex items-center justify-center shadow-md`}>
                    {course.icon}
                  </div>

                  {/* Course Details */}
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{course.title}</h3>
                    <p className="text-gray-600 text-sm mb-3 leading-relaxed">{course.description}</p>
                    <div className="flex space-x-2">
                      {course.tags.map((tag, index) => (
                        <span key={index} className="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs rounded-full font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Side Info */}
                  <div className="text-right flex flex-col items-end space-y-3">
                    <p className="text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full">Start {course.startDate}</p>
                    <div className="flex items-center space-x-1">
                      <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm font-semibold text-gray-900">{course.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Calendar + Schedule + Stats (1/3 width) */}
        <div className="space-y-6">
          {/* Calendar Widget */}
          <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100">
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-semibold text-gray-900 text-lg">{monthNames[currentMonth]} {currentYear}</h3>
              <div className="flex space-x-1">
                <button 
                  onClick={() => console.log('Previous month')}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button 
                  onClick={() => console.log('Next month')}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                >
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-xs">
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                <div key={index} className="p-2 text-gray-500 font-medium">{day}</div>
              ))}
              
              {/* Previous month's trailing days */}
              {Array.from({ length: firstDayOfMonth }, (_, i) => (
                <div key={`prev-${i}`} className="p-2 text-gray-300 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors duration-200">
                  {daysInPrevMonth - firstDayOfMonth + i + 1}
                </div>
              ))}
              
              {/* Current month's days */}
              {Array.from({ length: daysInMonth }, (_, i) => (
                <div 
                  key={`current-${i}`} 
                  className={`p-2 rounded-lg cursor-pointer transition-colors duration-200 ${
                    i + 1 === currentDay 
                      ? 'bg-primary-500 text-white shadow-md' 
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {i + 1}
                </div>
              ))}
              
              {/* Next month's leading days */}
              {Array.from({ length: (42 - daysInMonth - firstDayOfMonth) }, (_, i) => (
                <div key={`next-${i}`} className="p-2 text-gray-300 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors duration-200">
                  {i + 1}
                </div>
              ))}
            </div>
          </div>

          {/* Schedule Widget */}
          <div className="bg-white rounded-2xl p-5 shadow-lg border border-gray-100">
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-semibold text-gray-900 text-lg">Schedule</h3>
              <Link href="/timetable" className="text-sm text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200">
                See all
              </Link>
            </div>
            <div className="space-y-3">
              {scheduleItems.map((item, index) => (
                <div key={index} className={`relative p-4 rounded-xl transition-all duration-200 ${
                  item.isActive ? 'bg-gray-900 text-white shadow-md' : 'bg-gray-50 hover:bg-gray-100'
                }`}>
                  {/* Colored bar */}
                  <div className={`absolute left-0 top-0 w-1 h-full ${item.color} rounded-l-xl`}></div>
                  
                  <div className="flex justify-between items-start ml-2">
                    <div className="flex-1">
                      <div className="font-medium text-sm mb-1">{item.date} {item.subject}</div>
                      <div className={`text-xs ${item.isActive ? 'text-gray-300' : 'text-gray-500'}`}>
                        {item.time}
                      </div>
                    </div>
                    <div className={`text-xs font-medium ${item.isActive ? 'text-gray-300' : 'text-gray-600'}`}>
                      {item.progress}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}
