import { UserProfile } from '@clerk/nextjs';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'UserProfile',
  });

  return {
    title: t('meta_title'),
  };
}

const UserProfilePage = () => (
  <div className="flex min-h-screen items-center justify-center">
    <UserProfile />
  </div>
);

export default UserProfilePage;
