
export const pushFile = ( data, name) => {
    return new Promise((resolve, reject) => {
        fetch(`https://toeic-seb-firebase.herokuapp.com/database/${name}/add`, {
            method: 'POST',
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': "*",
                mode: 'no-cors'
            },
            body:data,
        }).then((data) => {
            resolve(data.json());
        })
    });
}

export const updateFile = ( data, name) => {
    console.log(data)
    return new Promise((resolve, reject) => {
        fetch(`https://toeic-seb-firebase.herokuapp.com/database/${name}/update`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': "*",
                mode: 'no-cors'
            },
            body:data,
        }).then((data) => {
            resolve(data.json());
        })
    });
}
export const removeData = ( data) => {
    return new Promise((resolve, reject) => {
        fetch(`https://toeic-seb-firebase.herokuapp.com/database/test/delete`, {
            method: 'delete',
            headers: {
                Accept: 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': "*",
                mode: 'no-cors'
            },
            body:JSON.stringify(
                { 
                    IDYear: data.IDYear, 
                    IDTest: data.IDTest 
                }),
        }).then((data) => {
            resolve(data.json());
        })
    });
}