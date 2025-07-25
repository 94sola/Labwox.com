function Wrapper({ children, className }) {
  return (
    <section className={`max-w-[800px] lg:w-full w-[90%] mx-auto ${className}`}>
      {children}
    </section>
  );
}
export default Wrapper;

