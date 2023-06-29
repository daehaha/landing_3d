import { useEffect } from "react";

interface Card{
	msg:String
}
const Card =  ({ msg }:Card)=> {


useEffect(() => {
		return () => {
			// Remove the scroll event listener when the component unmounts
		};
	}, []);



	return ( <div>
				{msg}
		    </div>
	);
}
export default Card
