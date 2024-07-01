import axios from "axios";
import React, { useEffect } from "react";
import { set } from "react-hook-form";

function ShowData({ data }) {
  const [contact, setContact] = React.useState([]);
  const [company, setCompany] = React.useState([]);
  const [notValid, setNotValid] = React.useState([]);

  useEffect(() => {
    setContact(() => []);
    setCompany(() => []);
    setNotValid(() => []);

    const industryType = [
      "Technology",
      "Finance",
      "Healthcare",
      "Retail",
      "Other",
    ];
    const contactType = ["Primary", "Secondary", "Other"];

    for (const row of data) {
      if (
        row.hasOwnProperty("Name") &&
        row.hasOwnProperty("Industry") &&
        industryType.includes(row["Industry"])
      ) {
        setCompany((company) => [...company, row]);
      } else if (
        row.hasOwnProperty("Name") &&
        row.hasOwnProperty("Company") &&
        row.hasOwnProperty("Email") &&
        row.hasOwnProperty("Contact Type") &&
        contactType.includes(row["Contact Type"])
      ) {
        setContact((contact) => [...contact, row]);
      } else {
        setNotValid((notValid) => [...notValid, row]);
      }
    }
  }, [data]);

  const uploadData = async (e) => {
    e.preventDefault();

    // call the backend url to upload the data
    if (company.length > 0) {
      await axios.post("http://localhost:8080/api/company", {
        company: company,
      });
    }

    if (contact.length > 0) {
      await axios.post("http://localhost:8080/api/contact", {
        contact: contact,
      });
    }
  };

  return (
    <div>
      <div className="flex gap-3 flex-col">
        {company.length > 0 && (
          <div className="">
            <h1 className="text-2xl font-bold">Company</h1>
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Address </th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Website </th>
                  <th>Number of Employees</th>
                  <th>Founded Date</th>
                  <th>Industry Type </th>
                </tr>
              </thead>
              <tbody>
                {company.map((row, index) => (
                  <tr key={index}>
                    <td>{row["Name"] || ""}</td>
                    <td>{row["Address"] || ""}</td>
                    <td>{row["Phone"] || ""}</td>
                    <td>{row["Email"] || ""}</td>
                    <td>{row["Website"] || ""}</td>
                    <td>{row["Number of Employees"] || ""}</td>
                    <td>{row["Founded Date"] || ""}</td>
                    <td>{row["Industry"] || ""}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {contact.length > 0 && (
          <div className="">
            <h1 className="text-2xl font-bold">Contact</h1>
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Date of Birth</th>
                  <th>Contact Type</th>
                </tr>
              </thead>
              <tbody>
                {contact.map((row, index) => (
                  <tr key={index}>
                    <td>{row["Name"] || ""}</td>
                    <td>{row["Email"] || ""}</td>
                    <td>{row["Phone"] || ""}</td>
                    <td>{row["Date of Birth"] || ""}</td>
                    <td>{row["Contact Type"] || ""}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* <div className="w-1/3">
          <h1 className="text-2xl font-bold">Not Valid</h1>
          <table className="table w-full">
            <thead>
              <tr>
                <th>Email</th>
                <th>Contact Type</th>
              </tr>
            </thead>
            <tbody>
              {contact.map((row, index) => (
                <tr key={index}>
                  <td>{row["email"]}</td>
                  <td>{row["Contact Type"]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}
      </div>

      {/* Form for submitting the data */}
      {data.length > 0 && (
        <form
          className="flex flex-col gap-3 items-center justify-center"
          onSubmit={uploadData}
          action=""
        >
          <div className=" text-red-800 block">
            Check The above data once before submitting
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default ShowData;
