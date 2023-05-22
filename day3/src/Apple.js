import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { useRef, useState } from "react";
import Input from "@mui/material/Input"
import TextField from "@mui/material/TextField";
import { Avatar, Popover } from "@mui/material"
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
export const Apple = () => {

    const [name, setName] = useState("Dhaval");
    const [email, setEmail] = useState("dhaval@gmail.com");
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const Navigate = useNavigate();

    const onHomePageButtonClick = () => {
        console.log("Name:", name);
        console.log("Email:", email);
        Navigate("/");
    };

    const open1 = Boolean(anchorEl);
    const id = open1 ? 'simple-popover' : undefined;

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setOpen(false);
    }
    return (
        <div
            style={{
                padding: 5,
            }}
        >
            <div
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    cursor: "pointer",
                }}>

            </div>

            <div
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    columnGap: 5,
                }}
                onClick={handleClick}
                aria-describedby={id}
            >
                <Avatar sx={{ bgcolor: "blue" }} >DR</Avatar>
            </div>

            <div
                style={{
                    paddiing: 5,
                    display: "flex",
                    flexDirection: "column",
                    rowGap: 8,
                }}
            >
                <div
                    style={{
                        padding: 5,
                        display: "flex",
                        flexDirection: "column",
                        rowGap: 8,
                    }}
                >
                    <TextField
                        variant="outlined"
                        type="text"
                        value={name}
                        label="Name"
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                        variant="outlined"
                        type="email"
                        value={email}
                        label="Email"
                        placeholder="email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Button variant="contained" onclick={onHomePageButtonClick} className="">
                        Submit
                    </Button>
                </div>
            </div>
            <Popover
                open={open}
                // //anchorOrigin={{
                //     vertical: "bottom",
                //     horizontal: "left",
                // }}
                // transformOrigin={{
                //     vertical: "top",
                //     horizontal: "left",
                // }}
                anchorEl={anchorEl}
                onClose={handleClose}
                id={id}
            >
                <div
                    style={{
                        padding: 5,
                    }}
                >
                    <h5>Dhaval Rana</h5>
                    <LogoutOutlinedIcon onClick={onHomePageButtonClick} />
                </div>
            </Popover>
        </div>
    );
};
