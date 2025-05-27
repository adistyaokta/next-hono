import Login from '@/components/login';
import React, { Suspense } from 'react';

export default function SignUpPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Login mode='signup' />
    </Suspense>
  );
}
