import { Routes, Route } from "react-router-dom";
import App from "./App";
import MoonVillage from "./MoonVillage";
import AddExpense from "./AddExpense";
import Dashboard from "./Dashboard";

function Router() {
    return (
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/moonvillage" element={<MoonVillage/>}/>
            <Route path="/addexpense" element={<AddExpense/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
    )
}

export default Router;