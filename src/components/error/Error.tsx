interface ErrorProps {
  message?: string;
}

const Error = ({ message }: ErrorProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div className="w-12 h-12 flex items-center justify-center mb-4">
        <span className="text-red-500 text-4xl">&#9888;</span>
      </div>
      <span className="text-red-600 font-semibold text-lg text-center">{message || "Виникла помилка. Спробуйте ще раз."}</span>
    </div>
  );
};

export default Error;
