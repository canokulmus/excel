import * as React from 'react';
import { Spreadsheet, SpreadsheetHandle, DocumentDescriptor } from '@progress/kendo-react-spreadsheet';
import {products} from './shared-sp-sheets';

const App = () => {
    const ref = React.useRef<SpreadsheetHandle>(null);
    
    
    const handleFileUpload = (event:any) => {
      const file = event?.target?.files[0];
      console.log(file)
      const spreadshet = ref.current;
      console.log('spreadshet', spreadshet)
      if (file) {
        if (spreadshet) {
          spreadshet?.fromFile(file);
        }
      }
    };
    
    const onSave = () => {
      const spreadshet = ref.current;
      console.log('spreadshet', spreadshet)
      if (spreadshet) {
        // console.log(spreadshet?.toJSON())
        spreadshet?.saveJSON()?.then((data) => {
          console.log(data)
        }
        
      )
    }
  }
  
  const onLoadJson = () => {
      const spreadshet = ref.current;
      console.log('spreadshet', spreadshet)
      console.log('json', products)
      if (spreadshet) {
        console.log(spreadshet)
        spreadshet?.fromJSON(products as DocumentDescriptor);
      }
    }

    return (
    <>
      <Spreadsheet
        ref={ref}
        // toolbar={false}
        style={{ width: '100%', height: '80vh' }}
        defaultProps={{
          excel: {
            fileName: 'Products.xlsx',
            proxyURL: 'https://demos.telerik.com/kendo-ui/service/export',            
          }
         }}
      />
        <br />
        <br />
        <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
        <br />
        <br />
        <button onClick={onLoadJson}>Load From JSON</button>
        <br />
        <br />
        <button onClick={onSave}>Send To Server as JSON</button>
    </>
    );
};

export default App;