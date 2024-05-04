import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon
} from "@heroicons/react/24/solid";
import Benefits from "@/components/Index/benefits";
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
    openGraph: {
      title: t('meta_title'),
      description: t('meta_description')
    },
  };
}

export default function Index() {
  const t = useTranslations('Index');
  const benefitOne = {
    title: t('highlight_your_benefits'),
    desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
    image: '/benefit-one.png',
    bullets: [
      {
        title: "Understand your customers",
        desc: "Then explain the first point breifly in one or two lines.",
        icon: <FaceSmileIcon />,
      },
      {
        title: "Improve acquisition",
        desc: "Here you can add the next benefit point.",
        icon: <ChartBarSquareIcon />,
      },
      {
        title: "Drive customer retention",
        desc: "This will be your last bullet point in this section.",
        icon: <CursorArrowRaysIcon />,
      },
    ],
  };
  return (
    <>
      <Benefits data={benefitOne}>
      </Benefits>
    </>
  );
}
