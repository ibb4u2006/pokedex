import PokemonCard from '../cards/PokemonCard';
import Container from '../common/Container';

type PokemonListProps = NonNullable<unknown>;

const PokemonList: React.FC<PokemonListProps> = ({}) => {
  return (
    <Container>
      <h2 className="mb-12 text-lg lg:text-2xl">Prehled Pokémonu</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
      </div>
    </Container>
  );
};

export default PokemonList;
