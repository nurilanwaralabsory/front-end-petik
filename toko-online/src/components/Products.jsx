const Products = (props) => {
  const { nama, harga, image } = props;
  return (
    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
      <img
        className="w-full h-auto rounded-t-xl"
        src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
        alt="Image Description"
      ></img>
      <div className="p-4 md:p-5">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white">
          {nama}
        </h3>
        <div className="flex flex-row justify-between mt-5">
          <p className="text-md font-medium m-0 text-gray-800 dark:text-white">
            Rp{" "}
            {harga.toLocaleString("id-ID", {
              styles: "currency",
              currency: "IDR",
            })}
          </p>
          <a
            className="py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 float-right"
            href="#"
          >
            Beli
          </a>
        </div>
      </div>
    </div>
  );
};

export default Products;
