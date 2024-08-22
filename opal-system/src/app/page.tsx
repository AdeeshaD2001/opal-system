export default function SearchPage() {

  return (
    <div>
      <div className='flex flex-row justify-between p-10 border border-black m-10 rounded'>
        <div className="flex flex-col">
          <label htmlFor="check-in">Check-In</label>
          <input type="date" id='check-in' />
        </div>
        <div className="flex flex-col">
          <label htmlFor="check-out">Check-Out</label>
          <input type="date" id='check-out' />
        </div>
        <div className="align-middle">Guest Count</div>
        <button>Search</button>
      </div>
      <div className="p-10">
        <div className="flex mt-10 mb-10">
          <div className="border border-black w-40 h-40 mr-10"></div>
          <div className="flex flex-col justify-between">
            <h1>Hotel 1</h1>
            <p>description</p>
            <h1>$100</h1>
          </div>
        </div>
        <div className=" flex mt-10 mb-10">
          <div className="border border-black w-40 h-40 mr-10"></div>
          <div className="flex flex-col justify-between">
            <h1>Hotel 1</h1>
            <p>description</p>
            <h1>$100</h1>
          </div>
        </div>
      </div>
    </div>

  )
}