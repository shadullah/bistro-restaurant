import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Users = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      //   console.log(users);
      //   console.log(res.data);

      return res.data;
    },
  });
  console.log(users);
  let userRow;
  if (users && users?.length) {
    userRow = users?.map((user) => (
      <tr key={user?._id}>
        <th className="py-2 px-4 border-b text-left bg-gray-200">
          {user?.rank}
        </th>
        <th className="py-2 px-4 border-b text-left bg-gray-200">
          {user?.name}
        </th>
        <th className="py-2 px-4 border-b text-left bg-gray-200">
          {user?.email}
        </th>
        <th className="py-2 px-4 border-b text-left bg-gray-200">
          {user?.mobile}
        </th>
        <th className="py-2 px-4 border-b text-left bg-gray-200">
          {user?.cadetship_year}
        </th>
        <th className="py-2 px-4 border-b text-left bg-gray-200">
          {user?.cadet_no}
        </th>
      </tr>
    ));
  }
  return (
    <div>
      <h1 className="text-4xl font-bold text-center my-5">All Users</h1>
      <p className="m-3">Total Users: {users.length} </p>
      <div className="m-12 w-full">
        <table className="w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b text-left bg-gray-200">Rank</th>
              <th className="py-2 px-4 border-b text-left bg-gray-200">Name</th>
              <th className="py-2 px-4 border-b text-left bg-gray-200">
                Email
              </th>
              <th className="py-2 px-4 border-b text-left bg-gray-200">
                Mobile
              </th>
              <th className="py-2 px-4 border-b text-left bg-gray-200">Date</th>
              <th className="py-2 px-4 border-b text-left bg-gray-200">
                cadet No
              </th>
            </tr>
          </thead>
          <tbody>
            {/* {users && users?.length } */}
            {userRow}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
