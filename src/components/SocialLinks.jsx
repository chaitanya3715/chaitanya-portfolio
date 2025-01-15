import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { SiThreads } from "react-icons/si";
import { FaXTwitter } from 'react-icons/fa6'

export default function SocialLinks() {
  const socialLinks = [
    { icon: FaGithub, url: 'https://github.com/chaitanya3715', label: 'GitHub' },
    { icon: FaLinkedin, url: 'https://www.linkedin.com/in/chaitanya-meshram-6a1513261/', label: 'LinkedIn' },
   
    { icon: FaInstagram, url: 'https://www.instagram.com/chaitanyameshram_07/', label: 'Instagram' },
    {icon: FaXTwitter, url: 'https://x.com/CAMeshram_07', label: 'X' },
    { icon: SiThreads, url: 'https://www.threads.net/@chaitanyameshram_07', label: 'Threads' },
    { icon: FaEnvelope, url: 'mailto:chaitanyameshram07@gmail.com', label: 'Email' },
  ];

  return (
    <div className="flex space-x-4">
      {socialLinks.map(({ icon: Icon, url, label }) => (
        <a
          key={label}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200"
          aria-label={label}
        >
          <Icon className="w-6 h-6" />
        </a>
      ))}
    </div>
  );
}