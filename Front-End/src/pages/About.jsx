import React from 'react';
import LandingNav from '../components/LandingNav';

const About = () => {
  return (
    <> 
      <LandingNav />
      
      <div className="bg-white">
        <section className="bg-gray-900 py-20">
          <div className="max-w-6xl mx-auto px-10 text-center pt-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Our Mission</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </section>


        <section className="py-16 max-w-6xl mx-auto px-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Who We Are</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
                alt="Our Team" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>


<section className="bg-[#eb008b] py-16 text-white w-full">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-3 gap-12 text-center font-poppins">
    <div>
      <div className="text-4xl md:text-5xl font-black">10</div>
      <div className="text-pink-100 uppercase text-xs tracking-widest font-bold mt-2">Donors</div>
    </div>
    <div>
      <div className="text-4xl md:text-5xl font-black">0</div>
      <div className="text-pink-100 uppercase text-xs tracking-widest font-bold mt-2">Lives Impacted</div>
    </div>
    <div>
      <div className="text-4xl md:text-5xl font-black">0</div>
      <div className="text-pink-100 uppercase text-xs tracking-widest font-bold mt-2">Countries</div>
    </div>
  </div>
</section>


        <section className="py-20 max-w-6xl mx-auto px-10">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Leadership</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2, 3].map((member) => (
              <div key={member} className="text-center group">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden grayscale group-hover:grayscale-0 transition duration-300">
                  <img src={`https://i.pravatar.cc/150?img=${member + 10}`} alt="Team member" />
                </div>
                <h3 className="font-bold text-xl text-gray-800">Person Name</h3>
                <p className="text-pink-600 font-medium italic">Role / Position</p>
                <p className="mt-3 text-gray-500 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default About;