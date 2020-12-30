import React from "react";
const UploadFile = (props) => {
    const { uploadFile, name, title } = props;
    return (
        <div style={{ display: 'flex', borderRadius: 1, height: 100 }}>
            <div style={{flex:1}}>
                <h4 style={{}}>{title}</h4>
            </div>
            <div style={{ flex:1, marginLeft: 10, }}>
                <input type='file' name='file' id="input" accept=".xls,.xlsx" onChange={(e) => uploadFile(e, name)} />
            </div>
        </div>
    )
}
export default UploadFile