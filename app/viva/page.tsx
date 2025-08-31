export default function VivaPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="animate-fade-in">
        <h1 className="text-4xl font-display font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-8">
          Viva Sessions
        </h1>
        
        <div className="card p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Viva Sessions</h2>
            <button className="btn-primary">
              Schedule New Session
            </button>
          </div>
          
          <div className="text-center py-12">
            <div className="text-gray-500 text-lg">
              No viva sessions scheduled. Create your first session to get started.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
