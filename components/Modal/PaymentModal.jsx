import { useState } from 'react'
import {
  Backdrop,
  Box,
  Modal,
  Fade,
  Button,
  Typography,
  TextField,
} from '@mui/material'
import { useStyles } from '../../styles/PaymentModal/paymentmodal.style'
const PaymentModal = ({ open, setOpen, handleOpen, handleClose }) => {
  const classes = useStyles()

  return (
    <div>
      <Modal
        aria-labelledby='transition-modal-title'
        aria-describedby='transition-modal-description'
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box className={classes.container}>
            <Typography variant='modalHeader'>
              Contribute to this project
            </Typography>
            <Typography variant='modalDesc' className={classes.modalDesc}>
              Your contribution will help this idea to grow and make an impact
              to the world!
            </Typography>
            <div className={classes.fieldWrapper}>
              <TextField placeholder='Enter Amount' className={classes.field} />
              <div className={classes.eth}>Eth</div>
            </div>
            <div className={classes.btnWrapper}>
              <Button
                variant='contained'
                color='button'
                className={classes.btn}
              >
                Contribute
              </Button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}

export default PaymentModal
