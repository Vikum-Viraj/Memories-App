import { makeStyles } from "@mui/material";


export default makeStyles((theme) => ({

    root: {
        '& .MuiTextField-root' : {
            margin: theme.spacing(1),
        },
    },

    form:{
        display:'flex',
        flexWrap:'wrap',
        justifycontent:'center'
    }
}))