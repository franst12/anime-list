import Link from 'next/link';

const Navbar = () => {
  return (
    <header>
      <div className="flex justify-between  p-5 md:flex-row flex-col gap-3 bg-slate-800">
        <Link href="/" className="text-2xl font-bold text-white">
          CUYANIMELIST
        </Link>
        <input type="text" placeholder="search anime..." className="bg-white w-75 md:w-100" />
      </div>
    </header>
  );
};

export default Navbar;
