const UserRepo = () => {
  return (
    <div className="p-2 mb-2 bg-slate-300">
      <div className="flex justify-between">
        <h2 className="font-bold">Repository Title</h2>
        <div className="flex font-bold">
          <p className="mr-2">12</p>
          <img src="./star.png" alt="icon star" width={16} height={20} />
        </div>
      </div>
      <p>Repository Description</p>
    </div>
  );
};

export default UserRepo;
