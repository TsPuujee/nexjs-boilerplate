import Link from 'next/link';
import Image from 'next/image'
import { useTranslations } from 'next-intl';
import { AppConfig } from '@/utils/AppConfig';
import LocaleSwitcher from '@/components/LocaleSwitcher';
import { BaseTemplate } from '@/templates/noAuth';

export default function Layout(props: { children: React.ReactNode }) {
  const t = useTranslations('RootLayout');

  return (
  <BaseTemplate
    leftNav={
    <>
      <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <Image
        src={'/logo.png'}
        alt="LogoSvg"
        width={50}
        height={50}
        />
        <span className="self-center text-2xl font-semibold whitespace-nowrap">{AppConfig.name}</span>
      </Link>
    </>
    }
    rightNav={
    <>
      <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
      <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
          <li>
            <Link href="/news" className="block py-2 px-3  bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">
              {t('news_link')}
            </Link>
          </li>
          <li>
            <Link href="/rider" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark: md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover: md:dark:hover:bg-transparent">
              {t('rider_link')}
            </Link>
          </li>
          <li>
            <Link href="/rest" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark: md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover: md:dark:hover:bg-transparent">
              {t('rest_link')}
            </Link>
          </li>
          <li>
            <Link href="/family" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark: md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover: md:dark:hover:bg-transparent">
              {t('family_link')}
            </Link>
          </li>
          <li>
            <Link href="/api" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark: md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover: md:dark:hover:bg-transparent">
              {t('api_link')}
            </Link>
          </li>
          <li>
            <LocaleSwitcher/>
          </li>
        </ul>
        </div>
    </>
    }
  >
    <div className="py-5 text-xl [&_p]:my-6">{props.children}</div>
  </BaseTemplate>
  );
}
