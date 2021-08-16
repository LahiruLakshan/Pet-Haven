import React, {useEffect, useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {AppBar, Button, Toolbar, Typography} from "@material-ui/core";
import "./navBar.css";
import Logo from "../../assets/svg/logo";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        // backgroundColor: "#220480",
        minHeight: "15vh",

    },
    title: {
        flexGrow: 1,
        // margin:"20px",
        marginLeft: "24px",
        [theme.breakpoints.down("xs")]: {
            marginLeft: "10px",
        },
        // backgroundColor:"rgba(17,17,17,0.63)"
    },
    appBar: {
        transform: "perspective(0) translateZ(500px)",
        backgroundColor: "transparent",
        boxShadow: "none",
        transition: " 1s ease",
        [theme.breakpoints.up("sm")]: {
            // borderBottom: "2px solid rgba(255,255,255,.05)",
            padding: "20px 0",
        },
        [theme.breakpoints.down("xs")]: {
            padding: "20px 0",
            // position: "static",
            // borderBottom: "2px solid rgba(255,255,255,.05)",
            borderBottom: "none",
            backgroundColor: "transparent",
            boxShadow: "none",
            transition: " 1s ease",
        },
    },
    setAppBar: {
        transform: "perspective(0) translateZ(500px)",
        [theme.breakpoints.up("xs")]: {
            // borderBottom: "2px solid rgba(255,255,255,.05)",
            borderBottom: "0px solid rgba(255,255,255,.05)",
            backgroundColor: "rgb(255,255,255)",
            transition: " 1s ease",
        },
        // [theme.breakpoints.down("xs")]: {
        //     // position: "static",
        //     // borderBottom: "2px solid rgba(255,255,255,.05)",
        //     borderBottom: "none",
        //     backgroundColor: "transparent",
        //     boxShadow: "none",
        //     transition: " 1s ease",
        // },
    },
    navBtn: {
        transition: "all 0.5s ease",
        // fontFamily: ['Rubik', 'sans-serif'].join(','),
        fontWeight: 400,
        margin: "5px",
        color: "#000000",
        padding: "10px 25px",
        borderRadius: "50px",
        // boxShadow: "0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)",
        // color:"#9b50f9",
        // border:"3px solid transparent",
        [theme.breakpoints.down("md")]: {
            // color:"#6828c2",
            // border: "3px solid white",
            width: "300px"
        },
        '&:hover': {
            transition: "all 0.5s ease",
            // backgroundColor: "rgba(127,153,255,0.5)",
            backgroundColor: "rgba(154,54,240,0.7)",
            boxShadow: "0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)",
            color: "#fff",
            // color:"#000000",
            // border:"3px solid white",
            // border:"3px solid black"
        }

    },
    setNavBtn: {
        transition: "all 0.5s ease",
        // fontFamily: ['Rubik', 'sans-serif'].join(','),
        fontWeight: 400,
        margin: "5px",
        padding: "10px 25px",
        borderRadius: "50px",
        color: "#000000",
        // border:"3px solid transparent",
        [theme.breakpoints.down("md")]: {
            // color:"#6828c2",
            // border: "3px solid black",
            width: "300px"
        },
        '&:hover': {
            transition: "all 0.5s ease",
            // backgroundColor: "rgba(17,17,17,0.17)",
            // color: "#000000",
            backgroundColor: "rgba(154,54,240,0.7)",
            boxShadow: "0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)",
            color: "#fff",
            // border:"3px solid black"
        }

    },
    // navContactBtn: {
    //     transition: " 1s ease",
    //     // fontFamily: ['Rubik', 'sans-serif'].join(','),
    //     fontWeight: 400,
    //     margin: "10px",
    //     padding: "10px 25px",
    //     borderRadius: "50px",
    //     border: "3px solid black",
    //     color: "#000",
    //     [theme.breakpoints.down("md")]: {
    //         // color:"#6828c2",
    //         // border: "3px solid white",
    //         width: "300px"
    //     },
    //     '&:hover': {
    //         transition: "all 0.5s ease",
    //         // backgroundColor: "#ffffff",
    //         // color:"#000000",
    //         backgroundColor: "#000000",
    //         color: "#ffffff",
    //         border: "3px solid black"
    //     }
    // },
    // setNavContactBtn: {
    //     transition: " 1s ease",
    //     // fontFamily: ['Rubik', 'sans-serif'].join(','),
    //     fontWeight: 400,
    //     margin: "10px",
    //     padding: "10px 25px",
    //     borderRadius: "50px",
    //     border: "3px solid black",
    //     color: "#000",
    //     [theme.breakpoints.down("md")]: {
    //         // color:"#6828c2",
    //         // border: "3px solid white",
    //         width: "300px"
    //     },
    //     '&:hover': {
    //         transition: "all 0.5s ease",
    //         backgroundColor: "#000000",
    //         color: "#ffffff",
    //         border: "3px solid black"
    //     }
    // },

    //mobile view nav buttons
    navBtnGrp: {
        marginRight: "24px",
        backgroundColor: "rgba(206,0,0,0)",
        [theme.breakpoints.down("md")]: {
            alignItems: "center",
            transition: "all 0.5s ease",
            // display: "none",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            borderTop: "1px solid #fff",
            borderBottom: "1px solid #fff",
            position: "absolute",
            top: "98px",
            left: "-110%",
            opacity: "1",
            backgroundColor: "#ffffff"

        },
        [theme.breakpoints.down("xs")]: {
            transition: "all 0.5s ease",
            // display: "none",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            borderTop: "1px solid #fff",
            borderBottom: "1px solid #fff",
            position: "absolute",
            top: "62px",
            left: "-110 %",
            opacity: "1",
            backgroundColor: "#ffffff"

        },
        // [theme.breakpoints.down("xs")]: {
        //     marginRight: "100px",
        // },
    },
    setNavBtnGrp: {
        marginRight: "24px",
        backgroundColor: "rgba(91,58,208,0)",
        [theme.breakpoints.down("md")]: {
            alignItems: "center",
            transition: "all 0.5s ease",
            // display: "none",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            borderTop: "1px solid #fff",
            borderBottom: "1px solid #fff",
            position: "absolute",
            top: "98px",
            left: "0px",
            opacity: "1",
            backgroundColor: "#ffffff"
        },
        [theme.breakpoints.down("xs")]: {
            transition: "all 0.5s ease",
            // display: "none",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            borderTop: "1px solid #fff",
            borderBottom: "1px solid #fff",
            position: "absolute",
            top: "62px",
            left: "0px",
            opacity: "1",
        },
        // [theme.breakpoints.down("xs")]: {
        //     marginRight: "10px",
        // },
    },
    setNavBtnGrpII: {
        marginRight: "24px",
        backgroundColor: "rgba(91,58,208,0)",
        [theme.breakpoints.down("md")]: {
            alignItems: "center",
            transition: "all 0.5s ease",
            // display: "none",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            borderTop: "1px solid #fff",
            borderBottom: "1px solid #fff",
            position: "absolute",
            top: "98px",
            left: "110%",
            opacity: "1",
            backgroundColor: "#ffffff"
        },
        [theme.breakpoints.down("xs")]: {
            transition: "all 0.5s ease",
            // display: "none",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            borderTop: "1px solid #fff",
            borderBottom: "1px solid #fff",
            position: "absolute",
            top: "62px",
            left: "110%",
            opacity: "1",
        },
        // [theme.breakpoints.down("xs")]: {
        //     marginRight: "10px",
        // },
    },
    // navBtnGrpBackground: {
    //     [theme.breakpoints.down("md")]: {
    //         transition: "all 1s ease",
    //         // backgroundColor: "#ffffff",
    //         borderTop: "1px solid #fff",
    //         borderBottom: "1px solid #fff",
    //         "&$navContactBtn": {
    //             border: "3px solid white",
    //         }
    //
    //     },
    // },
    // setNavBtnGrpBackground: {
    //     [theme.breakpoints.down("md")]: {
    //         transition: "all 1s ease",
    //         // backgroundColor: "#ffffff",
    //         borderTop: "1px solid black",
    //         borderBottom: "1px solid black",
    //         "&$navContactBtn": {
    //             border: "3px solid white",
    //         }
    //     },
    // },
    navMobileIcon: {
        marginRight: "24px",
        marginBottom: "8px",
        borderRadius: "50px",
        border: "2px solid black",
        [theme.breakpoints.up("lg")]: {
            display: "none",

        },
        [theme.breakpoints.down("md")]: {
            width: "100px",
        },
        [theme.breakpoints.down("xs")]: {
            width: "50px",
            marginRight: "10px",
        },
    },
    setNavMobileIcon: {
        marginRight: "24px",
        borderRadius: "50px",
        border: "2px solid black",
        [theme.breakpoints.up("md")]: {
            border: "2px solid black",
        },
        [theme.breakpoints.up("lg")]: {
            display: "none",

        },
        [theme.breakpoints.down("md")]: {
            width: "100px",
        },
        [theme.breakpoints.down("xs")]: {
            width: "50px",
            marginRight: "10px",
        },
    },
    menuLine: {
        // [theme.breakpoints.up("xs")]: {
        backgroundColor: "black !important",
        // },
    },
    setMenuLine: {
        // [theme.breakpoints.up("xs")]: {
        backgroundColor: "black !important",
        // },
    }

}));

