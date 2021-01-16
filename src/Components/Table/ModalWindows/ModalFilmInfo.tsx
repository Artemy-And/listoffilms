import React from "react";
import Modal from "react-modal";
import styles from "../../Header/Header.module.css";
import Grid from "@material-ui/core/Grid/Grid";
import {Button, createStyles, Theme} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";


const customStyles = {
    content: {
        width: '350px',
        height: '420px',
        display: 'flex',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },

};
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(150),
                width: '25ch',
                display: 'flex'
            },
        },
        buttons: {
            margin: theme.spacing(1),
             width: "100%",
            marginTop: "4.5rem",



        }
    }),
);

type ModalNewContactPropsType = {

    setShowAdditionalInfo: (value: boolean) => void
    infoAboutFilm: any
    showAdditionalInfo: boolean
}

export const ModalFilmInfo = (props: ModalNewContactPropsType) => {

    const classes = useStyles();
    return (
        <Modal
            isOpen={props.showAdditionalInfo}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <div className={styles.info}>
                <Grid container justify="center">
                    <Grid item xs={8}>
                        <div>
                            <b>Description of film:</b> <p>{props.infoAboutFilm}</p>
                        </div>
                        <Button
                            onClick={() => {
                                props.setShowAdditionalInfo(false)
                            }}
                            className={classes.buttons} variant={'contained'} color={'secondary'}>Назад</Button>


                    </Grid>
                </Grid>

            </div>
        </Modal>
    )
}