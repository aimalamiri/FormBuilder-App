export default function create() {
  return (
    <div>
      <h1 className="text-3xl font-semibold">Create a new form</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5 gap-2">
        <div className="card">
          <h2 className="text-lg">Inputs</h2>
          <button className="btn btn-gray w-full mt-3">Input</button>
          <button className="btn btn-gray w-full mt-3">Checkbox</button>
          <button className="btn btn-gray w-full mt-3">Textarea</button>
          <button className="btn btn-gray w-full mt-3">Radio</button>
          <button className="btn btn-gray w-full mt-3">Select</button>
        </div>
        <div className="card col-span-2">
          <h1>View</h1>
        </div>
        <div className="card">
          <h1>Props</h1>
        </div>
      </div>
    </div>
  )
}