function NavBar(props) {
    const classes = useStyles();
    const [navBackground, setNavBackground] = useState("appBar");
    const [navBtn, setNavBtn] = useState("navBtn");
    const [navContactBtn, setNavContactBtn] = useState("navContactBtn");
    const [mobileNavActive, setMobileNavActive] = useState("navBtnGrp");
    const [mobileNavBackground, setMobileNavBackground] = useState("navBtnGrpBackground");
    const [mobileMenuBtn, setMobileMenuBtn] = useState("navMobileIcon");
    const [mobileMenuLines, setMobileMenuLines,] = useState("menuLine");


    const [status, setStatus] = useState('close');

    const navBackgroundRef = React.useRef();
    navBackgroundRef.current = navBackground;

    const navBtnRef = React.useRef();
    navBtnRef.current = navBtn;

    // const navContactBtnRef = React.useRef();
    // navContactBtnRef.current = navContactBtn;

    const mobileNavRef = React.useRef();
    mobileNavRef.current = mobileNavActive;

    const mobileNavBackgroundRef = React.useRef();
    mobileNavBackgroundRef.current = mobileNavBackground;

    const mobileMenuBtnRef = React.useRef();
    mobileMenuBtnRef.current = mobileMenuBtn;

    const mobileMenuLinesRef = React.useRef();
    mobileMenuLinesRef.current = mobileMenuLines;

    useEffect(() => {

        const handleScroll = () => {
            const show = window.scrollY > 0;
            if (show) {
                setNavBackground("setAppBar");
                setNavBtn("setNavBtn");
                setNavContactBtn("setNavContactBtn");
                setMobileMenuBtn("setNavMobileIcon");
                setMobileMenuLines("setMenuLine");
                setMobileNavBackground("setNavBtnGrpBackground");
            } else {
                setNavBackground("appBar");
                setNavBtn("navBtn");
                setNavContactBtn("navContactBtn");
                setMobileMenuBtn("navMobileIcon");
                setMobileMenuLines("menuLine");
                setMobileNavBackground("navBtnGrpBackground");
            }


        }
        document.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("scroll", handleScroll);
        }
    }, []);
    const [slide, setSlide] = useState('right');
    const handleClick = () => {
        if (status === "open") {
            setStatus("close");
            if (slide === "right") {
                setSlide("left");
                setMobileNavActive("setNavBtnGrpII");
            } else {
                setSlide("right");
                setMobileNavActive("navBtnGrp");
            }
        } else {
            setStatus("open");
            setMobileNavActive("setNavBtnGrp");
        }
    }

    return (
        <div className={classes.root}>
            <AppBar className={classes[navBackgroundRef.current]}>
                <Toolbar style={{padding: "0px", width: "100vw"}}>
                    <Typography className={classes.title}>

                        <div color="inherit">
                            <Logo/>
                        </div>

                    </Typography>
                    <div className={`${classes[mobileNavRef.current]} ${classes[mobileNavBackgroundRef.current]}`}>

                        <Button color="inherit" className={classes[navBtnRef.current]}
                                onClick={handleClick}>Add a new pet</Button>

                        {/*<Button color="inherit" className={classes[navBtnRef.current]} onClick={handleClick}>Manage Pets</Button>*/}
                    </div>
                    {/*<div>*/}
                    {/*<i className={classes.navIconClick ? <MenuIcon/> : <CloseIcon/>}/>*/}
                    <Button color="inherit" className={`${classes[mobileMenuBtnRef.current]} ${"menuButton"}`}
                            onClick={() => handleClick()} /*onClick={() => handleClick()}*/ >
                        <div className={`${"BurgerMenu__container"}`} role="button">
                            <i className={`${status} ${classes[mobileMenuLinesRef.current]}`}/>
                            <i className={`${status} ${classes[mobileMenuLinesRef.current]}`}/>
                            <i className={`${status} ${classes[mobileMenuLinesRef.current]}`}/>
                        </div>
                    </Button>
                    {/*</div>*/}
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar;