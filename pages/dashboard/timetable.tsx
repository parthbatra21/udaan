import Navbar from '../../components/Navbar';

export default function TimetablePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="animate-fade-in">
          <h1 className="text-4xl font-display font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-8">
            Timetable
          </h1>
          
          <div className="card p-8">
            <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
              {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day, index) => (
                <div key={day} className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 text-center py-2 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-lg">
                    {day}
                  </h3>
                  <div className="space-y-2">
                    {['9:00 AM', '10:30 AM', '12:00 PM', '2:00 PM', '3:30 PM'].map((time, timeIndex) => (
                      <div key={time} className="p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-primary-300 transition-colors duration-200">
                        <div className="text-sm font-medium text-gray-700">{time}</div>
                        <div className="text-xs text-gray-500 mt-1">Class {index + 1}-{timeIndex + 1}</div>
                      </div>
                    ))}
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
