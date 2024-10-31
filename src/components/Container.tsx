import Header from "./Header";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-start">
      <Header />
      <main className="w-screen flex flex-col items-center justify-start mx-auto px-6 sm:px-20 gap-4 mt-4">
        {children}
      </main>
    </div>
  );
};

export default Container;
