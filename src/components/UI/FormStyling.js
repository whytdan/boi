import { TextField, withStyles } from "@material-ui/core";


export const CustomTextField = withStyles({
  root: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#707070',
        borderRadius: '10px',
        boxSizing: 'border-box',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#2653AD',
      },
    },
  },
})(TextField);