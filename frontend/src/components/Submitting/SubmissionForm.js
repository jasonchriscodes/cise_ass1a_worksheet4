import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const SubmissionForm = () => {
  const { register, handleSubmit } = useForm();
  const [result, setResult] = useState("");
  const onSubmit = (data) => {
    setResult(JSON.stringify(data));

    console.log("DATA", data);

    axios.post("http://localhost:8082/api/articles/create", data, {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        "Access-Control-Allow-Origin": "*",
      }
    })
    .then((res) => {
      console.log(res.data);
    }).catch((error) => {
      console.log("ERROR", error);
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
    
      <input {...register("title")} placeholder="Title" />
      <p><input {...register("authors")} placeholder="Authors" /></p>
      <p><input {...register("source")} placeholder="Source" /></p> 
      <p><input {...register("pubyear")} placeholder="Publication Year" /></p>
      <p><input {...register("doi")} placeholder="DOI" /></p>
      <p><input {...register("claim_benefit")} placeholder="claim_benefit" /></p>
      <p><input {...register("level_of_evidence")} placeholder="level_of_evidence" /></p>
     
      <select {...register("sepractice")}>
        <option value="">Select SE practice...</option>
        <option value="TDD">TDD</option>
        <option value="Mob Programming">Mob Programmin</option>
      </select>

      <p>{result}</p>
      <input type="submit"/>
    </form>
  );
}
export default SubmissionForm;