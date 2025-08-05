import { authUsereSession } from '@/src/libs/auth-libs';
import Link from 'next/link';
import React from 'react';

const UserAction = async () => {
  const user = await authUsereSession();
  const userLabel = user ? 'Sign Out' : 'Sign In';
  const userUrl = user ? '/api/auth/signout' : '/api/auth/signin';

  return (
    <div className="flex gap-5 justify-between items-center">
      {user ? (
        <Link href={'/users/dashboard'} className="text-dark">
          Dashboard
        </Link>
      ) : null}

      <Link className="p-3 bg-dark rounded hover:text-accent" href={userUrl}>
        {userLabel}
      </Link>
    </div>
  );
};

export default UserAction;
