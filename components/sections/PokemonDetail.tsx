import classNames from 'classnames';
import Link from 'next/link';
import { useState } from 'react';
import { ROUTES } from '../../constants/routes';
import Container from '../common/Container';
import Profile from './pokemon-detail/Profile';
import Stat from './pokemon-detail/Stat';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { Pokemon } from '../../pages/pokemon';
import Image from 'next/image';
import { camelCaseWord } from '../../utils/string';

enum ActiveDetail {
  profile = 'Profile',
  stat = 'Statistics',
}
type PokemonDetailProps = { data: Pokemon };

const PokemonDetail: React.FC<PokemonDetailProps> = ({ data }) => {
  const [activeDetal, setActiveDetail] = useState(ActiveDetail.profile);
  const isProfile = activeDetal === ActiveDetail.profile;
  const isStat = activeDetal === ActiveDetail.stat;
  return (
    <Container>
      <div className="h-10" />
      <Link href={ROUTES.pokemon} className="block w-fit">
        <h2 className="mb-12 text-lg lg:text-xl flex gap-10">
          <ChevronLeftIcon width={24} />
          Zapet na prehled
        </h2>
      </Link>
      <div className="flex gap-0 sm:gap-5 justify-center text-red items-end">
        <div
          className={classNames(
            'py-3 px-7 md:px-16 bg-white rounded-t-lg cursor-pointer',
            {
              'py-4 font-bold': isProfile,
            },
            { 'opacity-50': !isProfile }
          )}
          onClick={() => setActiveDetail(ActiveDetail.profile)}
        >
          Profile
        </div>
        <div
          className={classNames(
            'py-3 px-7 md:px-16 bg-white rounded-t-lg cursor-pointer',
            { 'py-4 font-bold': isStat },
            { 'opacity-50': !isStat }
          )}
          onClick={() => setActiveDetail(ActiveDetail.stat)}
        >
          Statistiky
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-16 bg-white p-6">
        <div className="col-span-2 p-3 lg:p-10 border-2 border-grey-500 rounded-lg">
          <h1 className="text-center text-red text-lg md:text-2xl font-bold">
            {camelCaseWord(data.name)}
          </h1>
          <Image
            className="mx-auto"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`}
            alt={data.name}
            width={240}
            height={240}
            priority
          />
        </div>
        {isProfile && <Profile data={data} />}
        {isStat && <Stat data={data} />}
      </div>
    </Container>
  );
};

export default PokemonDetail;
