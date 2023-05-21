import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
export const Apple = () => {
    const Navigate = useNavigate();
    const onHomePageButtonClick = () => {
        //Navigate("/");
        alert("The button has been clicked");
    };
    return (
        <div>
            <div>Apple Page</div>
            <button onClick={onHomePageButtonClick}>Navigate to Home Page</button>
        </div>
    );
};
