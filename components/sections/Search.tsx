import Container from '../common/Container';
import Input from '../common/Input';

type SearchProps = NonNullable<unknown>;

const Search: React.FC<SearchProps> = ({}) => {
  return (
    <Container className="text-center">
      <div className="h-36" />
      <Input placeholder="Zadejte jméno Pokémono" />
      <div className="h-24" />
    </Container>
  );
};

export default Search;
