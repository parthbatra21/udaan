import Navbar from '../../components/Navbar';

export default function StudentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navbar />
      <div className="ml-20">
        {children}
      </div>
    </div>
  );
}
