const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin mb-4"></div>
      <span className="text-blue-600 font-semibold text-lg">Завантаження...</span>
    </div>
  );
};

export default Loading;
