import instagramLogo from "../assets/instagram.svg";
import linkedinLogo from "../assets/linkedin.svg";
import youtubeLogo from "../assets/youtube.svg";
import logoSidedTransparency from "../assets/nimbus-sided-logo-transparency.png";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-8 px-4 md:px-0">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* LOGO */}
          <div className="flex justify-center items-center mb-4 md:mb-0">
            <img
              src={logoSidedTransparency}
              alt="Nimbus Logo"
              className="h-20 md:h-24"
            />
          </div>
          {/* CONTACTS */}
          <div className="flex flex-col justify-center items-center mb-8 md:mb-0">
            <h6 className="mb-4 text-ni-white text-xl">Contact Us</h6>
            <ul className="text-center">
              <li className="mb-2">
                <a
                  href="mailto:nimbusinsights@gmail.com?subject=Assunto do email&bcc=murillo@nimbusinsights.cloud, kim@nimbusinsights.cloud"
                  className="text-gray-300 hover:text-ni-white transition-colors duration-300 und"
                >
                  Send us an e-mail
                </a>
              </li>
            </ul>
          </div>
          {/* SOCIAL MEDIA */}
          <div className="flex justify-center items-center">
            <ul className="flex flex-row space-x-4">
              <li>
                <a
                  href="https://www.linkedin.com/company/nimbusinsights"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-300 hover:scale-110"
                >
                  <img
                    src={linkedinLogo}
                    alt="Linkedin Logo"
                    className="h-8 md:h-10"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/nimbusinsights"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-300 hover:scale-110"
                >
                  <img
                    src={instagramLogo}
                    alt="Instagram Logo"
                    className="h-8 md:h-10"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/nimbusinsights"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-300 hover:scale-110"
                >
                  <img
                    src={youtubeLogo}
                    alt="Youtube Logo"
                    className="h-8 md:h-10"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-4">
          <p className="text-xs sm:text-sm md:text-xs lg:text-sm xl:text-xs">
            &copy; {new Date().getFullYear()} Nimbus Insights. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
