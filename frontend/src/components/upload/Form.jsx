import React from "react";
import { useForm } from 'react-hook-form';
import * as XLSX from 'xlsx'; 
import ShowData from '../ShowData';

function Form() {

  const { register, handleSubmit, formState: { errors}} = useForm();
  const [data, setData] = React.useState([]);

  const validate = ({file}) => {
    console.log(file[0]);
    const reader = new FileReader();

    reader.onload = (event) => {
      const workbook = XLSX.read(event.target.result, { type: 'binary' });

      for (const sheetName of workbook.SheetNames) {
        const sheet = workbook.Sheets[sheetName];
        const sheetData = XLSX.utils.sheet_to_json(sheet);

        setData((data) => [...data, sheetData]);

      }
    };

    reader.readAsBinaryString(file[0]);
  }


  return (
    <div>
      <form onSubmit={handleSubmit(validate)} className=" flex gap-3 items-center justify-center"  action="">
        <input
          type="file"
          className="file-input file-input-bordered file-input-primary w-full max-w-xs"
          {...register("file", {
            required: "file is required",
        })}
        />
        <button type="submit" className="btn btn-primary">Check</button>
      </form>
      <div>
        <ShowData data={data} />
      </div>
    </div>
  );
}

export default Form;
