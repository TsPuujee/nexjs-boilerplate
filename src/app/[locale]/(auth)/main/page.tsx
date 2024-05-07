import { getTranslations } from 'next-intl/server';

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
  return (
    <div className="[&_p]:my-6">
      <Hello />
    </div>
  );
}