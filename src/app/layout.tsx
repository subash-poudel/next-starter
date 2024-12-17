'use client';

import { ReactNode } from 'react';

import './globals.css';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/ui/app-sidebar';

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <SidebarProvider>
          <AppSidebar />
          <main>
            <SidebarTrigger
              onClick={() => {
                console.log('clicked');
              }}
              title="testing"
            />
            {children}
          </main>
        </SidebarProvider>
      </body>
    </html>
  );
}
