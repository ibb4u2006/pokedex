import Image from 'next/image';
import { HTMLAttributes } from 'react';
import { Pokemon } from '../../pages/pokemon';

interface PokemonCardProps extends HTMLAttributes<HTMLDivElement> {
  data: Pokemon;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ data, ...props }) => {
  const { id, name } = data;
  return (
    <div className="w-full text-white" {...props}>
      <div className="rounded-t-lg bg-white p-6 lg:p-10">
        <Image
          className="mx-auto"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
          alt={name}
          width={240}
          height={240}
        />
      </div>
      <div className="rounded-b-lg bg-red p-6">{name}</div>
    </div>
  );
};

export default PokemonCard;
