import Link from 'next/link';
import InputSearch from './InputSearch';
import UserAction from './UserAction';

const Navbar = () => {
  return (
    <header>
      <div className="flex justify-between md:items-center  p-5 md:flex-row flex-col gap-3 bg-accent">
        <Link href="/" className="text-2xl font-bold text-white">
          CUYANIMELIST
        </Link>
        <InputSearch />
        <UserAction />
      </div>
    </header>
  );
};

export default Navbar;
