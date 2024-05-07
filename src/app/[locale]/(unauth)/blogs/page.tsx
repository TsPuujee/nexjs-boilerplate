import CardList from "@/components/Index/cardList";
import SectionTitle from "@/components/Index/sectionTitle";

export default function Blogs() {
  return (
    <>
      <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said">
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <CardList></CardList>
    </>
  );
}
