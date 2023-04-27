import { Repository } from '../../types/repo.types';

type UserRepoProps = {
  children: Repository;
};

const UserRepo = (props: UserRepoProps) => {
  return (
    <div className="p-2 mb-2 bg-slate-300">
      <div className="flex justify-between">
        <h2 className="font-bold">{props.children.name}</h2>
        <div className="flex font-bold">
          <p className="mr-2">{props.children.stargazers_count}</p>
          <img src="./star.png" alt="icon star" width={20} height={20} />
        </div>
      </div>
      <p>{props.children.description || '-'}</p>
    </div>
  );
};

export default UserRepo;
