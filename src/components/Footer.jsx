import instagramLogo from "../assets/instagram.svg";
import linkedinLogo from "../assets/linkedin.svg";
import youtubeLogo from "../assets/youtube.svg";

function Footer() {
  return (
    <footer className="h-48 w-full border-t-2 border-ni-yellow flex flex-row justify-evenly items-center ">
      {/* LOGO START */}
      <div>logo Nimbus</div>
      {/* LOGO END */}
      {/* CONTACTS START */}
      <div className="flex flex-col justify-evenly items-center">
        <h6 className="mb-10 -mt-1 text-ni-yellow text-2xl">Contact Us</h6>
        <ul>
          <li>
            <a href="mailto:nimbusinsights@gmail.com?subject=Assunto do email&bcc=murillo@nimbusinsights.cloud, kim@nimbusinsights.cloud">
              <p className="text-ni-yellow text-xl underline">
                Send us an e-mail
              </p>
            </a>
          </li>
        </ul>
      </div>
      {/* CONTACTS END */}
      {/* SOCIAL MEDIA START */}
      <div className="flex flex-col justify-evenly items-center">
        <h6 className="mb-10 text-ni-yellow text-2xl">Social Medias</h6>
        <ul className="flex flex-row">
          <li className="mx-3.5">
            <a href="https://www.linkedin/in/nimbusinsights" target="_blank">
              <img
                src={linkedinLogo}
                alt="Linkedin Logo, refers to linkedin page"
                className="transition-transform duration-500 ease-in-out transform hover:scale-125"
              />
            </a>
          </li>
          <li className="mx-3.5">
            <a href="https://www.instagram.com/nimbusinsights" target="_blank">
              <img
                src={instagramLogo}
                alt="Instagram Logo, refers to instagram page"
                className="transition-transform duration-500 ease-in-out transform hover:scale-125"
              />
            </a>
          </li>
          <li className="mx-3.5">
            <a href="https://www.youtube.com/@nimbusinsights" target="_blank">
              <img
                src={youtubeLogo}
                alt="Youtube Logo, refers to youtbe page"
                className="transition-transform duration-500 ease-in-out transform hover:scale-125"
              />
            </a>
          </li>
        </ul>
      </div>
      {/* SOCIAL MEDIA END */}
    </footer>
  );
}

export default Footer;
