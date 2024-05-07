import { getTranslations } from 'next-intl/server';

const Hello = async () => {
  const t = await getTranslations('WellcomeComponent');
  // const user = await currentUser();
  return (
    <p>
      👋 {t('hello_message')} toomoo
    </p>
  );
};

export { Hello };
