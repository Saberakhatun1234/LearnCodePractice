import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className="bg-black mt-10 p-10 text-white text-sm ">
      {/* Heading */}
      <h1 className="text-6xl text-white font-light underline underline-offset-8 decoration-1">
        Let's Collaborate
      </h1>

      {/* Footer Content */}
      <div className="mt-10 grid grid-cols-5 gap-6">
        
        {/* Address Section */}
        <div className="col-span-2">
          <h2 className="font-bold mb-4">Address</h2>
          <p className="text-[12px] mb-8">
            Street Dahila number 06 Malang, <br /> Indonesia, 898979
          </p>
          <div className="flex space-x-4">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
            <FontAwesomeIcon icon={faTwitter} size="lg" />
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </div>
        </div>

        {/* Company Section */}
        <div>
          <h2 className="font-bold">Company</h2>
          <div className="leading-6 text-[12px] mt-4">
            <p>About</p>
            <p>Feature</p>
            <p>Pricing</p>
            <p>Blog</p>
          </div>
        </div>

        {/* Service Section */}
        <div>
          <h2 className="font-bold">Service place</h2>
          <div className="leading-6 text-[12px] mt-4">
            <p>SEO tools</p>
            <p>Marketplace</p>
            <p>Google Analytics</p>
          </div>
        </div>
          <div className="bg-gradient-to-r from-lime-300 via-lime-700 to-lime-100 size-30 rounded-full blur-2xl opacity-80 absolute left-0 -translate-x-1/2"/>
          <div className="bg-gradient-to-r from-lime-300 via-lime-700 to-lime-100 size-30 rounded-full blur-2xl opacity-80 absolute right-0 translate-x-1/2"/>

        {/* Help Section */}
        <div>
          <h2 className="font-bold">Help center</h2>
          <div className="leading-6 text-[12px] mt-4">
            <p>Community</p>
            <p>Support</p>
            <p>Contact</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Footer;
