import { User } from './user.types';
import { Repository } from './repo.types';

export interface GithubContextValue {
  query: string;
  users: User[];
  repositories: Repository[];
  searchUsers: (query: string) => Promise<void>;
}
