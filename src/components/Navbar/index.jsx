import Link from 'next/link';
import InputSearch from './InputSearch';
import UserAction from './UserAction';

const Navbar = () => {
  return (
    <header className="bg-accent p-5">
      <div className="flex justify-between md:items-center md:flex-row flex-col gap-3 ">
        <Link href="/" className="text-2xl font-bold text-white">
          BERBER_ANIME
        </Link>
        <InputSearch />
        <UserAction />
      </div>
    </header>
  );
};

export default Navbar;
