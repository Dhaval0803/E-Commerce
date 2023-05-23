import React from "react";
import { loginStyle } from "./style";
import {
	Breadcrumbs,
	Link,
	Typography,
	List,
	ListItem,
	Button,
	TextField,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import ValidationErrorMessage from "../../components/ValidationErrorMessage";
import { toast } from "react-toastify";


const Login: React.FC = () => {
	const classes = loginStyle();
	const history = useHistory();
	

	const validationSchema = Yup.object().shape({
		email: Yup.string()
			.email("Invalid email address format")
			.required("Email is required"),
		password: Yup.string()
			.min(5, "Password must be 5 characters at minimum")
			.required("Password is required"),
	});

	
	return (
		<div className={classes.loginWrapper}>
			<div className="login-page-wrapper">
				<div className="container">
					<Breadcrumbs
						separator="›"
						aria-label="breadcrumb"
						className="breadcrumb-wrapper"
					>
						<Link color="inherit" href="/" title="Home">
							Home
						</Link>
						<Typography color="textPrimary">Login</Typography>
					</Breadcrumbs>
					<Typography variant="h1">Login or Create an Account</Typography>
					<div className="login-row">
						<div className="content-col">
							<div className="top-content">
								<Typography variant="h2">New Customer</Typography>
								<p>Registration is free and easy.</p>
								<List className="bullet-list">
									<ListItem>Faster checkout</ListItem>
									<ListItem>Save multiple shipping addresses</ListItem>
									<ListItem>View and track orders and more</ListItem>
								</List>
							</div>
							<div className="btn-wrapper">
								<Button
									className="pink-btn btn"
									variant="contained"
									color="primary"
									disableElevation
									onClick={() => {
										history.push("/register");
									}}
								>
									Create an Account
								</Button>
							</div>
						</div>
						<div className="form-block">
							<Typography variant="h2">Registered Customers</Typography>
							<p>If you have an account with us, please log in.</p>
							
								
									<form >
										<div className="form-row-wrapper">
											<div className="form-col">
												<TextField
													id="email"
													name="email"
													
													label="Email Address *"
													autoComplete="off"
													variant="outlined"
													inputProps={{ className: "small" }}
												/>
												<ValidationErrorMessage
													
												/>
											</div>
											<div className="form-col">
												<TextField
													id="password"
													name="password"
													label="Password *"
													type="password"
													variant="outlined"
													
													inputProps={{ className: "small" }}
													autoComplete="off"
												/>
												<ValidationErrorMessage
													// message={errors.password}
													// touched={touched.password}
												/>
											</div>
											<div className="btn-wrapper">
												<Button
													type="submit"
													className="pink-btn btn"
													variant="contained"
													color="primary"
													disableElevation
												>
													Login
												</Button>
											</div>
										</div>
									</form>
								
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
