import Link from 'next/link';
import InputSearch from './InputSearch';

const Navbar = () => {
  return (
    <header>
      <div className="flex justify-between  p-5 md:flex-row flex-col gap-3 bg-slate-800">
        <Link href="/" className="text-2xl font-bold text-white">
          CUYANIMELIST
        </Link>
        <InputSearch />
      </div>
    </header>
  );
};

export default Navbar;
