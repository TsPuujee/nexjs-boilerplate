import Link from 'next/link';
import { useTranslations } from 'next-intl';

import LocaleSwitcher from '@/components/LocaleSwitcher';
import { LogOutButton } from '@/components/LogOutButton';
import { BaseTemplate } from '@/templates/auth';

export default function MainLayout(props: { children: React.ReactNode }) {
  const t = useTranslations('MainLayout');

  return (
    <BaseTemplate
      leftNav={
        <>
          <li>
            <Link
              href="/main/"
              className="border-none text-gray-700 hover:text-gray-900"
            >
              {t('main_link')}
            </Link>
          </li>
          <li>
            <Link
              href="/main/profile/"
              className="border-none text-gray-700 hover:text-gray-900"
            >
              {t('user_profile_link')}
            </Link>
          </li>
        </>
      }
      rightNav={
        <>
          <li>
            <LogOutButton />
          </li>

          <li>
            <LocaleSwitcher />
          </li>
        </>
      }
    >
      {props.children}
    </BaseTemplate>
  );
}
