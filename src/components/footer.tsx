const Footer = () => {
  return (
    <footer className="flex h-16 shrink-0 items-center justify-center border-t border-white/10 bg-[#1a1f3a] text-sm text-gray-400">
      <p>
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;