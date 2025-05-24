'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/login'); // Redirect to login if not logged in
    }
  }, [status, router]);

  if (status === 'loading') return <p className="p-4">Loading...</p>;

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Welcome, {session?.user?.name}!</h1>
      <p className="mb-6">This is your dashboard. Soon you'll be able to add and manage case studies here.</p>

      {/* Placeholder for Case Study Form */}
      <div className="border p-4 rounded-xl bg-gray-50 text-gray-800">
        <p className="text-center">🛠️ Case Study Builder Coming Next...</p>
      </div>
    </div>
  );
}