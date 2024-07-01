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
        console.log('contact', contact);
        console.log('company', company);
        console.log('notValid', notValid);
    }


  return (
    <div>
      <div className="flex gap-3 flex-col">
        {company.length > 0 && <div className="">
          <h1 className="text-2xl font-bold">Company</h1>
          <table className="table w-full">
            <thead>
              <tr>
                <th>Name</th>
                <th>Industry</th>
              </tr>
            </thead>
            <tbody>
              {company.map((row, index) => (
                <tr key={index}>
                  <td>{row["Name"]}</td>
                  <td>{row["Industry"]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>}

        {contact.length > 0 && <div className="">
          <h1 className="text-2xl font-bold">Contact</h1>
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
                  <td>{row["Email"]}</td>
                  <td>{row["Contact Type"]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>}

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
        <form className="flex gap-3 items-center justify-center" onSubmit={uploadData} action="">
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>

    </div>

  );
}

export default ShowData;
