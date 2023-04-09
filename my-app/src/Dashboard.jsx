import ExpenseSummary from "./Components/ExpenseSummary";
import NavBar from "./Components/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Dashboard () {
    return (
        <div>
            <NavBar/>
            <div className="w-screen h-screen pt-7">
            <div className="w-screen h-1/6 flex justify-center items-center gap-x-6">
                <button>
                    <FontAwesomeIcon icon={faChevronLeft} style={{color: "#96a1b6",}}/>
                </button>
                <p>Jan 2023</p>
                <button>
                    <FontAwesomeIcon icon={faChevronRight} style={{color: "#96a1b6",}}/>
                </button>
            </div>
            <ExpenseSummary/>
            </div>
        </div>
    )
};

export default Dashboard;