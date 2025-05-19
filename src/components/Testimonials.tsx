
import React from 'react';
import img1 from './assets/user-solid.svg';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "બિપિન ભાઈ ઢોલરિયા",
      role: "રાસ અને ફુલેકુ",
      comment: "દરેક મહેમાનને મજા આવી, યુથ હોય કે વડીલો – બધાને ગમે તેવા ગીતો વગાડ્યા.5 માંથી 5 સ્ટાર. આવી સર્વિસ ફરીથી જરૂરથી લેશ! આખી સર્વિસ ઉત્તમ રહી, ઇવેન્ટને યાદગાર બનાવી દીધો.",
      image: img1
    },
    {
      id: 2,
      name: "કલ્પેશ ભાઈ કોટડીયા",
      role: "ફુલેકુ",
      comment: "મેં મારી ઇવેન્ટ માટે DJ સિસ્ટમ બુક કરી હતી અને સાચું કહું તો ખૂબ જ સરસ અનુભવ રહ્યો.લાઈટસ ખુબજ આકર્ષક હતી અને સંગીત સાથે perfectly sync થતી હતી – પાર્ટીનો માહોલ જ બની ગયો!",
      image: img1
    },
    {
      id: 3,
      name: "અભય વડાલીયા",
      role: "લગ્ન, રાસ",
      comment: "સાઉન્ડ ખુબ જ ક્લિયર અને પાવરફુલ હતું, બેસનો અસરદાર અનુભવ મળ્યો.DJ સમયસર આવેલ અને સેટઅપ ટાઈમ પર તૈયાર કરી દીધો.મારી માંગ મુજબ ગીતો વગાડ્યા અને બધા નાચ્યા વિના રહી ન શક્યા!",
      image: img1
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container">
        {/* <h2 className="section-title">What Our Customers Say</h2> */}
        <h2 className="section-title">અમારા ગ્રાહકો શું કહે છે.</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-card rounded-lg p-6 border border-border relative">
              <div className="absolute top-0 right-6 transform -translate-y-1/2 text-5xl text-primary opacity-30">"</div>
              <p className="mb-6 text-muted-foreground italic">{testimonial.comment}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-contain mr-4"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary/10 rounded-lg p-8 text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">તમારા કાર્યને યાદગાર બનાવવા માટે તૈયાર છો?</h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            "અમારા પાવરફુલ ઓડિયો અને DJ સર્વિસ સાથે તમારા દરેક પ્રસંગને બનાવો યાદગાર અને ઉજવણિયું! લગ્ન, બર્થડે કે કોઈપણ ઇવેન્ટ – અમે આપના આનંદને મ્યુઝિકના માધ્યમથી ઊર્જાવાન અને રંગીન બનાવીએ છીએ. આજે જ જોડાઓ અને માણો સંગીતમય અનુભવ!"
          </p>
          {/* <button className="btn btn-primary">જોડાવ આમરી સાથે</button> */}
          <button type='button'
            onClick={() =>
              window.open(
                "https://wa.me/917485950447?text=હાય, હું તમારું ડી.જે. સિસ્ટમ બુક કરવા ઇચ્છું છું!",
                "_blank"
              )
            }
            className="bg-primary text-white px-6 py-3 rounded-lg shadow hover:bg-primary/90 transition"
          >
            જોડાવ આમરી સાથે
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
