import { Pokemon } from '../../../pages/pokemon';
import { camelCaseWord } from '../../../utils/string';
import Stack from '../../common/Stack';

type ProfileProps = {
  data: Pokemon;
};

const Profile: React.FC<ProfileProps> = ({ data }) => {
  return (
    <Stack className=" max-w-40 col-span-3 gap-5">
      <Stack direction="horizontal" className="gap-10 items-center">
        <div className=" rounded-lg bg-red-100 px-5 py-2">
          <h3 className="font-bold">Type</h3>
        </div>
        <p>{data?.types?.map((type) => camelCaseWord(type)).join(', ')}</p>
      </Stack>
      <Stack direction="horizontal" className="gap-10 items-center">
        <div className=" rounded-lg bg-red-100 px-5 py-2">
          <h3 className="font-bold">Height</h3>
        </div>
        <p>{`${data.height}m`}</p>
      </Stack>
      <Stack direction="horizontal" className="gap-10 items-center">
        <div className=" rounded-lg bg-red-100 px-5 py-2">
          <h3 className="font-bold">Weight</h3>
        </div>
        <p>{`${data.weight}KG`}</p>
      </Stack>
      <Stack
        direction="horizontal"
        className="gap-10 items-center flex-wrap gap-y-4"
      >
        <div className=" rounded-lg bg-red-100 px-5 py-2">
          <h3 className="font-bold">Abilities</h3>
        </div>
        <p>
          {data.abilities?.map((ability) => camelCaseWord(ability)).join(', ')}
        </p>
      </Stack>
    </Stack>
  );
};

export default Profile;
