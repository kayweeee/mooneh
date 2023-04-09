import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faUser, faHammer } from "@fortawesome/free-solid-svg-icons";

function GameSideBar () {
    return (
    <div className='absolute top-0 right-0 w-1/5 grid grid-cols-2 gap-x-12 gap-y-5 me-3 mt-5'>
        <div className="flex rounded-lg border-2 border-grey justify-center items-center gap-2 w-16 m-1">
            <FontAwesomeIcon icon={faMoon} style={{color: "#96a1b6",}} />
            <p>20</p>
        </div>
        <button>
            <div className="flex rounded-full bg-black w-8 h-8 justify-center items-center">
                    <FontAwesomeIcon icon={faUser} style={{color: "#a5b3ca",}} />
            </div>
        </button>
        <div></div>
        <button>
            <div className="flex rounded-full bg-black w-8 h-8 justify-center items-center">
                <FontAwesomeIcon icon={faHammer} style={{color: "#a5b3ca",}} />
            </div>
        </button>
    </div>
    )
}

export default GameSideBar;