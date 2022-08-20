import Dropdown from "../components/Searching/Dropdown.js";
import Table from "../components/Searching/evidencetable.js";
import tablecolumns from "../components/Searching/tablecolumns.js";
import Styles from "../components/Searching/tablestyle.js";
import articles from "../dummydata/articles.js";

const SEPractice = () => {
    return (
      <div>
        <h2>Select SE Practice to get evidence for the claimed benefits</h2>
        <Dropdown />
               <Styles>
                 <Table
                  data={articles}
                  columns={tablecolumns}
                 />
              </Styles>
      </div>
    );
}
 
export default SEPractice;  
