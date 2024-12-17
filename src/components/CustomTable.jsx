/* eslint-disable react/prop-types */
import  { useState } from "react";

const CustomTable = ({ columns, data }) => {
  const pageSize = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / pageSize);

  const paginatedData = data.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <section className="w-full">
      <div className="flex flex-col">
        <div className="flex font-bold border-b border-gray-300">
          {columns.map((column) => (
            <div key={column.accessor || column.title} className="flex-1 p-2">
              {column.title}
            </div>
          ))}
        </div>
        {paginatedData.map((row, index) => (
          <div key={index} className="flex border-b border-gray-200 items-center">
            {columns.map((column) => (
              <div key={column.accessor || column.title} className="flex-1 p-2">
                {column.accessor === "status" ? (
                  <button
                    className={`px-4 py-2 rounded text-white ${
                      row.id > 4 ? "bg-green-500" : "bg-red-500"
                    }`}
                  >
                    {row.id > 4 ? "Active" : "Inactive"}
                  </button>
                ) : column.accessor ? (
                  row[column.accessor] || "N/A"
                ) : (
                  "N/A"
                )}
              </div>
            ))}
          </div>
        ))}

        <div className="flex justify-between items-center mt-4">
          <button
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <div className="flex gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                className={`px-4 py-2 rounded ${
                  currentPage === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200"
                }`}
                onClick={() => goToPage(i + 1)}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomTable;
