export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-24">
      {/* Floating Shapes */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-10 right-10 w-20 h-20 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-20 h-20 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h1 className="text-5xl lg:text-6xl font-extrabold mb-4">AI Research Hub</h1>
        <p className="text-xl lg:text-2xl text-gray-200">
          Exploring the frontiers of artificial intelligence, from machine learning theory to practical applications.
        </p>
      </div>
    </section>
  );
}