import React from 'react';
import ApiService from "../services/ApiService";

import { Paper, } from "@mui/material";

export default function Home() {

    const [dataList, setDataList] = React.useState([]);

    React.useEffect(() => {
        
        getData();

    }, []);

    const getData = () => {

        ApiService.request("/", {
            method: "POST",
            body: JSON.stringify({})
        })
            .then((response) => response.json())
            .then((data) => {
                setDataList(data);
            })
            .catch((error) => {
                console.error("Request failed:", error.message);
            });
    };
    
    return (
        <div className="content-layout">

            <Paper sx={{ p: 2, overflow: "auto" }}>
                <pre>
                    {JSON.stringify(dataList, null, 2)}
                </pre>
            </Paper>

        </div>
    );
}