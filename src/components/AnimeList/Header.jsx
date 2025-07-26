import Link from 'next/link';

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="p-4 text-3xl font-bold">
        <p>{title}</p>
      </div>
      {linkHref && linkTitle ? (
        <Link href={linkHref}>
          <p className="hover:text-accent md:text-xl text-sm transition-all">{linkTitle}</p>
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
