import React from "react";
import CriticalError from "../CriticalError/CriticalError";
import EmploeesList from "../EmploeesList/EmploeesList";

function Main () {
const [error, setError] = React.useState(true)

    return (
        <main className='main'>
            {error? <CriticalError/>:<EmploeesList/>}
        </main>
    )
}

export default Main;