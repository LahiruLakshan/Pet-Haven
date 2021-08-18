import React, {useEffect, useState} from 'react';
import MaterialTable from "material-table";
import {PETS} from "../api-config";

function TableView(props) {
    const [petData, setPetData] = useState([]);

    useEffect(() => {
        fetch(PETS, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(data => setPetData(data));
    }, [])
    return (
        <div>
            <MaterialTable
                title={"Table of Pets Details"}
                columns={[
                    { title: 'Date', field: 'createdAt', type:'datetime' },
                    { title: 'Name', field: 'name' },
                    { title: 'Description', field: 'description', searchable: false, sorting: false }
                ]}
                data={petData}
                options={{
                    search: true,
                    sorting: true,
                    paging:false,
                    maxBodyHeight: '500px',
                    headerStyle:{
                        backgroundColor:"#696969"
                    }
                }}
            />


        </div>
    );
}

export default TableView;