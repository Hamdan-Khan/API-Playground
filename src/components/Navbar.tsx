const Navbar = () => {
  return (
    <nav className="p-4 bg-white border-b items-center justify-between border-zinc-300 gap-3 sm:gap-0 flex flex-col sm:flex-row">
      <div className="flex flex-row items-center">
        <a href="/">
          <h1 className="text-2xl font-semibold">API Playground</h1>
        </a>
        <span className="text-2xl font-extralight mx-3"> | </span>
        <h2 className="font-light">Utility for exploring APIs</h2>
      </div>
      <div className="flex flex-row items-center px-2 gap-4">
        <a
          href="https://hamdan-khan.github.io/"
          target="_blank"
          className="hover:underline underline-offset-1"
        >
          View More
        </a>
        <a
          href="https://github.com/Hamdan-Khan"
          target="_blank"
          className="hover:underline underline-offset-1"
        >
          Github
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
