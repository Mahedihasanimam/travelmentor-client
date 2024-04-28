import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authprovidfer/AuthProvider";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
const MyList = () => {
  const { user } = useContext(AuthContext);

  const [myList, setMylist] = useState([]);
  //   const {name, location, photo, details,email,userName,country,travelTime,cost,seasonality,totaVisitorsPerYear}

  useEffect(() => {
    fetch(`http://localhost:5000/addtourists/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMylist(data);
        console.log(data);
      });
  }, [user?.email]);
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="font-bold text-lg">
              <th>photo</th>
              <th>soprt Name</th>
              <th>country_Name</th>
              <th>average_cost</th>
              <th>Location</th>
              <th>User Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {myList.map((item) => (
              <tr key={item._id} className="odd:bg-gray-200">
                <td>
                  <img
                    className="mask rounded-md mask-half-2 w-12 h-12"
                    src={item.photo}
                    alt=""
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.country}</td>
                <td>{item.cost}</td>

                <td>{item.location}</td>

                <td>{item.email}</td>
                <td>
                  {" "}
                  <th>
                    <button className="btn bg-green-600 hover:bg-green-600 text-white font-bold"><MdModeEdit size={25}/> </button>
                  </th>
                  <th>
                  <button  className="btn bg-yellow-500 hover:bg-yellow-300 text-white font-bold"><MdDelete size={25}/> </button>
                  </th>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyList;
