function Wrapper({ children, className }) {
  return (
    <section className={`max-w-[1550px] lg:w-full w-[98%] mx-auto ${className}`}>
      {children}
    </section>
  );
}
export default Wrapper;

