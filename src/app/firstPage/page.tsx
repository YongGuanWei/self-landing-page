import { SampleDiv } from "./_components/sample";

export default function firstPage() {
  return (
    <div className="flex items-center gap-x-4">
      this is the template comit
      <button className="rounded-md bg-blue-300 px-4 py-2 hover:bg-blue-100">
        B1
      </button>
      <button className="rounded-md bg-blue-300 px-4 py-2 hover:bg-blue-100">
        B2
      </button>
      <button className="rounded-md bg-blue-300 px-4 py-2 hover:bg-blue-100">
        B3
      </button>
      <button className="rounded-md bg-blue-300 px-4 py-2 hover:bg-blue-100">
        B4
      </button>
      <button className="rounded-md bg-blue-300 px-4 py-2 hover:bg-blue-100">
        B5
      </button>
      <SampleDiv />
    </div>
  );
}
