// app/page.tsx
import Navbar from './components/NavBar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Hi, I'm Your Name
        </h1>
        <p className="text-xl text-gray-700 mb-6">
          I'm a [Your Role] specializing in [Your Specialties].
        </p>
        <div className="space-y-4 text-gray-600">
          <p>
            I design, build, and operate [Your Area of Expertise] systems that [Your Impact].
            Currently, I'm a [Your Current Role] at [Your Company].
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>Write, speak, and prototype on ideas in [Your Areas of Interest].</li>
            <li>Teach how to apply [Your Skills] effectively at [Your Website/Platform].</li>
            <li>Host [Any Community Activities or Events You Run].</li>
          </ul>
        </div>
      </main>
    </div>
  );
}