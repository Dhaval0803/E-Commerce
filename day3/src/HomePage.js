/* eslint-disable no-undef */
import { Button } from "@mui/material";
export const HomePage = () => {
    function onHomePageButtonClick() { }
    
    return (
        <div>
            Home Page
            <Button variant="contained" onClick={onHomePageButtonClick} className="">
                Hello World
            </Button>
        </div>
    );
};