

const AddTourist = () => {
    return (
        <div>
        <section className="p-6 bg-gradient bg-cover  dark:text-gray-900 text-start">
          <form
            
            className="container flex flex-col mx-auto space-y-12"
          >
            <fieldset className=" gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
              <div className="space-y-2 col-span-full lg:col-span-1">
                <p className=" text-white text-4xl font-bold p-6 text-center">Add Tourists Spot</p>
              
              </div>
              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="firstname" className="text-sm text-white">
                    First name
  
                  </label>
                  <input
                    id="firstname"
                    type="text"
                    name="name"
                    placeholder="enter coffee name"
                    className="w-full  p-2 rounded-sm focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="lastname" className="text-sm text-white">
                    chef
                  </label>
                  <input
                    id="lastname"
                    type="text"
                    name="chef"
                    placeholder="enter coffee chef"
                    className="w-full p-2 rounded-sm focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="email" className="text-sm text-white">
                    supplyer
                  </label>
                  <input
                    id="email"
                    type="text"
                    placeholder="supplyer name"
                    name="supplyer"
                    className="w-full p-2 rounded-sm focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="email" className="text-sm text-white">
                    taste 
                  </label>
                  <input
                    id="taste"
                    type="text"
                    placeholder="taste"
                    name="taste"
                    className="w-full p-2 rounded-sm focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="city" className="text-sm text-white">
                    Details
                  </label>
                  <input
                    id="Details"
                    type="text"
                    name="details"
                    placeholder="Details"
                    className="w-full p-2 rounded-sm focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="city" className="text-sm text-white">
                    category
                  </label>
                  <input
                    id="category"
                    type="text"
                    name="category"
                    placeholder="category"
                    className="w-full p-2 rounded-sm focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                <div className="col-span-full">
                  <label htmlFor="address" className="text-sm text-white">
                   photo
                  </label>
                  <input
                    id="Photo"
                    type="text"
                    name="photo"
                    placeholder="Enter photo URL"
                    className="w-full p-2 rounded-sm focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
              
               
               
              </div>
            </fieldset>
            <input type="submit" value={'AddTourist '} className="btn w-full text-xl bg-[#305992] hover:bg-[#305992] border-none text-white font-bold"  />
          </form>
        </section>
      </div>
    );
};

export default AddTourist;