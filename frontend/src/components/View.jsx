import axios from 'axios'
import React, { useEffect } from 'react'

function View() {
    const [company, setCompany] = React.useState([])
    const [contact, setContact] = React.useState([])



    useEffect(() => {

        const fetchData = async () => {
            const companyData = await axios.get('http://localhost:8080/api/company')
            const contactData = await axios.get('http://localhost:8080/api/contact')

            setCompany(companyData.data)
            setContact(contactData.data)
        }

        fetchData()
    }, []);
        

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
                    <td>{row["name"] || ""}</td>
                    <td>{row["address"] || ""}</td>
                    <td>{row["phone"] || ""}</td>
                    <td>{row["email"] || ""}</td>
                    <td>{row["website"] || ""}</td>
                    <td>{row["employees"] || ""}</td>
                    <td>{row["foundedDate"] || ""}</td>
                    <td>{row["industryType"] || ""}</td>
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
                  <th>Birth</th>
                  <th>ContactType</th>
                </tr>
              </thead>
              <tbody>
                {contact.map((row, index) => (
                  <tr key={index}>
                    <td>{row["name"] || ""}</td>
                    <td>{row["email"] || ""}</td>
                    <td>{row["phone"] || ""}</td>
                    <td>{row["birth"] || ""}</td>
                    <td>{row["contactType"] || ""}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        </div>
    </div>
  )
}

export default View