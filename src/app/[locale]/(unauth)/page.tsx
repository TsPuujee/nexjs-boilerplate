import BeefAndLamb from "@/components/Index/beefAndLamb";
import BodyHeader from "@/components/Index/bodyHeader";
import CardList from "@/components/Index/cardList";
import Category from "@/components/Index/category";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: "Index",
  });

  return {
    title: t("meta_title"),
    description: t("meta_description"),
    openGraph: {
      title: t("meta_title"),
      description: t("meta_description"),
    },
  };
}

const items = [
  {
    name: "Item 1",
    price: 1234,
    desc: "aaaaaaaaaa aaa aa aaa ",
    image: "/images/mainBgImage.png",
  },
  {
    name: "Item 2",
    price: 1234,
    desc: "asde qwewqeqwle qwe qwkekqwejwqke",
    image: "/images/mainBgImage.png",
  },
  {
    name: "Item 3",
    price: 1234,
    desc: "aaaaaaaaaa aaa aa aaa aaaaaaaaaa aaa aa aaa aaaaaaaaaa aaa aa aaa",
    image: "/images/mainBgImage.png",
  },
  {
    name: "Item 3",
    price: 1234,
    desc: "aaaaaaaaaa aaa aa aaa aaaaaaaaaa aaa aa aaa aaaaaaaaaa aaa aa aaa",
    image: "/images/mainBgImage.png",
  },
  {
    name: "Item 3",
    price: 1234,
    desc: "aaaaaaaaaa aaa aa aaa aaaaaaaaaa aaa aa aaa aaaaaaaaaa aaa aa aaa",
    image: "/images/mainBgImage.png",
  },
];
export default function Index() {
  return (
    <>
      <BodyHeader />
      <Category />
      <CardList items={items} />
      <BeefAndLamb items={items} />
    </>
  );
}
