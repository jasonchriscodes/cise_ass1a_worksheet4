import axios from "axios";

/**
 * 1. Update variable articles into empty array
 * 2. Create function getData() to get data from mongoDB
 * 3. On getData() process, append data from mongoDB into array "articles"
 * 4. Call function getData()
 * 
 */

let articles = [];

function getData() {
  axios.get("http://localhost:8082/api/articles")
  .then((res) => {
    for (var i = 0; i < res.data.length; i++) {
      let data =  {
        id: res.data[i]._id,
        title: res.data[i].title || "",
        authors: res.data[i].authors || "",
        source: res.data[i].source || "" ,
        pubyear: res.data[i].pubyear || "",
        doi: res.data[i].doi || "",
        claim: res.data[i].claim || "", 
        evidence: res.data[i].evidence || "",
      }

      articles.push(data);
    }

    return articles;
  }).catch((error) => {
    return articles;
  })
}

getData();

export default articles;