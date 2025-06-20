
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-gray-900/80 to-gray-900/50 backdrop-blur-sm border-t border-gray-700/50 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center text-center md:text-left">
          <div className="mb-4 md:mb-0">
            <h3 className="font-montserrat font-bold text-xl text-portfolio-accent">
              Dominic Cleary Gomes
            </h3>
            <p className="text-portfolio-text/60 text-sm">
              Software Engineer • Building the future, one line at a time
            </p>
          </div>

          <div>
            <p className="text-portfolio-text/60 text-sm">
              © {currentYear} Dominic Cleary Gomes. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
