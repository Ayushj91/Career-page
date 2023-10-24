import React from 'react';

const ApplyPage = (props) => {
  return (
    <div className="container mx-auto">
    <div className="flex justify-center">
      <div className="w-full md:w-1/3">
        <form action="http://localhost:3000/sign_up" method="post" className="bg-white shadow-lg rounded p-4">
          <h1 className="text-2xl text-center font-bold mb-4">Apply Page</h1>
          <input type="text" name="name" id="name" placeholder="Name" required
            className="box mb-4 p-2 w-full border-b-2 border-gray-400" />
          <input type="email" name="email" id="email" placeholder="E-Mail" required
            className="box mb-4 p-2 w-full border-b-2 border-gray-400" />
          <input type="password" name="password" id="password" placeholder="Password" required
            className="box mb-4 p-2 w-full border-b-2 border-gray-400" />
          <input type="text" name="phone" id="phone" placeholder="Phone Number" required
            className="box mb-6 p-2 w-full border-b-2 border-gray-400" />
          <input type="submit" id="submitDetails" name="submitDetails" value="Submit"
            className="p-4 bg-gray-500 text-white rounded-full w-full" />
        </form>
      </div>
    </div>
  </div>
  );
}

export default ApplyPage;
