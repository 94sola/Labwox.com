function Wrapper({ children, className }) {
  return (
    <section className={`w-full px-4 lg:px-80 ${className}`}>
      {children}
    </section>
  );
}
export default Wrapper;

