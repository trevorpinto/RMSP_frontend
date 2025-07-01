import React from "react";
import { Link } from "react-router-dom";

function FacultyCards(){
    return <>
    <div class="flex-container">
    <Link to ="categories/comp-sci-profs"> {/*Redirect without page reload */}
    <ul className="box-cs">
        <li><h2>Faculty of Computer Science</h2>
        </li>
    </ul>
    </Link>

    <Link to ="categories/health-sci-profs"> {/*Redirect without page reload */}
    <ul className="box-hs">
        <li><h2>Faculty of Health Science</h2>
        </li>
    </ul>
    </Link>
    </div>
    </>
}

export default FacultyCards