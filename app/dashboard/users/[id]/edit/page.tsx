import Form from '@/app/ui/users/user-edit';
import Breadcrumbs from '@/app/ui/customers/breadcrumbs';
import { fetchUserById } from '@/app/lib/data';
import { notFound } from 'next/navigation';

import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Users | edit',
};

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;
    const [user] = await Promise.all([
      fetchUserById(id),
    ]);

    if (!user) {
        notFound();
      }
    
    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Users', href: '/dashboard/users' },
                    {
                        label: 'Edit Users',
                        href: `/dashboard/users/${id}/edit`,
                        active: true,
                    },
                ]}
            />
            <Form user={user} />
        </main>
    );
}