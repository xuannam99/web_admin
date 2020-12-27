import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "./Card/Card.js";
import CardHeader from "./Card/CardHeader.js";
import CardBody from "./Card/CardBody.js";
import XLSX from 'xlsx';
import UploadFileView from './UploadFileView';
import "antd/dist/antd.css";
import { Table, Tag, Space, Button, Modal } from "antd";
// api up data
import { pushFile } from '../../controllers/PushData';
const styles = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
  },
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
};

const useStyles = makeStyles(styles);
let datasetFile = [{
  "name": "jayanth",
  "data": "scd",
  "abc": "sdef"
}]

// columns
const columns = [
  {
    title: "Name",
    dataIndex: "Name",
    key: "Name"
  },
  {
    title: "IDYear",
    dataIndex: "IDYear",
    key: "IDYear"
  },
  {
    title: "IDTest",
    dataIndex: "IDTest",
    key: "IDTest"
  },
  {
    title: "Buy",
    dataIndex: "Buy",
    key: "Buy"
  }
];

const data = [
  {
    Buy: "0",
    IDTest: 1,
    IDYear: 2020,
    Name: "đề 1"
  },
  {
    Buy: "0",
    IDTest: 2,
    IDYear: 2020,
    Name: "đề 2"
  },
];
let content = [
  {
    name: 'part1',
    title: 'Up load data part 1'
  },
  {
    name: 'part2',
    title: 'Up load data part 2'
  },
  {
    name: 'part3',
    title: 'Up load data part 3'
  },
  {
    name: 'part4',
    title: 'Up load data part 4'
  },
  {
    name: 'part5',
    title: 'Up load data part 5'
  },
  {
    name: 'part6',
    title: 'Up load data part 6'
  },
  {
    name: 'part7',
    title: 'Up load data part 7'
  },
  {
    name: 'part3detail',
    title: 'Up load data part 3 detail'
  },
  {
    name: 'part4detail',
    title: 'Up load data part 4 detail'
  },
  {
    name: 'part6detail',
    title: 'Up load data part 6 detail'
  },
  {
    name: 'part7detail',
    title: 'Up load data part 7 detail'
  },
  {
    name: 'test',
    title: 'Up load data test'
  },

]
export default function UploadData() {
  const classes = useStyles();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  // name and data post database
  const dataUpload = {
    part1: [],
    part2: [],
    part3: [],
    part4: [],
    part5: [],
    part6: [],
    part7: [],
    part3detail: [],
    part4detail: [],
    part6detail: [],
    part7detail: [],
    test: [],
  }

  // convert excel to json
  const UploadFile = (e) => {
    // console.log(e);
    return new Promise((resolve, reject) => {
      let selectedFile = e.target.files[0];
      XLSX.utils.json_to_sheet(datasetFile, selectedFile.name);
      if (selectedFile) {
        let fileReader = new FileReader();
        fileReader.readAsBinaryString(selectedFile);
        fileReader.onload = (event) => {
          let data = event.target.result;
          let workbook = XLSX.read(data, { type: "binary" });
          // console.log(workbook);
          workbook.SheetNames.forEach(sheet => {
            let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheet]);
            let result = JSON.stringify(rowObject, undefined, 4);
            resolve(result);
          });
        }
      }
    });
  }
  // set file 
  const uploadFile = async (e, name) => {
    switch (name) {
      case 'part1': {
        UploadFile(e)
          .then((data) => {
            dataUpload.part1 = data;
          })
        break;
      }
      case 'part2': {
        UploadFile(e)
          .then((data) => {
            dataUpload.part2 = data;
          })
        break;
      } case 'part3': {
        UploadFile(e)
          .then((data) => {
            dataUpload.part3 = data;
          })
        break;
      }
      case 'part4': {
        UploadFile(e)
          .then((data) => {
            dataUpload.part4 = data;
          })
        break;
      }
      case 'part5': {
        UploadFile(e)
          .then((data) => {
            dataUpload.part5 = data;
          })
        break;
      }
      case 'part6': {
        UploadFile(e)
          .then((data) => {
            dataUpload.part6 = data;
          })
        break;
      } case 'part7': {
        UploadFile(e)
          .then((data) => {
            dataUpload.part7 = data;
          })
        break;
      }
      case 'part3detail': {
        UploadFile(e)
          .then((data) => {
            dataUpload.part3detail = data;
          })
        break;
      }
      case 'part4detail': {
        UploadFile(e)
          .then((data) => {
            dataUpload.part4detail = data;
          })
        break;
      }
      case 'part6detail': {
        UploadFile(e)
          .then((data) => {
            dataUpload.part6detail = data;
          })
        break;
      }
      case 'part7detail': {
        UploadFile(e)
          .then((data) => {
            dataUpload.part7detail = data;
          })
        break;
      }
      case 'test': {
        UploadFile(e)
          .then((data) => {
            dataUpload.test = data;
          })
        break;
      }
    }
  }
  // push data firebase
  const pushData = async () => {
    // for (const property in dataUpload) {
    //   let res = await pushFile(dataUpload[property], property);
    // }
    await pushFile(dataUpload.test, 'test');
    setLoading(false);
    setIsModalVisible(false);
  }
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setLoading(true);
    pushData();
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <Card>
      <CardHeader color="primary">
        <div style={{ display: 'flex' }}>
          <div style={{ display: 'flex', flex: 1 }}>
            <h4 className={classes.cardTitleWhite}>Up load data</h4>
          </div>
          <div style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end', display: 'flex' }}>
            <Button type="primary" shape="circle" onClick={showModal} >
              +
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <Modal
          visible={isModalVisible}
          title="Add data"
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <Button key="back" onClick={handleCancel}>
              Cancel
            </Button>,
              <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
              Up load
            </Button>,
          ]}
        >
          {
            content.map((element) =>
              <UploadFileView
                uploadFile={uploadFile}
                name={element.name}
                title={element.title} />
            )
          }
        </Modal>
        <Table columns={columns} dataSource={data} />
      </CardBody>
    </Card>
  );
}
