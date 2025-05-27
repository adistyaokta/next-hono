import Login from '@/components/login';
import { Suspense } from 'react';

export default function SignInPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Login mode='signin' />
    </Suspense>
  );
}
