import { useEffect, useState } from 'react'
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
import { useMoralis, useWeb3Transfer } from 'react-moralis'
import { Moralis } from 'moralis'
import { useRouter } from 'next/router'

const PaymentModal = ({ open, setOpen, handleOpen, handleClose, data }) => {
  const classes = useStyles()
  const router = useRouter()
  const [amount, setAmount] = useState(0)
  const [metamaskAddress, setMetamaskAddress] = useState('0x3aFdD22a2645222DF56357B0e34f80F91d3008F9')
  const [paid, setPaid] = useState(false)

  const { web3, enableWeb3, isWeb3Enabled, isAuthenticated } = useMoralis()

  const { fetch, error, isFetching } = useWeb3Transfer({
    amount: Moralis.Units.ETH(amount),
    receiver: metamaskAddress,
    type: 'native',
  })

  const contributeHandler = () => {
    fetch()
    setPaid(!paid)
    setAmount(0)
  }

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
              <TextField
                onChange={(e) => setAmount(e.target.value)}
                placeholder='Enter Amount'
                className={classes.field}
              />
              <div className={classes.eth}>Eth</div>
            </div>
            <div className={classes.btnWrapper}>
              {isAuthenticated ?
                !isWeb3Enabled ? (
                  <Button
                    variant='contained'
                    color='button'
                    className={classes.btn}
                    onClick={() => enableWeb3()}
                    disabled={isWeb3Enabled}
                  >
                    Connect with Metamask
                  </Button>
                ) : (
                  <Button
                    variant='contained'
                    color='button'
                    className={classes.btn}
                    onClick={contributeHandler}
                    disabled={isFetching}
                  >
                    Contribute
                  </Button>
                ) :
                <Button
                  variant='contained'
                  color='button'
                  className={classes.btn}
                  onClick={() => router.push("/login")}
                >
                  Sign In To Contribute
                </Button>
              }
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}

export default PaymentModal
