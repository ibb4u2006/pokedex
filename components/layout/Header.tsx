import Link from 'next/link';
import { useRouter } from 'next/router';
import { ROUTES } from '../../constants/routes';

const Header = () => {
  const { pathname } = useRouter();

  return (
    <div className="bg-red p-6 lg:py-10 lg:px-36 flex flex-wrap items-end justify-between text-white">
      <Link href={ROUTES.pokemon}>
        <h1 className=" text-2xl">Pokedex</h1>
      </Link>
      <ul className="flex flex-wrap items-end gap-6 text-base lg:text-xl">
        <Link href={ROUTES.onas}>
          <li className="flex flex-col items-center gap-2 lg:gap-5">
            {pathname === ROUTES.onas && (
              <span className="w-3/4 h-0.5 bg-grey-100" />
            )}
            O nás
          </li>
        </Link>
        <Link href={ROUTES.pokemon}>
          <li className="flex flex-col items-center gap-2 lg:gap-5">
            {pathname === ROUTES.pokemon && (
              <span className="w-3/4 h-0.5 bg-grey-100" />
            )}
            Pokémoni
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Header;
