'use client';

import React, {FC, ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';

interface ProviderProps {
    children: ReactNode
}

const Provider: FC<ProviderProps> = ({children}) => {
  return (
    <div>
      return <SessionProvider>{children}</SessionProvider>
    </div>
  )
}

export default Provider
