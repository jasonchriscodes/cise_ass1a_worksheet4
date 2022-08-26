import { useState } from "react";
import Dropdown from "../components/Articles/Dropdown.js";
import Table from "../components/Articles/evidencetable.js";
import tablecolumns from "../components/Articles/tablecolumns.js";
import Styles from "../components/Articles/tablestyle.js";
import articles from "../dummydata/articles.js";

const SEPractice = () => {
    const [valueDropdown, setValueDropdown] = useState('TDD')
    return (
      <div>
        <h2>Select SE Practice to get evidence for the claimed benefits</h2>
        <Dropdown value={valueDropdown} onChange={(e) => {
          setValueDropdown(e.target.value);
        }}/>
               <Styles>
                {valueDropdown === 'TDD' && (
                  <Table
                  data={articles}
                  columns={tablecolumns}
                 />
                )}
              </Styles>
      </div>
    );
}
 
export default SEPractice;