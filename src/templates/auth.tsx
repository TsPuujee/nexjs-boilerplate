import { useTranslations } from 'next-intl';

import { AppConfig } from '@/utils/AppConfig';

const BaseTemplate = (props: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  const t = useTranslations('BaseTemplate');

  return (
    <div className="w-full px-1 text-gray-700 antialiased">
      <div className="">
        <header className="mx-auto max-w-screen-lg">
          <nav className="">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
              {props.leftNav}
              {props.rightNav}
            </div>
          </nav>
        </header>

        <main>{props.children}</main>

        <footer className="py-8 text-center text-sm">
          © Copyright {new Date().getFullYear()} {AppConfig.name}.
          {` ${t('made_with')} `}
          <a
            href="https://github.com/TsPuujee"
            target='_blank'
            className="text-blue-700 hover:border-b-2 hover:border-blue-700"
          >
            TsPuujee
          </a>
          .
        </footer>
      </div>
    </div>
  );
};

export { BaseTemplate };
