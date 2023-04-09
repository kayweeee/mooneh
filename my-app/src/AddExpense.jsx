import NavBar from "./Components/NavBar";

function AddExpense() {
  return (
    <div>
      <NavBar className="absolute z-10"/>
    <div className="z-20 flex items-center justify-center h-screen w-screen">
      <form className="w-2/5 bg-white rounded-lg items-center py-8">
        <div class="mb-5">
          <div class="flex justify-center">
            <input
              type="text"
              placeholder="Expense Name"
              class="px-5 w-5/6 border rounded py-2 text-gray-700 focus:outline-none items-center"
            />
          </div>
        </div>
        <div class="mb-5">
          <div class="flex justify-center">
            <input
              type="password"
              placeholder="$0.00"
              class="px-5 w-5/6 border rounded py-2 text-gray-700 focus:outline-none"
            />
          </div>
        </div>

        <div className="text-xs flex justify-center items-center mb-5">
          <p>paid by</p>
          <select className="p-2.5 mx-2 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
            <option>you</option>
            <option>Sam</option>
            <option>Clara</option>
            <option>Santa</option>
          </select>
          <p>split equally among</p>
          <select className="p-2.5 mx-2 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600">
            <option>everyone</option>
            <option>Sam</option>
            <option>Clara</option>
            <option>Santa</option>
          </select>
        </div>
        <div className="flex justify-center">
            <button className="bg-grey rounded-lg py-2 px-5">
                Get Moondust
            </button>
        </div>
      </form>
      </div>
    </div>
  );
}

export default AddExpense;
