import { getServerSession } from 'next-auth';
import { authOptions } from '@/src/app/api/auth/[...nextauth]/route';

export const authUsereSession = async () => {
  const session = await getServerSession(authOptions);
  return session?.user;
};
