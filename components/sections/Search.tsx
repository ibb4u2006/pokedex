import { ChangeEvent } from 'react';
import Container from '../common/Container';
import Input from '../common/Input';

type SearchProps = {
  onStringChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Search: React.FC<SearchProps> = ({ onStringChange }) => {
  return (
    <Container className="text-center">
      <div className="h-36" />
      <Input placeholder="Zadejte jméno Pokémono" onChange={onStringChange} />
      <div className="h-24" />
    </Container>
  );
};

export default Search;
