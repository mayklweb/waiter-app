import { useQuery } from "react-query";
import { getTable } from "../api/apiServices";

export default function TableSelection() {

  const { data: tables, isError, error, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getTable,
  });

  if (isLoading) return 'Loading'

  if (isError) {
    console.error(error?.message);
    return <div>Error loading categories.</div>;
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold mb-4">Select a Table:</h2>
      <div className="grid grid-cols-2 gap-4">
        {tables.map((table) => (
          <button
            key={table}
            onClick={() => onSelect(table)}
            className="text-lg py-3"
          >
            {table}
          </button>
        ))}
      </div>
      <button onClick={onBack} variant="outline" className="mt-4">
        Back to Room Selection
      </button>
    </div>
  );
}
