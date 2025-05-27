import SignOutButton from '@/components/logout';
import { auth } from '@/server/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  if (!session) {
    return <div>Not Authenticated</div>;
  }

  return (
    <div>
      <h1>Welcome {session.user.name}</h1>
      <SignOutButton />
    </div>
  );
}
