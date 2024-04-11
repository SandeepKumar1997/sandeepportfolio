import { Link } from "react-router-dom";
import { socialLinks } from "../constants";

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        Have a project in mind? <br className="sm:block hidden" />
        Let's build something together!
      </p>

      <div className="flex justify-center items-center gap-4">
        {socialLinks.map((item) => (
          <Link to={item.link}>
            <img
              src={item.iconUrl}
              alt={item.name}
              className="w-[80%] h-[80%] object-contain"
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CTA;
