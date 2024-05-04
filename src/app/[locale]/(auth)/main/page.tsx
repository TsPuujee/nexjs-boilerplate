import { getTranslations } from 'next-intl/server';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

import { Hello } from '@/components/Hello';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'MainLayout',
  });

  return {
    title: t('meta_title'),
  };
}

export default function Dashboard() {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }
  return (
    <div className="[&_p]:my-6">
      <Hello />
    </div>
  );
}