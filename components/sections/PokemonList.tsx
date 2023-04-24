import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import { PER_PAGE } from '../../constants/queries';
import { ROUTES } from '../../constants/routes';
import { Pokemon } from '../../pages/pokemon';
import Button from '../buttons/Button';
import PokemonCard from '../cards/PokemonCard';
import Container from '../common/Container';
import Stack from '../common/Stack';

type PokemonListProps = {
  page: number;
  searchString: string;
  data: Pokemon[];
  onCancelSearch: () => void;
  onPageChange: (page: number) => void;
};

const PokemonList: React.FC<PokemonListProps> = ({
  page,
  searchString,
  data,
  onCancelSearch,
  onPageChange,
}) => {
  const { push } = useRouter();

  const isSearching = searchString !== '';

  const totalItem = data.length;
  const pageSize = PER_PAGE;
  const sliceStart = (page - 1) * pageSize;
  const sliceEnd = page * pageSize;
  const lastPage =
    totalItem % pageSize === 0
      ? totalItem / pageSize
      : Math.ceil(totalItem / pageSize);
  const isLastPage = page * pageSize > totalItem;

  const currentPageData = useMemo(() => {
    return data.slice(sliceStart, sliceEnd);
  }, [data, sliceEnd, sliceStart]);

  const handleNextClick = () => {
    if (!isLastPage) {
      onPageChange(page + 1);
    }
  };
  const handlePreviousClick = () => {
    if (page > 1) {
      onPageChange(page - 1);
    }
  };

  return (
    <Container>
      <Stack
        direction="horizontal"
        className="mb-12 justify-between items-center"
      >
        <h2 className="text-lg lg:text-2xl">
          {isSearching ? 'Pokemon Search result' : 'Pokemon List'}
        </h2>
        {isSearching && (
          <Stack
            direction="horizontal"
            className="cursor-pointer text-red items-center gap-2"
            onClick={onCancelSearch}
          >
            <XCircleIcon width={16} />
            <p className="text-sm">Cancel Search</p>
          </Stack>
        )}
      </Stack>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {currentPageData.map((pokemon) => {
          return (
            <PokemonCard
              key={pokemon.id}
              data={pokemon}
              onClick={() => push(`${ROUTES.pokemon}/${pokemon.name}`)}
              className="cursor-pointer text-grey-100"
            />
          );
        })}
      </div>
      <div className="h-20" />
      <Stack
        direction="horizontal"
        className="gap-3 items-center justify-center"
      >
        <Button onClick={handlePreviousClick} disabled={page <= 1}>
          <ChevronLeftIcon width={24} />
        </Button>
        <Button
          variant={page === 1 ? 'outline' : 'none'}
          isActive={page === 1}
          onClick={() => onPageChange(1)}
        >
          1
        </Button>
        {lastPage > 1 && (
          <Button
            variant={page === 2 ? 'outline' : 'none'}
            isActive={page === 2}
            onClick={() => onPageChange(2)}
          >
            2
          </Button>
        )}
        {lastPage > 3 && page > 3 ? (
          <>
            {lastPage > 4 && <p className="text-grey-300">...</p>}
            <Button
              variant="outline"
              isActive
              onClick={() => onPageChange(page)}
            >
              {page}
            </Button>
          </>
        ) : (
          lastPage > 2 && (
            <Button
              variant={page === 3 ? 'outline' : 'none'}
              isActive={page === 3}
              onClick={() => onPageChange(3)}
            >
              3
            </Button>
          )
        )}
        {!isLastPage && lastPage > 3 && (
          <>
            {lastPage > 4 && page < lastPage - 1 && (
              <p className="text-grey-300">...</p>
            )}
            <Button
              variant={isLastPage ? 'outline' : 'none'}
              isActive={isLastPage}
              onClick={() => onPageChange(lastPage)}
            >
              {lastPage}
            </Button>
          </>
        )}
        <Button onClick={handleNextClick} disabled={isLastPage}>
          <ChevronRightIcon width={24} />
        </Button>
      </Stack>
    </Container>
  );
};

export default PokemonList;
