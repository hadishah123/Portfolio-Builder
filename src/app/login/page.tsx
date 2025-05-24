'use client';

import { signIn } from 'next-auth/react';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-sm w-full text-center">
        <h1 className="text-2xl font-bold mb-6">Log in to Portfolio Builder</h1>

        <div className="space-y-4">
          <Button
            className="w-full flex gap-2 items-center justify-center"
            onClick={() => signIn('github')}
          >
            <Github className="w-5 h-5" />
            Sign in with GitHub
          </Button>

          <Button
            className="w-full flex gap-2 items-center justify-center"
            onClick={() => signIn('google')}
          >
            <FcGoogle className="w-5 h-5" />
            Sign in with Google
          </Button>
        </div>
      </div>
    </div>
  );
}
