import React from 'react'
import {FormAddProductDb} from "../components/Dashbord/SetProductDb";
import {DeleteProduct} from "../components/Dashbord/DeleteProduct";
import {AllProduct} from "../components/Dashbord/AllProduct";

export const Dashboard = () => {

    return (
        <div className={"container mx-auto"}>
            <FormAddProductDb/>
            <DeleteProduct/>
            <AllProduct/>
        </div>
    )
}
