import React from "react";
import NavBar from "./navbar";
import "./search.css";
function Search(){
return(
    <>
        <div><NavBar/></div>
        <div className="main">
            <div className="welcome">
                <h1>Welcome to bookMyTrip.com</h1>

                <div className="search">
                    <form>
                        <input type="text"  name="source" placeholder="Source"></input>
                        <input type="text"  name="destination" placeholder="Destination"></input>
                        <input type="date"  name="destination" placeholder="Date"></input>
                        <button>Search</button>
                    </form>
                </div>
                <hr/>
                <div className="div1">
                    <div className="div2">
                        <img alt="" src="data:image/jpeg;base64,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"/>
                        <h3>World's best travel companions</h3>
                    </div>
                    <div className="div2">
                        <img alt="" src="https://www.nicepng.com/png/detail/139-1395399_customer-customer-icon-transparent.png"/>
                        <h3>1000+ Happy Customers</h3>
                    </div>
                    <div className="div2">
                        <img alt="" src="data:image/png;base64,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" />
                        <h3>Affordable Price</h3>
                    </div>
                    <div className="div2">
                        <img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkcdSAUrcDGuQeURnVyq5fEuRF-xMn51IpGw&usqp=CAU"/>
                        <h3>User Friendly</h3>
                    </div>                    
                </div>

            </div>
        </div>

    </>
)
}
export default Search;