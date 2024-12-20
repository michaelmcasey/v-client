import { useEffect, useState } from 'react';
import { User, signOut as firebaseSignOut } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

export function useAuth() {
  const [user, loading, error] = useAuthState(auth);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdminStatus = async () => {
      if (user) {
        const token = await user.getIdTokenResult();
        setIsAdmin(!!token.claims.admin);
      }
    };

    checkAdminStatus();
  }, [user]);

  const signOut = () => firebaseSignOut(auth);

  return {
    user,
    loading,
    error,
    isAdmin,
    isAuthenticated: !!user,
    signOut,
  };
}

export type AuthUser = User;
