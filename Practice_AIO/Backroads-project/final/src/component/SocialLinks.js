import { socialLinks } from '../data';

const SocialLinks = () => {
  return (
    <ul className="nav-icons" id="nav-icons">
      {socialLinks.map((link) => (
        <li key={link.id}>
          <a href={link.href} id={link.id} className="nav-icon">
            <i className={link.icon}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};
export default SocialLinks;
