import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Card from "./Card/Card.js";
import CardHeader from "./Card/CardHeader.js";
import CardBody from "./Card/CardBody.js";
import "antd/dist/antd.css";
import { Table, Tag, Space, Button, Modal } from "antd";

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
const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email"
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role"
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status"
  }
];

export default function UploadData() {
  const classes = useStyles();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [reload, setReload] = React.useState(true) // reload
  const [data, setData] = React.useState([]); // data
  // input add user admin
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password1: '',
    password2: '',
    textChange: 'Sign Up',
  });

  const { name, email, password1, password2, textChange } = formData;

  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };
  const getData = async () => {
    return await fetch(`https://toeic-seb.herokuapp.com/admin/`)
      .then(response => response.json())
      .then(data => {
        let array = data.map(element => {
          return {
            id: element._id,
            name: element.name,
            email: element.email,
            status: element['status']?.toString(),
            role: element.role,
          }
        })
        setData(array);
      });
  }
  useEffect(() => {
    getData();
  }, [])
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <Card>
      <CardHeader color="primary">
        <div style={{ display: 'flex' }}>
          <div style={{ display: 'flex', flex: 1 }}>
            <h4 className={classes.cardTitleWhite}>List admin</h4>
          </div>
          <div style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end', display: 'flex' }}>
            <Button onClick={
              showModal
            }>Add admin</Button>
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <Modal title="Add data" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
          <div className="mx-auto max-w-xs relative ">
            <input
              className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
              type="text"
              placeholder="Name"
              onChange={handleChange('name')}
              value={name}
            />
            <input
              className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
              type="email"
              placeholder="Email"
              onChange={handleChange('email')}
              value={email}
            />
            <input
              className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
              type="password"
              placeholder="Password"
              onChange={handleChange('password1')}
              value={password1}
            />
            <input
              className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
              type="password"
              placeholder="Confirm Password"
              onChange={handleChange('password2')}
              value={password2}
            />
          </div>
        </Modal>
        <Table columns={columns} dataSource={data} />
      </CardBody>
    </Card>
  );
}
