const BaseTemplate = (props: {
  header: React.ReactNode;
  footer: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <>
      <header>{props.header}</header>
      <main className="md:mt-[113px]">{props.children}</main>
      <footer className="flex justify-center">{props?.footer}</footer>
    </>
  );
};

export { BaseTemplate };
