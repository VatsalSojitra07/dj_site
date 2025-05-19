
import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-card text-foreground">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <a href="/" className="flex items-center">
                <span className="text-primary font-bold text-2xl">Jay Khodiyar</span>
                <span className="text-secondary font-bold text-2xl ml-2">Dj</span>
              </a>
            </div>
            <p className="text-muted-foreground mb-4">
              તમારા દરેક પ્રસંગને બનાવો સંગીતમય અને યાદગાર! અમારી DJ સર્વિસ અને પ્રીમિયમ ઓડિયો સિસ્ટમ સાથે માણો અનલિમિટેડ મોજશોખ. આજે જ અમારો સંપર્ક કરો!
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/jaykhodiyardj?igsh=ejdoZ242aWY1eGZp" target='_blank' className="text-foreground hover:text-primary">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
              <a href="#" className="text-foreground hover:text-primary" onClick={() =>
                window.open(
                  "https://wa.me/917485950447?text=હાય, હું તમારું ડી.જે. સિસ્ટમ બુક કરવા ઇચ્છું છું!",
                  "_blank"
                )
              }
              >
                <span className="sr-only">Whatsapp</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><title>WhatsApp icon</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">DJ સર્વિસની વિશેષતાઓ</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary">ઝોરદાર સાઉન્ડ</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">ઝગમગ લાઈટ્સ</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">મસ્ત મ્યુઝિક</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">સમયપાલન</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">પ્રોફેશનલ સર્વિસ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Home</a></li>
              <li><a href="#products" className="text-muted-foreground hover:text-primary">Speakers</a></li>
              <li><a href="#features" className="text-muted-foreground hover:text-primary">Features</a></li>
              <li><a href="#testimonials" className="text-muted-foreground hover:text-primary">Reviews</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4">Newsletter</h3>
            {/* <p className="text-muted-foreground mb-4">Subscribe to get special offers and product updates.</p> */}
            <p className="text-muted-foreground mb-4">ખાસ ઑફર્સ અને પ્રોડક્ટ અપડેટ્સ મેળવવા માટે સબ્સ્ક્રાઇબ કરો.</p>
            <form className="space-y-2" >
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full rounded-l-md py-2 px-4 bg-background border border-border focus:outline-none focus:ring-1 focus:ring-primary text-foreground"
                  required
                />
                <button
                  type="submit"
                  className="bg-primary text-primary-foreground py-2 px-4 rounded-r-md hover:bg-primary/90"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-muted-foreground">By subscribing, you agree to our Terms and Privacy Policy.</p>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">&copy; 2024 Jay Khodiyar Dj. All rights reserved.</p>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary">🎧 પાવરફુલ સાઉન્ડ</a>
            <a href="#" className="hover:text-primary">💡 લાઈવ લાઈટિંગ</a>
            <a href="#" className="hover:text-primary">🎶 પ્રોફેશનલ મ્યુઝિક</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
