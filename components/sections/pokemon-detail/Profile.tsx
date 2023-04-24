import Stack from '../../common/Stack';

const Profile = () => {
  return (
    <Stack className=" max-w-40 col-span-3 gap-5">
      <Stack direction="horizontal" className="gap-10 items-center">
        <div className=" rounded-lg bg-red-100 px-5 py-2">
          <h3 className="text-2xl font-bold">Typ</h3>
        </div>
        <p className="text-xl">Ohen</p>
      </Stack>
      <Stack direction="horizontal" className="gap-10 items-center">
        <div className=" rounded-lg bg-red-100 px-5 py-2">
          <h3 className="text-2xl font-bold">Vystka</h3>
        </div>
        <p className="text-xl">0.6m</p>
      </Stack>
      <Stack direction="horizontal" className="gap-10 items-center">
        <div className=" rounded-lg bg-red-100 px-5 py-2">
          <h3 className="text-2xl font-bold">Vaha</h3>
        </div>
        <p className="text-xl">8.5kg</p>
      </Stack>
      <Stack
        direction="horizontal"
        className="gap-10 items-center flex-wrap gap-y-4"
      >
        <div className=" rounded-lg bg-red-100 px-5 py-2">
          <h3 className="text-2xl font-bold">Dovednosti</h3>
        </div>
        <p className="text-xl">Solarni energie plameny</p>
      </Stack>
    </Stack>
  );
};

export default Profile;
