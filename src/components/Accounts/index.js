// 
import { memo } from "react";
import PropTypes from "prop-types";

//
import Account from "../Account";


function Accounts({data=[]}) {
    return (
        data.map(data => <Account key={data.id} data={data} />)
    )
}

Accounts.propTypes = {
    data: PropTypes.array.isRequired
}

export default memo(Accounts);