// LandingPage.jsx
import React, { useEffect, useState } from "react";

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Landing Section */}
      <section className="relative h-screen bg-cover bg-center flex border items-end justify-center p-20" style={{ backgroundImage: "url('/hero.jpg')" }}>
        <div
          className="flex items-center justify-center text-white text-5xl font-bold"
          style={{ transform: `translateY(${scrollY * 1}px)` }} // slight parallax
        >
          Landing Page
        </div>
      </section>

      {/* Next Section */}
      <section className="bg-gray-100 relative h-screen">
        <div className="pt-screen max-w-4xl mx-auto p-8 text-gray-800">
          <h2 className="text-3xl font-semibold mb-4">Next Section</h2>
          <p>
            This section scrolls up and covers the landing section naturally.
          </p>
          <p>
            You can add more content here and it will push the landing section
            up as you scroll.
          </p>
        </div>
      </section>
    </div>
  );
}