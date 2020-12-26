import React, { useEffect,useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridItem from "./Grid/GridItem.js";
import GridContainer from "./Grid/GridContainer.js";
import Table from "./Table/Table.js";
import Card from "./Card/Card.js";
import CardHeader from "./Card/CardHeader.js";
import CardBody from "./Card/CardBody.js";
import TableBody from "@material-ui/core/TableBody";
// antd library
import { Tag, Space, Button, Modal } from "antd";

const styles = {
    cardCategoryWhite: {
        "&,& a,& a:hover,& a:focus": {
            color: "rgba(255,255,255,.62)",
            margin: "0",
            fontSize: "14px",
            marginTop: "0",
            marginBottom: "0"
        },
        "& a,& a:hover,& a:focus": {
            color: "#FFFFFF"
        }
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none",
        "& small": {
            color: "#777",
            fontSize: "65%",
            fontWeight: "400",
            lineHeight: "1"
        }
    }
};

const useStyles = makeStyles(styles);

export default function ListUser() {
    const classes = useStyles();
    const [reload, setReload] = React.useState(true)
    const [data, setData] = React.useState([]);
    // input add user admin
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password1: '',
        password2: '',
        textChange: 'Sign Up',
    });
    const { name, email, password1, password2, textChange } = formData; // add user
    const [isModalVisible, setIsModalVisible] = useState(false); // set is model
    const handleChange = (text) => (e) => {
        setFormData({ ...formData, [text]: e.target.value });
    };
    // reload
    const reaLoad = () => {
        getData();
        setReload(!reload);
    }
    // get list user
    const getData = async () => {
        return await fetch(`https://toeic-seb-firebase.herokuapp.com/users/`)
            .then(response => response.json())
            .then(data => {
                let array = data.map(element => {
                    return {
                        id: element.uid,
                        name: element.displayName,
                        email: element.email,
                        disabled: element.disabled,
                        expirationDate: element.expirationDate,
                        package: element.package,
                    }
                })
                setData(array);
            });
    }
    const showModal = () => {
        setIsModalVisible(true);
      };
      const handleOk = () => {
        setIsModalVisible(false);
      };
      const handleCancel = () => {
        setIsModalVisible(false);
      };
    useEffect(() => {
        getData();
    }, [])
    return (
        <GridContainer>0
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
            <GridItem xs={12} sm={12} md={12}>
                <Card>
                    <CardHeader color="primary">
                        <div style={{ display: "flex", }}>
                            <div style={{ flex: 1 }} >
                                <h4 className={classes.cardTitleWhite}>List user</h4>
                                <p className={classes.cardCategoryWhite}>
                                    User management
                            </p>
                            </div>
                            <div style={{ flex: 1 }}>
                            </div>
                            <div style={{ ưflex: 1, alignItems: 'center', justifyContent: 'flex-end', display: 'flex' }}>
                                <Button onClick={
                                    showModal
                                }>Add user</Button>
                            </div>
                        </div>
                    </CardHeader>
                    <CardBody>
                        <Table
                            tableHeaderColor="primary"
                            tableHead={['id', 'name', 'email', 'disabled', 'expiration', 'package']}
                            tableData={data}
                            reaLoad={reaLoad}
                        />
                    </CardBody>
                </Card>
            </GridItem>
        </GridContainer>
    );
}
