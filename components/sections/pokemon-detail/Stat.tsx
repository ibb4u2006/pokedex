import { useMemo } from 'react';
import { useGetAllPokemonStats } from '../../../hooks/useStats';
import { Pokemon } from '../../../pages/pokemon';
import { mapEachProperties } from '../../../utils/data';
import { camelCaseWord } from '../../../utils/string';
import Loader from '../../common/Loader';
import Stack from '../../common/Stack';

type StatProps = {
  data: Pokemon;
};

const Stat: React.FC<StatProps> = ({ data }) => {
  const { data: pokemonStats, loading: isLoadingStats } =
    useGetAllPokemonStats();

  const pokemonStatList = pokemonStats?.pokemon_v2_stat;

  const statsData = useMemo(() => {
    const allPokemonStats = {} as { [key: string]: string };
    for (const stat of pokemonStatList) {
      allPokemonStats[stat.id] = stat.name;
    }

    const totalStatValue = data.stats.reduce((acc, stat) => {
      return acc + stat.value;
    }, 0);

    return data.stats.map((stat) => ({
      id: stat.id,
      name: camelCaseWord(mapEachProperties(stat.id, { ...allPokemonStats })),
      value: stat.value,
      percent: (stat.value / totalStatValue) * 100,
    }));
  }, [data.stats, pokemonStatList]);

  const isLoading = isLoadingStats;
  return (
    <Loader isLoading={isLoading}>
      <Stack className="col-span-3 gap-5">
        {statsData.map((stat) => {
          return (
            <Stack
              key={`stat-${stat.id}`}
              direction="horizontal"
              className="gap-5 items-center"
            >
              <h3 className="font-bold w-20">{stat.name}</h3>
              <div className="rounded-lg bg-red-100 h-12 w-full max-w-80">
                <div
                  className=" rounded-tl-lg rounded-bl-lg bg-red h-full flex items-center"
                  style={{ width: `${stat.percent}%` }}
                >
                  <p className="text-white ml-5">{stat.value}</p>
                </div>
              </div>
            </Stack>
          );
        })}
      </Stack>
    </Loader>
  );
};

export default Stat;
