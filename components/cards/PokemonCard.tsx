import { HTMLAttributes } from 'react';

type PokemonCardProps = HTMLAttributes<HTMLDivElement>;

const PokemonCard: React.FC<PokemonCardProps> = ({ ...props }) => {
  return (
    <div className="w-full text-white" {...props}>
      <div className="rounded-t-lg bg-white p-6 lg:p-10"></div>
      <div className="rounded-b-lg bg-red p-6">Bulbasaur</div>
    </div>
  );
};

export default PokemonCard;
