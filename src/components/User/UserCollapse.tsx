import UserRepo from './UserRepo';

const UserCollapse = () => {
  return (
    <div className="collapse collapse-arrow mb-2">
      <input type="checkbox" className="peer" />
      <div className="collapse-title bg-slate-200 text-black">Example User</div>
      <div className="collapse-content text-black ml-3 mt-2 pr-0">
        <UserRepo />
      </div>
    </div>
  );
};

export default UserCollapse;
