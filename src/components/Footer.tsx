interface FooterProps {
  languageChange: boolean;
}

const Footer: React.FC<FooterProps> = ({ languageChange }) => {
  return (
    <div className="bg-zinc-700">
      <h1 className="flex pt-5 mb-5 justify-center text-white text-2xl font-semibold">
        {languageChange
          ? "Quero fazer parte da sua empresa!"
          : "I want to be part of your company!"}
      </h1>
      <div className="items-center flex justify-center gap-10 text-5xl text-slate-100">
        <a className="mb-10" href="https://wa.me/5551981992067" target="_blank">
          <i className="bi bi-whatsapp hover:text-gray-300 transition-all" />
        </a>
        <a
          className="mb-10"
          href="https://www.linkedin.com/in/josu%C3%A9-m-silva-b0286a230/"
          target="_blank"
        >
          <i className="bi bi-linkedin hover:text-gray-300 transition-all" />
        </a>
        <a className="mb-10" href="mailto:josuemoutinhos@gmail.com">
          <i className="bi bi-envelope hover:text-gray-300 transition-all" />
        </a>
        <a className="mb-10" href="https://github.com/josuemsilva">
          <i className="bi bi-github hover:text-gray-300 transition-all" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
