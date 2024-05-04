import { currentUser } from '@clerk/nextjs';
import { getTranslations } from 'next-intl/server';

const Hello = async () => {
  const t = await getTranslations('WellcomeComponent');
  const user = await currentUser();
  return (
    <p>
      👋 {t('hello_message')} {user?.firstName}
    </p>
  );
};

export { Hello };
