import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';
import { PER_PAGE } from '../../constants/queries';
import { ROUTES } from '../../constants/routes';
import { Pokemon } from '../../pages/pokemon';
import Button from '../buttons/Button';
import PokemonCard from '../cards/PokemonCard';
import Container from '../common/Container';
import Stack from '../common/Stack';

type PokemonListProps = {
  data: Pokemon[];
};

const PokemonList: React.FC<PokemonListProps> = ({ data }) => {
  const { push } = useRouter();
  const [page, setPage] = useState(1);

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
      setPage(page + 1);
    }
  };
  const handlePreviousClick = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <Container>
      <h2 className="mb-12 text-lg lg:text-2xl">Pokemon List</h2>
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
          onClick={() => setPage(1)}
        >
          1
        </Button>
        <Button
          variant={page === 2 ? 'outline' : 'none'}
          isActive={page === 2}
          onClick={() => setPage(2)}
        >
          2
        </Button>
        {page > 3 && !isLastPage ? (
          <>
            <p className="text-grey-300">...</p>
            <Button variant="outline" isActive onClick={() => setPage(page)}>
              {page}
            </Button>
          </>
        ) : (
          <Button
            variant={page === 3 ? 'outline' : 'none'}
            isActive={page === 3}
            onClick={() => setPage(3)}
          >
            3
          </Button>
        )}
        <p className="text-grey-300">...</p>
        <Button
          variant={isLastPage ? 'outline' : 'none'}
          isActive={isLastPage}
          onClick={() => setPage(lastPage)}
        >
          {lastPage}
        </Button>
        <Button onClick={handleNextClick} disabled={isLastPage}>
          <ChevronRightIcon width={24} />
        </Button>
      </Stack>
    </Container>
  );
};

export default PokemonList;
