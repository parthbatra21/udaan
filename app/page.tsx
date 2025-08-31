import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
      <div className="text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <h1 className="text-6xl font-display font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            Udaan
          </h1>
          <p className="text-xl text-gray-600 max-w-md mx-auto">
            Welcome to your educational journey. Discover, learn, and grow with us.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link href="/login" className="btn-primary inline-block">
            Get Started
          </Link>
          <div className="text-sm text-gray-500">
            Already have an account?{' '}
            <Link href="/login" className="text-primary-600 hover:text-primary-700 font-medium">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
