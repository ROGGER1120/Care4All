import { Link } from "react-router-dom";
import heroImg from "../assets/hero.png";

const LandingHero = () => {
  return (
    <section className="relative w-full h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImg})` }}
      ></div>

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 flex items-center h-full">
        <div className="max-w-6xl px-10 md:px-20 text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-left">
            Together We Can Make <br />
            a Difference
          </h1>

          <p className="mt-6 text-lg md:text-xl max-w-2xl text-gray-200 text-left">
            Join thousands of donors making an impact. Your contribution helps
            us provide essential services to the communities in need.
          </p>

          <Link
            to="/login"
            className="mt-8 inline-block bg-pink-600 hover:bg-pink-700 px-8 py-3 rounded-full font-semibold transition"
          >
            START DONATING
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;