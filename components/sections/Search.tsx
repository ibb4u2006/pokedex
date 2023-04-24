import { ChangeEvent } from 'react';
import Container from '../common/Container';
import Input from '../common/Input';

type SearchProps = {
  searchValue: string;
  onStringChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onCancelClick: () => void;
};

const Search: React.FC<SearchProps> = ({
  searchValue,
  onStringChange,
  onCancelClick,
}) => {
  return (
    <Container className="text-center">
      <div className="h-36" />
      <Input
        value={searchValue}
        placeholder="Search pokemon by name"
        onChange={onStringChange}
        onCancelClick={onCancelClick}
      />
      <div className="h-24" />
    </Container>
  );
};

export default Search;
