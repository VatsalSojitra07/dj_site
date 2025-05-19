
import React from 'react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-black to-background">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255, 58, 58, 0.5) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}
      ></div>

      <div className="container pt-16 pb-20 md:pt-24 md:pb-28 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-10 md:mb-0 md:pr-8 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-primary text-4xl md:text-5xl lg:text-6xl">Jay Khodiyar Dj</span>
            {/* for Every Performance */}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
            {/* અમારા વ્યાવસાયિક ડીજે અને સ્પીકર સિસ્ટમ્સ સાથે સ્ટુડિયો-ગુણવત્તાવાળા ઑડિઓનો અનુભવ કરો.
            સ્ટેજ માટે બનાવેલ, સંપૂર્ણ અવાજ માટે રચાયેલ. */}
            અમે મેરીજ અને રાસ-ગર્બા જેવા કાર્યક્રમોમાં ભાડે માટે ડી.જે. સિસ્ટમ ઉપલબ્ધ કરાવીએ છીએ – શ્રેષ્ઠ અવાજ અને અનુભવ માટે!
            તમારા ખાસ દિવસને સ્મરણિય બનાવો અમારા પ્રોફેશનલ ડી.જે. સાથે!
          </p>
          <div className="flex flex-wrap gap-4">
            {/* <button className="btn btn-primary pulse-effect">હમણાં બુક કરો</button> */}
            <button type='button'
              onClick={() =>
                window.open(
<<<<<<< HEAD
                  "https://wa.me/917485950447?text=હાય, હું તમારું ડી.જે. સિસ્ટમ બુક કરવા ઇચ્છું છું!",
=======
                  "https://wa.me/918320190482?text=હાય, હું તમારું ડી.જે. સિસ્ટમ બુક કરવા ઇચ્છું છું!",
>>>>>>> 8ab91c4873ddc13bb2a182790c83a77a8d02d05f
                  "_blank"
                )
              }
              className="bg-primary text-white px-6 py-3 rounded-lg shadow hover:bg-primary/90 transition"
            >
<<<<<<< HEAD
              હમણાં બુક કરો
            </button>
            <button className="btn btn-outline"><a href="#products"> સ્પીકર્સ જુઓ</a></button>
=======
              Book Now
            </button>
            <button className="btn btn-outline">સ્પીકર્સ જુઓ</button>
>>>>>>> 8ab91c4873ddc13bb2a182790c83a77a8d02d05f
          </div>

          <div className="mt-8 flex items-center gap-6">
            {/* <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-muted"></div>
              ))}
            </div> */}
            <p className="text-sm text-muted-foreground"><span className="text-primary font-bold mr-2">22+</span>Our Happy Customer</p>
          </div>
        </div>

        <div className="w-full md:w-1/2 relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-secondary/30 rounded-full blur-3xl"></div>
          <img
            src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt="Professional DJ Equipment"
            className="relative z-10 w-full h-auto rounded-lg shadow-2xl"
          />
        </div>
      </div>


      <div className="container py-8 border-t border-border">
        <div className="flex flex-wrap justify-around items-center gap-8">
          <div className="text-center opacity-70 hover:opacity-100 transition-opacity">
            <p className="text-sm uppercase tracking-wider text-muted-foreground">Used by</p>
            <p className="text-xl font-bold">Pioneer DJ</p>
          </div>
          <div className="text-center opacity-70 hover:opacity-100 transition-opacity">
            <p className="text-sm uppercase tracking-wider text-muted-foreground">Verified by</p>
            <p className="text-xl font-bold">SoundCloud</p>
          </div>
          <div className="text-center opacity-70 hover:opacity-100 transition-opacity">
            <p className="text-sm uppercase tracking-wider text-muted-foreground">Featured on</p>
            <p className="text-xl font-bold">DJ Mag</p>
          </div>
          <div className="text-center opacity-70 hover:opacity-100 transition-opacity">
            <p className="text-sm uppercase tracking-wider text-muted-foreground">Trusted by</p>
            <p className="text-xl font-bold">Top Studios</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
