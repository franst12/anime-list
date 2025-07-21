import Image from 'next/image';
import Link from 'next/link';

const AnimeList = ({ title, images, id }) => {
  return (
    <Link href={`/${id}`} className="cursor-pointer">
      <Image src={images} alt="gambar" width={600} height={600} className="w-full max-h-80 object-cover" />
      <p className="font-bold p-4 md:text-xl text-md">{title}</p>
    </Link>
  );
};

export default AnimeList;
