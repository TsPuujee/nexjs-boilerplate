'use client';
import Container from "./container";

const Video = () => {
  return (
    <Container>
      <div className="w-full max-w-4xl mx-auto overflow-hidden lg:mb-20 rounded-2xl ">
        <iframe width="966" height="543" src="https://www.youtube.com/embed/YQFxaYLGUpc" title="Бид ертөнцийг хэр сайн мэдэх вэ? | SciCon 2023" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true}></iframe>
      </div>
    </Container>
  );
}

export default Video;