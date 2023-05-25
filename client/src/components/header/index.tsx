import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { headerStyle } from "./style";
import List from "@material-ui/core/List";
import AppBar from "@material-ui/core/AppBar";
import ListItem from "@material-ui/core/ListItem";
import siteLogo from "../../assets/images/site-logo.svg";
import cartIcon from "../../assets/images/cart.png";
import searchIcon from "../../assets/images/search.png";
import { TextField, Button } from "@material-ui/core";
import { RoutePaths } from "../../utils/enum";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
// import bookService from "../../service/book.service";
// import { BookModel } from "../../models/BookModel";

const Header: React.FC = () => {
	const classes = headerStyle();
	const [open, setOpen] = useState<boolean>(false);
	const [query, setquery] = useState<string>("");
	// const [bookList, setbookList] = useState<BookModel[]>([]);
	const [openSearchResult, setOpenSearchResult] = useState<boolean>(false);
	const [loading, setLoading] = useState<boolean>(false);

	const history = useHistory();

	// for mobile menu
	const openMenu = (): void => {
		document.body.classList.toggle("open-menu");
	};

	return (
		<div className={classes.headerWrapper}>
			<AppBar className="site-header" id="header" position="static">
				<div
					className="top-header"
					style={{ display: open ? "none" : "block" }}
				></div>
				<div className="bottom-header">
					<div className="container">
						<div className="header-wrapper">
							<div className="logo-wrapper">
								<Link to="/" className="site-logo" title="logo">
									<img src={siteLogo} alt="logo" />
								</Link>
							</div>
							<div className="nav-wrapper">
								<div className="top-right-bar">
									<List className="top-nav-bar">
										
											<>
												<ListItem>
													<Link to={RoutePaths.Login} title="Login">
														Login
													</Link>
												</ListItem>
												<ListItem>
													<Link to={RoutePaths.Register} title="Register">
														Register
													</Link>
												</ListItem>
											</>
										
										
									</List>
									<List className="cart-country-wrap">
										<ListItem className="cart-link">
											<Link to="/cart" title="Cart">
												<img src={cartIcon} alt="cart.png" />
												<span></span>
												Cart
											</Link>
										</ListItem>
										<ListItem className="hamburger" onClick={openMenu}>
											<span></span>
										</ListItem>
									</List>									
								</div>
							</div>
						</div>
					</div>
				</div>
				<div
					className="search-overlay"
					onClick={() => {
						setOpenSearchResult(false);
						document.body.classList.remove("search-results-open");
					}}
				></div>
				<div className="header-search-wrapper">
					<div className="container">
						<div className="header-search-outer">
							<div className="header-search-inner">
								<div className="text-wrapper">
									<TextField
										id="text"
										name="text"
										placeholder="What are you looking for..."
										variant="outlined"
										value={query}
										onChange={(e: { target: { value: string } }) =>
											setquery(e.target.value)
										}
									/>

								</div>
								<Button
									type="submit"
									className="green-btn btn"
									variant="contained"
									color="primary"
									disableElevation
									
								>
									<em>
										<img src={searchIcon} alt="search" />
									</em>
									Search
								</Button>
							</div>
						</div>
					</div>
				</div>
			</AppBar>
		</div>
	);
};

export default Header;
